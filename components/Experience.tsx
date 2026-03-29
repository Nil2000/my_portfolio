import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          Experience
        </h2>
        <h3 className="mb-14 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Where I&apos;ve worked
        </h3>

        <div className="relative border-l-2 border-zinc-200 pl-8 dark:border-zinc-700">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative pb-12 ${idx === experiences.length - 1 ? "pb-0" : ""}`}
            >
              {/* Timeline dot */}
              <span className="absolute -left-9.25 flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950">
                <Briefcase size={16} className="text-indigo-500" />
              </span>

              <p className="mb-1 text-xs font-semibold tracking-wide text-indigo-500 uppercase">
                {exp.period}
              </p>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {exp.role}
              </h4>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 inline-block text-sm font-medium text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400"
              >
                @ {exp.company}
              </a>
              <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
