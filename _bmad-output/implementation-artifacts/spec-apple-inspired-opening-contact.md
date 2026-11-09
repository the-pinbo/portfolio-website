---
title: Apple-inspired opening, identity and contact refinement
type: feature
created: 2026-11-09
status: done
baseline_commit: a0e28610c7dd4c5e08dac54dfac00299f304fe06
review_loop_iteration: 0
context:
  - docs/design-guide.md
  - docs/agents/domain.md
---

<frozen-after-approval reason="user-authorized intent">

## Intent

**Problem:** The opening, identity and contact sections rely on oversized text and disconnected small actions. The user supplied three screenshots and an Apple design reference, asking for implementation that improves hierarchy, positioning, elegance and professionalism.

**Approach:** Refine these three sections as one coherent composition using restrained display type, deliberate grouping and clear primary actions. Interpret Apple as an aesthetic direction rather than a component package or permission to copy its branding.

## Boundaries & Constraints

**Always:** Keep the warm paper, navy and red identity, existing portrait SVG masks, factual claims and canonical destinations. Keep the existing horizontal opening on capable desktops and readable document flow with reduced motion, narrow screens and no JavaScript. Preserve stable anchors, keyboard navigation, visible focus, static export and scientific imagery. Keep all narrative in content/portfolio.ts. Use native CSS and existing components without new dependencies. Design variance 5, motion 4, density 3: restrained layout, existing scroll movement and subtle action feedback.

**Ask First:** Publishing or changes beyond these three sections and shared navigation presentation.

**Never:** Invent achievements, replace scientific/portrait assets, change URL structures or navigation labels, add speculative UI, rewrite other chapters, or update approved visual snapshots merely to make comparisons pass.

</frozen-after-approval>

## Code Map

- `app/page.tsx`: opening-statement and hero markup, followed by work/research/experience. Preserve the other chapter markup.
- `app/globals.css`: shared tokens and layout; selectors for opening-statement, hero-name, lead, hero-role, hero-actions and contact-close are the primary refinement surface. Existing desktop animation measures header height and translates panels by full viewport width.
- `components/contact-close.tsx`: contact presentation, currently four equally weighted LinkedArtifact links.
- `components/linked-artifact.tsx`: existing safe external-link semantics and context; add an optional presentation variant if needed, keeping defaults identical for artifact links elsewhere.
- `content/portfolio.ts`: homepage thesis, name, introduction and contact object. Own any newly extracted copy here, including existing hardcoded cadence/role.
- `components/portrait-triptych.tsx`: preserve this source and SVG rendering mechanism.
- `components/opening-sequence.tsx`: preserve scroll enhancement and focus recovery behavior.
- `docs/design-guide.md`: maintained design contract; document refined opening/contact hierarchy after changes.
- `tests/visual/chapters.spec.ts`, `annotation-followup.spec.ts`, `no-js.spec.ts`, `safari.spec.ts`: existing responsive, animation, keyboard and WebKit coverage.

## Tasks & Acceptance

**Execution:**
- [x] `content/portfolio.ts`, `app/page.tsx`: introduce a two-phrase thesis hierarchy, group role with identity and introduction, keep factual copy and provide a prominent Explore my work action.
- [x] `components/contact-close.tsx`, `components/linked-artifact.tsx`: make email primary, other destinations secondary, retain accessible link semantics and default artifact treatment elsewhere.
- [x] `app/globals.css`: use scoped refinements to typography, spacing, action hierarchy and responsive layout. Keep existing palette and portrait. Refine shared navigation only if it improves the result without creating scope drift.
- [x] `docs/design-guide.md`: record hierarchy and action styles, including responsive behavior.
- [x] Verify build, lint, types, content/assets/legacy, Node tests and browser checks; inspect actual desktop/mobile renders and independent review.

**Acceptance Criteria:**
- Given desktop opening, when first viewed, then a deliberate, readable thesis is the dominant element and supporting cadence clearly belongs to it.
- Given identity at 320 through 3440 widths, when viewed or reached by keyboard/fragment, then name, current role, introduction, portrait and actions remain legible without overlap or horizontal overflow.
- Given contact, when viewed at desktop/mobile, then email is the most prominent actionable element and LinkedIn, GitHub and résumé remain discoverable.
- Given reduced motion or disabled JavaScript, when reading, then all essential text and destinations remain reachable in document order.
- Given work and research, when viewed after this change, then their existing typography and artifact links remain unchanged.

## Spec Change Log

## Design Notes

Use weight, line height and grouping together; do not shrink everything uniformly. Preserve the expressive portrait as the identity's visual counterweight. Primary links may be navy pills with generous hit targets, secondary links clean sans text with an unobtrusive trailing arrow. Use the same action family in identity and contact. Keep large type tracking less cramped than the current -0.045em and avoid a full sentence at contact's current 108px size. Large-screen layout stays bounded rather than growing indefinitely.

## Verification

Use Node 24.20.0 and npm 11.19.0 in /private/tmp/inba-runtime/node-v24.20.0-darwin-arm64/bin (prepend to PATH).

- `npm run lint -- --max-warnings=0`, `npm run typecheck`, `npm run build`: pass.
- `npm run verify:content`, `npm run verify:assets`, `npm run verify:legacy`, `npm test`: pass.
- `npm run visual:smoke`, `npm run visual:chapters`, `npm run visual:webkit`: pass.
- Inspect opening, identity and contact screenshots at desktop/tablet/mobile and full width matrix from design guide. Inspect normal-motion, no-JS and reduced-motion behavior. Refresh only homepage baselines after inspecting intentional changes; retain case-study baselines.
- `git diff --check`: pass.

## Review and verification results

The initial independent design review recommended bounded headings, grouped identity copy, larger actions and email priority. Blind review found abrupt type changes at 650/651px, weak mobile contact grouping and missing keyboard/press feedback. These were patched: mobile type now meets desktop sizes continuously, contact secondary links form a separate mobile row, primary action intent is explicit in content, and focus/press states are defined. Edge-case review returned no findings. The separate verification reviewer could not complete because its service usage limit was reached; the parent performed the verification review and browser checks directly.

Build, lint, typecheck, content/assets/legacy checks and 11 Node tests passed. Final browser checks passed: 7 smoke/no-JS, 18 chapter, 21 WebKit and 8 unchanged case-study screenshot comparisons. Captured the three changed sections at 320, 390, 768, 861, 901, 1185, 1345, 1440, 1920, 2560 and 3440 widths with no horizontal overflow; inspected desktop, tablet, mobile and short-screen animation. Temporary browser checks verified action hit targets and containment, including no-JS mobile and short viewports. The two intentional homepage screenshots are refreshed after inspection; no case-study baselines are altered. No production deployment is performed.

## Suggested Review Order

- Opening composition and profile hierarchy.
  [page.tsx:21](../../app/page.tsx#L21)

- Scoped type and action presentation.
  [globals.css:138](../../app/globals.css#L138)

- Contact prioritizes email and groups secondary destinations.
  [contact-close.tsx:4](../../components/contact-close.tsx#L4)

- Preserved link semantics with optional presentation.
  [linked-artifact.tsx:8](../../components/linked-artifact.tsx#L8)

- Maintained design contract.
  [design-guide.md:11](../../docs/design-guide.md#L11)
