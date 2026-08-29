import type { ReactNode } from "react";
import { ContactClose } from "@/components/contact-close";
import { FractalPrecisionPlate } from "@/components/fractal-precision-plate";
import { McpAppStack } from "@/components/mcp-app-stack";
import { PortraitTriptych } from "@/components/portrait-triptych";
import { QueryToFilterTransform } from "@/components/query-to-filter-transform";
import { ResearchPosterTile } from "@/components/research-poster-tile";
import { SiteNavigation } from "@/components/site-navigation";
import { SpecimenPlate } from "@/components/specimen-plate";
import { TypographicIndex } from "@/components/typographic-index";
import { VoiceLedgerField } from "@/components/voice-ledger-field";
import { hero, identity, projects } from "@/content/portfolio";

export default function Home() {
  const projectVisuals: Record<string, ReactNode> = {
    "smart-filters": <QueryToFilterTransform />,
    ace: <McpAppStack />,
    visionguard: <SpecimenPlate />,
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
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
          <h2 id="work-title">Work</h2>
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
                      <a
                        className="linked-artifact"
                        href={artifact.href}
                        key={artifact.label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span aria-hidden="true">↗</span>
                        <span>{artifact.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="project-chapter__visual">{projectVisuals[project.slug]}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-title">
          <h2 id="research-title">Research</h2>
          <div className="research-section__content">
            <div>
              <h3>Recovering images from incomplete measurements.</h3>
              <p>
                At IISc&apos;s Spectrum Lab, I worked on inverse problems in imaging: recovering images from incomplete or noisy measurements. Using deep-unfolded networks, which are learned versions of iterative optimisation, I studied how update matrices, thresholds, and initialization shape stability and reconstruction.
              </p>
            </div>
            <ResearchPosterTile />
          </div>
        </section>

        <section className="open-source-section" id="open-source" aria-labelledby="open-source-title">
          <h2 id="open-source-title">Open Source</h2>
          <div className="open-source-section__content">
            <div>
              <h3>When numerical formats change the picture.</h3>
              <p>
                In the Linux Foundation Mentorship, I extended SoftPosit C++ for RISC-V through mathematical functions, tests, packaging, and an emulated toolchain, so alternative arithmetic could be exercised in real workloads.
              </p>
            </div>
            <FractalPrecisionPlate />
          </div>
        </section>

        <section className="patent-section" id="patent" aria-labelledby="patent-title">
          <h2 id="patent-title">Patent</h2>
          <div className="patent-section__content">
            <div>
              <h3>Inventory should not require a keyboard.</h3>
              <p>
                At Determinant Studios, I worked on a voice-assisted inventory and ledger system that turns spoken updates into structured actions. I am a named inventor on the resulting Indian Patent No. 576831.
              </p>
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
