"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  contactData,
  heroData,
  siteConfig,
  socialLinks,
} from "@/data/portfolio";
import SocialIcon from "./social-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

const commitLine = `commit ${heroData.hash}\n(HEAD -> main)`;

const iconLinks = socialLinks.filter(
  (link) => link.icon !== "Github" && link.icon !== "Mail",
);
const github = socialLinks.find((link) => link.icon === "Github");

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="flex scroll-mt-24 flex-col gap-8 pt-1">
      <div className="flex flex-col gap-1">
        {reduceMotion ? (
          <p className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {commitLine}
          </p>
        ) : (
          <TypingAnimation
            as="p"
            startOnView={false}
            delay={180}
            duration={16}
            showCursor
            cursorStyle="block"
            className="font-mono text-xs leading-relaxed tracking-normal whitespace-pre-wrap text-muted-foreground"
          >
            {commitLine}
          </TypingAnimation>
        )}
        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
          Author: {heroData.name} &lt;{contactData.email}&gt;
        </p>
        {heroData.status.available && (
          <Badge variant="success" className="mt-2 w-fit gap-1.5">
            <span className="relative flex size-2">
              {!reduceMotion && (
                <motion.span
                  className="absolute inline-flex size-full rounded-full bg-status"
                  animate={{ scale: [1, 2.2, 2.2], opacity: [0.55, 0, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
              <span className="relative inline-flex size-2 rounded-full bg-status" />
            </span>
            {heroData.status.label}
          </Badge>
        )}
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.12 }}
        className="flex flex-col gap-6"
      >
        <div className="flex max-w-xl items-start justify-between gap-4">
          <h1 className="display-stretch font-display text-[2.65rem] font-extrabold leading-[0.9] tracking-tight text-foreground sm:text-6xl">
            {heroData.tagline.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="relative size-16 shrink-0 overflow-hidden rounded-md border border-border bg-muted sm:size-28">
            <Image
              src={siteConfig.profileImage}
              alt={`${heroData.name} profile picture`}
              fill
              priority
              sizes="112px"
              className="object-cover"
            />
          </div>
        </div>

        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {heroData.description}
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Button asChild className="h-8 px-3 font-mono text-xs">
              <a href={`mailto:${contactData.email}`}>Email me</a>
            </Button>
            {github && (
              <Button
                asChild
                variant="outline"
                className="h-8 px-3 font-mono text-xs"
              >
                <Link
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
            )}
          </div>

          <div className="flex items-center gap-1">
            {iconLinks.map((link) => (
              <Tooltip key={link.platform}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className={`p-2 text-muted-foreground transition-colors hover:text-foreground ${linkFocus}`}
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
        </div>
      </motion.div>
    </section>
  );
}
