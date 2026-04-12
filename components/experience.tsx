"use client";

import { motion } from "motion/react";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
          ## Experience
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariant}
            className="flex flex-col sm:flex-row gap-2 sm:gap-8"
          >
            <div className="sm:w-1/3 shrink-0 pt-1">
              <p className="text-sm font-mono text-muted-foreground">
                {exp.period}
              </p>
            </div>

            <div className="sm:w-2/3 flex flex-col gap-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  @ {exp.company}
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
