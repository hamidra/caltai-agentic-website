"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-400 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-400 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-300 rounded-full"></div>
            </div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-brand-brown mb-12"
                >
                    Stop Prompting, <span className="text-brand-orange">Start Scaling</span>
                </motion.h1>

                <div className="relative mb-12 flex justify-center">
                    {/* Central Orb */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full relative z-20 overflow-hidden shadow-2xl animate-float"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9e7d] via-[#ff602e] to-[#9067ff]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#5d3fd3] opacity-40 blur-lg"></div>
                    </motion.div>
                    {/* Orb Shadow/Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 orb-glow z-10"></div>
                </div>

                {/* Chat Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-[#fdf6ee] border border-[#f0e4d7] rounded-[32px] p-6 mb-8 max-w-lg mx-auto shadow-sm"
                >
                    <p className="text-[17px] leading-relaxed text-brand-brown/90 font-medium">
                        Hello! I'm CaltAI, an autonomous engine that turns business objectives into execution.
                        I'm here to show you how we're revolutionizing the way businesses scale with AI.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center justify-center p-1 bg-white rounded-full border border-gray-100 shadow-md inline-flex mx-auto pr-2"
                >
                    <button className="bg-brand-orange text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
                        Chat with CaltAI
                    </button>
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center ml-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="10" width="2" height="4" rx="1" fill="#ff602e" />
                            <rect x="9" y="7" width="2" height="10" rx="1" fill="#ff602e" />
                            <rect x="13" y="4" width="2" height="16" rx="1" fill="#ff602e" />
                            <rect x="17" y="8" width="2" height="8" rx="1" fill="#ff602e" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Side "Scroll to explore" */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 overflow-visible hidden lg:block">
                <div className="rotate-90 flex items-center gap-4 text-gray-400">
                    <span className="text-sm font-medium tracking-widest whitespace-nowrap">SCROLL TO EXPLORE</span>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full relative -rotate-90">
                        <div className="w-1 h-2 bg-gray-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></div>
                    </div>
                </div>
            </div>

            {/* Footer Elements inside Hero for the specific layout */}
            <div className="absolute bottom-10 left-10 flex items-center gap-8 text-sm font-medium text-brand-brown/60">
                <div className="flex items-center gap-2 cursor-pointer hover:text-brand-brown transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    Social
                </div>
                <div className="cursor-pointer hover:text-brand-brown transition-colors">
                    Your Privacy
                </div>
            </div>
        </section>
    );
}
