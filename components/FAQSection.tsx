"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Does this replace my existing tools?",
        answer: "No. CaltAI sits \"on top\" of them. It acts as the Execution Path that connects your Slack, Jira, and Stripe into one autonomous engine. Instead of \"talking\" to tools, it navigates them based on your specific industry rules."
    },
    {
        question: "Is my data safe in the Context Graph?",
        answer: "Yes. Your data remains yours. We use enterprise-grade encryption and siloed environments to ensure that your business logic and sensitive information never leak into public models."
    },
    {
        question: "Will the AI make decisions without my permission?",
        answer: "Only if you let it. You can define 'Action Boundaries' where the AI requires human approval before execution, giving you full control over high-stakes decisions."
    },
    {
        question: "How does it know my specific business rules?",
        answer: "We ingest your documentation, SOPs, and historical data into a 'Context Graph' that creates a semantic map of how your business actually operates."
    },
    {
        question: "Why not just use ChatGPT for this?",
        answer: "ChatGPT is a brainstormer; CaltAI is an executor. ChatGPT can't manage your Jira tickets or update your CRM based on a Slack conversation. CaltAI does the work, it doesn't just talk about it."
    },
    {
        question: "How long does it take to get started?",
        answer: "The initial integration takes about 11 minutes. Most businesses see their first autonomous workflows running within 48 hours of setup."
    },
    {
        question: "What happens if the AI makes a mistake?",
        answer: "Every action is logged and reversible. Our 'Measurement Loop' identifies deviations from expected outcomes and alerts you immediately if something doesn't look right."
    },
    {
        question: "Can a one-person business really scale to $1M with this?",
        answer: "Absolutely. By automating the administrative and operational load that usually requires hiring a team, you keep your margins high and your focus on growth."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");

    return (
        <section className="relative w-full h-full flex flex-col items-center justify-start px-6 lg:px-24 pt-[122px] overflow-hidden bg-grid">
            {/* Background Circular Lines */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <div className="relative w-[120%] h-[120%] opacity-5">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-brown rounded-full"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Side: Questions List */}
                <div className="flex flex-col gap-13">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[40px] font-bold text-brand-brown mb-5 font-cal leading-tight"
                    >
                        The CaltAI FAQ
                    </motion.h2>

                    <div className="flex flex-col border-t border-brand-brown/10">
                        {faqs.map((faq, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onClick={() => setActiveIndex(index)}
                                className={`text-left py-[12px] px-4 border-b border-brand-brown/10 flex items-center transition-all relative ${activeIndex === index ? 'text-brand-brown' : 'text-brand-brown/40 hover:text-brand-brown/60'
                                    }`}
                            >
                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="faq-indicator"
                                        className="absolute left-0 w-1 h-8 bg-brand-orange"
                                    />
                                )}
                                <span className="font-cal text-lg lg:text-xl font-medium ml-4">
                                    {faq.question}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Answer Box & Assistant */}
                <div className="relative flex flex-col items-center justify-center gap-12">
                    {/* Assistant Orb */}
                    <div className="relative w-40 h-40 lg:w-56 lg:h-56 -mb-12">
                        <div className="relative w-full h-full bg-white/20 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center p-8 overflow-hidden">
                            <img
                                src="/AI design.svg"
                                alt="AI Assistant"
                                className="w-full h-full object-contain animate-float"
                            />
                        </div>
                    </div>

                    {/* Answer Bubble */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="bg-brand-cream border border-[#f0e4d7] rounded-[24px] p-8 max-w-lg w-full shadow-sm text-center"
                        >
                            <p className="text-[16px] leading-relaxed text-brand-brown font-medium">
                                {faqs[activeIndex].answer}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Custom Input */}
                    <div className="w-full max-w-md mt-4">
                        <div className="relative group">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask your question"
                                className="w-full h-16 bg-white border border-brand-brown/10 rounded-full px-8 pr-32 text-brand-brown font-cal font-medium focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-sm"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                <button className="p-2 text-brand-brown/40 hover:text-brand-orange transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                                </button>
                                <button className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 hover:scale-105 transition-transform overflow-hidden">
                                    {inputValue ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    ) : (
                                        <div className="flex items-center gap-0.5 h-3">
                                            <motion.div
                                                animate={{ height: [6, 12, 6] }}
                                                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                                className="w-[2px] bg-white rounded-full"
                                            ></motion.div>
                                            <motion.div
                                                animate={{ height: [10, 16, 10] }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.1 }}
                                                className="w-[2px] bg-white rounded-full"
                                            ></motion.div>
                                            <motion.div
                                                animate={{ height: [8, 14, 8] }}
                                                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                                                className="w-[2px] bg-white rounded-full"
                                            ></motion.div>
                                            <motion.div
                                                animate={{ height: [4, 10, 4] }}
                                                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.3 }}
                                                className="w-[2px] bg-white rounded-full"
                                            ></motion.div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Left Button */}
            <div className="absolute bottom-8 left-8">
                <div className="w-12 h-12 border border-brand-orange/30 rounded-lg flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm group cursor-pointer hover:border-brand-orange transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff602e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-0 transition-transform group-hover:scale-110">
                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
