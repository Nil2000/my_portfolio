// ─── Types ───────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: "Github" | "Linkedin" | "X" | "Mail" | "Globe";
}

export interface HeroStatus {
  available: boolean;
  label: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  description: string;
  resumeUrl: string;
  status: HeroStatus;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
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

export interface Section {
  id: string;
  index: string;
  title: string;
  navLabel: string;
  showInNav: boolean;
}

// ─── Data ────────────────────────────────────────────

export const sections: Section[] = [
  { id: "contributions", index: "01", title: "contributions", navLabel: "Contributions", showInNav: true },
  { id: "experience", index: "02", title: "experience", navLabel: "Experience", showInNav: true },
  { id: "projects", index: "03", title: "projects", navLabel: "Projects", showInNav: true },
  { id: "skills", index: "04", title: "skills", navLabel: "Skills", showInNav: true },
  { id: "contact", index: "05", title: "contact", navLabel: "Contact", showInNav: true },
];

export const siteConfig: SiteConfig = {
  name: "Nilabhra Adhikari",
  title: "Nilabhra Adhikari — Full-Stack Developer",
  description:
    "Full-stack developer specialising in React, Next.js, and Node.js. Building elegant solutions to complex problems.",
  url: "https://nilabhra.info",
  profileImage: "/my-pfp.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Contributions", href: "#contributions" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/nil2000", icon: "Github" },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/nilabhraadhikari",
    icon: "Linkedin",
  },
  {
    platform: "X",
    url: "https://x.com/I_AM_Nilabhra",
    icon: "X",
  },
  { platform: "Email", url: "mailto:nilabhra09b.net@gmail.com", icon: "Mail" },
];

export const heroData: HeroData = {
  greeting: "Hi, my name is",
  name: "Nilabhra Adhikari",
  tagline: "I build things for the web.",
  description:
    "Full-stack developer with 3+ years of experience in React, Next.js, and Node.js.",
  resumeUrl: "/resume.pdf",
  status: {
    available: true,
    label: "Available for work",
  },
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
    current: true,
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
    title: "Testimonial 100x",
    description:
      "A testimonials collection and showcase platform. Create spaces, collect text and video testimonials via public links, manage them in an admin dashboard, and publish an embeddable Wall of Love — with async spam, sentiment, and transcription analysis via a Redis-backed worker.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "NextAuth",
    ],
    repoUrl: "https://github.com/Nil2000/100x-testimonial",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Cursor 2D Animation",
    description:
      "A full-stack app for creating and rendering 2D animation videos from chat-driven prompts. The Next.js app enqueues render jobs to Redis; a Bun worker runs Manim in Docker and uploads output to S3-compatible storage.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Bun",
      "Docker",
      "Manim",
    ],
    repoUrl: "https://github.com/Nil2000/Cursor-2d-animation",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Spotofy",
    description:
      "Listen to music together. Hosts create shared Spotify listening sessions — guests join, request songs, upvote tracks, and see the queue update in real time over WebSockets.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "WebSockets",
      "Spotify API",
      "Turborepo",
      "Bun",
    ],
    repoUrl: "https://github.com/Nil2000/spotofy",
    featured: true,
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
];

export const contactData: ContactData = {
  heading: "Get In Touch",
  description:
    "I'm currently open to new opportunities and always happy to chat. Whether you have a question, a project idea, or just want to say hello — my inbox is always open.",
  email: "nilabhra09b.net@gmail.com",
};
