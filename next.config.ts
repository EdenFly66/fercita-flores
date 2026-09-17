import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fercita-flores",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;