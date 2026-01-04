"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function ExpandableFooter() {
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
                    className="relative flex items-center justify-center cursor-pointer transition-all duration-500 border-t border-r bg-surface border-border-strong hover:bg-surface-alt"
                    style={{ width: BTN_SIZE, height: BTN_SIZE }}
                >
                    <ArrowUpRight className="w-8 h-8 transition-colors duration-500 text-primary" strokeWidth={2} />
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
                        className="fixed bottom-0 left-0 right-0 z-[60] border-t shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-500 bg-surface border-border"
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
                                            className="w-full h-auto transition-all dark:brightness-[100]"
                                        />
                                    </div>
                                    <span className="text-2xl font-bold tracking-tight transition-colors text-secondary">CaltAI</span>
                                </div>
                                <p className="text-sm max-w-xs leading-relaxed transition-colors text-muted">
                                    Revolutionizing calendar management with AI-driven scheduling that adapts to your life.
                                </p>
                            </div>

                            {/* Links Column */}
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className="font-bold tracking-wider text-xs uppercase text-muted-foreground">Product</h4>
                                    <ul className="space-y-2 text-sm text-muted">
                                        <li><a href="#" className="transition-colors hover:text-primary">Features</a></li>
                                        <li><a href="#" className="transition-colors hover:text-primary">Pricing</a></li>
                                        <li><a href="#" className="transition-colors hover:text-primary">Integrations</a></li>
                                        <li><a href="#" className="transition-colors hover:text-primary">Changelog</a></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold tracking-wider text-xs uppercase text-muted-foreground">Company</h4>
                                    <ul className="space-y-2 text-sm text-muted">
                                        <li><a href="#" className="transition-colors hover:text-primary">About Us</a></li>
                                        <li><a href="#" className="transition-colors hover:text-primary">Careers</a></li>
                                        <li><a href="#" className="transition-colors hover:text-primary">Blog</a></li>
                                        <li><a href="#" className="transition-colors hover:text-primary">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Newsletter / Social */}
                            <div className="space-y-6">
                                <h4 className="font-bold tracking-wider text-xs uppercase text-muted-foreground">Stay Updated</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="border rounded-lg px-4 py-2 text-sm focus:outline-none w-full lg:w-48 placeholder:opacity-50 transition-all bg-input-bg border-input-border text-foreground focus:border-primary/50 placeholder:text-muted-foreground"
                                    />
                                    <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary-hover">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href="#" className="transition-colors text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
                                    <a href="#" className="transition-colors text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                                    <a href="#" className="transition-colors text-muted-foreground hover:text-primary"><Facebook size={20} /></a>
                                    <a href="#" className="transition-colors text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
                                </div>
                            </div>

                        </div>

                        {/* Copyright Bar */}
                        <div className="border-t py-6 text-center text-xs transition-colors border-border text-muted-foreground">
                            &copy; {new Date().getFullYear()} CaltAI Inc. All rights reserved.
                        </div>
                    </motion.footer>
                )}
            </AnimatePresence>
        </>
    );
}
