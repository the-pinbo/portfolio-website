import { LinkedArtifact } from "@/components/linked-artifact";
import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";
import { links } from "@/content/links";
import { standaloneChapters } from "@/content/portfolio";

export function ResearchPosterTile({ showLinks = true }: { showLinks?: boolean }) {
  return (
    <figure className="research-poster-tile">
      <div className="research-poster-tile__frame">
        <DeliveryImage asset={assets.researchPoster} className="research-poster-tile__image" />
      </div>
      <figcaption>
        <span>{standaloneChapters.research.figureLabel}</span>
        {showLinks && <>
        <LinkedArtifact label="Paper" href={links.icasspPaper} context="ICASSP paper" />
        <LinkedArtifact label="Poster" href={links.icasspPoster} context="Complete ICASSP poster PDF" />
        <LinkedArtifact label="Certificate" href={links.iiscCertificate} context="IISc internship verification" />
        <LinkedArtifact label="Lab" href={links.spectrumLab} context="IISc Spectrum Lab" />
        </>}
      </figcaption>
    </figure>
  );
}
