"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Filter out 'About' link if it exists
  const links = navLinks.filter((link) => link.label !== "About");

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-3xl w-full items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-base font-bold tracking-tight text-foreground font-mono"
        >
          {siteConfig.name.split(" ")[0].toLowerCase()}
          <span className="text-muted-foreground">_</span>
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  className="text-xs font-mono text-muted-foreground transition-colors hover:text-foreground lowercase"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col gap-4 overflow-hidden border-t border-border bg-background px-6 py-6 md:hidden font-mono"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lowercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
