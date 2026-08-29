# Visual acceptance contract

This companion makes prototype fidelity a release requirement. DESIGN.md and EXPERIENCE.md govern visual identity, geometry, behavior, accessibility, and responsive rules; the HTML mocks are executable composition fixtures. When they conflict, the spines win.

## Canonical fixtures

| Surface | Fixture | Required checkpoints |
|---|---|---|
| Opening, Identity, navigation, Smart Filters | `../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/mockups/direction-riso-tech-editorial.html` | Opening still, settled Identity, navigation boundary, complete Smart Filters mapping |
| ACE, VisionGuard, Research, Open Source, Patent, Track Record, Contact | `../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/mockups/key-continuous-desktop-story.html` | One settled capture per chapter and one continuous-page review |
| Mobile reflow for the complete story | `../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/mockups/key-mobile-settled-states.html` | Canonical 390px natural-scroll reference plus the required 320px release capture |

The fixture revision at this contract update is Git commit `a1d613522b568b5af79ca424ff64961c9927371f`. A promoted baseline must record the exact revision it used; changing a fixture invalidates affected baseline rows until they are reviewed again.

## Capture matrix

Every settled chapter is captured at all applicable widths. Record the actual viewport height, device pixel ratio, browser version, font-ready state, full-viewport or chapter crop, and any dynamic mask with the evidence row.

| Class | Required width | Acceptance focus |
|---|---:|---|
| Desktop | `>=1199px` | Approved 12-column composition; eligible pinning is evaluated separately |
| Intermediate | `1024px` and the `901–1099px` range | Shared 6/6 split, 460px visual cap, common optical top anchor |
| Tablet | `768px` | Natural one-column flow, controlled copy measure, stable navigation and anchors |
| Mobile reference | `390px` | Canonical mobile fixture, unchanged narrative and artifact set |
| Narrow mobile | `320px` | No clipping or horizontal page scroll; 44px targets; complete content and portrait |

At 1100px and wider, ACE through Patent use the shared 5/7 grid and 128px chapter top anchor. ACE, VisionGuard, and Open Source visuals are capped at 600px; Research at 520px with a 6:5 object; Patent at 460px. At 900px and below, the chapters use natural one-column flow. The 650-square portrait and its three canonical masks scale as one object and are captured at desktop and 320px.

## Static chapter rows

| Row | Required visual result |
|---|---|
| VA-01 Opening | Paper and thesis paint before enhancement; no portrait, navigation, CTA, or scroll prompt competes in the initial frame. |
| VA-02 Identity and navigation | The canonical three-line identity resolves left of the complete portrait triptych; navigation appears at the Identity boundary and uses the balanced desktop header or required mobile layout. |
| VA-03 Smart Filters | The authored query maps visibly to DATE / Last week and TRACKER / Cancellation; the complete mapping is readable before motion and stacks vertically on mobile. |
| VA-04 ACE | The authored two-line headline and right-aligned compact stack show the MCP app experience above governed capability with the GraphQL seam secondary. |
| VA-05 VisionGuard | Five-column narrative and links sit beside the complete v2 image on a navy inset plate; warm paper remains the chapter background. |
| VA-06 Research | Narrative sits beside the right-aligned, source-authentic ICASSP poster crop in a restrained 520px 6:5 coral-wash tile; the complete Poster link remains visible. |
| VA-07 Open Source | Three equal Double / float / posit32 source-pixel panels preserve scientific pixels and approved metrics; panels stack below 720px without overflow. |
| VA-08 Patent | Problem-led copy remains dominant beside the smaller ITEM / QUANTITY / UPDATE instruction-slip and resolved ledger object; no fabricated UI or document appears. |
| VA-09 Track Record | Exactly seven fully visible entries share one left spine and one consistent date column, with no cards, staircase, controls, or timeline marks. |
| VA-10 Contact | The wide authored closing statement and exactly Email, LinkedIn, GitHub, and Resume appear with equal visual weight and Email first. |

A row fails when hierarchy, dimensions, type scale, line wrapping, alignment, spacing rhythm, crop, asset treatment, responsive flow, or fallback materially departs from its governing spine and fixture. String presence alone cannot pass a row.

## Motion, WebGL, and fallback rows

| Row | Required checkpoints |
|---|---|
| VA-11 Opening sequence | At progress `0`, thesis readable; `0.35`, cadence resolved; `0.65`, thesis contracted and portrait entering; `1`, Identity, portrait, and navigation settled. Total section length is at most `220vh`. |
| VA-12 Smart Filters sequence | At progress `0`, complete still; `0.25`, source phrases emphasized; `0.65`, values registering into rows; `1`, stable Date and Tracker result. Total section length is at most `200vh`. |
| VA-13 Pin lifecycle | Pinning occurs only at width `>=1200px`, usable height `>=720px`, when the settled stage fits and motion is eligible. Resize, font load, orientation, content resize, and deep anchors restore clean settled flow without stranded transforms or scroll lock. |
| VA-14 WebGL substrate | Eligible desktop paths visibly mount the decorative substrate after first paint. Ineligible, context-loss, texture-failure, low-frame-rate, background-tab, and repeated-failure paths retain the static substrate and complete HTML story. |
| VA-15 User preferences | Reduced motion, coarse pointer, Save-Data, no JavaScript, and WebGL-disabled states preserve content, links, order, anchors, and settled compositions without pins or nonessential interpolation. |
| VA-16 Delivery failure | Missing portrait or chapter assets preserve intrinsic space, copy, links, and the documented quiet fallback without broken-image UI or layout shift. |

WebGL requires WebGL2, a fine pointer, no Save-Data request, and a successful lightweight probe. It never communicates content, captures focus, intercepts pointer events, or moves text. The eligible scene disables for the session below median 55fps or after repeated frames over 25ms on the reference desktop profile.

## Evidence and baseline governance

Each acceptance row records:

- row ID and gate;
- implementation revision and canonical fixture revision;
- viewport width and height, device pixel ratio, browser, and font-ready state;
- chapter anchor and settled or motion checkpoint;
- full-viewport, chapter, or continuous-page crop rule;
- permitted dynamic masks and comparison tolerance;
- command or reproducible browser state;
- screenshot or report path;
- pass or fail result, reviewer, review date, and exception owner;
- approved exception with scope and expiry, when one exists.

Only deterministic dynamic regions may be masked. Tolerance is recorded per baseline and cannot excuse changed geometry, wrapping, missing objects, asset substitution, or fallback failure. An implementation agent may generate candidate captures but cannot promote them. The strong orchestrator promotes a baseline only after the required specialist has reviewed it. Any later motion, WebGL, typography, asset, or responsive change reruns every static row it can affect.

## Gate schedule and review authority

| Gate | Promotion requirement | Required specialist review |
|---|---|---|
| G0 Contract ready | SPEC, this companion, UX handoff, architecture invariant, five rebuild slices, sprint status, and readiness validation agree. | Strong orchestrator resolves conflicts and approves the baseline plan. |
| G1 Narrative foundation | VA-01 through VA-03 pass on desktop and mobile, including navigation and anchors. | Terra 5.6 High visual-fidelity review. |
| G2 Complete static story | VA-04 through VA-10 pass on desktop, intermediate, tablet, 390px, and 320px; continuous-page rhythm also passes. | Terra 5.6 High visual-fidelity review plus responsive/accessibility review. |
| G3 Enhancement | VA-11 through VA-16 pass, and every affected static row remains green. | Strong animation/WebGL technical review. |
| G4 Release candidate | All visual, accessibility, performance, code, content, asset, and Cloudflare-readiness evidence passes with no unresolved material finding. | Terra 5.6 High visual-fidelity review plus interaction/WebGL, responsive/accessibility, and adversarial code/verification reviews. |

Review agents are read-only and receive only the relevant artifact paths, current screenshots, acceptance rows, and reproduction state. They do not inherit the build conversation or edit the implementation. The primary implementation agent triages findings, applies fixes, reruns deterministic checks, and resubmits the same slice. A failed or materially disputed row returns to its current slice; it cannot be waived by a green lint, build, or content suite.

GPT-5.6 Luna may build one frozen static slice at a time. `bmad-build-auto` may perform one controlled iteration only after G0 and cannot approve baselines, implement G3 choreography unsupervised, deploy, or promote itself to the next slice.
