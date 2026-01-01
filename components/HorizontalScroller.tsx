"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface HorizontalScrollerProps {
    children: React.ReactNode[];
}

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
    const targetRef = useRef<HTMLDivElement>(null);

    // Calculate total height based on number of sections
    // Each section takes 100vh of vertical scroll to "pass"
    const totalSections = children.length;
    const containerHeight = `${totalSections * 100}vh`;

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll (0 to 1) to horizontal translation (0 to -(total-1)*100%)
    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(totalSections - 1) * 100}%`]
    );

    // Smooth out the animation
    const x = useSpring(xTranslate, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={targetRef} className="relative" style={{ height: containerHeight }}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-background">
                <motion.div style={{ x }} className="flex">
                    {children.map((child, index) => (
                        <div
                            key={index}
                            className="relative h-screen w-screen flex-shrink-0"
                        >
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
