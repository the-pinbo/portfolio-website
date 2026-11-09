---
title: 'Wide-screen opening and timeline/case-page annotation fixes'
type: 'bugfix'
created: '2026-11-09'
status: 'done'
review_loop_iteration: 0
baseline_commit: 'adcf2092f06fa5d4e6a1f356b6d0d9086aa7b19c'
context: []
---

<frozen-after-approval reason="User authorized all ten latest browser comments">

## Intent

**Problem:** On large monitors the identity leaks into the opening thesis. Experience still reads as a résumé with descriptions, and case-page labels and looping navigation create visual and behavioral clutter.

**Approach:** Correct full-viewport opening travel, make experience a compact role/date timeline, and refine case-page hierarchy and a finite forward-reading path. Follow the existing paper/navy/red editorial visual language.

## Boundaries & Constraints

**Always:** Preserve all staged, unstaged and user edits. Keep source scientific media, native portrait masks, current routes, claim qualifiers and attribution. Latest ten comments supersede earlier copy/layout requirements. Content should grow at small widths; keep keyboard, no-JS and reduced-motion behavior.

**Ask First:** Deployment and destructive actions, neither required.

**Never:** Push, deploy, reset the index, fabricate claims, remove actual timeline roles, or loop the last project back to the first.

## I/O & Edge-Case Matrix

| Scenario | State | Expected behavior |
| --- | --- | --- |
| Large monitor | 1920/2560/3440 width, progress zero | Identity and portrait fully outside visible intro; reversible motion still works |
| Fallback / resize | 861px or reduced motion, then desktop resize | Readable stacked chapters, no horizontal overflow or accidental identity reveal at intro start |
| Same employer | RingCentral consecutive roles | Shared company heading with compact consecutive role/date rows |
| Case progression | First through last project | Forward links reach each later case once; last returns to /#work |

</frozen-after-approval>

## Code Map

- `app/globals.css`: `.hero` and statement transforms currently use 115% of a max-1200px panel. At1920 panel starts1740 despite progress0; viewport-distance injected probe starts2280 and hides it. Stage clipping and progress were correct. Use viewport-based travel in both directions to keep intro and resolved identity isolated on wide monitors. Preserve progress/end hold and vertical pin release.
- `content/portfolio.ts`: `trackRecord` has three descriptions (RingCentral, Goldman, education). Remove job descriptions entirely. Move CGPA/class rank into education role text using pipes: B.Tech, Electronics and Communication Engineering | CGPA 9.19/10 | Class rank 4/138. Keep all eight entries. Rename project title from ACE MCP reporting to ACE MCP everywhere data-driven; reporting remains accurate feature description, routes stay ace-mcp.
- `app/page.tsx`: remove timeline description rendering and simplify model if no other consumer needs it. Keep role/date alignment and continuation styling.
- `app/globals.css`: first RingCentral entry bottom padding26 plus next role margin8 produces a conspicuous gap. Add explicit same-company grouping styling, close roles with a restrained ~12–16px gap, preserve larger company separations. Education metadata may wrap naturally, with consistent dates.
- `components/project-diagram.tsx`: user already commented out reporting figcaption; delete commented markup and keep the existing illustrative-question label and accurate tool/client semantics. No caption required.
- `app/work/[slug]/page.tsx`: remove Selected work eyebrow on all four case headers; title then supporting headline should lead. Current next uses modulo and giant link opposite tiny label. Use `projects[index+1]` without modulo. Make a single left-aligned compact navigation group using red-arrow artifact styling: small readable cue 'Continue to' followed by next project link with modest hierarchy. Final uses 'Explore more' and link 'Back to selected work' to /#work. Keep navigation accessible name 'Next project' for forward cases; final can use 'More work'. Keep top All work link.
- Shared case CSS: modest title/supporting-line/body hierarchy, reasonable reading width, consistent spacing, compact footer aligned with reading content. Avoid huge isolated successor name and widely separated cue/link.
- `tests/visual/annotation-followup.spec.ts`: parent-owned failing wide regression already run red at1920 (x1740 expected>=1920). Parent owns all tests/package/docs and captures.

## Tasks & Acceptance

- [x] Correct viewport opening travel and validate before/after large-screen reproduction.
- [x] Simplify timeline copy, inline education details and tighten same-company role spacing.
- [x] Rename ACE MCP, remove labels/caption and refine finite case navigation and hierarchy.
- [x] Parent verifies wide/tablet/mobile, current regression suites, independent adversarial review and accepted snapshot comparisons.

Given the initial wide-screen thesis, when stationary at scroll0, then no identity content appears anywhere in the viewport.
Given consecutive company roles, when reading experience, then only institution, roles and dates appear, with education qualifiers inline.
Given the last project, when using footer navigation, then it returns to selected work instead of restarting the cases.

## Verification

Pinned runtime `/private/tmp/inba-runtime/node-v24.20.0-darwin-arm64/bin`.
Parent owns test updates and build/captures. Implementer runs lint/typecheck only, then reports readiness. Parent runs the complete expanded release gate after review and baseline acceptance. Include large monitor renders and both Chromium/WebKit opening checks. Do not update snapshots blindly.

## Final Verification

Release gate passed with zero lint warnings, 11 Node tests and 56 browser/screenshot checks. Initial large-screen regression ran red before the viewport-travel repair; all large monitor and resize checks passed in Chromium and WebKit. Three independent reviews returned no remaining findings. Nothing committed, pushed or deployed; existing index preserved.

## Suggested Review Order

- Viewport travel isolates the intro across wide monitors.
  [globals.css:156](../../app/globals.css#L156)

- Compact role/date timeline and inline education metadata.
  [portfolio.ts:141](../../content/portfolio.ts#L141)

- Finite case progression and restrained left-side navigation.
  [page.tsx:42](../../app/work/[slug]/page.tsx#L42)

- Regression evidence for monitor sizes, timeline and case navigation.
  [annotation-followup.spec.ts:3](../../tests/visual/annotation-followup.spec.ts#L3)

