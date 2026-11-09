import { links } from "./links";

export const site = {
  mark: "inba.dev",
  skipLabel: "Skip to content",
  navigationLabel: "Main navigation",
  workCaseLabel: "Read case study",
  workBackLabel: "All work",
  nextProjectLabel: "Continue to",
  moreWorkLabel: "Explore more",
  workReturnLabel: "Back to selected work",
  navigation: [
    { label: "Work", href: "/#work" },
    { label: "Research", href: "/#research" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
export const seo = {
  title: "Inbasekaran Perumal | Applied AI & Software Engineering",
  description:
    "Software engineer at RingCentral building AI features from product problem to production, across backend systems, evaluation, and deployment. Explore selected work, research, and open-source contributions.",
} as const;
export type ArtifactLink = { label: string; href: string; context?: string };
export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  sections: { heading: string; body: string }[];
  artifacts: ArtifactLink[];
};
export const projects: Project[] = [
  {
    slug: "natural-language-filtering",
    title: "Smart Filters",
    eyebrow: "RingCentral · Smart Filters",
    headline: "Make complex filters easy to use.",
    summary:
      "I proposed and shipped plain-language access to 40+ call filters, then used production traces to route simpler requests without a model.",
    sections: [
      {
        heading: "Problem",
        body: "ACE’s call filters could answer useful questions, but users had to know which filters to look for and how to combine them. I proposed a natural language entry point so they could describe the view they needed.",
      },
      {
        heading: "My contribution",
        body: "I led the work from early experiments through AI and backend implementation, product integration, deployment, and observability. Retrieval supplied context for organization-specific values, while checks against available values helped resolve what a request referred to.",
      },
      {
        heading: "Decision",
        body: "After inspecting production requests, I added deterministic handling for recurring simple queries and kept model-assisted interpretation for requests that needed it. Real usage also informed evaluation examples and filter descriptions.",
      },
      {
        heading: "Outcome",
        body: "The feature covered 40+ predefined filters, with filter activity up 13% in the first month. Activity means page and API requests, not unique users. About 40% of queries took a deterministic path, reducing latency for that subset from 5 seconds to under 1 second.",
      },
    ],
    artifacts: [],
  },
  {
    slug: "ai-native-engineering",
    title: "AI engineering workflows",
    eyebrow: "RingCentral · AI engineering workflows",
    headline: "Make AI workflows repeatable.",
    summary:
      "Shared planning context, agent workflows and teammate training helped the team reduce monthly AI spend by 52%.",
    sections: [
      {
        heading: "Problem",
        body: "AI tools were available, but using them well across planning, implementation, debugging, and review required shared context and practices that teammates could understand and maintain.",
      },
      {
        heading: "My contribution",
        body: "I developed shared planning context, role-specific agent skills and workflows, persistent memory, and teammate training. I also built an internal debugging MCP server that brought observability and deployment context into coding workflows.",
      },
      {
        heading: "Decision",
        body: "We kept plans and decisions available across sessions and repositories, with review checkpoints before implementation. We favored a local coding workflow the team could inspect and debug as tools changed. The debugging integration reduced the context gathering needed before investigating failures.",
      },
      {
        heading: "Outcome",
        body: "The shared workflows and tooling helped the team reduce monthly AI spend by 52%, from $16.2K to $7.8K, while supporting higher delivery volume. Agentic debugging workflows helped the team resolve 123 Jira bugs in three weeks; estimated diagnostic time fell from 30 to 5 minutes. Testing and verification remained a substantial part of delivery.",
      },
    ],
    artifacts: [],
  },
  {
    slug: "ace-mcp",
    title: "ACE MCP",
    eyebrow: "RingCentral · ACE MCP",
    headline: "Go beyond existing reports.",
    summary:
      "I designed the query language and contributed multi-turn evaluations for ACE MCP, covering 23 conversation-intelligence entities. Another engineer implemented the released interface.",
    sections: [
      {
        heading: "Problem",
        body: "Customers of ACE, RingCentral’s conversation intelligence product, wanted custom analysis of conversation data without requiring a separate engineering cycle for every report. A Model Context Protocol (MCP) interface offered read-only access from an AI client while respecting the user’s permissions.",
      },
      {
        heading: "My contribution",
        body: "I designed the query language and client-facing interface around document search and aggregation, and contributed multi-turn evaluations. Another engineer implemented the interface.",
      },
      {
        heading: "Decision",
        body: "The language needed to express varied reporting requests through a small tool surface. Evaluation had to check sequences of calls, because a later query could depend on an earlier result. Correct individual calls were only part of getting the complete report right.",
      },
      {
        heading: "Outcome",
        body: "ACE MCP has released. The shared reporting interface covers 23 conversation-intelligence entities.",
      },
    ],
    artifacts: [],
  },
  {
    slug: "visionguard",
    title: "VisionGuard",
    eyebrow: "Google Summer of Code · OpenVINO",
    headline: "Track screen time on device.",
    summary:
      "I built a gaze-tracking desktop app with OpenVINO during Google Summer of Code, providing local screen-time feedback and break reminders.",
    sections: [
      {
        heading: "The project",
        body: "VisionGuard is a webcam-based desktop application that distinguishes looking at the screen from looking away and uses that signal for screen-time feedback and break reminders.",
      },
      {
        heading: "My contribution",
        body: "During Google Summer of Code, I built the C++ application, calibration flow, and local inference path using OpenVINO, Qt, and OpenCV.",
      },
      {
        heading: "Hardware comparison",
        body: "A hardware benchmark measured 14 W on an Intel NPU versus 26 W on a GPU, approximately 46% lower power consumption in that comparison.",
      },
    ],
    artifacts: [
      { label: "Code", href: links.visionguardCode },
      { label: "GSoC", href: links.visionguardGsoc },
      { label: "Write-up", href: links.visionguardWriteUp },
    ],
  },
];
export type TrackRecordEntry = {
  institution: string;
  role: string;
  dateRange: string;
};

export const trackRecord: TrackRecordEntry[] = [
  {
    institution: "RingCentral",
    role: "Software Development Engineer II",
    dateRange: "Jul 2026–Present",
  },
  {
    institution: "RingCentral",
    role: "Software Development Engineer I",
    dateRange: "Jul 2024–Jun 2026",
  },
  {
    institution: "Linux Foundation Mentorship Program",
    role: "Open Source Developer",
    dateRange: "Mar–May 2025",
  },
  {
    institution: "Google Summer of Code",
    role: "Open Source Developer, Intel OpenVINO Toolkit",
    dateRange: "May–Aug 2024",
  },
  {
    institution: "Indian Institute of Science",
    role: "Research Intern, Spectrum Lab",
    dateRange: "Apr–Jul 2024",
  },
  {
    institution: "Goldman Sachs",
    role: "Summer Analyst Intern, Cards Marcus Data Engineering",
    dateRange: "May–Jul 2023",
  },
  {
    institution: "Determinant Studios",
    role: "Software Engineering Intern",
    dateRange: "Dec 2022–Feb 2023",
  },
  {
    institution: "NITK Surathkal",
    role: "B.Tech, Electronics and Communication Engineering | CGPA 9.19/10 | Class rank 4/138",
    dateRange: "2020–2024",
  },
];
export const contact = {
  eyebrow: "Contact",
  heading: "Let’s talk about what you’re building.",
  primaryAction: { label: "Email", href: links.email },
  links: [
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Résumé", href: links.resume },
  ],
};
// Labels retained for the source-authentic scientific plates.
export const standaloneChapters = {
  research: { figureLabel: "ICASSP 2025 poster" },
  openSource: {
    figureLabel:
      "Representative fractal result from a broader benchmark suite.",
  },
} as const;
export const visualLabels = {
  fractals: [
    { asset: "fractalDouble", label: "double" },
    { asset: "fractalFloat", label: "float", metric: "SSIM 0.476 · MSE 0.087" },
    {
      asset: "fractalPosit32",
      label: "posit32",
      metric: "SSIM 0.605 · MSE 0.053",
    },
  ],
} as const;

export const homepage = {
  name: "Inbasekaran Perumal",
  thesis: [
    "I turn meaningful business problems",
    "into reliable software and AI systems.",
  ],
  cadence: "Evaluated. Integrated. Shipped.",
  role: "Software Development Engineer II",
  workAction: "Explore my work",
  resumeAction: "Résumé",
  introduction:
    "I build AI capabilities and backend systems at RingCentral.",
} as const;

export type ResearchStory = {
  id: string;
  eyebrow: string;
  heading: string;
  summary: string;
  references: ArtifactLink[];
  visual: "poster" | "fractals" | "inventory";
};

export const researchStories: ResearchStory[] = [
  {
    id: "signal-recovery",
    eyebrow: "IISc Spectrum Lab · ICASSP 2025",
    heading: "Learning to recover signals",
    summary:
      "At IISc’s Spectrum Lab, I studied recovery from noisy signals by implementing and benchmarking amplitude debiasing in LISTA. I co-authored a paper in the IEEE ICASSP 2025 proceedings.",
    references: [
      { label: "Paper", href: links.icasspPaper, context: "Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks, IEEE ICASSP 2025" },
      { label: "Poster", href: links.icasspPoster, context: "Complete ICASSP poster PDF" },
      { label: "Certificate", href: links.iiscCertificate, context: "IISc internship verification" },
      { label: "Lab", href: links.spectrumLab, context: "IISc Spectrum Lab" },
    ],
    visual: "poster",
  },
  {
    id: "open-source",
    eyebrow: "Linux Foundation · CoNGA 2025 forthcoming",
    heading: "Evaluating numerical formats",
    summary:
      "Through Linux Foundation mentorship, I implemented missing 8- and 16-bit SoftPosit C++ mathematical functions and unit tests for posit evaluation on RISC-V. I co-authored a fractal benchmark paper for the forthcoming CoNGA 2025 proceedings.",
    references: [
      { label: "Code", href: links.softpositCode, context: "SoftPosit contribution history" },
      { label: "Certificate", href: links.linuxFoundationBadge, context: "Linux Foundation mentorship badge" },
      { label: "Proceedings · forthcoming", href: links.congaPaper, context: "Evaluating Numerical Formats for HPC Using Fractal Benchmarks, forthcoming CoNGA 2025 proceedings" },
    ],
    visual: "fractals",
  },
  {
    id: "patent",
    eyebrow: "Determinant Studios · Indian patent",
    heading: "Voice-assisted inventory",
    summary:
      "At Determinant Studios, I prototyped entity extraction to turn spoken inventory updates into structured records for shopkeepers. Named inventor on Indian Patent No. 576831, granted in 2025.",
    references: [{ label: "Patent record", href: links.patentCertificate }],
    visual: "inventory",
  },
];

export const projectDiagrams = {
  "natural-language-filtering": {
    label: "A natural language request resolved into available filters",
    source: "Calls from last week where the customer mentioned cancellation",
    steps: [
      { title: "DATE", detail: "Last week" },
      { title: "TRACKER", detail: "Cancellation" },
    ],
  },
  "ai-native-engineering": {
    label: "Shared context supports planning, implementation and review",
    source: "Shared planning context and persistent memory",
    steps: [
      { title: "PLAN", detail: "Shared plan" },
      { title: "BUILD", detail: "Agent skills" },
      { title: "REVIEW", detail: "Review checks" },
    ],
  },
  "ace-mcp": {
    label:
      "Reporting questions use a query language for document search and aggregation",
    source: "Reporting question from an AI client",
    steps: [
      { title: "QUERY LANGUAGE", detail: "Document search" },
      { title: "QUERY LANGUAGE", detail: "Aggregation" },
      { title: "EVALUATION", detail: "Multi-turn behavior" },
    ],
  },
} as const;

export const inventoryVisual = {
  label: "Illustration of a spoken inventory instruction resolved into an item, quantity, and action",
  instruction: "Add five bags of rice.",
  fields: [
    { label: "Item", value: "Rice" },
    { label: "Quantity", value: "Five bags" },
    { label: "Action", value: "Add stock" },
  ],
  caption: "Spoken input, structured inventory update.",
} as const;
