"use client";

import { motion } from "motion/react";
import { heroData, socialLinks } from "@/data/portfolio";
import SocialIcon from "./social-icon";
import { Button } from "@/components/ui/button";

const fadeUp = (delay: number) =>
  ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay, ease: "easeOut" as const },
  }) as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-start justify-center pt-32 pb-8"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full">
          {/* Square Image Box (Avatar) */}
          <motion.div
            {...fadeUp(0.1)}
            className="w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-lg bg-muted border border-border flex items-center justify-center overflow-hidden"
          >
            {/* Using a placeholder character or user initials if image not present */}
            <span className="text-4xl text-muted-foreground font-bold">
              {heroData.name.charAt(0)}
            </span>
          </motion.div>

          {/* Text Lines */}
          <div className="flex flex-col justify-center gap-3 text-center sm:text-left mt-2 sm:mt-4">
            <motion.h1
              {...fadeUp(0.2)}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
            >
              {heroData.name}
            </motion.h1>
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg text-muted-foreground"
            >
              {heroData.tagline}
            </motion.p>
            <motion.p
              {...fadeUp(0.4)}
              className="text-sm text-muted-foreground max-w-md"
            >
              Building tools for the web.
            </motion.p>
          </div>
        </div>

        {/* Links Section */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center sm:justify-start pt-6 border-t border-border/50"
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="p-2 border border-border rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <SocialIcon name={link.icon} size={20} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
            <Button
              asChild
              variant="outline"
              className="rounded-md border-border font-mono text-sm hover:bg-muted"
            >
              <a href={heroData.resumeUrl}>resume</a>
            </Button>
            <Button
              asChild
              className="rounded-md bg-foreground text-background font-mono text-sm hover:bg-foreground/90"
            >
              <a href="#contact">contact</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
