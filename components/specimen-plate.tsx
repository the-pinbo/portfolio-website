import { DeliveryImage } from "@/components/delivery-image";
import { assets } from "@/content/assets";

export function SpecimenPlate() {
  return (
    <figure className="specimen-plate">
      <DeliveryImage asset={assets.visionguard} className="specimen-plate__image" />
    </figure>
  );
}
