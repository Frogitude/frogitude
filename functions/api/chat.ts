// Cloudflare Pages Function: POST /api/chat
// Free via Workers AI (daily limits). Requires adding an AI binding named "AI" in your Cloudflare Pages project settings.
import { systemPrompt, knowledgeFullDE, knowledgeFullEN } from '../ai/knowledge';

export const onRequestOptions = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

const KNOWLEDGE_DE = `
Frogitude — Unity Game & XR Entwickler (Erding, Deutschland).
Leistungen: Unity Game Dev (PC, Mobile, Konsole), AR/VR (HoloLens, Quest), Interaktive 3D‑Visualisierungen, Immersive Web/Playable Ads.
Arbeitsweise: Sauberer Code, agile Methoden, transparente Zusammenarbeit, Pilotprojekte möglich.
Erfahrung/Referenzen (Auszug):
- Mercedes Benz Tech Motion: XR‑Lösungen, Performance‑Optimierung (HoloLens & iOS), MRTK 3.0, VisionLib SDK.
- superswipe.games: Mobile Games mit Unity Cloud Services (SumoVolley, Performance/Gameplay).
- Indie/Prototypen (z. B. Broomstick Barry) — Fokus auf Game Feel.
Kontakt: Über die Website (Kontakt/Anfragen) oder LinkedIn/GitHub.
`;

const KNOWLEDGE_EN = `
Frogitude — Unity Game & XR developer (Erding, Germany).
Services: Unity game dev (PC, mobile, console), AR/VR (HoloLens, Quest), interactive 3D, immersive web/playable ads.
Approach: Clean code, agile delivery, transparent collaboration, pilots welcome.
Experience (highlights):
- Mercedes Benz Tech Motion: XR solutions, performance tuning (HoloLens & iOS), MRTK 3.0, VisionLib SDK.
- superswipe.games: Mobile games with Unity Cloud Services (SumoVolley, gameplay/perf).
- Indie/prototypes (e.g., Broomstick Barry) — game feel focus.
Contact: via site (contact/hire) or LinkedIn/GitHub.
`;

// System prompt now lives in functions/ai/knowledge.ts

export const onRequestPost = async (context: any) => {
  const { request, env } = context;
  try {
    const body = await request.json().catch(() => ({}));
    const messages = Array.isArray(body?.messages) ? body.messages : [];
    const last = messages[messages.length - 1]?.content || '';
    const langIsGerman = /[äöüÄÖÜß]|\b(der|die|das|und|oder|mit|für|über|Projekt|Anfrage)\b/i.test(last);
  const contextText = langIsGerman ? knowledgeFullDE : knowledgeFullEN;

    if (!env || !env.AI) {
      return new Response(JSON.stringify({ error: 'Cloudflare Workers AI binding "AI" is missing. Add it in Pages → Settings → Functions → Bindings.' }), {
        status: 500,
        headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

  // Prefer a widely available model; change here if you want a smaller/newer one.
  // ChatGPT‑5 or Grok are not available via Workers AI. To use them, integrate those vendors directly.
  const model = env.MODEL || '@cf/meta/llama-3-8b-instruct';
    const resp = await env.AI.run(model, {
      messages: [
    { role: 'system', content: systemPrompt + '\n\nCONTEXT:\n' + contextText },
        ...messages.slice(-12),
      ],
    });
    const text = resp?.response ?? '';
    return new Response(JSON.stringify({ response: text }), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Bad Request' }), {
      status: 400,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};
