export function VoiceInventoryVisual() {
  return (
    <figure
      className="voice-inventory-visual"
      aria-label={inventoryVisual.label}
    >
      <blockquote>“{inventoryVisual.instruction}”</blockquote>
      <dl>
        {inventoryVisual.fields.map((field) => (
          <div key={field.label}>
            <dt>{field.label}</dt>
            <dd>{field.value}</dd>
          </div>
        ))}
      </dl>
      <figcaption>{inventoryVisual.caption}</figcaption>
    </figure>
  );
}
import { inventoryVisual } from "@/content/portfolio";

