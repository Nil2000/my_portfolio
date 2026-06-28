"use client";

import ExternalLinkIcon from "@/components/ui/external-link-icon";
import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import SocialIcon from "./social-icon";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
          ## Projects
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariant}
            className="flex flex-col gap-2 p-4 border border-border rounded-md hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold text-foreground">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Source code"
                  >
                    <SocialIcon name="Github" size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLinkIcon size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-mono text-xs bg-transparent"
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
