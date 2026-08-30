import type { ReactNode } from "react";
import { ContactClose } from "@/components/contact-close";
import { FractalPrecisionPlate } from "@/components/fractal-precision-plate";
import { McpAppStack } from "@/components/mcp-app-stack";
import { LinkedArtifact } from "@/components/linked-artifact";
import { PortraitTriptych } from "@/components/portrait-triptych";
import { QueryToFilterTransform } from "@/components/query-to-filter-transform";
import { ResearchPosterTile } from "@/components/research-poster-tile";
import { SiteNavigation } from "@/components/site-navigation";
import { SpecimenPlate } from "@/components/specimen-plate";
import { TypographicIndex } from "@/components/typographic-index";
import { VoiceLedgerField } from "@/components/voice-ledger-field";
import { hero, identity, projects, site, standaloneChapters } from "@/content/portfolio";

export default function Home() {
  const projectVisuals: Record<string, ReactNode> = {
    "smart-filters": <QueryToFilterTransform />,
    ace: <McpAppStack />,
    visionguard: <SpecimenPlate />,
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {site.skipLabel}
      </a>
      <main id="main-content">
        <section className="thesis-stage" id="top" aria-labelledby="thesis-title">
          <h1 id="thesis-title">
            {hero.thesis}
          </h1>
          <p className="cadence">{hero.resolution}</p>
        </section>

        <section
          className="identity-frame"
          id="identity-frame"
          aria-labelledby="identity-name"
        >
          <div className="identity-copy">
            <h2 id="identity-name">{identity.name}</h2>
            <p className="role">{identity.role}</p>
            <p className="supporting">{identity.supporting}</p>
          </div>
          <PortraitTriptych />
        </section>

        <SiteNavigation />

        <section className="work-section" id="work" aria-labelledby="work-title">
          <h2 id="work-title">{site.navigation[0].label}</h2>
          <div className="project-chapters">
            {projects.map((project) => (
              <article className="project-chapter" id={project.slug} key={project.slug}>
                <div className="project-chapter__copy">
                  <h3>{project.title}</h3>
                  <p className="project-chapter__headline">{project.headline}</p>
                  {project.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="project-chapter__artifacts">
                    {project.artifacts.map((artifact) => (
                      <LinkedArtifact
                        context={artifact.context}
                        href={artifact.href}
                        key={artifact.label}
                        label={artifact.label}
                      />
                    ))}
                  </div>
                </div>
                <div className="project-chapter__visual">{projectVisuals[project.slug]}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-title">
          <h2 id="research-title">{standaloneChapters.research.label}</h2>
          <div className="research-section__content">
            <div>
              <h3>{standaloneChapters.research.headline}</h3>
              <p>{standaloneChapters.research.body}</p>
            </div>
            <ResearchPosterTile />
          </div>
        </section>

        <section className="open-source-section" id="open-source" aria-labelledby="open-source-title">
          <h2 id="open-source-title">{standaloneChapters.openSource.label}</h2>
          <div className="open-source-section__content">
            <div>
              <h3>{standaloneChapters.openSource.headline}</h3>
              <p>{standaloneChapters.openSource.body}</p>
            </div>
            <FractalPrecisionPlate />
          </div>
        </section>

        <section className="patent-section" id="patent" aria-labelledby="patent-title">
          <h2 id="patent-title">{standaloneChapters.patent.label}</h2>
          <div className="patent-section__content">
            <div>
              <h3>{standaloneChapters.patent.headline}</h3>
              <p>{standaloneChapters.patent.body}</p>
            </div>
            <VoiceLedgerField />
          </div>
        </section>

        <TypographicIndex />

        <ContactClose />
      </main>
    </>
  );
}
