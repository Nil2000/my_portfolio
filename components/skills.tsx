"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const groupVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Skills
          </p>
          <h3 className="text-3xl font-bold text-foreground">
            Technologies I work with
          </h3>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={groupVariant}>
              <h4 className="mb-3 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                {group.category}
              </h4>
              <motion.div variants={stagger} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.div key={item} variants={badgeVariant}>
                    <Badge
                      variant="outline"
                      className="cursor-default transition-colors hover:border-indigo-400 hover:text-indigo-500"
                    >
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
