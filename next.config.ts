import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/xia-aigc",
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
  },
};

export default nextConfig;
