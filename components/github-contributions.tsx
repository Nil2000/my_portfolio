"use client";

import Link from "next/link";
import GithubIcon from "@/components/ui/github-icon";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/section-header";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsData {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

const LEVEL_LABELS = [
  "No contributions",
  "1–3 contributions",
  "4–6 contributions",
  "7–9 contributions",
  "10+ contributions",
] as const;

function getContributionColor(level: number): string {
  // Ultramarine ramp — matches accent-brand hue
  const colors = [
    "bg-accent-brand/10",
    "bg-accent-brand/30",
    "bg-accent-brand/50",
    "bg-accent-brand/75",
    "bg-accent-brand",
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

export default function GithubContributions() {
  const [data, setData] = useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/nil2000?y=last",
        );
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (
    loading ||
    !data ||
    !data.contributions ||
    data.contributions.length === 0
  ) {
    return null;
  }

  const contributions = data.contributions;
  const weeks: (ContributionDay | null)[][] = [];
  let currentWeek: (ContributionDay | null)[] = [];

  // Get first day's day of the week (0 = Sunday, 6 = Saturday)
  const firstDate = new Date(contributions[0].date);
  // Add timezone offset to prevent date shifting
  const localFirstDate = new Date(
    firstDate.getTime() + firstDate.getTimezoneOffset() * 60000,
  );
  const firstDayOfWeek = localFirstDate.getDay();

  // Pad the first week
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

  // Pad the last week
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
    if (firstValidDay) {
      const date = new Date(firstValidDay.date);
      const localDate = new Date(
        date.getTime() + date.getTimezoneOffset() * 60000,
      );
      const month = localDate.getMonth();
      if (month !== currentMonth) {
        currentMonth = month;
        months.push({ label: monthNames[month], index: weekIndex });
      }
    }
  });

  return (
    <section id="contributions" className="w-full">
      <SectionHeader id="contributions" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mb-5 -mt-4"
      >
        <p className="text-xs font-mono text-muted-foreground tabular-nums">
          {data.total.lastYear.toLocaleString()} contributions in the last year
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full pb-4"
      >
        <div className="flex w-full gap-[3px]">
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="flex min-w-0 flex-1 flex-col gap-[3px]"
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
                        className={`aspect-square w-full rounded-sm ${getContributionColor(
                          day.level,
                        )} transition-colors cursor-default hover:ring-1 hover:ring-foreground`}
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

        <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <Link
            href="https://github.com/nil2000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <GithubIcon size={16} />
            github.com/nil2000
          </Link>
          <div className="flex items-center gap-2">
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
