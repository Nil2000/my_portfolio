"use client";

import Image from "next/image";
import Link from "next/link";
import ExternalLinkIcon from "@/components/ui/external-link-icon";
import GithubIcon from "@/components/ui/github-icon";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { listItem, listItemReduced, listStagger } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";

const imageOutline =
  "outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10";

function repoPath(url: string) {
  try {
    return new URL(url).pathname.replace(/^\/|\/$/g, "").toLowerCase();
  } catch {
    return url;
  }
}

function ScreenshotSlot({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted md:w-[45%]">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(min-width: 768px) 320px, 100vw"
        className={`object-cover ${imageOutline}`}
        loading="lazy"
      />
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion ? listItemReduced : listItem;

  return (
    <section id="projects" className="w-full scroll-mt-24">
      <SectionHeader id="projects" />

      <motion.div
        variants={listStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={item}
            className="overflow-hidden rounded-md border border-border bg-card"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
              <span className="truncate font-mono text-[11px] text-muted-foreground">
                {project.repoUrl ? repoPath(project.repoUrl) : project.title}
              </span>
              <div className="flex shrink-0 items-center gap-1">
                {project.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 px-1.5 py-1 font-mono text-[11px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline ${linkFocus}`}
                  >
                    <GithubIcon size={13} />
                    View source
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 px-1.5 py-1 font-mono text-[11px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline ${linkFocus}`}
                  >
                    <ExternalLinkIcon size={13} />
                    View live
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <ScreenshotSlot project={project} />
              <div className="flex min-w-0 flex-col gap-3 px-4 py-4">
                <h3 className="display-stretch font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-md border-border bg-transparent font-mono text-xs font-normal text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
