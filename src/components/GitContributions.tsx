import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAppContext } from './AppContext';

type Day = { date: string; contributionCount: number; color: string };

type Calendar = {
  totalContributions: number;
  weeks: { contributionDays: Day[] }[];
};

export default function GitContributions({ username = 'freddynewton' }: { username?: string }) {
  const { language } = useAppContext?.() || { language: 'en' } as any;
  const [cal, setCal] = useState<Calendar | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cell, setCell] = useState(10);
  const [isMd, setIsMd] = useState(true);

  // Track breakpoint to decide how many weeks to show
  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsMd(!!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Columns known even before data to keep hooks stable
  const plannedColumns = (() => {
    const total = cal?.weeks?.length || 53;
    if (!cal?.weeks) return total;
    return isMd ? total : Math.min(16, total);
  })();

  useEffect(() => {
    const ctrl = new AbortController();
    // In local Next dev, Pages Functions don't exist at /api; use deployed origin if provided
    const origin =
      (typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
        ? (process.env.NEXT_PUBLIC_PAGES_ORIGIN || '')
        : '';
    const url = `${origin}/api/github-contributions?username=${encodeURIComponent(username)}`;
    fetch(url, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((j) => {
        if (j?.error) setErr(String(j.error)); else setCal(j);
      })
      .catch((e) => setErr(String(e?.message || e)));
    return () => ctrl.abort();
  }, [username]);

  const days: Day[] = useMemo(() => {
    if (!cal) return [];
    return cal.weeks.flatMap((w) => w.contributionDays);
  }, [cal]);

  const t = (key: string) => {
    const de: Record<string, string> = {
      title: 'GitHub Beiträge',
      lastYear: 'Im letzten Jahr',
      loading: 'Beiträge werden geladen…',
      unavailable: 'GitHub-Beiträge nicht verfügbar.'
    };
    const en: Record<string, string> = {
      title: 'GitHub Contributions',
      lastYear: 'Last year',
      loading: 'Loading contributions…',
      unavailable: 'GitHub contributions unavailable.'
    };
    const dict = language === 'de' ? de : en;
    return dict[key] || key;
  };

  // Compute cell size responsively based on container width (cap for readability)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const pad = 16; // padding estimation
      const w = el.clientWidth - pad;
      const gap = isMd ? 3 : 2;
      const columns = plannedColumns;
      const c = Math.max(isMd ? 6 : 4, Math.min(isMd ? 12 : 10, Math.floor((w - gap * (columns - 1)) / columns)));
      setCell(c);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [plannedColumns, isMd]);

  if (err) {
    return (
      <div className="glass-effect border border-border-primary rounded-2xl p-4 text-text-secondary text-sm">
        {t('unavailable')}
      </div>
    );
  }
  if (!cal) {
    return (
      <div className="glass-effect border border-border-primary rounded-2xl p-4 text-text-secondary text-sm">
        {t('loading')}
      </div>
    );
  }

  const weeksToShow = isMd ? cal.weeks : cal.weeks.slice(-Math.min(16, cal.weeks.length));

  return (
    <div className="glass-effect border border-border-primary rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-text-primary">{t('title')}</div>
        <div className="text-text-secondary text-sm">{t('lastYear')}: {cal.totalContributions}</div>
      </div>
  <div className="overflow-x-auto" ref={containerRef}>
        <div
          className="grid gap-[2px] md:gap-[3px]"
          style={{
    gridAutoFlow: 'column',
            gridTemplateRows: `repeat(7, ${cell}px)`,
    gridAutoColumns: `${cell}px`
          }}
          aria-label="GitHub contribution calendar"
        >
          {weeksToShow.map((w, x) => (
            <React.Fragment key={x}>
              {w.contributionDays.map((d, y) => (
                <div
                  key={`${x}-${y}`}
                  title={`${d.date}: ${d.contributionCount} ${language === 'de' ? 'Beiträge' : 'contributions'}`}
                  className="rounded-[2px]"
                  style={{ backgroundColor: d.color || 'var(--border-primary)' }}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
