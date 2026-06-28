// ─── Types ───────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: "Github" | "Linkedin" | "Twitter" | "Mail" | "Globe";
}

export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  description: string;
  resumeUrl: string;
}

export interface AboutData {
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  profileImage: string;
}

// ─── Data ────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  name: "Nilabhra Adhikari",
  title: "Nilabhra Adhikari — Full-Stack Developer",
  description:
    "Full-stack developer specialising in React, Next.js, and Node.js. Building elegant solutions to complex problems.",
  url: "https://nilabhra.info",
  profileImage: "/my-pfp.jpg",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Contributions", href: "#contributions" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/johndoe", icon: "Github" },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: "Linkedin",
  },
  { platform: "Twitter", url: "https://twitter.com/johndoe", icon: "Twitter" },
  { platform: "Email", url: "mailto:hello@johndoe.dev", icon: "Mail" },
];

export const heroData: HeroData = {
  greeting: "Hi, my name is",
  name: "John Doe",
  tagline: "I build things for the web.",
  description:
    "I'm a full-stack developer with 5+ years of experience crafting performant, accessible, and visually polished web applications. Currently focused on building products that make a difference.",
  resumeUrl: "/resume.pdf",
};

export const aboutData: AboutData = {
  paragraphs: [
    "I'm a passionate developer who loves turning complex problems into simple, beautiful, and intuitive solutions. My journey in web development started back in 2018 when I decided to build a custom theme for my blog — turns out hacking together HTML & CSS taught me a lot about the web.",
    "Fast-forward to today, and I've had the privilege of working at a startup, a large corporation, and a design agency. My main focus these days is building accessible, human-centered products at TechCorp Inc.",
    "When I'm not at the computer, I'm usually rock climbing, reading sci-fi novels, or experimenting with new coffee brewing techniques.",
  ],
  highlights: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Open Source Contributions", value: "50+" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    companyUrl: "https://techcorp.example.com",
    period: "Jan 2023 — Present",
    description:
      "Lead the frontend architecture for the company's flagship SaaS product. Migrated legacy jQuery codebase to React/Next.js, improving page load times by 60%. Mentor a team of 4 junior developers and conduct regular code reviews.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    company: "WebStudio Agency",
    companyUrl: "https://webstudio.example.com",
    period: "Mar 2021 — Dec 2022",
    description:
      "Built and maintained 15+ client websites and web applications. Implemented CI/CD pipelines that reduced deployment time by 40%. Collaborated directly with designers and clients to translate Figma mockups into pixel-perfect, responsive UIs.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "exp-3",
    role: "Junior Developer",
    company: "StartupXYZ",
    companyUrl: "https://startupxyz.example.com",
    period: "Jun 2019 — Feb 2021",
    description:
      "Developed core features for the company's e-commerce platform serving 10K+ daily active users. Built RESTful APIs and integrated third-party payment processing. Participated in agile sprints and contributed to technical documentation.",
    technologies: ["React", "Express.js", "MongoDB", "Redis", "Stripe API"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "CloudBoard",
    description:
      "A real-time collaborative whiteboard application with support for drawing, sticky notes, and live cursors. Built with WebSocket for instant synchronisation across multiple users.",
    technologies: [
      "Next.js",
      "Socket.io",
      "Canvas API",
      "Redis",
      "Tailwind CSS",
    ],
    liveUrl: "https://cloudboard.example.com",
    repoUrl: "https://github.com/johndoe/cloudboard",
    featured: true,
  },
  {
    id: "proj-2",
    title: "DevPulse",
    description:
      "A developer productivity dashboard that aggregates data from GitHub, Jira, and Slack to provide actionable insights and team metrics in a single pane of glass.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "OAuth 2.0"],
    liveUrl: "https://devpulse.example.com",
    repoUrl: "https://github.com/johndoe/devpulse",
    featured: true,
  },
  {
    id: "proj-3",
    title: "MarkdownAI",
    description:
      "An AI-powered markdown editor that provides intelligent suggestions, grammar correction, and auto-formatting as you type. Leverages OpenAI's GPT API for context-aware completions.",
    technologies: ["TypeScript", "OpenAI API", "Electron", "CodeMirror"],
    repoUrl: "https://github.com/johndoe/markdown-ai",
    featured: true,
  },
  {
    id: "proj-4",
    title: "FitTrack",
    description:
      "A mobile-first fitness tracking PWA with offline support, workout logging, and progress visualisations. Syncs across devices with service workers and IndexedDB.",
    technologies: ["React", "PWA", "IndexedDB", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://fittrack.example.com",
    featured: false,
  },
  {
    id: "proj-5",
    title: "BudgetBuddy",
    description:
      "A personal finance management tool with smart categorisation of expenses, recurring payment tracking, and interactive spending breakdowns by month.",
    technologies: ["Vue.js", "Firebase", "Plaid API", "Vuetify"],
    liveUrl: "https://budgetbuddy.example.com",
    repoUrl: "https://github.com/johndoe/budget-buddy",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Open Source CLI Toolkit",
    description:
      "A collection of developer CLI tools including a project scaffolder, git hook manager, and dependency auditor. Published on npm with 2K+ weekly downloads.",
    technologies: ["Node.js", "Commander.js", "Chalk", "npm"],
    repoUrl: "https://github.com/johndoe/cli-toolkit",
    featured: false,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Linux",
    ],
  },
  {
    category: "Practices",
    items: [
      "Agile / Scrum",
      "TDD",
      "Code Review",
      "Accessibility (a11y)",
      "Performance Optimisation",
    ],
  },
];

export const contactData: ContactData = {
  heading: "Get In Touch",
  description:
    "I'm currently open to new opportunities and always happy to chat. Whether you have a question, a project idea, or just want to say hello — my inbox is always open.",
  email: "hello@johndoe.dev",
};
