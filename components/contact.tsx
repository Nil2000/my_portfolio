"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { contactData } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="w-full scroll-mt-24 pb-4">
      <SectionHeader id="contact" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-6"
      >
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          {contactData.description}
        </p>

        <div className="flex flex-col items-start gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            $ git push --to
          </p>
          <div className="flex items-center gap-2">
            <Button asChild className="h-8 px-3 font-mono text-xs">
              <a href={`mailto:${contactData.email}`}>Email me</a>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-8 px-3 font-mono text-xs"
              onClick={copyEmail}
            >
              {copied ? "Copied" : "Copy email"}
            </Button>
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? "Copied" : ""}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
