import { links } from "./links.ts";

export const sections = {
  work: {
    label: "Work",
    anchor: "work",
    route: "/work/",
    heading: "Applied AI and software engineering work",
    introduction: "Explore projects spanning natural language filtering, AI-assisted engineering, conversation intelligence and on-device gaze tracking. Each case study describes my contribution and the decisions behind it.",
    description: "Explore Inbasekaran Perumal’s software engineering case studies, from natural language filtering and ACE MCP to AI-assisted workflows and VisionGuard.",
  },
  research: {
    label: "Research",
    anchor: "research",
    route: "/research/",
    heading: "Research and publications",
    introduction: "My research covers sparse signal recovery with deep unfolded networks, posit arithmetic for numerical precision and voice-based inventory entry. Find the papers, poster, code and patent evidence below.",
    description: "Find Inbasekaran Perumal’s research on sparse signal recovery, deep unfolded networks, posit arithmetic and voice-based inventory entry.",
  },
  experience: {
    label: "Experience",
    anchor: "experience",
    route: "/experience/",
    heading: "Software engineering and research experience",
    introduction: "Follow my software engineering roles at RingCentral, open-source work through Google Summer of Code, research and education.",
    description: "See Inbasekaran Perumal’s software engineering, open-source, research and education timeline, including RingCentral and Google Summer of Code.",
  },
  contact: {
    label: "Contact",
    searchTitle: "Contact",
    anchor: "contact",
    route: "/contact/",
    heading: "Contact Inbasekaran Perumal",
    introduction: "Get in touch to discuss applied AI, backend engineering or research.",
    description: "Get in touch with Inbasekaran Perumal by email or LinkedIn, browse his GitHub projects or download his résumé.",
  },
} as const;

export const site = {
  mark: "inba.dev",
  skipLabel: "Skip to content",
  navigationLabel: "Main navigation",
  workCaseLabel: "Read case study",
  workBackLabel: "All work",
  nextProjectLabel: "Continue to",
  moreWorkLabel: "Explore more",
  workReturnLabel: "Back to selected work",
  navigation: Object.values(sections),
} as const;

export type Section = (typeof site.navigation)[number];

export const seo = {
  title: "Inbasekaran Perumal | Applied AI & Software Engineering",
  description:
    "Software engineer building applied AI and backend systems. Explore Inbasekaran Perumal’s selected work, research and open-source contributions.",
} as const;
export const homepageSharing = {
  title: "Inbasekaran Perumal",
  description: "Software engineer building applied AI and backend systems.",
} as const;

export type ArtifactLink = { label: string; href: string; context?: string };
export const projectAnchors: Record<string, string> = {
  "natural-language-filtering": "smart-filters",
  "ai-native-engineering": "ai-native-engineering",
  "ace-mcp": "ace",
  visionguard: "visionguard",
};
export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  sections: { heading: string; body: string }[];
  artifacts: ArtifactLink[];
  caseReferences?: { heading: string; links: ArtifactLink[] };
};
export const projects: Project[] = [
  {
    slug: "natural-language-filtering",
    title: "Smart Filters",
    eyebrow: "RingCentral · Smart Filters",
    headline: "Find the right calls in plain language.",
    summary:
      "I built a natural language interface for 40+ call filters, making them easier to discover and use. Filter activity increased 13% in the first month.",
    sections: [
      {
        heading: "Problem",
        body: "ACE offered powerful call filters, but customers needed to know which filters to use and how to combine them.",
      },
      {
        heading: "My contribution",
        body: "I proposed and built a natural language interface that translates a request into filters. Retrieval supplied context for organization-specific values, and validation matched requests against available values.",
      },
      {
        heading: "Decision",
        body: "I used real requests and evaluations to identify common queries that could be handled with deterministic logic, reserving model-assisted interpretation for more complex requests.",
      },
      {
        heading: "Outcome",
        body: "Filter activity increased 13% in the first month, measured by page and API requests. About 40% of queries used the deterministic path, reducing latency for those queries from 5 seconds to under 1 second.",
      },
    ],
    artifacts: [],
  },
  {
    slug: "ai-native-engineering",
    title: "AI-native transformation",
    eyebrow: "RingCentral · AI-native transformation",
    headline: "Make AI-assisted engineering work across the stack.",
    summary:
      "I led our AI-native transformation, building workflows that helped cut monthly AI spend by 52% while supporting higher delivery volume.",
    sections: [
      {
        heading: "Problem",
        body: "AI tools were evolving quickly, but our early attempts at end-to-end development were slower than manual work, introduced more bugs and used too many tokens. Features often spanned multiple repositories across our 20+ repository landscape, making context hard to manage.",
      },
      {
        heading: "My contribution",
        body: "I led the team's AI-native transformation, exploring open-source tools, standardizing workflows and training teammates. I built a shared planning context inspired by OpenSpec, adapted skills from Matt Pocock, BMAD and Lauren Tan's pstack, and used BMAD Builder to create agents with persistent memory. I also built an internal MCP server to bring observability and deployment context into debugging.",
      },
      {
        heading: "Decision",
        body: "Shared context helped agents work across frontend, backend, analytics and AI repositories. Specialized workflows supported planning, implementation, review and bug triage in Codex, Claude Code and Cursor.",
      },
      {
        heading: "Outcome",
        body: "The workflows helped cut monthly AI spend by 52% while supporting higher delivery volume. Agent-assisted debugging helped the team resolve 123 Jira bugs in three weeks, with estimated diagnostic time falling from 30 to 5 minutes.",
      },
    ],
    artifacts: [],
    caseReferences: {
      heading: "Open-source references",
      links: [
        { label: "OpenSpec", href: links.openSpec },
        { label: "Matt Pocock's skills", href: links.mattPocockSkills },
        { label: "Lauren Tan's pstack", href: links.pstack },
        { label: "BMAD Method", href: links.bmadMethod },
        { label: "BMAD Builder", href: links.bmadBuilder },
      ],
    },
  },
  {
    slug: "ace-mcp",
    title: "ACE MCP",
    eyebrow: "RingCentral · ACE MCP",
    headline: "Explore conversation data beyond standard reports.",
    summary:
      "I designed the query language and contributed multi-turn evaluations for ACE MCP, enabling custom analysis across 23 conversation-intelligence entities.",
    sections: [
      {
        heading: "Problem",
        body: "Customers wanted custom analysis of conversation data without a separate engineering cycle for each report.",
      },
      {
        heading: "My contribution",
        body: "I designed the query language and client-facing interface for document search and aggregation, and contributed multi-turn evaluations.",
      },
      {
        heading: "Decision",
        body: "A small set of tools needed to support varied reporting questions. I evaluated sequences of calls as well as individual queries, since later queries could depend on earlier results.",
      },
      {
        heading: "Outcome",
        body: "ACE MCP provides permission-aware, read-only access across 23 conversation-intelligence entities, enabling AI clients to answer custom reporting questions.",
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
      "I built a gaze-tracking desktop app that provides screen-time feedback and break reminders using local inference.",
    sections: [
      {
        heading: "The project",
        body: "VisionGuard uses a webcam to distinguish looking at the screen from looking away, providing screen-time feedback and break reminders.",
      },
      {
        heading: "My contribution",
        body: "During Google Summer of Code, I built the C++ application, calibration flow and local inference path using OpenVINO, Qt and OpenCV.",
      },
      {
        heading: "Outcome",
        body: "In a hardware comparison, inference on an Intel NPU consumed 14 W versus 26 W on a GPU, approximately 46% less power.",
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
      "I implemented and benchmarked amplitude debiasing in LISTA for sparse signal recovery, improving mean reconstruction SNR from 26.4 to 32.6 dB in the reported benchmark. I co-authored the resulting ICASSP 2025 paper.",
    references: [
      { label: "Paper", href: links.icasspPaper, context: "Some Intriguing Observations on the Learnt Matrices in Deep Unfolded Networks" },
      { label: "Poster", href: links.icasspPoster, context: "ICASSP 2025 poster" },
      { label: "Lab", href: links.spectrumLab, context: "IISc Spectrum Lab" },
    ],
    visual: "poster",
  },
  {
    id: "open-source",
    eyebrow: "Linux Foundation · CoNGA 2025",
    heading: "Evaluating numerical formats",
    summary:
      "Through Linux Foundation mentorship, I implemented and tested missing 8- and 16-bit mathematical functions in SoftPosit C++, supporting evaluation of posit arithmetic on RISC-V. I also co-authored a study comparing posit and floating-point formats using fractal benchmarks.",
    references: [
      { label: "Code", href: links.softpositCode, context: "SoftPosit contribution history" },
      { label: "Proceedings · forthcoming", href: links.congaPaper, context: "Evaluating Numerical Formats for HPC Using Fractal Benchmarks" },
    ],
    visual: "fractals",
  },
  {
    id: "patent",
    eyebrow: "Determinant Studios · Indian patent",
    heading: "Voice-assisted inventory",
    summary:
      "I prototyped entity extraction to turn spoken inventory updates into structured records for shopkeepers, reducing entry time by about 35% in tests. I am a named inventor on Indian Patent No. 576831, granted in 2025.",
    references: [{ label: "Patent record", href: links.patentCertificate }],
    visual: "inventory",
  },
];

export const projectDiagrams = {
  "natural-language-filtering": {
    label: "A natural language request resolved into available filters",
    source: "Calls from last week where the customer mentioned cancellation.",
    query: { before: "Calls from", date: "last week", between: "where the customer mentioned", tracker: "cancellation." },
    steps: [
      { title: "DATE", detail: "Last week" },
      { title: "TRACKER", detail: "Cancellation" },
    ],
  },
  "ai-native-engineering": {
    label: "Shared context supports specialized workflows across frontend, backend, analytics and AI repositories, with observability and deployment context for debugging",
    source: "Shared context",
    description: "Consistent decisions across the work.",
    memory: "Planning context + persistent memory",
    repositoriesLabel: "Repository domains",
    repositories: ["Frontend", "Backend", "Analytics", "AI"],
    workflowLabel: "Specialized workflows",
    debugging: { title: "Debugging MCP", detail: "Observability + deployment context", relationship: "Supports bug triage" },
    steps: [
      { title: "PLAN", detail: "Shared plan" },
      { title: "BUILD", detail: "Agent skills" },
      { title: "REVIEW", detail: "Review checks" },
      { title: "TRIAGE", detail: "Bug triage" },
    ],
  },
  "ace-mcp": {
    label:
      "Reporting questions use a query language for document search and aggregation",
    source: "Which calls mention cancellation?",
    exampleLabel: "Illustrative question",
    gateway: "AI client → ACE MCP · read-only",
    language: "Query language",
    steps: [
      { title: "Document search", detail: "Find matching calls." },
      { title: "Aggregation", detail: "Count calls by tracker." },
    ],
    resultsLabel: "Results",
    results: "The AI client combines the matching calls and counts into a report.",
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
