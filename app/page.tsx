import Header from "@/components/header";
import Hero from "@/components/hero";
import GithubContributions from "@/components/github-contributions";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import RulerRail from "@/components/ruler-rail";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col pb-20 px-6 pt-28">
        <Hero />

        {/* Ruler rail + content */}
        <div className="relative mt-16 flex gap-0">
          <div className="hidden md:block self-stretch">
            <RulerRail />
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-20">
            <GithubContributions />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
