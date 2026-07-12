"use client";

import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/portfolio";
import { listItem } from "@/lib/motion";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      variants={listItem}
      className="w-full max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border"
    >
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
        &copy; {new Date().getFullYear()} {siteConfig.name.split(" ")[0]}
      </p>
      <p className="text-xs font-mono text-muted-foreground">
        built with next.js &amp; tailwind
      </p>
    </motion.footer>
  );
}
