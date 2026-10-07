"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { contactData } from "@/data/portfolio";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { enter } from "@/lib/motion";

type CopyState = "idle" | "copied" | "failed";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<number | null>(null);
  const intro = enter(reduceMotion);
  const iconSwap = reduceMotion
    ? { duration: 0.15, ease: "easeOut" as const }
    : { type: "spring" as const, duration: 0.3, bounce: 0 };

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    };
  }, []);

  function scheduleReset() {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 2000);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    scheduleReset();
  }

  const label =
    copyState === "copied"
      ? "Copied"
      : copyState === "failed"
        ? "Copy failed"
        : "Copy email";

  return (
    <section id="contact" className="w-full scroll-mt-24 pb-4">
      <SectionHeader id="contact" />

      <motion.div
        initial={intro.hidden}
        whileInView={intro.shown}
        viewport={{ once: true }}
        transition={intro.transition}
        className="flex flex-col gap-6"
      >
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          {contactData.description}
        </p>

        <div className="flex flex-col items-start gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            $ git push --to
          </p>
          <div className="flex items-center gap-2">
            <Button asChild className="h-8 px-3 font-mono text-xs">
              <a href={`mailto:${contactData.email}`}>Email me</a>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-8 px-3 font-mono text-xs"
              onClick={copyEmail}
            >
              <span className="inline-grid">
                <span
                  aria-hidden="true"
                  className="invisible col-start-1 row-start-1 inline-flex items-center gap-1.5"
                >
                  <Copy />
                  Copy failed
                </span>
                <span className="col-start-1 row-start-1 inline-flex items-center justify-center gap-1.5">
                  <span className="relative size-4">
                    <AnimatePresence initial={false}>
                      <motion.span
                        key={copyState === "copied" ? "check" : "copy"}
                        className="absolute inset-0 inline-flex items-center justify-center"
                        initial={
                          reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
                        }
                        animate={
                          reduceMotion
                            ? { opacity: 1 }
                            : { opacity: 1, scale: 1, filter: "blur(0px)" }
                        }
                        exit={
                          reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
                        }
                        transition={iconSwap}
                      >
                        {copyState === "copied" ? <Check /> : <Copy />}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  {label}
                </span>
              </span>
            </Button>
          </div>
          <span className="sr-only" aria-live="polite">
            {copyState === "copied"
              ? "Email copied"
              : copyState === "failed"
                ? "Could not copy email"
                : ""}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
