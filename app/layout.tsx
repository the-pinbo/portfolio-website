import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inbasekaran Perumal | AI/ML Systems Engineer",
  description:
    "Inbasekaran Perumal builds dependable AI-enabled systems from evaluation through integration and production delivery.",
  metadataBase: new URL("https://inba.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inbasekaran Perumal | AI/ML Systems Engineer",
    description:
      "Dependable AI-enabled systems, evaluated, integrated, and shipped.",
    images: ["/assets/inbase-editorial-portrait.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
