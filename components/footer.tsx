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
      className="mx-auto w-full max-w-4xl px-4 sm:px-6"
    >
      <div className="border-t border-border">
        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name.split(" ")[0].toLowerCase()}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            HEAD -&gt; main
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
