import { LinkedArtifact } from "@/components/linked-artifact";
import { links } from "@/content/links";

export function VoiceLedgerField() {
  return (
    <figure className="voice-ledger-field">
      <div className="voice-ledger-field__slip">
        <span>ITEM</span>
        <span>QUANTITY</span>
        <span>UPDATE</span>
      </div>
      <div className="voice-ledger-field__ledger">
        <span>ITEM</span>
        <strong>Resolved row</strong>
      </div>
      <figcaption>
        <LinkedArtifact label="Patent" href={links.patentCertificate} context="Official Patent Office certificate" />
        <LinkedArtifact label="Determinant Studios" href={links.determinantStudios} context="Determinant Studios" />
      </figcaption>
    </figure>
  );
}
