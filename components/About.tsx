import { aboutData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          About Me
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          A bit about myself
        </h3>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text */}
          <div className="space-y-4 md:col-span-3">
            {aboutData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            {aboutData.highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-3xl font-extrabold text-indigo-500">
                  {h.value}
                </span>
                <span className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
