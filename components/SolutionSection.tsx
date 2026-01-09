"use client";

import { motion } from "framer-motion";

interface SolutionSectionProps {
    direction?: "down" | "up";
    isCurrent?: boolean;
}

const solutionCards = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
        ),
        title: "Context Graph",
        subtitle: "(The Brain)",
        description: "Builds a living record of your business rules, decisions, and institutional knowledge. Finally, a \"single source of truth\" that actually works."
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="9" y1="16" x2="15" y2="16"></line>
                <line x1="12" y1="8" x2="12" y2="8"></line>
            </svg>
        ),
        title: "Proactive decisions",
        subtitle: "(The Logic)",
        description: "Doesn't wait for you to ask. Detects signals, makes recommendations, and surfaces what matters, before you even know to look."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
        ),
        title: "Autonomous Execution",
        subtitle: "(The Engine)",
        description: `Takes action on your behalf, pausing ads, creating tasks, triggering workflows.The feedback loop: 
        Action → Measurement → Learning.`
    }
];

export default function SolutionSection({ direction = "down", isCurrent = true }: SolutionSectionProps) {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: direction === "down" ? 20 : -20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:pl-20 md:pr-[120px] pt-[142px] pb-16 bg-background"
        >
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('/background.svg')] bg-cover bg-center pointer-events-none dark:invert dark:grayscale" />

            <div className="max-w-7xl w-full relative z-10">
                <motion.div
                    variants={itemVariants}
                    className="mb-[30px]"
                >
                    <h2 className="text-[40px] text-foreground mb-5 font-cal leading-tight">
                        Not Another Tool. An Operations Layer.
                    </h2>
                    <p className="text-[20px] text-muted font-medium max-w-4xl leading-relaxed">
                        CaltAI doesn't just connect your tools, it thinks, decides, and executes. It's the autonomous layer that sits on top of your Franken-stack and makes it actually work.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutionCards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white border border-[#E3DFD9] rounded-[24px] p-8 md:p-10 backdrop-blur-sm flex flex-col h-full hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                                    <div className="scale-125 text-white">
                                        {card.icon}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[20px] font-bold text-secondary leading-tight">
                                        {card.title}
                                    </h3>
                                    <span className="text-[12px] text-primary font-bold uppercase tracking-wider mt-1 opacity-70">
                                        {card.subtitle}
                                    </span>
                                </div>
                            </div>

                            <p className="text-muted text-[16px] leading-relaxed flex-grow">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Highlight Section */}
                <motion.div
                    variants={itemVariants}
                    className="mt-[32px] flex flex-col md:flex-row items-center gap-10 p-10 rounded-3xl bg-white border border-[#E3DFD9] backdrop-blur-sm"
                >
                    <div className="flex-1">
                        <h4 className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">The Result</h4>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-cal uppercase italic font-medium">
                            A Single Source of Knowledge
                        </h3>
                        <p className="text-muted text-base leading-relaxed">
                            CaltAI creates a unified "Brain" for your business. It captures every decision, learns from every result, and ensures your team is always moving in the same direction.
                        </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <div className="flex flex-col items-end">
                            <span className="text-foreground font-bold text-4xl mb-[10px] font-cal">11 min</span>
                            <span className="text-muted-foreground text-xs uppercase tracking-widest">Setup Time</span>
                        </div>
                        <div className="w-[1px] h-12 bg-border" />
                        <div className="flex flex-col items-start">
                            <span className="text-accent font-bold text-4xl mb-[10px] font-cal">90 days</span>
                            <span className="text-muted-foreground text-xs uppercase tracking-widest">ROI Positive</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
