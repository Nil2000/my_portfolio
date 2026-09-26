"use client";

import { Tag } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/section-header";
import { chipVariant, listItem, listStagger } from "@/lib/motion";

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="w-full scroll-mt-24">
      <SectionHeader id="skills" />

      <motion.div
        variants={listStagger}
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            variants={listItem}
            className={`grid gap-3 py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-8 ${
              idx !== 0 ? "border-t border-border" : ""
            }`}
          >
            <h3 className="pt-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              {group.category}
            </h3>
            <motion.div variants={listStagger} className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.div key={item} variants={chipVariant}>
                  <Badge
                    variant="outline"
                    className="h-6 rounded-md border-border bg-card px-2 font-mono text-[11px] font-normal text-foreground"
                  >
                    <Tag className="text-muted-foreground" />
                    {item.toLowerCase()}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
