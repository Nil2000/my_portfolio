"use client";

import { motion } from "motion/react";
import { contactData } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";

export default function Contact() {
  return (
    <section id="contact" className="w-full pb-4">
      <SectionHeader id="contact" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-8"
      >
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          {contactData.description}
        </p>

        {/* Large typographic email CTA */}
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${contactData.email}`}
            className="group inline-flex items-baseline gap-3 w-fit"
          >
            <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground font-mono border-b border-transparent group-hover:border-accent-brand group-hover:text-accent-brand transition-colors leading-tight">
              {contactData.email}
            </span>
            <span className="text-xs font-mono text-muted-foreground group-hover:text-accent-brand transition-colors uppercase tracking-widest hidden sm:inline">
              ↗
            </span>
          </a>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
            say hello
          </p>
        </div>
      </motion.div>
    </section>
  );
}
