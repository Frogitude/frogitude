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
  const [gap, setGap] = useState(3);
  // No breakpoint slicing: always show the full past year

  // Columns known even before data to keep hooks stable
  const plannedColumns = cal?.weeks?.length || 53;

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
      const w = el.getBoundingClientRect().width; // precise content width
      const columns = plannedColumns || 53;
      // Dynamic gap based on density; smaller gap on very tight widths
      const density = w / columns;
      const g = density < 6 ? 1 : (w < 420 ? 2 : 3);
      const totalGap = g * (columns - 1);
      // Safety -1 to avoid rounding overflow
      const c = Math.max(2, Math.min(12, Math.floor((w - totalGap - 1) / columns)));
      setGap(g);
      setCell(c);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [plannedColumns]);

  // No horizontal scroll: we fit the full heatmap into available width by resizing cells

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

  const weeksToShow = cal.weeks;

  return (
    <div className="glass-effect border border-border-primary rounded-2xl p-3 sm:p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-text-primary text-sm sm:text-base">{t('title')}</div>
        <div className="text-text-secondary text-xs sm:text-sm">{t('lastYear')}: {cal.totalContributions}</div>
      </div>
  <div className="w-full min-w-0" ref={containerRef}>
        <div
          className="grid w-full"
          style={{
            gridAutoFlow: 'column',
            gridTemplateRows: `repeat(7, ${cell}px)`,
            gridAutoColumns: `${cell}px`,
            columnGap: `${gap}px`,
            rowGap: `${gap}px`,
          }}
          aria-label="GitHub contribution calendar"
        >
          {weeksToShow.map((w, x) => (
            <React.Fragment key={x}>
              {w.contributionDays.map((d, y) => {
                const bg = d.color && d.color !== '#ebedf0' ? d.color : 'var(--border-primary)';
                const outline = d.contributionCount === 0 ? '1px solid var(--border-primary)' : 'none';
                return (
                  <div
                    key={`${x}-${y}`}
                    title={`${d.date}: ${d.contributionCount} ${language === 'de' ? 'Beiträge' : 'contributions'}`}
                    className="rounded-[2px]"
                    style={{ backgroundColor: bg, border: outline }}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
