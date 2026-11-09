import { projectDiagrams } from "@/content/portfolio";

export function ProjectDiagram({ slug }: { slug: string }) {
  const diagram = projectDiagrams[slug as keyof typeof projectDiagrams];
  if (!diagram) return null;

  if (slug === "natural-language-filtering") {
    return (
      <figure
        className="project-visual filter-visual"
        aria-label={diagram.label}
      >
        <p className="filter-visual__query">
          Calls from <strong>last week</strong> where the customer mentioned{" "}
          <em>cancellation.</em>
        </p>
        <div className="filter-visual__resolution">
          {diagram.steps.map((step) => (
            <div className={`filter-visual__mapping filter-visual__mapping--${step.title.toLowerCase()}`} key={step.detail}>
              <span className="filter-visual__extracted">{step.detail.toLowerCase()}</span>
              <i className="filter-visual__connector" aria-hidden="true" />
              <div className="filter-visual__output"><span>{step.title}</span><strong>{step.detail}</strong></div>
            </div>
          ))}
        </div>
      </figure>
    );
  }

  if (slug === "ai-native-engineering") {
    return (
      <figure
        className="project-visual workflow-visual"
        aria-label={diagram.label}
      >
        <div className="workflow-visual__context">
          <span>Shared context</span>
          <p>Decisions that carry across the work.</p>
        </div>
        <div className="workflow-visual__documents">
          {diagram.steps.map((step) => (
            <div className="workflow-visual__document" key={step.detail}>
              <span>{step.title}</span>
              <strong>{step.detail}</strong>
              <div className="workflow-visual__rules" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
          ))}
        </div>
      </figure>
    );
  }

  return (
    <figure
      className="project-visual reporting-visual"
      aria-label={diagram.label}
    >
      <span className="reporting-visual__example">Illustrative question</span>
      <p className="reporting-visual__question">Which calls mention cancellation?</p>
      <div className="reporting-visual__connector" aria-hidden="true">↓</div>
      <div className="reporting-visual__gateway"><span>AI client → ACE MCP · read-only</span><strong>Query language</strong></div>
      <div className="reporting-visual__tools">
        <div><span>Document search</span><strong>Find matching calls</strong><div className="reporting-visual__document" aria-hidden="true"><i /><i /><i /></div><p>Returns matching call records</p></div>
        <div><span>Aggregation</span><strong>Group by tracker</strong><div className="reporting-visual__bars" aria-hidden="true"><i /><i /><i /></div><p>Returns counts by tracker</p></div>
      </div>
      <div className="reporting-visual__connector" aria-hidden="true">↓</div>
      <div className="reporting-visual__report"><span>Results returned to AI client</span><strong>AI client synthesizes the report</strong><p>Matching calls + count by tracker</p><i aria-hidden="true" /></div>
    </figure>
  );
}
