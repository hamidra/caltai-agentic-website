"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LLMMarqueeSide from "./LLMMarqueeSide";

interface HeroProps {
    isActive?: boolean;
}

export default function Hero({ isActive }: HeroProps) {
    const [isRegistered, setIsRegistered] = useState(false);

    const MESSAGES = [
        "Hi, I’m CaltAI. I run business decisions, workflows, and follow-ups autonomously.",
        "I connect to your tools, understand your context, and act on signals as they appear.",
        isRegistered
            ? "Perfect! You're on the list. I'll reach out as soon as we're ready for more pilots."
            : "If you’d like early access, you can join the waiting list."
    ];
    const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
    const [visibleWordsCount, setVisibleWordsCount] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [email, setEmail] = useState("");
    const [showsWaitingList, setShowsWaitingList] = useState(false);

    const currentWords = MESSAGES[currentMsgIndex].split(" ");
    // Use the longest message for ghost text to maintain fixed height
    const longestMessage = MESSAGES.reduce((a, b) => a.length > b.length ? a : b);

    const handleRegister = () => {
        if (!email || !email.includes("@")) return;
        setIsRegistered(true);
        setCurrentMsgIndex(2);
        setVisibleWordsCount(0);
        setIsTyping(true);
        setIsBlinking(true);
    };

    useEffect(() => {
        if (!isActive) {
            setCurrentMsgIndex(0);
            setVisibleWordsCount(0);
            setIsTyping(false);
            setIsBlinking(false);
            setIsRegistered(false);
            setShowsWaitingList(false);
            return;
        }

        let isMounted = true;

        const runSequence = async () => {
            if (isRegistered) {
                // If registered, type confirmation message immediately
                const msgWords = MESSAGES[2].split(" ");
                for (let i = 1; i <= msgWords.length; i++) {
                    await new Promise(r => setTimeout(r, 60));
                    if (!isMounted) return;
                    setVisibleWordsCount(i);
                }
                setIsTyping(false);
                setIsBlinking(true);
                return;
            }

            // Initial delay
            await new Promise(r => setTimeout(r, 1000));
            if (!isMounted) return;

            // Only run first two messages automatically
            for (let m = 0; m < 2; m++) {
                if (!isMounted || isRegistered) return;
                setCurrentMsgIndex(m);
                setVisibleWordsCount(0);
                setIsTyping(true);
                setIsBlinking(true);

                const msgWords = MESSAGES[m].split(" ");
                for (let i = 1; i <= msgWords.length; i++) {
                    await new Promise(r => setTimeout(r, 80));
                    if (!isMounted || isRegistered) return;
                    setVisibleWordsCount(i);
                }

                setIsTyping(false);

                if (m === 0) {
                    setIsBlinking(true);
                    await new Promise(r => setTimeout(r, 3200));
                } else if (m === 1) {
                    setIsBlinking(false);
                    await new Promise(r => setTimeout(r, 3200));
                }

                if (!isMounted || isRegistered) return;
            }

            // Msg 3: Invitation
            if (!isRegistered && isMounted) {
                setCurrentMsgIndex(2);
                setVisibleWordsCount(0);
                setIsTyping(true);
                setIsBlinking(true);
                setShowsWaitingList(true);

                const msgWords = MESSAGES[2].split(" ");
                for (let i = 1; i <= msgWords.length; i++) {
                    await new Promise(r => setTimeout(r, 80));
                    if (!isMounted || isRegistered) return;
                    setVisibleWordsCount(i);
                }
                setIsTyping(false);
            }
        };

        runSequence();

        return () => { isMounted = false; };
    }, [isActive, isRegistered]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-4 bg-grid">
            {/* <LLMMarqueeSide /> */}

            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-[60px] tracking-tight text-secondary mt-8 mb-8 leading-[1.1] font-cal"
                >
                    Stop Prompting, <span className="text-primary">Start Scaling</span>
                </motion.h1>

                <div className="relative mb-4 flex justify-center">
                    {/* Central Orb */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-40 h-40 md:w-44 md:h-44 relative z-20 animate-float flex items-center justify-center"
                    >
                        <img
                            src="/AI design.svg"
                            alt="AI Core Design"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>

                {/* Chat Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-[#FFFEFC] border border-[#E3DFD9] rounded-[20px] p-6 mb-12 max-w-lg mx-auto shadow-sm min-h-[160px] flex items-start justify-center relative"
                >
                    {/* Ghost text to fix dimensions */}
                    <p className="text-[17px] leading-relaxed text-secondary font-medium text-left opacity-0 pointer-events-none">
                        {longestMessage}
                    </p>

                    {/* Visible Typing Text */}
                    <div className="absolute inset-0 p-6 flex items-start">
                        <p className="text-[16px] leading-relaxed text-secondary font-medium text-left flex flex-wrap items-center gap-x-[0.3em]">
                            {currentWords.slice(0, visibleWordsCount).map((word, index) => (
                                <motion.span
                                    key={`${currentMsgIndex}-${index}`}
                                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1] // Premium quintic ease-out
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                            {(isTyping || isBlinking) && (
                                <motion.span
                                    initial={{ opacity: 1 }}
                                    animate={isBlinking ? { opacity: [1, 0, 1] } : { opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="inline-block w-[3px] h-[18px] bg-primary ml-1"
                                />
                            )}
                        </p>
                    </div>
                </motion.div>

                {/* Waiting List Registration Area */}
                <div className="h-[70px] flex items-center justify-center w-full max-w-lg mx-auto relative overflow-visible">
                    <AnimatePresence mode="wait">
                        {!isRegistered ? (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="w-full relative group"
                            >
                                {showsWaitingList && (
                                    <>
                                        <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                                        <div className="relative flex items-center bg-[#FFFEFC] border border-[#E3DFD9] rounded-full p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] focus-within:border-primary/30 focus-within:shadow-[0_15px_60px_rgba(0,0,0,0.08)] transition-all duration-300">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleRegister()}
                                                className="flex-1 bg-transparent px-6 py-3 text-secondary rounded-[30px] font-medium placeholder:text-muted/40 outline-none w-full"
                                            />
                                            <button
                                                onClick={handleRegister}
                                                className="h-[44px] bg-primary text-primary-foreground px-8 rounded-full font-bold text-sm hover:bg-primary-hover active:scale-95 transition-all shadow-md shadow-primary/20 flex items-center gap-2"
                                            >
                                                Join Waitlist
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-3 bg-primary/10 border border-primary/20 px-8 py-4 rounded-full"
                            >
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-primary font-bold text-lg">You're on the list!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
}

