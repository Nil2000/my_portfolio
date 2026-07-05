"use client";

import BulbSvg from "@/components/ui/bulb-svg";
import MoonIcon from "@/components/ui/moon-icon";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BrightnessDownIcon from "@/components/ui/brightness-down-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="size-9 shrink-0"
        aria-label="Toggle theme"
        disabled
      >
        <BulbSvg size={16} className="opacity-0" />
      </Button>
    );
  }

  const label =
    resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-9 shrink-0"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label={label}
        >
          {resolvedTheme === "dark" ? (
            <BrightnessDownIcon size={16} />
          ) : (
            <MoonIcon size={16} />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={4}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
