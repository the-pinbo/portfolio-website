---
title: 'Opening thesis and resolved identity'
type: 'feature'
created: '2026-08-29'
status: 'done'
baseline_commit: 'fb4684d'
review_loop_iteration: 0
context:
  - "{project-root}/_bmad-output/planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md"
  - "{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md"
  - "{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md"
  - "{project-root}/_bmad-output/specs/spec-inba-dev/SPEC.md"
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The current page still renders the rejected hero copy, action buttons, navigation, and single-window portrait. The opening should resolve from a typographic thesis into the current identity with the canonical three-panel portrait triptych.

**Approach:** Replace the existing opening and identity markup with the approved thesis stage and identity frame, and introduce a server-rendered SVG portrait triptych using the exact DESIGN.md mask geometry.

## Boundaries & Constraints

**Always:** Opening contains the thesis and resolution cadence only. Identity contains the name, full role, supporting line, and one portrait triptych. Heading order uses one `h1` for the thesis and the name as the next appropriate heading.

**Ask First:** Adding a CTA, portrait pointer response, navigation, or any WebGL enhancement to this story.

**Never:** Use handwritten type, em dashes, overlapping text, a single-window portrait, custom cursor, or make identity copy depend on JavaScript.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| Normal load | Static HTML and local portrait | Thesis, identity copy, and triptych render without hydration | No blank opening |
| Portrait source missing | Image request fails | Triptych keeps its reserved box and paper-light fallback | No broken-image icon |
| Narrow viewport | 320px width | Triptych scales as one square stage without horizontal scroll | No overlap |

</frozen-after-approval>

## Code Map

- `app/page.tsx` -- replace the old hero and identity composition with the approved opening and identity sections.
- `components/portrait-triptych.tsx` -- new server component using the canonical 650-square SVG mask geometry.
- `app/globals.css` -- add the thesis-stage, identity-frame, and portrait-triptych styles while keeping existing legacy aliases.
- `components/split-portrait.tsx` -- no longer imported by the page after this story.

## Tasks & Acceptance

**Execution:**
- [x] `app/page.tsx` -- render the opening thesis and resolution cadence, then the identity frame with the name, role, supporting line, and portrait triptych -- establishes the approved first impression.
- [x] `components/portrait-triptych.tsx` -- create the SVG triptych with the three canonical masks and one accessible portrait name -- replaces the single-window portrait.
- [x] `app/globals.css` -- add the opening and identity layout tokens and responsive rules -- preserves the shared alignment spine and no horizontal scroll.

**Acceptance Criteria:**
- Given the page loads, when the opening renders, then only the thesis and resolution cadence appear with no buttons, portrait, or navigation.
- Given the identity frame renders, when the name, role, supporting line, and triptych are present, then the triptych uses the DESIGN.md mask bounds and one concise accessible name.
- Given 320px width, when the page reflows, then the triptych remains one scaled square stage without horizontal scroll.
- Given JavaScript is disabled, when the page loads, then all opening and identity copy remains readable.

## Spec Change Log

## Design Notes

The canonical mask bounds are documented in DESIGN.md under `Portrait triptych geometry`. Use an SVG viewBox of `650 650` with three rounded rectangles, not independent image scaling or CSS `clip-path` approximations.

## Verification

**Commands:**
- `npm run build` -- expected: static export succeeds.
- `npm run lint` -- expected: zero errors.
- `npm test` -- expected: tests pass.

**Manual checks:**
- Inspect the rendered opening and identity with JavaScript disabled.
- Confirm the portrait uses three masks and the complete center face is visible.

## Suggested Review Order

**Opening and identity composition**

- Establishes the thesis-only opening and resolved identity layout.
  [`page.tsx:10`](../../app/page.tsx#L10)

**Portrait triptych**

- Replaces the single-window portrait with the canonical three-mask SVG geometry.
  [`portrait-triptych.tsx:1`](../../components/portrait-triptych.tsx#L1)

**Responsive and visual rules**

- Adds thesis, identity, and triptych layout without horizontal overflow.
  [`globals.css:110`](../../app/globals.css#L110)

**Test alignment**

- Verifies the new opening, identity, and triptych contract.
  [`portfolio.test.mjs:14`](../../tests/portfolio.test.mjs#L14)
