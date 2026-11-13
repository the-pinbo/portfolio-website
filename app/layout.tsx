import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { searchAssets } from "@/content/assets";
import { siteOrigin } from "@/content/links";
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
  metadataBase: new URL(siteOrigin),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: searchAssets.favicon.path, type: "image/png", sizes: `${searchAssets.favicon.size}x${searchAssets.favicon.size}` },
    ],
    apple: [{ url: searchAssets.appleTouchIcon.path, type: "image/png", sizes: `${searchAssets.appleTouchIcon.size}x${searchAssets.appleTouchIcon.size}` }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
