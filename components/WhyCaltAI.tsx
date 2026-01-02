"use client";

import { motion } from "framer-motion";

const alternatives = [
    {
        badge: "Workflow Automation",
        badgeColor: "bg-brand-orange",
        borderColor: "border-brand-orange/30",
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
        borderColor: "border-brand-brown/30",
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
        borderColor: "border-[#9067ff]/30",
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

export default function WhyCaltAI() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:px-20 pt-[122px] pb-16 bg-grid">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-[40px] font-bold text-brand-brown mb-5 font-cal leading-tight">
                        Why CaltAI vs. The Alternatives
                    </h2>
                    <p className="text-[20px] text-brand-brown/70 font-medium max-w-4xl leading-relaxed">
                        You've probably tried other solutions. Here's why they fall short.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {alternatives.map((alt, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col p-10 min-h-[450px] border-y border-x md:border-x-0 ${index === 0 ? 'md:border-l' : ''} ${index === alternatives.length - 1 ? 'md:border-r' : ''} border-brand-brown/10 bg-white/40 group`}
                        >
                            {/* Top Badge */}
                            <div className={`absolute top-0 right-0 h-10 px-6 ${alt.badgeColor} text-white font-bold text-sm flex items-center justify-center -translate-y-full`}>
                                {alt.badge}
                            </div>

                            {/* Decorative corner dot */}
                            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-brown/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <h3 className="text-2xl font-bold text-brand-brown mb-6 font-cal leading-tight pt-4">
                                {alt.title}
                            </h3>

                            <p className="text-brand-brown/70 text-[16px] leading-[1.6] mb-8">
                                {alt.description}
                            </p>

                            <ul className="space-y-4 flex-grow pt-4 border-t border-brand-brown/10">
                                {alt.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            {alt.type === "positive" ? (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            ) : (
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                                </svg>
                                            )}
                                        </div>
                                        <span className={`text-[15px] ${alt.type === 'positive' ? 'text-brand-brown' : 'text-brand-brown/60'}`}>
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Left Corner Arrow - to match brand aesthetic */}
            <div className="absolute bottom-8 left-8 w-10 h-10 bg-white border border-gray-100 rounded-md flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff602e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
        </section>
    );
}
