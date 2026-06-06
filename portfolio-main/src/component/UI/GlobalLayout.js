"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function GlobalLayout({ children }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Accessing document element (html tag)
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <body className="h-full w-full mx-auto bg-slate-200 transition-colors duration-300 dark:bg-slate-950">
            <button onClick={() => setIsDark(!isDark)} className="fixed z-50 right-8 bottom-5 cursor-pointer hover:scale-110 rounded-full p-3 border border-slate-400 dark:border-gray-600 dark:text-gray-300 text-slate-800 bg-white/70 dark:bg-gray-800/70">
                {!isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            {children}
        </body>
    );
}