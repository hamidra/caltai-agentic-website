'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className="group relative w-[72px] h-[36px] rounded-full p-1 
                 border-[3px] border-secondary/10 dark:border-white/10
                 transition-colors duration-500 overflow-hidden
                 focus:outline-none cursor-pointer shadow-inner"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Background Transitions */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    background: isDark
                        ? 'linear-gradient(135deg, #0f153a 0%, #3a1c71 100%)'
                        : 'linear-gradient(135deg, #ff7e33 0%, #ffc878 100%)'
                }}
                transition={{ duration: 0.5 }}
            />

            {/* --- Day Decor (Clouds & Plane) --- */}
            <AnimatePresence>
                {!isDark && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="absolute inset-0 z-10"
                    >
                        {/* Clouds */}
                        <div className="absolute right-4 top-2 w-4 h-3 bg-white/40 rounded-full blur-[1px]" />
                        <div className="absolute right-8 top-5 w-6 h-4 bg-white/20 rounded-full blur-[1.5px]" />
                        <div className="absolute right-2 top-6 w-5 h-3 bg-white/30 rounded-full blur-[1px]" />

                        {/* Plane Trail */}
                        <svg className="absolute top-2 right-1 w-12 h-4 opacity-40" viewBox="0 0 100 40">
                            <motion.path
                                d="M0,40 Q50,0 100,5"
                                fill="none"
                                stroke="white"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                            />
                            <circle cx="98" cy="5" r="1.5" fill="white" />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Night Decor (Stars) --- */}
            <AnimatePresence>
                {isDark && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute inset-0 z-10"
                    >
                        {/* Tiny Stars */}
                        <div className="absolute left-4 top-3 w-[2px] h-[2px] bg-white rounded-full" />
                        <div className="absolute left-10 top-2 w-[1.5px] h-[1.5px] bg-white rounded-full opacity-60" />
                        <div className="absolute left-8 top-6 w-[2px] h-[2px] bg-white rounded-full" />
                        <div className="absolute left-12 top-4 w-[1px] h-[1px] bg-white rounded-full" />

                        {/* Sparkles (4-point stars) */}
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute left-5 top-5"
                        >
                            <div className="w-1.5 h-1.5 bg-white rounded-full blur-[1px]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[0.5px] bg-white" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[6px] bg-white" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Toggle Thumb --- */}
            <motion.div
                className="relative z-20 w-[24px] h-[24px] rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: isDark ? 36 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                    backgroundColor: isDark ? '#f0f0f0' : '#fff9e5',
                }}
            >
                {/* Sun Detail */}
                {!isDark && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 rounded-full"
                        style={{
                            boxShadow: '0 0 10px rgba(255, 230, 0, 0.8), inset 0 0 4px rgba(255, 255, 255, 0.5)'
                        }}
                    />
                )}

                {/* Moon Details (Craters) */}
                {isDark && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative w-full h-full flex items-center justify-center pointer-events-none"
                    >
                        <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-black/10 rounded-full" />
                        <div className="absolute top-3 right-1 w-1 h-1 bg-black/10 rounded-full" />
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-black/10 rounded-full" />
                        <div className="absolute inset-0 rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1)]" />
                    </motion.div>
                )}
            </motion.div>
        </button>
    );
}

