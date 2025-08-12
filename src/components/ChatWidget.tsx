import React, { useMemo, useRef, useState } from 'react';

type Role = 'user' | 'assistant';
export type Msg = { role: Role; content: string };

type ApiMsg = { role: 'system' | 'user' | 'assistant'; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'assistant', content: 'Hi! Frag mich gern etwas zu Frogitude, Unity/XR und unseren Leistungen.' },
  ]);
  const listRef = useRef<HTMLDivElement | null>(null);

  const placeholder = useMemo(
    () => 'Frag etwas zu Projekten, Leistungen oder Zusammenarbeit…',
    []
  );

  async function send() {
    const text = input.trim();
    if (!text) return;
    const next: Msg[] = [...msgs, { role: 'user', content: text } as Msg];
    setMsgs(next);
    setInput('');
    setLoading(true);
    try {
      const payload: { messages: ApiMsg[] } = {
        messages: next.map((m) => ({ role: m.role, content: m.content })),
      };
      const res = await fetch('/api/chat', {
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
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl"
        >
          Chat
        </button>
      ) : (
        <div className="w-[90vw] max-w-sm h-[65vh] max-h-[520px] glass-effect border border-border-primary rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-bg-secondary/60 flex items-center justify-between">
            <div className="font-semibold text-text-primary">Frogitude Assistant</div>
            <button onClick={() => setOpen(false)} className="text-text-secondary hover:text-text-primary">✕</button>
          </div>
          <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={
                  'inline-block px-3 py-2 rounded-xl text-sm md:text-base ' +
                  (m.role === 'user'
                    ? 'bg-accent-lime text-black'
                    : 'glass-effect border border-border-primary text-text-primary')
                }>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-block px-3 py-2 rounded-xl text-sm glass-effect border border-border-primary text-text-secondary">
                  Tippe…
                </div>
              </div>
            )}
          </div>
          <div className="p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder={placeholder}
              className="flex-1 rounded-xl border border-border-primary bg-transparent px-3 py-2 text-text-primary outline-none"
            />
            <button
              onClick={send}
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white px-4 py-2 font-semibold disabled:opacity-60"
            >
              Senden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
