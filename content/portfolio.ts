export type Project = {
  title: string;
  label: string;
  tension: string;
  proof: string[];
  ownership: string;
};

export const links = {
  email: "mailto:inba2002.p@gmail.com",
  github: "https://github.com/the-pinbo",
  linkedin: "https://www.linkedin.com/in/inbasperu",
  resume:
    "https://drive.google.com/file/d/1Yd9XmOQbQr_j_XIw3krVfHL3XIJ8zHTQ/view?usp=sharing",
};

export const projects: Project[] = [
  {
    title: "Smart Filters",
    label: "Agentic + deterministic orchestration",
    tension:
      "Complex enterprise filters had to feel conversational without giving up the predictability people depend on.",
    proof: [
      "Evaluated model behavior with curated benchmarks, repeatable metrics, and production observability.",
      "Integrated agentic reasoning with deterministic interpretation, retrieval, search knowledge, and authentication.",
      "Shipped the operational path with scheduled knowledge refresh, APIs, Kubernetes, and GitOps delivery.",
    ],
    ownership:
      "Orchestration, AI logic, retrieval strategy, evaluation design, platform integration, and delivery infrastructure.",
  },
  {
    title: "Aura",
    label: "Agentic workflows + evaluation",
    tension:
      "An internal coding agent needed to support issue resolution as an engineering workflow, not just generate code.",
    proof: [
      "Designed reusable workflows, skills, and tool interfaces for a coding-agent harness.",
      "Evaluated individual skills and multi-step agent loops to make reliability visible.",
      "Integrated measured feedback into the workflow structure so the system could improve through use.",
    ],
    ownership:
      "Workflow architecture, skill and tool interfaces, evaluation approaches, and engineering constraints.",
  },
  {
    title: "Ace IO MCP",
    label: "Governed data access + MCP delivery",
    tension:
      "AI clients need useful access to enterprise data without losing control of governance or the product experience.",
    proof: [
      "Designed a GraphQL intermediate layer that represents available data as a queryable schema.",
      "Integrated MCP tools with Apollo MCP, GraphQL, Elasticsearch, and a companion app model.",
      "Owned the shipment path from schema and tool design to a governed, branded client experience.",
    ],
    ownership:
      "Schema and tool design, GraphQL layer, MCP app experience, data governance, and delivery path.",
  },
];

export const engineeringLoop = [
  {
    verb: "Explore",
    description:
      "Find the product tension, constraints, and evidence that define a useful problem.",
  },
  {
    verb: "Evaluate",
    description:
      "Turn model behavior into measurable quality before it becomes a product dependency.",
  },
  {
    verb: "Engineer",
    description:
      "Connect AI behavior to retrieval, APIs, platform systems, and a clear user experience.",
  },
  {
    verb: "Operate",
    description:
      "Ship with observability, delivery discipline, and room to learn from real use.",
  },
];

export const credibility = [
  "Indian Institute of Science research",
  "Google Summer of Code",
  "Linux Foundation Mentorship Program",
  "Goldman Sachs data engineering",
  "ICASSP research paper",
  "Granted Indian patent",
];
