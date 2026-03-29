import { Send } from "lucide-react";
import { contactData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-sm font-semibold tracking-widest text-indigo-500 uppercase">
          Contact
        </h2>
        <h3 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {contactData.heading}
        </h3>
        <p className="mb-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {contactData.description}
        </p>
        <a
          href={`mailto:${contactData.email}`}
          className="inline-flex h-14 items-center gap-2 rounded-full bg-indigo-500 px-10 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-600 hover:shadow-indigo-500/40"
        >
          <Send size={16} />
          Say Hello
        </a>
      </div>
    </section>
  );
}
