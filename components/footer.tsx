"use client";

import { motion } from "motion/react";
import { socialLinks, siteConfig } from "@/data/portfolio";
import SocialIcon from "./social-icon";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <Separator className="mb-10" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-4"
      >
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-muted-foreground transition-colors hover:text-indigo-500"
            >
              <SocialIcon name={link.icon} size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
}
