"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

let visit: Promise<{ count: number | null }> | null = null;

function recordVisit() {
  visit ??= fetch("/api/visitors", { method: "POST" })
    .then(async (res) => {
      if (!res.ok) throw new Error("visit failed");
      return res.json() as Promise<{ count: number | null }>;
    })
    .catch((error: unknown) => {
      visit = null;
      throw error;
    });
  return visit;
}

export default function VisitorCount() {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState<number | null>(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let cancelled = false;
    recordVisit()
      .then((data) => {
        if (cancelled) return;
        if (typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setSettled(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (settled && count === null) return null;

  return (
    <p
      className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground"
      aria-live="polite"
      aria-atomic="true"
      aria-label={
        count === null ? undefined : `${count.toLocaleString()} unique visitors`
      }
    >
      <span aria-hidden="true" className="inline-flex items-center gap-2">
        <span
          className={`size-1.5 shrink-0 rounded-full ${
            count === null ? "bg-border" : "bg-status"
          }`}
        />
        {count === null ? (
          <span className="inline-block h-4 w-16 animate-pulse rounded-sm bg-muted" />
        ) : reduceMotion ? (
          <>
            <span className="tabular-nums text-foreground">
              {count.toLocaleString()}
            </span>
            <span>unique</span>
          </>
        ) : (
          <>
            <NumberTicker
              value={count}
              startValue={Math.max(0, count - 24)}
              className="font-mono text-xs text-foreground tabular-nums tracking-normal dark:text-foreground"
            />
            <span>unique</span>
          </>
        )}
      </span>
    </p>
  );
}
