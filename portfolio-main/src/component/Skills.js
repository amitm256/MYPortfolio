"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Microservices",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  },
  {
    title: "Messaging & Streaming",
    icon: Workflow,
    skills: ["Kafka", "Kafka Streams", "SQS", "SNS"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["JWT", "OAuth2", "RBAC", "Encryption", "API Security"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full pt-10 pb-3 md:pt-16 md:pb-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[radial-gradient(circle_at_80%_20%,#10b981,transparent_40%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A blend of backend expertise, frontend craftsmanship, and cloud-native engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 rounded-2xl blur opacity-0 group-hover:opacity-30 transition"></div>

                {/* Card */}
                <div className="relative h-full bg-orange-200/20 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-emerald-500" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-full bg-slate-300/50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}