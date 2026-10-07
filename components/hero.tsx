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

const commitLine = `commit ${heroData.hash} (HEAD -> main)`;
const nameLines = heroData.name.split(" ");

const iconLinks = socialLinks.filter((link) => link.icon !== "Github");
const github = socialLinks.find((link) => link.icon === "Github");

export default function Hero() {
  const reduceMotion = useReducedMotion();

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
              delay={180}
              duration={16}
              showCursor
              cursorStyle="block"
              className="font-mono text-xs leading-relaxed tracking-normal text-muted-foreground"
            >
              {commitLine}
            </TypingAnimation>
          )}
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            Author: {heroData.name}
          </p>
        </div>
        {heroData.status.available && (
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
                  }}
                />
              )}
              <span className="relative inline-flex size-2 rounded-full bg-status" />
            </span>
            {heroData.status.label}
          </Badge>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:mt-12 sm:gap-10">
        <div className="flex items-end justify-between gap-4">
          <h1 className="display-stretch font-display text-[clamp(2.25rem,9vw,6rem)] font-extrabold leading-[0.88] tracking-tight text-foreground">
            {nameLines.map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={reduceMotion ? false : { opacity: 0, y: "0.28em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {index === nameLines.length - 1 ? `${line}.` : line}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="relative size-16 shrink-0 overflow-hidden rounded-md border border-border bg-muted sm:size-24 md:size-32 lg:size-36"
          >
            <Image
              src={siteConfig.profileImage}
              alt={`${heroData.name} profile picture`}
              fill
              priority
              sizes="(min-width: 1024px) 144px, (min-width: 768px) 128px, 96px"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : 0.32,
          }}
          className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          <span className="font-mono font-normal text-muted-foreground">
            feat:{" "}
          </span>
          {heroData.role}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : 0.4,
          }}
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
