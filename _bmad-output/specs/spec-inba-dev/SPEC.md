---
id: SPEC-inba-dev
companions:
  - ../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md
  - ../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md
  - ../../../brain-dump/portfolio-content.md
  - ../../planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/mockups/assets/manifest.md
  - ../../planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md
  - stack.md
  - assets.md
  - links.md
sources: []
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability only. The obsolete `spec-build-personal-portfolio.md` is superseded and must not guide implementation.

# inba.dev flagship portfolio implementation contract

## Why

This is a vision and brand opportunity. Inbasekaran Perumal needs a public portfolio that presents him as an AI/ML systems engineer who turns meaningful business problems into reliable software and AI systems, rather than a chronological resume or an AI-generated template. The prior implementation used an outdated design language, exposed rejected copy, and did not reflect the approved Riso-tech editorial direction. The UX, content, motion, responsive, accessibility, and asset decisions are now finalized in the approved spines, so this contract freezes them into one implementation target.

The audience is founders, engineering leaders, and recruiters deciding whether to contact him for difficult product and systems work. The site must infer high agency through work, evidence, and restraint, and must be buildable without re-litigating design.

## Capabilities

- **CAP-1**
  - **intent:** A visitor can experience the complete portfolio story in one continuous scroll from opening thesis through contact without page navigation.
  - **success:** The fixed section order renders in the approved sequence, each canonical anchor resolves to its settled chapter, and no separate About, Skills, Method, or secondary-project page exists.

- **CAP-2**
  - **intent:** A visitor on desktop, tablet, and narrow mobile sees the approved Riso-tech editorial identity, typography, palette, and chapter compositions.
  - **success:** Key screens at 320px, 768px, 1024px, and 1199px or wider match the canonical DESIGN/EXPERIENCE references with no horizontal scroll, overlap, or broken fallback.

- **CAP-3**
  - **intent:** A reader can follow every material public claim to an adjacent literal artifact link with enough context to understand what it verifies.
  - **success:** All public copy and artifact destinations come from the canonical content source; unsupported or confidential outcomes are absent, and forbidden credibility labels do not appear in rendered output.

- **CAP-4**
  - **intent:** A capable desktop visitor receives the approved subtle WebGL ink and bounded pinned choreography, while every other visitor receives the same content in a settled static state.
  - **success:** WebGL and pinning initialize only when every eligibility condition holds, remain decorative, and degrade to the settled static composition without losing narrative content or links.

- **CAP-5**
  - **intent:** Any visitor can read, navigate, and reach contact with keyboard, screen reader, reduced motion, or constrained network and hardware.
  - **success:** Automated WCAG 2.2 AA checks, keyboard-only flows, the skip link, reduced-motion and no-JavaScript states, and the performance budgets in EXPERIENCE.md all pass before release.

## Constraints

- The page is light-only. No dark theme, theme toggle, or system-theme variant exists in v1.
- Typography uses exactly Instrument Sans for display/body/UI and IBM Plex Mono for technical metadata and labels. No handwritten, serif, or novelty type appears.
- Public copy contains no em dashes and no forbidden labels such as Featured, Award Winning, Proof, Verified, Production-ready, What I Owned, Flagship Systems, or Engineering Loop.
- The default system cursor remains. No custom cursor, follower, spotlight, or visible pointer artifact is added.
- Section order is fixed: Opening, Identity, Smart Filters, ACE, VisionGuard, Research, Open Source, Patent, Track Record, Contact.
- Stable anchors `#top`, `#main-content`, and `#contact` remain. Canonical anchors `#identity-frame`, `#work`, `#smart-filters`, `#ace`, `#visionguard`, `#research`, `#open-source`, `#patent`, and `#track-record` resolve with the sticky navigation offset. Legacy `#systems` and `#credibility` are removed without aliases.
- ACE is the product name. ACE offers an MCP app, but ACE itself is never described as an MCP app. `ACE.io` and `RingSense` do not appear in public copy.
- Smart Filters is first, ACE second, VisionGuard third. Aura, dark mode, handwritten type, custom cursor, Engineering Loop, What I Owned, and Flagship Systems are excluded.
- Contact exposes Email, LinkedIn, GitHub, and Resume. Email remains first; the temporary resume Drive link is the sole public resume destination.
- RingCentral product work stays high level. Do not publish metrics, screenshots, customer quotes, or internal architecture until approved.
- Only the Opening and Smart Filters chapters may use eligible pinned sequences. No other chapter pins, snaps, hijacks scroll, or captures keyboard scrolling.
- The route, narrative copy, headings, artifact links, identity copy, portrait markup, settled Smart Filters mapping, Track Record entries, navigation markup, and contact actions must be readable before JavaScript hydration.
- Contrast roles, spacing scale, layout grids, component geometry, portrait triptych masks, and media fallback rules follow DESIGN.md and EXPERIENCE.md over any other artifact.
- Generated editorial illustrations are allowed for confidential or visually inconsistent work, but never fake official screenshots, dashboards, metrics, documents, or customer quotes.
- Artifact links use native elements, literal labels, safe new-tab attributes, and contextual accessible names.
- Deploy to Cloudflare Pages or Cloudflare Workers and verify routing, response, and performance against that target.

## Non-goals

- No About, Skills, Method, Engineering Loop, blog, or secondary-project rail.
- No multi-page application, authentication, CMS, backend, dynamic external content, or user-generated data.
- No Aura content.
- No second resume or curriculum-vitae source beyond the temporary resume Drive link.
- No dark mode, audio, or autoplay video.
- No replacement of the approved portrait with retro pixel, voxel, or a different face.

## Success signal

The production build passes the content-contract tests, responsive visual-regression gates at 320px, 768px, 1024px, and 1199px or wider, canonical-anchor and artifact-link checks, automated accessibility checks, and the Lighthouse budgets in EXPERIENCE.md. Rendered output contains none of the rejected legacy terms or duplicate IDs, and the complete story remains readable with JavaScript and WebGL unavailable.

## Assumptions

- Implementation continues on the existing Next.js App Router, React, TypeScript, and Tailwind CSS v4 foundation described in `stack.md`, with Cloudflare Pages or Cloudflare Workers as the deployment target.
- The existing source components and content model may be replaced to satisfy the new contract, while preserving the three stable anchors.
- No RingCentral quantitative outcome or customer quote has been approved at the time of this contract; Smart Filters and ACE are described through problem, judgment, ownership, and observable integration rather than numbers.
- The supplied editorial portrait remains the portrait subject and follows the canonical 650-square triptych geometry in DESIGN.md.
