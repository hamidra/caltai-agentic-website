"use client";

import { motion } from "framer-motion";

const SECTIONS = ["Home", "The Problem", "Solution", "Pricing", "About"];

interface NavbarTicksProps {
    currentIndex: number;
}

export default function NavbarTicks({ currentIndex }: NavbarTicksProps) {
    const tickCount = 80;
    const currentLabel = SECTIONS[currentIndex] || SECTIONS[0];

    // Calculate the percentage based on discrete index
    const progress = currentIndex / (SECTIONS.length - 1);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-[3px] h-4 items-end mb-2">
                {[...Array(tickCount)].map((_, i) => {
                    // Logic for orange ticks: a sliding window based on percentage
                    const center = progress * tickCount;
                    const width = 15; // Width of the orange window
                    const isOrange = i >= center - width && i <= center + width;

                    return (
                        <motion.div
                            key={i}
                            className="w-[1.5px]"
                            animate={{
                                height: i % 5 === 0 ? 12 : 6,
                                backgroundColor: isOrange ? "#ff602e" : "#e5e7eb"
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    );
                })}
            </div>
            <motion.span
                key={currentLabel}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-brown/40"
            >
                {currentLabel}
            </motion.span>
        </div>
    );
}
