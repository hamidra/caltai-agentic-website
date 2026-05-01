"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const rotatingWords = [
  "client onboarding",
  "outbound follow-up",
  "lead lifecycle",
  "client intake",
];

const RollingWord = ({ word }: { word: string }) => {
  return (
    <span className="inline-flex whitespace-nowrap text-[#4209DF]">
      {word.split("").map((char, i) => (
        <span
          key={`${word}-${i}`}
          className="relative inline-block h-[1.2em] overflow-hidden"
          style={{
            minWidth: char === " " ? "0.3em" : "auto",
          }}
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
                delay: i * 0.03,
              }}
              className="inline-block whitespace-pre text-[#4209DF]"
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
      <div className="page-frame relative min-h-auto lg:min-h-[700px]">
        {/* Top Hatch Band */}
        <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
          <div className="h-full w-full hatch-pattern opacity-40" />
        </div>

        <section className="flex flex-col gap-10 px-5 py-[56px] sm:px-6 sm:py-[68px] md:px-12 md:py-[78px] xl:flex-row xl:gap-8 xl:py-[85px]">
          {/* Left Column */}
          <div className="z-10 flex flex-1 flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="mb-9 flex h-[36px] max-w-full items-center gap-2.5 rounded-full border border-[#FCB7A4] bg-[#FBF9F4] pl-[10px] pr-3.5 sm:mb-12">
              <div className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.5, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-[18px] w-[18px] rounded-full bg-[#F8C8B0]"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.5, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-[12px] w-[12px] rounded-full bg-[#F99F75] opacity-20"
                />
                <motion.div
                  animate={{ scale: [1, 1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-[6px] w-[6px] rounded-full bg-[#FB631C]"
                />
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
              </div>

              <span className="truncate whitespace-nowrap font-inter text-[11px] font-normal leading-none text-[#443218] sm:text-[13px]">
                ENTERPRISE QUALITY OPERATION
              </span>
            </div>

            {/* Headline */}
            <h1
              className="w-full max-w-[500px] font-heading font-semibold tracking-tight text-[#443218]"
              style={{
                fontSize: "clamp(25px, 5.4vw, 45px)",
                lineHeight: "1.1",
              }}
            >
              <span className="block whitespace-nowrap">An operation system</span>

              <span className="block whitespace-nowrap">
                that runs{" "}
                <span className="inline-block whitespace-nowrap align-baseline text-[#4209DF]">
                  <RollingWord word={rotatingWords[index]} />
                </span>
              </span>

              <span className="block whitespace-nowrap">across your tools</span>
            </h1>

            {/* Subtext */}
            <p className="mt-7 w-full max-w-[580px] font-inter text-[16px] font-light leading-[1.5] text-[#695A44] sm:mt-9 sm:text-[17px] md:text-[18px] md:leading-[1.45] lg:mt-10 lg:leading-[1.4]">
              For agencies tired of manual chasing across their CRM, inbox,
              calendar, and docs. CaltAI watches for signals, drafts actions,
              routes approvals, and keeps work moving until it's done.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex w-full flex-col gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center sm:gap-5 lg:mt-12">
              <Link
                href="/design-partners"
                className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-inter text-[16px] font-medium text-white shadow-sm transition-all hover:bg-[#E84D14] sm:w-auto"
              >
                Become a design partner
              </Link>

              <Link
                href="/#demo"
                className="flex h-[52px] w-full items-center justify-center rounded-full border border-[#D5D4CF] px-8 font-inter text-[16px] font-medium text-[#443218] transition-all hover:bg-white sm:w-auto"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center justify-end xl:w-[540px]">
            <div className="relative h-[260px] w-full overflow-hidden border border-[#D5D4CF] bg-[#F5F2ED] sm:h-[340px] md:h-[420px] xl:h-[440px]">
              <svg
                className="absolute inset-0 h-full w-full text-[#D5D4CF]"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Bottom Hatch Band */}
        <div className="h-[30px] w-full overflow-hidden border-t border-[#D5D4CF] xl:absolute xl:bottom-0 xl:left-0 xl:right-0">
          <div className="h-full w-full hatch-pattern opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default Hero;