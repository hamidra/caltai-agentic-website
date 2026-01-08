"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface SectionScrollerProps {
    children: React.ReactNode[];
    onSectionChange?: (index: number) => void;
    selectedIndex?: number;
}

export default function SectionScroller({ children, onSectionChange, selectedIndex = 0 }: SectionScrollerProps) {
    const lastScrollTime = useRef(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const bottomReachedTime = useRef<number | null>(null);
    const topReachedTime = useRef<number | null>(null);

    const prevIndex = useRef(selectedIndex);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    // Sync prevIndex after animation
    useEffect(() => {
        const timer = setTimeout(() => {
            prevIndex.current = selectedIndex;
            setIsTransitioning(false);
        }, 200);
        setIsTransitioning(true);

        // Reset scroll position of the new section to top
        const currentSection = sectionRefs.current[selectedIndex];
        if (currentSection) {
            currentSection.scrollTo({ top: 0, behavior: "instant" });
        }

        return () => clearTimeout(timer);
    }, [selectedIndex]);

    const touchStart = useRef(0);
    const scrollCooldown = 300;
    const scrollThreshold = 10;
    const edgeDelayMs = 150;

    const handleScroll = useCallback(
        (e: WheelEvent | TouchEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < scrollCooldown) return;

            const currentSection = sectionRefs.current[selectedIndex];
            if (!currentSection) return;

            const { scrollTop, scrollHeight, clientHeight } = currentSection;
            const isScrollable = scrollHeight > clientHeight + 5;
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

            if (delta > 0) {
                if (isAtBottom && selectedIndex < children.length - 1) {
                    if (bottomReachedTime.current === null) {
                        bottomReachedTime.current = now;
                    } else if (now - bottomReachedTime.current >= edgeDelayMs) {
                        onSectionChange?.(selectedIndex + 1);
                        lastScrollTime.current = now;
                        bottomReachedTime.current = null;
                        topReachedTime.current = null;
                    }
                } else {
                    bottomReachedTime.current = null;
                }
            } else if (delta < 0) {
                if (isAtTop && selectedIndex > 0) {
                    if (topReachedTime.current === null) {
                        topReachedTime.current = now;
                    } else if (now - topReachedTime.current >= edgeDelayMs) {
                        onSectionChange?.(selectedIndex - 1);
                        lastScrollTime.current = now;
                        topReachedTime.current = null;
                        bottomReachedTime.current = null;
                    }
                } else {
                    topReachedTime.current = null;
                }
            }
        },
        [selectedIndex, children.length, onSectionChange]
    );

    const handleTouchStart = (e: TouchEvent) => {
        touchStart.current = e.touches[0].clientY;
    };

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < scrollCooldown) return;

            const currentSection = sectionRefs.current[selectedIndex];
            if (!currentSection) return;

            const { scrollTop, scrollHeight, clientHeight } = currentSection;
            const isScrollable = scrollHeight > clientHeight + 5;
            const isAtBottom = isScrollable ? Math.ceil(scrollTop + clientHeight) >= scrollHeight - 5 : true;
            const isAtTop = isScrollable ? scrollTop <= 5 : true;

            let direction = 0; // 1 for down, -1 for up

            if (e.key === " ") {
                const target = e.target as HTMLElement;
                if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
                    e.preventDefault();
                }
                return;
            }

            if (e.key === "ArrowDown" || e.key === "PageDown") {
                direction = 1;
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                direction = -1;
            }

            if (direction === 0) return;

            // Manual internal scroll if we're not at the edges
            const scrollStep = 100; // pxl for arrows
            const pageStep = 400;  // px for page up/down/space
            const step = (e.key === "PageDown" || e.key === "PageUp") ? pageStep : scrollStep;

            if (direction === 1) {
                if (isAtBottom && selectedIndex < children.length - 1) {
                    e.preventDefault();
                    onSectionChange?.(selectedIndex + 1);
                    lastScrollTime.current = now;
                } else if (!isAtBottom) {
                    // Manually scroll internal content if browser doesn't catch it
                    e.preventDefault();
                    currentSection.scrollBy({ top: step, behavior: "smooth" });
                }
            } else if (direction === -1) {
                if (isAtTop && selectedIndex > 0) {
                    e.preventDefault();
                    onSectionChange?.(selectedIndex - 1);
                    lastScrollTime.current = now;
                } else if (!isAtTop) {
                    // Manually scroll internal content if browser doesn't catch it
                    e.preventDefault();
                    currentSection.scrollBy({ top: -step, behavior: "smooth" });
                }
            }
        },
        [selectedIndex, children.length, onSectionChange]
    );

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleScroll, { passive: false });
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleScroll, handleKeyDown]);

    return (
        <div className="fixed inset-0 overflow-hidden bg-background">
            {children.map((child, i) => {
                const isCurrent = selectedIndex === i;
                const isPrevious = prevIndex.current === i;

                let y = 0;
                let opacity = 0;

                if (isCurrent) {
                    opacity = 1;
                    y = 0;
                } else if (i < selectedIndex) {
                    // Outgoing content (moved to top)
                    opacity = 0;
                    y = prefersReducedMotion ? 0 : -2;
                } else {
                    // Incoming content (moving from bottom)
                    opacity = 0;
                    y = prefersReducedMotion ? 0 : 6;
                }

                return (
                    <motion.div
                        key={i}
                        ref={(el) => { if (el) sectionRefs.current[i] = el; }}
                        initial={false}
                        animate={{
                            opacity,
                            y: `${y}px`,
                            pointerEvents: isCurrent ? "auto" : "none",
                            zIndex: isCurrent ? 20 : 10,
                        }}
                        transition={{
                            duration: prefersReducedMotion ? 0.1 : 0.15,
                            ease: [0.2, 0.8, 0.2, 1]
                        }}
                        className="absolute inset-0 h-screen w-screen overflow-y-auto hide-scrollbar"
                    >
                        {child}
                    </motion.div>
                );
            })}

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
