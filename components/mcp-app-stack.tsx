import { visualLabels } from "@/content/portfolio";

export function McpAppStack() {
  const ace = visualLabels.ace;
  return (
    <figure className="mcp-app-stack" aria-label={ace.accessibleName}>
      <div className="mcp-app-stack__experience">
        <span>{ace.experienceLabel}</span>
        {ace.experience.map((item) => <strong key={item}>{item}</strong>)}
      </div>
      <div className="mcp-app-stack__contract">{ace.contract}</div>
      <div className="mcp-app-stack__capability">
        <span>{ace.capabilityLabel}</span>
        {ace.capability.map((item) => <strong key={item}>{item}</strong>)}
      </div>
    </figure>
  );
}
