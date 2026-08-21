import { projects } from "@/content/portfolio";

export function ProjectStories() {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article
          className={`project-story project-story--${index + 1}`}
          key={project.title}
        >
          <header className="project-story__intro">
            <p className="project-story__label">{project.label}</p>
            <h3>{project.title}</h3>
            <p>{project.tension}</p>
          </header>
          <div className="project-story__evidence">
            <ol>
              {project.proof.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
            <div className="project-story__ownership">
              <span>What I owned</span>
              <p>{project.ownership}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
