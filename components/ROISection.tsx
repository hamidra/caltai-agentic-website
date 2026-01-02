"use client";

import { motion } from "framer-motion";

export default function ROISection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:px-20 pt-[142px] pb-16 bg-grid">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-16 max-w-5xl mx-auto">
                    {/* Without CaltAI */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 lg:p-12 flex flex-col h-full min-h-[400px]"
                    >
                        {/* Background Frame */}
                        <div className="absolute inset-0 z-0">
                            <img src="/box Orange.svg" alt="" className="w-full h-full" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-[#FB631C] mb-8 text-center font-cal">
                                Without CaltAI
                            </h3>

                            <div className="space-y-5 flex-grow font-cal">
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Ops Coordinator Salary</span>
                                    <span className="text-brand-brown font-bold">$60,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Benefits & Overhead</span>
                                    <span className="text-brand-brown font-bold">$15,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Management Time</span>
                                    <span className="text-brand-brown font-bold">$10,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Tool Subscriptions</span>
                                    <span className="text-brand-brown font-bold">$9,600</span>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-[#FB631C]/20 flex justify-between items-end font-cal">
                                <span className="text-lg font-bold text-brand-brown/60">Total</span>
                                <span className="text-2xl lg:text-3xl font-bold text-[#FB631C]">$94,600<span className="text-lg text-[#FB631C]/80">/year</span></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* With CaltAI */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 lg:p-12 flex flex-col h-full min-h-[400px]"
                    >
                        {/* Background Frame */}
                        <div className="absolute inset-0 z-0">
                            <img src="/box blue.svg" alt="" className="w-full h-full" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-[#8267F1] mb-8 text-center font-cal">
                                With CaltAI
                            </h3>

                            <div className="space-y-5 flex-grow font-cal">
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Ops Coordinator Salary</span>
                                    <span className="text-brand-brown font-bold">$0</span>
                                </div>
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Benefits & Overhead</span>
                                    <span className="text-brand-brown font-bold">$0</span>
                                </div>
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">Management Time</span>
                                    <span className="text-brand-brown font-bold">$0</span>
                                </div>
                                <div className="flex justify-between items-center text-sm lg:text-base">
                                    <span className="text-brand-brown/70 font-medium">CaltAI Subscription</span>
                                    <span className="text-brand-brown font-bold">$99/month</span>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-[#8267F1]/20 flex justify-between items-end font-cal">
                                <span className="text-lg font-bold text-brand-brown/60">Total</span>
                                <span className="text-2xl lg:text-3xl font-bold text-[#8267F1]">$1,188<span className="text-lg text-[#8267F1]/80">/year</span></span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-2xl md:text-[32px] font-bold text-brand-brown font-cal">
                        With CaltAI you will Save <span className="text-[#FB631C] text-3xl md:text-[40px]">$93,400+</span> per year
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
