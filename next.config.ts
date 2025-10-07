import type { NextConfig } from "next";
import path from 'path';
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",  // ← COMMENTED OUT - This prevents middleware from working!
  trailingSlash: true,
  // basePath: isProd ? "/bootstrap/app-router/zeno-ts/preview" : undefined,
	// assetPrefix : isProd ? "/bootstrap/app-router/zeno-ts/preview" : undefined,
  basePath: isProd ? "" : undefined,
	assetPrefix : isProd ? "" : undefined,
  images: { unoptimized: true } ,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/assets/scss')],
    silenceDeprecations: ['legacy-js-api'],
    quietDeps: true, 
  },
  reactStrictMode: false, // Disable Strict Mode if necessary
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
