import type { Metadata } from "next";
import { searchAssets } from "@/content/assets";
import { site } from "@/content/portfolio";

export function pageMetadata({
  path,
  title,
  description,
  imageAlt,
  sharing = { title, description },
}: {
  path: string;
  title: string;
  description: string;
  imageAlt: string;
  sharing?: { title: string; description: string };
}): Metadata {
  const image = {
    url: searchAssets.share.path(path),
    width: searchAssets.share.width,
    height: searchAssets.share.height,
    type: searchAssets.share.type,
    alt: imageAlt,
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.mark,
      url: path,
      ...sharing,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      ...sharing,
      images: [image],
    },
  };
}
