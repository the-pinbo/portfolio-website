---
title: inba.dev implementation fidelity audit
date: 2026-08-29
scope: current Next.js implementation against approved UX prototypes and contracts
verdict: rebuild-required
---

# Implementation fidelity audit

## Review surface

- Approved opening, identity, and Smart Filters direction: `ux-inba.dev-2026-08-22/mockups/direction-riso-tech-editorial.html`
- Approved continuous desktop chapters: `ux-inba.dev-2026-08-22/mockups/key-continuous-desktop-story.html`
- Approved mobile reference: `ux-inba.dev-2026-08-22/mockups/key-mobile-settled-states.html`
- Canonical contract: `specs/spec-inba-dev/SPEC.md` and companions
- Runtime implementation: `app/`, `components/`, `content/`, `public/assets/`, and `tests/`
- Rendered audit: local Next.js page at desktop viewport, opening through Contact

## Verdict

The implementation is structurally complete but experientially invalid. It carries most required words and destinations, yet it does not reproduce the authored composition, hierarchy, pacing, motion boundary, or visual objects of the approved prototypes. Existing verification cannot detect that failure. Incremental polishing would preserve the wrong layout model, so the implementation should be rebuilt chapter by chapter behind explicit visual gates.

## Adversarial findings

| Location | Trigger condition | Concrete guard | Consequence |
| --- | --- | --- | --- |
| `app/page.tsx:49-79` | All three work stories are rendered inside one generic section and repeated article template. | Give Smart Filters, ACE, and VisionGuard independent chapter shells matching their approved compositions and viewport rhythm. | The authored scroll story collapses into a standard portfolio list. |
| `app/page.tsx:81-118` | Research, Open Source, and Patent hardcode public copy outside the canonical content module. | Move all chapter copy and artifact metadata into the typed content source and render through chapter-specific components. | Content drifts from the approved narrative and AD-2. |
| `app/globals.css:110-173` | Opening and Identity approximate spacing but omit the approved substrate, opening positioning, and transition contract. | Implement the approved opening frame and settled identity as exact layout states before adding the transition. | The first impression is plain typography followed by an unrelated portrait block. |
| `app/globals.css:291-383` | Generic section headings and one shared 0.92/1.08 split replace the mock's chapter-specific 12-column compositions. | Port the canonical desktop chapter grid, visual caps, top anchors, and copy measures directly from the approved mock. | Alignment and proportions feel arbitrary across the page. |
| `app/globals.css:394-473` | Smart Filters and ACE visuals are simplified bordered boxes rather than the authored mapping and compact stack. | Rebuild each visual from its approved prototype markup and geometry, preserving semantic text. | The most important work loses product and engineering character. |
| `components/hero-canvas.tsx` and `app/page.tsx` | WebGL eligibility code exists but no runtime component mounts it. | Replace the stale hero canvas with the specified decorative substrate island and mount it only in the opening. | The promised technical signature is absent while tests imply it exists. |
| `app/globals.css:753-915` | Rejected legacy hero, Engineering Loop, ownership, credibility, handwriting, and obsolete layout selectors remain. | Remove unused legacy selectors and components after the rebuilt chapters land. | Future edits can accidentally revive rejected design patterns and styling conflicts. |
| `public/assets/*` | Delivery uses source PNGs up to 3.2 MB and has no responsive AVIF/WebP set. | Generate declared responsive derivatives, preserve source files outside delivery references, and reserve intrinsic sizes. | Slow image delivery and failed performance budgets. |
| `components/fractal-precision-plate.tsx`, `research-poster-tile.tsx`, `specimen-plate.tsx` | Five raw `<img>` warnings remain in a release-marked build. | Use the static-export-safe optimized media strategy defined in the asset contract. | Bandwidth and rendering behavior remain ungoverned. |
| `tests/portfolio.test.mjs:15-117` | Tests assert source strings and obsolete CSS signatures instead of visible outcomes. | Add browser-level screenshot, layout, anchor, reduced-motion, and interaction assertions at canonical viewports. | A visually failed site continues to report a green test suite. |
| `tests/portfolio.test.mjs:49-97` | Tests inspect unused `hero-canvas` and `hero-scene` files. | Assert that the production page actually mounts the approved enhancement and that ineligible paths show the static fallback. | Dead code is mistaken for delivered functionality. |
| `tests/portfolio.test.mjs:69-76` | Portrait tests validate the obsolete mask file and `.hero__art` rules rather than the rendered 650-square triptych. | Verify the three canonical SVG clip bounds and screenshot the settled portrait at desktop and mobile. | Portrait regressions remain invisible to verification. |
| `app/globals.css:80-88` | The grain layer uses an inline SVG turbulence filter instead of the approved paper and ink assets. | Use the approved paper substrate and bounded decorative ink layers with one fixed overlay. | Texture reads as generic noise rather than integrated Riso material. |
| `content/portfolio.ts:28-63` and `app/page.tsx:52-77` | A generic project data shape forces unlike stories through the same visual structure. | Keep content canonical but map each project to an authored chapter component with explicit composition props. | Data-model convenience overrides visual storytelling. |
| `sprint-status.yaml` | Epics 2-4 are marked done despite unmounted WebGL, absent media derivatives, and no visual-regression gate. | Reopen the affected stories and introduce a rebuild epic with acceptance evidence. | Tracking state communicates false completion and prevents meaningful closure. |

## Edge-case findings

| Location | Unhandled path | Guard | Consequence |
| --- | --- | --- | --- |
| Responsive chapter layouts | Widths between 901px and 1099px are not validated against the canonical 6/6 composition. | Add explicit intermediate screenshots and overflow assertions. | Tablet-landscape layouts drift or clip. |
| Opening enhancement | WebGL2 succeeds but texture decode or shader initialization fails after eligibility passes. | Keep the static substrate painted underneath and tear down the failed canvas silently. | Blank or partially initialized opening. |
| Motion eligibility | Pointer type changes, Save-Data is enabled after load, or reduced-motion changes at runtime. | Subscribe to media-query changes and settle/unmount enhancement without moving content. | Motion remains active against user preference. |
| Sticky navigation | Browser lands directly on a deep anchor before fonts and images settle. | Reserve layout dimensions and verify the final target remains below the sticky offset. | Direct links land under the navigation. |
| Portrait delivery | One responsive portrait derivative fails while the source is available. | Use a static poster fallback with the same 1:1 reserved box. | Broken image icon or collapsed identity composition. |
| Chapter imagery | Image decoding is slow on a narrow viewport. | Render copy and links first, reserve the visual ratio, and keep quiet fallback fields. | Content jumps or becomes inaccessible behind media. |
| Pinned sequence | Viewport resizes across the eligibility breakpoint while a chapter is pinned. | Destroy the controller, clear inline transforms, and restore settled document flow. | Scroll lock, blank gaps, or stranded transforms. |
| External links | A third-party artifact is unavailable. | Keep literal labels and surrounding explanatory copy independent of destination availability. | A failed external page removes the meaning of the claim. |

## Verification-gap findings

| Changed surface | Missing verification | Consumer and evidence | Consequence |
| --- | --- | --- | --- |
| Approved chapter composition | No test compares the implementation to either canonical desktop prototype. | `tests/portfolio.test.mjs` only reads source files and generated HTML strings. | Any layout can pass as long as expected words exist. |
| WebGL delivery | No test verifies that a canvas is mounted on an eligible runtime path. | Tests inspect unused `components/hero-canvas.tsx` and `hero-scene.tsx`; `app/page.tsx` imports neither. | The enhancement can be entirely absent with all tests green. |
| Static fallback | No runtime test disables WebGL or JavaScript and checks content parity. | The current assertion only searches CSS for `.hero-canvas { display: none; }`. | Fallback content or layout can break undetected. |
| Responsive behavior | No browser test checks 320px, 768px, 1024px, or 1199px+ screenshots and overflow. | Existing tests search for media-query text but never render those viewports. | Mobile and intermediate layouts can fail silently. |
| Media contract | No test fails on source PNG delivery, missing derivatives, intrinsic-size omissions, or image warnings. | `npm test` completes with five image warnings. | Release can exceed the documented performance budget. |
| Legacy removal | No test rejects obsolete CSS selectors and unused visual components. | Source still contains Engineering Loop and credibility selectors despite the spec exclusion. | Rejected patterns survive and may reappear. |
| Copy preservation | Several chapters bypass the canonical content module with no equivalence test. | `app/page.tsx:81-118` hardcodes prose; tests only inspect `content/portfolio.ts`. | Runtime prose can diverge while canonical-content tests pass. |

## What remains valid

- The core content direction and public links are usable.
- The approved portrait source and chapter assets are present.
- The Next.js App Router and static export foundation are appropriate.
- The server-first island architecture remains the right boundary.
- The approved prototypes are detailed enough to eliminate further design decisions before rebuilding.

