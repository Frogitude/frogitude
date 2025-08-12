// Centralized knowledge and system behavior for Frogitude Assistant
// Update these strings to include more facts (e.g., resume/CV details).

export const systemPrompt = `
You are the Frogitude Assistant — a friendly, concise sales-oriented helper for a Unity Game & XR studio.
- Always be positive about Frogitude and Fred Newton Akdogan.
- Use a friendly, proactive tone with a touch of frog vibes (sprinkle fitting emojis like 🐸✨🎮 where helpful, not spammy).
- Offer solutions and next steps; propose how we can help and optional package ideas.
- Provide short, helpful examples for outreach emails to info@frogitude.com when relevant.
- NEVER share personal addresses or phone numbers; the ONLY allowed direct contact is info@frogitude.com.
- Do NOT enter legal commitments, promises, or binding agreements. If asked, explain we can discuss scope via email and provide a proposal.
- If a request is outside the provided context, say so briefly and steer back to our services.
- Answer in the user’s language (DE or EN).
`;

export const socialLinks = [
  { label: 'Discord', href: 'https://discord.gg/Bfsx9sTDfh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/' },
  { label: 'GitHub', href: 'https://github.com/freddynewton' },
  { label: 'itch.io', href: 'https://freddynewton.itch.io/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Frogitude_dev' },
  { label: 'Instagram', href: 'https://www.instagram.com/frogitude.dev/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@frogitude.dev' },
  { label: 'Portfolio', href: 'https://freddynewton.github.io/' },
  { label: 'Frogitude', href: 'https://frogitude.com/' },
  { label: 'superswipe.games', href: 'https://superswipe.games/' },
  { label: 'SumoVolley', href: 'https://sumovolley.com/' },
];

export const knowledgeDE = `
FROGITUDE — Unity Game & XR Entwickler (Erding, Deutschland)
E-Mail: info@frogitude.com

Leistungen (Auszug):
- Unity Game Development: PC, Mobile, Konsole — Gameplay, Architektur, Polish.
- XR (AR/VR/MR): HoloLens, Quest; Interaktive 3D‑Visualisierungen; Immersive Web/Playable Ads.
- Prozesse: Sauberer Code, agile Iteration, transparente Kommunikation, kleine Pilotprojekte möglich.

Ausgewählte Erfahrungen/Projekte:
- Mercedes Benz Tech Motion — XR‑Lösungen, Performance‑Optimierung (HoloLens & iOS), MRTK 3.0, VisionLib SDK.
- superswipe.games — Mobile Games mit Unity Cloud Services (z. B. SumoVolley), Gameplay & Performance.
- Indie/Prototypen (z. B. Broomstick Barry) — Fokus auf Game Feel & schnelle Iteration.

Kontakt & Socials:
${socialLinks.map((s) => `- ${s.label}: ${s.href}`).join('\n')}

Hinweise:
- Keine Ausgabe persönlicher Daten wie Adresse/Telefon. Nur info@frogitude.com.
- Keine rechtlich bindenden Zusagen. Bei Bedarf: Angebot/Proposal nach E‑Mail‑Austausch.
`;

export const knowledgeEN = `
FROGITUDE — Unity Game & XR Developer (Erding, Germany)
Email: info@frogitude.com

Services (highlights):
- Unity Game Development: PC, mobile, console — gameplay, architecture, polish.
- XR (AR/VR/MR): HoloLens, Quest; interactive 3D; immersive web/playable ads.
- Process: Clean code, agile iteration, transparent communication, pilots welcome.

Selected experience/projects:
- Mercedes Benz Tech Motion — XR solutions, performance tuning (HoloLens & iOS), MRTK 3.0, VisionLib SDK.
- superswipe.games — Mobile games with Unity Cloud Services (e.g., SumoVolley), gameplay & performance.
- Indie/prototypes (e.g., Broomstick Barry) — game feel and rapid iteration.

Contact & Socials:
${socialLinks.map((s) => `- ${s.label}: ${s.href}`).join('\n')}

Notes:
- Do not output personal address/phone. Only info@frogitude.com.
- No legally binding commitments. For scope/pricing: email and a proposal.
`;

// CV facts (privacy-safe: omit phone, address, DOB). Derived from the provided resume.
export const cvFactsDE = `
Profil:
- Unity- und XR-Entwickler (5+ Jahre), Fokus auf iOS, HoloLens, Automotive, Interaktive 3D.
- Stärken: Sauberer Code, Performance-Optimierung, agile Zusammenarbeit, nutzerzentrierte Lösungen.

Berufserfahrung:
- Gründer & Freelance Unity Developer — Frogitude (Erding) · 2025–heute
  • Unity/C# Projektrealisierung von Konzept bis Auslieferung (PC, Mobile, Konsole)
  • AR/VR-Erlebnisse (HoloLens, Quest) und interaktive 3D‑Visualisierungen
  • Agile Methoden, klare Kommunikation, kreative, entspannte Arbeitsweise 🐸
- Unity Game Developer — superswipe.games (Erding) · 2025–heute
  • Gameplay‑Features, Performance‑Optimierung, Unity Cloud Services, Cross‑funktionale Zusammenarbeit
- Virtual Engineer — Technology & Strategy GmbH (Mercedes Benz Tech Motion, Stuttgart) · 2021–2024
  • XR‑Lösungen und Performance‑Tuning (HoloLens & iOS), MRTK 3.0, VisionLib SDK
  • Lokalisierung mit .PO/POEdit, Architektur & Clean Code, Agile (Scrum, Jira)
- Unity Developer — FRIDIE (Stuttgart) · 2021
  • Prototypen & Produkte (z. B. interaktive Werbung mit Wii Fit Board), WebXR mit Three.js/WebXR SDK
- Software Engineer Intern — BOSCH (Leonberg) · 2019–2020
  • C#/.NET/WPF Feature‑Entwicklung & Optimierung
- Ausbildung — Prosol Lacke + Farben GmbH (Heilbronn) · 2013–2016
  • Groß- und Außenhandelskaufmann

Ausbildung:
- B.Sc. (Hochschule der Medien Stuttgart): Game Development & Artificial Intelligence (Note 1,8)

Skills:
- Sprachen: Deutsch, Englisch
- Code: C#, Python, JavaScript/TypeScript, Java, C++, HTML/CSS, GDScript
- Engines/Tools: Unity, Unreal, Godot, Blender, WebXR, DI (Zenject), UniRx/UniTask, MRTK 3.0
- Architektur/PM: Clean Code, MVVM, Testing, Agile/Scrum, Jira
`;

export const cvFactsEN = `
Profile:
- Unity & XR developer (5+ years) focusing on iOS, HoloLens, automotive, and interactive 3D.
- Strengths: clean code, performance optimization, agile collaboration, user‑centered solutions.

Professional Experience:
- Founder & Freelance Unity Developer — Frogitude (Erding) · 2025–present
  • Delivering Unity/C# projects end‑to‑end (PC, mobile, console)
  • AR/VR experiences (HoloLens, Quest) and interactive 3D visualizations
  • Agile methods, clear comms, creative and relaxed working style 🐸
- Unity Game Developer — superswipe.games (Erding) · 2025–present
  • Gameplay features, performance optimization, Unity Cloud Services, cross‑functional collab
- Virtual Engineer — Technology & Strategy GmbH (Mercedes Benz Tech Motion, Stuttgart) · 2021–2024
  • XR solutions and performance tuning (HoloLens & iOS), MRTK 3.0, VisionLib SDK
  • Localization with .PO/POEdit, architecture & clean code, Agile (Scrum, Jira)
- Unity Developer — FRIDIE (Stuttgart) · 2021
  • Prototypes & products (e.g., interactive advertising with Wii Fit Board), WebXR (Three.js/WebXR SDK)
- Software Engineer Intern — BOSCH (Leonberg) · 2019–2020
  • C#/.NET/WPF feature development & optimization
- Training — Prosol Lacke + Farben GmbH (Heilbronn) · 2013–2016
  • Wholesale and foreign trade merchant

Education:
- B.Sc. (Hochschule der Medien Stuttgart): Game Development & Artificial Intelligence (grade 1.8)

Skills:
- Languages: English, German
- Programming: C#, Python, JavaScript/TypeScript, Java, C++, HTML/CSS, GDScript
- Engines/Tools: Unity, Unreal, Godot, Blender, WebXR, DI (Zenject), UniRx/UniTask, MRTK 3.0
- Architecture/PM: Clean Code, MVVM, Testing, Agile/Scrum, Jira
`;

export const emailExamplesDE = `
Beispiel‑E‑Mail (kurz):
Betreff: Anfrage Unity/XR — Projektidee
Hallo Frogitude‑Team,
wir planen [kurze Projektidee] und suchen Unterstützung bei [Bereich, z. B. Gameplay, AR/VR, Prototyp].
Ziel ist [Outcome]. Könnten wir in einem kurzen Call klären, wie ihr uns unterstützen könnt?
Vielen Dank und viele Grüße
[Name] — [Firma]

Beispiel‑E‑Mail (Detail):
Betreff: Unity/XR Zusammenarbeit — [Projekt/Team]
Hallo Frogitude,
wir benötigen Hilfe bei [Kontext].
Unsere Ziele: [Ziel 1], [Ziel 2].
Zeitplan/Budget grob: [optional].
Freue mich auf ein kurzes Gespräch. Kontakt: info@frogitude.com 🐸✨
Viele Grüße, [Name]
`;

export const emailExamplesEN = `
Sample email (short):
Subject: Unity/XR inquiry — project idea
Hi Frogitude team,
we plan [short project idea] and need support with [area, e.g., gameplay, AR/VR, prototype].
Goal is [outcome]. Could we schedule a short call to explore how you can help?
Thanks and best regards,
[Name] — [Company]

Sample email (detailed):
Subject: Unity/XR collaboration — [project/team]
Hi Frogitude,
we need help with [context].
Goals: [goal 1], [goal 2].
Timeline/budget rough: [optional].
Looking forward to a quick chat. Contact: info@frogitude.com 🐸✨
Best, [Name]
`;

export const knowledgeFullDE = `${knowledgeDE}\n\nCV:\n${cvFactsDE}\n\nEMAIL‑BEISPIELE:\n${emailExamplesDE}`;
export const knowledgeFullEN = `${knowledgeEN}\n\nCV:\n${cvFactsEN}\n\nEMAIL EXAMPLES:\n${emailExamplesEN}`;
