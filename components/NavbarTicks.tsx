"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = ["Home", "Problem", "Solution", "Comparison", "Pilot", "ROI", "Founders", "FAQ"];

interface NavbarTicksProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function NavbarTicks({ currentIndex, onSectionChange }: NavbarTicksProps) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const targetIndex = hoverIndex !== null ? hoverIndex : currentIndex;

    // Grid-based positioning:
    // 8 columns. Each column is 12.5% wide.
    // Center of column 0 is 6.25%. Center of column 1 is 18.75%, etc.
    // Formula: (index * 12.5) + 6.25

    return (
        <div className="relative flex flex-col items-center w-[600px] lg:w-[800px]">
            {/* Tick Track Container */}
            <div className="relative w-full h-[24px] mb-1">
                {/* 1. Static Gray Ticks Background */}
                <div className="absolute inset-0 flex items-center justify-between px-0">
                    {/* 
                      Generating dense ticks across the full width. 
                      Using a prime number or high count to avoid obvious grid alignment patterns with the labels 
                      unless intended. 120 ticks gives a good dense Ruler look.
                    */}
                    {Array.from({ length: 121 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[1.5px] bg-[#A7A198] rounded-full"
                            style={{
                                height: '8px',
                                opacity: 0.4
                            }}
                        />
                    ))}
                </div>

                {/* 2. Hover Marker (3 lines: Long-Short-Long) */}
                {hoverIndex !== null && hoverIndex !== currentIndex && (
                    <motion.div
                        className="absolute top-0 bottom-0 w-[20px] -ml-[10px] flex items-center justify-center gap-[3px] z-10"
                        animate={{ left: `${(hoverIndex * 12.5) + 6.25}%` }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        <div className="w-[2px] bg-[#FB631C] rounded-full h-[12px] opacity-80" />
                        <div className="w-[2px] bg-[#FB631C] rounded-full h-[8px] opacity-80" />
                        <div className="w-[2px] bg-[#FB631C] rounded-full h-[12px] opacity-80" />
                    </motion.div>
                )}

                {/* 3. Active Marker (7 lines: Pyramid/Mountain) */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[60px] -ml-[30px] flex items-center justify-center gap-[4px] z-20"
                    animate={{ left: `${(currentIndex * 12.5) + 6.25}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    {/* 1 & 7: Short (match gray) */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[8px]" />
                    {/* 2 & 6: Med */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[14px]" />
                    {/* 3 & 5: Tall */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[20px]" />
                    {/* 4: Tallest (Mountain Peak) */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[28px] shadow-[0_0_12px_rgba(251,99,28,0.6)]" />
                    {/* 5 */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[20px]" />
                    {/* 6 */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[14px]" />
                    {/* 7 */}
                    <div className="w-[2px] bg-[#FB631C] rounded-full h-[8px]" />
                </motion.div>
            </div>

            {/* Labels */}
            <div className="w-full grid grid-cols-8 relative z-10">
                {SECTIONS.map((label, index) => {
                    const isTarget = targetIndex === index;

                    return (
                        <button
                            key={label}
                            onClick={() => onSectionChange(index)}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className={`
                                flex justify-center items-center h-8
                                text-[10px] lg:text-[11px] uppercase tracking-[0.1em] transition-all duration-300
                                ${isTarget ? "text-brand-brown font-bold scale-110" : "text-brand-brown/40 font-medium hover:text-brand-brown/70"}
                            `}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
