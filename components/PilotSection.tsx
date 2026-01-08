"use client";

import { motion } from "framer-motion";

export default function PilotSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:pl-20 md:pr-[120px] pt-[142px] pb-16 bg-grid">
            <div className="max-w-7xl w-full text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-[40px] text-secondary mb-5 font-cal leading-tight">
                        You're the Pilot, Not the Passenger
                    </h2>
                    <p className="text-[20px] text-muted font-medium max-w-4xl leading-relaxed">
                        We know you're worried about AI making wrong decisions. That's why CaltAI uses "Guided Autonomy", you maintain 100% control with 1% effort.
                    </p>
                </motion.div>

                {/* Human in the Loop Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full flex justify-center"
                >
                    <div className="relative w-full max-w-6xl group">
                        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full group-hover:bg-primary/10 transition-colors duration-700"></div>
                        <img
                            src="/Humann in the loop.png"
                            alt="Human in the Loop"
                            className="w-full h-auto relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Subtle brand elements */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        </section>
    );
}
