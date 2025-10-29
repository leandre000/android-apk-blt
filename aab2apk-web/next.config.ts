import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  experimental: {
    turbo: undefined, // Disable Turbopack
  },
};

export default nextConfig;
