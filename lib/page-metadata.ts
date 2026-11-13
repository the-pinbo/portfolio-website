import type { Metadata } from "next";
import { searchAssets } from "@/content/assets";
import { homepage } from "@/content/portfolio";

export function pageMetadata({
  path,
  title,
  description,
  cardTitle,
}: {
  path: string;
  title: string;
  description: string;
  cardTitle: string;
}): Metadata {
  const image = {
    url: searchAssets.share.path(path),
    width: searchAssets.share.width,
    height: searchAssets.share.height,
    type: searchAssets.share.type,
    alt: cardTitle,
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: homepage.name,
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
