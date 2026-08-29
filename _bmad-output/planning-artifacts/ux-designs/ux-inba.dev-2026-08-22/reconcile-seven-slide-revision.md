# Reconcile the seven-slide revision

## Authority and boundary

This artifact reconciles the approved seven-slide revision against the current UX spines. For ACE, VisionGuard, Research, SoftPosit, Patent, Track Record, and Contact, `brainstorm-intent.md` is the latest decision and overrides conflicting language in `DESIGN.md`, `EXPERIENCE.md`, their UX memlog, and earlier alternatives in `brain-dump/improvements.txt`.

Do not use this revision to disturb settled Opening, Identity, portrait-triptych, or Smart Filters contracts unless a shared global rule below explicitly applies. Keep the two-spine ownership boundary: `DESIGN.md` owns visual form; `EXPERIENCE.md` owns structure, behavior, states, responsive rules, and accessibility.

## 1. Exact conflicts to remove

### DESIGN.md

| Canonical location | Remove or replace | Why it conflicts |
|---|---|---|
| `components.editorial-visual` | The requirement that conceptual work carry a visible `Conceptual view` caption | The revision removes that visible label globally. Original illustrations receive meaningful project-specific captions only when useful, plus honest accessible descriptions. |
| `Components > editorial-visual` | “Generated illustration is clearly captioned ‘Conceptual view’” | Same global override. Generated/editorial status must be clear from treatment and semantics, not a generic visible disclaimer. |
| `Do's and Don'ts` | “Keep conceptual illustrations visibly captioned” | Replace with meaningful project-specific captions where warranted and an honest accessible description. |
| `Composition families > ACE io MCP server` | A wide relay that treats “MCP tools/app” as a combined endpoint | The branded MCP app is the dominant endpoint; the machine-facing MCP tool is secondary; governed data and the typed GraphQL contract support the transformation. All layers must be visually distinct. |
| `Composition families > VisionGuard` | “Public artifact dossier — Real project material leads; themed cover supports…” | The complete `visionguard-riso-editorial-v2` image is the specified hero evidence in a navy specimen plate; literal public artifacts remain links. |
| `Composition families > Research` | “Paper margin — Source-faithful paper excerpt plus one clearly captioned conceptual figure” | The hero is one continuous poster-derived two-beat figure; the complete poster is a separate linked object, not the leading paper excerpt. |
| `Composition families > Open Source` | “Contribution trace — Repository/contribution history leads in a directional trace” | SoftPosit is an evidence-led `Double / float / posit32` fractal precision plate, not a contribution trace or timeline. |
| `Composition families > Patent` | “Document field — Unaltered certificate or specification fragment anchors…” | The later explicit decision makes the original full-width voice-to-ledger illustration the hero. The certificate is only the authoritative linked artifact and, at most, a small source-faithful fragment. |
| `Composition families > Track Record` | “One narrative lead-in…at most one art-directed reveal object” | Track Record is a fixed reverse-chronological, non-interactive, seven-entry stepped sequence with no reveal object. |
| `Composition families > Contact` and `components.contact-close` | A primary filled email action (`action-background`, `action-foreground`) | Email now receives restrained primary emphasis through stronger ink and a coral underline; it is not a dominant filled CTA. |
| `Components > typographic-index` | Large institution names with a generic “index” treatment that does not encode fixed order/offsets | Add the exact reverse-chronological order, principal spine, alternating 24px/48px offsets, and mobile collapse. |
| `Layout & Spacing` | Any implication that chapter height can behave as a fixed slide/frame | Major revised chapters are flexible and content-led, normally breathing around 80–95vh on large screens and expanding for diagrams/reflow. |
| `Composition families` follow-on rule | “Do not place two dense Riso illustrations consecutively; insert at least one low-texture resting chapter…” | Research and SoftPosit are intentionally adjacent evidence chapters. Control density within their distinct compositions; do not insert a new chapter or secondary content. |

The continuous light paper canvas, Riso palette, 12-column editorial grid, typography, focus treatment, source-faithful artifact rules, and static-first principle remain compatible and should be retained.

### EXPERIENCE.md

| Canonical location | Remove or replace | Why it conflicts |
|---|---|---|
| `Information Architecture > Work / #work` | The existing content entry without the revised problem-led ACE and VisionGuard contracts | The seven-slide revision changes the content and composition requirements for both chapters. |
| `Information Architecture > Open source / #open-source` | Generic “Linux Foundation, SoftPosit, CoNGA” coverage without the precision-plate behavior | Add the fixed evidence model, labels, metrics, source crops, and responsive stack. |
| `Information Architecture > Track Record` | Order `RingCentral, IISc, GSoC, Linux Foundation, Goldman Sachs, Determinant Studios, NITK` | Replace with `RingCentral, Linux Foundation, Google Summer of Code, Indian Institute of Science, Goldman Sachs, Determinant Studios, NITK Surathkal`. |
| `Information Architecture` | The optional secondary-project rail after VisionGuard | The approved Won’t scope excludes secondary content for this revision. |
| `Component Patterns > editorial-visual` | The mandatory visible `Conceptual view` caption | Replace with project-specific captions only when meaningful and honest accessible descriptions for informative work. |
| `Component Patterns > typographic-index` | Narrative-importance ordering, optional disclosure, and separate row artifact link | Track Record is reverse chronological, has no controls, links, hidden detail, hover-only information, or expandable panels. All canonical content is visible. |
| `Component Patterns > contact-close` | “One primary Email me action” | Rename to `Email`; style as restrained primary emphasis. Keep only LinkedIn and GitHub beside it. |
| `State Patterns > Track detail expanded` | The entire state row | No Track Record disclosure exists after the revision. |
| `Interaction Primitives > Keyboard` | Escape behavior for Track Record disclosure | Remove because the control is removed. |
| `Interaction Primitives > Touch` | Track Record disclosure and separate-link behavior | Remove because Track Record is entirely visible and has no row links. |
| `Rendering and Enhancement Boundary` | `TrackRecordDisclosure` client island and enhanced server-visible details | Delete the island. Track Record is static server-rendered content. |
| `Accessibility Floor` / validation language | Any tests or target requirements for Track Record disclosure behavior | Replace with reading-order, reflow, heading, and visible-content validation. |
| `Responsive & Platform > Touch or coarse pointer` | Track Record disclosure behavior | Replace with the fully visible, single-spine mobile sequence. |
| `Key Flows > Flow 2` | Final action “Email me” | Replace with `Email`. |
| `Key Flows > Flow 3` | Old Track Record order, row disclosure, artifact link, and `Email me` | Replace with the fixed reverse-chronological order, passive mobile scan, and `Email`. |
| `Visual Reference Gate` | Generic durable screens for the remaining chapters | Replace with the exact desktop/mobile mock requirements in section 4 of this artifact. |

The current natural-scroll baseline, no-JavaScript completeness, reduced-motion state, literal external-link behavior, focus rules, responsive navigation, performance budgets, and two existing pins limited to Opening/Identity and Smart Filters remain compatible. The seven revised chapters must add no pin, snap, wheel hijack, WebGL scene, or persistent motion.

### UX memlog decisions superseded for these chapters

- Replace Track Record’s “large typographic index,” narrative-importance order, hover/focus reveal, and related artifact behavior with the fixed non-interactive stepped sequence.
- Replace Contact’s `Email me` primary action with `Email` and restrained ink/underline emphasis.
- Treat the general “separate Research, Open Source, and Patent chapters” decision as retained, but replace their old composition assumptions with the evidence-specific compositions below.
- Keep the general rule that generated art cannot fabricate UI or evidence; override only the generic requirement for a visible `Conceptual view` label.
- Keep the prior motion decision of exactly two major pins. It does not license pins or WebGL inside the seven revised chapters.

## 2. Exact additions and overrides by canonical section

### Shared page contract

Add to `DESIGN.md`:

- One uninterrupted `{colors.paper}` canvas with soft chapter boundaries, no browser/frame treatment, and hairlines only when useful.
- Seven deliberately different geometries unified by Riso material. ACE, VisionGuard, and Patent use single-idea staging; Research and SoftPosit use evidence-led clarity; Track Record and Contact are low-texture resting chapters.
- Major chapter height is flexible and content-led, usually about 80–95vh on large screens, expanding as copy, diagrams, and reflow require. Whitespace may not separate a heading from its related copy.
- Desktop header is a stable three-zone composition: quiet site mark left, navigation geometrically centered, balanced empty utility zone right.
- Dotted gaze signaling belongs only to VisionGuard; it is not a reusable page motif.

Add to `EXPERIENCE.md`:

- These seven chapters use natural document scroll and only restrained reveal, clipping, registration, and diagram-resolution motion.
- Generated work is semantically editorial, never a screenshot or official record. Real artifacts are native literal links.
- Every original informative illustration has a concise accessible description; visible captions are project-specific and used only when meaningful.
- Mobile retains the complete narrative and evidence; it changes layout and choreography, not content.

### ACE / `#ace-io`

Canonical content:

- Visitor takeaway: Inbasekaran can turn governed data into a usable, branded AI product.
- Headline: **“Make governed data useful to AI—without losing the product.”**
- No confidentiality caption.

Design override:

- Use a compressed, tension-first left copy unit with no disruptive gap between title and explanation.
- The branded MCP app is the dominant endpoint. The machine-facing MCP tool is visually secondary. Governed data and the typed GraphQL contract support the transformation.
- Give the contract a restrained typed-schema rhythm and keep contract, tool, and branded surface semantically distinct.

Experience override:

- The accessible description must express the same hierarchy and may not collapse the tool and app into one endpoint.
- Do not imply an internal system diagram, disclose confidential implementation, or add a generic disclaimer.

### VisionGuard / `#visionguard`

Canonical content:

- Headline: **“Turn gaze into private screen-time feedback.”**
- Paragraph 1: **“VisionGuard is a webcam-based desktop application that distinguishes looking at the screen from looking away, turning that signal into private screen-time feedback and break reminders.”**
- Paragraph 2: **“I built the C++ application, calibration flow, and local inference path with OpenVINO, Qt, and OpenCV.”**
- Artifact labels: `Code · GSoC · Write-up`.

Design override:

- Continuous warm paper; no full navy chapter.
- Desktop: five-column narrative and seven-column complete `visionguard-riso-editorial-v2` landscape image.
- Place the image in a navy specimen plate with 12–16px inset. Keep the generated image visibly editorial and uncropped.
- The outcome leads; calibration, local inference, and cross-platform engineering provide depth.

Experience override:

- Mobile order is copy, literal links, then the complete uncropped landscape image.
- The dotted gaze ray is project-specific and non-semantic unless its meaning is included in the adjacent accessible description.

### Research / `#research`

Canonical content:

- Headline: **“Recovering images from incomplete measurements.”**
- Paragraph 1: **“At IISc’s Spectrum Lab, I worked on inverse problems in imaging: recovering images from incomplete or noisy measurements. Using deep-unfolded networks—learned versions of iterative optimisation—I studied how update matrices, thresholds, and initialization shape stability and reconstruction.”**
- Paragraph 2: **“This research appears in the ICASSP 2025 paper, *Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks*.”**
- Artifact labels: `Paper · Poster · Certificate`.

Design override:

- Hero: one continuous source-faithful figure with two reading beats: incomplete measurements/sparse recovery, then ISTA-to-LISTA/deep unfolding/reconstruction.
- Derive the figure from the poster’s top third. Exclude lower diagnostic plots from the hero.
- The complete poster is a separate, visibly interactive linked object/thumbnail, not the hero.

Experience override:

- Preserve the conceptual relation: inverse imaging is the problem; deep unfolding is the method.
- The linked complete poster must be keyboard accessible and named literally. If opened in a new tab, announce that consistently.

### SoftPosit / `#open-source`

Canonical content:

- Eyebrow: `LINUX FOUNDATION MENTORSHIP · SOFTPOSIT / RISC-V`.
- Headline: **“When numerical formats change the picture.”**
- Paragraph 1: **“In the Linux Foundation Mentorship, I extended SoftPosit C++ for RISC-V—mathematical functions, tests, packaging, and an emulated toolchain—so alternative arithmetic could be exercised in real workloads.”**
- Paragraph 2: **“Across Mandelbrot and Julia workloads, I benchmarked conventional floating-point formats against posit arithmetic.”**
- Paragraph 3: **“The work became a CoNGA 2025 paper on numerical accuracy and performance in HPC.”**
- Artifact labels: `Code · Certificate · Paper`.

Design override:

- Desktop: narrative left; calm three-panel precision plate right.
- Panels are `Double`, `float`, and `posit32`, using equal source-faithful crops. Preserve the pixels; put Riso treatment only in the surrounding frame/rules/registration.
- Use the approved 1800×1500 crops: reference from float asset `x22 y186 w790 h593`; float `x874 y186 w790 h593`; posit32 from posit asset `x874 y186 w790 h593`.
- Show only `Float — SSIM 0.476 · MSE 0.087` and `posit32 — SSIM 0.605 · MSE 0.053`.
- Caption: **“Representative fractal result from a broader benchmark suite.”** Follow with: **“Against the same double-precision reference, posit32 retains more of the fractal structure in this run.”**
- The shown result is Julia. Never caption the plate Mandelbrot.

Experience override:

- Below roughly 720px, stack panels in reading order without horizontal scrolling.
- Do not enumerate public experiment-matrix details or exponent configurations. Internally retain that the broader work covered conventional IEEE floating-point formats, reduced-precision/bfloat variants, and posit8/16/32 with exponent-size values 1 and 2.

### Patent / `#patent`

Canonical content:

- Headline: **“Inventory should not require a keyboard.”**
- Record: `Named inventor · Indian Patent No. 576831`.
- Paragraph 1: **“At Determinant Studios, I worked on a voice-assisted inventory and ledger system that turns spoken updates into structured actions.”**
- Paragraph 2: **“I am a named inventor on the resulting Indian Patent No. 576831.”**
- Artifact labels: `Patent · Determinant Studios`.

Design override:

- Use a full-width horizontal ledger-field composition with compact copy, generous paper space, and one large central resolved-overlap illustration.
- A coral instruction slip labelled `ITEM`, `QUANTITY`, and `UPDATE` aligns with a navy ledger and marks one resolved row.
- No arrow, step sequence, microphone, silhouette, fake UI, decorative circle, or dominant patent number.
- The official certificate remains the authoritative Patent destination and may appear only as a small, unaltered source-faithful fragment.

Experience override:

- The artwork uses generic schema labels only. Do not invent a spoken-stock example, business claim, data point, metric, ownership claim, or legal relationship.
- Keep named-inventor wording exact; do not imply sole ownership or that Determinant Studios owns the patent.

### Track Record / `#track-record`

Canonical heading: **“Track record”**.

Canonical subhead: **“Selected roles, research, open source, and education.”**

Use these seven entries verbatim and in this order:

1. **RingCentral · Jul 2024–Present** — Software Development Engineer II · RingSense AI — Search, agentic workflows, and software systems for RingSense AI.
2. **Linux Foundation · Mar 2025–May 2025** — Open Source Developer · SoftPosit for RISC-V — C++ numerical computing, RISC-V emulation, and benchmark-driven systems work.
3. **Google Summer of Code · May 2024–Aug 2024** — Open Source Developer · Intel OpenVINO — On-device gaze estimation across C++, OpenVINO, and AI PC hardware.
4. **Indian Institute of Science · Apr 2024–Jul 2024** — Research Intern · Spectrum Lab — Sparse recovery and inverse imaging through optimisation-inspired neural networks.
5. **Goldman Sachs · May 2023–Jul 2023** — Summer Analyst · Cards Marcus Data Engineering — PySpark and Airflow pipelines for operational reporting.
6. **Determinant Studios · Nov 2022–May 2023** — Software Engineering and Research Intern — Speech recognition and entity extraction for a voice-driven inventory product.
7. **NITK Surathkal · Nov 2020–Apr 2024** — B.Tech, Electronics & Communication Engineering · 9.19/10 · Rank 4/138 — Chaired IEEE CIS and led media and outreach for IEEE NITK.

Design override:

- Low-texture warm-paper resting chapter. Use Instrument Sans for organisation/description and IBM Plex Mono for dates/small metadata.
- RingCentral and NITK share the principal left spine as bookends. Alternate the five middle entries with shallow 24px and 48px desktop offsets.
- A restrained coral registration detail may distinguish current RingCentral. Use hairlines only where needed.
- No table, literal timeline, map, lines, milestones, route, duration bar, lane, stage number, horizontal scroll, card, logo, icon, shadow, pill, skill badge, percentage bar, or reveal object.

Experience override:

- All information is server-rendered and visible. No row links, `More`/`Less`, disclosure, hidden detail, hover-only content, or expanded RingCentral panel.
- Mobile removes all offsets and becomes one left-aligned sequence. Preserve date → role → description reading order and allow natural wrapping without shrinking type to mimic desktop.
- Reconcile the approved copy and dates against public records before publication, but never silently rewrite the approved narrative.

### Contact / `#contact`

Canonical content:

- Eyebrow: `CONTACT`.
- Headline: **“If you’re building something difficult, I’d like to hear about it.”**
- Links: exactly `Email`, `LinkedIn`, `GitHub`.
- Footer: **`© 2026 Inbasekaran Perumal · Bengaluru, India`**.

Design override:

- Keep large negative space and warm paper.
- Email receives restrained primary emphasis via stronger ink and coral underline; LinkedIn and GitHub remain quieter.
- No filled CTA is required. Remove divider and role footer.

Experience override:

- Remove résumé, `Email me`, motto repetition, role repetition, extra CTA, contact form, newsletter, and scheduler.

## 3. Content and source gaps that cannot be invented

| Gap | Required handling |
|---|---|
| Verified official IISc destination | The exact URL is not settled in the approved revision. Do not publish an inferred URL. `https://spectrum.ee.iisc.ac.in/` appears in the supplied improvements as a Spectrum Lab candidate, but it does not resolve the separate official-IISc-link question. Verify both intended label and destination. |
| Determinant Studios website | No URL is supplied. Do not turn the organisation name into a link until verified. |
| Durable ICASSP poster/PDF and thumbnail | The revision requires both, but no durable public path is supplied. Create/verify the asset path before adding the Poster link. |
| Patent certificate destination | The certificate is authoritative, but no destination URL/path is supplied here. Do not fabricate one. |
| Patent spoken-stock example | No patent-derived example is supplied. Keep generic `ITEM`, `QUANTITY`, and `UPDATE` labels only. |
| ACE artifact destinations | No ACE artifact labels or destinations are settled in the revision. Do not infer links. |
| VisionGuard literal destinations | The labels are settled. Earlier notes supply a repository URL and general GSoC URL, but the exact GSoC project destination and Write-up destination still require canonical verification. |
| Research Paper and Certificate destinations | Labels and paper title are settled; exact destinations are not supplied in the revision. Verify before wiring. |
| SoftPosit Code, Certificate, and Paper destinations | Labels are settled; exact URLs are absent. Confirm the publisher record before claiming anything beyond “CoNGA 2025 paper.” |
| SoftPosit source files | Crop coordinates and metrics are settled, but the reconciliation inputs do not name the two image paths. Resolve the actual float and posit source assets before rendering; never substitute generated benchmark imagery. |
| Track Record publication verification | Copy/date ranges are approved for the next mock. Public-record reconciliation is still required before publication and must be surfaced if it would alter the approved language. |
| Accessibility descriptions | Their truth conditions are specified, but final text depends on the finished source-faithful visuals. Write after assets are fixed; do not describe details that are not visible. |

No unsupported metric may be imported from the résumé or prior drafts. In particular, do not publish VisionGuard CPU/power claims or Patent precision/recall claims without an inspectable primary source beside them.

## 4. Mock requirements

### Desktop continuous mock

- Render the seven chapters as one continuous paper document, not seven browser-framed slides.
- Include the stable three-zone centered navigation/header treatment.
- Show flexible chapter heights and inspect the full long-page rhythm; do not force equal viewport frames.
- ACE: compact tension-first copy; typed contract; secondary machine tool; dominant branded app endpoint.
- VisionGuard: 5/7 grid; complete image; 12–16px navy specimen inset; literal links.
- Research: two-beat poster-derived hero plus separately linked complete-poster object.
- SoftPosit: narrative/plate split; exact equal crops, labels, metrics, caption, and source-pixel rendering.
- Patent: full-width resolved-overlap illustration; generic labels; secondary literal certificate link.
- Track Record: fixed seven-entry stepped sequence; RingCentral/NITK left spine; alternating 24/48px middle offsets; no interaction or row links.
- Contact: open field, restrained Email emphasis, quiet social links, exact footer.
- Review all seven together for repeated grids, accidental dark chapters, texture density, copy/image splits, and whitespace that disconnects headings from copy.
- Still compositions must pass before adding restrained reveal/registration motion.

### Mobile continuous mock

- Use natural document flow with no pinning, WebGL, persistent motion, or horizontal page scroll.
- Keep all canonical copy, evidence, artifact labels, and destinations; do not reduce content.
- VisionGuard: copy and links first, complete uncropped image after.
- Research: preserve the two reading beats and keep the complete poster as a distinct reachable link/object.
- SoftPosit: below about 720px stack `Double`, `float`, `posit32`; retain labels and the two metric pairs; do not horizontally scroll or scale a desktop strip unreadably.
- Patent: reflow the resolved-overlap illustration without converting it into boxes/arrows or fake UI.
- Track Record: one entirely left-aligned sequence with natural wrapping and no controls.
- Contact: preserve link hierarchy and exact footer without a divider or role repetition.
- Validate at 320px, 200% zoom, enlarged default fonts, touch/coarse pointer, reduced motion, image failure, and keyboard/screen-reader traversal. Nothing may overlap, clip, become hover-dependent, or lose its literal link name.

## 5. Qualitative ideas at risk if only the revision brief is followed

These ideas came from the user-supplied improvements or existing spines. They are not all canonical requirements in the approved revision. Preserve them for explicit triage so they are not lost accidentally.

### Compatible details worth carrying forward

- VisionGuard’s source notes support “cross-platform intent” more safely than a prominent Windows/Linux/macOS claim. The locked public copy avoids the platform list; retain that restraint.
- A quiet official OpenVINO attribution inside the VisionGuard editorial composition was suggested, but it is not required by the approved brief. Include only if source-faithful and visually subordinate.
- The Research improvements proposed an explicit `Open poster ↗` affordance on a keyboard-accessible poster thumbnail. The approved brief retains the separate linked poster object but not that exact microcopy; the spine should still require an obvious literal Poster link.
- SoftPosit’s navy rules and slight coral registration outside the real pixels were suggested and remain compatible with the Riso frame, though the exact decoration is not mandatory.
- Track Record’s type-role split—IBM Plex Mono for dates/metadata and Instrument Sans for organisation/description—and restrained coral detail for RingCentral add useful specificity beyond the short revision summary.
- The broader UX spines contain delivery budgets, no-JavaScript behavior, fallbacks, focus rules, stable anchors, and performance gates. None should be dropped merely because the revision brief focuses on seven chapters.

### Ideas intentionally superseded, not accidentally omitted

- ACE’s example headline “Let AI work with governed enterprise data” is replaced by the locked headline.
- VisionGuard’s giant eye, full navy chapter, raw tool-first headline, platform enumeration, and résumé-level CPU/power detail do not survive the revision.
- Research’s fake paper-cover hero and decorative coral circle are replaced by the poster-derived explanatory figure.
- SoftPosit’s timeline/contribution-trace treatment and the earlier “Representative Mandelbrot result” caption are replaced; the supplied representative result is Julia and the caption is workload-neutral.
- Patent’s earlier certificate/document-led hero, dominant `576831`, legal-title-led headline, microphone/flowchart treatments, and unverified precision/recall metrics are replaced by the product-problem-led voice-to-ledger illustration.
- Patent grant date `30 December 2025` and legal title `Voice Assisted System, Device and Method for Inventory Management` remain source facts from the improvements, but the approved chapter does not require them as visible secondary content. Preserve them in canonical source metadata rather than forcing them into the mock.
- Track Record’s narrative-importance ordering, hover reveal, row links, résumé table, and expandable RingCentral material are explicitly replaced by the fixed reverse-chronological visible sequence.
- The improvements said LinkedIn and Résumé could remain as general career references, but the later explicit Contact decision removes Résumé for now because it is outdated.

## Reconciliation acceptance

- [ ] Every conflict above is removed from its named spine location rather than contradicted by an added paragraph elsewhere.
- [ ] `DESIGN.md` and `EXPERIENCE.md` use identical canonical names, copy, artifact labels, Track Record order/dates, and Contact footer.
- [ ] No unrelated Opening, Identity, portrait, Smart Filters, anchor, accessibility, fallback, or performance contract regresses.
- [ ] The seven revised chapters have no new pin, WebGL scene, persistent motion, framed-slide treatment, visible `Conceptual view` label, fake UI, or invented source detail.
- [ ] Desktop and mobile mocks encode the exact evidence-specific compositions and reading order above.
- [ ] All unresolved URLs/assets remain explicit gaps until verified; missing sources are never disguised with generated substitutes.
