"use client";

import { useState } from "react";
import Image from "next/image";
import { siSpotify } from "simple-icons";
import { motion, useReducedMotion } from "motion/react";
import type { LastPlayed as LastPlayedTrack } from "@/lib/spotify";
import { enter } from "@/lib/motion";
import { cn, linkFocus } from "@/lib/utils";

const REST_SCALE = [0.4, 0.85, 0.55];

function Bars({ playing }: { playing: boolean }) {
  return (
    <span className="flex h-3 items-end gap-0.5" aria-hidden="true">
      {REST_SCALE.map((rest, index) => (
        <motion.span
          key={index}
          className="w-0.5 origin-bottom rounded-full bg-status"
          style={{ height: 12 }}
          initial={{ scaleY: rest }}
          animate={playing ? { scaleY: [rest, 1, 0.3, rest] } : { scaleY: rest }}
          transition={
            playing
              ? {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }
              : { duration: 0.15 }
          }
        />
      ))}
    </span>
  );
}

export default function LastPlayed({ track }: { track: LastPlayedTrack }) {
  const reduceMotion = useReducedMotion();
  const rowEnter = enter(reduceMotion, 0.4);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const playing = (hovered || focused) && !reduceMotion;

  return (
    <motion.a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Last played ${track.title} by ${track.artist}. Open on Spotify`}
      initial={rowEnter.hidden}
      animate={rowEnter.shown}
      transition={rowEnter.transition}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={cn(
        linkFocus,
        "grid w-full min-w-0 max-w-md items-center gap-x-3 rounded-md border border-border px-3 py-2 text-muted-foreground transition-colors hover:border-status/40 hover:text-foreground focus-visible:border-status/40",
        track.albumArt
          ? "grid-cols-[auto_minmax(0,1fr)_auto]"
          : "grid-cols-[minmax(0,1fr)_auto]",
      )}
    >
      {track.albumArt && (
        <span className="relative size-11 overflow-hidden rounded-md border border-border bg-muted">
          <Image
            src={track.albumArt}
            alt=""
            fill
            sizes="44px"
            className="object-cover outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
          />
        </span>
      )}
      <span className="min-w-0">
        <span className="font-mono text-xs leading-4">last played</span>
        <span className="block truncate font-display text-sm font-medium leading-5 text-foreground">
          {track.title}
        </span>
        <span className="block truncate text-xs leading-4">{track.artist}</span>
      </span>
      <span className="flex items-center gap-2.5">
        <Bars playing={playing} />
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-3.5 shrink-0"
          fill="currentColor"
        >
          <path d={siSpotify.path} />
        </svg>
      </span>
    </motion.a>
  );
}
