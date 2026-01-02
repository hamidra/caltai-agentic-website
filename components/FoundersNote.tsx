"use client";

import { motion } from "framer-motion";

export default function FoundersNote() {
    return (
        <section className="relative w-full h-full flex flex-col items-center justify-start px-6 lg:px-24 pt-[122px] overflow-hidden">
            {/* Background Circular Lines */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <div className="relative w-[120%] h-[120%] opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-brown rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 w-[900px] h-[900px] border border-brand-brown rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[850px] h-[850px] border border-brand-brown rounded-full"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl w-full h-full flex flex-col pb-32 lg:pb-40">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-5xl lg:text-7xl text-brand-brown mb-auto"
                >
                    A Note From Our Founders
                </motion.h2>

                <div className="flex flex-col items-center justify-center flex-grow">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative max-w-4xl text-center"
                    >
                        <p className="font-serif italic text-2xl lg:text-4xl text-brand-brown leading-relaxed lg:leading-[1.6]">
                            "We built CaltAI because we were tired of being a manual bridge between
                            our own tools. We saw the opportunities, but we lacked the operational
                            firepower to seize them. We are building this so you can finally stop
                            babysitting your stack and start being the architect of your scale. We're just
                            getting started, and we'd love for you to be part of it."
                        </p>

                        <div className="mt-16">
                            <span className="font-cal text-xl lg:text-3xl text-brand-brown font-bold tracking-tight">
                                CaltAI Founders
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom spacer to push content up slightly */}
                <div className="h-20 lg:h-32"></div>
            </div>

            {/* Corner Decorative Elements */}
            {/* Bottom Left Button */}
            <div className="absolute bottom-8 left-8">
                <div className="w-12 h-12 border border-brand-orange/30 rounded-lg flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm group cursor-pointer hover:border-brand-orange transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff602e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-0 transition-transform group-hover:scale-110">
                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
            </div>

            {/* Top Right Decorative Arrow (Down-Left) */}
            <div className="absolute top-8 right-8">
                <div className="w-12 h-12 border border-brand-orange/30 rounded-lg flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff602e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
            </div>

            {/* Bottom Right Orb Indicator */}
            <div className="absolute bottom-8 right-8">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff602e] via-[#9067ff] to-[#ff602e] rounded-full blur-md opacity-20 animate-pulse"></div>
                    <img
                        src="/AI design.svg"
                        alt="AI Assistant"
                        className="w-12 h-12 relative z-10 animate-float"
                    />
                </div>
            </div>
        </section>
    );
}
