import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Keep build fast; enable later if desired
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
