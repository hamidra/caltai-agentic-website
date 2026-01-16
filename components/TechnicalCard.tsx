"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechnicalCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "orange" | "blue";
    isROI?: boolean;
    hoverEffect?: boolean;
}

export default function TechnicalCard({
    children,
    className = "",
    variant = "orange",
    isROI = false,
    hoverEffect = true,
}: TechnicalCardProps) {
    // Variant specific colors
    const themes = {
        orange: {
            solid: "bg-[#FB631C]",
            dashed: "bg-[#B8B1A8]",
            marker: "border-[#695B46] dark:border-primary",
            bg: "from-[#FFF1EB] to-white dark:from-[rgba(251,99,28,0.15)] dark:to-[#0a0a0b]",
            text: "text-primary transition-colors"
        },
        blue: {
            solid: "bg-[#8267F1]",
            dashed: "bg-[#B8B1A8]",
            marker: "border-[#8267F1]",
            text: "text-[#8267F1] transition-colors"
        }
    };

    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const theme = themes[variant];
    const borderWidth = isROI ? "2px" : "1px";

    // Dynamic background based on theme state
    const bgStyle = isDark
        ? variant === 'orange'
            ? 'radial-gradient(circle at center, rgba(251, 99, 28, 0.15) 0%, #0a0a0b 100%)'
            : 'radial-gradient(circle at center, rgba(130, 103, 241, 0.15) 0%, #0a0a0b 100%)'
        : variant === 'orange'
            ? 'radial-gradient(circle at center, #FFF1EB 0%, #ffffff 100%)'
            : 'radial-gradient(circle at center, #F9FAFF 0%, #ffffff 100%)';

    return (
        <div
            className={`
                relative 
                bg-surface
                dark:bg-[#0a0a0b]
                ${theme.text}
                ${hoverEffect ? "hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md" : ""}
                ${className}
            `}
            style={{
                backgroundImage: bgStyle,
            }}
        >
            {/* Left Solid Border */}
            <div
                className={`absolute left-0 top-0 bottom-0 ${theme.solid}`}
                style={{ width: borderWidth }}
            />
            {/* Bottom Solid Border */}
            <div
                className={`absolute bottom-0 left-0 right-0 ${theme.solid}`}
                style={{ height: borderWidth }}
            />

            {/* Top Dashed Border */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: borderWidth }}>
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(to right, #B8B1A8 50%, transparent 50%)`,
                        backgroundSize: '10px 100%',
                    }}
                />
            </div>

            {/* Right Dashed Border */}
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ width: borderWidth }}>
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #B8B1A8 50%, transparent 50%)`,
                        backgroundSize: '100% 10px',
                    }}
                />
            </div>

            {/* Blueprint Decorative Lines (subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden">
                <div className="absolute left-4 top-0 bottom-0 w-[0.5px] bg-current" />
                <div className="absolute top-4 left-0 right-0 h-[0.5px] bg-current" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
}
