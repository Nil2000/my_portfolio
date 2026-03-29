import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          Skills
        </h2>
        <h3 className="mb-14 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Technologies I work with
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="mb-4 text-sm font-bold tracking-wide text-zinc-800 uppercase dark:text-zinc-200">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
