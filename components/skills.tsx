"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
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
            className={`flex flex-col sm:flex-row gap-1.5 sm:gap-8 py-3 ${
              idx !== 0 ? "border-t border-border" : ""
            }`}
          >
            {/* Category label */}
            <div className="sm:w-1/4 shrink-0">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {group.category}
              </span>
            </div>

            {/* Items */}
            <div className="sm:w-3/4">
              <p className="text-sm font-mono text-muted-foreground">
                {group.items.join(" · ")}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
