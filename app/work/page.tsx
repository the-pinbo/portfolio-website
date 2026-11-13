import { WorkSection } from "@/components/portfolio-sections";
import { SectionPage, sectionMetadata } from "@/components/section-page";
import { sections } from "@/content/portfolio";

const section = sections.work;

export const metadata = sectionMetadata(section);

export default function WorkPage() {
  return <SectionPage section={section}><WorkSection /></SectionPage>;
}
