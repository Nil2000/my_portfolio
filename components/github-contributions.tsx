"use client";

import Link from "next/link";
import GithubIcon from "@/components/ui/github-icon";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import SectionHeader from "@/components/section-header";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ContributionDay, ContributionsData } from "@/lib/github";
import { enter } from "@/lib/motion";
import { linkFocus } from "@/lib/utils";

const LEVEL_LABELS = [
  "No contributions",
  "1–3 contributions",
  "4–6 contributions",
  "7–9 contributions",
  "10+ contributions",
] as const;

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getContributionColor(level: number): string {
  const colors = [
    "bg-status/10",
    "bg-status/30",
    "bg-status/50",
    "bg-status/75",
    "bg-status",
  ];
  return colors[level] ?? colors[0];
}

function formatContributionLabel(day: ContributionDay): string {
  // ponytail: date-only strings parse as UTC; pin local midnight to avoid day shift
  const date = new Date(`${day.date}T00:00:00`);
  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (day.count === 0) return `No contributions on ${formatted}`;
  return `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatted}`;
}

function toLocalDate(dateString: string) {
  const date = new Date(dateString);
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
}

function buildWeeks(contributions: ContributionDay[]) {
  const weeks: (ContributionDay | null)[][] = [];
  let currentWeek: (ContributionDay | null)[] = [];
  const firstDayOfWeek = toLocalDate(contributions[0].date).getDay();

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }

  contributions.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  const months: { label: string; index: number }[] = [];
  let currentMonth = -1;
  weeks.forEach((week, weekIndex) => {
    const firstValidDay = week.find((day) => day !== null);
    if (!firstValidDay) return;
    const month = toLocalDate(firstValidDay.date).getMonth();
    if (month !== currentMonth) {
      currentMonth = month;
      months.push({ label: monthNames[month], index: weekIndex });
    }
  });

  return { weeks, months };
}

export default function GithubContributions({
  data,
}: {
  data: ContributionsData | null;
}) {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hasData = Boolean(data?.contributions?.length);
  const countEnter = enter(reduceMotion);
  const gridEnter = enter(reduceMotion, 0.1);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Layout can settle a frame later; scroll only when the row actually overflows.
    const scrollToLatest = () => {
      if (el.scrollWidth > el.clientWidth) el.scrollLeft = el.scrollWidth;
    };
    scrollToLatest();
    const frame = requestAnimationFrame(scrollToLatest);
    return () => cancelAnimationFrame(frame);
  }, [hasData]);

  if (!data || !hasData) {
    return (
      <section id="contributions" className="w-full scroll-mt-24">
        <SectionHeader id="contributions" />
        <Link
          href="https://github.com/nil2000"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground ${linkFocus}`}
        >
          <GithubIcon size={16} />
          github.com/nil2000
        </Link>
      </section>
    );
  }

  const { weeks, months } = buildWeeks(data.contributions);

  return (
    <section id="contributions" className="w-full scroll-mt-24">
      <SectionHeader id="contributions" />

      <motion.div
        initial={countEnter.hidden}
        whileInView={countEnter.shown}
        viewport={{ once: true }}
        transition={countEnter.transition}
        className="mb-5 -mt-4"
      >
        <p className="font-mono text-xs text-muted-foreground tabular-nums">
          {reduceMotion ? (
            data.total.lastYear.toLocaleString()
          ) : (
            <NumberTicker
              value={data.total.lastYear}
              className="font-mono text-xs text-muted-foreground tabular-nums"
            />
          )}{" "}
          contributions in the last year
        </p>
      </motion.div>

      <motion.div
        initial={gridEnter.hidden}
        whileInView={gridEnter.shown}
        viewport={{ once: true }}
        transition={gridEnter.transition}
        className="w-full pb-4"
      >
        <div
          ref={scrollerRef}
          className="max-sm:overflow-x-auto max-sm:overscroll-x-contain sm:overflow-x-clip"
        >
          <div className="max-sm:min-w-160">
            <div className="relative mb-1 h-4" aria-hidden="true">
              {months.map((month) => (
                <span
                  key={`${month.label}-${month.index}`}
                  className="absolute top-0 font-mono text-[10px] text-muted-foreground"
                  style={{ left: `${(month.index / weeks.length) * 100}%` }}
                >
                  {month.label}
                </span>
              ))}
            </div>
            {/* aria-hidden: decorative heatmap; accessible summary is the count above and the GitHub link below */}
            <div className="flex w-full gap-0.75" aria-hidden="true">
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex min-w-0 flex-1 flex-col gap-0.75"
                >
                  {week.map((day, dayIndex) => {
                    if (!day) {
                      return (
                        <div
                          key={`empty-${dayIndex}`}
                          className="aspect-square w-full rounded-sm bg-transparent"
                        />
                      );
                    }
                    return (
                      <Tooltip key={day.date}>
                        <TooltipTrigger asChild>
                          <div
                            className={`aspect-square w-full cursor-default rounded-sm transition-colors hover:ring-1 hover:ring-status-ink ${getContributionColor(
                              day.level,
                            )}`}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="top" sideOffset={4}>
                          {formatContributionLabel(day)}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <Link
            href="https://github.com/nil2000"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-sm transition-colors hover:text-foreground ${linkFocus}`}
          >
            <GithubIcon size={16} />
            github.com/nil2000
          </Link>
          <div className="flex items-center gap-2" aria-hidden="true">
            <span>less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <Tooltip key={level}>
                  <TooltipTrigger asChild>
                    <div
                      className={`h-3 w-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={4}>
                    {LEVEL_LABELS[level]}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <span>more</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
