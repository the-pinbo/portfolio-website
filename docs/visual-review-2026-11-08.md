# Portfolio visual review — 8 November 2026

Independent review of parent-captured CUA screenshots against the corrected read-only Riso reference, the November spec and approved content draft. No application files were edited by the reviewer.

## Findings, ordered by importance

1. **Portrait passes.** The central portrait is complete and undistorted, and side windows contain artwork. The right window repeats only peripheral ear/hair, with no second eye, nose or mouth. This matches the reference treatment and does not require a further crop shift. Evidence: `/private/tmp/inba-visual-review/revised/home-desktop-top.jpg`, compared with `reference-desktop-mid.jpg`.
2. **Diagram attribution clarity (minor).** The filtering diagram clearly explains a phrase becoming date/tracker filters. Workflow and MCP figures are restrained conceptual summaries, rather than product evidence. A short “Illustrative workflow” caption would remove ambiguity. Do not label these as actual product screenshots. Evidence: revised `natural-language-filtering-desktop-top.jpg`, `ai-native-engineering-desktop-full.jpg`, `ace-mcp-desktop-full.jpg`.
3. **Capture fidelity (verification note).** Full-page case-study captures include a sticky header and focused skip link in the middle of the stitched page. Top viewport captures place the header correctly. Treat this as capture/focus state, not evidence that the actual header lives mid-document. Desktop homepage full captures initially included unloaded research placeholders; the scrolled research viewport and mobile full capture show authentic loaded media.

The initial text-only case studies were materially repetitive. The revised figures resolve the missing visual problem. That earlier text-list acceptance was superseded by the user’s subsequent request for a distinct visual with every homepage project. See the final refinement review below.

## What reads well

- Paper, navy, coral, Instrument Sans headings and mono annotations maintain the reference identity. New persistent navigation and the shorter opening are authorized adaptations.
- The revised name is easier to find than the initial all-caps eyebrow. Person, current role and work action are visible promptly.
- All four case studies have clear titles, purposeful visual objects, readable paragraphs, contribution boundaries and next-project links. The mobile long titles wrap coherently.
- Research uses authentic poster/fractal material and provides a welcome visual change from work summaries. Experience is compact and readable; corrected dates and forthcoming publication status remain explicit.
- In the inspected desktop and 390-width mobile captures, no heading truncation, overlapping body text or visibly inaccessible links were found.

## Evidence inspected

Directory: `/private/tmp/inba-visual-review/`.

- Initial homepage: desktop top, work, research, experience, contact and full; mobile top and full.
- Reference: `reference-desktop-identity.jpg` (filtering composition), `reference-desktop-mid.jpg` (portrait identity), `reference-mobile-full.jpg` (scaled board).
- Revised homepage: `revised/home-desktop-top.jpg` and `revised/home-desktop-full.jpg`.
- Revised cases: all four `{natural-language-filtering,ai-native-engineering,ace-mcp,visionguard}-{desktop,mobile}-full.jpg`, plus filtering desktop top and AI engineering, ACE MCP and VisionGuard mobile top.

## Verification limits

The independent review agent's CUA inventory returned no browser surface; both `iab` and parent's browser id `2` were unavailable. The parent operated CUA and captured files, and this reviewer independently opened and inspected the actual image files with `view_image`. This review therefore does not independently assert keyboard behavior, direct-entry routing, anchor landing, DOM overflow measurements or no-JavaScript behavior. Parent reports each 390-width case has `scrollWidth === innerWidth`. Parent retains responsibility for interactive checks and the final rebuild.

The supplied mobile reference screenshot is a scaled desktop composition board rather than a literal mobile viewport layout. Mobile judgments use the approved responsive requirements and actual candidate captures. The final 320-width homepage top/full and all four case full screenshots were subsequently inspected. Navigation stays on one line within its second header row, headings wrap without truncation, diagram columns stack legibly and next-project links wrap normally. No visual release blocker was found. Parent reports `scrollWidth === innerWidth` for all five 320-width routes. The initial-top case captures also eliminate the midpage sticky-header capture artifact. Homepage full capture still shows lazy research placeholders; loaded scientific media was independently confirmed in earlier scrolled/mobile captures.

## Initial verdict (superseded)

The initial screenshot review found no functional visual blocker. The user then requested a stronger homepage visual treatment; the final refinement review below is the current visual verdict.


## Final refinement review — current verdict

The user explicitly requested more right-side space, a distinct deliberately cropped visual for every homepage project, no text overlap, and an adversarial check of sizing and hierarchy. The previous text-list approval is superseded.

**Verdict: no blocking visual defect in the final refinement.** All ten regenerated baseline PNGs were independently opened and inspected, with additional full-resolution screenshot crops for the homepage project chapters. The real 892px preview-panel viewport was also inspected through parent-captured CUA images.

### Findings and proportional judgment

1. **Resolved: AI artwork text overlap.** The earlier PLAN card touched the blue headline. In `work-892-refined-ai-fixed.jpg` and the final 1440/390 PNGs, the headline has a clear reserved area. Cards overlap only the blank bottom of the blue visual field. They do not overlap the copy column or one another’s text. The short card labels remain readable at 390px.
2. **Right gutter passes.** At the actual 892px preview panel, artwork stops around x781 with about 94px of visible paper before the browser content edge. At 1440px, the project visuals share a consistent right termination with a substantial paper gutter. Header and content left spines align. At 390px, the single-column layout preserves paper on both sides instead of pushing art to the viewport edge.
3. **Distinct project visuals pass.** Filtering resolves an example phrase into two filters; AI workflows uses the navy field and staggered paper cards; ACE uses a structured two-tool composition; VisionGuard uses a deliberate raster crop. The image and diagram fields occupy a meaningful share of each desktop chapter, and rules plus whitespace make project boundaries clear. These are now visual chapters, not a repeated text list.
4. **Crop quality passes.** The homepage VisionGuard crop retains the laptop, inferred face and gaze direction while removing peripheral scenery. It remains coherent at 892px and 390px. The dedicated case page uses a wider composition appropriately. The portrait retains its complete central face; peripheral ear/hair in a side window matches the reference treatment.
5. **Resolved: ACE title hierarchy.** The artwork slogan is now capped below the project-title scale at desktop and mobile sizes. Reinspection of the regenerated homepage 1440/390 PNGs, full-resolution ACE chapter crops, and both ACE case PNGs confirms a clear project-title → artwork-heading → tool-label hierarchy. The two-tool visual remains legible and retains its right gutter.
6. **Resolved: next-project arrow wrapping.** Reinspection of `natural-language-filtering-390-darwin.png` confirms the arrow now stays with “workflows” on the final line. There is no isolated arrow line and the full link remains readable.


### Final evidence

- `/private/tmp/inba-visual-review/revised/home-892-refined-top.jpg`
- `/private/tmp/inba-visual-review/revised/work-892-refined-1.jpg`
- `/private/tmp/inba-visual-review/revised/work-892-refined-2.jpg`
- `/private/tmp/inba-visual-review/revised/work-892-refined-ai-fixed.jpg`
- All ten final files in `tests/visual/current-design.spec.ts-snapshots/`: homepage and each of the four case-study routes at 1440px and 390px.
- Review-only full-resolution homepage crops in `/private/tmp/inba-visual-review/final-review-crops/`.

The final homepage baselines show loaded authentic research assets, avoiding the earlier lazy-placeholder capture issue. Parent reports the 320px paper-label overflow was fixed by shortening labels without reducing type size, and the final release gate passed all ten screenshot comparisons. This independent final pass inspected final 1440/390 files and 892px viewport images; it did not independently re-render the latest 320px layout or run keyboard/browser interactions. The earlier CUA availability limitation remains explicit above.

The latest user-approved manager-confirmed metrics supersede the earlier qualitative-only constraint. Their presence is not a review blocker.


### Polish closure

After the final release gate passed again, the reviewer reopened the updated homepage 1440/390, ACE case 1440/390, and natural-language-filtering 390 PNGs. Full-resolution homepage ACE crops were also inspected (`final-review-crops/home-1440-ace-closed.png` and `home-390-ace-closed.png`). Both minor findings above are closed. No actionable visual finding remains in this review scope.
