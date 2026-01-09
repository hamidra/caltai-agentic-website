"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
    isActive?: boolean;
}

const MSG_1_POOL = [
    "Hi, I’m CaltAI. I run business decisions, workflows, and follow-ups autonomously.",
    "Hi, I’m CaltAI. I handle business decisions, workflows, and follow-ups autonomously.",
    "Hi, I’m CaltAI. I autonomously run decisions, workflows, and follow-ups across your business.",
    "Hi, I’m CaltAI. I operate business decisions, workflows, and follow-ups autonomously.",
    "Hi, I’m CaltAI. I manage business decisions, workflows, and follow-ups autonomously.",
    "Hi, I’m CaltAI. I run operational decisions, workflows, and follow-ups autonomously."
];
const MSG_2_POOL = [
    "I connect to your tools, understand your context, and act on signals as they appear.",
    "I connect to your tools, learn your context, and act when signals emerge.",
    "I integrate with your tools, understand your context, and take action as signals appear.",
    "I connect across your tools, track context, and respond to signals in real time.",
    "I work across your tools, understand what’s happening, and act on relevant signals.",
    "I integrate with your systems, understand context, and act as important signals arise."
];
const MSG_3_POOL = [
    "If you’d like early access, you can join the waiting list.",
    "If you’d like early access, you can request a spot on the waiting list.",
    "Early access is available via the waiting list, if you’re interested.",
    "You can request early access through the waiting list, if you’d like.",
    "If you’re interested in early access, the waiting list is open.",
    "Early access is offered through the waiting list, if you want to join."
];

const COOLDOWN_MS = 3000;

export default function Hero({ isActive }: HeroProps) {
    const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
    const [isRegistered, setIsRegistered] = useState(false);
    const [visibleMsgIndex, setVisibleMsgIndex] = useState(-1); // -1: none, 0, 1, 2
    const [visibleWordsCount, setVisibleWordsCount] = useState([0, 0, 0]);
    const [isThinking, setIsThinking] = useState(false);
    const [blinkKey, setBlinkKey] = useState(0); // To reset/control blinks
    const [email, setEmail] = useState("");
    const [showsWaitingList, setShowsWaitingList] = useState(false);

    // Random selection on entrance
    useEffect(() => {
        if (!isActive) return;
        const now = Date.now();
        const stored = sessionStorage.getItem("hero_variant_set");
        if (stored) {
            try {
                const { variants, timestamp } = JSON.parse(stored);
                if (now - timestamp < COOLDOWN_MS) {
                    setSelectedMessages(variants);
                    return;
                }
            } catch (e) { }
        }
        const newVariants = [
            MSG_1_POOL[Math.floor(Math.random() * MSG_1_POOL.length)],
            MSG_2_POOL[Math.floor(Math.random() * MSG_2_POOL.length)],
            MSG_3_POOL[Math.floor(Math.random() * MSG_3_POOL.length)]
        ];
        sessionStorage.setItem("hero_variant_set", JSON.stringify({ variants: newVariants, timestamp: now }));
        setSelectedMessages(newVariants);
    }, [isActive]);

    const MESSAGES = [
        selectedMessages[0] || MSG_1_POOL[0],
        selectedMessages[1] || MSG_2_POOL[0],
        isRegistered
            ? "Perfect! You're on the list. I'll reach out as soon as we're ready for more pilots."
            : selectedMessages[2] || MSG_3_POOL[0]
    ];

    useEffect(() => {
        if (!isActive) {
            setVisibleMsgIndex(-1);
            setVisibleWordsCount([0, 0, 0]);
            setIsThinking(false);
            setShowsWaitingList(false);
            return;
        }

        let isMounted = true;
        const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

        const runSequence = async () => {
            // Initial calm delay
            await sleep(1000);
            if (!isMounted) return;

            for (let i = 0; i < 3; i++) {
                if (!isMounted) return;

                // 1. "Thinking" marker phase (except for the first message)
                if (i > 0) {
                    setIsThinking(true);
                    setVisibleMsgIndex(i);
                    // 3 blinks = ~900ms (150ms on/off cycle * 3)
                    await sleep(900);
                    if (!isMounted) return;
                    setIsThinking(false);
                } else {
                    setVisibleMsgIndex(0);
                }

                // 2. Typing phase
                const words = MESSAGES[i].split(" ");
                for (let w = 1; w <= words.length; w++) {
                    setVisibleWordsCount(prev => {
                        const next = [...prev];
                        next[i] = w;
                        return next;
                    });
                    await sleep(80);
                    if (!isMounted) return;
                }

                // 3. Pause after line finishes
                await sleep(600);
            }

            // Reveal waiting list input slowly
            await sleep(500);
            if (!isRegistered && isMounted) {
                setShowsWaitingList(true);
            }
        };

        runSequence();
        return () => { isMounted = false; };
    }, [isActive, isRegistered, selectedMessages]);

    const handleRegister = () => {
        if (!email || !email.includes("@")) return;
        setIsRegistered(true);
        // The component will re-render and useEffect will run again because of deps.
        // This causes the sequence to play again including the new success message at slot 3.
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-4 bg-grid">
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

                {/* Chat Bubble - Reserved height for 3 cumulative messages */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-[#FFFEFC] border border-[#E3DFD9] rounded-[24px] p-8 mb-12 w-full max-w-lg mx-auto shadow-sm min-h-[220px] flex flex-col justify-start relative text-left gap-4"
                >
                    {MESSAGES.map((fullText, idx) => {
                        const words = fullText.split(" ");
                        const visibleCount = visibleWordsCount[idx];
                        const showLine = visibleMsgIndex >= idx;

                        return (
                            <div key={idx} className="min-h-[1.5em] relative">
                                {showLine && (
                                    <p className="text-[15.5px] leading-[1.6] text-secondary font-medium flex flex-wrap items-center gap-x-[0.3em]">
                                        {words.slice(0, visibleCount).map((word, wIdx) => (
                                            <motion.span
                                                key={`${idx}-${wIdx}`}
                                                initial={{ opacity: 0, filter: "blur(4px)" }}
                                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                                transition={{ duration: 0.4 }}
                                                className="inline-block"
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                        {/* Thinking Marker / Cursor */}
                                        {visibleMsgIndex === idx && (
                                            <Marker
                                                isThinking={isThinking}
                                                isTyping={visibleCount > 0 && visibleCount < words.length}
                                            />
                                        )}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Waiting List Area */}
                <div className="h-[70px] flex items-center justify-center w-full max-w-lg mx-auto relative overflow-visible">
                    <AnimatePresence mode="wait">
                        {!isRegistered ? (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full relative group"
                            >
                                {showsWaitingList && (
                                    <div className="relative flex items-center bg-[#FFFEFC] border border-[#E3DFD9] rounded-full p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] focus-within:border-primary/30 transition-all duration-300">
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
                                            className="h-[44px] bg-primary text-primary-foreground px-8 rounded-full font-bold text-sm hover:bg-primary-hover active:scale-95 transition-all shadow-md flex items-center gap-2"
                                        >
                                            Join Waitlist
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </button>
                                    </div>
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

function Marker({ isThinking, isTyping }: { isThinking: boolean; isTyping: boolean }) {
    // 3 blinks = exactly 3 cycles of ON/OFF
    // 1 cycle = ~300ms total
    const blinkVariants = {
        thinking: {
            opacity: [1, 0, 1, 0, 1, 0, 1],
            transition: {
                duration: 0.9,
                times: [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
                ease: "linear"
            }
        },
        typing: {
            opacity: 1
        },
        idle: {
            opacity: [1, 0, 1],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <motion.span
            variants={blinkVariants}
            animate={isThinking ? "thinking" : isTyping ? "typing" : "idle"}
            className="inline-block w-[3px] h-[18px] bg-primary ml-1"
        />
    );
}
