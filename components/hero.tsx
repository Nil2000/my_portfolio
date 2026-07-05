"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { heroData, siteConfig, socialLinks } from "@/data/portfolio";
import SocialIcon from "./social-icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      {/* Top row: annotation block + avatar */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
        <div className="flex flex-col gap-3">
          {/* Mono annotation row: greeting · name */}
          <motion.div
            {...fadeUp(0.05)}
            className="flex items-center gap-2 flex-wrap"
          >
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {heroData.greeting}
            </span>
            <span className="text-xs font-mono text-muted-foreground/40">·</span>
            <span className="text-sm font-mono font-semibold text-foreground">
              {heroData.name}
            </span>
          </motion.div>

          {/* Status badge */}
          {heroData.status.available && (
            <motion.div {...fadeUp(0.12)}>
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

          {/* Display headline — the thesis */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mt-1"
          >
            {heroData.tagline}
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.32)}
            className="text-base text-muted-foreground max-w-md leading-relaxed font-body"
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

      {/* Actions + socials */}
      <motion.div
        {...fadeUp(0.42)}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="rounded-md bg-accent-brand text-background font-mono text-xs h-8 px-4 hover:bg-accent-brand/85"
          >
            <Link href="#contact">get in touch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-md font-mono text-xs h-8 px-4 hover:bg-muted border-border"
          >
            <Link href={heroData.resumeUrl}>resume</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 sm:ml-auto">
          {socialLinks.map((link) => (
            <Tooltip key={link.platform}>
              <TooltipTrigger asChild>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="p-2 text-muted-foreground transition-colors hover:text-accent-brand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                >
                  <SocialIcon name={link.icon} size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={4}>
                {link.platform}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
