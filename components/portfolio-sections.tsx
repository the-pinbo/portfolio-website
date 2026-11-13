import { FractalPrecisionPlate } from "@/components/fractal-precision-plate";
import { LinkedArtifact } from "@/components/linked-artifact";
import { ProjectDiagram } from "@/components/project-diagram";
import { ResearchPosterTile } from "@/components/research-poster-tile";
import { SpecimenPlate } from "@/components/specimen-plate";
import { VoiceInventoryVisual } from "@/components/voice-inventory-visual";
import { projectPath } from "@/content/links";
import { projectAnchors, projects, researchStories, sections, site, trackRecord } from "@/content/portfolio";

export function WorkSection() {
  const section = sections.work;
  return (
    <section className="story-group wrap" id={section.anchor} aria-label="Selected work">
      <div className="work-list">
        {projects.map((project) => (
          <article
            className={`chapter work-preview work-preview--${project.slug}`}
            key={project.slug}
            id={projectAnchors[project.slug]}
          >
            <div className="work-preview__copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.headline}</h3>
              <p>{project.summary}</p>
              <div className="artifact-links">
                <LinkedArtifact label={site.workCaseLabel} href={projectPath(project.slug)} context={project.title} />
                {project.artifacts.map((artifact) => <LinkedArtifact key={artifact.label} {...artifact} />)}
              </div>
            </div>
            <div className="work-preview__visual">
              {project.slug === "visionguard" ? (
                <SpecimenPlate />
              ) : (
                <ProjectDiagram slug={project.slug} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResearchSection() {
  const section = sections.research;
  return (
    <section className="story-group wrap" id={section.anchor} aria-label="Research and publications">
      {researchStories.map((story) => (
        <article className="chapter research-row" id={story.id} key={story.id}>
          <div>
            <p className="eyebrow">{story.eyebrow}</p>
            <h3>{story.heading}</h3>
            <p>{story.summary}</p>
            <div className="artifact-links">
              {story.references.map((reference) => <LinkedArtifact key={reference.label} {...reference} />)}
            </div>
          </div>
          <div className="research-row__visual">
            {{
              poster: <ResearchPosterTile showLinks={false} />,
              fractals: <FractalPrecisionPlate showLinks={false} />,
              inventory: <VoiceInventoryVisual />,
            }[story.visual]}
          </div>
        </article>
      ))}
    </section>
  );
}

export function ExperienceSection() {
  const section = sections.experience;
  return (
    <section className="section chapter wrap" id={section.anchor}>
      <div className="section-heading">
        <h2>{section.label}</h2>
      </div>
      <ol className="experience-list" id="track-record">
        {trackRecord.map((entry, index) => (
          <li
            key={`${entry.institution}-${entry.dateRange}`}
            className={[
              index > 0 && trackRecord[index - 1].institution === entry.institution ? "experience-list__continuation" : "",
              trackRecord[index + 1]?.institution === entry.institution ? "experience-list__has-continuation" : "",
            ].filter(Boolean).join(" ") || undefined}
            aria-label={`${entry.institution}: ${entry.role}`}
          >
            <div className="experience-list__content">
              {(index === 0 || trackRecord[index - 1].institution !== entry.institution) && <h3>{entry.institution}</h3>}
              <div className="experience-list__role-row"><p className="role">{entry.role}</p><time>{entry.dateRange}</time></div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
