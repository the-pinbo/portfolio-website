---
title: 'Site mark, section navigation, and stable anchors'
type: 'feature'
created: '2026-08-29'
status: 'done'
baseline_commit: '66989f6'
review_loop_iteration: 0
context:
  - "{project-root}/_bmad-output/planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md"
  - "{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md"
  - "{project-root}/_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/EXPERIENCE.md"
  - "{project-root}/_bmad-output/specs/spec-inba-dev/SPEC.md"
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The page has no stable section navigation, and the future Work, Research, Track Record, and Contact destinations do not yet exist as anchorable targets. Visitors cannot jump through the story and legacy anchors are still not fully replaced.

**Approach:** Add a server-rendered header after Identity with the quiet `inba.dev` site mark, centered section navigation, and the canonical anchor targets. Add a small client island that updates `aria-current` without moving focus.

## Boundaries & Constraints

**Always:** Keep `#top`, `#main-content`, and `#contact`. Add `#work`, `#research`, and `#track-record`. Site mark links to `#top` and stays quiet. Navigation uses Work, Research, Track Record, Contact in that order.

**Ask First:** Adding any new navigation destination, changing the destination order, or making the header visible inside the opening viewport.

**Never:** Use `#systems` or `#credibility`, attach navigation to the right edge, use a live region for active state, or move focus during observation.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| Desktop | Width at least 1100px | Header uses three balanced zones with centered navigation | No right-edge attachment |
| Mobile | Width 480px or less | Navigation remains readable with 44px targets and sticky offset | No horizontal scroll |
| Active section change | Visitor scrolls between chapters | `aria-current` updates without moving focus or announcing a live region | No focus jump |
| Legacy anchor | `#systems` or `#credibility` requested | No such anchor exists | Browser remains at current position |

</frozen-after-approval>

## Code Map

- `app/page.tsx` -- add the header, section navigation, and placeholder anchor targets.
- `components/site-navigation.tsx` -- server-rendered site mark and navigation shell.
- `components/active-section-observer.tsx` -- client island for quiet `aria-current` updates.
- `app/globals.css` -- add header, navigation, sticky, and anchor-offset styles.

## Tasks & Acceptance

**Execution:**
- [x] `app/page.tsx` -- add Work, Research, Track Record, and Contact anchor targets and render the header after Identity -- establishes the canonical navigation destinations.
- [x] `components/site-navigation.tsx` -- create the three-zone header with `inba.dev`, centered Work/Research/Track Record/Contact links, and an empty utility zone -- fixes the navigation layout.
- [x] `components/active-section-observer.tsx` -- update `aria-current="location"` from IntersectionObserver without moving focus or creating a live region -- keeps navigation accessible.
- [x] `app/globals.css` -- add sticky header, active state, 44px targets, and shared scroll-margin-top -- makes navigation usable and stable.

**Acceptance Criteria:**
- Given the page renders, when navigation is present, then Work, Research, Track Record, and Contact link to canonical anchors with the shared sticky offset.
- Given a visitor scrolls between chapters, when the reading zone changes, then `aria-current="location"` updates without moving focus or creating a live region.
- Given a 480px or narrower viewport, when navigation is visible, then all four destinations remain readable and have at least 44px hit areas.
- Given a direct request for `#systems` or `#credibility`, when the page loads, then neither anchor exists.

## Spec Change Log

## Design Notes

The header is placed after Identity in document order, so it is naturally outside the opening viewport without being opacity-hidden. Sticky behavior is layout-based.

## Verification

**Commands:**
- `npm run build` -- expected: static export succeeds.
- `npm run lint` -- expected: zero errors.
- `npm test` -- expected: tests pass.

**Manual checks:**
- Scroll across the page and confirm active navigation changes without focus movement.
- Test keyboard navigation from the site mark through all four destinations.

## Suggested Review Order

**Navigation and anchors**

- Adds the canonical section destinations and places navigation after Identity.
  [`page.tsx:31`](../../app/page.tsx#L31)

**Three-zone header**

- Establishes the quiet site mark, centered navigation, and empty utility zone.
  [`site-navigation.tsx:10`](../../components/site-navigation.tsx#L10)

**Active state**

- Updates `aria-current` from document position without moving focus.
  [`active-section-observer.tsx:1`](../../components/active-section-observer.tsx#L1)

**Sticky layout**

- Adds sticky behavior, active styling, 44px targets, and anchor offset.
  [`globals.css:197`](../../app/globals.css#L197)
