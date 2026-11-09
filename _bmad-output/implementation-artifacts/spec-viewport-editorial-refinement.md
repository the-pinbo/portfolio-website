---
title: 'Viewport editorial portfolio refinement'
type: 'refactor'
created: '2026-11-09'
status: 'done'
review_loop_iteration: 0
baseline_commit: 'adcf2092f06fa5d4e6a1f356b6d0d9086aa7b19c'
context: []
---

<frozen-after-approval reason="User directly authorized implementation of all annotated refinements">

## Intent

**Problem:** The homepage packs neighboring stories into the same viewport, with inconsistent links, media sizing and typography. The user wants the supplied riso editorial prototype translated into a professional, spacious portfolio with a smooth introduction-to-identity transition.

**Approach:** Use a shared viewport chapter system, a pinned opening sequence that slides its thesis left to reveal identity and portrait, and consistent copy/visual grids and left-side artifact links. Preserve actual source media, content accuracy and current routes. Design dials: variance 6, motion 5, density 3; native CSS editorial aesthetic, matching existing paper/navy/coral brand.

## Boundaries & Constraints

**Always:** Preserve staged AND unstaged work. Latest user comments supersede old design docs. Equal outer margins; left-aligned reading copy. Keep the current four case routes, project order, canonical data, metric qualifiers, résumé, working native SVG portrait and scientific pixels. Respect reduced motion and no-JS reading; do not make scroll snapping mandatory or trap readers in tall content. Use accurate attribution. All 13 comments are in scope.

**Ask First:** Destructive actions or deployment; neither is needed.

**Never:** Push, deploy, reset index, fabricate project achievements, crop scientific comparison images inconsistently, replace scientific assets with illustrations, or add speculative third-party services. This is local refinement only.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| Desktop chapters | 1185x1071 and 1440x900 | Each project/research/contact rests in its own viewport below fixed navigation, with no neighboring content visible at its anchor | Grow with content in short viewports |
| Opening | Scroll from top | Full-screen statement slides left, identity and portrait arrive, then vertical document flow resumes | Static readable fallback if animation unsupported |
| Accessibility | Reduced motion or JS disabled | All copy, portrait, actions and routes remain reachable, no required animated reveal | Normal document flow |
| Narrow screens | 390px and 320px | Readable stacked layout; no horizontal overflow, overlapping metrics or inaccessible links | Chapters may exceed viewport to fit content |

</frozen-after-approval>

## Code Map

- `app/page.tsx`: homepage hero, grouped work/research articles, timeline and contact. Existing article IDs must survive. Remove visible Selected work and Research and open source heading interstitials; keep semantic section names.
- `app/globals.css`: all layout and shared type, palette and motion rules. Refactor existing rules coherently instead of piling contradictory overrides. Header currently 78px desktop and taller mobile; anchor offsets and chapter heights must agree.
- `components/portrait-triptych.tsx`: verified native SVG image masks; preserve these, especially WebKit clipping fix.
- `components/active-section-observer.tsx`: nav state across grouped sections; ensure updates on return scrolling and short viewports; no non-finite IntersectionObserver root margins.
- `components/project-diagram.tsx`: current filter diagram is a two-column list; restore prototype extraction labels, connector rules and date/tracker output boxes. Reporting diagram needs a clear graphical flow from question through MCP/tools to report, with document/report motifs and restrained red accent; label as conceptual and do not imply unbuilt product functionality.
- `components/linked-artifact.tsx`: canonical red leading arrow and underlined mono links; use for case study links and all resource links.
- `components/research-poster-tile.tsx`, `components/fractal-precision-plate.tsx`: resource links currently in visual figcaptions; move homepage artifact links into left copy with optional reusable props to avoid duplicate links. Keep source captions beneath figures.
- `content/portfolio.ts`: homepage copy, roles, scientific metrics and project summaries. Keep case-specific content intact; homepage natural-language story should use prototype headline 'Make complex filters easy to use.' with Smart filters/RingCentral context, supported concise summary. Identity: name plus short AI/backend one-liner at RingCentral, job title secondary if retained.
- `components/contact-close.tsx`: replace verbose closing with generous full-height layout, oversized heading, restrained red accent and aligned links.
- Prototype: `_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/mockups/direction-riso-tech-editorial.html`. It is visual evidence, not runtime code. Use its opening statement and identity composition as requested.
- `tests/visual/smoke.spec.ts`, `tests/visual/no-js.spec.ts`, `tests/visual/safari.spec.ts`: existing functional checks. Old full-page baselines are stale; don't blindly update them.

## Tasks & Acceptance

**Execution:**
- [x] `app/page.tsx`, opening leaf component and CSS: implement opening statement, horizontal identity reveal and shared viewport chapters.
- [x] Homepage/diagrams: restore prototype filter mapping and add meaningful reporting/MCP/report graphical explanation.
- [x] Shared components/CSS: unify typography, left artifact links, media envelopes, fractal image/metric alignment and timeline dates on role rows; remove redundant award line.
- [x] Contact: create airy full-screen final chapter with larger aligned typography and links.
- [x] Tests/docs: verify desktop/mobile/reduced motion/no-JS/WebKit behavior, review each chapter adversarially and fix findings before accepting screenshots.

**Acceptance Criteria:**
- Given an anchored desktop chapter, when it settles, then its story alone occupies the content viewport, and the nav reflects its parent section.
- Given the opening, when scrolling forward/back, then the transition reverses smoothly and the subsequent document scroll remains natural.
- Given a project/research story, when reviewing its CTA, then all resource/case links use leading red-arrow styling in the left copy column.
- Given experience, when comparing roles, then dates align consistently with role text, and the redundant recognition line is absent.
- Given research comparisons, when inspecting each image, then labels and wrapped SSIM/MSE metrics stay within the matching column.

## Spec Change Log

## Design Notes

Use one repeatable chapter template for story content, as explicitly requested; visual diagrams may differ. Full-height means min-height, not clipping. On small screens retain content flow and accessibility over forced viewport fit. Opening should use existing dependencies or browser APIs with progressive fallback, isolated in a client leaf if needed. Keep résumé and Explore my work as text-led red-arrow links, consistent with research links.

## Verification

- Pinned Node runtime: `/private/tmp/inba-runtime/node-v24.20.0-darwin-arm64/bin`.
- `npm run lint -- --max-warnings=0`, `npm run typecheck`, `npm run build`, `npm run verify:content`, `npm run verify:assets`, `npm test`.
- Playwright smoke/no-JS, targeted chapter geometry and opening transition tests; WebKit portrait regression.
- Actual renders at 1440, 1185, 768, 390 and 320 widths. Independent adversarial review required before baseline acceptance.

## Final Verification

Expanded release gate passed: 11 Node tests and 42 browser/screenshot checks. Independent visual, edge-case and verification-gap reviews returned no remaining actionable findings after repairs; four case routes additionally reviewed at desktop/mobile widths. See `docs/release-readiness-2026-11-09.md`.

## Suggested Review Order

**Chapter composition**

- Start with the page structure and consistent left-side artifact placement.
  [page.tsx:21](../../app/page.tsx#L21)

**Opening behavior**

- Read the reversible reveal, initial fragment settling and focus recovery.
  [opening-sequence.tsx:6](../../components/opening-sequence.tsx#L6)

**Shared visual rules**

- Check the common viewport, typography and media alignment rules.
  [globals.css:217](../../app/globals.css#L217)

**Explanatory visuals**

- Review prototype filter correspondence and accurate client-side report synthesis.
  [project-diagram.tsx:3](../../components/project-diagram.tsx#L3)

**Verification**

- Inspect actual motion, wheel handoff, fragment and narrow-screen assertions.
  [chapters.spec.ts:3](../../tests/visual/chapters.spec.ts#L3)

**Release gate**

- Confirm the new Chromium and WebKit suites run in the release command.
  [package.json:31](../../package.json#L31)

