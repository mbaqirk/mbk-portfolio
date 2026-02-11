import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
