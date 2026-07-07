"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/section-header";
import { listStagger, listItem } from "@/lib/motion";

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="w-full">
      <SectionHeader id="experience" />

      <motion.div
        variants={listStagger}
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            variants={listItem}
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
                <h3 className="text-sm font-semibold text-foreground font-display">
                  {exp.role}
                </h3>
                {exp.current && (
                  <Badge variant="success" className="text-[10px] h-4 px-1.5 shrink-0">
                    Current
                  </Badge>
                )}
              </div>
              <Link
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-accent-brand transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm"
              >
                @ {exp.company}
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
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
