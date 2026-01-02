"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function ExpandableFooter() {
    const [isHovered, setIsHovered] = useState(false);

    // Matches the 80px grid/margin from other sections
    const BTN_SIZE = 80;

    return (
        <>
            {/* Hover Trigger Zone & Visual Button */}
            <div
                className="fixed bottom-0 left-0 z-50 flex items-end justify-start"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* The square corner button (Always visible) */}
                <div
                    className="relative bg-white border-t border-r border-brand-orange/50 flex items-center justify-center cursor-pointer transition-colors hover:bg-orange-50"
                    style={{ width: BTN_SIZE, height: BTN_SIZE }}
                >
                    <ArrowUpRight className="text-brand-orange w-8 h-8" strokeWidth={2.5} />
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
                        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-orange/20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
                        onMouseEnter={() => setIsHovered(true)} // Keep open while hovering footer
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="max-w-7xl mx-auto px-8 md:px-20 py-12 flex flex-col lg:flex-row items-start justify-between gap-10">

                            {/* Brand Column */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <img src="/logo.svg" alt="CaltAI Logo" className="w-full h-auto" />
                                    </div>
                                    <span className="text-2xl font-bold tracking-tight text-brand-brown">CaltAI</span>
                                </div>
                                <p className="text-brand-brown/60 text-sm max-w-xs leading-relaxed">
                                    Revolutionizing calendar management with AI-driven scheduling that adapts to your life.
                                </p>
                            </div>

                            {/* Links Column */}
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className="text-brand-brown font-bold tracking-wider text-xs uppercase opacity-50">Product</h4>
                                    <ul className="space-y-2 text-sm text-brand-brown/80">
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Features</a></li>
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Pricing</a></li>
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Integrations</a></li>
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Changelog</a></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-brand-brown font-bold tracking-wider text-xs uppercase opacity-50">Company</h4>
                                    <ul className="space-y-2 text-sm text-brand-brown/80">
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Blog</a></li>
                                        <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Newsletter / Social */}
                            <div className="space-y-6">
                                <h4 className="text-brand-brown font-bold tracking-wider text-xs uppercase opacity-50">Stay Updated</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-brand-brown/5 border border-brand-brown/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-orange/50 w-full lg:w-48 placeholder:text-brand-brown/30"
                                    />
                                    <button className="bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-orange/90 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href="#" className="text-brand-brown/40 hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
                                    <a href="#" className="text-brand-brown/40 hover:text-brand-orange transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" className="text-brand-brown/40 hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
                                    <a href="#" className="text-brand-brown/40 hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
                                </div>
                            </div>

                        </div>

                        {/* Copyright Bar */}
                        <div className="border-t border-brand-brown/5 py-6 text-center text-xs text-brand-brown/30">
                            &copy; {new Date().getFullYear()} CaltAI Inc. All rights reserved.
                        </div>
                    </motion.footer>
                )}
            </AnimatePresence>
        </>
    );
}
