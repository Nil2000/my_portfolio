"use client";

import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground font-mono">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.name.toLowerCase()}
      </p>
      <p className="mt-2 sm:mt-0">built with next.js & tailwind</p>
    </footer>
  );
}
