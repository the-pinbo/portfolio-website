# Implementation stack

This companion fixes the implementation platform and rendering boundary. Visual, behavior, motion, accessibility, and responsive rules remain in DESIGN.md and EXPERIENCE.md.

## Baseline

- Next.js 15 App Router
- React 19
- TypeScript 5
- Tailwind CSS v4
- CSS variables for design tokens
- ESLint with the Next.js configuration
- Node test runner for existing content-contract tests

Installed visual dependencies: Three.js, React Three Fiber, and Drei. No new animation library is required beyond the existing foundation; DOM motion must remain minimal and static-first.

## Rendering boundary

Server Components or server-rendered HTML must own:

- the opening thesis and resolution cadence
- identity copy and the portrait markup or static triptych poster
- navigation markup
- every chapter heading and body paragraph
- the settled Smart Filters query-to-filter mapping as real text
- every artifact link
- the seven Track Record entries
- the contact actions

These elements must not depend on React Three Fiber or hydration to become readable.

Client islands are limited to:

- `WebGLSubstrate`, dynamically imported with `ssr: false` after first HTML paint and only after capability and eligibility checks
- `PinnedSequenceController`, which adds bounded progress to already settled server markup
- `ActiveSectionObserver`, which updates active navigation state without moving focus or creating a live region

Track Record has no client island. The page or shared shell must not become a client component solely to coordinate these islands.

## WebGL

Three.js and React Three Fiber are deferred until after the thesis has painted. The WebGL surface must remain:

- WebGL2-only
- decorative and `aria-hidden`
- non-focusable
- `pointer-events: none`

No particles, rings, dotted flows, lens effects, autonomous drift, text deformation, perspective camera, post-processing, or full-screen fluid simulation is allowed.

## Fonts

Deliver Instrument Sans and IBM Plex Mono as local or `next/font` variable fonts with Latin subsets, `display: swap`, metric-compatible fallbacks, and root CSS variables. No runtime remote font stylesheet is allowed. Preload only the faces used above the fold and test cold-cache font loading for layout shift.

## Media

Responsive AVIF/WebP derivatives carry explicit dimensions, responsive `sizes`, and lazy loading for later chapters. Full-resolution working PNGs are source-only and must not ship as delivery assets. Reserve priority for the measured LCP candidate.

## Verification

Run `npm run lint`, `npm run build`, and `npm test` before implementation review. Use Lighthouse CI or an equivalent repeatable mobile/desktop lab gate against the EXPERIENCE.md budgets.

## Deployment

Deploy to Cloudflare Pages or Cloudflare Workers. The production build must be verified against that target for routing, response, and the EXPERIENCE.md performance budgets.
