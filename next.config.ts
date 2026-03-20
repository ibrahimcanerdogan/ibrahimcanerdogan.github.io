import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Avoid inferring a parent folder as root when another lockfile exists higher in the tree.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
