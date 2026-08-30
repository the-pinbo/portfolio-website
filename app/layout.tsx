import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { assets } from "@/content/assets";
import { seo } from "@/content/portfolio";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
  weight: "variable",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL("https://inba.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.openGraphDescription,
    images: [assets.portrait.derivatives[2].webp],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
