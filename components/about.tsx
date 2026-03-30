"use client";

import { motion } from "motion/react";
import { aboutData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            About Me
          </p>
          <h3 className="text-3xl font-bold text-foreground">
            A bit about myself
          </h3>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4 md:col-span-3"
          >
            {aboutData.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeLeft}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 md:col-span-2"
          >
            {aboutData.highlights.map((h) => (
              <motion.div key={h.label} variants={fadeRight}>
                <Card className="text-center">
                  <CardContent className="flex flex-col items-center py-6">
                    <span className="text-3xl font-extrabold text-indigo-500">
                      {h.value}
                    </span>
                    <span className="mt-1 text-xs font-medium text-muted-foreground">
                      {h.label}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
