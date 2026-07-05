"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";
import TechIcon from "@/components/tech-icon";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const chipVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full">
      <SectionHeader id="skills" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            variants={rowVariant}
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
              variants={stagger}
              className="sm:w-3/4 flex flex-wrap gap-2"
            >
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  variants={chipVariant}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 text-xs font-mono text-muted-foreground hover:border-accent-brand hover:text-accent-brand transition-colors cursor-default"
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
