# Website content draft

Prepared 8 November 2026. Status: approved direction implemented in the November refresh; this document preserves the reviewed content proposal.

The running site reads `content/portfolio.ts`, which now contains the applied copy and case-study content. The implementation shortens the opening for readability and uses the qualified filtering metrics; transformation figures now use the user’s manager-cleared public claims with team attribution and diagnostic-time estimates. The November request supersedes the August flagship order and the planned MCP app/GraphQL story.

## Direction

Present an applied AI engineer who can turn an ambiguous product need into a working capability, evaluate it, and improve it after launch. Keep the current formal title. Show product judgment through decisions and ownership rather than adding an FDE title or marketing adjectives.

“AI Nator Transmission” is interpreted as **AI native transformation**. The proposed public project title below makes that work understandable without internal terminology.

## Homepage copy

### Opening

**Inbasekaran Perumal**

**I build AI features from product problem to production.**

Software Development Engineer II at RingCentral. I work across solution design, backend implementation, evaluation, and deployment, with production feedback guiding what changes next.

Primary link: **Explore my work**. Secondary link: **Résumé**.

### Selected work

Use short summaries on the homepage, each linking to its own case-study page. The first three appear in this exact order.

1. **Natural language filtering** — Help customers find the right filters by describing what they need. I proposed and shipped the capability, then used production traces and evaluations to decide which requests could take a deterministic path.
2. **AI native engineering workflows** — Make AI useful across the delivery process. I developed shared planning context, role-specific workflows and persistent memory, trained teammates, and built an internal MCP server for debugging.
3. **ACE MCP reporting** — Let customers explore conversation data from an AI client. I designed the query language and contributed multi-turn evaluations for ACE’s MCP reporting interface.

Additional project:

**VisionGuard** — On-device gaze tracking for screen-time feedback. Built during Google Summer of Code with Intel OpenVINO, with a measured NPU/GPU power comparison.

### About

I’m a software engineer building AI capabilities for real product workflows at RingCentral. My work spans natural language filtering, analytics backends, search, MCP integrations, and the engineering workflows around them.

I’m interested in the decisions that make a feature useful: clarifying the problem, choosing where models help, defining the backend boundaries, and checking behavior against real requests. Alongside production work, I’ve contributed through Google Summer of Code and the Linux Foundation Mentorship Program, worked on reconstruction research at IISc, and become a named inventor on a granted patent.

### Experience

Keep this compact. Detailed project decisions belong on the project pages.

| Organization | Role and dates | Display copy |
| --- | --- | --- |
| RingCentral | Software Development Engineer II · Jul 2026–Present | Agentic engineering workflows, internal debugging tools, and query-language design and evaluation for ACE MCP. |
| RingCentral | Software Development Engineer I · Jul 2024–Jun 2026 | Natural language filtering, Elasticsearch performance, the Insights analytics backend, and multilingual search. |
| Linux Foundation Mentorship Program | Open Source Developer · Mar–May 2025 | Extended SoftPosit C++ with missing mathematical functions and tests for evaluating posit arithmetic on RISC-V. |
| Google Summer of Code | Open Source Developer, Intel OpenVINO Toolkit · May–Aug 2024 | Built VisionGuard to explore local gaze inference on AI PC hardware. |
| Indian Institute of Science | Research Intern, Spectrum Lab · Apr–Jul 2024 | Implemented and benchmarked amplitude debiasing in LISTA for recovery from noisy measurements. |
| Goldman Sachs | Summer Analyst Intern, Cards Marcus Data Engineering · May–Jul 2023 | Automated progress and service-target reporting with PySpark on Databricks. |
| Determinant Studios | Software Engineering Intern · Dec 2022–Feb 2023 | Prototyped entity extraction for voice-driven inventory entry, later incorporated into Vidhi. |
| NITK Surathkal | B.Tech, Electronics and Communication Engineering · 2020–2024 | CGPA 9.19/10; class rank 4/138. |

Optional recognition line: **RingCentral Best Debut Award — awarded May 2025 for Q4 2024 performance.**

### Research and open source

**Learning to recover signals**

At IISc’s Spectrum Lab, I implemented and benchmarked amplitude debiasing in LISTA, studying recovery from noisy measurements. I co-authored *Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks*, published in the IEEE ICASSP 2025 proceedings.

Links: paper and poster, using the existing artifact definitions.

**Evaluating numerical formats**

Through the Linux Foundation Mentorship Program, I implemented missing 8- and 16-bit mathematical functions in SoftPosit C++ and added unit tests. The work supported evaluation of posit arithmetic on RISC-V. I also co-authored *Evaluating Numerical Formats for HPC Using Fractal Benchmarks*, in the forthcoming CoNGA 2025 proceedings.

Links: contribution history, mentorship badge, proceedings listing. Label the listing **Proceedings · forthcoming**, rather than implying a published paper is available.

**Voice-assisted inventory**

At Determinant Studios, I prototyped entity extraction for spoken inventory updates, helping shopkeepers enter structured records through voice. I am a named inventor on Indian Patent No. 576831, granted in 2025.

Link: patent record. Keep the contribution and inventorship distinct from ownership of the complete product.

### Contact

**Let’s talk about what you’re building.**

For applied AI engineering work that combines product understanding with hands-on delivery, get in touch.

Links: Email, LinkedIn, GitHub, Résumé. Reuse existing destinations after checking them; do not introduce new contact details.

### Search and sharing

Title: **Inbasekaran Perumal | Applied AI & Software Engineering**

Description: **Software engineer at RingCentral building AI features from product problem to production, across backend systems, evaluation, and deployment. Explore selected work, research, and open-source contributions.**

Each case-study page needs its own title, description, canonical URL, and sharing metadata when implemented.

## Case-study copy

The paths below are now implemented static routes. They should contain more detail than the homepage without becoming résumé bullet lists.

### 1. Natural language filtering

Proposed route: `/work/natural-language-filtering`

**Make existing product capabilities easier to discover.**

**Problem.** ACE’s call filters could answer useful questions, but users had to know which filters to look for and how to combine them. I proposed a natural language entry point so they could describe the view they needed.

**My contribution.** I led the work from early experiments through AI/backend implementation, product integration, deployment, and observability. Retrieval supplied context for organization-specific values, while checks against available values helped resolve what a request referred to.

**Decision.** The feature needed to produce usable filters. After inspecting production requests, I added deterministic handling for recurring simple queries and kept model-assisted interpretation for requests that needed it. Real usage also informed evaluation examples and filter descriptions.

**Outcome.** Customers could reach existing filtering capabilities through plain language. Production feedback became part of the development loop, informing routing, evaluation coverage, and supported filters after launch.

**Proof.** This is company work. Use the written account without internal screenshots, trace dumps, customer data, or fabricated demos presented as real product evidence.

### 2. AI native engineering workflows

Proposed route: `/work/ai-native-engineering`

**Give engineers useful context, then make the workflow repeatable.**

**Problem.** AI tools were available, but using them well across planning, implementation, debugging, and review required shared context and practices that teammates could understand and maintain.

**My contribution.** I developed shared planning context, role-specific agent skills and workflows, persistent memory, and teammate training. I also built an internal debugging MCP server that brought observability and deployment context into coding workflows.

**Decision.** We kept plans and decisions available across sessions and repositories, with review checkpoints before implementation. We favored a local coding workflow the team could inspect and debug as tools changed. The debugging integration reduced the context gathering needed before investigating failures.

**Outcome.** The team used these practices in cross-component delivery and bug triage. Shared planning helped surface mistakes earlier. Testing and verification remained a substantial part of delivery, even when implementation became faster.

**Attribution.** The workflow development, training, and internal debugging MCP are my contributions. Delivery, bug-resolution, and spending outcomes belong to the team.

### 3. ACE MCP reporting

Proposed route: `/work/ace-mcp`

**Answer reporting questions beyond the product’s existing views.**

**Problem.** Customers wanted custom analysis of conversation data without requiring a separate engineering cycle for every report. An MCP interface offered read-only access from an AI client while respecting the user’s permissions.

**My contribution.** I designed the query language and client-facing interface around document search and aggregation, and contributed multi-turn evaluations. Another engineer implemented the interface.

**Decision.** The language needed to express varied reporting requests through a small tool surface. Evaluation had to check sequences of calls, because a later query could depend on an earlier result. Correct individual calls were only part of getting the complete report right.

**Outcome.** ACE MCP has released. My work focused on the reporting interface design and evaluating multi-turn behavior. Customer adoption and evaluation pass rates are not stated here because no confirmed figures are available.

**Scope.** This story covers the released MCP reporting work. Remove the old MCP app, GraphQL contract, interactive app, and plugin-delivery narrative and visuals.

### Additional project: VisionGuard

Proposed route: `/work/visionguard`

**Use local gaze inference for screen-time feedback.**

VisionGuard is a webcam-based desktop application that distinguishes looking at the screen from looking away and uses that signal for screen-time feedback and break reminders.

During Google Summer of Code, I built the C++ application, calibration flow, and local inference path using OpenVINO, Qt, and OpenCV. A hardware benchmark measured 14 W on an Intel NPU versus 26 W on a GPU, approximately 46% lower power consumption in that comparison.

This is a measured hardware comparison, not a claim about medical outcomes or production cloud savings.

Links: source code, official GSoC project, OpenVINO write-up, using `content/links.ts`.

## Content decisions for review

The initial draft below used qualitative RingCentral outcomes. On 8 November, the user confirmed manager approval for public use of the résumé figures. The implementation includes the qualified filtering results, team transformation outcomes, and shared ACE MCP entity coverage. The following originally optional sentences now document the approved measurement boundaries.

- **Natural language filtering:** optional proof sentence: “The feature covered 40+ predefined filters, with filter activity up 13% in the first month. About 40% of queries took a deterministic path, reducing latency for that subset from 5 seconds to under 1 second.” “Activity” means page/API requests, not unique users; the latency applies only to the subset.
- **AI engineering workflows:** optional proof sentence: “Helped reduce monthly AI spend by 52%. Agentic debugging workflows helped the team resolve 123 Jira bugs in three weeks, while estimated diagnostic time fell from 30 to 5 minutes.” Keep team attribution and “estimated”; do not imply a controlled productivity study or that the internal MCP fixed every bug.
- **ACE MCP:** optional scope sentence: “The released reporting interface covers 23 conversation-intelligence entities through document search and aggregation.” Entity coverage is shared-project scope, not a personal implementation count or customer adoption result.
- **Project name:** use “AI native engineering workflows” publicly, with “AI native transformation” as the initiative name if preferred.

## Sources and maintenance

Reviewed against the current sibling résumé checkout: `../../Inbasekaran_Resume/main.tex`, the relevant sections of `docs/ringcentral-experience-context.md`, and `docs/linkedin-profile-refresh-toolkit-v2.md`. These paths are relative to this website repository root. The live LinkedIn profile was not re-audited; the user's statement that it is complete remains the boundary of this work.

The 8 November release update in the canonical MCP notes supersedes both their older test-account paragraph and the handoff summary. The current résumé also supersedes website dates for SDE II and Determinant Studios.

Keep the detailed contribution/evidence notes in their existing private source. Do not copy that ledger, private telemetry, or job-search planning into the public site. The spending and debugging figures expressly cleared by the user are included in the public narrative and exact application résumé download. The selected copy has been carried into the typed content model and current content assertions. Future copy edits should update that model and its checks together. Historical August documents should remain historical references rather than silently overriding this request.
