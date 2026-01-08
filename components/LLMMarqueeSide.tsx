"use client";

import React from "react";
import { motion } from "framer-motion";

const LLM_LOGOS = [
    { name: "Gemini", lightSrc: "/Google_Gemini_logo.svg", darkSrc: "/Google_Gemini_logo.svg" },
    { name: "OpenAI", lightSrc: "/OpenAI_Logo.svg", darkSrc: "/OpenAI_Logo_dark_Mode.svg" },
    { name: "Claude", lightSrc: "/Claude_AI_logo.svg", darkSrc: "/Claude_Dark_Mode.svg" },
    { name: "Grok", lightSrc: "/Grok-feb-2025-logo.svg", darkSrc: "/Grok-Dark-Mode.svg" },
];

export default function LLMMarqueeSide() {
    // Duplicate for infinite scroll
    const scrollingLogos = [...LLM_LOGOS, ...LLM_LOGOS, ...LLM_LOGOS];

    return (
        <div className="fixed left-0 top-0 bottom-0 z-50 flex items-center pointer-events-none">
            {/* Vertical Text Container */}
            <div
                className="absolute left-[20px] h-[300px] flex items-center justify-center pointer-events-auto"
            >
                <span
                    className="whitespace-nowrap text-secondary/40 font-medium text-[10px] tracking-[0.3em] uppercase"
                    style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                    }}
                >
                    Powered by trusted Models
                </span>
            </div>

            {/* Vertically Scrolling Logos Container */}
            <div
                className="absolute left-[20px] ml-[48px] h-[400px] overflow-hidden group pointer-events-auto" // 20px (base) + ~0px (center of text container) + 28px gap
                style={{ width: '100px' }}
            >
                <div className="flex flex-col items-center gap-16 py-12 animate-vertical-marquee">
                    {scrollingLogos.map((logo, idx) => (
                        <div
                            key={idx}
                            className={`h-6 w-full flex items-center justify-center transition-all duration-300 cursor-pointer
                                grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110
                                dark:grayscale-0 dark:opacity-100
                            `}
                        >
                            {/* Light Mode Logo */}
                            <img
                                src={logo.lightSrc}
                                alt={logo.name}
                                className="h-full w-auto object-contain dark:hidden"
                                style={{ maxWidth: '80px' }}
                            />
                            {/* Dark Mode Logo */}
                            <img
                                src={logo.darkSrc}
                                alt={logo.name}
                                className={`h-full w-auto object-contain hidden dark:block ${logo.name !== 'Gemini' ? 'invert brightness-200' : ''
                                    }`}
                                style={{ maxWidth: '80px' }}
                            />
                        </div>
                    ))}
                </div>

                {/* Vertical Fade gradients for smooth entering/exiting */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />

                <style>{`
                    @keyframes vertical-marquee {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-33.333%); }
                    }
                    .animate-vertical-marquee {
                        animation: vertical-marquee 30s linear infinite;
                    }
                    .group:hover .animate-vertical-marquee {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </div>
    );
}
