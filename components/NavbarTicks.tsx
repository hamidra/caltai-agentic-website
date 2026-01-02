"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Configuration ---
// Adjust these to match your design exactly.
const CONFIG = {
    // Dimensions
    BAR_WIDTH: 2,               // Width of both grey ticks and orange bars (px)
    BAR_GAP: 4,                 // Gap between bars (px)
    TICK_HEIGHT: 8,             // Height of background grey ticks (px)

    // Active Marker (Pyramid)
    // h1 MUST equal TICK_HEIGHT for the "sit on baseline" visual.
    PYRAMID_HEIGHTS: [8, 14, 20, 28, 20, 14, 8],

    // Hover Marker
    HOVER_HEIGHTS: [12, 8, 12], // [hSmall, hTiny, hSmall]

    // Wave Physics
    DURATION: 600,              // ms
    WAVE_AMP: 12,               // Max pixel change in height during ripple
    WAVE_CYCLES: 2,             // Number of ripples
    PHASE_STEP: 0.8,            // Phase offset between bars

    // Colors
    COLOR_ACTIVE: "#FF7A00",
    COLOR_BASELINE: "#E5E5E5",  // Light grey for baseline
};

const SECTIONS = ["Home", "Problem", "Solution", "Comparison", "Pilot", "ROI", "Founders", "FAQ"];

// --- Helper: Easing ---
const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// --- Hook: Display Metrics ---
const useDisplayMetrics = (containerRef: React.RefObject<HTMLDivElement | null>, itemCount: number) => {
    const [metrics, setMetrics] = useState({ centers: [] as number[], width: 0 });
    const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const measure = () => {
            const container = containerRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const width = containerRect.width;

            const newCenters: number[] = [];
            for (let i = 0; i < itemCount; i++) {
                const item = itemsRef.current[i];
                if (item) {
                    const rect = item.getBoundingClientRect();
                    // Relative center X
                    const center = (rect.left - containerRect.left) + (rect.width / 2);
                    newCenters.push(Math.round(center));
                } else {
                    newCenters.push(0);
                }
            }
            setMetrics({ centers: newCenters, width: Math.round(width) });
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [itemCount]);

    return { metrics, itemsRef };
};

// --- Component: Unified SVG Overlay ---
interface SvgBaselineAndMarkerProps {
    width: number;
    height: number;
    centers: number[];
    currentIndex: number;
    hoverIndex: number | null;
}

const SvgBaselineAndMarker = ({ width, height, centers, currentIndex, hoverIndex }: SvgBaselineAndMarkerProps) => {
    const centerY = Math.round(height / 2);
    const totalBarStep = CONFIG.BAR_WIDTH + CONFIG.BAR_GAP;

    // Calculates the "perfect" X position for a marker such that its bars align 
    // with the global grid starting at 0.
    const snapToGrid = useCallback((centerX: number, numBars: number) => {
        const markerWidth = (numBars * CONFIG.BAR_WIDTH) + ((numBars - 1) * CONFIG.BAR_GAP);
        const naturalStartX = centerX - markerWidth / 2;
        // Round to nearest grid step to ensure perfect overlap with baseline ticks
        const snappedStartX = Math.round(naturalStartX / totalBarStep) * totalBarStep;
        return snappedStartX;
    }, [totalBarStep]);

    // --- Active Marker State & Animation ---
    const [activeState, setActiveState] = useState({
        x: 0,
        heights: CONFIG.PYRAMID_HEIGHTS,
        isAnimating: false,
    });

    const stateRef = useRef(activeState);
    const reqRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    // Animation Loop
    useEffect(() => {
        if (!centers.length) return;

        const rawTargetCenter = centers[currentIndex] || 0;
        // IMPORTANT: Snap the TARGET position to the grid. 
        // This ensures that when the animation settles, it lands EXACTLY on the ticks.
        const targetX = snapToGrid(rawTargetCenter, CONFIG.PYRAMID_HEIGHTS.length);

        // Initial Snap or large jump
        if (stateRef.current.x === 0 || Math.abs(stateRef.current.x - targetX) > width / 2) {
            const snapState = { x: targetX, heights: CONFIG.PYRAMID_HEIGHTS, isAnimating: false };
            stateRef.current = snapState;
            setActiveState(snapState);
            return;
        }

        const startX = stateRef.current.x;
        startTimeRef.current = null;
        if (reqRef.current) cancelAnimationFrame(reqRef.current);

        const tick = (time: number) => {
            if (startTimeRef.current === null) startTimeRef.current = time;
            const elapsed = time - startTimeRef.current;
            const progress = Math.min(elapsed / CONFIG.DURATION, 1);
            const eased = easeInOutCubic(progress);

            // 1. Move X
            const currentX = startX + (targetX - startX) * eased;

            // 2. Wave Heights
            const envelope = Math.sin(progress * Math.PI);
            const currentHeights = CONFIG.PYRAMID_HEIGHTS.map((h, i) => {
                const phase = i * CONFIG.PHASE_STEP;
                const wave = Math.sin(2 * Math.PI * (progress * CONFIG.WAVE_CYCLES - phase));
                const delta = wave * CONFIG.WAVE_AMP * envelope;
                return Math.max(CONFIG.BAR_WIDTH, h + delta);
            });

            const nextState = {
                x: currentX,
                heights: currentHeights,
                isAnimating: progress < 1
            };

            stateRef.current = nextState;
            setActiveState(nextState);

            if (progress < 1) {
                reqRef.current = requestAnimationFrame(tick);
            } else {
                // Settle
                const finalState = { x: targetX, heights: CONFIG.PYRAMID_HEIGHTS, isAnimating: false };
                stateRef.current = finalState;
                setActiveState(finalState);
            }
        };

        reqRef.current = requestAnimationFrame(tick);

        return () => {
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
        };
    }, [currentIndex, centers, width, snapToGrid]);


    // --- Render Logic ---

    // 1. Baseline Ticks
    const baselineTicks = [];
    const numTicks = Math.ceil(width / totalBarStep);
    for (let i = 0; i < numTicks; i++) {
        const x = i * totalBarStep;
        baselineTicks.push(
            <rect
                key={`base-${i}`}
                x={x}
                y={centerY - CONFIG.TICK_HEIGHT / 2}
                width={CONFIG.BAR_WIDTH}
                height={CONFIG.TICK_HEIGHT}
                fill={CONFIG.COLOR_BASELINE}
                rx={1}
            />
        );
    }

    // 2. Hover Marker
    let hoverGroup = null;
    if (hoverIndex !== null && hoverIndex !== currentIndex && centers[hoverIndex] !== undefined) {
        // Also snap hover marker to grid for consistency
        const hStartX = snapToGrid(centers[hoverIndex], CONFIG.HOVER_HEIGHTS.length);

        hoverGroup = (
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {CONFIG.HOVER_HEIGHTS.map((h, i) => (
                    <rect
                        key={`hover-${i}`}
                        x={hStartX + i * totalBarStep}
                        y={centerY - h / 2}
                        width={CONFIG.BAR_WIDTH}
                        height={h}
                        fill={CONFIG.COLOR_ACTIVE}
                        opacity={0.6}
                        rx={1}
                    />
                ))}
            </motion.g>
        );
    }

    // 3. Active Marker
    return (
        <svg
            width={width}
            height={height}
            className="absolute top-0 left-0 pointer-events-none z-20"
            style={{ width: '100%', height: '100%' }}
            shapeRendering="crispEdges"
        >
            {/* Background Layer (Grey Ticks) */}
            <g>{baselineTicks}</g>

            {/* Hover Layer */}
            <AnimatePresence>
                {hoverGroup}
            </AnimatePresence>

            {/* Active Marker Layer */}
            <g>
                {activeState.heights.map((h, i) => (
                    <rect
                        key={`active-${i}`}
                        // Use the interpolated 'x' directly.
                        // Since 'targetX' was snapped, the interpolation will land exactly on grid.
                        x={activeState.x + i * totalBarStep}
                        y={centerY - h / 2}
                        width={CONFIG.BAR_WIDTH}
                        height={h}
                        fill={CONFIG.COLOR_ACTIVE}
                        rx={1}
                        filter={activeState.isAnimating ? `brightness(${1 + Math.sin(i + performance.now() * 0.01) * 0.15})` : 'none'}
                    />
                ))}
            </g>
        </svg>
    );
};

// --- Main Component ---
interface NavbarTicksProps {
    currentIndex: number;
    onSectionChange: (index: number) => void;
}

export default function NavbarTicks({ currentIndex, onSectionChange }: NavbarTicksProps) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    // Explicitly allow null for the ref type to match typical React useRef behavior for DOM elements
    const containerRef = useRef<HTMLDivElement>(null);
    const { metrics, itemsRef } = useDisplayMetrics(containerRef, SECTIONS.length);

    // Height of the SVG area 
    const SVG_HEIGHT = 40;

    return (
        <div className="relative flex flex-col items-center w-[600px] lg:w-[800px]" ref={containerRef}>
            {/* 1. Unified SVG Overlay */}
            <div className="relative w-full mb-1" style={{ height: SVG_HEIGHT }}>
                {metrics.width > 0 && (
                    <SvgBaselineAndMarker
                        width={metrics.width}
                        height={SVG_HEIGHT}
                        centers={metrics.centers}
                        currentIndex={currentIndex}
                        hoverIndex={hoverIndex}
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
