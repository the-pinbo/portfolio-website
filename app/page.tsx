import { ContactClose } from "@/components/contact-close";
import { FractalPrecisionPlate } from "@/components/fractal-precision-plate";
import { LinkedArtifact } from "@/components/linked-artifact";
import { ProjectDiagram } from "@/components/project-diagram";
import { SpecimenPlate } from "@/components/specimen-plate";
import { OpeningSequence } from "@/components/opening-sequence";
import { PortraitTriptych } from "@/components/portrait-triptych";
import { ResearchPosterTile } from "@/components/research-poster-tile";
import { SiteNavigation } from "@/components/site-navigation";
import { VoiceInventoryVisual } from "@/components/voice-inventory-visual";
import { links } from "@/content/links";
import { homepage, projects, researchStories, site, trackRecord } from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {site.skipLabel}
      </a>
      <SiteNavigation />
      <main id="main-content" tabIndex={-1}>
        <OpeningSequence>
          <div className="opening-statement wrap">
            <div>
              <h1>{homepage.thesis.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>)}</h1>
              <p className="opening-cadence">{homepage.cadence}</p>
            </div>
          </div>
          <div className="hero wrap" id="identity-frame">
            <div className="hero-copy">
              <h2 className="hero-name">{homepage.name}</h2>
              <p className="hero-role">{homepage.role}</p>
              <p className="lead">{homepage.introduction}</p>
              <div className="hero-actions">
                <LinkedArtifact label={homepage.workAction} href="#work" variant="primary" />
                <LinkedArtifact label={homepage.resumeAction} href={links.resume} variant="secondary" />
              </div>
            </div>
            <PortraitTriptych />
          </div>
        </OpeningSequence>
        <section className="story-group wrap" id="work" aria-label="Selected work">
          <div className="work-list">
            {projects.map((project) => (
              <article
                className={`chapter work-preview work-preview--${project.slug}`}
                key={project.slug}
                id={
                  (
                    {
                      "natural-language-filtering": "smart-filters",
                      "ai-native-engineering": "ai-native-engineering",
                      "ace-mcp": "ace",
                      visionguard: "visionguard",
                    } as Record<string, string>
                  )[project.slug]
                }
              >
                <div className="work-preview__copy">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.headline}</h3>
                  <p>{project.summary}</p>
                  <div className="artifact-links">
                    <LinkedArtifact label={site.workCaseLabel} href={`/work/${project.slug}/`} context={project.title} />
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
        <section className="story-group wrap" id="research" aria-label="Research and publications">
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
        <section className="section chapter wrap" id="experience">
          <div className="section-heading">
            <h2>Experience</h2>
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
        <ContactClose />
      </main>
    </>
  );
}
