"use client";

import ExternalLinkIcon from "@/components/ui/external-link-icon";
import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import SocialIcon from "./social-icon";
import SectionHeader from "@/components/section-header";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <SectionHeader id="projects" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={itemVariant}
            className={`flex flex-col gap-2 py-5 group ${
              idx !== 0 ? "border-t border-border" : ""
            }`}
          >
            {/* Title row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-foreground font-mono">
                  {project.title}
                </h3>
                {project.featured && (
                  <Badge variant="success" className="text-[10px] h-4 px-1.5 shrink-0">
                    featured
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    aria-label="Source code"
                  >
                    <SocialIcon name="Github" size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    aria-label="Live demo"
                  >
                    <ExternalLinkIcon size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-mono text-xs rounded-md bg-transparent text-muted-foreground border-border"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
