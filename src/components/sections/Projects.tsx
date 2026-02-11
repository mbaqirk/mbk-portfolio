import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  // {
  //   title: "Portfolio Website",
  //   desc: "Personal portfolio to showcase skills, projects, and experience with a modern responsive UI.",
  //   tech: ["React.js", "TailwindCSS"],
  //   live: "#",
  //   github: "#",
  //   color: "from-primary to-accent",
  // },
  {
    title: "QuBiS : Real-time Chat App",
    desc: "A real-time chat platform featuring AI-powered smart replies, media sharing, voice/video calls, and secure user authentication.",
    tech: ["React.js", "TypeScript", "Convex", "Zustand", "ZegoCloud", "Mistral AI"],
    live: "https://qubis.vercel.app/overview",
    github: "https://github.com/mbaqirk/qubis",
    color: "from-accent to-primary",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 sm:py-28 relative">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="glass-card glow-hover overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-foreground font-medium transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
