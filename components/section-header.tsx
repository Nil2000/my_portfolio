"use client";

import { motion, useReducedMotion } from "motion/react";
import { sections } from "@/data/portfolio";
import { enter } from "@/lib/motion";
import { HyperText } from "@/components/ui/hyper-text";

interface SectionHeaderProps {
  id: string;
}

export default function SectionHeader({ id }: SectionHeaderProps) {
  const section = sections.find((item) => item.id === id);
  const reduceMotion = useReducedMotion();
  const headerEnter = enter(reduceMotion);
  if (!section) return null;

  return (
    <motion.div
      initial={headerEnter.hidden}
      whileInView={headerEnter.shown}
      viewport={{ once: true }}
      transition={headerEnter.transition}
      className="mb-8 flex items-baseline gap-3"
    >
      <span
        aria-hidden="true"
        className="font-mono text-[11px] font-medium text-muted-foreground"
      >
        {section.hash}
      </span>
      {reduceMotion ? (
        <h2 className="font-mono text-sm font-medium text-foreground">
          {section.title}
        </h2>
      ) : (
        <HyperText
          as="h2"
          aria-label={section.title}
          className="py-0 font-mono text-sm font-medium text-foreground"
        >
          {section.title}
        </HyperText>
      )}
      <div className="h-px flex-1 bg-border" />
    </motion.div>
  );
}
