import { ExperienceSection } from "@/components/portfolio-sections";
import { SectionPage, sectionMetadata } from "@/components/section-page";
import { sections } from "@/content/portfolio";

const section = sections.experience;

export const metadata = sectionMetadata(section);

export default function ExperiencePage() {
  return <SectionPage section={section}><ExperienceSection /></SectionPage>;
}
