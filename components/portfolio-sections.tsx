import { FractalPrecisionPlate } from "@/components/fractal-precision-plate";
import { LinkedArtifact } from "@/components/linked-artifact";
import { ProjectDiagram } from "@/components/project-diagram";
import { ResearchPosterTile } from "@/components/research-poster-tile";
import { SpecimenPlate } from "@/components/specimen-plate";
import { SectionLink } from "@/components/section-link";

import { VoiceInventoryVisual } from "@/components/voice-inventory-visual";
import { projectPath } from "@/content/links";
import { projectAnchors, projects, researchStories, sections, site, trackRecord } from "@/content/portfolio";

type SectionProps = { homepage?: boolean };

export function WorkSection({ homepage }: SectionProps) {
  const section = sections.work;
  const Heading = homepage ? "h3" : "h2";
  return (
    <section className="story-group wrap" id={section.anchor} aria-label="Selected work">
      <div className="work-list">
        {projects.map((project, index) => (
          <article
            className={`chapter work-preview work-preview--${project.slug}`}
            key={project.slug}
            id={projectAnchors[project.slug]}
          >
            <div className="work-preview__copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <Heading>{project.headline}</Heading>
              <p>{project.summary}</p>
              <div className="artifact-links">
                <LinkedArtifact label={site.workCaseLabel} href={projectPath(project.slug)} context={project.title} />
                {project.artifacts.map((artifact) => <LinkedArtifact key={artifact.label} {...artifact} />)}
                {homepage && index === 0 && <SectionLink section={section} />}
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

export function ResearchSection({ homepage }: SectionProps) {
  const section = sections.research;
  const Heading = homepage ? "h3" : "h2";
  return (
    <section className="story-group wrap" id={section.anchor} aria-label="Research and publications">
      {researchStories.map((story, index) => (
        <article className="chapter research-row" id={story.id} key={story.id}>
          <div>
            <p className="eyebrow">{story.eyebrow}</p>
            <Heading>{story.heading}</Heading>
            <p>{story.summary}</p>
            <div className="artifact-links">
              {story.references.map((reference) => <LinkedArtifact key={reference.label} {...reference} />)}
              {homepage && index === 0 && <SectionLink section={section} />}
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

export function ExperienceSection({ homepage }: SectionProps) {
  const section = sections.experience;
  const Heading = homepage ? "h3" : "h2";
  return (
    <section className="section chapter wrap" id={section.anchor}>
      {homepage && (
        <div className="section-heading">
          <h2>{section.label}</h2>
          <SectionLink section={section} />
        </div>
      )}
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
              {(index === 0 || trackRecord[index - 1].institution !== entry.institution) && <Heading>{entry.institution}</Heading>}
              <div className="experience-list__role-row"><p className="role">{entry.role}</p><time>{entry.dateRange}</time></div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
