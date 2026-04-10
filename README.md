# Frogitude

Personal portfolio and freelance showcase site for **Frogitude** (Fred Newton Akdogan) — Unity Game & XR Developer.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (Pages Router) |
| Language | TypeScript + JavaScript |
| Styles | Tailwind CSS + PostCSS |
| Animation | GSAP (ScrollTrigger) · Motion (motion/react) |
| State | React Context (theme + language de/en) |
| AI Chat | Cloudflare Workers AI (`@cf/meta/llama-*`) |
| Deploy | Cloudflare Pages |

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production build

```bash
npm run build
```

Outputs a static export ready for Cloudflare Pages.

### Start production server locally

```bash
npm run build
npm run start
```

## Project Structure

```
frogitude/
├── src/
│   ├── pages/              # Next.js pages (_app, index, impressum, …)
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, About, Stats, …)
│   │   ├── layout/         # Header
│   │   ├── effects/        # AnimatedBackground, ClickBurst, ScrollWaves
│   │   ├── ui/             # Button, Magnetic, PlayPauseMorph
│   │   ├── AppContext.js   # Global state provider
│   │   ├── content.js      # Bilingual content (de/en)
│   │   ├── ChatWidget.tsx  # AI chat widget
│   │   └── GitContributions.tsx
│   ├── lib/                # Shared helpers (gsap, tilt, hooks, basePath)
│   └── styles/             # globals.css (Tailwind base + design tokens)
├── functions/
│   ├── api/                # Cloudflare Functions (chat, github-contributions)
│   └── ai/                 # AI knowledge base
├── public/                 # Static assets (images, sounds)
├── DESIGN.md               # Design system reference
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build (static export) |
| `npm run start` | Start production server on port 3000 |
| `npm run pages` | Build with `/frogitude` base path |

## Design System

See [DESIGN.md](DESIGN.md) for the full design token reference — colours, typography, glassmorphism, and component patterns.

Both light and dark themes are supported via `data-theme` on `<html>` and `prefers-color-scheme`.

## Deploy

Cloudflare Pages deploys automatically on push to `main` via GitHub Actions (`.github/workflows/cloudflare-pages.yml`).

## License

See [LICENSE](LICENSE).
