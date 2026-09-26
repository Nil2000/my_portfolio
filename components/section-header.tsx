"use client";

import { motion, useReducedMotion } from "motion/react";
import { sections } from "@/data/portfolio";

interface SectionHeaderProps {
  id: string;
}

export default function SectionHeader({ id }: SectionHeaderProps) {
  const section = sections.find((item) => item.id === id);
  const reduceMotion = useReducedMotion();
  if (!section) return null;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-8 flex items-baseline gap-3"
    >
      <span
        aria-hidden="true"
        className="font-mono text-[11px] font-medium text-muted-foreground"
      >
        {section.hash}
      </span>
      <h2 className="font-mono text-sm font-medium text-foreground">
        {section.title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </motion.div>
  );
}
