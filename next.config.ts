import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: set these if deploying to a subpath like username.github.io/repo-name
  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name",
};

export default nextConfig;
