# Current portfolio design

The November 9 refinement follows the riso editorial prototype and the user's annotated review. It supersedes the earlier asymmetric-gutter design and short homepage rows. This is an editorial aesthetic built with the existing Next/React and native CSS stack, inspired by Apple's space and pacing, without claiming to implement an Apple design system.

## Layout and hierarchy

Use one warm paper canvas, navy text and restrained red accents throughout. Instrument Sans carries headings and reading copy; IBM Plex Mono carries compact metadata, dates and scientific captions. Keep equal outer margins with a centered, bounded canvas. Reading copy stays left aligned.

The opening is a spacious thesis followed by an identity composition. On capable desktop browsers, scrolling moves the statement left to reveal the name, short AI/backend description, portrait and actions. Travel uses the full viewport width, not a percentage of the capped content panel, so identity stays outside the initial frame on large monitors. After this sequence, the page scrolls vertically. Reduced motion, narrow screens and JavaScript-free reading retain a normal readable document. Motion must not hide essential content permanently or leave offscreen links keyboard-focusable.

The thesis separates the muted business-problem setup from the navy software/AI outcome, with a smaller red cadence directly beneath it. On mobile those phrases flow as one paragraph and wrap to the available width. Display type is bounded at 4.25rem for the thesis and 4rem for identity, with looser tracking and line height than chapter headings. The identity groups the name, muted current role and introduction together; the portrait remains its visual counterweight. Narrow screens place the portrait after the identity copy and actions. Type sizes meet continuously at the mobile breakpoint.

Identity, Work, Research, case studies and contact share a sans-serif action family: a navy pill with a trailing arrow for the primary action, and plain text with trailing arrows for secondary destinations. Explore my work is primary in identity; email is primary at contact. Actions have at least 48px height and wrap naturally on narrow screens. Contact places secondary destinations in a separate row below email on mobile. Focus, hover and press states provide immediate feedback; press scaling respects reduced motion. Contact uses a bounded, readable invitation above the action group. References use the same plain sans action treatment, including links within scientific captions. Every action keeps a decorative trailing arrow: ↗ for external websites opening in a new tab, → for local destinations and email. Back navigation uses a leading ←. Only primary actions use navy pills; secondary labels gain an underline on hover or focus. Preserve external link context and new-tab announcements.

Each project and research story uses a shared chapter template with at least the available viewport height beneath navigation. The next chapter must not intrude at the resting anchor. Height is a minimum: short viewports, zoom and mobile may require more space. Never clip reading content to enforce a slide. No mandatory scroll snapping or input capture is needed. Work and Research are semantic groups identified by navigation; do not add large heading-only interstitials.

Desktop story chapters pair left copy with a bounded right visual, aligned vertically. At 900px and below, the copy precedes the artwork in one column so tablet layouts remain readable. Use the same small source/project eyebrow, concise heading, short summary and evidence hierarchy for both chapter types. Shared heading type scales continuously from 32px to 46px with -.03em tracking and 1.12 leading; reading copy stays between 17px and 18px. The 650/651px layout breakpoint must not reset the type scale. Maintain shared media width caps and vertical spacing. Case-study links and resource links belong under the copy on the left and use the shared sans action family. Scientific captions stay with figures. Experience institutions remain prominent; roles use readable 15px sans text and dates use secondary mono metadata. On desktop dates align with each role; on mobile they follow the role in the same row group. Continued roles at one institution remain compact. Experience is a role/date timeline without job-description paragraphs. Education qualifiers follow the degree inline, separated by pipes and wrapping naturally when needed.

Case pages use a left-aligned title and supporting headline on the reading spine, without a Selected work eyebrow. Titles use the same relaxed tracking and leading as chapter headings; section labels use sans type and paragraphs retain a bounded reading spine. The compact footer places its cue above a shared action link. Reading proceeds through each subsequent project once; the final case returns to selected work instead of looping. ACE MCP is the project name; reporting is one of its features.

## Artwork

- Smart filters use the prototype's sentence-to-filter mapping: extracted phrases, connector lines, date and tracker fields. Red identifies the cancellation tracker.
- AI-native transformation uses one shared-context source supporting frontend, backend, analytics and AI repositories. A separate workflow grid shows planning, implementation, review and bug triage; debugging MCP brings observability and deployment context to triage. Keep the native HTML/CSS figure in normal flow with bounded four-column grids above 1100px and two-column grids at narrower widths, without overlapping layers or a claim that all 20+ repositories were integrated. Open-source references appear only on its case page, under a shared section heading with the same sans action links as other references.
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
