import { Braces, Workflow, type LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siCloudflare,
  siCplusplus,
  siCss,
  siCursor,
  siDigitalocean,
  siDocker,
  siDrizzle,
  siExpress,
  siFramer,
  siGit,
  siGithub,
  siGithubactions,
  siGo,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siShadcnui,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  siVercel,
} from "simple-icons";

const brands: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  "C++": siCplusplus,
  Go: siGo,
  React: siReact,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Framer Motion": siFramer,
  "Node.js": siNodedotjs,
  Express: siExpress,
  Prisma: siPrisma,
  Drizzle: siDrizzle,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Docker: siDocker,
  Turborepo: siTurborepo,
  "Digital Ocean": siDigitalocean,
  Vercel: siVercel,
  "Cloudflare R2": siCloudflare,
  "GitHub Actions": siGithubactions,
  Git: siGit,
  GitHub: siGithub,
  Cursor: siCursor,
};

const generic: Record<string, LucideIcon> = {
  "REST APIs": Braces,
  "CI/CD": Workflow,
};

function brandFill(hex: string) {
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);
  const y = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (y < 0.25) return "currentColor";
  if (y > 0.72) {
    const shade = 0.55;
    return `rgb(${Math.round(r * shade)} ${Math.round(g * shade)} ${Math.round(b * shade)})`;
  }
  return `#${hex}`;
}

// ponytail: simple-icons has no Zustand mark (the official bear SVG is hundreds of paths). Ears + head read at chip size; swap in a real path if one lands upstream.
function ZustandMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <circle cx="7" cy="8.2" r="2.5" />
      <circle cx="17" cy="8.2" r="2.5" />
      <circle cx="12" cy="14" r="6" />
    </svg>
  );
}

export default function SkillIcon({ name }: { name: string }) {
  if (name === "Zustand") return <ZustandMark />;

  const brand = brands[name];
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill={brandFill(brand.hex)}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Generic = generic[name];
  if (Generic) return <Generic aria-hidden="true" />;

  if (process.env.NODE_ENV === "development") {
    throw new Error(`Missing skill icon: ${name}`);
  }

  return null;
}
