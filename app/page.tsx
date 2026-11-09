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
import { homepage, projects, site, trackRecord } from "@/content/portfolio";
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
              <h1>{homepage.thesis}</h1>
              <p className="opening-cadence">Evaluated. Integrated. Shipped.</p>
            </div>
          </div>
          <div className="hero wrap" id="identity-frame">
            <div>
              <h2 className="hero-name">{homepage.name}</h2>
              <p className="lead">{homepage.introduction}</p>
              <p className="hero-role">Software Development Engineer II</p>
              <div className="hero-actions">
                <LinkedArtifact label="Explore my work" href="#work" />
                <LinkedArtifact label="Résumé" href={links.resume} />
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
                  <p className="eyebrow">{project.slug === "natural-language-filtering" ? "RingCentral · Smart filters" : project.title}</p>
                  <h3>{project.slug === "natural-language-filtering" ? homepage.filtersHeadline : project.headline}</h3>
                  <p>{project.summary}</p>
                  <div className="artifact-links">
                    <LinkedArtifact label="Read case study" href={`/work/${project.slug}/`} context={project.title} />
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
          <article className="chapter research-row">
            <div>
              <h3>Learning to recover signals</h3>
              <p>{homepage.research}</p>
              <div className="artifact-links">
                <LinkedArtifact label="Paper" href={links.icasspPaper} context="ICASSP paper" />
                <LinkedArtifact label="Poster" href={links.icasspPoster} context="Complete ICASSP poster PDF" />
                <LinkedArtifact label="Certificate" href={links.iiscCertificate} context="IISc internship verification" />
                <LinkedArtifact label="Lab" href={links.spectrumLab} context="IISc Spectrum Lab" />
              </div>
            </div>
            <div className="research-row__visual">
              <ResearchPosterTile showLinks={false} />
            </div>
          </article>
          <article className="chapter research-row" id="open-source">
            <div>
              <h3>Evaluating numerical formats</h3>
              <p>{homepage.openSource}</p>
              <div className="artifact-links">
                <LinkedArtifact label="Code" href={links.softpositCode} context="SoftPosit contribution history" />
                <LinkedArtifact label="Certificate" href={links.linuxFoundationBadge} context="Linux Foundation mentorship badge" />
                <LinkedArtifact label="Proceedings · forthcoming" href={links.congaPaper} context="CoNGA proceedings" />
              </div>
            </div>
            <div className="research-row__visual">
              <FractalPrecisionPlate showLinks={false} />
            </div>
          </article>
          <article className="chapter research-row" id="patent">
            <div>
              <h3>Voice-assisted inventory</h3>
              <p>{homepage.patent}</p>
              <div className="artifact-links"><LinkedArtifact label="Patent record" href={links.patentCertificate} /></div>
            </div>
            <div className="research-row__visual">
              <VoiceInventoryVisual />
            </div>
          </article>
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
