---
name: 'inba.dev flagship portfolio architecture spine'
type: architecture-spine
purpose: build-substrate
altitude: feature
paradigm: 'server-first island architecture with progressive enhancement'
scope: 'inba.dev flagship portfolio'
status: final
created: '2026-08-29'
updated: '2026-08-29'
binds:
  - CAP-1
  - CAP-2
  - CAP-3
  - CAP-4
  - CAP-5
sources:
  - ../../../specs/spec-inba-dev/SPEC.md
companions:
  - ../../../specs/spec-inba-dev/SPEC.md
  - ../../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md
  - ../../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md
  - ../../../../brain-dump/portfolio-content.md
  - ../../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/mockups/assets/manifest.md
---

# Architecture Spine — inba.dev flagship portfolio

## Design Paradigm

The site is a **server-first island architecture with progressive enhancement**. Server-rendered HTML owns the complete narrative, identity, links, navigation, and settled compositions. Client islands are limited to the WebGL substrate, the bounded pinned-sequence controller, and the active-section observer. They enhance settled markup and never own content required for the story.

```mermaid
flowchart LR
  C[content/portfolio.ts] --> A[app/ server-rendered page]
  A --> I[components/islands]
  T[design tokens CSS variables] --> A
  T --> I
```

## Invariants & Rules

### AD-1 — Rendering ownership

- **Binds:** CAP-1, CAP-4, CAP-5
- **Prevents:** Two builders making required copy, identity, links, or Track Record depend on hydration or WebGL.
- **Rule:** Every visible element needed to understand the portfolio must be present in server-rendered HTML or a static asset before JavaScript runs. Client islands may only add enhancement and must not own the only copy of a public claim, heading, link, or contact action.

### AD-2 — Single content source

- **Binds:** CAP-3, CAP-1
- **Prevents:** Divergent public claims, dates, roles, or artifact URLs across components.
- **Rule:** Public copy, literal labels, links, role lines, and the seven Track Record entries resolve from one typed content module or imported canonical file. Components must not hardcode public copy, dates, roles, or artifact URLs.

### AD-3 — Token-only styling

- **Binds:** CAP-2, CAP-5
- **Prevents:** Visual drift through ad-hoc hex values, spacing, typography, or radius choices.
- **Rule:** Palette, typography, spacing, radii, and component-specific tokens live once as root CSS variables or design tokens. Components reference tokens, not raw color, spacing, or type values.

### AD-4 — Enhancement eligibility

- **Binds:** CAP-4
- **Prevents:** Feature-specific or contradictory WebGL and pinning gates.
- **Rule:** One shared eligibility function decides WebGL and pinned-sequence activation from viewport, pointer, motion, save-data, WebGL2, and capability checks. Every ineligible path resolves to the settled static state.

### AD-5 — Navigation and anchor contract

- **Binds:** CAP-1, CAP-5
- **Prevents:** Broken deep links, duplicate IDs, or focus-moving active-state updates.
- **Rule:** Canonical anchors are stable and unique, use one shared sticky navigation offset, and `ActiveSectionObserver` updates `aria-current="location"` without moving focus or creating a live region.

### AD-6 — Asset and fallback contract

- **Binds:** CAP-2, CAP-5
- **Prevents:** Missing images breaking layout, accessibility, or narrative, and full-resolution source rasters shipping to clients.
- **Rule:** Every visual declares semantic role, alternative text or empty alt, intrinsic ratio, responsive sizes, loading priority, and fallback asset. Responsive AVIF/WebP derivatives are delivery assets; full-resolution working PNGs are source-only.

### AD-7 — Accessibility baseline

- **Binds:** CAP-5
- **Prevents:** Inaccessible ad-hoc components and inconsistent keyboard or screen-reader behavior.
- **Rule:** Landmarks, heading order, skip link, 44px touch targets, focus recipe, semantic alternatives, and no ornamental focus stops are shared conventions for every component. Decorative enhancement cannot add hidden meaning or intercept keyboard interaction.

### AD-8 — Cloudflare deployment

- **Binds:** CAP-1, CAP-4, CAP-5
- **Prevents:** A build that passes locally but fails on Cloudflare Pages or Workers because of Node-only runtime assumptions.
- **Rule:** The production build and runtime must be Cloudflare Pages or Cloudflare Workers compatible. No component, route, font, or asset path may depend on a Node-only server feature.

### AD-9 — Static-first deployment mode

- **Binds:** CAP-1, CAP-4, CAP-5
- **Prevents:** Two builders choosing incompatible Cloudflare output modes for the same page.
- **Rule:** Version one deploys as a Cloudflare Pages static export using `output: "export"`. Cloudflare Workers is introduced only if a later edge function is explicitly required.

## Consistency Conventions

| Concern | Convention |
| --- | --- |
| Naming | Components use kebab-case files and PascalCase exports; content keys use camelCase; canonical anchors use lowercase hyphenated names. |
| Content module | One typed module exports `identity`, `links`, `projects`, and `trackRecord` with stable shapes. Components import from that module and never redefine public copy or URLs. |
| Design tokens | Tokens follow the names in DESIGN.md as CSS variables: `--color-*`, `--font-*`, `--space-*`, `--radius-*`. |
| Media derivatives | Delivery names follow `<base>-<width>.avif` or `<base>-<width>.webp`; source rasters retain their original working names and are not served directly. |
| Data and formats | Dates use `MMM YYYY–MMM YYYY` with `Present` only for the current role; artifact labels are literal nouns; no em dashes in public copy. |
| State and cross-cutting | State is local to the three client islands. The page shell is not a client component merely to coordinate them. Active state is derived from document position. |

## Stack

| Name | Version |
| --- | --- |
| Next.js | 15.5.3 |
| React | 19.1.1 |
| React DOM | 19.1.1 |
| TypeScript | 5.9.2 |
| Tailwind CSS | 4.1.13 |
| Three.js | 0.180.0 |
| React Three Fiber | 9.3.0 |
| Drei | 10.7.6 |
| Node.js | 20 or newer LTS |
| Cloudflare Pages or Workers | managed platform |

## Structural Seed

```text
{root}/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    islands/
      webgl-substrate.tsx
      pinned-sequence-controller.tsx
      active-section-observer.tsx
    ui/
      *.tsx
  content/
    portfolio.ts
    links.ts
  public/
    assets/
      *.avif
      *.webp
      ICASSP-DUN-Poster.pdf
```

## Capability → Architecture Map

| Capability / Area | Lives in | Governed by |
| --- | --- | --- |
| CAP-1 Continuous story | `app/page.tsx`, canonical section markup | AD-1, AD-2, AD-5 |
| CAP-2 Visual identity and responsive composition | `app/globals.css`, `components/ui`, `components/islands` | AD-3, AD-6 |
| CAP-3 Evidence-backed content and artifacts | `content/portfolio.ts`, `content/links.ts` | AD-2 |
| CAP-4 Progressive WebGL and bounded motion | `components/islands/*` | AD-1, AD-4 |
| CAP-5 Accessibility and performance | `app/layout.tsx`, shared UI conventions, asset pipeline | AD-5, AD-6, AD-7 |

## Deferred

- Exact shader and pinned-sequence implementation details are deferred to implementation while remaining bounded by DESIGN.md and EXPERIENCE.md.
- Any analytics, monitoring, or operations instrumentation is deferred; Cloudflare-provided routing and response performance are the only operational checks in scope.
- Any future blog or secondary-project rail is deferred and must not be introduced into the single-page narrative.
