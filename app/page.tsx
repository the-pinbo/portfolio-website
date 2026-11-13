import { ExperienceSection, ResearchSection, WorkSection } from "@/components/portfolio-sections";
import { ContactClose } from "@/components/contact-close";
import { LinkedArtifact } from "@/components/linked-artifact";
import { OpeningSequence } from "@/components/opening-sequence";
import { PortraitTriptych } from "@/components/portrait-triptych";
import { SiteNavigation } from "@/components/site-navigation";
import { assets, homepageShareArt } from "@/content/assets";
import { pageMetadata } from "@/lib/page-metadata";
import { links, siteOrigin } from "@/content/links";
import { homepage, homepageSharing, seo, site } from "@/content/portfolio";
export const metadata = pageMetadata({
  path: "/",
  ...seo,
  sharing: homepageSharing,
  imageAlt: homepageShareArt.alt,
});

const homeUrl = `${siteOrigin}/`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${homeUrl}#website`,
      url: homeUrl,
      name: homepage.name,
      alternateName: site.mark,
    },
    {
      "@type": "ProfilePage",
      url: homeUrl,
      isPartOf: { "@id": `${homeUrl}#website` },
      mainEntity: {
        "@type": "Person",
        name: homepage.name,
        image: new URL(assets.portrait.derivatives[2].webp, siteOrigin).href,
        sameAs: [links.linkedin, links.github],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
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
        <WorkSection />
        <ResearchSection />
        <ExperienceSection />
        <ContactClose />
      </main>
    </>
  );
}
