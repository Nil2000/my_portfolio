"use client";

import { motion } from "motion/react";
import { sections } from "@/data/portfolio";

interface SectionHeaderProps {
  id: string;
}

export default function SectionHeader({ id }: SectionHeaderProps) {
  const section = sections.find((s) => s.id === id);
  if (!section) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-8 flex items-center gap-3"
    >
      <span className="text-xs font-mono text-accent-brand tabular-nums shrink-0 font-bold">
        {section.index}
      </span>
      <span className="text-xs font-mono text-muted-foreground shrink-0">/</span>
      <h2 className="text-xs font-mono font-bold text-foreground uppercase tracking-widest shrink-0 m-0">
        {section.title}
      </h2>
      <div className="section-rule" />
    </motion.div>
  );
}
