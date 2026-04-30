"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import CaltAILayer from "./CaltAILayer";

const problemStates = [
  {
    id: "01",
    title: "The problem isn't your tools. It's what happens between them.",
    body: "You've bought the CRM, the inbox automation, the doc system, the task tracker. Each one works.\n\nThe problem is what falls into the cracks between them, every single day.",
  },
  {
    id: "02",
    title: "It's not one process that breaks. It's every process, in the same way.",
    body: "Something finishes, nobody starts what comes next. A step needs input, somebody has to chase it. A decision needs approval, it sits in a thread.\n\nEvery workflow in your business has the same breakage pattern. You've just been treating them as separate problems.",
  },
  {
    id: "03",
    title: "Automation moves data. It doesn't move work.",
    body: "Automation fire when something happens. Chatbots answer when someone asks. Neither of them owns an outcome. Neither notices when a run is stuck. Neither picks up the next step.\n\nThe work between your tools needs something that watches, decides, and acts and stays on the run until it's done.",
  },
];

const ProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  // Measure the offset top after mount to calculate progress relative to viewport start
  React.useEffect(() => {
    if (containerRef.current) {
      setOffsetTop(containerRef.current.offsetTop);
    }
  }, []);

  const { scrollY } = useScroll();

  // Manual progress calculation as requested: (scrollY - offsetTop) / 2160
  const progress = useTransform(
    scrollY,
    [offsetTop, offsetTop + 2160],
    [0, 1],
    { clamp: true }
  );

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 1 / 3) {
      if (index !== 0) setIndex(0);
    } else if (latest < 2 / 3) {
      if (index !== 1) setIndex(1);
    } else {
      if (index !== 2) setIndex(2);
    }
  });

  const progressPercent = useTransform(progress, (p) => `${p * 100}%`);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FBF9F4]"
      style={{ height: "calc(720px + 907px + 2160px)" }}
    >
      <div
        className="sticky top-[63px] z-10 h-auto"
      >
        {/**
         * Problem frame — 720px, dark
         * Z-index -1 as requested to stay below the top layer
         */}
        <div className="relative z-[-1] !bg-[#262626]">
          <div className="page-frame h-[720px] relative !bg-[#262626] flex !border-[#4C4C4B] overflow-hidden">
            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#4C4C4B] z-10" />

            {/* Left Visual Column */}
            <div className="w-1/2 h-full bg-[#1C1C1C] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage: "radial-gradient(#4A4A4A 1.5px, transparent 1.5px)",
                  backgroundSize: "19px 19px",
                }}
              />
            </div>

            {/* Right Text Column */}
            <div className="w-1/2 h-full bg-[#262626] relative flex flex-col pt-[90px] pl-20 pr-[60px]">
              {/* Badge */}
              <div className="h-[44px] inline-flex items-center gap-[10px] px-5 rounded-full border border-[#484746] bg-[#1C1C1C] mb-[56px] w-fit">
                <div className="w-[22px] h-[22px] flex items-center justify-center">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16.918" height="5.71875" rx="2.85938" fill="#FB631C" />
                    <rect y="5.71875" width="11.7969" height="5.71875" rx="2.85938" fill="#FB9F72" />
                    <rect y="11.4375" width="5.72" height="5.71875" rx="2.85938" fill="#FBCCB3" />
                  </svg>

                </div>
                <span className="text-[16px] font-medium text-[#F6F3EF] font-inter">Problem</span>
              </div>

              {/* Animated Problem Content */}
              <div className="relative flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: "circOut" }}
                    className="w-[478px]"
                  >
                    <h2 className="text-[32px] font-semibold text-[#F6F3EF] leading-[1.15] mb-[44px] font-heading">
                      {problemStates[index].title}
                    </h2>
                    <p className="text-[16px] leading-[1.55] text-[#F6F3EF] font-normal whitespace-pre-line font-inter">
                      {problemStates[index].body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Indicator */}
              <div className="w-[470px] mb-[100px] relative pt-8">
                <motion.div
                  className="absolute top-0 text-[16px] font-normal text-[#FF5A1F] font-inter h-6 flex items-center"
                  style={{
                    left: progressPercent,
                    translateX: "-50%",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                  }}
                >
                  {problemStates[index].id}
                </motion.div>

                <div className="h-[1px] w-full bg-[#4C4C4B] relative flex items-center">
                  <div className="absolute left-[33.333%] w-[1px] h-3 bg-[#4C4C4B]" />
                  <div className="absolute left-[66.666%] w-[1px] h-3 bg-[#4C4C4B]" />
                  <motion.div
                    className="absolute left-0 h-[4px] bg-[#FF5A1F] rounded-full"
                    style={{ width: progressPercent }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/**
           * Hatched transition band
           */}
          <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
            <div className="page-frame h-full hatch-pattern opacity-30" />
          </div>
        </div>

        {/**
         * CaltAI Layer — Layer 1 (on top)
         * Z-index 1 as requested
         */}
        <div className="relative z-[1] bg-[#FBF9F4]">
          <CaltAILayer />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
