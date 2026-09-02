export type Section = { id: string; label: string };

export const profile = {
  name: "Ayomikun Omotosho",
  firstName: "Ayomikun",
  title: "Full Stack Developer",
  location: "Lagos, Nigeria",
  tagline:
    "I design and engineer resilient web platforms — the kind that stay fast, legible and calm as they grow.",
  email: "omotoshoayomikun@gmail.com",
  github: "https://github.com/omotoshoayomikun/",
  linkedin: "https://www.linkedin.com/in/omotosho-ayomikun-61aa0623a/",
  resumeUrl: "/resume.pdf",
};

export const sections: Section[] = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "testimonials", label: "Testimonials" },
  // { id: "blog", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const favouriteTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "tRPC",
  "Terraform",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "3pcon Technology & Digital",
    role: "Full Stack Engineer",
    period: "05-2026 — Present",
    description:
      "Developed AI-enabled web applications for enterprise clients, delivering scalable full-stack solutions that accelerated digital transformation and streamlined business operations.",
    stack: ["TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "AWS"],
  },
  {
    company: "Map of Pi",
    role: "Full Stack Engineer",
    period: "01-2024 — 04-2026",
    description:
      "Contributed to the development of Map of Pi, a location-based platform connecting Pi Network users with merchants and businesses worldwide, delivering scalable features that enhanced business discovery and location-aware experiences.",
    stack: ["TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    company: "Simxchanger",
    role: "Frontend Engineer",
    period: "11-2022 — 12-2023",
    description:
      "Contributed to the development of SimXchanger, a digital asset exchange platform that enables users to securely buy, sell, and manage cryptocurrency through fast, reliable, and user-friendly transaction experiences.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    company: "Eclipsoft ICT company",
    role: "Web Developer",
    period: "01-2022 — 10-2022",
    description:
      "Delivered marketing sites and internal tools for studios and small teams, handling everything from discovery to deployment.",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
];

export type Project = {
  name: string;
  description: string;
  image?: string;
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  year?: string;
  madeAt?: string
};

export const projects: Project[] = [
  {
    name: "Anomaly-Based Detection",
    description:
      "A multi-level intrusion prevention and security monitoring system that detects anomalous and malicious activity, analyzes threats in real time, assigns risk scores, blocks suspicious requests, and maintains centralized security logs for administrators.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],
    github:
      "https://github.com/omotoshoayomikun/frontend-data-subscribtion",
    demo: "https://intrusion-prevention-log-management-omega.vercel.app",
    year: "2026",
    madeAt: "",
  },

  {
    name: "EdTech",
    description:
      "A modern educational technology platform designed to connect learners with digital learning resources through interactive experiences, structured content, and intelligent features that improve accessibility and engagement.",
    stack: ["Next.js", "TypeScript", "Node.js", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/omotoshoayomikun/surge",
    demo: "https://www.surge.com.ng",
    year: "2026",
    madeAt: "Surge",
  },

  {
    name: "Proptriz",
    description:
      "A Web3 and AI-powered real estate platform that simplifies property discovery by connecting buyers, renters, agents, and property owners through intelligent search, location-based discovery, and AI-assisted recommendations.",
    image: "/images/proptriz.png",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Leaflet",
      "AWS",
    ],
    github: "https://github.com/haycoder24/nigeria-property-hub",
    demo: "https://proptriz.com",
    featured: true,
    year: "2026",
    madeAt: "Proptriz REC",
  },

  {
    name: "Loan Management System",
    description:
      "A financial management platform for handling loan applications, borrower and guarantor verification, interest calculations, repayment schedules, disbursements, and loan lifecycle management.",
    image: "/images/proptriz.png",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
    ],
    github: "https://github.com/omotoshoayomikun/asavictory",
    demo: "https://asavictory.vercel.app",
    year: "2026",
    madeAt: "Asa-Victory",
  },

  {
    name: "Fed By Grace",
    description:
      "A modern pastry ordering platform that enables customers to browse products, place orders, and interact with the business through a fast, responsive, and mobile-first digital experience.",
    image: "/images/fedbygrace2.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/omotoshoayomikun/grace-pastries",
    demo: "https://fedbygraces.com",
    featured: true,
    year: "2025",
    madeAt: "Grace Pastries",
  },

  {
    name: "3pcon",
    description:
      "A collection of enterprise-focused web applications built to streamline business operations, automate workflows, and deliver scalable digital solutions through modern cloud-ready technologies.",
    image: "/images/3pcon.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/omotoshoayomikun/3pcon",
    demo: "https://3pcon.com",
    featured: true,
    year: "2025",
    madeAt: "3pcon ICT",
  },

  {
    name: "FinTech Apps",
    description:
      "A digital financial services platform designed to simplify everyday financial activities through accessible payment services, account management, and integrated financial tools.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/omotoshoayomikun/frontend-data-subscribtion",
    demo: "https://kitaodola.com",
    year: "2025",
    madeAt: "Kitaodola",
  },

  {
    name: "Career Social Network",
    description:
      "A professional networking platform that enables users to build career connections, discover opportunities, share professional experiences, and collaborate with other professionals.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/omotoshoayomikun/networking-web-app",
    demo: "https://networking-web-app-tau.vercel.app",
    year: "2025",
    madeAt: "",
  },

  {
    name: "Sentiment Analysis",
    description:
      "An NLP-powered application that analyzes text to identify sentiment and emotional tone, classifying content into positive, negative, or neutral categories to provide actionable insights from user-generated data.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "NLP",
    ],
    github: "https://github.com/omotoshoayomikun/sentiment-analysis",
    demo: "https://sentiment-analysis-lac-rho.vercel.app",
    year: "2025",
    madeAt: "",
  },

  {
    name: "Real-Time AI Verification",
    description:
      "An AI-powered browser extension designed to help users verify online information in real time by analyzing web content and providing contextual insights to support more informed decisions.",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Browser Extension APIs",
      "AI APIs",
    ],
    github: "https://github.com/FactReact/factreact_extension",
    year: "2024",
    madeAt: "FactReact",
  },

  {
    name: "Map of PI",
    description:
      "A Web3 platform built around the Pi Network ecosystem, providing users with tools and services for discovering, interacting with, and participating in the growing Pi digital economy.",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Pi Network SDK",
    ],
    github: "https://github.com/map-of-pi/map-of-pi-frontend",
    demo: "https://www.mapofpi.com",
    year: "2024",
    madeAt: "Map of PI",
  },

  {
    name: "Simxchanger",
    description:
      "A digital asset exchange platform that enables users to buy and sell cryptocurrencies and digital currencies through a fast, secure, and user-friendly trading experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/map-of-pi/map-of-pi-frontend",
    demo: "https://www.mapofpi.com",
    year: "2024",
    madeAt: "Simxchanger",
  },

  {
    name: "Linters & Static Analysis Tools",
    description:
      "Developer productivity tools that analyze source code to identify syntax errors, potential bugs, code quality issues, and common development mistakes across web technologies.",
    stack: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Static Analysis",
      "VS Code Extension API",
    ],
    github: "https://github.com/FactReact/factreact_extension",
    year: "2023",
    madeAt: "Baseline-Lite",
  },

  {
    name: "Marathon",
    description:
      "A hospitality management platform designed to support hotel and resort operations by providing digital tools for managing guests, bookings, services, and day-to-day hospitality workflows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/martins0023/marathon",
    demo: "https://marathon-tan.vercel.app",
    year: "2023",
    madeAt: "Marathon",
  },

  {
    name: "Movie Recommendation Engine",
    description:
      "A movie discovery platform that helps users find relevant films based on their preferences, genres, ratings, and existing movie selections through an intelligent recommendation experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "TMDB API",
      "Tailwind CSS",
    ],
    github: "https://github.com/omotoshoayomikun/ai-generated-video-project",
    demo: "https://movies-engine-pi.vercel.app/",
    year: "2023",
    madeAt: "",
  },

  {
    name: "Getlore",
    description:
      "An interactive e-learning platform that connects students and educators through digital learning resources, engaging content, and collaborative tools designed to support modern online education.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/omotoshoayomikun/ai-generated-video-project",
    demo: "https://e-learning-backup.vercel.app",
    year: "2023",
    madeAt: "",
  },
];
export const otherProjects = [
  {
    name: "Mummy Dara",
    description: "An AI-powered inventory management platform that helps small businesses track stock levels, manage orders, and optimize supply chain operations.",
    stack: ["TypeScript", "React"],
    github: "https://github.com/omotoshoayomikun/inventory",
    demo: "https://mummydara.vercel.app/",
  },
  // {
  //   name: "Pale Palette",
  //   description: "Accessible color scale generator that scores every pair against WCAG contrast.",
  //   stack: ["Vite", "OKLCH"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   name: "Cronwatch",
  //   description: "Heartbeat monitoring for scheduled jobs with quiet, useful alerting.",
  //   stack: ["Go", "Postgres"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   name: "Notestack",
  //   description: "Markdown knowledge base with instant local search and keyboard-first navigation.",
  //   stack: ["React", "WASM"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
];

export type SkillGroup = { category: string; items: { name: string; level: number }[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Accessibility", level: 86 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Go", level: 78 },
      { name: "GraphQL / tRPC", level: 85 },
      { name: "Event streaming", level: 74 },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", level: 84 },
      { name: "Expo", level: 80 },
      { name: "Offline sync", level: 76 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 82 },
      { name: "ClickHouse", level: 72 },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS", level: 85 },
      { name: "Cloudflare", level: 80 },
      { name: "Vercel", level: 88 },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 86 },
      { name: "Terraform", level: 79 },
      { name: "CI/CD", level: 88 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 94 },
      { name: "Figma", level: 78 },
      { name: "Playwright", level: 83 },
    ],
  },
];

export const achievements = [
  {
    title: "Generative Ai Mastermind",
    meta: "Outskill · 2026",
    description: "An intensive program on generative AI, mastering prompt engineering, model fine-tuning, and deployment of AI-powered applications.",
  },
  {
    title: "Youth Hackathon",
    meta: "UNESCO · 2025",
    description: "Awarded a certificate of participation for developing an innovative web application that addressed a pressing social issue, demonstrating technical skill and creative problem-solving.",
  },
  // {
  //   title: "Speaker — ReactBerlin",
  //   meta: "2023",
  //   description: "Talk on rendering strategies and the real cost of client-side state.",
  // },
  // {
  //   title: "Open Source Maintainer",
  //   meta: "9.2k combined stars",
  //   description: "Maintaining three libraries used in production by teams worldwide.",
  // },
];

export const testimonials = [
  {
    quote:
      "Ayomikun has the rare ability to simplify a system while making it more capable. Our platform velocity doubled after he restructured the front end.",
    name: "Odejinmi Mercy",
    role: "Founder, Surge Nigeria Academy",
  },
  {
    quote:
      "He treats accessibility and performance as product requirements, not chores. Reviews with him made the whole team better engineers.",
    name: "Adesegun Orafidiya",
    role: "CEO, 3pcon Technology & Digital",
  },
  {
    quote:
      "Calm, precise, and genuinely thoughtful about users. Ayomikun shipped our MVP two weeks early and it still runs untouched.",
    name: "Korode Grace",
    role: "Founder, Fed By Grace",
  },
];

export const posts = [
  {
    title: "The quiet cost of client state",
    excerpt: "Why most React performance problems are really data-ownership problems.",
    date: "May 2026",
    readTime: "8 min read",
    image: "/images/project-1.jpg",
  },
  {
    title: "Designing for the slow network",
    excerpt: "A practical checklist for making products usable at 200kbps.",
    date: "Mar 2026",
    readTime: "6 min read",
    image: "/images/project-3.jpg",
  },
  {
    title: "Local-first, honestly",
    excerpt: "What we learned shipping a sync engine to 120 clinics.",
    date: "Jan 2026",
    readTime: "11 min read",
    image: "/images/project-2.jpg",
  },
];
