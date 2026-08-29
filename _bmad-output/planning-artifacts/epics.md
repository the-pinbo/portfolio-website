---
stepsCompleted: []
inputDocuments:
  - _bmad-output/specs/spec-inba-dev/SPEC.md
  - _bmad-output/planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md
  - _bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md
  - _bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md
---

# inba.dev - Epic Breakdown

## Overview

This document decomposes the finalized spec, architecture spine, and UX contract into implementable epics and stories for the inba.dev flagship portfolio.

## Requirements Inventory

### Functional Requirements

- FR1: Render one continuous scroll-led portfolio with the fixed section order: Opening, Identity, Smart Filters, ACE, VisionGuard, Research, Open Source, Patent, Track Record, Contact.
- FR2: Present the opening thesis and resolution cadence before biography or navigation.
- FR3: Present identity copy and the canonical portrait triptych.
- FR4: Present Smart Filters as a problem-led chapter with a query-to-filter visual mapping.
- FR5: Present ACE as a product offering an MCP app through the MCP app stack visual.
- FR6: Present VisionGuard with the complete editorial image, narrative, and Code, GSoC, Write-up links.
- FR7: Present Research with the ICASSP 2025 poster tile and Paper, Poster, Certificate links.
- FR8: Present Open Source with the double, float, posit32 comparison and Code, Certificate, Paper links.
- FR9: Present Patent with the voice-ledger illustration and Patent, Determinant Studios links.
- FR10: Present Track Record with exactly seven entries in the approved order.
- FR11: Present Contact with Email, LinkedIn, GitHub, and Resume, with Email first.
- FR12: Provide sticky section navigation for Work, Research, Track Record, and Contact with active state.
- FR13: Provide ambient WebGL substrate and bounded pinned sequences only where eligible, with static fallback.
- FR14: Provide literal artifact links with contextual accessible names and safe new-tab attributes.
- FR15: Remove obsolete legacy components, anchors, copy, styles, and tests after replacement.

### NonFunctional Requirements

- NFR1: Meet WCAG 2.2 AA, keyboard, screen reader, reduced motion, and touch accessibility requirements.
- NFR2: Meet the EXPERIENCE.md performance and delivery budgets.
- NFR3: Deploy as a Cloudflare Pages static export in v1.
- NFR4: Use light-only theme, Instrument Sans and IBM Plex Mono, system cursor, and no em dashes or forbidden credibility labels.
- NFR5: Serve responsive AVIF/WebP derivatives with declared dimensions, sizes, loading, and fallback.
- NFR6: Never fabricate screenshots, dashboards, metrics, documents, or customer quotes.

### Additional Requirements

- Preserve `#top`, `#main-content`, and `#contact`; add the canonical anchors with a shared sticky offset and remove legacy `#systems` and `#credibility`.
- Keep the route, narrative copy, headings, links, identity, and Track Record readable before JavaScript hydration.
- Limit client islands to `WebGLSubstrate`, `PinnedSequenceController`, and `ActiveSectionObserver`.
- Use one typed content module and one set of CSS variables/design tokens.

### UX Design Requirements

- UX-DR1: Implement `site-mark`, `section-navigation`, `thesis-stage`, `webgl-substrate`, `portrait-triptych`, and `contact-close`.
- UX-DR2: Implement `project-chapter` and the Smart Filters `query-to-filter-transform`.
- UX-DR3: Implement `editorial-visual`, `specimen-plate`, `mcp-app-stack`, `research-poster-tile`, `fractal-precision-plate`, and `voice-ledger-field`.
- UX-DR4: Implement `linked-artifact` and `typographic-index`.
- UX-DR5: Apply the canonical palette, spacing scale, typography tokens, focus recipe, and responsive breakpoints from DESIGN.md and EXPERIENCE.md.

### FR Coverage Map

- FR1: Epic 1, Epic 2, Epic 3
- FR2: Epic 1
- FR3: Epic 1
- FR4: Epic 2
- FR5: Epic 2
- FR6: Epic 2
- FR7: Epic 3
- FR8: Epic 3
- FR9: Epic 3
- FR10: Epic 3
- FR11: Epic 3
- FR12: Epic 1
- FR13: Epic 4
- FR14: Epic 2, Epic 3, Epic 4
- FR15: Epic 4

## Epic List

### Epic 1: Foundation and Identity

Establish the Cloudflare-ready Next.js foundation, design tokens, typography, responsive shell, opening thesis, identity frame, portrait triptych, and section navigation.

### Epic 2: Authored Work Story

Build the canonical content source and the Smart Filters, ACE, and VisionGuard work chapters with their visuals and artifact links.

### Epic 3: Proof Trail and Contact

Build Research, Open Source, Patent, Track Record, and Contact, making the public evidence trail and conversion path complete.

### Epic 4: Enhancement, Accessibility, Performance, and Legacy Removal

Add the progressive WebGL and pinned motion enhancements, then close accessibility, performance, deployment, and legacy-replacement gates.

## Epic 1: Foundation and Identity

### Story 1.1: Cloudflare-ready foundation and design tokens

As a visitor, I want the page to load with the approved Riso-tech editorial foundation, so that the experience is stable, responsive, and deployment-ready.

**Acceptance Criteria:**

**Given** the existing Next.js project, **When** the foundation story is implemented, **Then** `next.config.ts` uses `output: "export"`, fonts and design tokens are local, and the base shell renders without JavaScript.
**And** the approved palette, spacing, typography, and radii exist as root CSS variables.

### Story 1.2: Opening thesis and resolved identity

As a first-time visitor, I want to read the opening thesis and then see the resolved identity with the portrait triptych, so that I understand who the site represents before any navigation appears.

**Acceptance Criteria:**

**Given** the page is loaded, **When** the opening and identity sections render, **Then** the thesis, name, current role, supporting line, and portrait triptych appear in the approved order with no competing CTA.
**And** the portrait reserves a 1:1 box and uses the canonical mask geometry with a static fallback.

### Story 1.3: Site mark, section navigation, and stable anchors

As a visitor, I want sticky section navigation and stable anchors, so that I can move directly to Work, Research, Track Record, and Contact.

**Acceptance Criteria:**

**Given** the identity has resolved, **When** navigation is present, **Then** Work, Research, Track Record, and Contact link to their canonical anchors with the shared sticky offset.
**And** active state uses `aria-current="location"` without moving focus, and legacy `#systems` and `#credibility` are absent.

## Epic 2: Authored Work Story

### Story 2.1: Canonical content source and artifact link component

As a maintainer, I want one typed content source and one artifact link component, so that public copy and links stay consistent across chapters.

**Acceptance Criteria:**

**Given** the content module is defined, **When** any chapter renders, **Then** identity, links, projects, and Track Record data come from that module.
**And** artifact links use literal labels, contextual accessible names, and safe new-tab attributes.

### Story 2.2: Smart Filters chapter

As a visitor, I want to understand the Smart Filters problem and see a query resolve into filters, so that the work communicates product value and engineering judgment.

**Acceptance Criteria:**

**Given** the Work chapter renders Smart Filters first, **When** the query-to-filter visual is visible, **Then** "last week" and "cancellation" resolve to Date and Tracker rows as real DOM text.
**And** the chapter opens with the business friction and omits unapproved metrics, screenshots, and customer quotes.

### Story 2.3: ACE chapter

As a visitor, I want to understand that ACE offers an MCP app, so that the product and technical boundary are clear.

**Acceptance Criteria:**

**Given** the ACE chapter renders, **When** the MCP app stack is visible, **Then** ACE is the product, the MCP app is its offering, and the GraphQL contract seam joins governed capability with the app experience.
**And** `ACE.io` and `RingSense` do not appear.

### Story 2.4: VisionGuard chapter

As a visitor, I want to inspect VisionGuard through its complete editorial image and public links, so that open-source engineering depth is verifiable.

**Acceptance Criteria:**

**Given** the VisionGuard chapter renders, **When** the specimen plate is visible, **Then** the complete v2 image sits inside a navy inset, with Code, GSoC, and Write-up links available.
**And** copy and links precede the image on mobile.

## Epic 3: Proof Trail and Contact

### Story 3.1: Research chapter

As a visitor, I want to see the IISc research story and the ICASSP poster, so that research credibility is evident.

**Acceptance Criteria:**

**Given** the Research chapter renders, **When** the poster tile is visible, **Then** the authentic upper-poster crop appears in a 6:5 paper-light tile with a muted coral wash and no solid coral field.
**And** Paper, Poster, and Certificate links are available, with the complete poster linkable.

### Story 3.2: Open Source chapter

As a visitor, I want to compare double, float, and posit32 results, so that the numerical-systems work is concrete.

**Acceptance Criteria:**

**Given** the Open Source chapter renders, **When** the fractal precision plate is visible, **Then** three source-pixel panels are labeled double, float, and posit32, with only float and posit32 metrics shown.
**And** Code, Certificate, and Paper links are available and scientific pixels remain untouched.

### Story 3.3: Patent chapter

As a visitor, I want to understand the voice-to-ledger problem and named-inventor record, so that the patent is presented as evidence rather than decoration.

**Acceptance Criteria:**

**Given** the Patent chapter renders, **When** the voice-ledger illustration is visible, **Then** a coral instruction slip aligns with a navy ledger and resolves one generic row.
**And** Patent and Determinant Studios links are available; the wording is "Named inventor" with no sole-ownership claim.

### Story 3.4: Track Record chapter

As a visitor, I want to scan seven fully visible career entries, so that I can understand the path without decoding a timeline.

**Acceptance Criteria:**

**Given** the Track Record chapter renders, **When** the typographic index is visible, **Then** RingCentral, Linux Foundation, GSoC, IISc, Goldman Sachs, Determinant Studios, and NITK appear in order.
**And** no rows are links, controls, cards, timeline marks, or disclosure elements.

### Story 3.5: Contact chapter

As a visitor, I want one clear next action, so that I can reach Inbasekaran.

**Acceptance Criteria:**

**Given** the Contact chapter renders, **When** the close appears, **Then** Email, LinkedIn, GitHub, and Resume appear with equal visual weight, Email first.
**And** there is no form, newsletter, scheduler, role repeat, or competing CTA.

## Epic 4: Enhancement, Accessibility, Performance, and Legacy Removal

### Story 4.1: WebGL substrate and eligibility fallback

As a capable desktop visitor, I want a restrained ambient ink response, so that the page feels technically considered without becoming noisy.

**Acceptance Criteria:**

**Given** WebGL2, fine pointer, no Save-Data, and no reduced motion, **When** the substrate initializes after first paint, **Then** the canvas is decorative, `aria-hidden`, non-focusable, and `pointer-events: none`.
**And** every ineligible state renders the static composited substrate with no warning or blank canvas.

### Story 4.2: Pinned sequences and portrait pointer response

As a desktop visitor, I want the opening and Smart Filters sequences to resolve naturally, so that motion supports the story without hijacking scroll.

**Acceptance Criteria:**

**Given** eligibility conditions pass, **When** the page scrolls through the opening and Smart Filters, **Then** only those two chapters use bounded pinned sequences and progress checkpoints.
**And** reduced motion, touch, or ineligible viewports show settled content with no pinning.

### Story 4.3: Accessibility and responsive compliance

As any visitor, I want the page to be usable with keyboard, screen reader, reduced motion, zoom, and narrow viewports.

**Acceptance Criteria:**

**Given** the complete page renders, **When** accessibility and responsive checks run, **Then** WCAG 2.2 AA, 44px targets, focus visibility, skip link, and no horizontal scroll at 320px or 200 percent zoom pass.
**And** ornamental layers create no focus stops or hidden information.

### Story 4.4: Media delivery, performance, deployment, and legacy removal

As the owner, I want the site to meet performance budgets, deploy to Cloudflare Pages, and remove obsolete code.

**Acceptance Criteria:**

**Given** the site is release-candidate, **When** build, Lighthouse, media, and legacy checks run, **Then** the EXPERIENCE.md budgets pass and no rejected terms, duplicate IDs, or stale anchors remain.
**And** Cloudflare Pages static export succeeds with responsive AVIF/WebP derivatives and no Node-only runtime assumption.
