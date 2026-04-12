import Header from "@/components/header";
import Hero from "@/components/hero";
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
      <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col gap-16 px-6 pb-20">
        <Hero />
        <GithubContributions />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
