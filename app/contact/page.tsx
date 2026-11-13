import { ContactClose } from "@/components/contact-close";
import { SectionPage, sectionMetadata } from "@/components/section-page";
import { sections } from "@/content/portfolio";

const section = sections.contact;

export const metadata = sectionMetadata(section);

export default function ContactPage() {
  return <SectionPage section={section}><ContactClose /></SectionPage>;
}
