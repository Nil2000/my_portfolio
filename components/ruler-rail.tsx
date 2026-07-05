"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/portfolio";

const navSections = sections.filter((s) => s.showInNav);

// Major tick every N minor ticks
const TICKS_PER_SECTION = 8;
const totalTicks = navSections.length * TICKS_PER_SECTION;

export default function RulerRail() {
  const [activeId, setActiveId] = useState(navSections[0]?.id ?? "");

  useEffect(() => {
    // ponytail: scroll-based so late-mounting sections (e.g. contributions) are found
    const HEADER_OFFSET = 120;

    function updateActive() {
      let current = navSections[0]?.id ?? "";
      for (const { id } of navSections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          current = id;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const activeSection = navSections.find((s) => s.id === activeId);

  return (
    <div
      aria-hidden="true"
      className="relative h-full w-10 mr-6 select-none"
    >
      {/* Hairline */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

      {/* Tick marks — distributed over full content height */}
      {Array.from({ length: totalTicks }).map((_, i) => {
        const isMajor = i % TICKS_PER_SECTION === 0;
        return (
          <div
            key={i}
            className={`absolute left-3 h-px ${
              isMajor
                ? "w-3 bg-accent-brand/60"
                : "w-1.5 bg-muted-foreground/30"
            }`}
            style={{ top: `${(i / (totalTicks - 1)) * 100}%` }}
          />
        );
      })}

      {/* Sticky active-section index */}
      <div className="sticky top-32 flex justify-center">
        <span className="text-[10px] font-mono font-bold text-accent-brand tabular-nums leading-none bg-background px-0.5">
          {activeSection?.index ?? "01"}
        </span>
      </div>
    </div>
  );
}
