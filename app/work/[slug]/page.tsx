import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDiagram } from "@/components/project-diagram";
import { SiteNavigation } from "@/components/site-navigation";
import { LinkedArtifact } from "@/components/linked-artifact";
import { SpecimenPlate } from "@/components/specimen-plate";
import { assets } from "@/content/assets";
import { projects, site } from "@/content/portfolio";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const title = `${project.title} | Inbasekaran Perumal`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${slug}/`,
      images: [assets.portrait.derivatives[2].webp],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [assets.portrait.derivatives[2].webp],
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[index + 1];
  return (
    <>
      <a className="skip-link" href="#main-content">
        {site.skipLabel}
      </a>
      <SiteNavigation current="Work" />
      <main id="main-content" className="case-page wrap" tabIndex={-1}>
        {/* Native navigation preserves the hash across a static-export route change. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="back-link action-link action-link--secondary" href="/#work">
          <span>{site.workBackLabel}</span><span aria-hidden="true">←</span>
        </a>
        <header className="case-header">
          <h1>{project.title}</h1>
          <p className="case-headline">{project.headline}</p>
        </header>
        <div className="case-visual">
          {slug === "visionguard" ? (
            <SpecimenPlate priority />
          ) : (
            <ProjectDiagram slug={slug} />
          )}
        </div>
        <div className="case-sections">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          {project.caseReferences && (
            <section>
              <h2>{project.caseReferences.heading}</h2>
              <div className="artifact-links">
                {project.caseReferences.links.map((reference) => (
                  <LinkedArtifact key={reference.label} {...reference} />
                ))}
              </div>
            </section>
          )}
          {project.artifacts.length > 0 && (
            <div className="artifact-links">
              {project.artifacts.map((artifact) => (
                <LinkedArtifact key={artifact.label} {...artifact} />
              ))}
            </div>
          )}
        </div>
        <nav className="next-project" aria-label={next ? "Next project" : "More work"}>
          <span>{next ? site.nextProjectLabel : site.moreWorkLabel}</span>
          <LinkedArtifact
            label={next ? next.title : site.workReturnLabel}
            href={next ? `/work/${next.slug}/` : "/#work"}
          />
        </nav>
      </main>
    </>
  );
}
