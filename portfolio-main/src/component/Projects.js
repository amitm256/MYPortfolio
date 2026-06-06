"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork} from "lucide-react";

const projects = [
  {
    title: "ApexPrep (AI Mock Test Platform)",
    featured: true,
    description:
      "AI-powered mock test platform with dynamic question generation, evaluation, and performance insights.",
    highlights: [
      "Built completely solo (end-to-end)",
      "Gemini + Groq AI integration with fallback",
      "Redis Streams for real-time processing",
      "Secure & scalable Spring Boot APIs",
    ],
    tech: ["Spring Boot", "React", "Redis", "AI", "MySQL"],
    live: "https://apexprepai.up.railway.app",
    github: [
      "https://github.com/arunsin0211-dev/apexprep-backend",
      "https://github.com/arunsin0211-dev/apexprep-frontend",
    ],
    glow: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Credit Score Analysis Platform",
    description:
      "Real-time financial analytics system for evaluating creditworthiness.",
    highlights: [
      "Kafka-based streaming pipeline",
      "JWT-based role authentication",
      "Fraud detection workflows",
    ],
    tech: ["Spring Boot", "Kafka", "React", "MySQL"],
    glow: "from-blue-500/20 to-emerald-500/20",
  },
  {
    title: "Hospital Management System",
    description:
      "Enterprise system for managing appointments, dashboards, and workflows.",
    highlights: [
      "WebSocket-based real-time updates",
      "Role-based dashboards",
      "Secure JWT authentication",
    ],
    tech: ["Spring Boot", "React", "PostgreSQL"],
    glow: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Healthcare Claims System",
    description:
      "Microservices-based backend for healthcare claims processing.",
    highlights: [
      "Migrated monolith to microservices",
      "Improved scalability & reliability",
      "OAuth2-based security",
    ],
    tech: ["Spring Boot", "Kafka", "MySQL"],
    glow: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Human Resource Management Service",
    description:
      "Backend service for managing employee lifecycle, payroll, and HR workflows.",
    highlights: [
      "Modular backend architecture",
      "Secure authentication & session handling",
      "Optimized database operations",
    ],
    tech: ["Spring Boot", "MySQL", "JWT"],
    glow: "from-pink-500/20 to-rose-500/20",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-8 md:pt-16 pb-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,#10b981,transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Selected work showcasing scalable systems, AI integration, and real-world impact.
          </p>
        </div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div
                className={`relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 
                bg-gradient-to-br ${project.glow} shadow-lg`}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-slate-600 dark:text-slate-300">
                      • {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur border border-white/10 dark:text-slate-300 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-emerald-500 font-medium"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>

                    <a href={project.github[1]} target="_blank"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300" >
                      <GitFork size={16} /> Frontend
                    </a>
                    <a href={project.github[0]} target="_blank"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300" >
                      <GitFork size={16} /> Backend
                    </a>
                  
                </div>
              </div>
            </motion.div>
          ))}

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-6 rounded-2xl backdrop-blur-xl border border-white/10 
                bg-gradient-to-br ${project.glow} hover:scale-[1.02] transition`}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-3 space-y-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-slate-600 dark:text-slate-400">
                      • {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 dark:text-slate-300" >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}