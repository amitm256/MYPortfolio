"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent successfully 🚀");
  };

  return (
    <section id="contact" className="relative w-full py-8 md:pt-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_80%_20%,#10b981,transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Let’s Connect
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Open to opportunities, collaborations, or just a tech discussion.
          </p>

          <div className="mt-8 space-y-4">

            <a
              href="mailto:Amitm256@gmail.com"
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition"
            >
              <Mail /> Amitm256@gmail.com
            </a>

            <a href="tel:+919044387154"
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition"
            >
              <Phone /> +91-9044387154
            </a>

            <a href="https://www.linkedin.com/in/amit-mishra-137948134/" target="_blank"
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition"
            >
                <FontAwesomeIcon icon={faLinkedin} />LinkedIn
            </a>
            <a href="https://github.com/amitm256" target="_blank"
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition"
            >
                <FontAwesomeIcon icon={faGithub} />GitHub - Amit Mishra  
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10 outline-none"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10 outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10 outline-none"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-emerald-500 text-black font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}