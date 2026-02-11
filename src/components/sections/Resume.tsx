import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => (
  <section id="resume" className="py-20 sm:py-28 relative">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          My <span className="gradient-text">Resume</span>
        </h2>
        <div className="glass-card glow-hover p-8">
          <p className="text-muted-foreground mb-6">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
          <a
            href="https://drive.google.com/file/d/14c7Cps-9X_atr-kBYnhHYUAWT5CbzR_4/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} /> Download My Resume (PDF)
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Resume;
