# Website text: refined draft

Revised copy for the Work, Research and Experience sections. Headings describe where the text appears.

# Work

## Smart Filters

### Homepage preview

**Label:** RingCentral · Smart Filters

**Headline:** Find the right calls in plain language.

I built a natural language interface for 40+ call filters, making them easier to discover and use. Filter activity increased 13% in the first month.

**Link:** Read case study

### Case study

**Title:** Smart Filters

**Headline:** Find the right calls in plain language.

#### Problem

ACE offered powerful call filters, but customers needed to know which filters to use and how to combine them.

#### My contribution

I proposed and built a natural language interface that translates a request into filters. Retrieval supplied context for organization-specific values, and validation matched requests against available values.

#### Decision

I used real requests and evaluations to identify common queries that could be handled with deterministic logic, reserving model-assisted interpretation for more complex requests.

#### Outcome

Filter activity increased 13% in the first month, measured by page and API requests. About 40% of queries used the deterministic path, reducing latency for those queries from 5 seconds to under 1 second.

## AI-native transformation

### Homepage preview

**Label:** RingCentral · AI-native transformation

**Headline:** Make AI-assisted engineering work across the stack.

I led our AI-native transformation, building workflows that helped cut monthly AI spend by 52% while supporting higher delivery volume.

**Link:** Read case study

### Case study

**Title:** AI-native transformation

**Headline:** Make AI-assisted engineering work across the stack.

#### Problem

AI tools were evolving quickly, but our early attempts at end-to-end development were slower than manual work, introduced more bugs and used too many tokens. Features often spanned multiple repositories across our 20+ repository landscape, making context hard to manage.

#### My contribution

I led the team's AI-native transformation, exploring open-source tools, standardizing workflows and training teammates. I built a shared planning context inspired by OpenSpec, adapted skills from Matt Pocock, BMAD and Lauren Tan's pstack, and used BMAD Builder to create agents with persistent memory. I also built an internal MCP server to bring observability and deployment context into debugging.

#### Decision

Shared context helped agents work across frontend, backend, analytics and AI repositories. Specialized workflows supported planning, implementation, review and bug triage in Codex, Claude Code and Cursor.

#### Outcome

The workflows helped cut monthly AI spend by 52% while supporting higher delivery volume. Agent-assisted debugging helped the team resolve 123 Jira bugs in three weeks, with estimated diagnostic time falling from 30 to 5 minutes.

**Open-source references:** [OpenSpec](https://github.com/Fission-AI/OpenSpec) · [Matt Pocock's skills](https://github.com/mattpocock/skills) · [Lauren Tan's pstack](https://github.com/cursor/plugins/tree/main/pstack) · [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) · [BMAD Builder](https://github.com/bmad-code-org/bmad-builder)

## ACE MCP

### Homepage preview

**Label:** RingCentral · ACE MCP

**Headline:** Explore conversation data beyond standard reports.

I designed the query language and contributed multi-turn evaluations for ACE MCP, enabling custom analysis across 23 conversation-intelligence entities.

**Link:** Read case study

### Case study

**Title:** ACE MCP

**Headline:** Explore conversation data beyond standard reports.

#### Problem

Customers wanted custom analysis of conversation data without a separate engineering cycle for each report.

#### My contribution

I designed the query language and client-facing interface for document search and aggregation, and contributed multi-turn evaluations. Another engineer implemented the interface.

#### Decision

A small set of tools needed to support varied reporting questions. I evaluated sequences of calls as well as individual queries, since later queries could depend on earlier results.

#### Outcome

ACE MCP provides permission-aware, read-only access across 23 conversation-intelligence entities, enabling AI clients to answer custom reporting questions.

## VisionGuard

### Homepage preview

**Label:** Google Summer of Code · OpenVINO

**Headline:** Track screen time on device.

I built a gaze-tracking desktop app that provides screen-time feedback and break reminders using local inference.

**Link:** Read case study

**Additional links:** [Code](https://github.com/inbasperu/VisionGuard) · [GSoC](https://summerofcode.withgoogle.com/archive/2024/projects/QUbIeRAM) · [Write-up](https://medium.com/openvino-toolkit/visionguard-ai-eye-care-for-computer-users-d055a574d8e9)

### Case study

**Title:** VisionGuard

**Headline:** Track screen time on device.

#### The project

VisionGuard uses a webcam to distinguish looking at the screen from looking away, providing screen-time feedback and break reminders.

#### My contribution

During Google Summer of Code, I built the C++ application, calibration flow and local inference path using OpenVINO, Qt and OpenCV.

#### Outcome

In a hardware comparison, inference on an Intel NPU consumed 14 W versus 26 W on a GPU, approximately 46% less power.

**Links:** [Code](https://github.com/inbasperu/VisionGuard) · [GSoC](https://summerofcode.withgoogle.com/archive/2024/projects/QUbIeRAM) · [Write-up](https://medium.com/openvino-toolkit/visionguard-ai-eye-care-for-computer-users-d055a574d8e9)

### Work illustrations

**Smart Filters:** Calls from last week where the customer mentioned cancellation.

- DATE: Last week
- TRACKER: Cancellation

**AI-native transformation:** Shared context. Consistent decisions across the work.

- PLAN: Shared plan
- BUILD: Agent skills
- REVIEW: Review checks

**ACE MCP:** Which calls mention cancellation?

- AI client → ACE MCP · read-only
- Query language
- Document search: Find matching calls.
- Aggregation: Count calls by tracker.
- Results: The AI client combines the matching calls and counts into a report.

**Case-study navigation:** All work · Continue to · Explore more · Back to selected work

# Research

## Learning to recover signals

**Label:** IISc Spectrum Lab · ICASSP 2025

I implemented and benchmarked amplitude debiasing in LISTA for sparse signal recovery, improving mean reconstruction SNR from 26.4 to 32.6 dB in the reported benchmark. I co-authored the resulting ICASSP 2025 paper.

**References:**

- [Paper](https://elib.dlr.de/223869/) · Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks
- [Poster](/ICASSP-DUN-Poster.pdf) · ICASSP 2025 poster
- [Lab](https://spectrum.ee.iisc.ac.in/) · IISc Spectrum Lab

**Figure caption:** ICASSP 2025 poster

## Evaluating numerical formats

**Label:** Linux Foundation · CoNGA 2025

Through Linux Foundation mentorship, I implemented and tested missing 8- and 16-bit mathematical functions in SoftPosit C++, supporting evaluation of posit arithmetic on RISC-V. I also co-authored a study comparing posit and floating-point formats using fractal benchmarks.

**References:**

- [Code](https://github.com/Posit-Foundation/soft-posit-cpp/commits/refactor-cpp-soft-posits?author=the-pinbo) · SoftPosit contribution history
- [Proceedings · forthcoming](https://link.springer.com/book/9783032292568) · Evaluating Numerical Formats for HPC Using Fractal Benchmarks

**Figure labels:**

- double
- float: SSIM 0.476 · MSE 0.087
- posit32: SSIM 0.605 · MSE 0.053

**Figure caption:** Representative fractal result from a broader benchmark suite.

## Voice-assisted inventory

**Label:** Determinant Studios · Indian patent

I prototyped entity extraction to turn spoken inventory updates into structured records for shopkeepers, reducing entry time by about 35% in tests. I am a named inventor on Indian Patent No. 576831, granted in 2025.

**References:**

- [Patent record](https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMzQxMDUxOTgw&FullPath=LVBhdGVudENlcnRpZmljYXRlMzAtMTItMjAyNS5wZGY=)

**Illustration:** “Add five bags of rice.”

- Item: Rice
- Quantity: Five bags
- Action: Add stock

**Figure caption:** Spoken input, structured inventory update.

# Experience

## RingCentral

**Role:** Software Development Engineer II

**Dates:** Jul 2026–Present

## RingCentral

**Role:** Software Development Engineer I

**Dates:** Jul 2024–Jun 2026

## Linux Foundation Mentorship Program

**Role:** Open Source Developer

**Dates:** Mar–May 2025

## Google Summer of Code

**Role:** Open Source Developer, Intel OpenVINO Toolkit

**Dates:** May–Aug 2024

## Indian Institute of Science

**Role:** Research Intern, Spectrum Lab

**Dates:** Apr–Jul 2024

## Goldman Sachs

**Role:** Summer Analyst Intern, Cards Marcus Data Engineering

**Dates:** May–Jul 2023

## Determinant Studios

**Role:** Software Engineering Intern

**Dates:** Dec 2022–Feb 2023

## NITK Surathkal

**Role:** B.Tech, Electronics and Communication Engineering | CGPA 9.19/10 | Class rank 4/138

**Dates:** 2020–2024
