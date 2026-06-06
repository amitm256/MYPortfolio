"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  // Define sequence for typing effect
  const typingSequence = [
    "Arun Singh", 1500, // Waits 1.5s
    "Full Stack Developer.", 2000, 
    "UI/UX Designer.", 2000,
    "Cybersecurity Specialist.", 2000, // Matching your metadata title
  ];

  return (
    <section id="home" className="relative w-full min-h-screen pt-18 pb-2 md:pt-30 flex items-center overflow-hidden">
      
        {/* Optional background detail (e.g., stylized grid or network pattern) */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] "></div>

        <div className="max-w-6xl mx-auto px-6 z-10 grid md:grid-cols-12 gap-12 md:gap-8 items-center">
            
            {/* Left Portion: Text and Details */}
            <motion.div initial={{ opacity: 0, x: -50 }}animate={{ opacity: 1, x: 0 }}transition={{ duration: 0.8, delay: 0.1 }}className="md:col-span-8 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mt-10 md:mt-0 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck size={16} />
                    <span className="text-xs font-semibold tracking-wider uppercase font-[family-name:var(--font-jetbrains)]">
                        Available for new roles
                    </span>
                </div>

                <h1 className=" md:text-xl lg:text-2xl font-semibold text-slate-950 dark:text-white leading-tight">
                    I&apos;m{" "}
                    <span className="text-emerald-500 font-extrabold text-xl md:text-3xl lg:text-4xl font-[family-name:var(--font-jetbrains)]">
                        <TypeAnimation sequence={typingSequence} wrapper="span" speed={50} deletionSpeed={70}  repeat={Infinity} cursor={true}/>
                    </span>
                </h1>

                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto md:mx-0">
                    With expertise in building scalable, secure web applications. I turn complex problems into elegant, efficient digital solutions from frontend interactions to backend architecture.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                    <motion.a 
                        whileHover={{ scale: 1.03, y: -2 }}
                        href="#projects" 
                        className="group flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-950 dark:bg-emerald-500 text-white dark:text-slate-950 font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all"
                    >
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    
                    <a href="/Team_Lead_Java_Developer_Resume.pdf" download target="_blank"
                        className="text-slate-700 dark:text-slate-200 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        Download Resume
                    </a>
                </div>
            </motion.div>

            {/* Right Portion: Image/Visual (Defender Aesthetic) */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="md:col-span-4 relative flex justify-center items-center">
   
                      {/* REPLACE THIS IMAGE PLACEHOLDER:
                            Ensure your image (Arun_Singh.jpg) is in the /public folder.
                            A 1:1 square ratio works best.
                        */}
                        <img src="/ArunSingh.png" alt="Arun Singh" className=" w-70" />

                        {/* Creative 'Scanning' Line for 'Defender' concept */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute h-1 w-full bg-emerald-400/50 blur-sm top-0 left-0 animate-[scan_4s_ease-in-out_infinite]"></div>

                
            </motion.div>
        </div>
    </section>
  );
}