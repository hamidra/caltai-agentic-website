"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
    const [visibleWords, setVisibleWords] = useState([0, 0, 0]);
    const [isThinking, setIsThinking] = useState(false);
    const [thinkIndex, setThinkIndex] = useState(-1); // -1: none, 0: msg1 line, etc.
    const [blinkKey, setBlinkKey] = useState(0); // to restart blink animation
    const [email, setEmail] = useState("");
    const [showsWaitingList, setShowsWaitingList] = useState(false);

    const hasRunRef = useRef(false);

    // Random selection on mount (only once)
    useEffect(() => {
        if (selectedMessages.length > 0) return;

        const now = Date.now();
        const stored = sessionStorage.getItem("hero_variant_set");

        if (stored) {
            try {
                const { variants, timestamp } = JSON.parse(stored);
                if (now - timestamp < COOLDOWN_MS) {
                    setSelectedMessages(variants);
                    return;
                }
            } catch (e) {
                console.error("Failed to parse hero_variant_set", e);
            }
        }

        const newVariants = [
            MSG_1_POOL[Math.floor(Math.random() * MSG_1_POOL.length)],
            MSG_2_POOL[Math.floor(Math.random() * MSG_2_POOL.length)],
            MSG_3_POOL[Math.floor(Math.random() * MSG_3_POOL.length)]
        ];

        sessionStorage.setItem("hero_variant_set", JSON.stringify({
            variants: newVariants,
            timestamp: now
        }));
        setSelectedMessages(newVariants);
    }, [selectedMessages]);

    // Animation Loop (Runs once when messages are ready, persists across scroll)
    useEffect(() => {
        if (selectedMessages.length === 0 || hasRunRef.current) {
            return;
        }

        hasRunRef.current = true;
        let isMounted = true;

        const runSequence = async () => {
            // 1. Initial thinking phase for FIRST message (2 blinks, 2.3s)
            setThinkIndex(0);
            setIsThinking(true);
            setBlinkKey(k => k + 1);

            // Wait 2.3s total before first message starts typing
            await new Promise(r => setTimeout(r, 2300));
            if (!isMounted) return;

            setIsThinking(false);
            setThinkIndex(-1);

            // 2. Typing Sequence
            for (let m = 0; m < 3; m++) {
                if (!isMounted) return;

                // Typing Message m
                const words = selectedMessages[m].split(" ");
                for (let i = 1; i <= words.length; i++) {
                    await new Promise(r => setTimeout(r, 90));
                    if (!isMounted) return;
                    setVisibleWords(prev => {
                        const next = [...prev];
                        next[m] = i;
                        return next;
                    });
                }

                if (m < 2) {
                    // Start thinking for NEXT message (3 blinks, 3.2s)
                    setThinkIndex(m + 1);
                    setIsThinking(true);
                    setBlinkKey(k => k + 1);

                    // Delay to 3.2s between messages for 3 blinks
                    await new Promise(r => setTimeout(r, 3200));
                    if (!isMounted) return;

                    setIsThinking(false);
                    setThinkIndex(-1);
                }

                if (m === 2) {
                    // Final message finished
                    await new Promise(r => setTimeout(r, 1100));
                    if (isMounted) {
                        setShowsWaitingList(true);
                    }
                }
            }
        };

        runSequence();

        return () => { isMounted = false; };
    }, [selectedMessages]);

    const handleRegister = () => {
        if (!email || !email.includes("@")) return;
        setIsRegistered(true);
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-4 bg-grid">
            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-[60px] tracking-tight text-secondary mt-20 mb-8 leading-[1.1] font-cal"
                >
                    Stop Prompting, <span className="text-primary">Start Scaling</span>
                </motion.h1>

                <div className="relative mb-4 flex justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-34 h-34 md:w-34 md:h-34 relative z-20 animate-float flex items-center justify-center"
                    >
                        <img
                            src="/AI design.svg"
                            alt="AI Core Design"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>

                {/* Agent Chat Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-[#FFFEFC] border border-[#E3DFD9] rounded-[24px] p-8 mb-12 w-full max-w-xl mx-auto shadow-sm min-h-[220px] flex flex-col relative"
                >
                    <div className="flex flex-col gap-5">
                        {selectedMessages.map((msg, mIdx) => {
                            const words = msg.split(" ");
                            const visibleWordCount = visibleWords[mIdx];
                            const isMsgVisible = visibleWordCount > 0 || (thinkIndex === mIdx && isThinking);

                            if (!isMsgVisible && mIdx > 0) return null;

                            return (
                                <div key={mIdx} className="relative min-h-[1.5em]">
                                    {/* Words */}
                                    <p className="text-[16px] leading-relaxed text-secondary font-medium text-left flex flex-wrap gap-x-[0.3em]">
                                        {words.slice(0, visibleWordCount).map((word, wIdx) => (
                                            <motion.span
                                                key={`${mIdx}-${wIdx}`}
                                                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: [0.22, 1, 0.36, 1]
                                                }}
                                                className="inline-block"
                                            >
                                                {word}
                                            </motion.span>
                                        ))}

                                        {/* Cursor for the message currently being typed */}
                                        {visibleWordCount > 0 && visibleWordCount < words.length && (
                                            <span className="inline-block w-[3px] h-[18px] bg-primary ml-1 animate-pulse self-center" />
                                        )}

                                        {/* Thinking Marker for this specific line */}
                                        {thinkIndex === mIdx && isThinking && (
                                            <motion.span
                                                key={`think-${blinkKey}-${mIdx}`}
                                                initial={{ opacity: 0 }}
                                                animate={mIdx === 0
                                                    ? { opacity: [0, 1, 0, 1, 0] } // 2 blinks for first msg
                                                    : { opacity: [0, 1, 0, 1, 0, 1] } // 3 blinks for others
                                                }
                                                transition={{
                                                    duration: mIdx === 0 ? 2.0 : 3.0,
                                                    times: mIdx === 0 ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.2, 0.4, 0.6, 0.8, 1],
                                                    ease: "easeInOut"
                                                }}
                                                className="inline-block"
                                            >
                                                <span className="flex gap-1 items-center h-[18px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse [animation-delay:0.2s]" />
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse [animation-delay:0.4s]" />
                                                </span>
                                            </motion.span>
                                        )}
                                    </p>
                                </div>
                            );
                        })}

                        {/* Success message removed as per request */}
                    </div>
                </motion.div>

                {/* Waiting List Registration Area */}
                <div className="h-[70px] flex items-center justify-center w-full max-w-lg mx-auto relative">
                    <AnimatePresence mode="wait">
                        {!isRegistered ? (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                                className="w-full relative group"
                            >
                                {showsWaitingList && (
                                    <div className="relative flex items-center bg-[#FFFEFC] border border-[#E3DFD9] rounded-full p-1.5 shadow-sm focus-within:border-primary/30 transition-all duration-300">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleRegister()}
                                            className="flex-1 bg-transparent px-6 py-3 text-secondary rounded-full font-medium outline-none w-full"
                                        />
                                        <button
                                            onClick={handleRegister}
                                            className="h-[44px] bg-primary text-white px-8 rounded-full font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2"
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
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
    const blinkVariants: Variants = {
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
