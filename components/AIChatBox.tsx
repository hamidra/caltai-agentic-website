"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Mic } from 'lucide-react';

const AIChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const chatRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Orb Indicator (Floating Button) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0, y: 20 }}
                        className="fixed bottom-10 right-10 z-[100]"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(true);
                            }}
                            className="group relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-[0_20px_50px_rgba(255,96,46,0.3)]"
                        >
                            <img
                                src="/AI design.svg"
                                alt="AI Assistant"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Animated ring around orb */}
                            <div className="absolute inset-[-4px] rounded-full border border-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay to catch clicks on main screen */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/5 z-[90]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Chat Box Container */}
                        <motion.div
                            ref={chatRef}
                            initial={{ opacity: 0, x: 100, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                                mass: 0.8
                            }}
                            className="fixed right-0 h-[680px] bottom-0 w-[458px] z-[100] bg-white border border-black/[0.2] rounded-tl-[16px] shadow-[0_15px_30px_7px_rgba(0,0,0,0.07)] flex flex-col overflow-hidden select-none"
                        >
                            <div className="relative flex flex-col h-full z-10">

                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-10 right-10 p-2 hover:bg-black/5 rounded-full transition-all group active:scale-95"
                                >
                                    <X className="w-5 h-5 text-black/30 group-hover:text-black/60 stroke-[1.5]" />
                                </button>

                                {/* Header Section with Large Orb */}
                                <div className="flex flex-col items-center pt-[40px] pb-[24px]">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.1, type: "spring" }}
                                        className="w-[100px] h-[100px] relative"
                                    >
                                        <img
                                            src="/AI design.svg"
                                            alt="AI Assistant"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 px-10 overflow-y-auto custom-scrollbar">
                                    <div className="max-w-[85%]">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="bg-[#F2F4F7] rounded-[20px] rounded-bl-[8px] p-5"
                                        >
                                            <p className="text-[#1A1A1A] text-[15px] leading-relaxed font-medium opacity-80">
                                                I&apos;m ready to help you with Suggestion. What would you like to do?
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Input Footer Area */}
                                <div className="px-10 pb-10 pt-4">
                                    <div className="flex items-center gap-3">


                                        {/* Capsule Input Bar */}
                                        <div className="w-full max-w-md mt-4">
                                            <div className="relative group">
                                                <input
                                                    type="text"
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0,0,0,0.05);
                    border-radius: 10px;
                }
            `}</style>
        </>
    );
};

export default AIChatBox;
