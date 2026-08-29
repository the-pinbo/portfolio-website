# Seven-slide portfolio revision intent

## North star

Show each piece of work through the problem it solved, then use engineering decisions and inspectable artifacts as evidence. Credentials provide context rather than lead the story. The unifier is product integrity: governance and brand in ACE, privacy and usability in VisionGuard, scientific meaning in research, source pixels in SoftPosit, contributor and legal precision in Patent, and reader focus across the page.

The finished experience is one continuous warm-paper scroll with seven distinct chapter geometries. Riso material creates continuity; evidence-specific composition prevents templated repetition.

## Global composition, motion, and evidence rules

- Use Apple-like single-idea staging for ACE, VisionGuard, and Patent; use Google-like evidence-led editorial clarity for IISc and SoftPosit. Treat Track Record and Contact as quiet resting chapters.
- Keep the desktop navigation horizontally centered in a stable three-zone header: quiet site mark left, centered nav, balanced empty utility zone right.
- Give major chapters flexible, content-led heights, typically about 80–95vh on large screens, expanding for diagrams and reflow. Keep headings compact; whitespace must not split related copy.
- Preserve one uninterrupted paper canvas with soft chapter boundaries. Change composition, density, and alignment between chapters. Use hairlines only when needed; do not use framed-slide or browser treatments.
- Concentrate WebGL in the opening and identity transition. In these seven chapters, limit motion to restrained scroll reveals, clipping, registration, and diagram resolution. Add no pins or persistent motion.
- Remove visible `Conceptual view` labels everywhere. Give original illustrations project-specific captions only when meaningful, plus honest accessible descriptions. Use literal links for real artifacts.
- Generated visuals must remain clearly editorial and must not imitate screenshots or official records. Evidence must stay source-faithful and inspectable.

## Settled chapter narrative and composition

### 1. ACE

**Visitor takeaway:** Inbasekaran can turn governed data into a usable, branded AI product.

**Headline:** “Make governed data useful to AI—without losing the product.”

Lead with product tension and a compressed copy block; include no confidentiality caption. Make the branded MCP app the dominant endpoint. Show the machine-facing MCP tool as secondary, supported by governed data and the typed GraphQL contract. Keep those three layers visually and semantically distinct.

### 2. VisionGuard

**Headline:** “Turn gaze into private screen-time feedback.”

**Copy:**

“VisionGuard is a webcam-based desktop application that distinguishes looking at the screen from looking away, turning that signal into private screen-time feedback and break reminders.”

“I built the C++ application, calibration flow, and local inference path with OpenVINO, Qt, and OpenCV.”

Use a five-column narrative beside a seven-column, complete `visionguard-riso-editorial-v2` image. Place the image in a navy specimen plate with 12–16px inset on continuous warm paper. The outcome leads; calibration, local inference, and cross-platform engineering support it. Treat the dotted gaze ray as project-specific, not a reusable site motif. Link `Code · GSoC · Write-up`.

On mobile, stack the uncropped landscape image after the copy and links.

### 3. Research

**Headline:** “Recovering images from incomplete measurements.”

**Copy:**

“At IISc’s Spectrum Lab, I worked on inverse problems in imaging: recovering images from incomplete or noisy measurements. Using deep-unfolded networks—learned versions of iterative optimisation—I studied how update matrices, thresholds, and initialization shape stability and reconstruction.”

“This research appears in the ICASSP 2025 paper, *Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks*.”

Build one continuous, source-faithful research figure with two reading beats: (1) incomplete measurements and sparse recovery, then (2) ISTA to LISTA/deep unfolding and reconstruction. Derive it faithfully from the poster’s top third; omit its lower diagnostic plots from the hero. Present the complete poster as a separate linked object. Link `Paper · Poster · Certificate`.

### 4. SoftPosit

**Eyebrow:** `LINUX FOUNDATION MENTORSHIP · SOFTPOSIT / RISC-V`

**Headline:** “When numerical formats change the picture.”

**Copy:**

“In the Linux Foundation Mentorship, I extended SoftPosit C++ for RISC-V—mathematical functions, tests, packaging, and an emulated toolchain—so alternative arithmetic could be exercised in real workloads.”

“Across Mandelbrot and Julia workloads, I benchmarked conventional floating-point formats against posit arithmetic.”

“The work became a CoNGA 2025 paper on numerical accuracy and performance in HPC.”

Frame this as Linux Foundation / SoftPosit for RISC-V work across multiple fractal workloads. Use a real, equal-crop three-panel `Double / float / posit32` comparison; the supplied files share the same double reference and each contains one candidate. Preserve source pixels. Show only these metrics: Float — `SSIM 0.476 · MSE 0.087`; posit32 — `SSIM 0.605 · MSE 0.053`.

Caption the plate: “Representative fractal result from a broader benchmark suite.” Follow with: “Against the same double-precision reference, posit32 retains more of the fractal structure in this run.” The supplied result is Julia-set imagery; do not label the representative plate Mandelbrot. Do not enumerate the experiment matrix or exponent configurations in public copy. Link `Code · Certificate · Paper`.

Use these source-faithful crops from the 1800×1500 assets: reference from the float image at `x22 y186 w790 h593`; IEEE float from the float image at `x874 y186 w790 h593`; posit32 from the posit image at `x874 y186 w790 h593`. Below roughly 720px, stack the panels without horizontal scrolling.

### 5. Patent

**Headline/copy lead:** “Inventory should not require a keyboard.”

**Record:** `Named inventor · Indian Patent No. 576831`

**Copy:**

“At Determinant Studios, I worked on a voice-assisted inventory and ledger system that turns spoken updates into structured actions.”

“I am a named inventor on the resulting Indian Patent No. 576831.”

Use one full-width, resolved-overlap voice-to-ledger illustration. Align a coral instruction slip labelled `ITEM`, `QUANTITY`, and `UPDATE` with a navy ledger and mark one resolved row. Use generic schema labels only. Include no arrows, steps, microphone, silhouette, fake UI, or invented spoken-stock example. Link `Patent` and `Determinant Studios`. The official certificate is the authoritative linked artifact and, at most, a small source-faithful fragment—not the hero.

### 6. Track Record

**Heading:** “Track record”

**Subhead:** “Selected roles, research, open source, and education.”

Use a restrained, reverse-chronological stepped editorial sequence with exactly seven entries in this order and with this canonical copy:

1. **RingCentral · Jul 2024–Present** — Software Development Engineer II · RingSense AI — Search, agentic workflows, and software systems for RingSense AI.
2. **Linux Foundation · Mar 2025–May 2025** — Open Source Developer · SoftPosit for RISC-V — C++ numerical computing, RISC-V emulation, and benchmark-driven systems work.
3. **Google Summer of Code · May 2024–Aug 2024** — Open Source Developer · Intel OpenVINO — On-device gaze estimation across C++, OpenVINO, and AI PC hardware.
4. **Indian Institute of Science · Apr 2024–Jul 2024** — Research Intern · Spectrum Lab — Sparse recovery and inverse imaging through optimisation-inspired neural networks.
5. **Goldman Sachs · May 2023–Jul 2023** — Summer Analyst · Cards Marcus Data Engineering — PySpark and Airflow pipelines for operational reporting.
6. **Determinant Studios · Nov 2022–May 2023** — Software Engineering and Research Intern — Speech recognition and entity extraction for a voice-driven inventory product.
7. **NITK Surathkal · Nov 2020–Apr 2024** — B.Tech, Electronics & Communication Engineering · 9.19/10 · Rank 4/138 — Chaired IEEE CIS and led media and outreach for IEEE NITK.

Put RingCentral and NITK on the same principal left spine as the current-role and educational-origin bookends. Alternate the five middle entries with shallow 24px and 48px desktop offsets. Use no table, conventional timeline, map, controls, logos, cards, links, or repeated project detail. On mobile, use one entirely left-aligned sequence.

Treat the copy and date ranges above as canonical for the next mock. Reconcile them against public records before publication without silently rewriting the approved narrative.

### 7. Contact

**Headline:** “If you’re building something difficult, I’d like to hear about it.”

Keep generous paper space. Use exactly `Email`, `LinkedIn`, and `GitHub`. Give Email restrained primary emphasis with stronger ink and a coral underline, while LinkedIn and GitHub remain quieter.

Use the exact footer: `© 2026 Inbasekaran Perumal · Bengaluru, India`.

Remove résumé, motto, role repetition, divider, extra CTA, and role footer.

## Scope

### Must

- Revise all seven chapters, canonical portfolio content, and the relevant UX/design contracts before rebuilding the mock.
- Implement every settled narrative and composition above with distinct chapter rhythm on continuous paper.
- Use source-faithful assets, accessible descriptions, responsive behavior, and literal artifact links.
- Create durable poster/PDF assets and verify official IISc and Determinant Studios URLs before publishing those links.

### Should

- Preserve compact headlines, coherent copy groups, and content-led breathing room.
- Use restrained registration, clipping, reveal, and diagram-resolution motion only where it clarifies the story.
- Keep real evidence visually legible without allowing credentials to become the narrative lead.

### Could

- Use a small source-faithful fragment of the patent certificate as secondary evidence.
- Add hairlines only where a chapter transition needs them.

### Won’t

- Add new WebGL scenes, pins, persistent motion, fake UI, generic portfolio patterns, unsupported claims, or secondary content.
- Reuse VisionGuard’s dotted gaze ray as a global motif.
- Use a patent certificate hero, a framed-slide/browser treatment, or visible `Conceptual view` labels.
- Invent URLs, claims, dates, examples, artifact paths, or missing Track Record copy.

## Source integrity, responsive, and accessibility constraints

- Preserve source pixels in SoftPosit crops and use equal crop regions across the comparison.
- Keep VisionGuard v2 visibly editorial; do not present it as a product screenshot.
- Derive the ICASSP diagram faithfully from the poster and keep the complete poster separately inspectable.
- Use generic schema labels in Patent artwork. Do not show a specific spoken-stock example until a patent-derived example is available.
- Do not publish unverified IISc or Determinant Studios URLs. Establish a durable public poster path/thumbnail before linking it.
- On mobile, preserve reading order: copy and links before the complete uncropped VisionGuard image; one left-aligned Track Record sequence. Allow all sections to expand rather than clipping content into viewport-height frames.
- Do not split related headings and copy with decorative whitespace. Supply honest accessible descriptions for original illustrations and meaningful project-specific captions only.
- Treat real artifacts as literal links and generated work as editorial illustration, never as an official record.

## Contract conflicts to replace

- Replace any off-center or utility-shifted desktop navigation contract with the stable three-zone centered-header contract.
- Replace fixed-height slide/browser-frame contracts with flexible content-led chapters on uninterrupted paper.
- Replace reusable dotted-flow language with project-specific VisionGuard gaze signaling.
- Replace any `Conceptual view` caption requirement with honest accessible descriptions and meaningful project-specific captions.
- Replace any Slide 5 certificate-hero direction with the later explicit voice-to-ledger hero decision.
- Replace any Slide 4 Mandelbrot caption for the supplied visual with the workload-neutral representative caption; retain Julia provenance internally.
- Replace any Track Record table, timeline, map, card, logo, control, or link treatment with the seven-entry stepped editorial sequence.
- Replace broad later-page WebGL, pinning, or persistent-motion contracts with restrained reveal/registration/diagram motion.
- Replace Contact contracts containing résumé, `Email me`, motto, repeated role, divider, extra CTA, or old footer with the settled Slide 7 content.

## Implementation sequence

1. Reconcile canonical content first: insert the locked wording above, recover Slide 6’s authoritative final copy/date ranges verbatim, and verify unresolved URLs and durable poster/PDF paths.
2. Update `DESIGN.md` with continuous-paper geometry, chapter roles, centered navigation, flexible heights, evidence treatment, Riso continuity, and motion boundaries.
3. Update `EXPERIENCE.md` with chapter reading order, responsive reflow, mobile rules, accessibility descriptions, artifact behavior, and exclusions.
4. Prepare evidence assets: complete VisionGuard v2 editorial image, poster-derived research figure plus linked poster, source-pixel SoftPosit crops, and Patent voice-to-ledger illustration.
5. Rebuild the continuous desktop mock using the seven distinct compositions.
6. Rebuild and inspect mobile reflow, then validate motion, source integrity, accessible descriptions, and every literal link.

## Acceptance checklist

- [ ] The page reads as one warm-paper experience, not seven framed slides, while each chapter has a distinct geometry and rhythm.
- [ ] Desktop nav is centered in a balanced three-zone header.
- [ ] ACE uses the locked headline and makes the branded MCP app the dominant endpoint; contract, tool, and surface are distinct.
- [ ] VisionGuard uses the locked headline/copy, 5/7 composition, inset navy plate, complete image, artifact labels, and specified mobile order.
- [ ] Research accurately maps inverse imaging to deep unfolding, uses the two-beat poster-derived figure, and keeps the complete poster separately linked.
- [ ] SoftPosit uses source-pixel equal crops, `Double / float / posit32`, only SSIM/MSE, locked copy, and the workload-neutral caption.
- [ ] Patent uses the locked wording and full-width resolved-overlap illustration with only generic schema labels; the certificate is secondary evidence.
- [ ] Track Record contains exactly the seven canonical entries in the fixed order, with authoritative copy/date ranges preserved, correct desktop offsets, and one mobile spine.
- [ ] Contact contains `Email`, `LinkedIn`, `GitHub`, the exact footer, and none of the excluded content.
- [ ] No visible `Conceptual view` labels, fake UI, unsupported claims, invented examples, unverified URLs, or missing accessible descriptions remain.
- [ ] No new later-page WebGL, pins, or persistent motion exists; viewport constraints never clip or split related content.
- [ ] Canonical portfolio content, `DESIGN.md`, `EXPERIENCE.md`, desktop mock, and mobile mock all express the same contracts.
