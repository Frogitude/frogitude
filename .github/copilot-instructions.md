# Frogitude — Agent Instructions

## Project identity

Personal portfolio and freelance showcase site for Frogitude.
Stack: **Next.js 14 (Pages Router)** · **TypeScript** · **Tailwind CSS** · **GSAP** · **Cloudflare Pages + Workers AI**.

---

## Tech stack

| Layer           | Tool                                           | Notes                                          |
| --------------- | ---------------------------------------------- | ---------------------------------------------- |
| Framework       | Next.js 14 (Pages Router)                      | `src/pages/`, no App Router                    |
| Language        | TypeScript + JS                                | `.tsx` for pages, `.js` for legacy components  |
| Styles          | Tailwind CSS + PostCSS                         | `tailwind.config.js`, `globals.css`            |
| Animation       | GSAP (via `src/lib/gsap.ts`)                   | import from the lib wrapper, not directly      |
| Tilt effect     | `src/lib/tilt.ts`                              | custom hook                                    |
| State           | React Context (`src/components/AppContext.js`) | theme + language (de/en)                       |
| Routing helpers | `src/lib/basePath.ts`                          | always use for internal hrefs                  |
| AI chat         | `functions/api/chat.ts`                        | Cloudflare Workers AI, `@cf/meta/llama-*`      |
| GitHub data     | `functions/api/github-contributions.ts`        | Cloudflare Function                            |
| Deploy          | Cloudflare Pages                               | CI in `.github/workflows/cloudflare-pages.yml` |

---

## Repository layout

```
frogitude/
├── src/
│   ├── pages/              # Next.js pages (_app.tsx, index.tsx, …)
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, About, Stats, …)
│   │   ├── layout/         # Header
│   │   ├── effects/        # AnimatedBackground, ClickBurst, ScrollWaves
│   │   ├── ui/             # Button, Magnetic, PlayPauseMorph
│   │   ├── AppContext.js   # Global state provider
│   │   ├── content.js      # Bilingual content data
│   │   ├── ChatWidget.tsx  # AI chat widget
│   │   └── GitContributions.tsx
│   ├── lib/                # Shared helpers (gsap, tilt, hooks, basePath, years)
│   └── styles/             # globals.css (Tailwind base + custom vars)
├── functions/
│   ├── api/                # Cloudflare Functions (chat, github-contributions)
│   └── ai/                 # AI knowledge base (knowledge.ts)
├── public/                 # Static assets
├── DESIGN.md               # Design system (for AI agents)
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── .github/workflows/      # cloudflare-pages.yml
```

---

## Coding conventions

- **TypeScript** for all new files; use `.tsx` for JSX.
- **Tailwind first** — utility classes only; avoid inline `style={}` unless dynamic values are needed.
- **No direct GSAP import** — always `import gsap from '@/lib/gsap'`.
- **basePath** — always wrap internal links and asset paths with helpers from `src/lib/basePath.ts`.
- **Cloudflare Functions** live in `functions/` and are separate from Next.js API routes.
- Keep components pure and side-effect-free; put effects in custom hooks (`src/lib/hooks.ts`).
- No `console.log` left in committed code; use `console.error` for errors only.

---

## Design system

Read `DESIGN.md` at the project root for the full design token reference. Key rules:

- Use CSS custom properties via Tailwind mappings (`bg-bg-primary`, `text-accent-lime`, etc.)
- Use `.glass-effect` for all card-like surfaces
- Use `.btn-gradient` for primary CTAs
- Use `.text-gradient` for brand-significant headings only
- Never hard-code colour hex values — always use the token system
- Test both `data-theme="light"` and `data-theme="dark"` before shipping

When working on UI/design tasks, also read the design-system skill at `.github/skills/design-system/SKILL.md`.

---

## Build & deploy

```bash
npm run dev        # local dev (Next.js on port 3000)
npm run build      # production build (static export)
```

Cloudflare Pages deploys automatically on push to `main` via `.github/workflows/cloudflare-pages.yml`.
Workers AI bindings are configured in the Cloudflare dashboard — do **not** commit API keys.

---

## AI chat function

- Model: `@cf/meta/llama-3-8b-instruct` (or current binding in `functions/api/chat.ts`).
- Knowledge base: `functions/ai/knowledge.ts` — edit this to update what the AI knows about the site.
- The chat endpoint is `POST /api/chat`; keep it stateless (no session storage).

---

## Component naming

| Folder      | Pattern                   | Example                    |
| ----------- | ------------------------- | -------------------------- |
| `sections/` | Page sections, PascalCase | `Hero.js`, `Experience.js` |
| `layout/`   | Structural components     | `Header.js`                |
| `effects/`  | Visual/animation effects  | `AnimatedBackground.js`    |
| `ui/`       | Reusable UI primitives    | `Button.js`, `Magnetic.js` |

---

## Agent workflow (VS Code 1.115+)

### Background dev server

Start the dev server with `mode=async` so it runs in the background.
Use **`send_to_terminal`** to send commands (e.g. restart, Ctrl+C) to the running dev server terminal without killing it.
Use **`get_terminal_output`** to check build output or errors.

### Background terminal notifications

The workspace enables `chat.tools.terminal.backgroundNotifications`, so the agent is **automatically notified** when a background terminal command finishes or needs input — no need to poll with `get_terminal_output`.

### Integrated browser

Use the integrated browser tools to visually verify UI changes after editing components.
Agents should avoid opening duplicate tabs — reuse an existing tab on the same host.

### Typical task flow

1. Start the dev server in async mode (or use the "Dev server" task).
2. Make code changes.
3. The agent receives automatic notifications for build/compile results.
4. Use `send_to_terminal` if the dev server needs input or restart.
5. Use the integrated browser to verify visual output.
6. Run `npm run build` to confirm no build breakage before committing.

---

## Hard rules

- Never commit secrets or API keys.
- Never use the App Router — this project uses Pages Router only.
- Never import GSAP directly; always use `@/lib/gsap`.
- Never break the Cloudflare Pages build — test with `npm run build` before any PR.
- Follow the design-system skill checklist before shipping UI changes.
