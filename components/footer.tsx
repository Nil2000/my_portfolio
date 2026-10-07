"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/portfolio";
import { listItem, listItemReduced } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={reduceMotion ? listItemReduced : listItem}
      className="mx-auto w-full max-w-4xl px-4 sm:px-6"
    >
      <div className="border-t border-border">
        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name.split(" ")[0].toLowerCase()}
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              HEAD -&gt; main
            </p>
            <Link
              href="#hero"
              className={`font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline ${linkFocus}`}
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
