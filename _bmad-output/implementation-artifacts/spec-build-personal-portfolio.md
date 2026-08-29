---
title: 'Build flagship personal-brand portfolio'
type: 'feature'
created: '2026-08-20'
status: 'done'
baseline_commit: '0736c68587131d3f9acd962708d46a140a708979'
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent - do not modify unless human renegotiates">

## Intent

**Problem:** Inbasekaran needs more than a recruiter-facing resume site. The brand should make a memorable case for him as an AI/ML Systems Engineer who turns ambiguous business problems into trustworthy, efficient, scalable AI-enabled systems. Product decisions reflect his small-team operating context; UX and interface exposure should be evident in the work's clarity, not marketed as standalone specialties. The current repository has no application and the supplied career material is too dense to serve as the site itself.

**Approach:** Create a flagship, art-directed Next.js portfolio that combines a tactile retro workstation language with a refined editorial portrait system. A subtle WebGL hero responds to the visitor's pointer with displaced colour and low-energy ripples. The rest of the page proves one through-line: Inbasekaran carries an ambiguous product problem from AI/ML judgment through resilient engineering to a useful experience, rather than presenting a skills inventory.

## Boundaries & Constraints

**Always:** Treat the supplied brain dump as factual source material; make the page feel personal, assured, and concise; present RingCentral product ownership before research and earlier experience; use the supplied stylised portrait as the central visual anchor; frame public case studies around problem, judgment, and technical shape while omitting sensitive internals, datasets, and unsupported metrics; use a modern, maintainable front-end stack; prioritize rendering quality, interaction quality, keyboard support, reduced-motion support, and mobile performance equally; keep all outside links accurate.

**Ask First:** Publishing any invented claim, quantitative result, client/project not present in source material, new personal information, proprietary data detail, or additional external service; replacing the supplied portrait subject; adding audio or autoplaying video.

**Never:** Make a chronological resume, imitate the colleague site or Google Antigravity visual identity, use a game-like Minecraft interface, deploy a custom cursor, gate content behind WebGL, animate from raw scroll listeners, or trade accessibility and performance for a visual effect.

## Experience Plan

**Direction:** "builder's field notebook meets a precision workstation." The portrait sets the palette: parchment `#EEE6DA`, carbon-navy `#172B3C`, dusty slate `#6C7A86`, vermilion `#CC553F`, and ink `#10191F`. Use vermilion as the sole accent and the hero canvas as the sole interactive surface; limit material language to paper grain, technical frames, and portrait panels; and use a deep-navy system-preference theme. Avoid extra badges, faux desktop windows, pixel icons, and ornamental retro UI.

**Type:** Neo-grotesk display, legible text/mono support, and handwritten type in only two moments: a hero annotation and contact sign-off. Navigation and body copy remain conventional and readable.

**Hero:** A minimal wordmark, the primary role label "AI/ML Systems Engineer," navigation, the problem-led thesis "I turn ambiguous business problems into dependable AI-enabled systems—evaluated, integrated, and shipped," two immediate actions (View flagship systems and Contact), and the portrait split through four asymmetric windows. Deliberately control the thesis line breaks and type scale on desktop and mobile. Résumé and profile links belong in navigation or contact, not the hero. A decorative React Three Fiber canvas behind it creates gentle pointer displacement and low-resolution ripple pulses, with a still CSS/image fallback.

**Narrative:** Home statement and immediate work route; a brief project introduction, "Three systems, from model behavior to production delivery"; three central RingCentral system stories (Smart Filters, Aura, and Ace IO MCP), each kept to one compact screenful with a strict budget: a short business-tension opener, three proof points maximum, and a compact "What I owned" field. Ensure each story supplies proof of at least one delivery-standard term from the thesis: evaluated, integrated, or shipped. Use factual proof labels: Smart Filters — "Agentic + deterministic orchestration"; Aura — "Agentic workflows + evaluation"; Ace IO MCP — "Governed data access + MCP delivery." Follow with a modular "Engineering loop" field of four verb-led, one-sentence steps—Explore → Evaluate → Engineer → Operate—with no secondary capability cards; a quiet single-line credibility proof strip (IISc, GSoC, Linux Foundation, Goldman Sachs, plus selected research/patent work), not a biography; and direct contact. Surface operational technologies only as project-specific evidence, never as a global badge cloud. The work stays first, AI/ML and Systems engineering stay central, and each section earns its place.

**Motion:** Hero response confirms presence. It is the only canvas or simulated effect; panel separation and brief DOM reveals guide hierarchy elsewhere. There are no decorative loops. Reduced-motion and touch visitors receive equivalent static or tap-friendly states.

## Technical Plan

Use Next.js App Router, TypeScript, Tailwind CSS v4, and CSS variables for tokens. Motion is the sole DOM-motion runtime. Server-render the static hero, content shell, portrait panels, and all copy before any canvas hydrates. React Three Fiber plus Drei powers one lazy-loaded client `HeroCanvas`; it is the only WebGL surface and uses a single displaced plane with bounded pointer uniforms and a low-resolution ripple pass—no post-processing, particles, texture stacks, 3D models, or continuous fluid simulation. Render on demand with a short settling invalidation window, cap DPR around 1.25–1.5, and disable antialiasing. Disable the canvas for reduced motion, coarse-pointer/touch, data saver, low-memory/low-core devices, or unavailable WebGL; the designed static hero is the complete fallback. Isolate interactive leaves, keep facts in a typed local data module, and use Next Image with explicit dimensions.

Target LCP below 2.5 seconds, zero hero layout shift, and interaction response below 200 ms. Include semantic landmarks, a skip link, visible focus states, AA contrast, useful alternatives, and complete no-JavaScript content access.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|---------------|---------------------------|----------------|
| Desktop visit | WebGL and pointer available | Low-energy displacement and ripples respond to pointer around the portrait | Canvas stays decorative and never captures clicks |
| Reduced motion, touch, or constrained device | Motion reduced, coarse pointer, data saver, low-power hardware, or WebGL unavailable | Static portrait and immediate content render in the same composition | No blank canvas, blocked link, layout shift, or feature loss |
| Narrow touch viewport | Width below 768px | Navigation condenses, image panels recompose vertically, and all sections remain legible | No hover-only information or horizontal overflow |
| External action | Profile, resume, project, or email link selected | Correct target opens safely | External links use appropriate new-tab and referrer protection |

</frozen-after-approval>

## Code Map

- `brain-dump/portfolio-content.md` - ignored factual source. Distil only the approved content; never render the resume as-is.
- `/Users/inbasekaranperumal/Documents/exec-d0a42fea-5aa1-4bf6-a639-565df1227aac.png` - user-supplied editorial portrait and palette source; read-only input.
- `public/assets/inbase-editorial-portrait.png` - new project-local copy of the approved portrait for the split hero and visual system.
- `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs` - new Next.js and Tailwind project foundation.
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css` - page shell, metadata, semantic composition, font loading, and global design tokens.
- `components/hero-canvas.tsx`, `components/split-portrait.tsx`, `components/project-stories.tsx`, `components/builder-field.tsx` - isolated visual and interactive modules.
- `content/portfolio.ts` - typed facts, links, project and capability content.

## Tasks & Acceptance

**Build order:**
- [x] Establish Next.js, TypeScript, Tailwind, linting, fonts, tokens, metadata, and responsive page shell.
- [x] Build the static art direction and concise content model before adding interaction.
- [x] Implement the split-portrait hero and a fully styled static fallback.
- [x] Implement and profile the isolated demand-rendered WebGL displacement/ripple canvas with eligibility checks, quality caps, and static-fallback parity.
- [x] Build evidence-first project stories with business-tension openings, visible ownership, and delivery-standard evidence; then the Explore → Evaluate → Engineer → Operate Engineering loop, a quiet credibility strip, and contact sections with their final links.
- [x] Add motivated Motion transitions, keyboard states, responsive polish, and visual regression checks.
- [x] Audit LCP, bundle size, throttled-hardware behavior, contrast, reduced motion, WebGL fallback parity, mobile touch behavior, SEO metadata, and public-copy confidentiality before deployment.

**Acceptance Criteria:**
- Given a first-time visitor, when the desktop home page opens, then it communicates Inbasekaran's AI/ML-focused systems-engineering identity, shows the portrait system, and offers usable work, credibility, résumé, and contact routes in the first viewport.
- Given a visitor moves across the hero on capable hardware, when the pointer approaches the artwork, then the visual response feels restrained and retains full text contrast and interaction access.
- Given a visitor scans the page, when they move below the hero, then they encounter Smart Filters, Aura, and Ace IO MCP first, framed around the user problems they solve and concise factual scope signals, followed by the engineering model and factual proof of breadth without a resume-like chronology.
- Given a device, preference, or browser cannot render advanced effects, when the page loads, then the same hierarchy and content appear through a polished static fallback.

## Spec Change Log

## Verification

**Commands:**
- `npm run lint` - expected: zero errors.
- `npm run build` - expected: production build succeeds with no hydration errors.

**Manual checks:**
- Test desktop, tablet, and narrow mobile widths; system light/dark and reduced-motion settings; WebGL enabled and disabled; keyboard-only navigation; and project/external-link behavior.
- Run Lighthouse on the production build and resolve any meaningful accessibility, performance, or best-practice regressions.
- Verify the static hero remains complete under throttled hardware and that the canvas creates neither hydration errors nor delayed text.
- Review all public project copy for confidential internal details; preserve problem framing and engineering breadth while removing anything not appropriate to publish.

## Suggested Review Order

**Identity and narrative**

- The entry point establishes the problem-led thesis and evidence-first page order.
  [`page.tsx:12`](../../app/page.tsx#L12)

- Typed project data keeps public claims concise, factual, and consistent.
  [`portfolio.ts:17`](../../content/portfolio.ts#L17)

**Hero performance and resilience**

- Capability gating keeps the visual canvas strictly progressive and failure-safe.
  [`hero-canvas.tsx:16`](../../components/hero-canvas.tsx#L16)

- A single demand-rendered plane delivers the restrained desktop interaction.
  [`hero-scene.tsx:101`](../../components/hero-scene.tsx#L101)

**Responsive accessibility and discovery**

- System tokens, contrast treatments, focus states, and mobile navigation live together here.
  [`globals.css:1`](../../app/globals.css#L1)

- Metadata declares canonical and social identity for the portfolio route.
  [`layout.tsx:4`](../../app/layout.tsx#L4)

**Verification and project foundation**

- Production-rendered assertions protect routes, project content, and outbound destinations.
  [`portfolio.test.mjs:70`](../../tests/portfolio.test.mjs#L70)

- Scripts and lean client dependencies define the reproducible verification workflow.
  [`package.json:1`](../../package.json#L1)
