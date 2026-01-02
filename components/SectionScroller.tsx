"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface SectionScrollerProps {
    children: React.ReactNode[];
    onSectionChange?: (index: number) => void;
}

export default function SectionScroller({ children, onSectionChange }: SectionScrollerProps) {
    const [index, setIndex] = useState(0);
    const lastScrollTime = useRef(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const touchStart = useRef(0);

    const scrollCooldown = 500; // ms between section changes
    const scrollThreshold = 30; // minimum delta to trigger

    const handleScroll = useCallback(
        (e: WheelEvent | TouchEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < scrollCooldown) return;

            const currentSection = sectionRefs.current[index];
            if (!currentSection) return;

            const { scrollTop, scrollHeight, clientHeight } = currentSection;

            // Check if the section is actually scrollable
            const isScrollable = scrollHeight > clientHeight + 5; // 5px buffer for tiny overflows

            // Calculate boundaries with a 5px buffer for rounding errors and better feel
            const isAtBottom = isScrollable ? Math.ceil(scrollTop + clientHeight) >= scrollHeight - 5 : true;
            const isAtTop = isScrollable ? scrollTop <= 5 : true;

            let delta = 0;
            if (e instanceof WheelEvent) {
                delta = e.deltaY;
            } else if (e instanceof TouchEvent && e.type === "touchmove") {
                const touch = e.changedTouches[0].clientY;
                delta = touchStart.current - touch;
            }

            if (Math.abs(delta) < scrollThreshold) return;

            // Intent: Scrolling Down
            if (delta > 0) {
                if (isAtBottom && index < children.length - 1) {
                    setIndex((prev) => prev + 1);
                    lastScrollTime.current = now;
                }
            }
            // Intent: Scrolling Up
            else if (delta < 0) {
                if (isAtTop && index > 0) {
                    setIndex((prev) => prev - 1);
                    lastScrollTime.current = now;
                }
            }
        },
        [index, children.length]
    );

    const handleTouchStart = (e: TouchEvent) => {
        touchStart.current = e.touches[0].clientY;
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        onSectionChange?.(index);
    }, [index, onSectionChange]);

    return (
        <div className="fixed inset-0 overflow-hidden bg-background">
            {children.map((child, i) => (
                <motion.div
                    key={i}
                    ref={(el) => { if (el) sectionRefs.current[i] = el; }}
                    initial={false}
                    animate={{
                        opacity: index === i ? 1 : 0,
                        pointerEvents: index === i ? "auto" : "none",
                        visibility: Math.abs(index - i) <= 1 ? "visible" : "hidden" // Optimization: only render adjacent
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut"
                    }}
                    className="absolute inset-0 h-screen w-screen overflow-y-auto scroll-smooth hide-scrollbar transition-visibility"
                >
                    {child}
                </motion.div>
            ))}

            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
