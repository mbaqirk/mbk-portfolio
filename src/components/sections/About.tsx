import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: <GraduationCap size={24} />, title: "MCA Student", desc: "2025 – Present" },
  { icon: <GraduationCap size={24} />, title: "BCA Graduate", desc: "Passed with 9.6 CGPA" },
  { icon: <Lightbulb size={24} />, title: "AI & Emerging Tech", desc: "Passionate Learner" },
  { icon: <Users size={24} />, title: "Team Player", desc: "Fast Learner" },
];

const About = () => (
  <section id="about" className="py-20 sm:py-28 relative">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-sm sm:text-base">
          {/* I am a dedicated Computer Applications student with strong foundations in programming, web development, and problem-solving. I enjoy building practical applications and continuously learning emerging technologies, especially Artificial Intelligence. I am looking for opportunities to contribute to innovative projects and grow as a technology professional. */}
          I’m a Master's student in Computer Application with a strong interest in web development and Artificial Intelligence. I enjoy building practical projects, learning new technologies, and improving my skills through hands-on experience. I’m always curious to explore better ways to solve problems and grow as a developer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card glow-hover p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
