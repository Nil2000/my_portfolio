"use client";

import { motion, useReducedMotion } from "motion/react";
import { sections } from "@/data/portfolio";

interface SectionHeaderProps {
  id: string;
}

export default function SectionHeader({ id }: SectionHeaderProps) {
  const section = sections.find((s) => s.id === id);
  const reduceMotion = useReducedMotion();
  if (!section) return null;

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-8 flex items-center gap-3"
    >
      <span className="text-[10px] font-mono text-accent-brand tabular-nums shrink-0 font-bold tracking-widest">
        {section.index}
      </span>
      <span className="text-xs font-mono text-muted-foreground/40 shrink-0">/</span>
      <h2 className="font-display text-base font-semibold text-foreground shrink-0 m-0 tracking-tight">
        {section.title}
      </h2>
      <div className="section-rule" />
    </motion.div>
  );
}
