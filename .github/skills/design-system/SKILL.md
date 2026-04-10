---
name: design-system
description: "Use when: creating, editing, or reviewing UI components, styling, Tailwind classes, design tokens, colour palettes, dark mode, accessibility, responsive layout, or GSAP animations in the Frogitude project. Integrates awesome-design-md tooling with the project's Tailwind config and CSS custom-property theming system."
argument-hint: "Describe the UI component or design task"
---

# Design System — Frogitude

Governs all UI and design work in the Frogitude project.
Integrates the **awesome-design-md** tooling with the project's Tailwind config and CSS custom-property theming.

## Tooling

Two compatible CLIs — use either:

```bash
# Frogitude fork
npx github:Frogitude/awesome-design-md

# VoltAgent fork
npx github:VoltAgent/awesome-design-md
```

Both scaffold a `design.md` specification file and optionally output Tailwind-compatible token files.

## Workflow

### 1. Scaffold

Run the CLI at the project root. It will ask:

| Prompt         | Value                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------- |
| Project name   | `Frogitude`                                                                              |
| Primary colour | Match `tailwind.config.js` → CSS var `--accent-lime` (light: `#65a30d`, dark: `#84cc16`) |
| Font           | System stack from `globals.css` body rule                                                |
| Dark mode      | `class` via `html[data-theme="dark"]` (already set in Tailwind config)                   |

Output: `design.md` (do **not** commit — it's a working document).

### 2. Sync tokens

After scaffolding, verify that generated tokens match the project sources of truth.

#### Colour tokens — `tailwind.config.js` + `src/styles/globals.css`

The project maps Tailwind colours to CSS custom properties. These are the canonical tokens:

| Token          | Tailwind key     | CSS var            | Light     | Dark      |
| -------------- | ---------------- | ------------------ | --------- | --------- |
| BG primary     | `bg-primary`     | `--bg-primary`     | `#f0fdf4` | `#0f172a` |
| BG secondary   | `bg-secondary`   | `--bg-secondary`   | `#dcfce7` | `#1e293b` |
| Text primary   | `text-primary`   | `--text-primary`   | `#1f2937` | `#f1f5f9` |
| Text secondary | `text-secondary` | `--text-secondary` | `#4b5563` | `#94a3b8` |
| Border primary | `border-primary` | `--border-primary` | `#d1d5db` | `#334155` |
| Accent lime    | `accent-lime`    | `--accent-lime`    | `#65a30d` | `#84cc16` |
| Accent emerald | `accent-emerald` | `--accent-emerald` | `#059669` | `#34d399` |

Additional non-Tailwind CSS vars used in `globals.css`:

| CSS var                  | Purpose                  |
| ------------------------ | ------------------------ |
| `--color-glow`           | Lime glow for effects    |
| `--color-glow-secondary` | Emerald glow for effects |
| `--glass-bg`             | Glassmorphism background |
| `--glass-border`         | Glassmorphism border     |

#### Typography — `globals.css` body

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  Segoe UI,
  Roboto,
  Ubuntu,
  Cantarell,
  Noto Sans,
  Helvetica Neue,
  Arial,
  "Apple Color Emoji",
  "Segoe UI Emoji";
```

No custom `fontFamily` is declared in `tailwind.config.js` — the system stack is used directly.

#### Theme switching

- CSS: `prefers-color-scheme` media query (automatic)
- JS/HTML: `data-theme="dark"` or `data-theme="light"` on `<html>` (manual override)
- Tailwind: `darkMode: ['class', 'html[data-theme="dark"]']`

**If generated tokens diverge, update `tailwind.config.js` to remain the source of truth — never the generated file.**

### 3. Design component

Follow `design.md` guidance for:

- Colour usage — use only the Tailwind token names above (e.g. `bg-bg-primary`, `text-accent-lime`)
- Typography scale — headings, body, captions
- Spacing rhythm — 4 px base grid
- Component anatomy — card, button, input, nav, badge

### 4. Checklist before shipping UI changes

Run through every item before opening a PR:

#### Accessibility

- [ ] All interactive elements have visible focus rings (`focus:ring-*` Tailwind classes)
- [ ] Colour contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text (use a contrast checker)
- [ ] All images have `alt` text
- [ ] No content conveyed by colour alone

#### Dark mode

- [ ] Component tested in both light and dark mode (toggle `data-theme` on `<html>`)
- [ ] No hardcoded hex colours in JSX — use Tailwind token classes or CSS custom properties only
- [ ] GSAP animations look correct in both modes

#### Responsive

- [ ] Layout tested at 375 px, 768 px, 1280 px breakpoints
- [ ] No horizontal overflow on mobile (`overflow-x: hidden` is set on `html, body, #__next`)
- [ ] Touch targets ≥ 44 × 44 px

#### Motion

- [ ] GSAP animations respect `prefers-reduced-motion`:
  ```ts
  // Check at runtime — no helper exists yet; use this pattern:
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion) {
    /* animate */
  }
  ```
- [ ] No animation on critical-path content (LCP elements)

#### Performance

- [ ] No layout shift (CLS) from late-loading fonts or images
- [ ] Images use `next/image` with explicit `width`/`height`
- [ ] GSAP timeline cleaned up on component unmount (`tl.kill()` or `ctx.revert()` in cleanup)

## Component patterns

### Card

```tsx
<div className="rounded-xl border border-border-primary bg-bg-primary p-6 shadow-sm">
  {/* content */}
</div>
```

### Glass card (Frogitude style)

```tsx
<div className="glass-effect border border-border-primary rounded-xl p-6 shadow-sm">
  {/* content */}
</div>
```

### Button (primary — gradient)

Uses the existing `.btn-gradient` utility from `globals.css`:

```tsx
<button className="rounded-lg btn-gradient px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2">
  Label
</button>
```

### Button (accent-lime, plain)

```tsx
<button className="rounded-lg bg-accent-lime px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2">
  Label
</button>
```

### Badge

```tsx
<span className="inline-flex items-center rounded-full bg-accent-lime/10 px-2.5 py-0.5 text-xs font-medium text-accent-lime">
  Tag
</span>
```

## Adapting the current Frogitude design

When a design task references the current site aesthetic:

1. Read `src/styles/globals.css` to identify CSS custom properties and utility classes (`.glass-effect`, `.btn-gradient`, etc.).
2. Read `tailwind.config.js` to confirm the colour palette mapping.
3. Read `src/pages/index.tsx` and current components to understand layout conventions.
4. Run `npx awesome-design-md` and accept defaults that match the above — override anything that conflicts.
5. Produce the new component using **Tailwind classes only**; validate with the checklist above.

## Files that must not change without design review

- `tailwind.config.js` — source of truth for tokens
- `src/styles/globals.css` — base styles and custom properties
- `src/components/AppContext.js` — global state shape
