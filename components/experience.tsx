"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/section-header";
import { listItem, listItemReduced, listStagger } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion ? listItemReduced : listItem;

  return (
    <section id="experience" className="w-full scroll-mt-24">
      <SectionHeader id="experience" />

      <motion.div
        variants={listStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.id}
            variants={item}
            className={`flex flex-col gap-2 py-6 sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 ${
              idx !== 0 ? "border-t border-border" : ""
            }`}
          >
            <p className="font-mono text-xs text-muted-foreground tabular-nums">
              {exp.period}
            </p>
            <div className="flex min-w-0 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
                {exp.current && (
                  <Badge variant="success" className="h-4 shrink-0 px-1.5 text-[10px]">
                    current
                  </Badge>
                )}
              </div>
              <Link
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-fit font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline ${linkFocus}`}
              >
                @{exp.company}
              </Link>
              <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
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
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
