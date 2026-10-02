import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  /** Optional 1–5 self-rating. Stars are only shown when it is set. */
  rating?: number;
  icon: any;
}

/* The first six skills are shown on the home page. */
export const skills: skillsInterface[] = [
  {
    name: "LLMs & RAG",
    description:
      "Applications built on large language models, grounded in business data with retrieval-augmented generation.",
    icon: Icons.llm,
  },
  {
    name: "NLP",
    description:
      "Natural language processing: understanding, classifying and generating text.",
    icon: Icons.nlp,
  },
  {
    name: "Machine Learning",
    description:
      "Supervised, unsupervised and reinforcement learning, studied in my MSc at UTM.",
    icon: Icons.ai,
  },
  {
    name: "MCP & AI models",
    description:
      "Integrating AI models into web applications through the Model Context Protocol.",
    icon: Icons.mcp,
  },
  {
    name: "Microsoft Azure",
    description: "Cloud services to host and run applications and AI workloads.",
    icon: Icons.azure,
  },
  {
    name: "Docker",
    description:
      "Containerised applications for consistent development and deployment.",
    icon: Icons.docker,
  },
  {
    name: "Business Central",
    description:
      "Microsoft Dynamics 365 Business Central, the ERP for finance, sales and operations.",
    icon: Icons.businesscentral,
  },
  {
    name: "Python",
    description:
      "Programming and data manipulation, with scikit-learn, Pandas and Gradio.",
    icon: Icons.python,
  },
  {
    name: "Java",
    description:
      "Java EE and Spring Boot back ends, used for banking applications.",
    icon: Icons.java,
  },
  {
    name: "Angular & AngularJS",
    description:
      "Front ends for banking solutions and web applications, from specs to delivery.",
    icon: Icons.angular,
  },
  {
    name: "n8n",
    description:
      "Business automation workflows, combined with ElevenLabs and Twilio for voice agents.",
    icon: Icons.n8n,
  },
  {
    name: "React",
    description:
      "Interactive interfaces, such as the Vibee's virtual expo.",
    icon: Icons.react,
  },
  {
    name: "Spring Boot",
    description: "REST back ends for Angular front ends in the banking sector.",
    icon: Icons.springboot,
  },
  {
    name: "Node.js & Express",
    description: "Web application back ends and APIs.",
    icon: Icons.express,
  },
  {
    name: "Next.js",
    description:
      "Back end of the E-Calendar app: events, authentication and Google Calendar sync.",
    icon: Icons.nextjs,
  },
  {
    name: "Symfony",
    description: "Feature development with Symfony 3 and Twig on TicketPlace.",
    icon: Icons.symfony,
  },
  {
    name: "ElevenLabs",
    description: "Natural-sounding conversational voices for AI agents.",
    icon: Icons.elevenlabs,
  },
  {
    name: "Twilio",
    description: "Telephony for automated call handling.",
    icon: Icons.twilio,
  },
  {
    name: "SQL & PostgreSQL",
    description: "Relational data modelling and queries.",
    icon: Icons.postgresql,
  },
  {
    name: "MongoDB",
    description: "Document-oriented NoSQL databases.",
    icon: Icons.mongodb,
  },
  {
    name: "scikit-learn",
    description: "Classic machine learning models, such as linear regression.",
    icon: Icons.scikitlearn,
  },
  {
    name: "Odoo",
    description: "CRM and business management configuration.",
    icon: Icons.odoo,
  },
  {
    name: "WordPress",
    description: "Content management and websites.",
    icon: Icons.wordpress,
  },
  {
    name: "Git",
    description: "Version control and collaboration.",
    icon: Icons.git,
  },
];

export const featuredSkills = skills.slice(0, 6);
