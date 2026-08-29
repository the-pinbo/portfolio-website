---
title: inba.dev visual-fidelity rebuild proposal
date: 2026-08-29
mode: batch
scope: major
status: approved
trigger: completed implementation does not reproduce the approved prototypes
---

# Sprint Change Proposal

## 1. Issue summary

The completed implementation preserves much of the approved copy but fails the central product requirement: it does not feel or behave like the authored Riso-tech editorial portfolio. The runtime flattened distinct chapters into generic split sections, omitted the opening WebGL substrate, retained rejected legacy CSS, delivered unoptimized source images, and relied on tests that validate strings rather than rendered fidelity. The result passes the current suite while visibly failing the approved direction.

Evidence is recorded in `implementation-fidelity-audit-2026-08-29.md`, including a rendered desktop audit, source review, asset inventory, and verification-gap analysis.

## 2. Impact analysis

### Epic impact

- Epic 1 must reopen because the opening, identity, and navigation are only approximate and are not motion-ready.
- Epic 2 must reopen because Smart Filters, ACE, and VisionGuard do not use their approved chapter compositions.
- Epic 3 must reopen because Research, Open Source, Patent, Track Record, and Contact are not protected by visual acceptance evidence, and several chapters bypass the canonical content source.
- Epic 4 must reopen because WebGL is not mounted, delivery derivatives are absent, legacy UI remains, and performance and visual-regression gates are incomplete.
- Add a single rebuild-and-verification epic that replaces the false-done state with chapter-level visual checkpoints.

### Artifact conflicts

- The SPEC captures the right product intent but does not make prototype fidelity a first-class capability.
- DESIGN and EXPERIENCE remain valid, but their implementation handoff is too permissive because phrases such as "approved composition" are not tied to concrete screenshots and geometry checks.
- Architecture remains valid at the server/client boundary, but it needs a visual-fixture and automated verification rule.
- Existing stories accept structural presence rather than perceptual equivalence.
- Sprint status is inaccurate because it reports completion without the required delivery and experience evidence.

### Technical impact

- Replace the page composition and most visual components rather than restyling the generic section template.
- Retain the stack, content, URLs, portrait source, and useful chapter assets.
- Remove rejected and unused legacy components and CSS after replacement.
- Add an automated browser verification layer and visual baselines.
- Generate responsive delivery assets before performance sign-off.

## 3. Recommended approach

Use a controlled rollback and rebuild.

1. Preserve content, links, assets, and the Next.js foundation.
2. Treat the approved prototypes as executable visual fixtures.
3. Rebuild in vertical slices, starting with static settled compositions.
4. Add scroll choreography only after static desktop and mobile parity passes.
5. Add WebGL last, underneath an already complete opening.
6. Run automated and human visual checkpoints after every slice.

Direct adjustment is not viable because the generic page and stylesheet encode the wrong composition model. Reducing MVP scope is also not appropriate because the flagship visual experience is the project goal, not optional polish.

Effort is high. Risk becomes moderate once visual gates replace subjective final-only review.

## 4. Detailed artifact changes

### SPEC

Add a stable capability for prototype fidelity with success measured through named desktop and mobile visual fixtures. Add `visual-acceptance.md` as a companion containing chapter geometry, viewport, motion, and screenshot gates. State that passing content tests without passing visual gates is not completion.

### DESIGN and EXPERIENCE

Keep the approved visual decisions. Add a handoff appendix that names the exact prototype selectors and settled screenshots for Opening, Identity, Smart Filters, ACE, VisionGuard, Research, Open Source, Patent, Track Record, and Contact. Define the intermediate 901-1099 layout and cleanup behavior when a pinned sequence loses eligibility.

### Architecture

Add an invariant: canonical prototypes and their visual baselines are executable fixtures. Any chapter implementation must pass structural, responsive, and perceptual checks before enhancement work can begin.

### Epics and stories

Replace broad completion criteria with five implementation slices:

1. Foundation cleanup and visual test harness.
2. Opening, Identity, navigation, and Smart Filters static parity.
3. ACE, VisionGuard, Research, Open Source, and Patent static parity.
4. Track Record, Contact, mobile and intermediate responsive parity.
5. Opening transition, Smart Filters pinning, WebGL substrate, accessibility, performance, and Cloudflare release.

Each slice is done only when lint, build, content checks, browser checks, screenshot baselines, reduced-motion fallback, and responsive overflow checks pass.

### Sprint tracking

Mark prior visual stories as superseded by the rebuild epic rather than done. Preserve their history. Track the five rebuild slices from backlog through review with links to their rendered evidence.

### Artifact update order

The approved recovery is applied in this order so no implementation agent consumes a half-updated contract:

1. Update the existing SPEC and add `visual-acceptance.md`.
2. Add the UX implementation-handoff appendix without redesigning the approved experience.
3. Add the visual-fixture and verification invariant to the existing architecture spine.
4. Regenerate the affected epics and stories with visual acceptance rows.
5. Repair sprint status while preserving the historical record of the superseded completion state.
6. Run sprint-planning readiness validation.
7. Begin bounded implementation only after readiness passes.

DESIGN.md and EXPERIENCE.md remain authoritative over the HTML mock if they conflict. The course correction updates handoff precision, not the approved design direction.

## 5. Autonomous implementation and verification loop

For each slice:

1. Read the current SPEC and all companions.
2. Implement only the slice's settled static state.
3. Run lint, type/build, and content-contract tests.
4. Start the local production-equivalent build.
5. Capture desktop, intermediate, tablet, and mobile screenshots.
6. Compare against the canonical mock and correct hierarchy, dimensions, rhythm, wrapping, and asset treatment.
7. Exercise keyboard, anchors, reduced motion, disabled WebGL, and asset failure fallbacks.
8. Run the anti-slop pre-flight checklist and prohibited-copy scan.
9. Add motion or WebGL only after static parity is accepted.
10. Repeat until the slice has no known audit findings, then advance.

The final handoff will include the running site, verification results, remaining known limitations if any, and a browser tab opened to the finished build for review.

### Immutable visual baseline governance

Each accepted visual fixture records:

- source mock path and baseline revision
- viewport width, height, device pixel ratio, browser, and font-ready state
- chapter anchor and settled or motion checkpoint
- screenshot crop or full-viewport rule
- permitted dynamic masks and comparison tolerance
- acceptance row, reviewer, result, and any approved exception

An implementation agent cannot approve a baseline generated by its own code. Only the strong orchestrator can promote a baseline after specialist review. A later motion or WebGL change must rerun the static chapter gate it can affect.

### Gate schedule

- **G0 Contract ready:** SPEC, visual acceptance companion, UX handoff, architecture invariant, epics, sprint status, and readiness validation agree.
- **G1 Narrative foundation:** Opening, Identity, navigation, and Smart Filters match the static desktop and mobile fixtures.
- **G2 Complete static story:** ACE through Contact match desktop, intermediate 901-1099px, tablet, and mobile fixtures.
- **G3 Enhancement:** Opening checkpoints at 0, 0.35, 0.65, and 1; Smart Filters checkpoints at 0, 0.25, 0.65, and 1; WebGL, pin cleanup, reduced-motion, coarse-pointer, Save-Data, resize, deep-anchor, and context-loss paths pass.
- **G4 Release candidate:** full visual, accessibility, performance, code, content, asset, and Cloudflare static-export audit passes.

Promotion requires an evidence matrix that maps every acceptance row to its command or browser state, screenshot or report, pass/fail result, reviewer, and exception owner. Failed gates return to the same slice.

### Specialist-agent protocol

The primary implementation agent retains the build context and owns all edits. Review agents receive narrow prompts, explicit artifact paths, and current screenshots with no inherited conversation history. They report findings only, so parallel feedback cannot create conflicting edits.

The orchestration is cost-tiered:

- A strong model owns the SPEC update, architecture and story corrections, slice briefs, review triage, and final acceptance.
- A cost-effective builder model implements one frozen slice at a time and runs deterministic local checks. It does not reinterpret the visual direction.
- Terra 5.6 High or an equivalent strong reviewer is reserved for completed visual milestones, not routine code edits.
- The interaction and WebGL specialist runs only when the motion layer is ready, then again at final release if material fixes were required.
- Reviewer prompts use `fork_turns: none` and direct file paths to avoid paying for or polluting the primary conversation context.

At every visual checkpoint:

1. **Visual fidelity reviewer, Terra 5.6 High:** compares each completed visual milestone with the approved desktop and mobile mock, checking hierarchy, type scale, line wrapping, alignment, spacing, image treatment, and overall authored quality.
2. **Interaction and WebGL reviewer, frontier coding model High:** checks scroll choreography, cleanup, pointer behavior, reduced-motion parity, fallback behavior, frame cost, and whether motion serves the narrative.
3. **Responsive and accessibility reviewer, Terra 5.6 High:** checks 320px, 768px, 1024px, and 1199px or wider, keyboard flow, focus, landmarks, zoom, contrast, touch targets, and no horizontal overflow.
4. **Adversarial code and verification reviewer, frontier coding model High:** checks architecture invariants, dead code, content-source drift, false-positive tests, asset delivery, and regression coverage.

Reviewers run in parallel only after the implementation slice is stable. The primary agent triages their findings, applies fixes, reruns local verification, and sends the revised slice through the same gate. A slice cannot advance while a reviewer has an unresolved material finding.

`bmad-build-auto` is used as one bounded unattended iteration at a time, not as an unbounded blind loop. The orchestrator invokes it against one accepted slice, validates the result, then chooses whether another iteration is warranted. This preserves control over visual quality and prevents a green test suite from being mistaken for completion.

Use `bmad-build-auto` only after G0, on one fully specified static slice with a clean working tree or isolated worktree. It must not approve visual baselines, deploy the site, implement G3 enhancement choreography, or promote itself to the next slice. G3 and G4 remain strongly supervised because animation quality, WebGL behavior, and perceptual acceptance require direct judgment.

## 6. User decisions required now

No new design decision is required. The approved direction, prototypes, content hierarchy, copy constraints, palette, typography, chapter order, and motion boundaries already resolve the implementation choices.

Approval to supersede the current completed-story status and execute this proposal as a rebuild was granted by the user on 2026-08-29. No deployment or publishing will occur without a separate request.

## 7. Success criteria

- Opening, Identity, and Smart Filters reproduce the approved direction at settled checkpoints.
- ACE through Contact reproduce the approved continuous desktop mock with the finalized sizing revisions.
- Mobile, tablet, and intermediate layouts preserve hierarchy without horizontal overflow or accidental cropping.
- WebGL is visibly present only on eligible desktop paths and never carries content.
- Reduced motion, no WebGL, and JavaScript failure paths retain the complete story.
- No rejected copy, custom cursor, dark mode, handwritten type, generic skill wall, or legacy UI remains.
- Delivery assets, accessibility, build, and performance gates pass without image warnings.
- The visual-regression suite fails when a chapter materially drifts from its accepted baseline.
- Opening pin duration stays within 220vh and Smart Filters within 200vh on eligible viewports.
- Pinning activates only at 1200px or wider and 720px or taller when content fits safely.
- Production-equivalent performance checks fail on source raster delivery, image warnings, exceeded JavaScript budgets, missed LCP targets, or sustained WebGL frame instability.
- Accessibility checks include textured contrast, forced colors, keyboard traversal, 200 percent zoom, enlarged fonts, no JavaScript, missing assets, WebGL failure, reduced motion, coarse pointer, and Save-Data.

## Checklist status

- [x] Trigger and evidence documented
- [x] Epic impact assessed
- [x] SPEC, UX, architecture, stories, tests, assets, and deployment impacts assessed
- [x] Direct adjustment, rollback, and scope-reduction paths evaluated
- [x] Controlled rollback and rebuild selected
- [x] Implementation handoff and success criteria defined
- [x] User approval recorded
- [ ] SPEC and downstream artifacts regenerated
- [ ] Rebuild executed and verified
