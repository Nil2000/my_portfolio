"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { heroData, socialLinks } from "@/data/portfolio";
import SocialIcon from "./social-icon";
import { Button } from "@/components/ui/button";

const fadeUp = (delay: number) =>
  ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }) as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-4 text-sm font-semibold tracking-widest text-indigo-500 uppercase"
        >
          {heroData.greeting}
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {heroData.name}
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mb-6 text-2xl font-semibold text-muted-foreground sm:text-3xl"
        >
          {heroData.tagline}
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <Button
            asChild
            className="h-12 rounded-full bg-indigo-500 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-600"
          >
            <a href={heroData.resumeUrl}>Download Résumé</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full px-8 text-sm font-semibold hover:border-indigo-500 hover:text-indigo-500"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-muted-foreground transition-colors hover:text-indigo-500"
            >
              <SocialIcon name={link.icon} size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
