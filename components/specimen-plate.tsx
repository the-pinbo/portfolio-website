import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";

export function SpecimenPlate({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="specimen-plate">
      <DeliveryImage
        asset={{
          ...assets.visionguard,
          loading: priority ? "eager" : "lazy",
          priority: priority ? "high" : "auto",
        }}
        className="specimen-plate__image"
      />
    </figure>
  );
}
