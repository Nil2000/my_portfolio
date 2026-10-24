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

  useEffect(() => {
    let cancelled = false;
    recordVisit()
      .then((data) => {
        if (!cancelled && typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className="font-mono text-xs text-muted-foreground tabular-nums">
      {reduceMotion ? (
        count.toLocaleString()
      ) : (
        <NumberTicker
          value={count}
          className="font-mono text-xs text-muted-foreground tabular-nums"
        />
      )}{" "}
      visitors
    </p>
  );
}
