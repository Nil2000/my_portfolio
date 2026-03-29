import { socialLinks, siteConfig } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-zinc-400 transition-colors hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400"
            >
              <SocialIcon name={link.icon} size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
