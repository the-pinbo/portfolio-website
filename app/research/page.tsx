import { ResearchSection } from "@/components/portfolio-sections";
import { SectionPage, sectionMetadata } from "@/components/section-page";
import { sections } from "@/content/portfolio";

const section = sections.research;

export const metadata = sectionMetadata(section);

export default function ResearchPage() {
  return <SectionPage section={section}><ResearchSection /></SectionPage>;
}
