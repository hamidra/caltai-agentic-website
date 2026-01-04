"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
    isActive?: boolean;
}

export default function Hero({ isActive }: HeroProps) {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const fullText = "Most AIs chat, but I'm executes. Replace fracturing manual processes with an autonomous operations layer capable of running a $10M business with just a 5-person team.";
    const words = fullText.split(" ");
    const [visibleWordsCount, setVisibleWordsCount] = useState(0);
    const [isTyping, setIsTyping] = useState(false);


    useEffect(() => {
        if (isActive) {
            setVisibleWordsCount(0);
            setIsTyping(true); // Show cursor immediately
            let i = 0;
            const typingSpeed = 80;

            // Longer 'thinking' delay: 2.4s (3 blinks of 800ms each)
            const startTimeout = setTimeout(() => {
                const interval = setInterval(() => {
                    i++;
                    setVisibleWordsCount(i);

                    if (i >= words.length) {
                        setIsTyping(false);
                        clearInterval(interval);
                    }
                }, typingSpeed);

                return () => clearInterval(interval);
            }, 2400);

            return () => clearTimeout(startTimeout);
        } else {
            setVisibleWordsCount(0);
            setIsTyping(false);
        }
    }, [isActive, words.length]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-4 bg-grid">

            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-[60px] font-bold tracking-tight text-brand-brown mt-8 mb-8 leading-[1.1] font-cal"
                >
                    Stop Prompting, <span className="text-brand-orange">Start Scaling</span>
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
                    className="bg-brand-cream border border-[#f0e4d7] rounded-[24px] p-6 mb-8 max-w-lg mx-auto shadow-sm min-h-[160px] flex items-start justify-center relative"
                >
                    {/* Ghost text to fix dimensions */}
                    <p className="text-[17px] leading-relaxed text-brand-brown font-medium text-left opacity-0 pointer-events-none">
                        {fullText}
                    </p>

                    {/* Visible Typing Text */}
                    <div className="absolute inset-0 p-6 flex items-start">
                        <p className="text-[16px] leading-relaxed text-brand-brown font-medium text-left flex flex-wrap items-center gap-x-[0.3em]">
                            {words.slice(0, visibleWordsCount).map((word, index) => (
                                <motion.span
                                    key={index}
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
                            {isTyping && (
                                <motion.span
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="inline-block w-[3px] h-[18px] bg-brand-orange ml-1"
                                />
                            )}
                        </p>
                    </div>
                </motion.div>

                {/* CTA Button / Input Area */}
                <div className="h-[70px] flex items-center justify-center w-full max-w-md mx-auto relative perspective-1000">
                    <AnimatePresence mode="wait">
                        {!isChatOpen ? (
                            <motion.div
                                key="button"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="h-[58px] flex items-center px-3 bg-background rounded-full border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.06)] inline-flex mx-auto cursor-pointer hover:border-brand-orange/30 transition-colors"
                                onClick={() => setIsChatOpen(true)}
                                layoutId="chat-container"
                            >
                                <button className="h-[36px] bg-brand-orange text-white px-8 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all flex items-center">
                                    Chat with CaltAI
                                </button>
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="w-[36px] h-[36px] bg-brand-orange rounded-full flex items-center justify-center ml-2 shadow-md flex-shrink-0"
                                >
                                    <div className="flex items-center gap-0.5 h-4">
                                        <motion.div
                                            animate={{ height: [6, 12, 6] }}
                                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                            className="w-[2px] bg-white rounded-full"
                                        ></motion.div>
                                        <motion.div
                                            animate={{ height: [10, 16, 10] }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.1 }}
                                            className="w-[2px] bg-white rounded-full"
                                        ></motion.div>
                                        <motion.div
                                            animate={{ height: [8, 14, 8] }}
                                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                                            className="w-[2px] bg-white rounded-full"
                                        ></motion.div>
                                        <motion.div
                                            animate={{ height: [4, 10, 4] }}
                                            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.3 }}
                                            className="w-[2px] bg-white rounded-full"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, scale: 0.95, width: "200px" }}
                                animate={{ opacity: 1, scale: 1, width: "100%" }}
                                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                                layoutId="chat-container"
                                className="w-full relative group"
                            >
                                <input
                                    type="text"
                                    autoFocus
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask your question"
                                    className="w-full h-16 bg-white border border-brand-brown/10 rounded-full px-8 pr-32 text-brand-brown font-cal font-medium focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-sm"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                    <button className="p-2 text-brand-brown/40 hover:text-brand-orange transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                                    </button>
                                    <button className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 hover:scale-105 transition-transform overflow-hidden">
                                        {inputValue ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        ) : (
                                            <div className="flex items-center gap-0.5 h-3">
                                                <motion.div
                                                    animate={{ height: [6, 12, 6] }}
                                                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                                    className="w-[2px] bg-white rounded-full"
                                                ></motion.div>
                                                <motion.div
                                                    animate={{ height: [10, 16, 10] }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.1 }}
                                                    className="w-[2px] bg-white rounded-full"
                                                ></motion.div>
                                                <motion.div
                                                    animate={{ height: [8, 14, 8] }}
                                                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                                                    className="w-[2px] bg-white rounded-full"
                                                ></motion.div>
                                                <motion.div
                                                    animate={{ height: [4, 10, 4] }}
                                                    transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.3 }}
                                                    className="w-[2px] bg-white rounded-full"
                                                ></motion.div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
}

