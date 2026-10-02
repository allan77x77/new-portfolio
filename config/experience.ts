import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location?: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements?: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "chemtech",
    position: "Full-Stack Developer / AI Specialist",
    company: "Chemtech Group",
    location: "Mauritius",
    startDate: new Date("2026-04-01"),
    endDate: "Present",
    description: [
      "Manage the integration of AI solutions and business automation systems.",
      "Design and develop custom software applications tailored to business needs.",
      "Optimise workflows by implementing AI-driven technologies and digital solutions.",
    ],
    skills: ["AI Models", "Business Automation", "Custom Software"],
  },
  {
    id: "nsc",
    position: "Full-Stack Developer / AI Specialist",
    company: "NSC",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-04-01"),
    description: [
      "Integration & automation role: integrated AI solutions into web applications via MCP and AI models.",
      "Supported the design and development of web applications with Angular, React and Express.",
    ],
    skills: ["MCP", "AI Models", "Angular", "React", "Express"],
  },
  {
    id: "bred",
    position: "Full-Stack Developer (Work-study)",
    company: "BRED Madagasikara BP",
    location: "Madagascar",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2025-03-01"),
    description: [
      "Drafted the specifications and produced the technical design of digital solutions for the banking sector (BRED, formerly BFV-SG).",
      "Developed these solutions with an Angular front end and a Spring Boot back end.",
    ],
    skills: ["Angular", "Spring Boot", "Java"],
  },
];

export interface EducationInterface {
  id: string;
  degree: string;
  school: string;
  startDate: Date;
  endDate: Date;
}

export const education: EducationInterface[] = [
  {
    id: "utm",
    degree: "MSc Artificial Intelligence with Machine Learning",
    school: "University of Technology, Mauritius",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2026-10-01"),
  },
  {
    id: "esti",
    degree: "Bachelor's Degree in Integration and Development",
    school: "École Supérieure de Technologie et de l'Information",
    startDate: new Date("2020-03-01"),
    endDate: new Date("2024-04-01"),
  },
];
