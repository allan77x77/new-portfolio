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
    id: "mark-ai",
    companyName: "MARK AI",
    type: "Professional",
    category: ["AI", "Full Stack", "Automation"],
    shortDescription:
      "An AI marketing platform that researches a brand's market, writes the content, plans it on a calendar and publishes it to LinkedIn, Instagram and Facebook.",
    techStack: [
      "Next.js",
      "Typescript",
      "AI Models",
      "n8n",
      "Microsoft Entra ID",
      "LinkedIn API",
      "Meta API",
    ],
    companyLogoImg: withBase("/projects/markai-dashboard.png"),
    pagesInfoArr: [
      {
        title: "1. Market research",
        description:
          "The platform studies a brand: market gaps, audience personas, competitors and social presence, and turns them into a prioritised report.",
        imgArr: [],
      },
      {
        title: "2. Content generation",
        description:
          "From that research it drafts posts for each channel: caption, hashtags, headline, call to action and the image to go with them.",
        imgArr: [],
      },
      {
        title: "3. Editorial calendar",
        description:
          "Each piece of content gets a slot. Nothing is published until it has been reviewed and approved.",
        imgArr: [],
      },
      {
        title: "4. Automated publishing",
        description:
          "A publishing workflow routes each approved item to the right channel and records whether it went out or failed.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MARK AI is a marketing platform that covers the whole chain, from understanding a brand's market to publishing on its social channels. Rather than producing posts in isolation, it starts from research: it identifies market gaps, builds audience personas, analyses competitors and ranks the opportunities by priority.",
        "That research then feeds content generation and an editorial calendar. Once an item is approved, an automated workflow publishes it to LinkedIn, Instagram or Facebook and writes back the result, so the team always knows what actually went out.",
        "Access is tied to the company directory, so only internal users can sign in.",
      ],
      bullets: [
        "Generates market research reports: gaps, personas, competitors, priorities.",
        "Drafts the content for each channel, image included.",
        "Plans posts on an editorial calendar, with review before publishing.",
        "Publishes automatically to LinkedIn, Instagram and Facebook, and records the outcome.",
        "Sign-in handled by the company identity provider.",
      ],
    },
  },
  {
    id: "cashy-pos",
    companyName: "Cashy — Grocery POS",
    type: "Professional",
    category: ["Point of Sale", "Full Stack"],
    shortDescription:
      "A till for organic grocery stores: scanning, weighing, promotions and cash sessions. It keeps serving customers when the internet drops and pushes every receipt back to the ERP.",
    techStack: ["Business Central", "REST API", "Desktop App", "Typescript"],
    companyLogoImg: withBase("/projects/cashy-app.png"),
    pagesInfoArr: [
      {
        title: "Sale in progress",
        description:
          "Weighed produce, VAT per line and the running total. The cashier screen is mirrored on a second display facing the customer.",
        imgArr: [withBase("/projects/cashy-sale.png")],
      },
      {
        title: "Payment",
        description:
          "Cash, card and QR payment, with change calculated automatically and the receipt sent to the fiscal journal.",
        imgArr: [withBase("/projects/cashy-payment.png")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Cashy is the checkout front office for a network of organic grocery stores. The ERP (Microsoft Dynamics 365 Business Central) owns the master data — items, prices, stock, promotions, loyalty — while the till owns the in-store experience: ringing items up, taking payment and closing the day.",
        "Power and internet cuts are common locally, so the till is built to keep selling offline and to catch up on its own once the connection returns. Each receipt, stock movement and cash session is queued and pushed back to the ERP.",
        "Every lane runs on a dual screen: the cashier's side and a customer-facing display that follows the basket live.",
      ],
      bullets: [
        "Barcode scanning, search by name, and connected scale for produce sold by weight.",
        "Cash, card, QR and split payment, with automatic change.",
        "Promotions and loyalty rules pushed down from the ERP and applied at the till.",
        "Cash operations: opening, takings, closing and Z report.",
        "Offline mode with automatic catch-up once the connection is back.",
        "Customer-facing second display, synchronised with the basket.",
      ],
    },
  },
  {
    id: "pharmacy-pos",
    companyName: "Pharmacy POS",
    type: "Professional",
    category: ["Point of Sale", "Full Stack"],
    shortDescription:
      "A till built for pharmacy retail: prescriptions, batch and expiry tracking, split VAT between exempt medicines and standard-rate items, returns and quotations.",
    techStack: [
      "Business Central",
      "REST API",
      "Microsoft Entra ID",
      "Desktop App",
      "Typescript",
    ],
    companyLogoImg: withBase("/projects/pharmacy-sale.png"),
    pagesInfoArr: [
      {
        title: "Payment",
        description:
          "Out-of-pocket amount, split payment across several tenders, and the commission cost of each payment method.",
        imgArr: [withBase("/projects/pharmacy-payment.png")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A pharmacy does not sell like a grocery store: the same basket mixes prescription medicines, over-the-counter products and ordinary retail items, each with its own tax treatment. This till was designed around those rules.",
        "Stock is tracked by batch and expiry date, with the oldest batch dispensed first. Prescriptions are entered line by line, with the dispensed quantity, before being sent to the basket. Returns and quotations are handled from the same screen.",
        "Patient data stays minimal and is masked on screen, and the till can keep working offline, queueing its receipts for the fiscal journal.",
      ],
      bullets: [
        "Prescription entry with dose, duration and dispensed quantity.",
        "Batch and expiry tracking, oldest batch dispensed first.",
        "VAT split between exempt medicines, zero-rated goods and standard-rate items.",
        "Returns, quotations and invoices from the same screen.",
        "Split payment across several tenders, with the cost of each method shown.",
        "Staff sign-in by PIN or through the company identity provider.",
        "Patient identifiers masked on screen.",
      ],
    },
  },
  {
    id: "email-triage-agent",
    companyName: "Email Triage Agent",
    type: "Professional",
    category: ["AI", "Automation"],
    shortDescription:
      "An agent that watches a shared mailbox, classifies every incoming email by type, customer and urgency, tags it in Outlook and archives whatever nobody needs to act on.",
    techStack: ["n8n", "Microsoft Graph", "AI Models", "SQL"],
    companyLogoImg: withBase("/projects/email-triage.svg"),
    pagesInfoArr: [
      {
        title: "1. Reading the mailbox",
        description:
          "Every few minutes the agent picks up the emails that have not been triaged yet, in small batches, and cleans up the HTML to keep only the text.",
        imgArr: [],
      },
      {
        title: "2. Thread context",
        description:
          "It pulls the last messages of the same conversation, so a reply is judged in the context of the thread rather than on its own.",
        imgArr: [],
      },
      {
        title: "3. Classification",
        description:
          "A language model decides what kind of email it is and how urgent it is. The customer, on the other hand, is resolved against the reference data, not guessed.",
        imgArr: [],
      },
      {
        title: "4. Tagging and archiving",
        description:
          "The three tags are written back as Outlook categories. Noise — automated reports, out-of-office replies, bounces — is moved to the archive.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A shared mailbox receives everything at once: requests that need invoicing, questions, disputes, approvals, and a steady stream of automated noise. Sorting it by hand costs time and things slip through.",
        "This agent triages the mailbox on its own. Every email receives exactly three tags — what kind of email it is, which customer it belongs to and how soon it needs an answer — attached as Outlook categories so they are visible to everyone directly in Outlook.",
        "The split of responsibilities matters: the language model judges the content and the urgency, but the customer is resolved deterministically against the reference data, with a correction table layered on top. Downstream systems and people read that tag and trust it.",
      ],
      bullets: [
        "Runs continuously on a shared mailbox, in bounded batches.",
        "Classifies each email by type, customer and urgency.",
        "Uses the thread history so replies are read in context.",
        "Resolves the customer against the reference data rather than letting the model guess, with an admin correction table.",
        "Writes the tags back as Outlook categories, visible to the whole team.",
        "Archives automated noise so the inbox only holds what needs action.",
      ],
    },
  },
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
