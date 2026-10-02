import { ValidCategory, ValidExpType, ValidSkills } from "./constants";
import { withBase } from "./site";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate?: Date;
  endDate?: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "agent-ai-call",
    companyName: "Agent AI Call",
    type: "Personal",
    category: ["AI", "Automation"],
    shortDescription:
      "An AI receptionist that answers the phone and schedules appointments on its own, built with n8n, ElevenLabs and Twilio.",
    techStack: ["n8n", "ElevenLabs", "Twilio"],
    companyLogoImg: withBase("/projects/agent-ai-call.svg"),
    pagesInfoArr: [
      {
        title: "1. Incoming call (Twilio)",
        description: "A client calls the business phone number.",
        imgArr: [],
      },
      {
        title: "2. The agent answers (ElevenLabs)",
        description:
          "A natural-sounding voice agent holds the conversation and understands the request.",
        imgArr: [],
      },
      {
        title: "3. The workflow runs (n8n)",
        description:
          "An automated workflow processes the request and handles the scheduling logic.",
        imgArr: [],
      },
      {
        title: "4. Appointment booked",
        description:
          "The appointment is scheduled without anyone at the front desk.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Agent AI Call uses artificial intelligence as a receptionist. Instead of someone picking up the phone to book appointments, a voice agent handles the call and schedules the appointment automatically.",
        "The project brings together telephony (Twilio), a natural-sounding conversational voice (ElevenLabs) and an automated n8n workflow that holds the business logic.",
      ],
      bullets: [
        "Answers incoming phone calls with a conversational AI voice.",
        "Understands the caller's request and schedules the appointment.",
        "Orchestrates the whole process with an n8n workflow.",
      ],
    },
  },
  {
    id: "ticketplace-webinars",
    companyName: "Webinar Events (TicketPlace)",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "A new TicketPlace feature that lets users attend online events, with Zoom sessions and dedicated e-tickets.",
    websiteLink: "https://www.ticketplace.io/",
    techStack: ["Symfony", "Twig", "Zoom API"],
    companyLogoImg: withBase("/projects/ticketplace.webp"),
    pagesInfoArr: [
      {
        title: "Webinar event page",
        description:
          "Online events are listed and sold on TicketPlace like any other event.",
        imgArr: [withBase("/projects/ticketplace.webp")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TicketPlace is an online ticketing platform for events. I was responsible for designing and integrating a new feature using Symfony 3 and Twig: enabling users to attend online events through the TicketPlace platform.",
      ],
      bullets: [
        "Designed and integrated the online-event feature with Symfony 3 and Twig.",
        "Integrated the Zoom API to host the online sessions.",
        "Created dedicated e-tickets for efficient participant management.",
      ],
    },
  },
  {
    id: "vibees-virtual-expo",
    companyName: "Vibee's Virtual Expo",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "A virtual exhibition where exhibitors showcase their stands and visitors explore them without travelling.",
    websiteLink: "https://vibees-salon.netlify.app/",
    techStack: ["React"],
    companyLogoImg: withBase("/projects/vibees.webp"),
    pagesInfoArr: [
      {
        title: "Virtual exhibition hall",
        description:
          "An interactive hall where visitors move between the exhibitors' stands.",
        imgArr: [withBase("/projects/vibees.webp")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Vibee's virtual expo allows exhibitors to showcase their stands virtually, enabling users to explore them without travelling, through an interactive interface.",
        "I was responsible for integrating the interface with React.js, ensuring smooth navigation and an optimal user experience.",
      ],
      bullets: [
        "Integrated the interactive interface with React.js.",
        "Focused on smooth navigation and an optimal user experience.",
      ],
    },
  },
  {
    id: "e-calendar",
    companyName: "E-Calendar",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "A personalised calendar application for a school, integrating the Google Calendar API.",
    techStack: ["Angular", "Next.js", "Google Calendar API"],
    companyLogoImg: withBase("/projects/e-calendar.webp"),
    pagesInfoArr: [
      {
        title: "Statistics",
        description: "Weekly, monthly and yearly statistics of the courses.",
        imgArr: [withBase("/projects/e-calendar.webp")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project aims to develop a personalised calendar application for a school, integrating the Google Calendar API.",
        "The back end is built with Next.js, providing features such as event management, authentication and synchronisation with Google Calendar. The front end is developed with Angular, delivering an intuitive and modern user interface for teachers, students and administrators.",
      ],
      bullets: [
        "Event management.",
        "Authentication.",
        "Synchronisation with Google Calendar.",
        "Interfaces for teachers, students and administrators.",
      ],
    },
  },
  {
    id: "diabetes-age-predictor",
    companyName: "Diabetes Age Predictor",
    type: "Personal",
    category: ["Machine Learning"],
    shortDescription:
      "Supervised machine learning to analyse the relationship between age and diabetes progression.",
    techStack: ["Python", "scikit-learn", "Linear Regression"],
    companyLogoImg: withBase("/projects/diabetes.webp"),
    pagesInfoArr: [
      {
        title: "Regression results",
        description:
          "Linear regression lines plotted against disease progression.",
        imgArr: [withBase("/projects/diabetes.webp")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project explores the application of supervised machine learning to analyse the relationship between a physiological factor (age) and diabetes progression in patients.",
        "Using the scikit-learn “Diabetes” dataset, the project implements a simple linear regression model to predict disease progression as a function of age.",
      ],
      bullets: [
        "Supervised learning on the scikit-learn Diabetes dataset.",
        "Simple linear regression model predicting disease progression.",
      ],
    },
  },
  {
    id: "task-management",
    companyName: "Task Management",
    type: "Personal",
    category: ["Web Dev"],
    shortDescription:
      "A simple web application to create, view, update and delete tasks, built with Python, Pandas and Gradio.",
    techStack: ["Python", "Pandas", "Gradio"],
    companyLogoImg: withBase("/projects/task-management.webp"),
    pagesInfoArr: [
      {
        title: "Task list",
        description: "Create tasks and follow their status in a table.",
        imgArr: [withBase("/projects/task-management.webp")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project is a simple web application to manage tasks using Python, Pandas and Gradio. It allows users to create, view, update and delete tasks through a user-friendly interface.",
        "Each task is identified by a unique ID and includes a name and status. The data is managed efficiently with Pandas, while the interactive interface is powered by Gradio.",
      ],
      bullets: [
        "Create, view, update and delete tasks.",
        "Data handled with Pandas.",
        "Interactive interface powered by Gradio.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
