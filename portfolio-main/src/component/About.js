"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code2, Server, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full pt-10 pb-2  md:pt-16 md:pb-4 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[radial-gradient(circle_at_20%_20%,#10b981,transparent_40%)]"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE (Image / Visual Card) */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="md:col-span-5 hidden md:flex justify-center">
          <div className="relative group">
            {/* Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>

            {/* Card */}
            <div className="relative bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl">
              <img src="/Amit Mishra.png" alt="AMIT" className="rounded-xl w-64 mx-auto"/>

              {/* Status Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                <ShieldCheck size={16} />
                Secure • Scalable • Production Ready
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Content) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>

          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            I'm a <span className="text-emerald-600 font-semibold">Full Stack Java Developer</span> with
            around 4 years of experience building scalable backend systems and
            modern frontend applications. I specialize in designing secure,
            high-performance architectures using Spring Boot, microservices, and React.
          </p>

          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            I’ve worked on enterprise-level applications including credit analysis
            platforms, healthcare systems, and AI-powered solutions—focusing on
            performance, security, and clean architecture.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-500/40 hover:border-emerald-500/90 transition">
              <Code2 className="text-emerald-500" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Frontend
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-500/40 hover:border-emerald-500/90 transition">
              <Server className="text-emerald-500" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Backend
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-500/40 hover:border-emerald-500/90 transition">
              <Database className="text-emerald-500" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Databases
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-500/40 hover:border-emerald-500/90 transition">
              <ShieldCheck className="text-emerald-500" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Security
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}