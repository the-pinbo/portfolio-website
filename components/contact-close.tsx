import { LinkedArtifact } from "@/components/linked-artifact";
import { SectionLink } from "@/components/section-link";
import { contact, sections } from "@/content/portfolio";

export function ContactClose({ homepage }: { homepage?: boolean }) {
  const section = sections.contact;
  return (
    <section className={homepage ? "chapter contact-close" : "contact-close"} id={section.anchor} aria-labelledby={homepage ? "contact-title" : undefined}>
      {homepage && (
        <>
          <p className="contact-close__eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title">{contact.heading}</h2>
        </>
      )}
      <div className="contact-close__links">
        <LinkedArtifact {...contact.primaryAction} variant="primary" />
        <div className="contact-close__secondary">
          {contact.links.map((link) => (
            <LinkedArtifact key={link.label} {...link} variant="secondary" />
          ))}
          {homepage && <SectionLink section={section} />}
        </div>
      </div>
      <span id="page-end" aria-hidden="true" />
    </section>
  );
}
