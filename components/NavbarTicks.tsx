"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Configuration ---
// Tweak these numbers to match your reference exactly.
const CONFIG = {
    // VISUALS
    TICK_HEIGHT: 8,            // Height of static grey ticks (and pyramid base)
    TICK_WIDTH: 2,             // Width of ticks (pixels)
    TICK_SPACING: 4,           // Gap between ticks (pixels)

    // ACTIVE MARKER (Pyramid)
    PYRAMID_HEIGHTS: [8, 14, 20, 32, 20, 14, 8], // [h1, h2, h3, h4, h3, h2, h1]

    // HOVER MARKER (3 lines)
    HOVER_HEIGHTS: [14, 10, 14], // Long-Short-Long

    // WAVE ANIMATION PHYSICS
    DURATION: 600,             // ms
    WAVE_AMP: 12,              // Max height change pixels during travel
    WAVE_CYCLES: 2,            // How many times the wave ripples through during travel
    PHASE_STEP: 0.8,           // Phase offset per bar (controls ripple tightness)

    // COLORS
    COLOR_ACTIVE: "#FF7A00",   // Orange
    COLOR_BASELINE: "#A7A198", // Grey
};

const SECTIONS = ["Home", "Problem", "Solution", "Comparison", "Pilot", "ROI", "Founders", "FAQ"];

// --- Helper: Easing ---
// EaseInOutCubic for smooth start/end acceleration
const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// --- Hook: Measure Item Centers ---
// Uses ResizeObserver to maintain accurate center positions relative to the container.
const useItemCenters = (containerRef: React.RefObject<HTMLDivElement>, itemCount: number) => {
    const [centers, setCenters] = useState<number[]>([]);
    const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const measure = () => {
            const container = containerRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const newCenters: number[] = [];

            for (let i = 0; i < itemCount; i++) {
                const item = itemsRef.current[i];
                if (item) {
                    const rect = item.getBoundingClientRect();
                    // Calculate center relative to container
                    const center = (rect.left - containerRect.left) + (rect.width / 2);
                    newCenters.push(Math.round(center)); // Round to integer for crisp rendering
                } else {
                    newCenters.push(0);
                }
            }
            setCenters(newCenters);
        };

        // Initial measurement
        measure();

        // Observe resize
        const observer = new ResizeObserver(measure);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [itemCount]);

    return { centers, itemsRef };
};

// --- Component: Static Baseline Ticks ---
const BaselineTicks = () => {
    // Generate enough ticks to act as a dotted line. 
    // We use a high count (e.g. 150) and let overflow:hidden handle cutoff.
    // Ideally calculated based on width, but fixed dense count works for this UI.
    const tickCount = 150;

    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
            <div className="flex" style={{ gap: `${CONFIG.TICK_SPACING}px` }}>
                {Array.from({ length: tickCount }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-full bg-[#A7A198]"
                        style={{
                            width: `${CONFIG.TICK_WIDTH}px`,
                            height: `${CONFIG.TICK_HEIGHT}px`,
                            flexShrink: 0
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Component: Wave Marker (Active) ---
interface WaveMarkerProps {
    startX: number;
    targetX: number;
    isAnimating: boolean;
    onAnimationComplete: () => void;
}

const WaveMarker = ({ startX, targetX, isAnimating, onAnimationComplete }: WaveMarkerProps) => {
    const [currentX, setCurrentX] = useState(startX);
    const [barHeights, setBarHeights] = useState(CONFIG.PYRAMID_HEIGHTS);

    const startTimeRef = useRef<number | null>(null);
    const reqRef = useRef<number | null>(null);

    // Reset animation trigger
    useEffect(() => {
        if (!isAnimating) {
            // If not animating (initial load or resize), snap instantly
            setCurrentX(targetX);
            setBarHeights(CONFIG.PYRAMID_HEIGHTS);
            return;
        }

        startTimeRef.current = null;

        const animate = (time: number) => {
            if (startTimeRef.current === null) startTimeRef.current = time;
            const elapsed = time - startTimeRef.current;
            const progress = Math.min(elapsed / CONFIG.DURATION, 1);

            // 1. Position Interpolation
            const easedProgress = easeInOutCubic(progress);
            const nextX = startX + (targetX - startX) * easedProgress;
            setCurrentX(nextX);

            // 2. Wave Physics Calculation
            // Envelope peaks at 0.5 (mid-travel)
            const envelope = Math.sin(progress * Math.PI);

            const nextHeights = CONFIG.PYRAMID_HEIGHTS.map((baseHeight, i) => {
                // Wave term: sin(2π * (progress * cycles - i * phaseStep))
                const phase = i * CONFIG.PHASE_STEP;
                const waveTerm = Math.sin(2 * Math.PI * (progress * CONFIG.WAVE_CYCLES - phase));

                // Calculate modulated height
                const delta = waveTerm * CONFIG.WAVE_AMP * envelope;
                let h = baseHeight + delta;

                // Clamp to prevent disappearing or exploding bars
                h = Math.max(4, Math.min(h, baseHeight + CONFIG.WAVE_AMP * 1.5));

                return h;
            });

            setBarHeights(nextHeights);

            if (progress < 1) {
                reqRef.current = requestAnimationFrame(animate);
            } else {
                // Settled
                setCurrentX(targetX);
                setBarHeights(CONFIG.PYRAMID_HEIGHTS);
                onAnimationComplete();
            }
        };

        reqRef.current = requestAnimationFrame(animate);

        return () => {
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
        };
    }, [isAnimating, startX, targetX, onAnimationComplete]);

    const totalWidth = (CONFIG.PYRAMID_HEIGHTS.length * CONFIG.TICK_WIDTH) +
        ((CONFIG.PYRAMID_HEIGHTS.length - 1) * CONFIG.TICK_SPACING);

    return (
        <div
            className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center will-change-transform"
            style={{
                left: 0,
                // Using transform for performant sub-pixel positioning animation
                transform: `translateX(${currentX}px) translateX(-50%)`,
                width: totalWidth
            }}
        >
            <div className="flex items-center justify-center" style={{ gap: `${CONFIG.TICK_SPACING}px` }}>
                {barHeights.map((h, i) => (
                    <div
                        key={i}
                        className="rounded-full will-change-transform"
                        style={{
                            width: `${CONFIG.TICK_WIDTH}px`,
                            height: `${h}px`,
                            backgroundColor: CONFIG.COLOR_ACTIVE,
                            // Subtle brightness ripple during motion
                            filter: isAnimating ? `brightness(${1 + Math.sin(i + performance.now() * 0.01) * 0.15})` : 'none'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Component: Hover Marker ---
const HoverMarker = ({ centerX }: { centerX: number }) => {
    return (
        <motion.div
            className="absolute top-0 bottom-0 z-10 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
                left: 0,
                x: centerX, // Using Framer Motion 'x' which maps to transform: translateX
                translateX: "-50%",
                gap: `${CONFIG.TICK_SPACING}px`
            }}
        >
            {CONFIG.HOVER_HEIGHTS.map((h, i) => (
                <div
                    key={i}
                    className="rounded-full opacity-80"
                    style={{
                        width: `${CONFIG.TICK_WIDTH}px`,
                        height: `${h}px`,
                        backgroundColor: CONFIG.COLOR_ACTIVE
                    }}
                />
            ))}
        </motion.div>
    );
};

// --- Main Component ---
interface NavbarTicksProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function NavbarTicks({ currentIndex, onSectionChange }: NavbarTicksProps) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { centers, itemsRef } = useItemCenters(containerRef, SECTIONS.length);

    // Animation State
    const [animState, setAnimState] = useState({
        startX: 0,
        targetX: 0,
        isAnimating: false
    });

    // Handle Active Index Change
    useEffect(() => {
        if (centers.length === 0) return;

        const target = centers[currentIndex] || 0;

        setAnimState(prev => {
            const isFirstLoad = prev.targetX === 0 && prev.startX === 0;
            // Snap on first load, animate subsequent changes
            return {
                startX: isFirstLoad ? target : prev.targetX,
                targetX: target,
                isAnimating: !isFirstLoad
            };
        });

    }, [currentIndex, centers]);

    const handleAnimationComplete = useCallback(() => {
        setAnimState(prev => ({ ...prev, isAnimating: false, startX: prev.targetX }));
    }, []);

    return (
        <div className="relative flex flex-col items-center w-[600px] lg:w-[800px]" ref={containerRef}>
            {/* 1. Track Area (Baseline + Markers) */}
            <div className="relative w-full h-[40px] mb-1 overflow-visible">
                <BaselineTicks />

                {/* Hover Marker */}
                <AnimatePresence>
                    {hoverIndex !== null && hoverIndex !== currentIndex && centers[hoverIndex] && (
                        <HoverMarker centerX={centers[hoverIndex]} />
                    )}
                </AnimatePresence>

                {/* Active Wave Marker */}
                {centers.length > 0 && (
                    <WaveMarker
                        startX={animState.startX}
                        targetX={animState.targetX}
                        isAnimating={animState.isAnimating}
                        onAnimationComplete={handleAnimationComplete}
                    />
                )}
            </div>

            {/* 2. Labels */}
            <div className="w-full grid grid-cols-8 relative z-30">
                {SECTIONS.map((label, index) => {
                    const isTarget = currentIndex === index;

                    return (
                        <button
                            key={label}
                            ref={el => { itemsRef.current[index] = el; }}
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
