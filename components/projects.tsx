"use client";

import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import SocialIcon from "./social-icon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Projects
          </p>
          <h3 className="text-3xl font-bold text-foreground">
            Things I&apos;ve built
          </h3>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={cardVariant}>
              <Card className="group flex h-full flex-col transition-all hover:ring-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:ring-indigo-500/40">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Code2 size={26} className="text-indigo-500" />
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <Button asChild variant="ghost" size="icon-sm">
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Source code"
                          >
                            <SocialIcon name="Github" size={16} />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild variant="ghost" size="icon-sm">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-base font-bold group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex flex-wrap gap-1.5 bg-transparent border-t-0">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8 text-center text-lg font-semibold text-muted-foreground"
            >
              Other Noteworthy Projects
            </motion.h4>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {other.map((project) => (
                <motion.div key={project.id} variants={cardVariant}>
                  <Card size="sm" className="group flex h-full flex-col">
                    <CardHeader>
                      <div className="mb-1 flex items-center justify-between">
                        <Code2 size={20} className="text-muted-foreground" />
                        <div className="flex gap-1">
                          {project.repoUrl && (
                            <Button asChild variant="ghost" size="icon-xs">
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Source code"
                              >
                                <SocialIcon name="Github" size={14} />
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button asChild variant="ghost" size="icon-xs">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live demo"
                              >
                                <ExternalLink size={14} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-sm font-bold group-hover:text-indigo-500 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto flex flex-wrap gap-1 bg-transparent border-t-0">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="ghost"
                          className="text-xs px-1.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
