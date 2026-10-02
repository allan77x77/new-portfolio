export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a file from /public with the base path (needed when the site lives in a sub-folder, e.g. GitHub Pages). */
export const withBase = (path: string) => `${basePath}${path}`;

const origin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://allan77x77.github.io";

export const siteConfig = {
  name: "Allan Rakotomamonjy - AI Developer & Full-Stack Developer",
  authorName: "Allan Rakotomamonjy",
  username: "allan77x77",
  role: "AI Developer & Full-Stack Developer",
  description:
    "Allan Rakotomamonjy - AI Developer and Full-Stack Developer based in Beau Bassin, Mauritius. MSc graduate in AI & Machine Learning, open to new opportunities. Web applications, AI integration (MCP, AI models) and business automation.",
  origin,
  url: `${origin}${basePath}`,
  email: "ranto.allan7@gmail.com",
  phone: { display: "+230 5702 2723", href: "tel:+23057022723" },
  location: "Beau Bassin, Mauritius",
  resume: withBase("/cv/Allan_Rakotomamonjy_CV.pdf"),
  links: {
    github: "https://github.com/allan77x77",
    linkedin: "https://www.linkedin.com/in/allan-rakotomamonjy-649653228/",
  },
  keywords: [
    "Allan Rakotomamonjy",
    "AI Developer",
    "Full Stack Developer",
    "AI Specialist",
    "Machine Learning",
    "LLM",
    "RAG",
    "NLP",
    "MCP",
    "Azure",
    "Docker",
    "Business Central",
    "Business Automation",
    "n8n",
    "Angular",
    "AngularJS",
    "React",
    "Spring Boot",
    "Mauritius",
    "Portfolio",
  ],
};
