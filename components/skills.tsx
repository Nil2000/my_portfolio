"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const groupVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
          ## Skills
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={groupVariant}
            className="flex flex-col gap-3 border border-border p-4 rounded-md"
          >
            <h3 className="text-sm font-mono font-bold text-foreground lowercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="font-mono text-xs cursor-default bg-transparent text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
