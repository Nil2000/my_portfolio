"use client";

import { Send } from "lucide-react";
import { motion } from "motion/react";
import { contactData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase"
        >
          Contact
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="mb-6 text-3xl font-bold text-foreground"
        >
          {contactData.heading}
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="mb-10 text-base leading-relaxed text-muted-foreground"
        >
          {contactData.description}
        </motion.p>
        <motion.div variants={fadeUp}>
          <Button
            asChild
            className="h-14 rounded-full bg-indigo-500 px-10 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600 hover:shadow-indigo-500/40"
          >
            <a href={`mailto:${contactData.email}`}>
              <Send size={16} />
              Say Hello
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
