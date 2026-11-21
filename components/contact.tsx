"use client";

import { motion, useReducedMotion } from "motion/react";
import { contactData, isExternalUrl } from "@/data/portfolio";
import ExternalMark from "@/components/external-mark";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { enter } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const intro = enter(reduceMotion);

  return (
    <section id="contact" className="w-full scroll-mt-24 pb-4">
      <SectionHeader id="contact" />

      <motion.div
        initial={intro.hidden}
        whileInView={intro.shown}
        viewport={{ once: true }}
        transition={intro.transition}
        className="flex flex-col gap-6"
      >
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          {contactData.description}
        </p>

        <div className="flex flex-col items-start gap-3">
          <a
            href={`mailto:${contactData.email}`}
            className={`max-w-full break-all font-mono text-sm text-foreground underline decoration-muted-foreground underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-status-ink ${linkFocus}`}
          >
            {contactData.email}
          </a>
          {isExternalUrl(contactData.bookingUrl) && (
            <Button
              asChild
              variant="outline"
              className="h-8 pl-3 pr-2.5 font-mono text-xs"
            >
              <motion.a
                href={contactData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                whileFocus="hover"
              >
                Book a call
                <ExternalMark />
              </motion.a>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
