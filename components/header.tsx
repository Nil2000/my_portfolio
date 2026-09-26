"use client";

import { useState } from "react";
import Link from "next/link";
import UnorderedListIcon from "@/components/ui/unordered-list-icon";
import XIcon from "@/components/ui/x-icon";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { sections, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navSections = sections.filter((section) => section.showInNav);
const repoName = `${siteConfig.name.split(" ")[0].toLowerCase()}/portfolio`;

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeId = useActiveSection();
  const active = navSections.find((section) => section.id === activeId);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href="#hero"
            className={`shrink-0 font-mono text-sm font-medium tracking-tight text-foreground ${linkFocus}`}
          >
            {repoName.split("/")[0]}
            <span className="text-muted-foreground">/</span>
            portfolio
          </Link>

          <p className="hidden min-w-0 items-center gap-1.5 truncate font-mono text-xs text-muted-foreground lg:flex">
            <span>main</span>
            {active && (
              <>
                <span aria-hidden="true">&gt;</span>
                <span aria-hidden="true">{active.hash}</span>
                <span className="text-status-ink">{active.title}</span>
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-4 md:flex">
            {navSections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-mono text-xs lowercase transition-colors hover:text-foreground ${linkFocus} ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {section.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground hover:text-foreground md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <XIcon size={16} /> : <UnorderedListIcon size={16} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={4}>
              {mobileOpen ? "Close menu" : "Open menu"}
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <p className="px-4 pt-3 font-mono text-xs text-muted-foreground">
              <span>main</span>
              {active && (
                <>
                  <span aria-hidden="true"> &gt; </span>
                  <span className="text-status-ink">{active.title}</span>
                </>
              )}
            </p>
            <ul className="flex flex-col gap-1 px-4 py-3 font-mono">
              {navSections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    onClick={() => setMobileOpen(false)}
                    aria-current={section.id === activeId ? "true" : undefined}
                    className={`flex items-center gap-3 py-2 text-sm lowercase transition-colors hover:text-foreground ${linkFocus} ${
                      section.id === activeId
                        ? "text-status-ink"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-16 text-xs text-muted-foreground"
                    >
                      {section.hash}
                    </span>
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
