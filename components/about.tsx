"use client";

import { motion } from "motion/react";
import { aboutData } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function About() {
  return (
    <section id="about" className="w-full">
      <SectionHeader id="about" />

      <div className="flex flex-col gap-8">
        {/* Paragraphs */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {aboutData.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeItem}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 border border-border rounded-md divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden"
        >
          {aboutData.highlights.map((h) => (
            <div key={h.label} className="flex flex-col gap-1 px-4 py-4">
              <span className="text-2xl font-bold text-foreground tracking-tighter font-mono">
                {h.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono leading-tight">
                {h.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
