"use client";

import { motion } from "framer-motion";

export default function FoundersNote() {
    return (
        <section className="relative w-full h-full flex flex-col items-center justify-start px-6 lg:px-24 pt-[122px] overflow-hidden bg-grid">
            {/* Background Circular Lines */}


            {/* Content Container */}
            <div className="relative z-10 max-w-6xl w-full h-full flex flex-col text-center pb-32 lg:pb-40">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-serif font-bold text-[48px] lg:text-[48px] text-brand-brown mb-[40px] mt-[40px]"
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
                        <p className="font-serif text-[28px] lg:text-[28px] text-brand-brown leading-relaxed lg:leading-[1.6]">
                            "We built CaltAI because we were tired of being a manual bridge between
                            our own tools. We saw the opportunities, but we lacked the operational
                            firepower to seize them. We are building this so you can finally stop
                            babysitting your stack and start being the architect of your scale. We're just
                            getting started, and we'd love for you to be part of it."
                        </p>

                        <div className="mt-16">
                            <span className="font-cal text-xl lg:text-xl text-brand-brown font-bold tracking-tight">
                                CaltAI Founders
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom spacer to push content up slightly */}
                <div className="h-20 lg:h-32"></div>
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
            <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
                <div className="relative w-[76px] h-[76px] flex items-center justify-center">
                    {/* Layered Energy Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-[#9067ff] to-brand-orange rounded-full blur-[100px] opacity-25 animate-pulse"></div>
                    <div className="absolute inset-[15%] bg-brand-orange/20 rounded-full blur-[60px] opacity-30"></div>

                    <img
                        src="/AI design.svg"
                        alt="AI Assistant"
                        className="w-[76px] h-[76px] relative z-10 animate-float drop-shadow-[0_35px_60px_rgba(255,96,46,0.4)] opacity-90"
                    />
                </div>
            </div>

        </section>
    );
}
