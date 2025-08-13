import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAppContext } from './AppContext';

type Role = 'user' | 'assistant';
export type Msg = { role: Role; content: string };

type ApiMsg = { role: 'system' | 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const { language } = useAppContext();
  const texts = {
    de: {
      greet: 'Hi! Frag mich gern etwas zu Frogitude, Unity/XR und unseren Leistungen. 🐸✨',
      placeholder: 'Frag etwas zu Projekten, Leistungen oder Zusammenarbeit…',
      typing: 'Tippe…',
      send: 'Senden',
      title: 'Frogitude Assistant',
    },
    en: {
      greet: 'Hi! Ask me anything about Frogitude, Unity/XR, and our services. 🐸✨',
      placeholder: 'Ask about projects, services, or collaboration…',
      typing: 'Typing…',
      send: 'Send',
      title: 'Frogitude Assistant',
    },
  } as const;
  const t = texts[(language as 'de' | 'en') || 'de'];
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<Msg[]>([{ role: 'assistant', content: t.greet }]);
  const listRef = useRef<HTMLDivElement | null>(null);
  const formatContent = (text: string) => {
    // Normalize and replace simple markdown bullets with a typographic bullet
    return text
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/^\s*[\*-]\s+/gm, '• ');
  };

  const placeholder = useMemo(() => t.placeholder, [t.placeholder]);

  // If language changes and the user hasn’t started chatting yet, update the greeting.
  useEffect(() => {
    const onlyGreeting = msgs.length === 1 && msgs[0].role === 'assistant';
    if (onlyGreeting && msgs[0].content !== t.greet) {
      setMsgs([{ role: 'assistant', content: t.greet }]);
    }
  }, [language]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    const next: Msg[] = [...msgs, { role: 'user', content: text } as Msg];
    setMsgs(next);
    setInput('');
    setLoading(true);
    try {
  // Use deployed Pages Functions origin in local dev, so /api/chat resolves
  const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  const base = isLocal ? (process.env.NEXT_PUBLIC_PAGES_ORIGIN || '') : '';
      const payload: { messages: ApiMsg[] } = {
        messages: next.map((m) => ({ role: m.role, content: m.content })),
      };
  const res = await fetch(`${base}/api/chat`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      const answer = (data?.response as string) || 'Sorry, keine Antwort verfügbar.';
      setMsgs((m) => [...m, { role: 'assistant', content: answer } as Msg]);
    } catch (e) {
      setMsgs((m) => [...m, { role: 'assistant', content: 'Fehler beim Abrufen der Antwort.' } as Msg]);
    } finally {
      setLoading(false);
      queueMicrotask(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
      });
    }
  }

  return (
  <div className="fixed bottom-4 right-4 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
      className="rounded-full btn-gradient px-4 py-3 font-semibold shadow-lg hover:shadow-xl inline-flex items-center gap-2"
      style={{ touchAction: 'manipulation' }}
      aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 12v.01"/>
            <path d="M8 12v.01"/>
            <path d="M16 12v.01"/>
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h7"/>
            <path d="M15 3h6v6"/>
          </svg>
          {language === 'de' ? 'Chat' : 'Chat'}
        </button>
      ) : (
    <div className="w-[92vw] max-w-sm h-[65vh] max-h-[520px] glass-effect border border-border-primary rounded-2xl shadow-2xl flex flex-col overflow-hidden" role="dialog" aria-label={t.title}>
          <div className="px-4 py-3 bg-bg-secondary/60 flex items-center justify-between">
            <div className="font-semibold text-text-primary">{t.title}</div>
      <button onClick={() => setOpen(false)} className="text-text-secondary hover:text-text-primary" aria-label="Close chat" style={{ touchAction: 'manipulation' }}>✕</button>
          </div>
          <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={
                    'inline-block max-w-[85%] px-3 py-2 rounded-xl leading-relaxed text-sm md:text-base whitespace-pre-wrap ' +
                    (m.role === 'user'
                      ? 'bg-accent-lime text-black'
                      : 'glass-effect border border-border-primary text-text-primary')
                  }
                >
                  {formatContent(m.content)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-block px-3 py-2 rounded-xl text-sm glass-effect border border-border-primary text-text-secondary">
                  {t.typing}
                </div>
              </div>
            )}
          </div>
      <div className="p-3 flex gap-2" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder={placeholder}
              className="flex-1 rounded-xl border border-border-primary bg-transparent px-3 py-2 text-text-primary outline-none"
        inputMode="text"
        autoComplete="off"
        autoCorrect="on"
        spellCheck={true}
            />
            <button
              onClick={send}
              disabled={loading}
              className="rounded-xl btn-gradient px-4 py-2 font-semibold disabled:opacity-60"
        style={{ touchAction: 'manipulation' }}
            >
              {t.send}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
