import { LinkedArtifact } from "@/components/linked-artifact";
import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";
import { links } from "@/content/links";
import { standaloneChapters, visualLabels } from "@/content/portfolio";

export function FractalPrecisionPlate() {
  return (
    <figure className="fractal-precision-plate">
      <div className="fractal-precision-plate__panels">
        {visualLabels.fractals.map((panel) => (
          <div key={panel.label}>
            <DeliveryImage asset={assets[panel.asset]} />
            <span>{panel.label}</span>
            {"metric" in panel ? <small>{panel.metric}</small> : null}
          </div>
        ))}
      </div>
      <figcaption>
        <span>{standaloneChapters.openSource.figureLabel}</span>
        <LinkedArtifact label="Code" href={links.softpositCode} context="SoftPosit contribution history" />
        <LinkedArtifact label="Certificate" href={links.linuxFoundationBadge} context="Linux Foundation mentorship badge" />
        <LinkedArtifact label="Paper" href={links.congaPaper} context="CoNGA proceedings" />
      </figcaption>
    </figure>
  );
}
