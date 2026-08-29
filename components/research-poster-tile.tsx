import { LinkedArtifact } from "@/components/linked-artifact";
import { links } from "@/content/links";

export function ResearchPosterTile() {
  return (
    <figure className="research-poster-tile">
      <img
        alt="Upper section of the ICASSP 2025 poster showing the paper title and sparse-recovery research figure"
        className="research-poster-tile__image"
        src="/assets/icassp-poster.png"
      />
      <figcaption>
        <span>ICASSP 2025 poster</span>
        <LinkedArtifact label="Paper" href={links.icasspPaper} context="ICASSP paper" />
        <LinkedArtifact label="Poster" href={links.icasspPoster} context="Complete ICASSP poster PDF" />
        <LinkedArtifact label="Certificate" href={links.iiscCertificate} context="IISc internship verification" />
      </figcaption>
    </figure>
  );
}
