import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import GithubContributions from "@/components/github-contributions";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col pb-20 px-6 pt-28">
        {/* Hero sits outside the gutter wrapper — it fills the full column */}
        <Hero />

        {/* Gutter + content layout for all sections */}
        <div className="relative mt-16 flex gap-0">
          {/* Left gutter: hairline rule */}
          <div className="hidden md:block relative shrink-0 w-10 mr-6">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-20">
            <About />
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
