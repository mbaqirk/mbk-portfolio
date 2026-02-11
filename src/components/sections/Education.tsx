import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Integral University, Lucknow",
    year: "2025 – Present",
    score: "CGPA: 9.56",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Integral University, Lucknow",
    year: "2022 – 2025",
    score: "CGPA: 9.6",
  },
  {
    degree: "Intermediate (12th)",
    institution: "St. Joseph Sr. Sec. School, Jaunpur",
    year: "2022",
    score: "67.6% – CBSE",
  },
  {
    degree: "High School (10th)",
    institution: "St. Joseph Sr. Sec. School, Jaunpur",
    year: "2020",
    score: "77% – CBSE",
  },
];

const Education = () => (
  <section id="education" className="py-20 sm:py-28 relative">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2 sm:left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap size={12} className="text-primary-foreground" />
                </div>

                <div className="glass-card glow-hover p-5">
                  <span className="text-xs text-primary font-medium">{edu.year}</span>
                  <h3 className="text-foreground font-semibold mt-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  {edu.score && (
                    <p className="text-sm text-accent mt-1 font-medium">{edu.score}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
