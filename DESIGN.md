# Design System — Frogitude

> Based on VoltAgent design tokens (via `npx getdesign@latest add voltagent`), customised to match the Frogitude brand palette and glassmorphism aesthetic.

## 1. Visual Theme & Atmosphere

Frogitude's interface is a cinematic dark-mode portfolio for a Unity/XR creative studio — deep slate-blue surfaces (`#0f172a`) punctuated by dual-accent energy: **lime green** (`#84cc16`) and **emerald** (`#34d399`). The result feels like a game-dev IDE merged with a premium creative agency: dark, animated, and alive with frog-green personality.

Glass-effect (glassmorphism) cards float over animated canvas backgrounds with subtle glow halos. GSAP scroll-driven animations and Framer Motion micro-interactions reinforce the "interactive studio" identity. The site is bilingual (DE/EN), toggleable at runtime.

**Key Characteristics:**
- Slate-blue dark canvas (`#0f172a`) with softer secondary surface (`#1e293b`) — warmer than pure black
- Dual-accent identity: Lime (`#84cc16`) for energy, Emerald (`#34d399`) for trust and CTAs
- Glassmorphism: translucent cards with `backdrop-filter: blur(10px)` and `color-mix()` tinted borders
- Gradient text (emerald → lime at 90°) for the brand logotype
- System font stack for body; no custom web fonts — maximum load speed
- Global hover lift (`translateY(-2px)`) + lime glow (`box-shadow`) on every interactive element
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## 2. Color Palette & Roles

### Light Mode
| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#f0fdf4` | Page canvas — faint green-white |
| `--bg-secondary` | `#dcfce7` | Card / section surfaces |
| `--text-primary` | `#1f2937` | Headings and body |
| `--text-secondary` | `#4b5563` | Captions, metadata |
| `--border-primary` | `#d1d5db` | Card borders, dividers |
| `--accent-lime` | `#65a30d` | Primary accent (darker lime for contrast) |
| `--accent-emerald` | `#059669` | CTA buttons, links |
| `--color-glow` | `rgba(132,204,22,0.15)` | Hover glow halo |
| `--glass-bg` | `rgba(255,255,255,0.5)` | Glassmorphism fill |
| `--glass-border` | `rgba(0,0,0,0.1)` | Glassmorphism border |

### Dark Mode (default visual identity)
| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#0f172a` | Page canvas — deep slate blue |
| `--bg-secondary` | `#1e293b` | Card / section surfaces |
| `--text-primary` | `#f1f5f9` | Headings and body |
| `--text-secondary` | `#94a3b8` | Captions, metadata |
| `--border-primary` | `#334155` | Card borders, dividers |
| `--accent-lime` | `#84cc16` | Primary accent — high-energy lime |
| `--accent-emerald` | `#34d399` | CTA buttons, links, secondary accent |
| `--color-glow` | `rgba(132,204,22,0.1)` | Hover glow halo |
| `--glass-bg` | `rgba(30,41,59,0.5)` | Glassmorphism fill |
| `--glass-border` | `rgba(255,255,255,0.1)` | Glassmorphism border |

### Gradient System
- **Text Gradient** (`.text-gradient`): `linear-gradient(90deg, var(--accent-emerald), var(--accent-lime))` — used for the FROGITUDE logotype and section highlights
- **Button Gradient** (`.btn-gradient`): `linear-gradient(90deg, #059669 0%, #65a30d 50%, #84cc16 100%)` with white text — primary CTA style
- **Hover Glow**: `box-shadow: 0 8px 24px var(--color-glow)` + `translateY(-2px)` lift
- **Glass hover tint**: `color-mix(in oklab, var(--glass-bg) 92%, var(--accent-emerald) 8%)`

### Semantic
| Purpose | Color | Notes |
|---------|-------|-------|
| Success | `--accent-emerald` | Re-uses brand green |
| Warning | Amber (not yet tokenised) | Reserved |
| Error | Red (not yet tokenised) | Reserved |
| Info | Teal (not yet tokenised) | Reserved |

## 3. Typography Rules

### Font Family
- **Primary**: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial` + emoji fallbacks
- **Monospace** (code blocks): browser default monospace stack

No custom web fonts are loaded. The site relies entirely on system fonts for instant rendering.

### Hierarchy (inferred from components)
| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero display | 3–4 rem | 700–800 | `.text-gradient` logotype |
| Section heading | 1.875–2.25 rem | 700 | Tailwind `text-3xl`–`text-4xl` |
| Card title | 1.25 rem | 600 | Tailwind `text-xl font-semibold` |
| Body | 1 rem | 400 | Tailwind `text-base` |
| Caption / label | 0.875 rem | 400–500 | Tailwind `text-sm` |
| Small / footer | 0.75 rem | 400 | Tailwind `text-xs` |

### Principles
- Size and weight create hierarchy; colour is used sparingly (gradient text for brand, lime for highlights)
- Body text stays at `text-base` (16 px); `text-sm` (14 px) for secondary content
- Headings use Tailwind utility classes, never inline font-size

## 4. Component Stylings

### Glass Card (`.glass-effect`)
```css
background: var(--glass-bg);                   /* translucent */
border: 1px solid var(--glass-border);
backdrop-filter: saturate(180%) blur(10px);
/* Progressive enhancement */
@supports (background: color-mix(…)) {
  background: color-mix(in oklab, var(--glass-bg) 92%, black 8%);
  border: 1px solid color-mix(in oklab, var(--glass-border) 75%, var(--accent-lime) 25%);
}
```
- Radius: `rounded-2xl` (16 px) for major panels, `rounded-xl` (12 px) for smaller cards
- Hover: emerald-tinted glass background + lime `border-color` transition

### Buttons
**Primary CTA (`.btn-gradient`)**
- Background: `linear-gradient(90deg, #059669, #65a30d, #84cc16)`
- Fallback: `#10b981`
- Text: white, `font-semibold`
- Radius: `rounded-xl` (12 px) for inline, `rounded-full` for floating actions
- Hover: `filter: brightness(0.97)` + global lift + glow

**Ghost / Outline**
- Background: transparent
- Border: `1px solid var(--border-primary)`
- Text: `var(--text-primary)`
- Hover: global lift + lime border

### Scrolled Navbar (`#navbar.scrolled`)
```css
background: rgba(15, 23, 42, 0.7);
backdrop-filter: blur(8px);
border-bottom: 1px solid var(--border-primary);
box-shadow: 0 10px 30px -10px rgba(0,0,0,0.35);
```
Forces dark-palette text variables regardless of light/dark mode for readability on the dark sticky bar.

### Chat Widget
- Panel: `glass-effect` + `border-border-primary` + `rounded-2xl`, max-w `sm`, h `65vh`
- User bubbles: `bg-accent-lime text-black`
- Assistant bubbles: `glass-effect` + border
- Input: transparent background, border-primary border, `rounded-xl`

### Global Hover Feedback
Every `<a>`, `<button>`, `.glass-effect`, `.card`, `img`, `input`:
```css
transition: transform 200ms ease, box-shadow 200ms ease, …;
:hover { transform: translateY(-2px); box-shadow: 0 8px 24px var(--color-glow); border-color: var(--accent-lime); }
```
Opt-out via `[data-no-glow]`. Images use `filter: drop-shadow()` instead of `box-shadow`.

## 5. Layout Principles

### Spacing
- Tailwind spacing scale (base 4 px): `p-3`, `p-4`, `gap-2`, `space-y-3`
- Section vertical padding: `py-16` to `py-24`
- Component gap: `gap-4` to `gap-8`

### Grid & Container
- Full-viewport width with centered `max-w-7xl` container (1280 px)
- Single-column hero → multi-column feature grids
- Responsive: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Chat widget: fixed bottom-right, `w-[92vw] max-w-sm`

### Whitespace Philosophy
- Generous vertical breathing between sections
- Dense inside glass cards (compact padding)
- Border + glass-tint separation rather than large gaps between siblings

### Border Radius Scale
| Token | Value | Use |
|-------|-------|-----|
| `rounded` | 4 px | Chips, small tags |
| `rounded-lg` | 8 px | Inline containers |
| `rounded-xl` | 12 px | Buttons, inputs, smaller cards |
| `rounded-2xl` | 16 px | Feature cards, chat panel |
| `rounded-full` | 9999 px | Floating action buttons, avatars |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page background, inline text |
| Glass | `backdrop-filter: blur(10px)` + translucent bg | Cards, nav, chat |
| Hover | `0 8px 24px var(--color-glow)` | Interactive elements on hover |
| Scrolled nav | `0 10px 30px -10px rgba(0,0,0,0.35)` | Sticky header after scroll |
| Chat panel | `shadow-2xl` (Tailwind) | Floating chat widget |

**Depth philosophy**: Glassmorphism + border colour communicate depth, not heavy shadows. The lime glow on hover is the strongest elevation signal.

## 7. Do's and Don'ts

### Do
- Use `var(--bg-primary)` / `var(--bg-secondary)` — never hard-code background colours
- Use `.glass-effect` for all card-like surfaces
- Apply `.btn-gradient` for primary CTAs; keep ghost buttons for secondary actions
- Use `.text-gradient` for brand-significant headings only (FROGITUDE logotype)
- Wrap internal links and asset paths with `src/lib/basePath.ts` helpers
- Import GSAP from `@/lib/gsap` — never directly
- Use Tailwind utility classes exclusively; avoid `style={{}}` unless dynamic values require it
- Keep the global hover lift (`translateY(-2px)` + glow) consistent across all interactive elements
- Support both DE and EN (AppContext `language` state)
- Test both light and dark themes before shipping

### Don't
- Don't use cold pure-black (`#000`) backgrounds — the palette is warm slate-blue
- Don't use `--accent-lime` as a large surface fill; it's an accent/glow colour
- Don't add new font families — the site is system-font only
- Don't bypass the global hover transition system; use `[data-no-glow]` to opt out
- Don't use `box-shadow` on images — use `filter: drop-shadow()` instead
- Don't commit `console.log`; use `console.error` for errors only
- Don't use App Router patterns — this is Pages Router only
- Don't increase border-radius beyond `rounded-2xl` (16 px) on content cards

## 8. Responsive Behavior

### Breakpoints (Tailwind defaults)
| Prefix | Min-width | Key changes |
|--------|-----------|-------------|
| (base) | 0 | Single column, `text-sm` chat bubbles |
| `sm` | 640 px | Chat widget clamps to `max-w-sm` |
| `md` | 768 px | 2-column grids, `text-base` chat bubbles |
| `lg` | 1024 px | 3-column grids, full nav |
| `xl` | 1280 px | Max container width reached |

### Touch Targets
- Buttons: minimum `px-4 py-2` (comfortable thumb area)
- `touchAction: 'manipulation'` on all touch-interactive buttons (chat open/close/send)
- `safe-area-inset-bottom` padding on chat widget and input bar

### Collapsing Strategy
- Nav → hamburger on mobile
- Feature grids → single stack
- Chat widget: `w-[92vw]` on mobile, capped at `max-w-sm`
- Hero text scales down via responsive Tailwind classes

## 9. Agent Prompt Guide

### Quick Colour Reference
| Name | Dark Hex | Light Hex |
|------|----------|-----------|
| Page background | `#0f172a` | `#f0fdf4` |
| Card surface | `#1e293b` | `#dcfce7` |
| Primary text | `#f1f5f9` | `#1f2937` |
| Secondary text | `#94a3b8` | `#4b5563` |
| Border | `#334155` | `#d1d5db` |
| Accent lime | `#84cc16` | `#65a30d` |
| Accent emerald | `#34d399` | `#059669` |

### Example Component Prompts
- "Create a feature card using `.glass-effect` with `rounded-2xl`, a heading in `text-xl font-semibold text-text-primary`, body in `text-sm text-text-secondary`, and a `.btn-gradient` CTA at the bottom."
- "Build a hero section on `bg-bg-primary` with a `.text-gradient` heading at `text-5xl font-extrabold`, a subtitle in `text-text-secondary`, and a `btn-gradient rounded-full px-6 py-3` call to action."
- "Design a stats row: 3-column grid of `.glass-effect` cards, each showing a large number in `text-accent-lime text-3xl font-bold` and a label in `text-text-secondary text-sm`."

### Iteration Guide
1. Reference Tailwind classes, not raw CSS
2. Use CSS variable names (`var(--accent-lime)`) or Tailwind mappings (`text-accent-lime`)
3. Always test both `data-theme="light"` and `data-theme="dark"`
4. Use `[data-no-glow]` on containers where hover lift is unwanted
5. Keep animations slow and deliberate — match existing GSAP ScrollTrigger pacing
