---
name: BentoWeb
description: Nattblå og messing — one developer, presented with calm authority.
colors:
  night: "#0a1020"
  navy: "#0f1830"
  navy-2: "#16213d"
  navy-3: "#142039"
  line-dark: "#243150"
  stone: "#ece7dd"
  stone-2: "#e2dccf"
  line-light: "#cfc8b9"
  text-on-dark: "#ece7dd"
  text-on-dark-muted: "#a7b0c2"
  text-on-light: "#0e1526"
  text-on-light-muted: "#4a5163"
  brass: "#c9a063"
  brass-hi: "#e2bf82"
  brass-text: "#7d5f2e"
  error: "#f08a7e"
  success: "#8fd3a8"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(3rem, 1.4rem + 5vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.4rem, 1.4rem + 3vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.2vw, 2.25rem)"
    fontWeight: 400
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    letterSpacing: "0.14em"
rounded:
  base: "2px"
spacing:
  3xs: "0.25rem"
  2xs: "0.5rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "4.5rem"
  3xl: "clamp(5rem, 3rem + 7vw, 8.5rem)"
components:
  button-brass:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.night}"
    rounded: "{rounded.base}"
    height: "3.4rem"
  button-brass-hover:
    backgroundColor: "{colors.brass-hi}"
  button-ghost:
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.base}"
  button-outline-dark:
    textColor: "{colors.text-on-light}"
    rounded: "{rounded.base}"
  input:
    backgroundColor: "{colors.night}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.base}"
    height: "2.6rem"
  chip-selected:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.night}"
---

# Design System: BentoWeb

> **Source of truth:** every value lives as a CSS custom property in `src/index.css`. Component CSS modules only reference `var(--…)`. Change the look there.

## Overview

**Creative North Star: "Nattblå og messing."** Deep midnight blue and brass — the majestic, elegant pairing of naval uniforms and gilt book bindings. BentoWeb is one developer, and the site presents him with calm authority: a dark studio frame around the founder's portrait, confident serif headlines, prices stated plainly. Powerful and aesthetic, never flashy. Motion is restrained so non-technical customers are never confused, but polished enough to show craft.

Replaced the earlier hand-drawn zine world (archived at `.impeccable/arkiv/zine-versjon-src.tar.gz`).

## Colors

- **Night** (`--color-night`) is the ground. **Navy** tones (`--color-navy*`) are raised dark surfaces (form panel, project frames, CTA band, footer).
- **Stone** (`--color-stone`) sections alternate with the dark ones for readability: Tjenester, Priser and FAQ are light.
- **Brass** is the only accent and behaves like light: backlit lines, the lit top edge of the popular plan and form, the hover glow on buttons. Never use it for large fills except the primary button and selected chip.
- On stone, small brass text must use `--color-brass-text` (contrast).

## Typography

- **Gloock** — all headings, prices, stats, the logotype. Regular weight only; size carries hierarchy.
- **Schibsted Grotesk** — body, UI, buttons, labels. Small uppercase labels use `--tracking-caps`.
- Self-hosted via Fontsource; the Gloock woff2 is preloaded by `scripts/prerender.mjs`.

## Layout

- **Pages:** `/` (short teasers of everything), `/tjenester`, `/prosjekter`, `/priser` (incl. FAQ), `/om-meg`, `/kontakt`. Subpages open with `PageHeader` (the page's only h1) and close with `CtaBand`. Routes live in `src/App.jsx` and must match `src/data/pages.js`.
- Container `--container` (76rem), fluid `--gutter`. Sections: `.section`, `.section--light`, `.section-head` (title left, lede right; stacks under 900px).
- Hero: copy left, tall portrait right; stacks at 960px with the portrait full-bleed.
- No eyebrow labels above headings.

## Elevation & Depth

Flat surfaces separated by hairline rules (`--border`) and tone, not shadows. The only "depth" is light: `--shadow-glow` on brass lines and `--shadow-button-hover` on primary buttons.

## Shapes

Square: `--radius` is 2px everywhere. Hairline borders, thin brass dashes as list markers, no pills or cards-as-scaffold.

## Logo

Monogram B: Gloock "B" (converted to outlines in `Logo.jsx` → `MONOGRAM_B`, so favicons render it without fonts) in a thin square frame, with a brass corner at top-left. Used with the "BentoWeb" wordmark in the nav/footer; the mark alone is the favicon, app icon and social avatar. Sources: `src/components/Logo/`, `public/favicon.svg`, `scripts/brand/` (`npm run brand` re-renders PNG icons and the share image).

## Components

- **Portrait** — dark studio frame with two brass backlight lines; shows a lit silhouette marked "Portrett kommer" until `site.founder.photo` is set. `intro` variant plays the "lights on" sequence.
- **Button** — `brass` (primary), `ghost` (on dark), `outline-dark` (on stone); optional arrow nudges on hover.
- **Services rows** — numbered list rows; a brass rule grows under the hovered row.
- **Process** — timeline whose brass line draws across when it scrolls in.
- **Pricing** — three joined columns; the popular plan is the dark column with a lit brass edge.
- **FAQ** — native `<details>`, plus rotates to ×.
- **ComingSoon** — shown in production builds until `VITE_COMING_SOON=false` (see `site.comingSoon`). One viewport: headline, lede, live status dot, call button, three facts, and a studio panel where the brand mark lights up. Every route renders it; prerender writes only `/` + `404.html`.

## Motion

- One authored moment: hero headline rises out of its masks, then the portrait's studio lights switch on. Subpage headers echo it (headline mask-rise + brass line).
- Page changes use the View Transitions API: a short cross-fade with a slight lift.
- Everything else: a single calm fade-and-rise (`data-reveal`, `useReveal`), the process line drawing, hover rules and glows.
- `--ease-out` for everything, no bounce. Content visible without JS; `prefers-reduced-motion` shows final states.

## Do's and Don'ts

- **Do** put new values in `src/index.css` first.
- **Do** keep brass scarce; if everything glows, nothing does.
- **Do** keep light sections for dense reading (lists, prices, FAQ).
- **Don't** add eyebrow labels, gradients on text, glass effects, or rounded "pill" UI.
- **Don't** invent testimonials, results or client names — portfolio and proof must be real.
