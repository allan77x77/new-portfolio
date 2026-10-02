import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Allan Rakotomamonjy's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technologies and methods I work with every day.",
    metadata: {
      title: "Skills",
      description:
        "Allan Rakotomamonjy's skills in AI, LLMs, machine learning, full-stack development, cloud and automation.",
    },
  },
  projects: {
    title: "Projects",
    description: "A selection of projects across AI, automation and the web.",
    metadata: {
      title: "Projects",
      description:
        "Allan Rakotomamonjy's projects in AI, automation, web development and machine learning.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "I'm open to new opportunities. Let's talk about a role or a project.",
    metadata: {
      title: "Contact",
      description: "Contact Allan Rakotomamonjy.",
    },
  },
  resume: {
    title: "Resume",
    description: "Allan Rakotomamonjy's resume.",
    metadata: {
      title: "Resume",
      description: "Allan Rakotomamonjy's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and education.",
    metadata: {
      title: "Experience",
      description:
        "Allan Rakotomamonjy's professional experience and education.",
    },
  },
};
