import { LinkedArtifact } from "@/components/linked-artifact";
import { links } from "@/content/links";
import { visualLabels } from "@/content/portfolio";

export function VoiceLedgerField() {
  return (
    <figure className="voice-ledger-field">
      <div className="voice-ledger-field__slip">
        {visualLabels.ledger.fields.map((field) => <span key={field}>{field}</span>)}
      </div>
      <div className="voice-ledger-field__ledger">
        <span>{visualLabels.ledger.resolvedField}</span>
        <strong>{visualLabels.ledger.resolvedValue}</strong>
      </div>
      <figcaption>
        <LinkedArtifact label="Patent" href={links.patentCertificate} context="Official Patent Office certificate" />
        <LinkedArtifact label="Determinant Studios" href={links.determinantStudios} context="Determinant Studios" />
      </figcaption>
    </figure>
  );
}
