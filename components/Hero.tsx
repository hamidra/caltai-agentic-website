"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = [
  "client onboarding",
  "outbound follow-up",
  "lead lifecycle",
  "client intake"
];

const RollingWord = ({ word }: { word: string }) => {
  return (
    <span className="inline-flex">
      {word.split("").map((char, i) => (
        <span
          key={`${word}-${i}`}
          className="relative inline-block overflow-hidden h-[1.2em] w-[0.6em] md:w-auto"
          style={{ minWidth: char === " " ? "0.3em" : "auto" }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={char + i}
              initial={{ y: "100%", rotateX: -90, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              exit={{ y: "-100%", rotateX: 90, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.03, // 30ms stagger
              }}
              className="inline-block text-[#4209DF] whitespace-pre"
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FBF9F4]">
      <div className="page-frame min-h-[700px]">
        {/* Zebra / Hatch Section */}
        <div className="w-full border-b border-[#D5D4CF] h-[30px] overflow-hidden">
          <div className="w-full h-full hatch-pattern opacity-40 px-8" />
        </div>

        <section className="px-8 md:px-12 py-[85px] flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left Column (Content) */}
          <div className="flex-1 flex flex-col items-start z-10">
            {/* Eyebrow Badge */}
            <div className="h-[36px] flex items-center gap-2.5 pr-3.5 pl-[10px] rounded-full border border-[#FCB7A4] bg-[#FBF9F4] mb-12">
              <div className="relative w-4 h-4 flex items-center justify-center">
                {/* Layered Pulsing Circles */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.5, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[18px] h-[18px] rounded-full bg-[#F8C8B0]"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.5, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[12px] h-[12px] rounded-full bg-[#F99F75] opacity-20"
                />
                <motion.div
                  animate={{ scale: [1, 1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[6px] h-[6px] rounded-full bg-[#FB631C]"
                />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
              </div>
              <span className="text-[13px] font-normal leading-none text-[#443218] whitespace-nowrap font-inter">
                ENTERPRISE QUALITY OPERATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[46px] font-semibold text-[#443218] leading-[1.12] tracking-tight w-[604px] font-heading">
              An operation system that <br />
              runs <RollingWord word={rotatingWords[index]} /> <br />
              across your tools
            </h1>

            {/* Subtext */}
            <p className="text-[18px] font-light leading-[1.4] text-[#695A44] mt-10 w-[580px] font-inter">
              For agencies tired of manual chasing across their CRM, inbox,
              calendar, and docs. CaltAI watches for signals, drafts actions,
              routes approvals, and keeps work moving until it's done.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-5 mt-12">
              <button className="h-[52px] px-8 bg-[#FF5A1F] text-white text-[16px] font-medium rounded-full hover:bg-[#E84D14] transition-all shadow-sm font-inter">
                Become a design partner
              </button>
              <button className="h-[52px] px-8 border border-[#D5D4CF] text-[#443218] text-[16px] font-medium rounded-full hover:bg-white transition-all font-inter">
                Book a demo
              </button>
            </div>
          </div>

          {/* Right Column (Placeholder) */}
          <div className="w-full lg:w-[540px] flex items-center justify-end">
            <div className="w-full h-[440px] bg-[#F5F2ED] border border-[#D5D4CF] relative overflow-hidden">
              {/* "X" Pattern */}
              <svg className="absolute inset-0 w-full h-full text-[#D5D4CF]" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </section>

        {/* Decorative Bottom Hatched Band */}
        <div className="absolute bottom-0 left-0 right-0 h-[30px] border-t border-[#D5D4CF] overflow-hidden">
          <div className="w-full h-full hatch-pattern opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
