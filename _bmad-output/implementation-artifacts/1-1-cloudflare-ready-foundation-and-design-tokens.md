---
title: 'Cloudflare-ready foundation and design tokens'
type: 'feature'
created: '2026-08-29'
status: 'in-progress'
baseline_commit: 'cff4011da6ae93e1d678c313c6a90ab3e48faa49'
review_loop_iteration: 0
context:
  - "{project-root}/_bmad-output/planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md"
  - "{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md"
  - "{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md"
  - "{project-root}/_bmad-output/specs/spec-inba-dev/SPEC.md"
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The current Next.js app is not configured for Cloudflare Pages static export, and its CSS tokens encode a rejected dark-mode palette, handwriting fonts, and raw color values rather than the approved Riso-tech editorial system.

**Approach:** Set the app to static export, define the canonical Riso-tech design tokens as root CSS variables, configure local or `next/font` Instrument Sans and IBM Plex Mono, and make the base responsive shell readable without JavaScript.

## Boundaries & Constraints

**Always:** Use the DESIGN.md palette, spacing, radius, and typography values. Keep the page light-only. Required text must render before hydration. Preserve `#top`, `#main-content`, and `#contact`.

**Ask First:** Replacing the supplied portrait, adding a dark theme, introducing a runtime remote font stylesheet, or adding server-only APIs.

**Never:** Use handwritten or serif type, ship the full-resolution source rasters as delivery assets, add a theme toggle, or make the visible story depend on JavaScript or WebGL.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| Static build | Next.js static export enabled | `next build` emits a static export with no server routes | Build fails if a server-only API is introduced |
| No JavaScript | JavaScript disabled or loading | Thesis, identity copy, links, and Track Record are readable | No blank viewport or hydration dependency |
| Font loading | Cold cache | Above-fold text reserves stable space and swaps without layout shift | Metric-compatible fallback remains until font loads |
| Narrow viewport | 320px width or 200 percent zoom | Text reflows without horizontal page scroll | No clipped content |

</frozen-after-approval>

## Code Map

- `next.config.ts` -- add `output: "export"` and preserve AVIF/WebP image formats.
- `app/layout.tsx` -- configure Instrument Sans and IBM Plex Mono with `display: swap`, Latin subsets, and metric fallbacks.
- `app/globals.css` -- replace legacy tokens with the canonical Riso-tech token layer and keep legacy aliases only where needed for current components.
- `public/assets/` -- source rasters remain source-only; no new delivery derivatives are produced in this story.

## Tasks & Acceptance

**Execution:**
- [ ] `next.config.ts` -- set `output: "export"` and keep `images.formats` for AVIF/WebP -- makes Cloudflare Pages static export explicit.
- [ ] `app/layout.tsx` -- import Instrument Sans and IBM Plex Mono and apply them to the root body -- establishes the approved type system.
- [ ] `app/globals.css` -- add root design tokens for the DESIGN.md palette, typography, spacing, and radii; remove the dark-mode media query and `color-scheme: light dark` -- keeps the site light-only and token-driven.
- [ ] `app/globals.css` -- set the base body font, page background, color, minimum width, and focus treatment to the new tokens -- makes the base shell readable and responsive.

**Acceptance Criteria:**
- Given the Next.js project, when `next build` runs, then the build succeeds with `output: "export"` and no server routes.
- Given the root stylesheet, when tokens are inspected, then palette, typography, spacing, and radius values match DESIGN.md and are exposed as CSS variables.
- Given a first paint with JavaScript disabled, when the page renders, then the visible text and links are readable.
- Given 320px width or 200 percent zoom, when the page reflows, then there is no horizontal page scroll or clipped content.

## Spec Change Log

## Design Notes

The old CSS uses `--parchment`, `--navy`, `--slate`, `--vermilion`, and `--ink`. Keep short aliases from the new tokens to those old names during this story so the current legacy components continue to render while later stories replace them. Do not reintroduce `prefers-color-scheme: dark` overrides.

## Verification

**Commands:**
- `npm run build` -- expected: static export succeeds.
- `npm run lint` -- expected: zero errors.
- `npm test` -- expected: existing tests pass.

**Manual checks:**
- Inspect `app/globals.css` for the new token block and absence of dark-mode overrides.
- Confirm `next.config.ts` contains `output: "export"`.
