/**
 * Static export: `npm run build` writes a plain HTML site to `out/`,
 * which any free static host can serve (GitHub Pages, Vercel, Netlify…).
 *
 * NEXT_PUBLIC_BASE_PATH is only needed when the site lives in a sub-folder,
 * e.g. "/portfolio" for https://allan77x77.github.io/portfolio/.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
