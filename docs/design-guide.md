# Current portfolio design

The November 9 refinement follows the riso editorial prototype and the user's annotated review. It supersedes the earlier asymmetric-gutter design and short homepage rows. This is an editorial aesthetic built with the existing Next/React and native CSS stack, inspired by Apple's space and pacing, without claiming to implement an Apple design system.

## Layout and hierarchy

Use one warm paper canvas, navy text and restrained red accents throughout. Instrument Sans carries headings and reading copy; IBM Plex Mono carries short labels, dates and artifact links. Keep equal outer margins with a centered, bounded canvas. Reading copy stays left aligned.

The opening is a spacious thesis followed by an identity composition. On capable desktop browsers, scrolling moves the statement left to reveal the name, short AI/backend description, portrait and actions. Travel uses the full viewport width, not a percentage of the capped content panel, so identity stays outside the initial frame on large monitors. After this sequence, the page scrolls vertically. Reduced motion, narrow screens and JavaScript-free reading retain a normal readable document. Motion must not hide essential content permanently or leave offscreen links keyboard-focusable.

Each project and research story uses a shared chapter template with at least the available viewport height beneath navigation. The next chapter must not intrude at the resting anchor. Height is a minimum: short viewports, zoom and mobile may require more space. Never clip reading content to enforce a slide. No mandatory scroll snapping or input capture is needed. Work and Research are semantic groups identified by navigation; do not add large heading-only interstitials.

Desktop story chapters pair left copy with a bounded right visual, aligned vertically. On mobile the copy precedes the artwork. Maintain shared type sizes, media width caps and vertical spacing. Case-study links and resource links belong under the copy on the left and use the same leading red arrow, underlined text and focus treatment. Scientific captions stay with figures. Dates align with the corresponding role, including compact continued roles at one institution. Experience is a role/date timeline without job-description paragraphs. Education qualifiers follow the degree inline, separated by pipes and wrapping naturally when needed.

Case pages use a left-aligned title and supporting headline on the reading spine, without a Selected work eyebrow. The compact footer places its cue above a red-arrow link. Reading proceeds through each subsequent project once; the final case returns to selected work instead of looping. ACE MCP is the project name; reporting is one of its features.

## Artwork

- Smart filters use the prototype's sentence-to-filter mapping: extracted phrases, connector lines, date and tracker fields. Red identifies the cancellation tracker.
- AI engineering uses shared context and planning, implementation and review documents. No heading or label may be covered by overlapping layers.
- ACE MCP uses a conceptual question-to-tools-to-report flow. Preserve attribution in the accompanying copy; an illustration is not customer evidence or a product screenshot.
- VisionGuard retains its existing illustration and deliberate homepage preview crop. Its case study retains the wider source composition.
- The portrait uses native SVG image masks. Do not reintroduce mixed HTML foreignObject clipping, which failed WebKit painting tests.
- Poster and fractal pixels remain faithful to their scientific sources. Each comparison image, format label and metric must remain in the same column. Wrap long metrics; never let them spill into adjacent formats.

## Navigation and accessibility

Keep navigation visible from the first viewport and on project pages. Case studies mark Work current; homepage navigation follows the visible parent group. Legacy anchors, skip navigation and native links remain usable without JavaScript. Anchor targets clear the sticky header.

Preserve visible keyboard focus, reduced-motion behavior, image dimensions, alternative descriptions and reading order. Zoom and shorter screens may extend a chapter beyond one screen. Content readability takes precedence over a forced slide fit.

## Maintaining the design

`app/globals.css` owns the shared layout/type tokens and responsive rules. `content/portfolio.ts` owns narrative content; `content/assets.ts` owns responsive image metadata.

Run runtime, lint, typecheck, build, content/assets/legacy checks, Node tests, browser smoke/no-JS checks, chapter checks and WebKit regression before accepting visual baselines. Inspect actual chapter renders at 3440, 2560, 1920, 1440, 1345, 1185, 861, 768, 390 and 320 widths, including normal-motion opening states and reduced-motion fallback. Run independent adversarial review before updating screenshot baselines, then compare again. Previous review documents and ZIPs are historical and do not certify a new build.
