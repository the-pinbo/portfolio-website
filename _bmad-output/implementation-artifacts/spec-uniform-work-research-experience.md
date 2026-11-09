---
title: Uniform work, research and experience hierarchy
type: feature
created: 2026-11-09
status: done
baseline_commit: a6b15d866bca2a59839e56a110a348dc252b87c8
review_loop_iteration: 0
context:
  - docs/design-guide.md
  - docs/agents/domain.md
---

<frozen-after-approval reason="user-authorized implementation">

## Intent

**Problem:** The user approved the opening/profile direction and asks to apply the same crisp, Apple-inspired hierarchy and wording across Work, Research and Experience. The current chapters use cramped headings, long paragraphs and caption-like role text, with different action styles.

**Approach:** Extend the existing typography, spacing and action family across the remaining homepage chapters and work case studies. Shorten narrative without weakening factual boundaries; keep research artifacts available and original images intact. Use restrained native CSS with variance 5, motion 4 and density 3, as in the previous refinement. This is an aesthetic continuation, not an Apple component library or wholesale redesign.

## Boundaries & Constraints

**Always:** Preserve static rendering, chapter minimum heights, stable IDs/routes, real media, metrics, dates, publication status and contribution attribution. Keep warm paper/navy/red, Instrument Sans reading copy and IBM Plex Mono compact metadata. Preserve the approved opening, portrait, contact and motion. All narrative/labels belong in content/portfolio.ts; destinations stay in content/links.ts. Existing tests must continue to protect actual content/layout behavior; adjust obsolete visual assumptions only for deliberate inspected design changes.

**Ask First:** Publishing, new achievements/claims or replacing original media.

**Never:** Add decorative cards, metric strips, large heading-only interstitials, animations or dependencies. Do not change publication status based on the current date. Do not remove the exact contribution distinction that another engineer implemented ACE MCP, or imply individual ownership of team outcomes. Do not change historical documents to match current implementation.

</frozen-after-approval>

## Code Map

- `app/page.tsx`: Work conditional labels/headlines, three hardcoded Research articles, Experience role/date rows. Preserve IDs and data flow. Add research metadata labels and drive headlines/links from content to avoid duplicates.
- `content/portfolio.ts`: canonical projects, homepage narratives, trackRecord, captions and labels. Research currently lives as three homepage strings; replace with a typed exported research-story collection containing stable id, eyebrow, heading, summary, links and visual discriminant, or a similarly small data structure. Keep full paper names in accessible reference context where practical.
- `content/links.ts`: canonical destinations; no destination changes needed.
- `app/globals.css`: Work and Research duplicate chapter rules and need a shared heading/body scale; Experience roles are 13px mono. Case title/body/labels need the same hierarchy. Existing action-link classes provide sans text, trailing arrows, min-height 48px and accessible focus/press feedback.
- `components/linked-artifact.tsx`: centralize all reference/action appearances around the existing action family. Preserve linked-artifact base class for current selectors, external rel/target/context/new-tab announcements. All links should have a decorative trailing ↗ for external websites, → for local destinations. Primary navy pills remain only for primary actions. Remove old leading-arrow/mono/default underline CSS rather than layering conflicting selectors.
- `app/work/[slug]/page.tsx`: case header/reading sections/back/footer. Apply shared action family and type rules; preserve finite next-project progression and static canonicals.
- `components/research-poster-tile.tsx`, `fractal-precision-plate.tsx`: retain scientific figures and captions; reuse canonical research reference arrays when refactoring to eliminate duplicate reference labels.
- `tests/visual/annotation-followup.spec.ts`: degree qualifier text and continuation spacing must survive. Existing 20px single-line role height assumption may need to allow the deliberately larger sans role line height.
- `tests/visual/chapters.spec.ts`: protects chapter isolation, evidence placement, labels, role/date alignment and opening behavior.

## Tasks & Acceptance

**Execution:**
- [x] `content/portfolio.ts`: shorten Work headings/summaries and Research copy; keep qualifiers. Unify Smart Filters naming across homepage and case title while keeping slug. Give Research a consistent small source/venue eyebrow, concise heading, two-sentence summary and canonical evidence links. Retain forthcoming CoNGA status. Keep all Experience dates and full education text.
- [x] `app/page.tsx`, research figure components: use content-owned metadata and reference arrays, preserve DOM IDs/reading order and media. Remove the special-case Smart Filters headline/label branch in favor of project data.
- [x] `components/linked-artifact.tsx`, case page: extend sans 48px action/reference family everywhere; preserve safe/accessibility behavior and linked-artifact selectors. Back navigation stays a clear back action; external website indicators reflect actual target behavior.
- [x] `app/globals.css`: define shared heading/body/spacing tokens and shared Work/Research selectors; heading tracking -.03em and leading around 1.12. Align mobile typography for both chapter types with continuous breakpoints. Body stays restrained and readable, not enormous. Experience institutions remain prominent, roles become readable sans around 15px, dates stay secondary and aligned. Keep reading spine and useful spacing on case pages. Do not change opening/contact rendering.
- [x] `docs/design-guide.md`: update maintained hierarchy/action rules for consistent references and responsive timeline.
- [x] Run required static and browser checks, inspect desktop/mobile/wide/short renders, independent review, then update only intentionally changed visual baselines and compare.

**Acceptance Criteria:**
- Given any Work or Research story, when read, then metadata, concise heading, short summary and evidence follow the same hierarchy and spacing.
- Given all project/reference actions, when navigated by touch or keyboard, then labels use the shared sans action family with visible focus, decorative arrows and preserved destinations/new-tab announcements.
- Given Experience at desktop/mobile widths, when read, then institutions, roles and dates have clear hierarchy and grouped RingCentral roles remain compact; full education details remain readable.
- Given case studies, when read, then titles and supporting content follow the same type/spacing system and outcome qualifiers remain intact.
- Given 320 through 3440 widths, reduced motion or disabled JavaScript, when navigating, then content/links remain reachable without overlap, horizontal overflow or hidden evidence.

## Spec Change Log

## Verification

Prepend /private/tmp/inba-runtime/node-v24.20.0-darwin-arm64/bin to PATH for pinned Node/npm.

- Run runtime, lint with max-warnings=0, typecheck, build, content/assets/legacy verification and Node tests.
- Run Chrome smoke/no-JS/chapter checks and WebKit regressions.
- Capture changed homepage chapters at 3440, 2560, 1920, 1440, 1345, 1185, 861, 768, 390 and 320, plus short screens and 650/651px type continuity. Inspect case pages at desktop/mobile.
- Run independent adversarial review before refreshing intentionally changed snapshots. All current-design snapshots must pass afterward. Preserve opening/profile/contact screenshots visually.
- Run git diff --check. Do not bypass configured commit signing; leave changes local if signing is unavailable.

## Review notes

Independent blind, edge-case and verification-gap reviews completed. Edge-case review returned no findings. Accepted refinements: retain the user purpose in VisionGuard and patent summaries; give research stories stable identities; select artwork exhaustively; keep reference lookup independent of the selected visual. The visible full-paper-title requests were declined to preserve the requested concise hierarchy: exact titles remain in accessible reference context and the ICASSP poster itself. No unverified findings or changed publication dates were introduced. The request for tests asserting presentation classes was declined in favor of actual browser target-size, font, destination, arrow and accessibility checks plus visual evidence.

The 650/651 inspection exposed cramped tablet columns despite continuous type. Work and Research now share a single-column layout through 900px, matching the opening enhancement boundary. The existing education-line test was updated from 20px to 24px to accommodate readable 15px sans roles while still requiring one compact line at its desktop viewport. Full education copy, continuation spacing and aligned dates remain checked.

## Verification results

Pinned runtime, lint with zero warnings, typecheck, static build, content, asset integrity, legacy scan and all 11 Node tests passed. Final browser runs passed: 7 Chrome smoke/no-JS tests, 18 Chrome chapter checks and 21 WebKit checks. Temporary browser verification checked 140 rendered links across desktop, tablet, short viewports and JavaScript-free mobile. Final captures cover all changed chapters at twelve widths from 320 to 3440, including 650/651; no horizontal or local text overflow was detected. Case studies were captured at 1440 and 390. Scientific sources, figure captions, metrics, dates and exact outcome qualification remain intact.

All 10 intentional homepage/case-study snapshots were refreshed after visual inspection and independent review, then all 10 comparison tests passed. No deployment or signing configuration change is included.

## Suggested Review Order

- Shared Work/Research composition.
  [page.tsx:79](../../app/page.tsx#L79)

- Canonical copy and references.
  [portfolio.ts:245](../../content/portfolio.ts#L245)

- Unified typography and responsive chapters.
  [globals.css:276](../../app/globals.css#L276)

- Shared reference semantics and styles.
  [linked-artifact.tsx:8](../../components/linked-artifact.tsx#L8)

- Case-study hierarchy and navigation.
  [page.tsx:55](../../app/work/[slug]/page.tsx#L55)

- Maintained design contract.
  [design-guide.md:13](../../docs/design-guide.md#L13)

- Compact timeline verification.
  [annotation-followup.spec.ts:37](../../tests/visual/annotation-followup.spec.ts#L37)
