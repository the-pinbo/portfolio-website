import { LinkedArtifact } from "@/components/linked-artifact";
import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";
import { links } from "@/content/links";
import { standaloneChapters } from "@/content/portfolio";

export function ResearchPosterTile() {
  return (
    <figure className="research-poster-tile">
      <DeliveryImage asset={assets.researchPoster} className="research-poster-tile__image" />
      <figcaption>
        <span>{standaloneChapters.research.figureLabel}</span>
        <LinkedArtifact label="Paper" href={links.icasspPaper} context="ICASSP paper" />
        <LinkedArtifact label="Poster" href={links.icasspPoster} context="Complete ICASSP poster PDF" />
        <LinkedArtifact label="Certificate" href={links.iiscCertificate} context="IISc internship verification" />
        <LinkedArtifact label="Lab" href={links.spectrumLab} context="IISc Spectrum Lab" />
      </figcaption>
    </figure>
  );
}
