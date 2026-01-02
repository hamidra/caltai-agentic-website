"use client";

import { motion } from "framer-motion";

export default function ROISection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:px-20 pt-[122px] pb-16 bg-grid">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-left"
                >
                    <h2 className="text-[40px] font-bold text-brand-brown mb-5 font-cal leading-tight">
                        The ROI is simple
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Without CaltAI */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-10 border border-brand-orange/40 bg-white/40 backdrop-blur-sm group"
                    >
                        {/* Decorative corner dots */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-orange rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-orange rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-brand-orange rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-brand-orange rounded-full translate-x-1/2 translate-y-1/2"></div>

                        <h3 className="text-xl font-bold text-brand-orange mb-10 text-center uppercase tracking-widest">
                            Without CaltAI
                        </h3>

                        <div className="space-y-6 mb-10">
                            {[
                                { label: "Ops Coordinator Salary", value: "$60,000" },
                                { label: "Benefits & Overhead", value: "$15,000" },
                                { label: "Management Time", value: "$10,000" },
                                { label: "Tool Subscriptions", value: "$9,600" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/30 p-4 rounded-lg">
                                    <span className="text-brand-brown/70 font-medium">{item.label}</span>
                                    <span className="text-brand-brown font-bold">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-brand-orange/20 flex justify-between items-center">
                            <span className="text-xl font-bold text-brand-brown">Total</span>
                            <span className="text-3xl font-bold text-brand-orange">$94,600<span className="text-lg">+</span>/year</span>
                        </div>
                    </motion.div>

                    {/* With CaltAI */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-10 border border-[#9067ff]/40 bg-white/40 backdrop-blur-sm group"
                    >
                        {/* Decorative corner dots */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#9067ff] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#9067ff] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#9067ff] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#9067ff] rounded-full translate-x-1/2 translate-y-1/2"></div>

                        <h3 className="text-xl font-bold text-[#9067ff] mb-10 text-center uppercase tracking-widest">
                            With CaltAI
                        </h3>

                        <div className="space-y-6 mb-10">
                            {[
                                { label: "Ops Coordinator Salary", value: "$0" },
                                { label: "Benefits & Overhead", value: "$0" },
                                { label: "Management Time", value: "$0" },
                                { label: "Tool Subscriptions", value: "$0" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-[#9067ff]/5 p-4 rounded-lg">
                                    <span className="text-brand-brown/70 font-medium line-through decoration-brand-brown/30">{item.label}</span>
                                    <span className="text-[#9067ff] font-bold">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-[#9067ff]/20 flex justify-between items-center">
                            <span className="text-xl font-bold text-brand-brown">Total</span>
                            <span className="text-3xl font-bold text-[#9067ff]">$6,000/year</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-2xl md:text-3xl font-bold text-brand-brown">
                        With CaltAI you will Save <span className="text-brand-orange text-4xl md:text-5xl">$88,600+</span> per year
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
