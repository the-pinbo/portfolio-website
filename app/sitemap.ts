import type { MetadataRoute } from "next";
import { projectPath, siteOrigin } from "@/content/links";
import { projects } from "@/content/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...projects.map(({ slug }) => projectPath(slug)),
  ].map((path) => ({ url: new URL(path, siteOrigin).href }));
}
