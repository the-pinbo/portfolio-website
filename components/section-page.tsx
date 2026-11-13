import type { ReactNode } from "react";
import { SiteNavigation } from "@/components/site-navigation";
import { homepage, site, type Section } from "@/content/portfolio";
import { pageMetadata } from "@/lib/page-metadata";

export function sectionMetadata(section: Section) {
  const title = "searchTitle" in section ? section.searchTitle : section.heading;
  return pageMetadata({
    path: section.route,
    title: `${title} | ${homepage.name}`,
    description: section.description,
    imageAlt: title,
  });
}

export function SectionPage({ section, children }: { section: Section; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">{site.skipLabel}</a>
      <SiteNavigation current={section.label} standalone />
      <main id="main-content" tabIndex={-1}>
        <header className="case-header section-page-header wrap">
          <h1>{section.heading}</h1>
          <p className="lead">{section.introduction}</p>
        </header>
        {children}
      </main>
    </>
  );
}
