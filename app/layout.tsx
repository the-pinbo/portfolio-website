import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
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
  title: "Inbasekaran Perumal | Software Development Engineer II, RingCentral",
  description:
    "Inbasekaran Perumal turns meaningful business problems into reliable software and AI systems. Evaluated. Integrated. Shipped.",
  metadataBase: new URL("https://inba.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inbasekaran Perumal | Software Development Engineer II, RingCentral",
    description:
      "I turn meaningful business problems into reliable software and AI systems. Evaluated. Integrated. Shipped.",
    images: ["/assets/inbase-editorial-portrait.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
