"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

interface ExpandableFooterProps {
    isDark?: boolean;
}

export default function ExpandableFooter({ isDark = false }: ExpandableFooterProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Matches the 80px grid/margin from other sections
    const BTN_SIZE = 65;

    return (
        <>
            {/* Hover Trigger Zone & Visual Button */}
            <div
                className="fixed bottom-0 left-0 z-[60] flex items-end justify-start"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* The square corner button (Always visible) */}
                <div
                    className={`relative flex items-center justify-center cursor-pointer transition-all duration-500 border-t border-r ${isDark
                        ? "bg-black border-white/10 hover:bg-white/5"
                        : "bg-white border-brand-orange/50 hover:bg-orange-50"
                        }`}
                    style={{ width: BTN_SIZE, height: BTN_SIZE }}
                >
                    <ArrowUpRight className={`w-8 h-8 transition-colors duration-500 ${isDark ? "text-white" : "text-brand-orange"}`} strokeWidth={2} />
                </div>
            </div>

            {/* Expanded Footer Content */}
            <AnimatePresence>
                {isHovered && (
                    <motion.footer
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`fixed bottom-0 left-0 right-0 z-[60] border-t shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-500 ${isDark ? "bg-[#0a0a0b] border-white/5" : "bg-white border-brand-orange/20"
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="max-w-7xl mx-auto px-8 md:px-20 py-12 flex flex-col lg:flex-row items-start justify-between gap-10">

                            {/* Brand Column */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <img
                                            src="/logo.svg"
                                            alt="CaltAI Logo"
                                            className={`w-full h-auto transition-all ${isDark ? "brightness-[100]" : ""}`}
                                        />
                                    </div>
                                    <span className={`text-2xl font-bold tracking-tight transition-colors ${isDark ? "text-white" : "text-brand-brown"}`}>CaltAI</span>
                                </div>
                                <p className={`text-sm max-w-xs leading-relaxed transition-colors ${isDark ? "text-white/60" : "text-brand-brown/60"}`}>
                                    Revolutionizing calendar management with AI-driven scheduling that adapts to your life.
                                </p>
                            </div>

                            {/* Links Column */}
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className={`font-bold tracking-wider text-xs uppercase opacity-50 transition-colors ${isDark ? "text-white" : "text-brand-brown"}`}>Product</h4>
                                    <ul className={`space-y-2 text-sm transition-colors ${isDark ? "text-white/60" : "text-brand-brown/80"}`}>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Features</a></li>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Pricing</a></li>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Integrations</a></li>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Changelog</a></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className={`font-bold tracking-wider text-xs uppercase opacity-50 transition-colors ${isDark ? "text-white" : "text-brand-brown"}`}>Company</h4>
                                    <ul className={`space-y-2 text-sm transition-colors ${isDark ? "text-white/60" : "text-brand-brown/80"}`}>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>About Us</a></li>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Careers</a></li>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Blog</a></li>
                                        <li><a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-brand-orange"}`}>Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Newsletter / Social */}
                            <div className="space-y-6">
                                <h4 className={`font-bold tracking-wider text-xs uppercase opacity-50 transition-colors ${isDark ? "text-white" : "text-brand-brown"}`}>Stay Updated</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`border rounded-lg px-4 py-2 text-sm focus:outline-none w-full lg:w-48 placeholder:opacity-50 transition-all ${isDark
                                            ? "bg-white/5 border-white/10 text-white focus:border-white/30 placeholder:text-white/30"
                                            : "bg-brand-brown/5 border-brand-brown/10 text-brand-brown focus:border-brand-orange/50 placeholder:text-brand-brown/30"
                                            }`}
                                    />
                                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDark
                                        ? "bg-white text-black hover:bg-white/90"
                                        : "bg-brand-orange text-white hover:bg-brand-orange/90"
                                        }`}>
                                        Subscribe
                                    </button>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href="#" className={`transition-colors ${isDark ? "text-white/40 hover:text-white" : "text-brand-brown/40 hover:text-brand-orange"}`}><Twitter size={20} /></a>
                                    <a href="#" className={`transition-colors ${isDark ? "text-white/40 hover:text-white" : "text-brand-brown/40 hover:text-brand-orange"}`}><Linkedin size={20} /></a>
                                    <a href="#" className={`transition-colors ${isDark ? "text-white/40 hover:text-white" : "text-brand-brown/40 hover:text-brand-orange"}`}><Facebook size={20} /></a>
                                    <a href="#" className={`transition-colors ${isDark ? "text-white/40 hover:text-white" : "text-brand-brown/40 hover:text-brand-orange"}`}><Instagram size={20} /></a>
                                </div>
                            </div>

                        </div>

                        {/* Copyright Bar */}
                        <div className={`border-t py-6 text-center text-xs transition-colors ${isDark ? "border-white/5 text-white/30" : "border-brand-brown/5 text-brand-brown/30"
                            }`}>
                            &copy; {new Date().getFullYear()} CaltAI Inc. All rights reserved.
                        </div>
                    </motion.footer>
                )}
            </AnimatePresence>
        </>
    );
}
