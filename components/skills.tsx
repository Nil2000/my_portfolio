"use client";

import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";
import TechIcon from "@/components/tech-icon";
import { listStagger, listItem, chipVariant } from "@/lib/motion";

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="w-full">
      <SectionHeader id="skills" />

      <motion.div
        variants={listStagger}
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            variants={listItem}
            className={`flex flex-col sm:flex-row gap-3 sm:gap-8 py-4 ${
              idx !== 0 ? "border-t border-border" : ""
            }`}
          >
            {/* Category label */}
            <div className="sm:w-1/4 shrink-0 pt-0.5">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {group.category}
              </span>
            </div>

            {/* Chip grid */}
            <motion.div
              variants={listStagger}
              className="sm:w-3/4 flex flex-wrap gap-2"
            >
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  variants={chipVariant}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 text-xs font-mono text-muted-foreground cursor-default"
                >
                  <TechIcon name={item} size={12} />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
