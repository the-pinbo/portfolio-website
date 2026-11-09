import { LinkedArtifact } from "@/components/linked-artifact";
import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";
import { researchStories, standaloneChapters } from "@/content/portfolio";

export function ResearchPosterTile({ showLinks = true }: { showLinks?: boolean }) {
  return (
    <figure className="research-poster-tile">
      <div className="research-poster-tile__frame">
        <DeliveryImage asset={assets.researchPoster} className="research-poster-tile__image" />
      </div>
      <figcaption>
        <span>{standaloneChapters.research.figureLabel}</span>
        {showLinks && researchStories.find((story) => story.id === "signal-recovery")?.references.map((reference) => (
          <LinkedArtifact key={reference.label} {...reference} />
        ))}
      </figcaption>
    </figure>
  );
}
