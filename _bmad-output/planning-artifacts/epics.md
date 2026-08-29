---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
inputDocuments:
  - _bmad-output/specs/spec-inba-dev/SPEC.md
  - _bmad-output/specs/spec-inba-dev/visual-acceptance.md
  - _bmad-output/planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md
  - _bmad-output/planning-artifacts/sprint-change-proposal-2026-08-29.md
  - _bmad-output/planning-artifacts/implementation-fidelity-audit-2026-08-29.md
  - _bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md
  - _bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md
---

# inba.dev - Epic Breakdown

## Overview

This document decomposes the finalized spec, architecture spine, and UX contract into implementable epics and stories for the inba.dev flagship portfolio.

## Requirements Inventory

### Functional Requirements

- FR1: Render one continuous, server-readable portfolio in the fixed order Opening, Identity, Smart Filters, ACE, VisionGuard, Research, Open Source, Patent, Track Record, Contact, with no About, Skills, Method, blog, or secondary-project route or rail.
- FR2: Render the Opening as an immediate HTML paper-and-thesis still with its resolution cadence and no competing portrait, navigation, CTA, or scroll prompt.
- FR3: Resolve the Identity into exactly the canonical name, full RingCentral role, supporting line, and one accessible 650-square portrait triptych using the three approved masks.
- FR4: Render the server-owned site mark and navigation after Identity, linking in order to Work, Research, Track Record, and Contact; update the active destination quietly without moving focus.
- FR5: Preserve unique `#top`, `#main-content`, and `#contact` anchors; provide the complete canonical anchor set with the shared sticky offset; remove `#systems` and `#credibility` without aliases.
- FR6: Render Smart Filters first in Work as a problem-led authored chapter whose visible source query resolves to real DOM rows `DATE / Last week` and `TRACKER / Cancellation` before any enhancement runs.
- FR7: Render ACE second as the product offering an MCP app, with a dominant experience layer, governed capability base, and secondary GraphQL contract seam; never call ACE itself an MCP app.
- FR8: Render VisionGuard third with five-column narrative and Code, GSoC, and Write-up links beside the complete v2 image on a navy inset plate over warm paper.
- FR9: Render Research with the authentic upper ICASSP poster crop in the restrained 520px 6:5 tile and visible Paper, Poster, and Certificate links, without redrawing the scientific artifact.
- FR10: Render Open Source with three equal source-pixel Double, float, and posit32 panels, the approved metrics associated only with float and posit32, and visible Code, Certificate, and Paper links.
- FR11: Render Patent with dominant problem-led copy beside the smaller ITEM / QUANTITY / UPDATE instruction slip and resolved ledger, plus Patent and Determinant Studios links, without fabricated UI or sole-ownership claims.
- FR12: Render Track Record as exactly seven fully visible, non-interactive entries in the approved order on one left spine and one consistent date column.
- FR13: Render Contact with the authored closing statement and exactly Email, LinkedIn, GitHub, and Resume at equal visual weight, with Email first and the temporary Drive resume as the sole resume destination.
- FR14: Source all public narrative, literal labels, dates, roles, Track Record data, and stable artifact keys from `content/portfolio.ts`, with destination URLs owned only by `content/links.ts`.
- FR15: Render every artifact as a native literal link with a project-context accessible name, safe announced new-tab behavior where used, and meaning that remains understandable if the external destination is unavailable.
- FR16: Keep the complete route, narrative, headings, navigation, portrait markup or poster, Smart Filters result, chapter visuals or reserved fallbacks, Track Record, and Contact readable before hydration and without JavaScript.
- FR17: Limit client enhancement ownership to `WebGLSubstrate`, `PinnedSequenceController`, and `ActiveSectionObserver`; these islands may enhance but never replace the settled server tree.
- FR18: Provide at most two eligible pinned sequences: Opening through Identity and Smart Filters, using the specified progress checkpoints and restoring clean settled flow on teardown, deep links, or eligibility loss.
- FR19: Provide the decorative WebGL2 substrate only after first paint and only on eligible desktop paths; suspend or disable it for preference, capability, visibility, performance, initialization, texture, or repeated context-loss failure.
- FR20: Preserve identical content, order, anchors, links, and settled compositions for reduced motion, coarse pointer, Save-Data, no JavaScript, WebGL-disabled, missing-media, and font-failure paths.
- FR21: Maintain a code-owned asset manifest defining every visual's semantic role, alternative text, intrinsic ratio, responsive sizes, loading priority, derivative set, source link, and quiet reserved fallback.
- FR22: Remove obsolete components, imports, exports, selectors, anchors, tests, and prohibited public copy after their rebuilt replacements are wired, and reject their reappearance in source and built output.
- FR23: Provide executable structural, browser, responsive, perceptual, accessibility, fallback, asset, performance, and Cloudflare verification mapped to VA-01 through VA-16.
- FR24: Record candidate and promoted visual evidence by acceptance row, production export digest, implementation and fixture revisions, viewport state, checkpoint, crop, masks, tolerance, artifact, result, reviewer, and any governed exception.
- FR25: Promote the rebuild monotonically through G0 contract readiness, G1 narrative foundation, G2 complete static story, G3 enhancement, and G4 release candidate; a failed or invalidated row returns to its owning slice.

### NonFunctional Requirements

- NFR1: Meet WCAG 2.2 AA across keyboard, screen reader, touch, forced colors, reduced motion, 200 percent zoom, enlarged fonts, and 320px reflow, with no overlap, clipping, or horizontal page scroll.
- NFR2: Use semantic landmarks and heading order, preserve the skip link, keep every touch target at least 44 by 44 CSS pixels, expose visible forced-colors-safe focus, and add no ornamental focus stops.
- NFR3: Materially match the governing DESIGN.md and EXPERIENCE.md compositions and canonical fixtures at desktop `>=1199px`, 1024px/intermediate, 768px/tablet, 390px/mobile-reference, and 320px/narrow-mobile checkpoints.
- NFR4: Treat hierarchy, dimensions, line wrapping, alignment, spacing rhythm, crops, asset treatment, responsive flow, and settled fallback as acceptance qualities that cannot be replaced by string-presence checks.
- NFR5: Use a light-only Riso-tech editorial system with exactly Instrument Sans and IBM Plex Mono, the approved token palette and spacing, the default system cursor, and no gradients, dark mode, novelty type, or prohibited decorative patterns.
- NFR6: Public copy contains no em dashes, unapproved RingCentral details, unsupported metrics or customer claims, `ACE.io`, `RingSense`, or forbidden credibility and legacy labels.
- NFR7: Never fabricate official screenshots, dashboards, documents, scientific diagrams, metrics, quotes, customer evidence, or product UI; keep real artifacts source-faithful.
- NFR8: Serve responsive AVIF/WebP delivery derivatives with explicit intrinsic dimensions and `sizes`; never deliver source working PNGs in the G4 artifact.
- NFR9: Keep p75 LCP at or below 2.5 seconds, p75 INP at or below 200 milliseconds, and p75 CLS at or below 0.10.
- NFR10: Keep initial-route JavaScript at or below 170KB gzip before WebGL, the deferred WebGL/R3F chunk at or below 300KB gzip, combined Latin WOFF2 fonts at or below 160KB, and deferred shader textures at or below 400KB compressed.
- NFR11: Keep above-fold image transfer at or below 250KB mobile and 450KB desktop, produce no initial-interaction task over 200ms, and keep pointer/scroll handler work below 8ms per reference-desktop frame.
- NFR12: Disable WebGL for the session below median 55fps or after repeated frames over 25ms; keep the static substrate and full HTML story intact.
- NFR13: Deploy the identical digest of a pinned Node/npm, `npm ci`, `output: "export"` production `out/` build to Cloudflare Pages with no server-runtime or runtime image-optimization dependency.
- NFR14: Use Cloudflare Web Analytics as the sole v1 real-user performance source without cookies, local storage, or fingerprinting; treat field-budget regression as a release defect.
- NFR15: Accepted baselines are immutable, versioned fixtures; fixture, typography, asset, motion, WebGL, or responsive changes invalidate every affected row until reviewed replacements are promoted.
- NFR16: Implementation owners cannot approve their own baselines; read-only specialist review and a non-implementing strong orchestrator are required for promotion or time-bounded exceptions.

### Additional Requirements

- Retain the existing Next.js App Router, React, TypeScript, Tailwind CSS v4, and static-export foundation; this is a brownfield rebuild, not a new starter-template bootstrap.
- AD-1: Server-rendered HTML and static assets own the complete settled composition; enhancement state cannot be required to recover content or geometry.
- AD-2: `content/portfolio.ts` and `content/links.ts` are the exclusive typed owners for public content and destinations.
- AD-3: Palette, type, spacing, radii, and component-specific values live once as root tokens; components contain no ad-hoc styling values.
- AD-4: One revisioned `EnhancementEligibility` owner publishes distinct pinning, portrait, and WebGL outcomes and ignores stale asynchronous results.
- AD-5: Canonical anchors remain stable and unique; active-section observation changes `aria-current="location"` without focus movement or live announcements.
- AD-6: `content/assets.ts` is the sole code-owned asset manifest, and an automated verifier blocks missing metadata, derivatives, dimensions, quiet fallback geometry, or source-raster delivery.
- AD-7: Shared accessibility conventions govern landmarks, headings, skip link, focus, touch targets, semantic alternatives, and the labeled sub-320px navigation disclosure.
- AD-8 and AD-9: Cloudflare Pages static export is the sole v1 target; local, CI, evidence, and deployment use the identical pinned-build `out/` digest.
- AD-10: The approved spines govern, HTML prototypes are executable composition fixtures, and baseline promotion atomically records source revisions, metadata, review, and supersession.
- AD-11: Verification gates execute in order; enhancements cannot begin until every static row they can affect is green.
- AD-12: The primary implementation owner is the only code editor; reviewers remain read-only; only an independent strong orchestrator promotes evidence or governed exceptions.
- AD-13: Any unattended build invocation is limited to one frozen static slice, one controlled iteration, declared edit paths, and declared checks; it cannot perform G3 work, deploy, or self-promote.
- AD-14: Structural gates reject obsolete code, dead enhancement assertions, stale content exports, duplicate IDs, prohibited copy, and enhancements not mounted on eligible runtime paths.
- AD-15: Cloudflare field performance is reviewed after launch and after material releases; regressions open release defects and block further promotion pending triage.
- The foundation slice must select and configure the browser runner, screenshot-diff engine, recorded per-row tolerances and masks, baseline registry, and evidence matrix before chapter promotion.
- Each story must run lint, type/build, canonical content checks, structural browser assertions, responsive overflow checks, and the visual-acceptance evidence assigned to its slice.
- The controlled recovery must preserve the historical story records and label superseded visual work as replaced, not completed or erased.

### UX Design Requirements

- UX-DR1: Implement the exact paper, paper-light, ink, ink-deep, coral, on-coral, structure, muted, hairline, focus, and focus-accent roles, including the documented flat-token contrast constraints.
- UX-DR2: Deliver Instrument Sans for display/body/UI and IBM Plex Mono only for roles, metadata, artifact labels, and diagram values as local or variable fonts with swap behavior and metric-compatible fallbacks.
- UX-DR3: Implement the canonical typography tokens, authored line breaks, controlled body measure, balanced headings, and natural-flow fallback at short viewports and 200 percent zoom.
- UX-DR4: Implement the desktop 12-column grid and margins, shared ACE-through-Patent 5/7 grid and 128px anchor, 901–1099px 6/6 grid with 460px cap, and natural one-column flow at 900px and below.
- UX-DR5: Implement the balanced three-zone desktop header and mobile navigation layouts without changing destination order or relying on leftover flex positioning.
- UX-DR6: Implement `thesis-stage` as the VA-01 still and the HTML-first base for VA-11, preserving its deliberate negative space and excluding every competing object.
- UX-DR7: Implement `portrait-triptych` as one responsive 650-square object using all three exact mask and image bounds, one portrait alternative, a reserved 1:1 box, and the two-level quiet fallback.
- UX-DR8: Implement `site-mark` and server-rendered `section-navigation` at the Identity boundary, including Work activation only after the Work reading boundary.
- UX-DR9: Implement the mobile 2x2 navigation at 320–767px and a labeled 44px `Sections` disclosure below 320px with vertical links, Escape close, and focus return.
- UX-DR10: Implement Smart Filters as the complete source-query-to-two-row still on desktop and a vertical source-phrase-to-registration-to-result flow on mobile.
- UX-DR11: Implement ACE's authored two-line headline and compact `mcp-app-stack` with the dominant MCP app experience above governed capability and a restrained GraphQL seam.
- UX-DR12: Implement VisionGuard with narrative/link-first DOM order and the complete uncropped v2 raster inside a 12–16px navy specimen-plate inset on warm paper.
- UX-DR13: Implement Research using a source-authentic poster crop inside the right-aligned 520px, 6:5 paper-light tile with restrained coral wash, registration edge, navy shadow, and visible complete Poster link.
- UX-DR14: Implement Open Source using three equal source-pixel panels with real-text labels, approved metric associations, slight border-removing crop, and vertical stacking below 720px.
- UX-DR15: Implement Patent with dominant copy and the smaller right-aligned coral instruction-slip/navy-ledger object, expressed without arrows, microphone, silhouette, or fake interface.
- UX-DR16: Implement Track Record as one non-interactive seven-entry typographic index with one spine and date column and no cards, logos, offsets, links, controls, or timeline marks.
- UX-DR17: Implement Contact as the wide authored two-line close and exactly four equally styled native links, with Email first and coral limited to shared hover/focus treatment.
- UX-DR18: Implement `linked-artifact` with literal visible labels, contextual accessible names, decorative hidden icons, announced safe new-tab behavior, and no badges or credibility container.
- UX-DR19: Implement semantic descriptions for Smart Filters, ACE, VisionGuard, the poster crop, SoftPosit metrics, Patent, and one portrait alternative without repeating or fabricating meaning.
- UX-DR20: Implement the 2px focus outline with at least 2px offset, optional coral registration echo, and forced-colors-safe load-bearing focus across every interactive element.
- UX-DR21: Implement quiet intrinsic-space fallbacks for portrait and every chapter visual so missing media never removes copy, links, labels, or geometry and never exposes broken-image UI.
- UX-DR22: Implement Opening checkpoints at 0, 0.35, 0.65, and 1 within at most 220vh and Smart Filters checkpoints at 0, 0.25, 0.65, and 1 within at most 200vh.
- UX-DR23: Activate pinning only at width at least 1200px, usable height at least 720px, measured-stage fit, permitted motion, non-compact text flow, and passing capabilities; re-evaluate after font, resize, orientation, and content changes.
- UX-DR24: Make native deep anchors land directly on settled states without replaying earlier pins and restore clean flow with no scroll lock, blank gaps, or stranded transforms when eligibility changes.
- UX-DR25: Implement WebGL as a non-semantic, non-focusable, pointer-transparent organic ink substrate with no particles, rings, dots, beams, lens boundary, autonomous drift, or text deformation.
- UX-DR26: Evaluate WebGL2, fine pointer, Save-Data, and lightweight capability before importing Three.js or textures; suspend it off-screen/backgrounded and retain the optimized static substrate for every failure path.
- UX-DR27: Ensure reduced motion disables pinning, auto reveal, shader displacement, animated extraction, and nonessential interpolation while immediately exposing the complete settled story.
- UX-DR28: Verify no horizontal overflow, stable anchors, complete content, 44px targets, and the unchanged portrait/artifact set at 320px, 390px, 768px, 1024px/intermediate, and `>=1199px` desktop.
- UX-DR29: Capture and review VA-01 through VA-10 settled compositions, VA-11 and VA-12 motion checkpoints, VA-13 pin lifecycle, VA-14 WebGL, VA-15 preferences, and VA-16 delivery failure under their assigned gates.
- UX-DR30: Review the full continuous page as one authored story so chapter rhythm, alignment spines, low-texture resting chapters, and composition-family differences remain coherent rather than becoming repeated generic sections.

### FR Coverage Map

FR1: Epic 5 - Rebuild and verify the continuous canonical story.
FR2: Epic 5 - Rebuild and verify the immediate HTML Opening still.
FR3: Epic 5 - Rebuild and verify Identity and the portrait triptych.
FR4: Epic 5 - Rebuild and verify the site mark and navigation boundary.
FR5: Epic 5 - Preserve and verify the complete anchor contract.
FR6: Epic 5 - Rebuild and verify the settled Smart Filters mapping.
FR7: Epic 5 - Rebuild and verify ACE static parity.
FR8: Epic 5 - Rebuild and verify VisionGuard static parity.
FR9: Epic 5 - Rebuild and verify Research static parity.
FR10: Epic 5 - Rebuild and verify Open Source static parity.
FR11: Epic 5 - Rebuild and verify Patent static parity.
FR12: Epic 5 - Rebuild and verify the Track Record index.
FR13: Epic 5 - Rebuild and verify the authored Contact close.
FR14: Epic 5 - Enforce canonical typed content and destination ownership.
FR15: Epic 5 - Deliver accessible native artifact links throughout the evidence chapters.
FR16: Epic 5 - Preserve the complete server-readable settled story.
FR17: Epic 5 - Enforce the bounded client-island architecture.
FR18: Epic 5 - Deliver and verify the two eligible pinned sequences.
FR19: Epic 5 - Deliver and verify the eligible WebGL substrate and failure lifecycle.
FR20: Epic 5 - Complete responsive and constrained-mode parity before enhancement.
FR21: Epic 5 - Establish and verify the code-owned asset manifest and fallback contract.
FR22: Epic 5 - Remove and structurally reject superseded legacy implementation surfaces.
FR23: Epic 5 - Establish and run the executable verification harness at every gate.
FR24: Epic 5 - Establish governed evidence capture, baseline identity, and promotion records.
FR25: Epic 5 - Complete monotonic G0-through-G4 promotion and Cloudflare release readiness.

## Epic List

### Historical Epics 1–4: Superseded Visual Completion Plan

The original Foundation and Identity, Authored Work Story, Proof Trail and Contact, and Enhancement/Release epics remain below as immutable historical records. Their structural implementation history is retained, but their visual-completion claims are superseded by Epic 5 and must not be interpreted as current acceptance.

### Epic 5: Visual-Fidelity Rebuild and Verified Release

Rebuild the complete portfolio chapter by chapter so visitors receive the authored Riso-tech editorial story at every required viewport and constrained state, eligible desktops receive bounded enhancement without loss of fallback, and the identical accessible, performant Cloudflare Pages artifact advances through independent visual evidence rather than false-green source checks.

Epic 5 will contain exactly five gated, ordered slices: foundation cleanup and visual test harness; Opening through Smart Filters static parity; ACE through Patent static parity; Track Record, Contact, intermediate, tablet, and mobile parity; and enhancement, accessibility, performance, and Cloudflare release.

**FRs covered:** FR1–FR25.

## Epic 1: Foundation and Identity

### Story 1.1: Cloudflare-ready foundation and design tokens

**Historical status:** Replaced by Story 5.1. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want the page to load with the approved Riso-tech editorial foundation, so that the experience is stable, responsive, and deployment-ready.

**Acceptance Criteria:**

**Given** the existing Next.js project, **When** the foundation story is implemented, **Then** `next.config.ts` uses `output: "export"`, fonts and design tokens are local, and the base shell renders without JavaScript.
**And** the approved palette, spacing, typography, and radii exist as root CSS variables.

### Story 1.2: Opening thesis and resolved identity

**Historical status:** Replaced by Story 5.2. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a first-time visitor, I want to read the opening thesis and then see the resolved identity with the portrait triptych, so that I understand who the site represents before any navigation appears.

**Acceptance Criteria:**

**Given** the page is loaded, **When** the opening and identity sections render, **Then** the thesis, name, current role, supporting line, and portrait triptych appear in the approved order with no competing CTA.
**And** the portrait reserves a 1:1 box and uses the canonical mask geometry with a static fallback.

### Story 1.3: Site mark, section navigation, and stable anchors

**Historical status:** Replaced by Story 5.2. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want sticky section navigation and stable anchors, so that I can move directly to Work, Research, Track Record, and Contact.

**Acceptance Criteria:**

**Given** the identity has resolved, **When** navigation is present, **Then** Work, Research, Track Record, and Contact link to their canonical anchors with the shared sticky offset.
**And** active state uses `aria-current="location"` without moving focus, and legacy `#systems` and `#credibility` are absent.

## Epic 2: Authored Work Story

### Story 2.1: Canonical content source and artifact link component

**Historical status:** Replaced by Story 5.1. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a maintainer, I want one typed content source and one artifact link component, so that public copy and links stay consistent across chapters.

**Acceptance Criteria:**

**Given** the content module is defined, **When** any chapter renders, **Then** identity, links, projects, and Track Record data come from that module.
**And** artifact links use literal labels, contextual accessible names, and safe new-tab attributes.

### Story 2.2: Smart Filters chapter

**Historical status:** Replaced by Story 5.2. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to understand the Smart Filters problem and see a query resolve into filters, so that the work communicates product value and engineering judgment.

**Acceptance Criteria:**

**Given** the Work chapter renders Smart Filters first, **When** the query-to-filter visual is visible, **Then** "last week" and "cancellation" resolve to Date and Tracker rows as real DOM text.
**And** the chapter opens with the business friction and omits unapproved metrics, screenshots, and customer quotes.

### Story 2.3: ACE chapter

**Historical status:** Replaced by Story 5.3. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to understand that ACE offers an MCP app, so that the product and technical boundary are clear.

**Acceptance Criteria:**

**Given** the ACE chapter renders, **When** the MCP app stack is visible, **Then** ACE is the product, the MCP app is its offering, and the GraphQL contract seam joins governed capability with the app experience.
**And** `ACE.io` and `RingSense` do not appear.

### Story 2.4: VisionGuard chapter

**Historical status:** Replaced by Story 5.3. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to inspect VisionGuard through its complete editorial image and public links, so that open-source engineering depth is verifiable.

**Acceptance Criteria:**

**Given** the VisionGuard chapter renders, **When** the specimen plate is visible, **Then** the complete v2 image sits inside a navy inset, with Code, GSoC, and Write-up links available.
**And** copy and links precede the image on mobile.

## Epic 3: Proof Trail and Contact

### Story 3.1: Research chapter

**Historical status:** Replaced by Story 5.3. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to see the IISc research story and the ICASSP poster, so that research credibility is evident.

**Acceptance Criteria:**

**Given** the Research chapter renders, **When** the poster tile is visible, **Then** the authentic upper-poster crop appears in a 6:5 paper-light tile with a muted coral wash and no solid coral field.
**And** Paper, Poster, and Certificate links are available, with the complete poster linkable.

### Story 3.2: Open Source chapter

**Historical status:** Replaced by Story 5.3. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to compare double, float, and posit32 results, so that the numerical-systems work is concrete.

**Acceptance Criteria:**

**Given** the Open Source chapter renders, **When** the fractal precision plate is visible, **Then** three source-pixel panels are labeled double, float, and posit32, with only float and posit32 metrics shown.
**And** Code, Certificate, and Paper links are available and scientific pixels remain untouched.

### Story 3.3: Patent chapter

**Historical status:** Replaced by Story 5.3. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to understand the voice-to-ledger problem and named-inventor record, so that the patent is presented as evidence rather than decoration.

**Acceptance Criteria:**

**Given** the Patent chapter renders, **When** the voice-ledger illustration is visible, **Then** a coral instruction slip aligns with a navy ledger and resolves one generic row.
**And** Patent and Determinant Studios links are available; the wording is "Named inventor" with no sole-ownership claim.

### Story 3.4: Track Record chapter

**Historical status:** Replaced by Story 5.4. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want to scan seven fully visible career entries, so that I can understand the path without decoding a timeline.

**Acceptance Criteria:**

**Given** the Track Record chapter renders, **When** the typographic index is visible, **Then** RingCentral, Linux Foundation, GSoC, IISc, Goldman Sachs, Determinant Studios, and NITK appear in order.
**And** no rows are links, controls, cards, timeline marks, or disclosure elements.

### Story 3.5: Contact chapter

**Historical status:** Replaced by Story 5.4. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a visitor, I want one clear next action, so that I can reach Inbasekaran.

**Acceptance Criteria:**

**Given** the Contact chapter renders, **When** the close appears, **Then** Email, LinkedIn, GitHub, and Resume appear with equal visual weight, Email first.
**And** there is no form, newsletter, scheduler, role repeat, or competing CTA.

## Epic 4: Enhancement, Accessibility, Performance, and Legacy Removal

### Story 4.1: WebGL substrate and eligibility fallback

**Historical status:** Replaced by Story 5.5. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a capable desktop visitor, I want a restrained ambient ink response, so that the page feels technically considered without becoming noisy.

**Acceptance Criteria:**

**Given** WebGL2, fine pointer, no Save-Data, and no reduced motion, **When** the substrate initializes after first paint, **Then** the canvas is decorative, `aria-hidden`, non-focusable, and `pointer-events: none`.
**And** every ineligible state renders the static composited substrate with no warning or blank canvas.

### Story 4.2: Pinned sequences and portrait pointer response

**Historical status:** Replaced by Story 5.5. Retained for traceability; its prior completion does not satisfy the current visual gates.

As a desktop visitor, I want the opening and Smart Filters sequences to resolve naturally, so that motion supports the story without hijacking scroll.

**Acceptance Criteria:**

**Given** eligibility conditions pass, **When** the page scrolls through the opening and Smart Filters, **Then** only those two chapters use bounded pinned sequences and progress checkpoints.
**And** reduced motion, touch, or ineligible viewports show settled content with no pinning.

### Story 4.3: Accessibility and responsive compliance

**Historical status:** Replaced by Stories 5.4 and 5.5. Retained for traceability; its prior completion does not satisfy the current visual gates.

As any visitor, I want the page to be usable with keyboard, screen reader, reduced motion, zoom, and narrow viewports.

**Acceptance Criteria:**

**Given** the complete page renders, **When** accessibility and responsive checks run, **Then** WCAG 2.2 AA, 44px targets, focus visibility, skip link, and no horizontal scroll at 320px or 200 percent zoom pass.
**And** ornamental layers create no focus stops or hidden information.

### Story 4.4: Media delivery, performance, deployment, and legacy removal

**Historical status:** Replaced by Stories 5.1 and 5.5. Retained for traceability; its prior completion does not satisfy the current visual gates.

As the owner, I want the site to meet performance budgets, deploy to Cloudflare Pages, and remove obsolete code.

**Acceptance Criteria:**

**Given** the site is release-candidate, **When** build, Lighthouse, media, and legacy checks run, **Then** the EXPERIENCE.md budgets pass and no rejected terms, duplicate IDs, or stale anchors remain.
**And** Cloudflare Pages static export succeeds with responsive AVIF/WebP derivatives and no Node-only runtime assumption.

## Epic 5: Visual-Fidelity Rebuild and Verified Release

Rebuild the complete portfolio chapter by chapter so visitors receive the authored Riso-tech editorial story at every required viewport and constrained state, eligible desktops receive bounded enhancement without loss of fallback, and the identical accessible, performant Cloudflare Pages artifact advances through independent visual evidence rather than false-green source checks.

### Story 5.1: Foundation Cleanup and Visual Test Harness

As a portfolio visitor and release reviewer,
I want the rebuild to start from a clean canonical foundation with trustworthy rendered evidence,
So that later visual-completion claims reflect the experience visitors actually receive.

**Traceability:** FR14, FR17, FR21–FR24; NFR5, NFR8, NFR13, NFR15–NFR16; UX-DR1–UX-DR5, UX-DR18–UX-DR21, UX-DR29–UX-DR30; AD-1–AD-14; VA-01–VA-16 harness coverage; G0.

**Acceptance Criteria:**

**Given** historical Stories 1.1, 2.1, and the foundation/verification portions of 4.3–4.4
**When** Story 5.1 is adopted
**Then** those records remain intact and are marked `replaced by Story 5.1`, not completed or deleted
**And** Story 5.1 owns G0 foundation readiness.

**Given** the existing brownfield project
**When** the foundation is prepared
**Then** the Next.js App Router, React, TypeScript, Tailwind CSS v4, canonical content, destinations, approved source assets, and Cloudflare static-export direction are preserved
**And** rejected components, selectors, content exports, anchors, dead enhancement assertions, and source-only tests are removed or recorded as blocking failures under AD-14.

**Given** AD-1 through AD-3 and AD-5 through AD-7
**When** the canonical owners are inspected
**Then** server HTML owns the settled story, `content/portfolio.ts` owns public narrative and link keys, `content/links.ts` owns destinations, `content/assets.ts` owns media metadata, and root tokens own visual values
**And** components contain no competing content, URL, asset, or raw-token definitions.

**Given** AD-4 and FR17's bounded-island requirement
**When** the client boundary is inspected
**Then** enhancement ownership is limited to `WebGLSubstrate`, `PinnedSequenceController`, and `ActiveSectionObserver`
**And** no required content or settled geometry depends on hydration.

**Given** AD-6 and the delivery contract
**When** asset verification runs
**Then** every visual declares semantic role, alternative text, intrinsic ratio, responsive sizes, priority, derivatives, source link where applicable, and quiet fallback
**And** missing derivatives, dimensions, fallback geometry, source-raster delivery, or image warnings fail the gate.

**Given** VA-01 through VA-16 and AD-10 through AD-12
**When** the visual harness is configured
**Then** it supports structural browser assertions, deterministic captures, screenshot comparison, immutable promoted baselines, candidate isolation, row-specific masks and tolerances, and an evidence matrix
**And** an implementation owner cannot promote their own baseline.

**Given** the required viewport matrix
**When** harness calibration runs
**Then** it can reproduce evidence at desktop `>=1199px`, intermediate `1024px`, tablet `768px`, mobile reference `390px`, and narrow mobile `320px`
**And** each record includes actual height, DPR, browser version, font-ready state, anchor/checkpoint, crop rule, masks, tolerance, artifact path, result, reviewer, and fixture revision.

**Given** AD-8, AD-9, and the pinned runtime versions
**When** the production-equivalent build runs
**Then** `npm ci` and the canonical build produce a static `out/` artifact with a recorded digest
**And** browser evidence is tied to that digest with no server-runtime or runtime image-optimization dependency.

**Given** the project verification commands
**When** Story 5.1 is submitted for review
**Then** lint, type/build, canonical content checks, prohibited-copy and legacy scans, asset-manifest verification, and browser-harness smoke checks pass
**And** failures cannot be waived by unrelated green checks.

**Given** G0 review
**When** the SPEC, visual-acceptance contract, UX spines, AD-1–AD-15, Epic 5, sprint status, and evidence plan are compared
**Then** they agree on the five slices, ownership, gates, and replacement history
**And** no VA row is promoted as visually passing merely because the harness exists.

### Story 5.2: Opening, Identity, Navigation, and Smart Filters Static Parity

As a first-time portfolio visitor,
I want the opening thesis to resolve into a clear identity, usable navigation, and an understandable Smart Filters story,
So that the portfolio establishes authorship and engineering judgment before I reach later chapters.

**Traceability:** FR1–FR6, FR16; NFR1–NFR8, NFR15–NFR16; UX-DR6–UX-DR10, UX-DR19–UX-DR21, UX-DR28–UX-DR30; AD-1–AD-3, AD-5–AD-7, AD-10–AD-14; VA-01–VA-03; G1.

**Acceptance Criteria:**

**Given** historical Stories 1.2, 1.3, and 2.2
**When** Story 5.2 is adopted
**Then** those records remain intact and are marked `replaced by Story 5.2`
**And** G0 from Story 5.1 is the only entry dependency.

**Given** AD-1 through AD-3 and the page loads without JavaScript
**When** the initial viewport paints
**Then** VA-01 shows the canonical paper, readable thesis, and cadence before enhancement
**And** no portrait, navigation, CTA, scroll prompt, or hydration dependency competes in the frame.

**Given** the visitor reaches Identity
**When** VA-02 is captured in its settled state
**Then** the exact three-line identity appears left of the complete canonical portrait triptych
**And** the triptych uses the approved 650-square geometry, exposes one portrait alternative, reserves intrinsic space, and retains its quiet fallback.

**Given** AD-5 and AD-7
**When** navigation reaches its sticky boundary
**Then** the balanced desktop header or required mobile layout exposes Work, Research, Track Record, and Contact in canonical order
**And** stable anchors, sticky offsets, keyboard focus, 44px targets, and `aria-current="location"` work without duplicate IDs, focus movement, or a live region.

**Given** Smart Filters renders before motion
**When** VA-03 is captured
**Then** the authored source query visibly maps to `DATE / Last week` and `TRACKER / Cancellation` as real DOM text
**And** the complete mapping is readable in the desktop composition and stacks vertically without reduced content on mobile.

**Given** AD-2, AD-3, AD-6, and AD-14
**When** the slice is inspected
**Then** identity, navigation, Smart Filters copy, labels, assets, and destinations come from canonical owners and tokens
**And** no generic split-section template, obsolete selector, rejected anchor, prohibited copy, hardcoded competing content, or source-raster delivery remains on these surfaces.

**Given** the G1 viewport evidence requirement
**When** deterministic captures run against the production-export digest
**Then** VA-01 through VA-03 are recorded at desktop `>=1199px`, mobile reference `390px`, and narrow mobile `320px` with actual height, DPR, browser, font-ready state, crop, masks, tolerance, and fixture revision
**And** the portrait triptych receives its required desktop and 320px regression evidence.

**Given** the page at 390px and 320px
**When** responsive browser assertions run
**Then** the story, portrait, navigation, anchors, query mapping, and touch targets remain complete with no clipping, overlap, accidental crop, or horizontal page scroll
**And** the mobile experience uses natural document flow with no pinning or WebGL requirement.

**Given** no JavaScript, reduced motion, missing portrait media, delayed fonts, initial deep anchors, and restored scroll positions
**When** each fallback state is exercised
**Then** the complete settled composition and navigation remain usable under VA-01 through VA-03
**And** no stranded transforms, hidden content, broken-image UI, or incorrect sticky offset appears.

**Given** Story 5.2 is submitted to G1
**When** verification runs
**Then** lint, type/build, canonical content checks, prohibited-copy and legacy scans, structural browser checks, anchor checks, accessibility checks, overflow assertions, and VA-01–VA-03 screenshot comparisons pass
**And** a Terra 5.6 High visual-fidelity review independently accepts hierarchy, wrapping, geometry, rhythm, crop, and mobile reflow.

**Given** any material G1 failure or disputed row
**When** the evidence matrix is reviewed
**Then** Story 5.2 remains at G1 and returns to the same slice
**And** ACE-through-release work cannot reinterpret or waive the failed result.

### Story 5.3: ACE, VisionGuard, Research, Open Source, and Patent Static Parity

As a technically discerning visitor,
I want five distinct, source-faithful evidence chapters with adjacent artifacts,
So that I can understand the work's product judgment, engineering depth, research basis, and public verification without generic portfolio patterns.

**Traceability:** FR7–FR11, FR15; NFR1–NFR8, NFR15–NFR16; UX-DR11–UX-DR15, UX-DR18–UX-DR21, UX-DR29–UX-DR30; AD-1–AD-3, AD-5–AD-7, AD-10–AD-14; VA-04–VA-08; G2 desktop checkpoint.

**Acceptance Criteria:**

**Given** historical Stories 2.3, 2.4, 3.1, 3.2, and 3.3
**When** Story 5.3 is adopted
**Then** those records remain intact and are marked `replaced by Story 5.3`
**And** accepted G1 static foundations are not reinterpreted.

**Given** AD-1 through AD-3 and the five chapters render without JavaScript
**When** their settled desktop states are inspected
**Then** copy, headings, visuals or reserved fallbacks, metadata, and artifact links are complete in server HTML
**And** each chapter uses canonical content, destinations, tokens, and its authored composition rather than a shared generic project template.

**Given** ACE is captured under VA-04
**When** the settled composition renders
**Then** the authored two-line headline sits beside the right-aligned compact stack with the MCP app experience above governed capability and the GraphQL seam secondary
**And** ACE is the product offering the app; `ACE.io` and `RingSense` remain absent.

**Given** VisionGuard is captured under VA-05
**When** the settled composition renders
**Then** five-column narrative and Code, GSoC, and Write-up links sit beside the complete v2 image on a 12–16px navy inset plate over warm paper
**And** the image remains uncropped, informative, and protected by its intrinsic quiet fallback.

**Given** Research is captured under VA-06
**When** the settled composition renders
**Then** narrative sits beside the right-aligned 520px, 6:5 source-authentic ICASSP poster crop in its restrained paper-light coral-wash tile
**And** Paper, Poster, and Certificate remain visible, with the complete Poster artifact link and no regenerated scientific diagram.

**Given** Open Source is captured under VA-07
**When** the settled composition renders
**Then** three equal source-pixel panels are labeled Double, float, and posit32, with only the approved float and posit32 metrics programmatically associated
**And** scientific pixels remain unaltered while Code, Certificate, and Paper stay reachable.

**Given** Patent is captured under VA-08
**When** the settled composition renders
**Then** dominant problem-led copy sits beside the smaller right-aligned ITEM / QUANTITY / UPDATE instruction slip and resolved navy ledger
**And** Patent and Determinant Studios links remain available without fabricated UI, arrows, microphone, silhouette, stock data, or sole-inventor implication.

**Given** the shared desktop chapter contract
**When** VA-04 through VA-08 candidates are captured at `>=1199px`
**Then** each chapter uses the 5/7 grid, common 128px optical top anchor, controlled headline measure, and its documented visual cap
**And** one continuous-page capture verifies pacing, alignment spines, chapter distinction, and warm-paper continuity.

**Given** AD-5 through AD-7 and each chapter's fallback state
**When** an artifact destination or visual asset is unavailable
**Then** native literal links retain contextual accessible names, copy remains meaningful, intrinsic space remains stable, and no broken-image UI appears
**And** external new-tab behavior is announced and uses safe attributes.

**Given** AD-10 through AD-14
**When** evidence is recorded
**Then** VA-04 through VA-08 candidates are tied to the production-export digest, canonical fixture revision, actual viewport height, DPR, browser, font-ready state, crop, masks, tolerance, reviewer, and result
**And** this desktop checkpoint records candidate evidence only; G2 promotion remains owned by the responsive-completion gate.

**Given** Story 5.3 is submitted for its G2 desktop checkpoint
**When** verification runs
**Then** lint, type/build, canonical content and link checks, prohibited-copy and legacy scans, asset-manifest checks, structural browser assertions, accessibility assertions, desktop overflow checks, chapter screenshots, and continuous-page comparison pass
**And** Terra 5.6 High independently accepts hierarchy, wrapping, geometry, crop, scientific fidelity, artifact treatment, and chapter rhythm.

**Given** any material VA-04–VA-08 failure
**When** evidence is reviewed
**Then** the story remains within its desktop-static checkpoint and returns to the same slice
**And** later responsive work cannot conceal the failure.

### Story 5.4: Track Record, Contact, Intermediate, Tablet, and Mobile Parity

As a visitor using any supported viewport or input mode,
I want the complete portfolio story, career record, and contact path to reflow without losing content or hierarchy,
So that I can evaluate the work and make contact regardless of device size, zoom, or rendering capability.

**Traceability:** FR12–FR13, FR20; NFR1–NFR8, NFR15–NFR16; UX-DR4–UX-DR5, UX-DR9, UX-DR14, UX-DR16–UX-DR17, UX-DR20–UX-DR21, UX-DR28–UX-DR30; AD-1–AD-7, AD-10–AD-14; VA-01–VA-10 with VA-15–VA-16 candidates; G2.

**Acceptance Criteria:**

**Given** historical Stories 3.4, 3.5, and the static responsive portion of 4.3
**When** Story 5.4 is adopted
**Then** those records remain intact and are marked `replaced by Story 5.4`
**And** accepted G1 and Story 5.3 desktop evidence form its entry state.

**Given** Track Record is captured under VA-09
**When** the chapter renders
**Then** exactly seven fully visible entries appear in the approved order with one left spine and one consistent date column
**And** no cards, links, staircase offsets, controls, disclosures, logos, or timeline marks appear.

**Given** Contact is captured under VA-10
**When** the final chapter renders
**Then** the authored wide closing statement and exactly Email, LinkedIn, GitHub, and Resume appear with equal visual weight and Email first
**And** no form, scheduler, newsletter, role repeat, extra CTA, or second resume destination appears.

**Given** VA-01 through VA-10 and the intermediate layout contract
**When** captures run at 1024px with boundary assertions at 901px and 1099px
**Then** ACE through Patent use the common 6/6 split, 460px visual cap, controlled copy measure, and shared optical top anchor
**And** Opening, Identity, navigation, Smart Filters, Track Record, and Contact retain their approved hierarchy without clipping or accidental four-line headings.

**Given** the viewport is 768px
**When** the complete story is captured
**Then** every chapter uses natural one-column flow, stable anchors, controlled type and copy measure, and complete artifact sets
**And** navigation remains usable without pinning, hidden destinations, or horizontal overflow.

**Given** the viewport is 390px or 320px
**When** the complete story is captured against the canonical mobile fixture
**Then** narrative order, identity, portrait, Smart Filters mapping, five evidence chapters, seven Track Record entries, and four Contact links remain complete
**And** the 2×2 navigation, 44px targets, safe-area spacing, vertical mappings, stacked SoftPosit panels, and one-square triptych show no clipping or horizontal page scroll.

**Given** the effective width falls below 320px through reflow or zoom
**When** navigation enters compact mode
**Then** a labeled 44px `Sections` disclosure exposes all four destinations in a vertical non-modal list
**And** it is never icon-only, Escape closes it, and focus returns to the disclosure control.

**Given** 200 percent browser zoom, enlarged default fonts, text-only zoom, or a short landscape viewport
**When** the visitor traverses the page
**Then** headings, body copy, navigation, links, diagrams, and Contact reflow without overlap, clipping, inaccessible controls, or horizontal page scroll
**And** the desktop composition yields to natural flow rather than scaling content below usable sizes.

**Given** AD-1 through AD-7 and AD-10 through AD-14
**When** responsive evidence is generated
**Then** server-rendered order, semantic descriptions, canonical content, native links, reserved fallback geometry, focus treatment, and unique anchors remain consistent at every required width
**And** candidate evidence cannot overwrite promoted G1 or desktop-static baselines.

**Given** missing chapter media, no JavaScript, reduced motion, coarse pointer, delayed fonts, direct deep links, and restored scroll positions
**When** responsive fallback checks run
**Then** the complete static story remains readable and navigable with no broken-image UI, lost artifacts, hidden content, stranded transforms, or incorrect anchor landing
**And** VA-15 and VA-16 candidates are recorded for final enhancement-gate verification.

**Given** Story 5.4 is submitted for G2 promotion
**When** verification runs
**Then** lint, type/build, canonical content and link checks, prohibited-copy and legacy scans, asset-manifest checks, structural browser assertions, anchor checks, automated accessibility checks, responsive overflow checks, and VA-01–VA-10 comparisons pass at 1024px, 768px, 390px, and 320px
**And** the 901px and 1099px boundaries, 200 percent zoom, enlarged fonts, short landscape, and continuous-page rhythm are also evidenced.

**Given** the G2 candidate is complete
**When** specialist review occurs
**Then** Terra 5.6 High independently accepts visual fidelity and a responsive/accessibility reviewer accepts reflow, landmarks, keyboard order, focus, touch targets, zoom, and overflow
**And** any material failure returns to Story 5.4 without advancing enhancement work.

### Story 5.5: Opening Transition, Smart Filters Pinning, WebGL, Accessibility, Performance, and Cloudflare Release

As a portfolio visitor,
I want eligible enhancements to deepen the authored story without compromising accessibility, speed, or fallback behavior,
So that the released site feels technically distinctive while remaining complete and reliable for everyone.

**Traceability:** FR18–FR19, FR25; NFR1–NFR16; UX-DR20–UX-DR29; AD-1, AD-4–AD-15; VA-01–VA-16 affected-row coverage with VA-11–VA-16 ownership; G3–G4.

**Acceptance Criteria:**

**Given** historical Stories 4.1, 4.2, the remaining enhancement/accessibility scope of 4.3, and the release scope of 4.4
**When** Story 5.5 is adopted
**Then** those records remain intact and are marked `replaced by Story 5.5`
**And** promoted G2 static parity is the mandatory entry condition.

**Given** an eligible viewport at least 1200px wide and 720px high
**When** the Opening sequence is captured under VA-11
**Then** progress `0` shows a readable thesis, `0.35` resolves cadence, `0.65` contracts the thesis while the portrait enters, and `1` settles Identity, portrait, and navigation
**And** total section length remains at most `220vh`, including the settled viewport.

**Given** the same eligible conditions
**When** Smart Filters is captured under VA-12
**Then** progress `0` shows the complete still, `0.25` emphasizes source phrases, `0.65` registers values into rows, and `1` shows stable Date and Tracker results
**And** total section length remains at most `200vh` with all source and result text present in the settled DOM.

**Given** AD-4 and VA-13
**When** width, usable height, settled-stage fit, font load, motion preference, text reflow, orientation, content size, or deep-anchor state changes
**Then** one revisioned eligibility owner enables pinning only while every condition passes and ignores stale asynchronous results
**And** loss of eligibility clears observers and transforms, restores settled flow, preserves native scrolling, and leaves no scroll lock, blank gap, or stranded state.

**Given** WebGL2, a fine pointer, no Save-Data request, permitted motion, and a successful lightweight probe
**When** VA-14 initializes after the HTML thesis paints
**Then** the decorative substrate visibly mounts without focusability, semantic meaning, pointer interception, text movement, or layout shift
**And** Three.js, textures, and the canvas are not requested on ineligible paths.

**Given** initialization failure, texture failure, WebGL context loss, backgrounding, off-screen state, repeated failure, median frame rate below 55fps, or repeated frames over 25ms
**When** WebGL eligibility changes
**Then** the enhanced scene suspends or becomes terminally disabled for the session as specified by AD-4
**And** the optimized static paper/navy/coral substrate and complete HTML story remain visible without warning or blank canvas.

**Given** VA-15 user-preference paths
**When** reduced motion, coarse pointer, Save-Data, no JavaScript, or WebGL-disabled states are exercised
**Then** content, links, order, anchors, navigation, portrait, and settled compositions remain identical in meaning
**And** pinning, animated extraction, shader displacement, auto-registration, and nonessential interpolation are absent.

**Given** VA-16 delivery-failure paths
**When** portrait or chapter assets fail or decode slowly
**Then** intrinsic space, copy, links, accessible descriptions, and documented quiet fallbacks remain stable
**And** no broken-image UI, lost artifact, fabricated replacement, or layout shift appears.

**Given** the required enhancement evidence matrix
**When** captures and traces run
**Then** VA-11 and VA-12 record every progress checkpoint on an eligible `>=1200px × >=720px` desktop, VA-13 records resize and lifecycle boundaries, and VA-14 records eligible, ineligible, context-loss, and performance-disable paths
**And** VA-15 and VA-16 record settled evidence at desktop, 1024px, 768px, 390px, and 320px where applicable, with complete browser and baseline metadata.

**Given** enhancement can affect settled geometry or paint
**When** G3 verification runs
**Then** every affected VA-01–VA-10 static row is rerun against the same production-export digest
**And** no enhancement row can pass by regressing a previously promoted static composition.

**Given** the WCAG 2.2 AA release floor
**When** automated and manual accessibility verification runs
**Then** landmarks, headings, skip link, keyboard traversal, focus visibility, forced colors, screen-reader descriptions, 44px targets, 200 percent zoom, enlarged fonts, sub-320px navigation, and no ornamental focus stops pass
**And** reduced-motion, no-JavaScript, missing-media, WebGL-failure, coarse-pointer, Save-Data, and background-tab paths retain the complete story.

**Given** the EXPERIENCE.md performance budgets
**When** repeatable desktop and mobile lab gates run against the production-equivalent export
**Then** LCP is at most 2.5s, INP at most 200ms, CLS at most 0.10, initial JavaScript at most 170KB gzip, deferred WebGL/R3F at most 300KB gzip, fonts at most 160KB, shader textures at most 400KB, and above-fold images at most 250KB mobile or 450KB desktop
**And** no initial-interaction task exceeds 200ms, reference pointer/scroll work stays below 8ms per frame, source rasters are not delivered, and image warnings are absent.

**Given** AD-8, AD-9, and AD-15
**When** Cloudflare release verification runs
**Then** the identical recorded `out/` digest produced by pinned Node/npm and `npm ci` is the deployment unit, routing and assets work without a server runtime, and Cloudflare Pages readiness passes
**And** Cloudflare Web Analytics is the sole v1 field-performance source without cookies, local storage, or fingerprinting.

**Given** the full project verification suite
**When** Story 5.5 is submitted to G3 and G4
**Then** lint, type/build, content and link checks, prohibited-copy and legacy scans, asset verification, structural browser tests, accessibility checks, responsive overflow checks, motion/WebGL lifecycle tests, screenshot comparisons, performance budgets, and Cloudflare-readiness checks all pass
**And** every result is linked to its acceptance row and immutable export digest.

**Given** AD-10 through AD-13
**When** specialist review and promotion occur
**Then** animation/WebGL, responsive/accessibility, visual-fidelity, and adversarial code/verification reviewers remain read-only and report independently
**And** only a non-implementing strong orchestrator may promote G3/G4 baselines, approve a scoped unexpired exception, or authorize advancement.

**Given** any material failure, expired exception, or invalidated baseline
**When** the evidence matrix is evaluated
**Then** work returns to its owning slice and Cloudflare release remains blocked
**And** no green lint, build, content, or performance result can waive visual, accessibility, fallback, or governance failure.
