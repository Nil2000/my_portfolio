"use client";

import Image from "next/image";
import { siSpotify } from "simple-icons";
import { motion, useReducedMotion } from "motion/react";
import type { LastPlayed as LastPlayedTrack } from "@/lib/spotify";
import { enter } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";

export default function LastPlayed({ track }: { track: LastPlayedTrack }) {
  const reduceMotion = useReducedMotion();
  const rowEnter = enter(reduceMotion, 0.4);

  return (
    <motion.a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={rowEnter.hidden}
      animate={rowEnter.shown}
      transition={rowEnter.transition}
      className={`grid w-fit max-w-full items-center gap-x-3 text-muted-foreground transition-colors hover:text-foreground ${
        track.albumArt
          ? "grid-cols-[auto_minmax(0,1fr)_auto]"
          : "grid-cols-[minmax(0,1fr)_auto]"
      } ${linkFocus}`}
    >
      {track.albumArt && (
        <span className="relative size-8 overflow-hidden rounded-md border border-border bg-muted">
          <Image
            src={track.albumArt}
            alt=""
            fill
            sizes="32px"
            className="object-cover outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
          />
        </span>
      )}
      <span className="min-w-0 text-sm leading-5">
        <span className="font-mono text-xs">last played</span>{" "}
        <span className="text-foreground">{track.title}</span>{" "}
        <span>— {track.artist}</span>
      </span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-3.5 shrink-0"
        fill="currentColor"
      >
        <path d={siSpotify.path} />
      </svg>
    </motion.a>
  );
}
