import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
    <main className="bg-[#F7F6F2]">
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
      {/* Second Page */}
      <main className="w-full overflow-x-hidden bg-[#F7F6F2]">
      </main>
    </main>
  );
}