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
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-20 px-4 pt-28 pb-24 sm:px-6">
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
