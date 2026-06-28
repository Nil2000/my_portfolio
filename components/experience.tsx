"use client";

import { motion } from "motion/react";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/section-header";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <SectionHeader id="experience" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            variants={itemVariant}
            className={`flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 ${
              idx !== 0 ? "border-t border-border" : ""
            }`}
          >
            {/* Period */}
            <div className="sm:w-1/3 shrink-0">
              <p className="text-xs font-mono text-muted-foreground tabular-nums pt-0.5">
                {exp.period}
              </p>
            </div>

            {/* Content */}
            <div className="sm:w-2/3 flex flex-col gap-2">
              <div className="flex items-start gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-foreground font-mono">
                  {exp.role}
                </h3>
                {exp.current && (
                  <Badge variant="success" className="text-[10px] h-4 px-1.5 shrink-0">
                    Current
                  </Badge>
                )}
              </div>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-accent-brand transition-colors w-fit"
              >
                @ {exp.company}
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="font-mono text-xs rounded-md bg-transparent text-muted-foreground border-border"
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
