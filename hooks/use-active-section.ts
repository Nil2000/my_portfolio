"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/portfolio";

const navSections = sections.filter((section) => section.showInNav);
const HEADER_OFFSET = 112;

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function updateActive() {
      let current: string | null = null;
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

  return activeId;
}
