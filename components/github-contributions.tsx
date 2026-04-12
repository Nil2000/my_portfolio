"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function getContributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

function getContributionColor(level: number, isDark: boolean): string {
  const colors = isDark
    ? [
        "bg-[#161b22]",
        "bg-[#0e4429]",
        "bg-[#006d32]",
        "bg-[#26a641]",
        "bg-[#39d353]",
      ]
    : [
        "bg-[#ebedf0]",
        "bg-[#9be9a8]",
        "bg-[#40c463]",
        "bg-[#30a14e]",
        "bg-[#216e39]",
      ];
  return colors[level] || colors[0];
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
    <section id="contributions" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Open Source
          </p>
          <h3 className="text-3xl font-bold text-foreground">
            GitHub Contributions
          </h3>
          <p className="mt-2 text-muted-foreground">
            {data.total.lastYear.toLocaleString()} contributions in the last
            year
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[750px]">
              <div className="flex text-xs text-muted-foreground mb-2">
                <div className="w-8" />
                {months.map((m, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center"
                    style={{
                      marginLeft: i === 0 ? `${m.index * 14}px` : undefined,
                    }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>

              <div className="flex">
                <div className="flex flex-col justify-around text-xs text-muted-foreground w-8 pr-2">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="flex gap-[3px]">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((day, dayIndex) => {
                        if (!day) {
                          return (
                            <div
                              key={`empty-${dayIndex}`}
                              className="w-[10px] h-[10px] rounded-sm bg-transparent"
                            />
                          );
                        }
                        return (
                          <div
                            key={dayIndex}
                            className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(
                              day.level,
                              false,
                            )} dark:${getContributionColor(day.level, true)} transition-colors hover:ring-2 hover:ring-indigo-500 hover:ring-offset-1 cursor-pointer`}
                            title={`${day.date}: ${day.count} contribution${
                              day.count !== 1 ? "s" : ""
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-[3px]">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(
                        level,
                        false,
                      )} dark:${getContributionColor(level, true)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={`https://github.com/nil2000`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              View full profile on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
