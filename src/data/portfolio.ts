export type Section = { id: string; label: string };

export const profile = {
  name: "Ayomikun Omotosho",
  firstName: "Ayomikun",
  title: "Full Stack Developer",
  location: "Lagos, Nigeria",
  tagline:
    "I design and engineer resilient web platforms — the kind that stay fast, legible and calm as they grow.",
  email: "omotoshoayomikun@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "#",
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
  "PostgreSQL",
  "Go",
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
    company: "Northwind Labs",
    role: "Senior Full Stack Engineer",
    period: "2023 — Present",
    description:
      "Lead engineer on a multi-tenant analytics platform serving 40k daily users. Cut p95 response time by 63% and introduced a design-system-driven front end adopted by four product teams.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Kestrel Health",
    role: "Full Stack Engineer",
    period: "2021 — 2023",
    description:
      "Built patient-facing scheduling and messaging products under strict accessibility and compliance constraints. Shipped an offline-first mobile client used across 120 clinics.",
    stack: ["React Native", "GraphQL", "Go", "Redis"],
  },
  {
    company: "Fieldnote",
    role: "Frontend Engineer",
    period: "2019 — 2021",
    description:
      "First front-end hire. Established component architecture, testing culture and CI pipelines that carried the product from private beta to Series A.",
    stack: ["React", "TypeScript", "Storybook", "Cypress"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2017 — 2019",
    description:
      "Delivered marketing sites and internal tools for studios and small teams, handling everything from discovery to deployment.",
    stack: ["JavaScript", "Node.js", "Figma"],
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
    name: "Lumen Analytics",
    description:
      "A self-hosted product analytics suite with streaming ingestion, cohort exploration and sub-second dashboards over billions of events.",
    image: "/images/project-1.jpg",
    stack: ["Next.js", "ClickHouse", "Go", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    name: "Cadence",
    description:
      "Offline-first habit and focus companion. Local-first sync engine with conflict resolution and a deliberately quiet interface.",
    image: "/images/project-2.jpg",
    stack: ["React Native", "SQLite", "tRPC"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    name: "Meshkit",
    description:
      "Infrastructure toolkit that turns declarative service manifests into reviewable Terraform plans with drift detection.",
    image: "/images/project-3.jpg",
    stack: ["TypeScript", "Terraform", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
];

export const otherProjects = [
  {
    name: "Typeflow",
    description: "A tiny type-safe form state library with zero re-render overhead.",
    stack: ["TypeScript", "React"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "Pale Palette",
    description: "Accessible color scale generator that scores every pair against WCAG contrast.",
    stack: ["Vite", "OKLCH"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "Cronwatch",
    description: "Heartbeat monitoring for scheduled jobs with quiet, useful alerting.",
    stack: ["Go", "Postgres"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "Notestack",
    description: "Markdown knowledge base with instant local search and keyboard-first navigation.",
    stack: ["React", "WASM"],
    github: "https://github.com",
    demo: "https://example.com",
  },
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
    title: "AWS Certified Solutions Architect — Professional",
    meta: "Amazon Web Services · 2024",
    description: "Validated multi-account architecture, cost governance and resilient system design.",
  },
  {
    title: "Engineering Excellence Award",
    meta: "Northwind Labs · 2024",
    description: "Recognised for the platform migration that halved infrastructure spend.",
  },
  {
    title: "Speaker — ReactBerlin",
    meta: "2023",
    description: "Talk on rendering strategies and the real cost of client-side state.",
  },
  {
    title: "Open Source Maintainer",
    meta: "9.2k combined stars",
    description: "Maintaining three libraries used in production by teams worldwide.",
  },
];

export const testimonials = [
  {
    quote:
      "Adrian has the rare ability to simplify a system while making it more capable. Our platform velocity doubled after he restructured the front end.",
    name: "Marta Lindqvist",
    role: "VP Engineering, Northwind Labs",
  },
  {
    quote:
      "He treats accessibility and performance as product requirements, not chores. Reviews with him made the whole team better engineers.",
    name: "Daniel Osei",
    role: "Staff Engineer, Kestrel Health",
  },
  {
    quote:
      "Calm, precise, and genuinely thoughtful about users. Adrian shipped our MVP two weeks early and it still runs untouched.",
    name: "Priya Raman",
    role: "Founder, Fieldnote",
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