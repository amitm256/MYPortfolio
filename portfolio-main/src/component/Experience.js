"use client";

import { motion } from "framer-motion";

const journey = [
  {
    type: "experience",
    title: "Exner Technologies Pvt Ltd",
    subtitle: "Software Engineer",
    duration: "Feb 2025 – Present",
    details: [
      "Built hospital management system",
      "Developed real-time features using WebSockets",
      "Implemented RBAC with JWT",
    ],
  },
  {
    type: "experience",
    title: "Delhivery Pvt Ltd",
    subtitle: "Team Lead (Operations)",
    duration: "July 2024 – Aug 2024",
    details: [
      "Led team operations and automation",
      "Improved efficiency in task assignments",
    ],
  },
  {
    type: "experience",
    title: "Trends Infonet Solutions",
    subtitle: "Java Backend Developer",
    duration: "Aug 2021 – Jan 2024",
    details: [
      "Migrated monolith to microservices",
      "Integrated OAuth2 & JWT security",
      "Worked on Kafka-based systems",
    ],
  },

  // 🎓 EDUCATION
  {
    type: "education",
    title: "B.Tech - Computer Science",
    subtitle: "VBSPU University",
    duration: "2016 – 2020",
    details: [
      "Built strong foundation in Java, DSA & system design",
      "Worked on multiple academic & self-driven projects",
    ],
  },

  {
    type: "education",
    title: "Higher Secondary (HSC)",
    subtitle: "PCM Stream",
    duration: "2016",
    details: [
      "Scored 73.2% with Physics, Chemistry & Mathematics",
      "Developed analytical and problem-solving mindset",
      "Built strong fundamentals in mathematics and logic",
    ],
  },

  {
    type: "education",
    title: "Secondary School (SSC)",
    subtitle: "Science & Mathematics",
    duration: "2014",
    details: [
      "Achieved 9.6 CGPA",
      "Strong academic performance in Science & Mathematics",
      "Early interest in logical reasoning and computing",
    ],
  },
];

export default function Journey() {
  return (
    <section id="experience" className="relative w-full py-8 md:pt-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            My Journey
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            From learning fundamentals to building scalable enterprise systems.
          </p>
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/40 via-transparent to-emerald-500/40" />

          {/* Items */}
          <div className="space-y-16">
            {journey.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    className="group w-[45%]"
                  >
                    <div className={`p-5 rounded-2xl backdrop-blur-xl border transition ${
                        item.type === "experience" ? "bg-white/5 border-white/10 hover:border-emerald-500/30"
                          : "bg-white/3 border-white/5 hover:border-blue-400/20"}`}>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.subtitle}
                      </p>

                      <span className="text-xs text-slate-500">
                        {item.duration}
                      </span>

                      {/* Hover Details */}
                      <div className="mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                        <ul className="mt-2 space-y-1">
                          {item.details.map((d, i) => (
                            <li
                              key={i}
                              className="text-sm text-slate-600 dark:text-slate-300"
                            >
                              • {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}