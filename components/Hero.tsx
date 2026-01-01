"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-12 bg-grid">

            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-[60px] font-bold tracking-tight text-brand-brown mb-6 leading-[1.1] font-cal"
                >
                    Stop Prompting, <span className="text-brand-orange">Start Scaling</span>
                </motion.h1>

                <div className="relative mb-4 flex justify-center">
                    {/* Central Orb */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-40 h-40 md:w-44 md:h-44 relative z-20 animate-float flex items-center justify-center"
                    >
                        <img
                            src="/AI design.svg"
                            alt="AI Core Design"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>

                {/* Chat Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-brand-cream border border-[#f0e4d7] rounded-[24px] p-6 mb-[50px] max-w-lg mx-auto shadow-sm"
                >
                    <p className="text-[16px] leading-relaxed text-brand-brown font-medium">
                        Most AIs chat, but I'm executes. Replace fracturing manual processes with an autonomous operations layer capable of running a $10M business with just a 5-person team.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="h-[58px] flex items-center px-3 bg-background rounded-full border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.06)] inline-flex mx-auto"
                >
                    <button className="h-[36px] bg-brand-orange text-white px-8 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all flex items-center">
                        Chat with CaltAI
                    </button>
                    <div className="w-[36px] h-[36px] bg-brand-orange rounded-full flex items-center justify-center ml-2 shadow-md flex-shrink-0">
                        <div className="flex items-center gap-0.5">
                            <div className="w-[2px] h-2 bg-white rounded-full"></div>
                            <div className="w-[2px] h-4 bg-white rounded-full"></div>
                            <div className="w-[2px] h-3 bg-white rounded-full"></div>
                            <div className="w-[2px] h-1.5 bg-white rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Corner Decorative Arrow - Bottom Left */}
            <div className="absolute bottom-8 left-8 w-10 h-10 bg-white border border-gray-100 rounded-md flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff602e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </div>

        </section>
    );
}
