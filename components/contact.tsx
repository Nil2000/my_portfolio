"use client";

import SendHorizontalIcon from "@/components/ui/send-horizontal-icon";
import { motion } from "motion/react";
import { contactData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="w-full pt-12 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-6"
      >
        <h2 className="text-xl font-bold text-foreground">## Contact</h2>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          {contactData.description}
        </p>

        <div>
          <Button
            asChild
            className="rounded-md bg-foreground text-background font-mono text-sm hover:bg-foreground/90 mt-2"
          >
            <a href={`mailto:${contactData.email}`}>
              <SendHorizontalIcon size={14} className="mr-2" />
              Say Hello
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
