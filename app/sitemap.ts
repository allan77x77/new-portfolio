import { MetadataRoute } from "next";

import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const paths = [
    "/",
    "/projects/",
    "/experience/",
    "/skills/",
    "/contact/",
    ...Projects.map((project) => `/projects/${project.id}/`),
    ...experiences.map((experience) => `/experience/${experience.id}/`),
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
