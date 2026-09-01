import type { NextConfig } from "next";

// GitHub Pages hosts this site under https://nndaaa.github.io/lune-sushi/.
// basePath is required so that asset URLs and <Link> hrefs include /lune-sushi.
// For local dev/preview on http://localhost:3000 set NEXT_PUBLIC_BASE_PATH="" via env or just live with /lune-sushi prefix.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/lune-sushi";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;