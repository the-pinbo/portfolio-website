import { LinkedArtifact } from "@/components/linked-artifact";
import { contact } from "@/content/portfolio";

export function ContactClose() {
  return (
    <section className="chapter contact-close" id="contact" aria-labelledby="contact-title">
      <p className="contact-close__eyebrow">{contact.eyebrow}</p>
      <h2 id="contact-title">{contact.heading}</h2>
      <div className="contact-close__links">
        <LinkedArtifact {...contact.primaryAction} variant="primary" />
        <div className="contact-close__secondary">
          {contact.links.map((link) => (
            <LinkedArtifact key={link.label} {...link} variant="secondary" />
          ))}
        </div>
      </div>
      <span id="page-end" aria-hidden="true" />
    </section>
  );
}
