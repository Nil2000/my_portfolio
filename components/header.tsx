"use client";

import { useState } from "react";
import UnorderedListIcon from "@/components/ui/unordered-list-icon";
import XIcon from "@/components/ui/x-icon";
import { motion, AnimatePresence } from "motion/react";
import { sections, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

const navSections = sections.filter((s) => s.showInNav);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-3xl w-full items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-foreground font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
        >
          {siteConfig.name.split(" ")[0].toLowerCase()}
          <span className="text-accent-brand">_</span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {navSections.map((section, i) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
              >
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-accent-brand lowercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm px-0.5"
                >
                  <span className="tabular-nums text-muted-foreground/50 text-[10px]">
                    {section.index}
                  </span>
                  {section.navLabel.toLowerCase()}
                </a>
              </motion.li>
            ))}
          </ul>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground h-7 w-7"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon size={16} /> : <UnorderedListIcon size={16} />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-border bg-background px-6 py-4 md:hidden font-mono"
          >
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-accent-brand lowercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm"
                >
                  <span className="tabular-nums text-muted-foreground/40 text-xs w-5">
                    {section.index}
                  </span>
                  {section.navLabel.toLowerCase()}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
