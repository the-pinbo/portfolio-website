import { links } from "./links";

export const hero = {
  thesis: "I turn meaningful business problems into reliable software and AI systems.",
  resolution: "Evaluated. Integrated. Shipped.",
};

export const identity = {
  name: "Inbasekaran Perumal",
  role: "Software Development Engineer II, RingCentral",
  supporting: "Building intelligent systems that hold up in real use.",
};

export type ArtifactLink = {
  label: string;
  href: string;
  context?: string;
};

export type Project = {
  slug: string;
  title: string;
  headline: string;
  body: string[];
  artifacts: ArtifactLink[];
};

export const projects: Project[] = [
  {
    slug: "smart-filters",
    title: "Smart Filters",
    headline: "Make powerful product capability easier to use.",
    body: [
      "Call filtering had become capable but difficult to discover. I proposed and built a natural-language path into the product's existing filters, so people could describe the view they needed instead of searching through a dense interface.",
      "The system combines deterministic interpretation with model-assisted reasoning, then makes its behavior measurable through evaluation and observability. I led the work from early experiments through product integration. When real use exposed noisy patterns, I revised the routing with deterministic safeguards rather than treating launch as the finish line.",
    ],
    artifacts: [],
  },
  {
    slug: "ace",
    title: "ACE",
    headline: "Bring the product into the AI workspace.",
    body: [
      "ACE offers an MCP app that brings governed data, permissions, and product workflows into the AI workspace.",
      "I am building the GraphQL and MCP layers behind it, from governed schema exposure and tool design to the app experience and plugin delivery.",
    ],
    artifacts: [],
  },
  {
    slug: "visionguard",
    title: "VisionGuard",
    headline: "Turn gaze into private screen-time feedback.",
    body: [
      "VisionGuard is a webcam-based desktop application that distinguishes looking at the screen from looking away, turning that signal into private screen-time feedback and break reminders.",
      "I built the C++ application, calibration flow, and local inference path with OpenVINO, Qt, and OpenCV.",
    ],
    artifacts: [
      { label: "Code", href: links.visionguardCode, context: "VisionGuard source code" },
      { label: "GSoC", href: links.visionguardGsoc, context: "VisionGuard Google Summer of Code project" },
      { label: "Write-up", href: links.visionguardWriteUp, context: "VisionGuard OpenVINO project write-up" },
    ],
  },
];

export type TrackRecordEntry = {
  institution: string;
  dateRange: string;
  role: string;
  description: string;
};

export const trackRecord: TrackRecordEntry[] = [
  {
    institution: "RingCentral",
    dateRange: "Jul 2024–Present",
    role: "Software Development Engineer II",
    description: "Search, agentic workflows, and software systems for ACE.",
  },
  {
    institution: "Linux Foundation",
    dateRange: "Mar 2025–May 2025",
    role: "Open Source Developer · SoftPosit for RISC-V",
    description: "C++ numerical computing, RISC-V emulation, and benchmark-driven systems work.",
  },
  {
    institution: "Google Summer of Code",
    dateRange: "May 2024–Aug 2024",
    role: "Open Source Developer · Intel OpenVINO",
    description: "On-device gaze estimation across C++, OpenVINO, and AI PC hardware.",
  },
  {
    institution: "Indian Institute of Science",
    dateRange: "Apr 2024–Jul 2024",
    role: "Research Intern · Spectrum Lab",
    description: "Sparse recovery and inverse imaging through optimisation-inspired neural networks.",
  },
  {
    institution: "Goldman Sachs",
    dateRange: "May 2023–Jul 2023",
    role: "Summer Analyst · Cards Marcus Data Engineering",
    description: "PySpark and Airflow pipelines for operational reporting.",
  },
  {
    institution: "Determinant Studios",
    dateRange: "Nov 2022–May 2023",
    role: "Software Engineering and Research Intern",
    description: "Speech recognition and entity extraction for a voice-driven inventory product.",
  },
  {
    institution: "NITK Surathkal",
    dateRange: "Nov 2020–Apr 2024",
    role: "B.Tech, Electronics & Communication Engineering · 9.19/10 · Rank 4/138",
    description: "Chaired IEEE CIS and led media and outreach for IEEE NITK.",
  },
];

export const contact = {
  heading: "If you're building something difficult, I'd like to hear about it.",
  links: [
    { label: "Email", href: links.email },
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Resume", href: links.resume },
  ],
};
