"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button";

const mounted = () => true;
const unmounted = () => false;
const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(subscribe, mounted, unmounted);
  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  if (!isMounted) {
    return (
      <button
        type="button"
        className={buttonVariants({ variant: "outline", size: "icon-lg" })}
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  return (
    <AnimatedThemeToggler
      theme={isDark ? "dark" : "light"}
      onThemeChange={setTheme}
      aria-label={label}
      className={buttonVariants({ variant: "outline", size: "icon-lg" })}
    />
  );
}
