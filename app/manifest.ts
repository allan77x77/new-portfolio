import type { MetadataRoute } from "next";

import { basePath } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Allan Rakotomamonjy | AI Developer & Full-Stack Developer",
    short_name: "Allan Rakotomamonjy",
    description:
      "Allan Rakotomamonjy - AI Developer and Full-Stack Developer based in Mauritius.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    categories: ["portfolio", "ai", "developer", "web development"],
    lang: "en",
    dir: "ltr",
    scope: `${basePath}/`,
  };
}
