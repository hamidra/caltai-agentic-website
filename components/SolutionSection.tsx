"use client";

import { motion } from "framer-motion";

const solutionCards = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
        ),
        title: "Context Graph (The Brain)",
        description: "Builds a living record of your business rules, decisions, and institutional knowledge. Finally, a \"single source of truth\" that actually works."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="9" y1="16" x2="15" y2="16"></line>
                <line x1="12" y1="8" x2="12" y2="8"></line>
            </svg>
        ),
        title: "Proactive Decisions",
        description: "Doesn't wait for you to ask. Detects signals, makes recommendations, and surfaces what matters, before you even know to look."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
        ),
        title: "Autonomous Execution",
        description: "Takes action on your behalf, pausing ads, creating tasks, triggering workflows. The feedback loop: Action → Measurement → Learning."
    }
];

export default function SolutionSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-20 pt-32 pb-16 bg-grid">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-[54px] font-bold text-brand-brown mb-8 font-cal leading-tight">
                        Not Another Tool. An Operations Layer.
                    </h2>
                    <p className="text-xl md:text-[22px] text-brand-brown/70 font-medium max-w-4xl leading-relaxed">
                        CaltAI doesn't just connect your tools, it thinks, decides, and executes. It's the autonomous layer that sits on top of your Franken-stack and makes it actually work.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutionCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center p-12 min-h-[400px] border border-[#9067ff]/30 bg-[#f8f6ff] group transition-all duration-300 hover:border-[#9067ff]/60"
                        >
                            {/* Decorative corner dot */}
                            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#9067ff] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#9067ff]/30 transition-colors group-hover:border-[#9067ff]/60"></div>

                            <div className="w-16 h-16 rounded-xl bg-[#9067ff] flex items-center justify-center mb-8 shadow-lg shadow-[#9067ff]/20 flex-shrink-0">
                                <div className="scale-125">
                                    {card.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-brand-brown mb-6 font-cal leading-tight px-2">
                                {card.title}
                            </h3>

                            <p className="text-brand-brown/70 text-[16px] leading-[1.6] flex-grow">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating orb in corner */}
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#9067ff]/40 blur-2xl opacity-40 pointer-events-none"></div>
        </section>
    );
}
