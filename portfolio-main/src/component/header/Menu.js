"use client";

import { motion } from "framer-motion";

export default function MenuHeader() {
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed w-full h-auto top-0 left-0 z-40 px-4 md:px-10 py-6">
      <motion.menu 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto max-w-5xl flex justify-between items-center py-2 px-6 
                   border border-slate-400/30 dark:border-slate-700/50 bg-slate-200/20 dark:bg-gray-800/30
                   shadow-2xl rounded-2xl backdrop-blur-xl transition-all duration-300">

        {/* Logo Section */}
        <a href="/" 
          className="font-[family-name:var(--font-jetbrains)] text-4xl font-bold text-slate-900 dark:text-white group">
          Arun&nbsp;
          <span className="inline-block text-emerald-500 transition-transform duration-300 group-hover:rotate-12"> .</span>
        </a>

        {/* Navigation - Hidden on mobile, shown on md+ */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              className="text-md font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="bg-slate-800 dark:bg-emerald-500 text-white dark:text-gray-900 
                     px-5 py-2 rounded-xl text-sm font-bold shadow-md 
                     hover:shadow-emerald-500/20 transition-all">
          Hire Me
        </motion.button>
      </motion.menu>
    </header>
  );
}