import { LinkedArtifact } from "@/components/linked-artifact";
import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";
import { researchStories, standaloneChapters, visualLabels } from "@/content/portfolio";

export function FractalPrecisionPlate({ showLinks = true }: { showLinks?: boolean }) {
  return (
    <figure className="fractal-precision-plate">
      <div className="fractal-precision-plate__panels">
        {visualLabels.fractals.map((panel) => (
          <div key={panel.label}>
            <DeliveryImage asset={assets[panel.asset]} />
            <span>{panel.label}</span>
            {"metric" in panel ? <small>{panel.metric.split(" · ").map((metric) => <span className="fractal-precision-plate__metric" key={metric}>{metric}</span>)}</small> : null}
          </div>
        ))}
      </div>
      <figcaption>
        <span>{standaloneChapters.openSource.figureLabel}</span>
        {showLinks && researchStories.find((story) => story.id === "open-source")?.references.map((reference) => (
          <LinkedArtifact key={reference.label} {...reference} />
        ))}
      </figcaption>
    </figure>
  );
}
