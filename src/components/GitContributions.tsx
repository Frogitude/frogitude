import React, { useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`/api/github-contributions?username=${encodeURIComponent(username)}`, { signal: ctrl.signal })
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

  // 53 columns (weeks) x 7 rows (days)
  const columns = cal.weeks.length || 53;

  return (
    <div className="glass-effect border border-border-primary rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-text-primary">{t('title')}</div>
        <div className="text-text-secondary text-sm">{t('lastYear')}: {cal.totalContributions}</div>
      </div>
      <div className="overflow-x-auto">
        <div
          className="grid gap-[3px]"
          style={{
            gridAutoFlow: 'column',
            gridTemplateRows: 'repeat(7, 10px)',
            gridAutoColumns: '10px'
          }}
          aria-label="GitHub contribution calendar"
        >
          {cal.weeks.map((w, x) => (
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
