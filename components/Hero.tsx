import { ArrowDown } from "lucide-react";
import { heroData, socialLinks } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          {heroData.greeting}
        </p>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-50">
          {heroData.name}
        </h1>
        <p className="mb-6 text-2xl font-semibold text-zinc-500 sm:text-3xl dark:text-zinc-400">
          {heroData.tagline}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {heroData.description}
        </p>

        <div className="mb-12 flex items-center justify-center gap-4">
          <a
            href={heroData.resumeUrl}
            className="inline-flex h-12 items-center rounded-full bg-indigo-500 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-600 hover:shadow-indigo-500/40"
          >
            Download Résumé
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-zinc-300 px-8 text-sm font-semibold text-zinc-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-zinc-400 transition-colors hover:text-indigo-500 dark:text-zinc-500 dark:hover:text-indigo-400"
            >
              <SocialIcon name={link.icon} size={22} />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-zinc-400 dark:text-zinc-600"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
