import type { Variants } from "motion/react";

export const listStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/** Opacity cross-fade for `prefers-reduced-motion`. No translate, scale, or blur. */
export const listItemReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const chipVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
};

export function enter(reduceMotion: boolean | null, delay = 0) {
  return {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 12, filter: "blur(4px)" },
    shown: reduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: {
      duration: 0.3,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  };
}
