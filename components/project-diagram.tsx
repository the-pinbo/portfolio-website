import { projectDiagrams } from "@/content/portfolio";

export function ProjectDiagram({ slug }: { slug: string }) {
  if (slug === "natural-language-filtering") {
    const diagram = projectDiagrams[slug];
    return (
      <figure className="project-visual filter-visual" aria-label={diagram.label}>
        <p className="filter-visual__query">
          {diagram.query.before} <strong>{diagram.query.date}</strong>{" "}
          {diagram.query.between} <em>{diagram.query.tracker}</em>
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
    const diagram = projectDiagrams[slug];
    return (
      <figure className="project-visual workflow-visual" aria-label={diagram.label}>
        <div className="workflow-visual__context">
          <span>{diagram.source}</span>
          <p>{diagram.description}</p>
          <span className="workflow-visual__memory">{diagram.memory}</span>
        </div>
        <div className="workflow-visual__connection" aria-hidden="true">↓</div>
        <div className="workflow-visual__scope">
          <span>{diagram.repositoriesLabel}</span>
          <ul className="workflow-visual__repositories" aria-label={diagram.repositoriesLabel}>
            {diagram.repositories.map((repository) => <li key={repository}>{repository}</li>)}
          </ul>
        </div>
        <div className="workflow-visual__connection" aria-hidden="true">↓</div>
        <div className="workflow-visual__work">
          <span>{diagram.workflowLabel}</span>
          <ul className="workflow-visual__steps" aria-label={diagram.workflowLabel}>
            {diagram.steps.map((step) => (
              <li key={step.title}><span>{step.title}</span><strong>{step.detail}</strong></li>
            ))}
          </ul>
        </div>
        <div className="workflow-visual__debugging">
          <strong>{diagram.debugging.title}</strong>
          <p>{diagram.debugging.detail}</p>
          <span>{diagram.debugging.relationship}</span>
        </div>
      </figure>
    );
  }

  if (slug !== "ace-mcp") return null;
  const diagram = projectDiagrams[slug];
  return (
    <figure className="project-visual reporting-visual" aria-label={diagram.label}>
      <span className="reporting-visual__example">{diagram.exampleLabel}</span>
      <p className="reporting-visual__question">{diagram.source}</p>
      <div className="reporting-visual__connector" aria-hidden="true">↓</div>
      <div className="reporting-visual__gateway"><span>{diagram.gateway}</span><strong>{diagram.language}</strong></div>
      <div className="reporting-visual__tools">
        {diagram.steps.map((step, index) => (
          <div key={step.title}>
            <span>{step.title}</span><strong>{step.detail}</strong>
            {index === 0 ? (
              <div className="reporting-visual__document" aria-hidden="true"><i /><i /><i /></div>
            ) : (
              <div className="reporting-visual__bars" aria-hidden="true"><i /><i /><i /></div>
            )}
          </div>
        ))}
      </div>
      <div className="reporting-visual__connector" aria-hidden="true">↓</div>
      <div className="reporting-visual__report"><span>{diagram.resultsLabel}</span><strong>{diagram.results}</strong><i aria-hidden="true" /></div>
    </figure>
  );
}
