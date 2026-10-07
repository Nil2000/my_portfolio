import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
