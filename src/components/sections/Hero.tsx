import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail } from "lucide-react";
import profilePic from "../../assets/baqir.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const roles = ["Code. Create. Innovate.", "Exploring the Future of AI", "Future-Ready Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
  <div className="flex justify-center mb-6">
    <img
      src={profilePic}
      alt="Mohammad Baqir Khan"
      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/30"
    />
  </div>
          <p className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            Mohammad Baqir{" "}
            <span className="gradient-text">Khan</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            MCA Student | Aspiring Software Developer
          </p>
          <div className="h-8 mb-6">
            <span className="text-primary text-lg font-medium">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8 text-sm sm:text-base">
            Passionate about building real-world applications, exploring new technologies, and creating impactful digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#resume"
              onClick={(e) => { e.preventDefault(); scrollTo("resume"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground font-medium transition-colors"
            >
              <FolderOpen size={18} /> View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-accent/50 text-foreground font-medium transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>
        <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
                          {[
                            { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/mbaqirk/" },
                            { icon: <FaGithub size={20} />, href: "https://github.com/mbaqirk" },
                            { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/_baqir_110" },
                          ].map((s, i) => (
                            <a
                              key={i}
                              href={s.href}
                              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                              {s.icon}
                            </a>
                          ))}
                        </div>
      </div>
    </section>
  );
};

export default Hero;
