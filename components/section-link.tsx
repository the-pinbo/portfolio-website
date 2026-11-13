import { LinkedArtifact } from "@/components/linked-artifact";
import type { Section } from "@/content/portfolio";

export function SectionLink({ section }: { section: Section }) {
  return <LinkedArtifact label={`View ${section.label.toLowerCase()} page`} href={section.route} />;
}
