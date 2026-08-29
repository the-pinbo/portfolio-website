# Spine Pair Review — inba.dev flagship portfolio

## Overall verdict

The spine pair is coherent, source-aware, and unusually strong on narrative order, progressive enhancement, motion restraint, and anti-template discipline. It is not yet a clean downstream implementation contract: three load-bearing areas still require invention by an implementer—accessible accent/metadata colors, durable visual references for the unmocked chapters, and one explicit resolution of the identity-copy conflict with the canonical content source.

## 1. Flow coverage — strong

The two frontmatter sources were read and their founder-facing narrative, inspectable-artifact, responsive-access, current-role, education, and contact requirements were traced through the three named Key Flows. Every flow has a named protagonist, numbered steps, a clear climax, and an applicable failure path; together they cover founder, engineering-leader, and mobile recruiter journeys without turning the document into a resume flow.

### Findings

No misses.

## 2. Token completeness — adequate

All frontmatter color, typography, radius, spacing, and component tokens are defined, every prose token reference resolves, and every color token has a hex value. The remaining gap is that some declared semantic uses are incompatible with the stated WCAG 2.2 AA floor unless the implementer invents a darker variant or changes the usage.

### Findings

- **high** The load-bearing contrast contract is not fully committed. `{colors.structure}` (`#8797A2`) is assigned to diagram labels and quiet metadata but measures about 2.60:1 on `{colors.paper}`; `{colors.coral}` measures about 3.22:1 on paper and is still permitted for selected phrases and focus; `{colors.on-coral}` measures about 3.43:1 on coral. These do not support small normal text at AA, while the spine also declares 12px metadata and diagram values (DESIGN.md:9-19, 81-86, 185-192; EXPERIENCE.md:114-125). *Fix:* commit an explicit foreground/background contrast matrix and either add darker accessible text/focus tokens or restrict coral, structure, and on-coral to non-text/large-text uses with a named accessible companion treatment.

## 3. Component coverage — adequate

All eleven named components appear in both `DESIGN.md.Components` and `EXPERIENCE.md.Component Patterns`, with real visual and behavioral rules. Three interaction details still leave materially different implementations possible.

### Findings

- **medium** `portrait-triptych` is described as receiving pointer/**focus** response even though its interaction is explicitly ornamental and adds no hidden information. This leaves the implementer to choose between adding non-actionable tab stops and dropping the promised focus equivalent (EXPERIENCE.md:68, 84, 121). *Fix:* state that the figure and panels are not keyboard-focusable; keep the effect pointer-only/automatic and preserve the single accessible image alternative, or give focus a real actionable target.
- **medium** `typographic-index` mixes row reveal, keyboard focus, tap, “second tap,” and an optional explicit link without defining the interactive owner or nested-link model. That is ambiguous for keyboard, screen-reader, and touch implementation (EXPERIENCE.md:73, 90, 101). *Fix:* commit one pattern—for example, a non-navigating disclosure button per row plus separate native artifact links—and specify expanded, collapsed, focus, and Escape/outside-tap behavior.
- **medium** Mobile `section-navigation` is only described as a “compact, horizontally safe treatment,” while the component is otherwise fixed and all four destinations must remain visible. An implementer still has to choose wrapping, horizontal scrolling, shrinking, or a menu, each with different behavior and accessibility consequences (EXPERIENCE.md:65, 143-150). *Fix:* name the mobile navigation topology, fixed/sticky behavior, overflow behavior, active-item visibility, and minimum target treatment.

## 4. State coverage — adequate

The public single-page surface covers initial load, enhancement failure, reduced motion, chapter entry, active navigation, artifact focus, missing editorial artwork, Track Record engagement, and contact focus. Offline, permission-denied, and application-style empty states are correctly inapplicable.

### Findings

- **medium** The central identity asset has no failure state. `editorial-visual` has a missing-artwork fallback, but `portrait-triptych`—the load-bearing identity reveal—does not specify behavior when the portrait source fails or decodes late (EXPERIENCE.md:80-91, 121). *Fix:* define a no-layout-shift poster/fallback treatment, retain the single portrait alternative, and state whether the triptych masks collapse, show a prepared raster, or remain as quiet print plates.

## 5. Visual reference coverage — thin

There are no `mockups/`, `wireframes/`, or `imports/` files, so there are no directory orphans. Both spines link the one working HTML direction inline, describe what it illustrates, and state that the spines win on conflict.

### Findings

- **high** The only visual reference is still under `.working/` and covers only Opening, Identity, and the Smart Filters entry. ACE io MCP, VisionGuard, Research, Open Source, Patent, Track Record, Contact, the mobile navigation, and key responsive states have no durable composition reference even though several are required to use distinct, non-repeating chapter compositions (DESIGN.md:183, 208-212, 233-238; EXPERIENCE.md:18, 24-40, 139-150). *Fix:* promote the approved direction to `mockups/`, create the planned key-screen references for the remaining load-bearing chapter families and responsive states, then link each inline at the relevant component/IA section with a one-sentence illustration note.

## 6. Bloat & overspecification — adequate

The extra Motion and WebGL section earns its place because it constrains a signature implementation risk, and the documents avoid restating the resume or content ledger. Most prose carries a decision an architect or implementer can use.

### Findings

- **low** The rejected-pattern inventory is repeated across DESIGN.md Do's and Don'ts, EXPERIENCE.md Voice and Tone, Interaction Primitives, and Inspiration & Anti-patterns. The repetition is consistent but increases maintenance drift risk (DESIGN.md:240-255; EXPERIENCE.md:42-56, 93-103, 128-137). *Fix:* keep visual prohibitions canonical in DESIGN.md, behavioral prohibitions canonical in Interaction Primitives, and let Inspiration cite those sections instead of relisting them.

## 7. Inheritance discipline — adequate

Both `sources` paths resolve, all component names match between spines, all EXPERIENCE token references resolve to DESIGN tokens, and the internal vocabulary is mostly stable. Two source-to-spine naming conflicts remain.

### Findings

- **high** The canonical content source includes the resolved-identity line “Building intelligent systems that hold up in real use,” while the approved identity composition and UX spine deliberately omit it. The spines only declare that they win over the working mock, not over the canonical content source, so a downstream extractor cannot determine which source owns the identity copy (brain-dump/portfolio-content.md, “Resolved identity”; DESIGN.md:183, 202; EXPERIENCE.md:18, 27, 56). *Fix:* record an explicit UX override stating that the identity frame contains only name and role in v1, or update the canonical public copy through the content-governance path before implementation.
- **low** The source and specification use the full name `ACE io MCP server`, while IA and flows shorten it to `ACE io MCP`. This is understandable editorially but violates strict verbatim extraction and could leak into headings or metadata inconsistently (brain-dump/portfolio-content.md, “ACE io MCP server”; EXPERIENCE.md:28-31, 69, 162, 169). *Fix:* define one canonical public project name and use it verbatim in IA, flows, headings, and artifact metadata.

## 8. Shape fit — strong

DESIGN.md follows the canonical order exactly: Brand & Style, Colors, Typography, Layout & Spacing, Elevation & Depth, Shapes, Components, and Do's and Don'ts. EXPERIENCE.md includes every required default plus warranted Inspiration, Responsive, and Motion/WebGL sections; the single-page responsive and reference-product triggers are handled explicitly.

### Findings

No misses.

## Mechanical notes

- Both frontmatter `sources` entries resolve from both spine locations.
- Every `{path.to.token}` reference resolves; no undefined token paths were found.
- Component vocabulary is one-to-one across the two spines: `site-mark`, `section-navigation`, `thesis-stage`, `webgl-substrate`, `portrait-triptych`, `project-chapter`, `query-to-filter-transform`, `editorial-visual`, `linked-artifact`, `typographic-index`, and `contact-close`.
- The working HTML reference and its portrait/texture asset paths resolve at review time.
- No files exist under `mockups/`, `wireframes/`, or `imports/`; the only visual reference is `.working/direction-riso-tech-editorial.html`.
- No Mermaid blocks are present, so Mermaid syntax is not applicable.
- Finding counts: **critical 0 · high 3 · medium 4 · low 2**.
