"use client";

import { motion } from "framer-motion";

const steps = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.674"></path>
                <path d="M10 20h4"></path>
                <path d="M12 2v1"></path>
                <path d="M12 17v1"></path>
                <path d="M4.929 4.929l.707.707"></path>
                <path d="M18.364 18.364l.707.707"></path>
                <path d="M21 12h-1"></path>
                <path d="M3 12h1"></path>
                <path d="M18.364 4.929l-.707.707"></path>
                <path d="M5.636 17.636l-.707.707"></path>
                <path d="M12 5a7 7 0 0 0-7 7c0 1.258.334 2.438.913 3.456C6.54 16.53 7 17 7 17h10s.46-.47 1.087-1.544c.579-1.018.913-2.198.913-3.456a7 7 0 0 0-7-7z"></path>
            </svg>
        ),
        circleBg: "bg-blue-50",
        title: "AI Recommends",
        description: "Surfaces decisions with full context"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        ),
        circleBg: "bg-green-50",
        title: "You Approve",
        description: "One click to confirm or modify"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 4v6h6"></path>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
        ),
        circleBg: "bg-orange-50",
        title: "It Learns",
        description: "Your feedback makes it smarter"
    }
];

export default function PilotSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:px-20 pt-[122px] pb-16 bg-grid">
            <div className="max-w-7xl w-full text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-brand-brown/50 font-bold text-sm uppercase tracking-widest mb-4 block">
                        Human-in-the-Loop
                    </span>
                    <h2 className="text-[40px] font-bold text-brand-brown mb-8 font-cal leading-tight">
                        You're the Pilot, Not the Passenger
                    </h2>
                    <p className="text-[20px] text-brand-brown/70 font-medium max-w-4xl leading-relaxed">
                        We know you're worried about AI making wrong decisions. That's why CaltAI uses "Guided Autonomy", you maintain 100% control with 1% effort.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/40 backdrop-blur-sm border border-brand-brown/5 rounded-[40px] p-12 md:p-20 shadow-sm relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center flex-1">
                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${step.circleBg} flex items-center justify-center mb-8 transition-transform hover:scale-105 duration-300`}>
                                    <div className="scale-150">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-brand-brown mb-3 font-cal">
                                    {step.title}
                                </h3>
                                <p className="text-brand-brown/60 text-[17px] leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[33.33%] translate-x-12">
                                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-brand-brown/10">
                                            <path d="M0 12h38m0 0l-10-10m10 10l-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className="hidden md:block absolute top-12 right-[33.33%] -translate-x-12">
                                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-brand-brown/10">
                                            <path d="M0 12h38m0 0l-10-10m10 10l-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Subtle brand elements */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </section>
    );
}
