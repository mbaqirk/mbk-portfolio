import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Info */}
            <div className="glass-card glow-hover p-6 space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
          <p className="text-sm text-muted-foreground mb-3">Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:workwithbaqir@gmail.com" className="hover:text-foreground transition-colors text-sm">
                  workwithbaqir@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">+91 9695204031</span>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Follow me</p>
                <div className="flex gap-4">
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
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card glow-hover p-6 space-y-4">
              {submitted && (
                <p className="text-sm text-green-400 bg-green-400/10 p-3 rounded-lg">
                  Message sent successfully!
                </p>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
