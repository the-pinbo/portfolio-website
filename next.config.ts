import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  generateBuildId: async () => "static-export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
