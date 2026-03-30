"use client";

import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-muted/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Experience
          </p>
          <h3 className="text-3xl font-bold text-foreground">
            Where I&apos;ve worked
          </h3>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative border-l-2 border-border pl-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariant}
              className={`relative ${idx === experiences.length - 1 ? "pb-0" : "pb-12"}`}
            >
              {/* Timeline dot */}
              <span className="absolute -left-9.25 flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-500 bg-background">
                <Briefcase size={16} className="text-indigo-500" />
              </span>

              <p className="mb-1 text-xs font-semibold tracking-wide text-indigo-500 uppercase">
                {exp.period}
              </p>
              <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-indigo-500"
              >
                @ {exp.company}
              </a>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
