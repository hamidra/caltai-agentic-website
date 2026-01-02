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

    // Percentage position for the marker (0 to 100%)
    // sections are justified between, so 0 is left, 7 is right.
    // 0/7 = 0%, 7/7 = 100%
    const positionPercent = (targetIndex / (SECTIONS.length - 1)) * 100;

    return (
        <div className="relative flex flex-col items-center w-[600px] lg:w-[800px]">
            {/* Tick Track Container */}
            <div className="relative w-full h-[20px] mb-3">
                {/* 1. Static Gray Ticks Background */}
                <div className="absolute inset-0 flex items-end justify-between px-[10px]">
                    {/* 
                      Generating a lot of ticks to simulate the static track. 
                      We use a simple array. density adjusted to visual match.
                    */}
                    {Array.from({ length: 101 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[2px] bg-[#A7A198] rounded-full"
                            style={{
                                height: i % 2 === 0 ? '6px' : '10px',
                                opacity: 0.5
                            }}
                        />
                    ))}
                </div>

                {/* 2. Animated Orange Marker */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[40px] -ml-[20px] flex items-end justify-center gap-[5px]"
                    animate={{ left: `${positionPercent}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* The V-Shape Orange Ticks */}
                    {/* Left small */}
                    <div className="w-[2px] h-[8px] bg-[#FB631C] rounded-full" />
                    {/* Left medium */}
                    <div className="w-[2px] h-[12px] bg-[#FB631C] rounded-full" />
                    {/* Center tall */}
                    <div className="w-[2px] h-[18px] bg-[#FB631C] rounded-full shadow-[0_0_8px_rgba(251,99,28,0.6)]" />
                    {/* Right medium */}
                    <div className="w-[2px] h-[12px] bg-[#FB631C] rounded-full" />
                    {/* Right small */}
                    <div className="w-[2px] h-[8px] bg-[#FB631C] rounded-full" />
                </motion.div>
            </div>

            {/* Labels */}
            <div className="w-full flex justify-between items-center px-0 relative z-10">
                {SECTIONS.map((label, index) => {
                    const isActive = currentIndex === index;
                    const isHovered = hoverIndex === index;
                    const isTarget = targetIndex === index;

                    return (
                        <button
                            key={label}
                            onClick={() => onSectionChange(index)}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className={`
                                text-[10px] lg:text-[11px] uppercase tracking-[0.1em] transition-all duration-300 relative
                                ${isTarget ? "text-brand-brown font-bold scale-110" : "text-brand-brown/40 font-medium"}
                            `}
                            style={{
                                width: '80px', // Fixed width for hit target consistency
                                textAlign: 'center'
                            }}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
