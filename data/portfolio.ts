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
  name: string;
  role: string;
  description: string;
  hash: string;
  ref: string;
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
  image?: string;
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
  hash: string;
  title: string;
  navLabel: string;
  showInNav: boolean;
}

// ─── Data ────────────────────────────────────────────

export const sections: Section[] = [
  {
    id: "contributions",
    hash: "a91e0c4",
    title: "activity",
    navLabel: "Activity",
    showInNav: true,
  },
  {
    id: "experience",
    hash: "c3d18b2",
    title: "experience",
    navLabel: "Experience",
    showInNav: true,
  },
  {
    id: "projects",
    hash: "e5b7a90",
    title: "projects",
    navLabel: "Projects",
    showInNav: true,
  },
  {
    id: "skills",
    hash: "f0d2e61",
    title: "tags",
    navLabel: "Tags",
    showInNav: true,
  },
  {
    id: "contact",
    hash: "0b8c7d3",
    title: "contact",
    navLabel: "Contact",
    showInNav: true,
  },
];

export const siteConfig: SiteConfig = {
  name: "Nilabhra Adhikari",
  title: "Nilabhra Adhikari — Full-Stack Engineer",
  description:
    "Full-stack engineer. I ship the queue, the worker, and the UI on top of them.",
  url: "https://nilabhra.info",
  profileImage: "/my-pfp.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Activity", href: "#contributions" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tags", href: "#skills" },
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
];

export const heroData: HeroData = {
  name: "Nilabhra Adhikari",
  role: "Full-stack engineer",
  description: "I ship the queue, the worker, and the UI on top of them.",
  hash: "7f3a2c1",
  ref: "available-for-work",
  status: {
    available: true,
    label: "Available for work",
  },
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Software Engineer",
    company: "Accenture",
    companyUrl: "https://www.accenture.com",
    period: "Jul 2023 — Present",
    description:
      "Building a translation application with React and Context API, integrated with a Flask backend for smooth data handling. Developed responsive web apps with .NET MVC and Azure Blob Storage for secure file operations. Integrated a web application with Salesforce for seamless data exchange, collaborating with the Salesforce team and private design libraries for a polished UI.",
    technologies: [
      "React",
      "Context API",
      "Flask",
      ".NET MVC",
      "Azure Blob Storage",
      "Salesforce",
    ],
    current: true,
  },
  {
    id: "exp-2",
    role: "Software Engineer Intern",
    company: "Coral",
    companyUrl: "https://www.linkedin.com/company/hydracoral",
    period: "Jan 2023 — Apr 2023",
    description:
      "Built a mobile application from scratch with Flutter, integrating public APIs for core functionality. Shipped one-to-one encrypted chat, a scratch-card rewards system, and video/audio calling. Integrated Razorpay for payments and pair-programmed with the team to debug issues and ship a production-ready app.",
    technologies: ["Flutter", "REST APIs", "Razorpay", "WebRTC"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Testiflow",
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
    liveUrl: "https://testiflow.nilabhra.info",
    featured: true,
    image: "/testiflow.png",
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
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "C++", "Go"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "Drizzle"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Turborepo",
      "Digital Ocean",
      "Vercel",
      "Cloudflare R2",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "GitHub",
      "Cursor",
    ],
  },
];

export const contactData: ContactData = {
  heading: "Contact",
  description:
    "Open to new roles. Questions, project ideas, and hellos all land in the same inbox.",
  email: "nilabhra09b.net@gmail.com",
};
