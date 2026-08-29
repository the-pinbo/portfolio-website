---
title: 'Refine the portrait window system'
type: 'feature'
created: '2026-08-21'
status: 'in-review'
baseline_commit: 'b527b3f61820f24b2381359d4b300859a9b1e550'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent - do not modify unless human renegotiates">

## Intent

**Problem:** The current hero repeats the editorial portrait in four unrelated crops, so it does not read as a single image revealed through refined asymmetric windows. The generated dark portrait loses fidelity, so dark mode must retain the original portrait's facial and illustration detail rather than swapping to a lower-quality asset.

**Approach:** Rebuild the hero portrait as one high-fidelity light portrait behind a responsive multi-window mask. Dark mode uses the same image with an art-directed navy wash and overlay treatment; the page's existing theme tokens supply the inverted surface, accents, and frame contrast without globally inverting the portrait.

## Boundaries & Constraints

**Always:** Use `public/assets/inbase-editorial-portrait.png` as the only rendered portrait source; present four vertically oriented, asymmetric, rounded windows that share one aligned image coordinate system; preserve the light theme's parchment relationship and create a dark theme that feels intentionally printed into the navy page; keep the portrait decorative but expose one useful accessible label; keep mobile windows legible and preserve the hero's reserved layout space; respect reduced motion.

**Ask First:** Replacing the portrait subject, publishing a new generated image, changing the existing hero copy or calls to action, or introducing a manual theme preference beyond the current system preference.

**Never:** Render the low-fidelity `inbase-editorial-dark.png` on the site; use `filter: invert()` or alter skin/clothing colors; render four separately positioned image crops; change image/mask geometry during a color-scheme transition; add a custom cursor, extra WebGL layer, or user-blocking animation.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|---------------|---------------------------|----------------|
| Light theme | System prefers light | One portrait appears through four tall asymmetric rounded windows, blending with parchment and coral accents | The light portrait is visible without JavaScript |
| Dark theme | System prefers dark | The same aligned portrait remains detailed while a navy-compatible wash, border, and accent treatment blends it into the dark system | No inversion of face, clothes, or visual layout |
| Theme change | Browser changes colour-scheme | Only opacity/color treatment transitions; the mask and image alignment remain fixed | Reduced motion makes the change immediate |
| Mask fallback | Browser lacks CSS masking | One intact, rounded portrait renders instead of a blank or fragmented hero | Preserve accessible label and zero layout shift |
| Narrow viewport | Width below 768px | Windows recompose into a tall, unclipped composition with no horizontal overflow | No hover-only or theme-dependent content |

</frozen-after-approval>

## Code Map

- `components/split-portrait.tsx` - current four-`Image` crop map; replace with one image and semantic portrait wrapper.
- `app/globals.css` - theme tokens and current `.portrait-*` geometry; add mask/fallback, theme wash, fixed transition, and mobile window rules.
- `public/assets/inbase-editorial-portrait.png` - approved 1086×1448 rendered portrait source; preserve dimensions and high-fidelity image data.
- `public/assets/inbase-editorial-dark.png` - supplied low-fidelity experiment; leave unrendered and do not modify or delete.
- `public/assets/portrait-window-mask.svg` - new functional multi-window mask asset, sized to the portrait stage rather than a decorative illustration.
- `tests/portfolio.test.mjs` - add executable coverage for the single-source portrait, dark treatment, fixed mask geometry, fallback, and narrow layout rules.
- `app/page.tsx` - hero consumer of `SplitPortrait`; preserve its copy, actions, and layout structure.

## Tasks & Acceptance

**Execution:**
- [x] `public/assets/portrait-window-mask.svg` - add a four-window vertical mask with asymmetric widths/heights and rounded ends.
- [x] `components/split-portrait.tsx` - render one priority `next/image` through the mask and retain a single accessible portrait label.
- [x] `app/globals.css` - replace independent panel crops with one continuous masked composition; add accessible light/dark wash tokens, mask fallback, fixed opacity/color transitions, and mobile reflow.
- [x] `tests/portfolio.test.mjs` - verify all matrix conditions through source and production-rendered assertions.

**Acceptance Criteria:**
- Given a desktop visitor in either system theme, when the hero loads, then one continuous editorial portrait is revealed through four vertically asymmetric rounded windows.
- Given dark mode, when the page loads or the color scheme changes, then portrait identity and image detail remain intact while the background treatment, borders, and accents belong to the dark theme.
- Given a visitor on a narrow viewport or a browser without mask support, when the hero loads, then a complete, stable portrait composition remains visible with no overflow or blank image.

## Spec Change Log

## Design Notes

The mask is a functional crop system, not a new illustration. Treat it as a fixed stencil above one image: light mode reads like ink on paper; dark mode reads like the same printed artifact under navy light. The dark supplied image remains an experiment only, so switching themes never exposes a mismatched face or scene.

## Verification

**Commands:**
- `npm test` - expected: all existing and portrait-system tests pass against a production build.
- `npm run lint` - expected: zero lint errors.
- `npm run build` - expected: static route compiles without image, hydration, or TypeScript errors.

**Manual checks:**
- Inspect desktop and narrow mobile in light and dark system themes; verify continuous crop alignment, contrast, and fixed geometry during a theme change.
