import {
  siTypescript,
  siJavascript,
  siPython,
  siGo,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siTailwindcss,
  siRedux,
  siFramer,
  siNodedotjs,
  siExpress,
  siNestjs,
  siGraphql,
  siPrisma,
  siDrizzle,
  siPostgresql,
  siMongodb,
  siRedis,
  siMysql,
  siFirebase,
  siDocker,
  siVercel,
  siGithubactions,
  siNginx,
  siLinux,
  siHtml5,
  siCss,
} from "simple-icons";

type SimpleIcon = { path: string; title: string };

const iconMap: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  Go: siGo,
  HTML: siHtml5,
  CSS: siCss,
  React: siReact,
  "Next.js": siNextdotjs,
  "Vue.js": siVuedotjs,
  "Tailwind CSS": siTailwindcss,
  Redux: siRedux,
  "Framer Motion": siFramer,
  "Node.js": siNodedotjs,
  Express: siExpress,
  NestJS: siNestjs,
  GraphQL: siGraphql,
  Prisma: siPrisma,
  Drizzle: siDrizzle,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  MySQL: siMysql,
  Firebase: siFirebase,
  Docker: siDocker,
  Vercel: siVercel,
  "GitHub Actions": siGithubactions,
  Nginx: siNginx,
  Linux: siLinux,
};

// Generic code-slash glyph for items with no brand icon
const FALLBACK_PATH =
  "M9.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 10 9.293 4.707a1 1 0 0 1 0-1.414z M4.707 3.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L3.414 6l1.293-1.293a1 1 0 0 0 0-1.414z";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ name, size = 14, className = "" }: TechIconProps) {
  const icon = iconMap[name];
  // simple-icons use a 24×24 viewBox; the fallback uses 20×20
  const viewBox = icon ? "0 0 24 24" : "0 0 20 20";
  const path = icon ? icon.path : FALLBACK_PATH;

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="currentColor"
      aria-label={name}
      role="img"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}
