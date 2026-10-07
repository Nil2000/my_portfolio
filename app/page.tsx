import Header from "@/components/header";
import Hero from "@/components/hero";
import GithubContributions from "@/components/github-contributions";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { getGithubContributions } from "@/lib/github";

export default async function Home() {
  const contributions = await getGithubContributions();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-20 px-4 pt-28 pb-24 outline-none sm:px-6"
      >
        <Hero />
        <GithubContributions data={contributions} />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
