# Portfolio Content

This is the canonical copy and evidence source for the portfolio redesign. The **Public-facing copy** may be adapted to the interface. The **Evidence ledger** is internal and must not appear as a site section.

## Editorial north star

The portfolio is a founder-facing hiring case, not a résumé. It should let readers infer high agency from the work: find a meaningful problem, make a sound engineering decision, evaluate it, integrate it, ship it, and improve it under real conditions.

Avoid a skills matrix, exhaustive project lists, career-duty bullets, unqualified superlatives, and generic AI language. AI is a source of leverage within systems engineering, not the entire identity.

## Public-facing copy

### Hero

**Opening statement**

I turn meaningful business problems into reliable software and AI systems.

**Resolution line**

Evaluated. Integrated. Shipped.

**Resolved identity**

Inbasekaran Perumal

Software Development Engineer II, RingCentral

Building intelligent systems that hold up in real use.

### Current context

I am a Software Development Engineer II at RingCentral. In a small product team, I take ambiguous business problems through system design, evaluation, platform integration, and the revisions that real usage demands.

### Work

#### Smart Filters

**Make powerful product capability easier to use.**

Call filtering had become capable but difficult to discover. I proposed and built a natural-language path into the product's existing filters, so people could describe the view they needed instead of searching through a dense interface.

The system combines deterministic interpretation with model-assisted reasoning, then makes its behavior measurable through evaluation and observability. I led the work from early experiments through product integration. When real use exposed noisy patterns, I revised the routing with deterministic safeguards rather than treating launch as the finish line.

#### ACE

**Bring the product into the AI workspace.**

ACE offers an MCP app that brings governed data, permissions, and product workflows into the AI workspace.

I am building the GraphQL and MCP layers behind it, from governed schema exposure and tool design to the app experience and plugin delivery.

#### VisionGuard

**Turn gaze into private screen-time feedback.**

VisionGuard is a webcam-based desktop application that distinguishes looking at the screen from looking away, turning that signal into private screen-time feedback and break reminders.

I built the C++ application, calibration flow, and local inference path with OpenVINO, Qt, and OpenCV.

[Repository](https://github.com/inbasperu/VisionGuard) · [Google Summer of Code project](https://summerofcode.withgoogle.com/programs/2024/projects/QUbIeRAM) · [OpenVINO project write-up](https://medium.com/openvino-toolkit/visionguard-ai-eye-care-for-computer-users-d055a574d8e9)

### Research

#### IISc and ICASSP

**Recovering images from incomplete measurements.**

At IISc's Spectrum Lab, I worked on inverse problems in imaging: recovering images from incomplete or noisy measurements. Using deep-unfolded networks, which are learned versions of iterative optimisation, I studied how update matrices, thresholds, and initialization shape stability and reconstruction.

This research appears in the ICASSP 2025 paper, *Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks*.

[ICASSP paper](https://ieeexplore.ieee.org/document/10890318) · [ICASSP poster](./ICASSP-DUN-Poster.pdf) · [IISc internship verification](https://drive.google.com/file/d/1-LrhKrFmR9FZvuXp9MBH59vLjfCgzr6o/view) · [Spectrum Lab](https://spectrum.ee.iisc.ac.in/)

### Open source

#### Linux Foundation and SoftPosit

**When numerical formats change the picture.**

In the Linux Foundation Mentorship, I extended SoftPosit C++ for RISC-V through mathematical functions, tests, packaging, and an emulated toolchain, so alternative arithmetic could be exercised in real workloads.

Across Mandelbrot and Julia workloads, I benchmarked conventional floating-point formats against posit arithmetic.

The work became a CoNGA 2025 paper on numerical accuracy and performance in HPC.

[SoftPosit contribution history](https://github.com/Posit-Foundation/soft-posit-cpp/commits/refactor-cpp-soft-posits?author=the-pinbo) · [Mentorship badge](https://www.credly.com/badges/0caf0ab0-83e9-4614-810a-0a54ef7eb5ab) · [CoNGA proceedings](https://books.google.co.in/books?id=Sx8Q0gEACAAJ&printsec=frontcover&dq=editions:ISBN3032292565)

### Patent

#### Voice-assisted inventory management

**Inventory should not require a keyboard.**

At Determinant Studios, I worked on a voice-assisted inventory and ledger system that turns spoken updates into structured actions.

I am a named inventor on the resulting Indian Patent No. 576831.

[Official Patent Office certificate](https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMzQxMDUxOTgw&FullPath=LVBhdGVudENlcnRpZmljYXRlMzAtMTItMjAyNS5wZGY=) · [Determinant Studios](https://determinantstudios.com/about.html)

### Track record

Selected roles, research, open source, and education.

**RingCentral · Jul 2024–Present** · Software Development Engineer II · ACE · Search, agentic workflows, and software systems for ACE.

**Linux Foundation · Mar 2025–May 2025** · Open Source Developer · SoftPosit for RISC-V · C++ numerical computing, RISC-V emulation, and benchmark-driven systems work.

**Google Summer of Code · May 2024–Aug 2024** · Open Source Developer · Intel OpenVINO · On-device gaze estimation across C++, OpenVINO, and AI PC hardware.

**Indian Institute of Science · Apr 2024–Jul 2024** · Research Intern · Spectrum Lab · Sparse recovery and inverse imaging through optimisation-inspired neural networks.

**Goldman Sachs · May 2023–Jul 2023** · Summer Analyst · Cards Marcus Data Engineering · PySpark and Airflow pipelines for operational reporting.

**Determinant Studios · Nov 2022–May 2023** · Software Engineering and Research Intern · Speech recognition and entity extraction for a voice-driven inventory product.

**NITK Surathkal · Nov 2020–Apr 2024** · B.Tech, Electronics & Communication Engineering · 9.19/10 · Rank 4/138 · Chaired IEEE CIS and led media and outreach for IEEE NITK.

### Contact

If you’re building something difficult, I’d like to hear about it.

[Email](mailto:inba2002.p@gmail.com) · [LinkedIn](https://www.linkedin.com/in/inbasperu/) · [GitHub](https://github.com/the-pinbo) · [Resume](https://drive.google.com/file/d/1Yd9XmOQbQr_j_XIw3krVfHL3XIJ8zHTQ/view?usp=sharing)

## Evidence ledger, not site copy

| Claim or section | Evidence route | Publication rule |
|---|---|---|
| RingCentral role, employment history, education, Goldman Sachs | [LinkedIn](https://www.linkedin.com/in/inbasperu/) | Use LinkedIn for titles, dates, degree, and career chronology. Do not use its project or skills sections as current proof. |
| Smart Filters | Confidential production work | Describe the problem, engineering judgment, ownership, evaluation, and production revision. Do not publish metrics, screenshots, customer quotes, or internal architecture until cleared. |
| ACE MCP app offering | Confidential production work | Describe governed AI data access and end-to-end ownership at a high level. Future official blog is supporting material, not a prerequisite. |
| VisionGuard | [Repository](https://github.com/inbasperu/VisionGuard) and [GSoC project](https://summerofcode.withgoogle.com/programs/2024/projects/QUbIeRAM) | Public flagship technical proof. |
| IISc and ICASSP | [IEEE Xplore](https://ieeexplore.ieee.org/document/10890318) and [internship certificate](https://drive.google.com/file/d/1-LrhKrFmR9FZvuXp9MBH59vLjfCgzr6o/view) | Feature the paper; use the certificate as quiet institutional verification. |
| SoftPosit, Linux Foundation, CoNGA | [Contributor history](https://github.com/Posit-Foundation/soft-posit-cpp/commits/refactor-cpp-soft-posits?author=the-pinbo), [Credly](https://www.credly.com/badges/0caf0ab0-83e9-4614-810a-0a54ef7eb5ab), and [proceedings](https://books.google.co.in/books?id=Sx8Q0gEACAAJ&printsec=frontcover&dq=editions:ISBN3032292565) | Keep CoNGA within the SoftPosit proof thread, not as a separate flagship credential. |
| Patent No. 576831 | [Official Patent Office certificate](https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMzQxMDUxOTgw&FullPath=LVBhdGVudENlcnRpZmljYXRlMzAtMTItMjAyNS5wZGY=) and the granted specification supplied on 2026-08-22 | Safe wording is “Named inventor.” The supplied granted specification lists Anand Bora, Inbasekaran Perumal, and Shirin Pullot. Never claim sole ownership. |
| Résumé | [Temporary Drive link](https://drive.google.com/file/d/1Yd9XmOQbQr_j_XIw3krVfHL3XIJ8zHTQ/view?usp=sharing) | Public resume destination. It is the sole resume link until an updated file replaces it. |

## Deliberate exclusions

- Aura is omitted completely.
- No standalone technical-skills section or community section.
- No detailed job descriptions, old CV metrics, or unsupported RingCentral numbers.
- No public source using the expiring LinkedIn media CDN URL.
- The old CV, research slide decks, and B.Tech thesis remain archive material for future deep dives or visual assets, not primary portfolio content.
