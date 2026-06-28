"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { heroData, siteConfig, socialLinks } from "@/data/portfolio";
import SocialIcon from "./social-icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = (delay: number) =>
  ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }) as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="flex flex-col gap-10 pt-4 pb-2">
      {/* Top row: name + avatar */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
        <div className="flex flex-col gap-4">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.05)}
            className="text-xs font-mono text-muted-foreground uppercase tracking-widest"
          >
            {heroData.greeting}
          </motion.p>

          {/* Display name */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl sm:text-5xl font-bold tracking-tighter text-foreground leading-none"
          >
            {heroData.name}
          </motion.h1>

          {/* Status badge */}
          {heroData.status.available && (
            <motion.div {...fadeUp(0.22)}>
              <Badge variant="success" className="gap-1.5 w-fit">
                <span className="relative flex h-2 w-2">
                  {!reduceMotion && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-brand opacity-60" />
                  )}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-brand" />
                </span>
                {heroData.status.label}
              </Badge>
            </motion.div>
          )}

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-base text-muted-foreground max-w-sm"
          >
            {heroData.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeUp(0.38)}
            className="text-sm text-muted-foreground max-w-md leading-relaxed"
          >
            {heroData.description}
          </motion.p>
        </div>

        {/* Avatar */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative h-28 w-28 shrink-0 overflow-hidden rounded-md border border-border bg-muted self-start sm:self-auto"
        >
          <Image
            src={siteConfig.profileImage}
            alt={`${heroData.name} profile picture`}
            fill
            priority
            sizes="112px"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Meta grid — data-driven from heroData.meta */}
      <motion.div
        {...fadeUp(0.45)}
        className="grid grid-cols-1 sm:grid-cols-3 border border-border rounded-md divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden"
      >
        {heroData.meta.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1 px-4 py-3">
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
              {label}
            </span>
            <span className="text-sm text-foreground font-mono">{value}</span>
          </div>
        ))}
      </motion.div>

      {/* Actions + socials */}
      <motion.div
        {...fadeUp(0.55)}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="rounded-md bg-foreground text-background font-mono text-xs h-8 px-4 hover:bg-foreground/85"
          >
            <a href="#contact">get in touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-md font-mono text-xs h-8 px-4 hover:bg-muted"
          >
            <a href={heroData.resumeUrl}>resume</a>
          </Button>
        </div>

        <div className="flex items-center gap-1 sm:ml-auto">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="p-2 text-muted-foreground transition-colors hover:text-accent-brand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            >
              <SocialIcon name={link.icon} size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
