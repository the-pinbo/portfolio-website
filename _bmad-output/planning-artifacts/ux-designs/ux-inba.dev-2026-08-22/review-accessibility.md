# Accessibility and Inclusive UX Validation

## Verdict

**Pass with required revisions before implementation.** The experience spine already establishes the right progressive-enhancement baseline: semantic HTML first, complete static states, no hover-only meaning, a reduced-motion path, non-semantic WebGL, stable narrative order, and full mobile content parity. The high-motion desktop ambition can remain.

Four high-severity gaps need to become explicit implementation contracts before the direction is considered accessibility-ready. None requires changing the visual concept.

| Severity | Count |
|---|---:|
| Critical | 0 |
| High | 4 |
| Medium | 7 |
| Low | 3 |

## High findings

### H1 — Accent and structure colors are not safe for the text roles currently implied

**Locations:** `DESIGN.md:9-19`, `DESIGN.md:185-204`, `DESIGN.md:145-160`; working mock `:195-202`, `:321-329`, `:416-419`, `:486-500`.

`#CF654F` coral is **3.22:1** against paper and **3.43:1** against paper-light. It fails WCAG AA for regular-sized text. `#8797A2` structure is **2.60:1** against paper and also fails. The working mock uses coral for a 17px cadence at reduced opacity, a 12px kicker, and a 12px extracted value, and structure for 11px filter labels. The blended cadence is weaker than the base 3.22:1 result.

**Required fix:** Use ink, ink-deep, or verified muted text for every readable label below the large-text threshold. Reserve coral for registration ghosts, non-text marks, underlines, and icons that independently meet the 3:1 non-text requirement. Do not use `structure` for readable metadata unless it is darkened to at least 4.5:1 against its actual textured background. Keep the cadence readable in ink, with coral only as an `aria-hidden` ghost. Validate contrast on the final composited texture, not only the flat token.

### H2 — The Track Record “tap once to reveal, tap again to follow” model is ambiguous

**Locations:** `EXPERIENCE.md:73`, `EXPERIENCE.md:90`, `EXPERIENCE.md:101`, `EXPERIENCE.md:146`, `EXPERIENCE.md:178-186`.

A whole row that behaves differently on first and second tap creates uncertain role, activation, focus order, and screen-reader announcements. It also risks nested interactive elements if the row contains a link.

**Required fix:** Give disclosure and navigation separate controls. Use a real button with `aria-expanded` and `aria-controls` for optional details, plus a separate native artifact link where one exists. Keep institution, role, year, and contribution visible without expansion. On narrow touch layouts, defaulting the concise details open is preferable to requiring repeated taps. Do not make the entire row a double-action control.

### H3 — Autonomous substrate drift needs a stop condition or must be removed

**Locations:** `EXPERIENCE.md:103`, `EXPERIENCE.md:105-112`, `EXPERIENCE.md:124`, `EXPERIENCE.md:147`.

The spine allows continuous idle substrate drift. Even subtle automatic motion can create distraction and may invoke WCAG 2.2.2 when it begins automatically, runs longer than five seconds, and appears alongside content.

**Required fix:** Make the WebGL substrate static at rest. Preserve the signature interaction through bounded pointer response and scroll-linked registration during the two approved sequences. If any autonomous animation remains longer than five seconds, expose a persistent pause control. Evaluate `prefers-reduced-motion`, Save-Data, coarse pointer, visibility, and capability **before** initializing WebGL; do not initialize and then merely hide it.

### H4 — The approved Smart Filters mobile mock clips at 320px

**Locations:** working mock `:385-432`, `:534-619`; `EXPERIENCE.md:122`, `EXPERIENCE.md:125`, `EXPERIENCE.md:145`, `EXPERIENCE.md:150`.

At the mobile breakpoint, the mapping grid still requires `94px + 44px + 180px + gaps`, exceeding the inner width of a 320px viewport after page and section padding. The containing screen uses `overflow: hidden`, so content can be clipped rather than reflowed. This contradicts the stated 320px and 200% zoom floor.

**Required fix:** At narrow widths, stack each mapping as source phrase → resolved filter, with the registration line becoming a short vertical or inline mark. Preserve both labels and values in normal document flow. Do not scale the desktop grid down. Test at 320 CSS pixels, 200% browser zoom, text-only zoom, and enlarged default font settings with no horizontal page scroll or clipped content.

## Medium findings

### M1 — Hidden navigation needs a precise focus and deep-link lifecycle

**Locations:** `DESIGN.md:228-230`; `EXPERIENCE.md:38`, `EXPERIENCE.md:64-66`, `EXPERIENCE.md:82-85`, `EXPERIENCE.md:95-99`; working mock `:653-658`, `:700-705`.

“Hidden during the opening” does not define whether invisible links remain tabbable. Deep links can also land after the identity transition before the visual navigation is considered settled.

**Specific fix:** Keep visually absent navigation out of the accessibility and tab order with `hidden` or `inert`, not opacity or off-canvas positioning alone. Reveal it atomically when the identity state is available; render it immediately for deep links below Identity and for the settled reduced-motion version. Use native anchor links, `aria-current="location"` rather than `page`, `scroll-margin-top` on targets, and ensure focus is never moved merely because a section became active. The working mock’s `span` items are acceptable only as static preview placeholders, never as implementation markup.

### M2 — Pinned sequences need keyboard, zoom, and short-viewport exit criteria

**Locations:** `EXPERIENCE.md:95`, `EXPERIENCE.md:99`, `EXPERIENCE.md:109-110`, `EXPERIENCE.md:124-125`, `EXPERIENCE.md:143-145`.

The spine prohibits scroll hijacking but does not define how pins behave with Space, Page Down, keyboard scrolling, large text, or short landscape viewports.

**Specific fix:** Drive progress from native document scroll only; never cancel wheel, touch, Space, Page Up/Down, Home, or End. Disable each pin when its complete settled state cannot fit within the available viewport, including at zoomed layouts and short heights. Anchor navigation must land on a readable settled state, not midway through choreography. Pinned spacers must be non-semantic and contain no duplicated focusable content.

### M3 — The portrait interaction should not create empty keyboard stops

**Locations:** `EXPERIENCE.md:68`, `EXPERIENCE.md:84`, `EXPERIENCE.md:121`; working mock `:664-690`.

“Pointer/focus” implies that individual ornamental panels may become focusable even though they expose no information or action. The mock also labels both the `figure` and nested `svg`, which can produce duplicate portrait announcements.

**Specific fix:** Keep the pillars non-focusable and let pointer response remain ornamental. Keyboard equivalence is not needed for an effect that carries no meaning. Expose one image alternative only: either one `svg role="img"` with a concise accessible name and an unlabeled wrapper, or one labeled figure with the SVG hidden from assistive technology. Decorative coral plates and masks remain `aria-hidden`.

### M4 — The query-to-filter text equivalent needs a concrete semantic pattern

**Locations:** `EXPERIENCE.md:70`, `EXPERIENCE.md:122`; working mock `:721-736`.

The mock applies an accessible name to a generic `div` while hiding the resolved mappings. Generic containers with an `aria-label` are not a reliable text equivalent across reading modes.

**Specific fix:** Use a `figure` with a visible source query and a concise `figcaption`, or associate a visually hidden description using `aria-describedby`. The equivalent should state: “Calls from last week where the customer mentioned cancellation resolves to Date: Last week and Tracker: Cancellation.” The final filter values should remain real text in the DOM; animation clones may be `aria-hidden`.

### M5 — Repeated artifact labels need contextual accessible names

**Locations:** `DESIGN.md:236`; `EXPERIENCE.md:72`, `EXPERIENCE.md:87-88`, `EXPERIENCE.md:123`, `EXPERIENCE.md:166-176`; `brain-dump/portfolio-content.md:55-96`.

Visible labels such as Code, Write-up, Paper, and Certificate are appropriately quiet, but repeated labels are ambiguous when links are listed out of context. New-tab behavior can also surprise users if the announcement is inconsistent.

**Specific fix:** Preserve the short visible labels while giving each link a contextual accessible name, such as “VisionGuard source code” or “ICASSP paper.” If `target="_blank"` remains, append a consistent visually hidden “opens in a new tab” suffix and use `rel="noopener noreferrer"`. Mark adjacent icons `aria-hidden="true"` and `focusable="false"`. Do not communicate the destination only through an icon or tooltip.

### M6 — The compact mobile navigation needs a defined reflow model

**Locations:** `EXPERIENCE.md:65`, `EXPERIENCE.md:118`, `EXPERIENCE.md:125`, `EXPERIENCE.md:145`; working mock `:563-571`.

Four visible destinations, a fixed shell, 44px target minimums, and “horizontally safe” are specified, but their behavior at 320px and 200% zoom is not. The preview reduces labels to 11px and tight padding, which preserves appearance at the expense of legibility and hit area.

**Specific fix:** Keep readable label size and 44×44 hit areas. Allow the shell to wrap into two rows, switch to a compact disclosure menu, or use an explicitly scrollable nav region that keeps the focused item visible. The fixed element must not obscure focused content or anchor headings, and safe-area insets must be honored. Do not solve fit by shrinking text below the type scale.

### M7 — Editorial-image alternatives need an informative/decorative decision rule

**Locations:** `DESIGN.md:235`; `EXPERIENCE.md:71`, `EXPERIENCE.md:89`, `EXPERIENCE.md:120`; `reconcile-user-visuals.md:30-35`.

“Alt text or adjacent project copy” leaves room for redundant narration or empty text for an informative system diagram.

**Specific fix:** If an editorial image only establishes atmosphere and repeats adjacent content, use empty alternative text. If it adds system relationships or data not otherwise stated, provide a concise adjacent caption or description that communicates those relationships. CSS background images cannot carry alternative text and must never contain unique meaning. Generated images must not inherit claims from real artifacts.

## Low findings

### L1 — The smallest typography is unnecessarily fragile

**Locations:** `DESIGN.md:81-91`, `DESIGN.md:228`; working mock `:121-132`, `:321-329`, `:359-370`, `:486-500`.

The 12px metadata and 13px navigation tokens are technically zoomable but become difficult under low vision, font substitution, and dense mono letterforms; the mock falls to 11px in several places.

**Specific fix:** Treat 13px as the absolute metadata floor and 14px as the preferred navigation/interactive floor. Never reduce type to make a component fit. Test with web fonts blocked and with the browser minimum font size increased.

### L2 — Focus styling needs one implementation recipe, not only an intent

**Locations:** `DESIGN.md:19`, `DESIGN.md:118-124`, `EXPERIENCE.md:87`, `EXPERIENCE.md:119`.

Coral reaches the 3:1 non-text threshold against flat paper, but the result may vary across grain, coral ghosts, and dark ink surfaces.

**Specific fix:** Standardize a two-layer focus treatment: a 2px high-contrast ink-deep or paper outline selected for the local surface, plus an offset coral registration accent. The outline must remain visible in Windows High Contrast/forced-colors mode by using system colors or `forced-color-adjust` deliberately.

### L3 — Dynamic active navigation should be quiet for assistive technology

**Locations:** `EXPERIENCE.md:65`, `EXPERIENCE.md:83-85`, `EXPERIENCE.md:99`.

Updating the visual active item on every intersection change is useful visually but can become noisy if implemented with live-region announcements or focus changes.

**Specific fix:** Update `aria-current="location"` without a live region, never move focus during scroll, and debounce boundary changes so the visual state does not flicker between adjacent chapters.

## Acceptance checklist for the implementation pass

- Full story, links, and query mapping remain understandable with JavaScript, WebGL, images, and motion independently disabled.
- Keyboard-only traversal reaches the skip link, site mark, revealed navigation, artifact links, Track Record controls, email, and social links in document order.
- No ornamental portrait panel or canvas enters the tab order.
- Both pinned sequences preserve native scrolling and are disabled at reduced motion, narrow/short viewports, low capability, and zoomed layouts that cannot contain the settled state.
- No automatic visual motion runs indefinitely; direct and scroll-linked motion remains available on capable desktop devices.
- Flat-token and composited-background contrast tests pass WCAG 2.2 AA; coral and structure are not used as small text colors.
- 320px width, 200% browser zoom, increased text size, coarse pointer, keyboard, screen reader, forced colors, Save-Data, WebGL failure, and background-tab behavior are tested.
- External links have unique accessible names and consistently announced new-tab behavior.
- Mobile contains the same narrative, artifacts, and destinations, with choreography simplified rather than content removed.

## Final assessment

The direction preserves an ambitious desktop experience without making motion or WebGL load-bearing. Once the four high findings are folded into the implementation contract, the design is suitable to proceed to key-screen mocks and build planning.
