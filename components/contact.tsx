"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { contactData } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="w-full pb-4">
      <SectionHeader id="contact" />

      <motion.div
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-8"
      >
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg font-body">
          {contactData.description}
        </p>

        {/* Large typographic email CTA */}
        <div className="flex flex-col gap-3">
          <Link
            href={`mailto:${contactData.email}`}
            className="group inline-flex items-baseline gap-3 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground border-b border-transparent group-hover:border-accent-brand group-hover:text-accent-brand transition-colors leading-tight">
              {contactData.email}
            </span>
            <span className="text-xs font-mono text-muted-foreground group-hover:text-accent-brand transition-colors uppercase tracking-widest hidden sm:inline">
              ↗
            </span>
          </Link>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
            say hello
          </p>
        </div>
      </motion.div>
    </section>
  );
}
