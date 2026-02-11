import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 65 },
      { name: "C++", level: 60 },
      { name: "Python", level: 65 },
      { name: "Java (Basic)", level: 50 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 55 },
      { name: "React.js", level: 55 },
      { name: "Bootstrap", level: 60 },
      // { name: "ShadCN UI", level: 70 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 50 },
      // { name: "Express.js", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 sm:py-28 relative">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              className="glass-card glow-hover p-6"
            >
              <h3 className="text-lg font-semibold gradient-text mb-5">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
