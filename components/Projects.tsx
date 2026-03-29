import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          Projects
        </h2>
        <h3 className="mb-14 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Things I&apos;ve built
        </h3>

        {/* Featured projects */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <Code2
                  size={28}
                  className="text-indigo-500"
                />
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Source code"
                      className="text-zinc-400 transition-colors hover:text-indigo-500"
                    >
                      <SocialIcon name="Github" size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-zinc-400 transition-colors hover:text-indigo-500"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="mb-2 text-lg font-bold text-zinc-900 group-hover:text-indigo-500 dark:text-zinc-50">
                {project.title}
              </h4>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-zinc-500 dark:text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <h4 className="mb-8 text-center text-lg font-semibold text-zinc-700 dark:text-zinc-300">
              Other Noteworthy Projects
            </h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col rounded-xl border border-zinc-100 bg-zinc-50 p-5 transition-all hover:border-indigo-200 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-indigo-500/30 dark:hover:bg-zinc-900"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <Code2 size={22} className="text-zinc-400" />
                    <div className="flex gap-3">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Source code"
                          className="text-zinc-400 transition-colors hover:text-indigo-500"
                        >
                          <SocialIcon name="Github" size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="text-zinc-400 transition-colors hover:text-indigo-500"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h5 className="mb-1 text-sm font-bold text-zinc-800 group-hover:text-indigo-500 dark:text-zinc-200">
                    {project.title}
                  </h5>
                  <p className="mb-4 flex-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-zinc-400 dark:text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
