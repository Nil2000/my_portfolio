"use client";

import { motion, useReducedMotion } from "motion/react";

export default function ExternalMark() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="inline-block text-status-ink"
      variants={{
        rest: { x: 0, y: 0 },
        hover: reduceMotion ? { x: 0, y: 0 } : { x: 2, y: -2 },
      }}
      transition={{ type: "spring", duration: 0.3, bounce: 0 }}
    >
      ↗
    </motion.span>
  );
}
