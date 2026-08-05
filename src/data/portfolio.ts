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
  image: string;
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Fed By Grace",
    description:
      "A modern pastries ordering platform that streamlines online ordering, menu management, and customer engagement through a fast, responsive, and mobile-first digital experience.",
    image: "/images/fedbygrace2.png",
    stack: ["Next.js", "Node.js","Redux", "Tailwind"],
    github: "https://github.com/omotoshoayomikun/grace-pastries",
    demo: "https://www.fedbygraces.com",
    featured: true,
  },
  {
    name: "3pcon",
    description:
      "A suite of AI-powered enterprise web applications that accelerate digital transformation through workflow automation, intelligent business processes, and scalable cloud-based solutions.",
    image: "/images/3pcon.png",
    stack: ["Next.js", "Node.js","Redux", "Tailwind"],
    github: "https://github.com/omotoshoayomikun/3pcon",
    demo: "https://3pcon.com/",
    featured: true,
  },
  {
    name: "Proptriz",
    description:
      "A digital Web3 Ai powered real estate platform connecting buyers, renters, agents, and property owners through intelligent property discovery and seamless property management.",
    image: "/images/proptriz.png",
    stack: ["React.js", "Next.js", "TypeScript", "Redux", "Leaflet", "AWS"],
    github: "https://github.com/haycoder24/nigeria-property-hub",
    demo: "https://proptriz.com/",
    featured: true,
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