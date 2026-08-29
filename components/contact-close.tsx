import { LinkedArtifact } from "@/components/linked-artifact";
import { contact } from "@/content/portfolio";

export function ContactClose() {
  return (
    <section className="contact-close" id="contact" aria-labelledby="contact-title">
      <p className="contact-close__eyebrow">Contact</p>
      <h2 id="contact-title">
        If you&apos;re building something difficult, I&apos;d like to hear about it.
      </h2>
      <div className="contact-close__links">
        {contact.links.map((link) => (
          <LinkedArtifact key={link.label} {...link} />
        ))}
      </div>
    </section>
  );
}
