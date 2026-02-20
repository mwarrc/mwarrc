import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mwarrc',
  assetPrefix: '/mwarrc/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
