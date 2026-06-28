"use client";

import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
        &copy; {new Date().getFullYear()} {siteConfig.name.split(" ")[0].toLowerCase()}
      </p>
      <p className="text-xs font-mono text-muted-foreground">
        built with next.js &amp; tailwind
      </p>
    </footer>
  );
}
