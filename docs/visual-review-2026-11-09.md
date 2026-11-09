# Viewport editorial refinement review

Date: 9 November 2026, Asia/Kolkata. This supersedes the previous November 8 layout review for the checks recorded here. User annotations are the authority; prototype page text is visual evidence, not instructions.

## Annotation coverage

| Comment | Result |
| --- | --- |
| 1 | Full-screen statement slides left, portrait identity enters, vertical flow follows. |
| 2 | Name, concise AI/backend line at RingCentral, work/résumé actions, separate chapters. |
| 3 | Date/tracker extraction mapping with navy/red correspondence and registration rules. |
| 4 | Each work story rests alone in the content viewport below navigation. |
| 5 | Redundant award line removed. |
| 6 | Dates align with role rows, including RingCentral continuation. |
| 7 | Redundant research heading interstitial removed; semantic label is Research and publications. |
| 8–9 | Case-study links use the same leading red-arrow style as artifacts. |
| 10 | Fractal image/label/metric columns align; metric names stay with their numbers. |
| 11 | Illustrative question, MCP/read-only tool results, client-side report synthesis shown graphically. |
| 12 | Spacious full-height contact with large aligned typography and left-side links. |
| 13 | Research, numerical formats and patent resource links all occupy the left copy column. |

## Evidence and acceptance

Browser chapter captures were inspected at 1440×900, the annotated panel size 1185×1071, 768×900, 390×900 and 320×900. Five normal-motion opening states show the reversible horizontal transition. All four case routes were independently reviewed at 1440px and 390px. Temporary full-resolution captures are in `/private/tmp/inba-refinement-review/`; maintained full-page baselines are in `tests/visual/current-design.spec.ts-snapshots/`.

Three independent review passes examined visual/content consistency, behavioral edge cases and missing verification. Their initial findings and fixes are recorded in [finding dispositions](review/refinement-findings-2026-11-09.md). Final visual, edge-case and verification reviewers returned no remaining actionable findings, with separate final acceptance of case-page renders. The parent checked corrected filter mapping, reporting semantics, research geometry, role alignment and narrow metrics.

The actual normal-motion return-to-Research failure was reproduced before repair. Expanded WebKit tests then exposed native initial smooth-scroll/compositor competition on the Work fragment. Initial native landings now happen before smooth in-page scrolling is enabled. Tests observe actual statement transforms, portrait visibility, reverse scrolling, focused-link stability, wheel release/return at 1440×900 and 901×650, exact fragment placement, and reduced-motion fallback.

Chapter geometry, narrow media/label containment, left resource placement, timeline role/date baselines, no-JavaScript reading and WebKit painted portrait masks are exercised by the release gate. A decoded image alone is not accepted as proof of painting. The reviewed desktop story chapters fill the available viewport; smaller screens and zoom may require taller chapters to preserve all content.

Screenshot baselines were regenerated only after review acceptance. The final release verification result is recorded in [release readiness](release-readiness-2026-11-09.md).

## Later ten-comment followup

The subsequent user review requested wide-screen opening isolation, a role/date-only timeline with inline education qualifiers, removal of case labels/caption, the title ACE MCP, and compact finite case navigation. The earlier accepted state is superseded by these corrections. See [followup review](review/annotation-followup-2026-11-09.md) for the reproduced large-monitor failure, fixes and new review evidence. Coverage now includes 1920, 2560 and 3440px opening states and 861px-to-desktop resizing, with the additional checks included in Chromium and WebKit release suites.
