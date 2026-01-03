"use client";

import { motion } from "framer-motion";

const alternatives = [
    {
        badge: "Workflow Automation",
        badgeColor: "bg-brand-orange",
        borderColor: "border-brand-orange",
        title: '"Dumb Pipes"',
        description: "Reactive automation. If X happens, do Y. No memory, no context, no decisions.",
        points: [
            "Can't look at trends or make judgments",
            "Breaks when logic gets complex",
            "You're still the bottleneck"
        ],
        type: "negative"
    },
    {
        badge: "Enterprise ERP",
        badgeColor: "bg-brand-brown",
        borderColor: "border-brand-brown",
        title: '"Heavy & Rigid"',
        description: "6-12 month implementation. $100K+ cost. Forces you to change your processes.",
        points: [
            "Designed for enterprises, not SMBs",
            "Requires dedicated IT team",
            "Database of record, not engine of action"
        ],
        type: "negative"
    },
    {
        badge: "CaltAI",
        badgeColor: "bg-[#9067ff]",
        borderColor: "border-[#9067ff]",
        title: '"Brain of Your Business"',
        description: "Sits on top of your existing stack. Connects, thinks, decides, executes. Learns.",
        points: [
            "Setup in 11 minutes, ROI in 90 days",
            "No rip-and-replace required",
            "Action → Measurement → Learning loop"
        ],
        type: "positive"
    }
];

interface WhyCaltAIProps {
    isActive?: boolean;
}

export default function WhyCaltAI({ isActive = false }: WhyCaltAIProps) {
    const containerVariants: any = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.1, staggerDirection: -1 }
        }
    };

    const cardVariants: any = {
        initial: {
            opacity: 0,
            y: 40,
            scale: 0.95,
            rotateX: -8
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:pl-20 md:pr-[120px] pt-[142px] pb-16 bg-grid perspective-1000">
            <motion.div
                className="max-w-7xl w-full"
                variants={containerVariants}
                initial="initial"
                animate={isActive ? "animate" : "initial"}
                exit="exit"
            >
                <motion.div
                    variants={cardVariants}
                    className="mb-16"
                >
                    <h2 className="text-[40px] font-bold text-brand-brown mb-5 font-cal leading-tight">
                        Why CaltAI vs. The Alternatives
                    </h2>
                    <p className="text-[20px] text-brand-brown/70 font-medium max-w-4xl leading-relaxed">
                        You've probably tried other solutions. Here's why they fall short.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {alternatives.map((alt, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`relative flex flex-col p-8 h-[370px] border ${alt.borderColor} bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-2xl overflow-hidden`}
                        >
                            {/* Top Badge */}
                            <div className={`absolute top-0 right-0 py-3 px-6 ${alt.badgeColor} text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center rounded-bl-xl`}>
                                {alt.badge}
                            </div>

                            <h3 className="text-[24px] font-bold text-brand-brown mb-4 font-cal leading-tight pt-8">
                                {alt.title}
                            </h3>

                            <p className="text-brand-brown/70 text-[15px] leading-[1.5] mb-6">
                                {alt.description}
                            </p>

                            <ul className="space-y-3 mt-auto">
                                {alt.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            {alt.type === "positive" ? (
                                                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <span className={`text-[14px] leading-snug ${alt.type === 'positive' ? 'text-brand-brown font-medium' : 'text-brand-brown/60 italic'}`}>
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative element */}
                            <div className={`absolute -bottom-12 -right-12 w-24 h-24 rounded-full opacity-[0.03] ${alt.type === 'positive' ? 'bg-[#9067ff]' : 'bg-brand-brown'} group-hover:scale-150 transition-transform duration-700`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
