"use client";

import { useEffect, useState } from "react";
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
import { enter } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TYPE_MS = 16;
const COMMIT_DELAY_MS = 180;
const LINE_BEAT_MS = 140;

const commitLine = `commit ${heroData.hash} (HEAD -> main)`;
const authorLine = `Author: ${heroData.name}`;
const nameLines = heroData.name.split(" ");

// ponytail: TypingAnimation paints char 1 at `delay`, then one char every TYPE_MS.
// If that timing changes, this handoff drifts — read the delay branch in typing-animation.tsx.
function lineDone(text: string, startMs: number) {
  return startMs + Math.max(Array.from(text).length - 1, 0) * TYPE_MS;
}

const authorStartMs = lineDone(commitLine, COMMIT_DELAY_MS) + LINE_BEAT_MS;

const iconLinks = socialLinks.filter((link) => link.icon !== "Github");
const github = socialLinks.find((link) => link.icon === "Github");

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const photoEnter = enter(reduceMotion, 0.1);
  const roleEnter = enter(reduceMotion, 0.2);
  const actionsEnter = enter(reduceMotion, 0.3);
  const badgeEnter = enter(reduceMotion, authorStartMs / 1000);
  const [authorReady, setAuthorReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setTimeout(() => setAuthorReady(true), authorStartMs);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  return (
    <section id="hero" className="flex scroll-mt-24 flex-col pt-1">
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
        <div className="flex flex-col gap-1">
          {reduceMotion ? (
            <p className="font-mono text-xs leading-relaxed text-muted-foreground">
              {commitLine}
            </p>
          ) : (
            <TypingAnimation
              as="p"
              startOnView={false}
              delay={COMMIT_DELAY_MS}
              duration={TYPE_MS}
              showCursor
              cursorStyle="block"
              className="font-mono text-xs leading-relaxed tracking-normal text-muted-foreground"
            >
              {commitLine}
            </TypingAnimation>
          )}
          <p className="grid font-mono text-xs leading-relaxed text-muted-foreground">
            <span className="sr-only">{authorLine}</span>
            <span aria-hidden="true" className="invisible col-start-1 row-start-1">
              {authorLine}▌
            </span>
            {reduceMotion ? (
              <span aria-hidden="true" className="col-start-1 row-start-1">
                {authorLine}
              </span>
            ) : (
              authorReady && (
                <TypingAnimation
                  as="span"
                  aria-hidden="true"
                  startOnView={false}
                  duration={TYPE_MS}
                  showCursor
                  cursorStyle="block"
                  className="col-start-1 row-start-1 font-mono text-xs leading-relaxed tracking-normal text-muted-foreground"
                >
                  {authorLine}
                </TypingAnimation>
              )
            )}
          </p>
        </div>
        {heroData.status.available && (
          <motion.div
            initial={badgeEnter.hidden}
            animate={badgeEnter.shown}
            transition={badgeEnter.transition}
          >
            <Badge variant="success" className="w-fit gap-1.5">
              <span className="relative flex size-2">
                {!reduceMotion && (
                  <motion.span
                    className="absolute inline-flex size-full rounded-full bg-status"
                    animate={{ scale: [1, 2.2, 2.2], opacity: [0.55, 0, 0] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: authorStartMs / 1000 + badgeEnter.transition.duration,
                    }}
                  />
                )}
                <span className="relative inline-flex size-2 rounded-full bg-status" />
              </span>
              {heroData.status.label}
            </Badge>
          </motion.div>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:mt-12 sm:gap-10">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* ponytail: size = 2 name lines (font-size × 2 × 0.88 line-height) so photo matches the name block height */}
          <motion.div
            initial={photoEnter.hidden}
            animate={photoEnter.shown}
            transition={photoEnter.transition}
            className="relative aspect-square w-[clamp(3.96rem,15.84vw,10.56rem)] shrink-0 overflow-hidden rounded-md border border-border bg-muted"
          >
            <Image
              src={siteConfig.profileImage}
              alt={`${heroData.name} profile picture`}
              fill
              priority
              sizes="(min-width: 1024px) 169px, 16vw"
              className="object-cover outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
            />
          </motion.div>
          <h1 className="display-stretch font-display text-[clamp(2.25rem,9vw,6rem)] font-extrabold leading-[0.88] tracking-tight text-foreground">
            {nameLines.map((line, index) => {
              const nameEnter = enter(reduceMotion, index * 0.1);
              return (
                <motion.span
                  key={line}
                  className="block"
                  initial={nameEnter.hidden}
                  animate={nameEnter.shown}
                  transition={nameEnter.transition}
                >
                  {index === nameLines.length - 1 ? `${line}.` : line}
                </motion.span>
              );
            })}
          </h1>
        </div>

        <motion.p
          initial={roleEnter.hidden}
          animate={roleEnter.shown}
          transition={roleEnter.transition}
          className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          <span className="font-mono font-normal text-muted-foreground">
            feat:{" "}
          </span>
          {heroData.role}
        </motion.p>

        <motion.div
          initial={actionsEnter.hidden}
          animate={actionsEnter.shown}
          transition={actionsEnter.transition}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            {heroData.description}
          </p>

          <div className="flex shrink-0 items-center gap-2">
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
      </div>
    </section>
  );
}
