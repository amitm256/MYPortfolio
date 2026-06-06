import About from "@/component/About";
import Contact from "@/component/Contact";
import Journey from "@/component/Experience";
import Footer from "@/component/Footer";
import MenuHeader from "@/component/header/Menu";
import Hero from "@/component/Hero";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";

export default function Home() {
  
  return <main className="w-full h-full relative ">
    <MenuHeader />
    <Hero />
    <About />
    <Skills />
    <Projects />  
    <Journey />
    <Contact />
    <Footer />
  </main>
}
