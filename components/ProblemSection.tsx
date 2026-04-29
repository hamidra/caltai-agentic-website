"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";

const problemStates = [
  {
    id: "01",
    title: "The problem isn’t your tools.\nIt’s what happens between them.",
    body: "You’ve bought the CRM, the inbox automation, the doc system, the task tracker. Each one works.\n\nThe problem is what falls into the cracks between them, every single day.",
  },
  {
    id: "02",
    title: "It’s not one process that\nbreaks. It’s every process, in\nthe same way.",
    body: "Something finishes, nobody starts what comes next. A step needs input, somebody has to chase it. A decision needs approval, it sits in a thread.\n\nEvery workflow in your business has the same breakage pattern. You’ve just been treating them as separate problems.",
  },
  {
    id: "03",
    title: "Automation moves data.\nIt doesn’t move work.",
    body: "Automation fire when something happens. Chatbots answer when someone asks. Neither of them owns an outcome. Neither notices when a run is stuck. Neither picks up the next step.\n\nThe work between your tools needs something that watches, decides, and acts and stays on the run until it’s done.",
  },
];

const ProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handle discrete state changes exactly at 33.33% and 66.66%
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 1/3) {
      if (index !== 0) setIndex(0);
    } else if (latest < 2/3) {
      if (index !== 1) setIndex(1);
    } else {
      if (index !== 2) setIndex(2);
    }
  });

  const progressPercent = useTransform(scrollYProgress, (p) => `${p * 100}%`);

  return (
    <div ref={containerRef} className="relative h-[2160px] bg-[#262626]">
      {/* Sticky Container (720px tall) */}
      <div className="sticky top-0 h-[720px] w-full overflow-hidden">
        {/* Page Frame Borders (1240px) */}
        <div className="page-frame h-full !bg-[#262626] flex !border-[#4C4C4B]">
          {/* Vertical Divider between columns */}
          <div className="absolute left-1/2 top-0 bottom-[32px] w-[1px] bg-[#4C4C4B] z-10" />

          {/* Left Visual Column */}
          <div className="w-1/2 h-[calc(100%-32px)] bg-[#1C1C1C] relative overflow-hidden">
            {/* Dotted Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(#2B2B2B 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }}
            />
          </div>

          {/* Right Text Column */}
          <div className="w-1/2 h-[calc(100%-32px)] bg-[#262626] relative flex flex-col pt-[90px] pl-20 pr-[60px]">
            {/* Badge */}
            <div className="h-[44px] inline-flex items-center gap-[10px] px-5 rounded-full border border-[#484746] bg-[#1C1C1C] mb-[56px] w-fit">
              {/* Icon Slot */}
              <div className="w-[22px] h-[22px] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Custom Blob Stack Icon */}
                  <rect x="2" y="3" width="14" height="4" rx="2" fill="#FF5A1F" />
                  <rect x="2" y="8" width="10" height="4" rx="2" fill="#92400E" />
                  <rect x="2" y="13" width="5" height="4" rx="2" fill="#451A03" />
                </svg>
              </div>
              <span className="text-[16px] font-medium text-[#F6F3EF] font-sans">Problem</span>
            </div>

            {/* Content Transitions */}
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
                  <h2 className="text-[40px] font-semibold text-[#F6F3EF] leading-[1.15] mb-[44px] whitespace-pre-line font-heading">
                    {problemStates[index].title}
                  </h2>
                  <p className="text-[16px] leading-[1.55] text-[#F6F3EF] font-normal whitespace-pre-line font-sans">
                    {problemStates[index].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <div className="w-[470px] mb-[100px] relative pt-8">
              {/* Number Label (Movers with progress) */}
              <motion.div 
                className="absolute top-0 text-[16px] font-normal text-[#FF5A1F] font-sans h-6 flex items-center"
                style={{ 
                  left: progressPercent, 
                  translateX: "-50%",
                  // Clamp label to stay within bounds
                  paddingLeft: "4px",
                  paddingRight: "4px"
                }}
              >
                {problemStates[index].id}
              </motion.div>

              {/* Base Line */}
              <div className="h-[1px] w-full bg-[#4C4C4B] relative flex items-center">
                {/* 33.33% Marker */}
                <div className="absolute left-[33.333%] w-[1px] h-3 bg-[#4C4C4B]" />
                {/* 66.66% Marker */}
                <div className="absolute left-[66.666%] w-[1px] h-3 bg-[#4C4C4B]" />
                
                {/* Orange Active Line */}
                <motion.div 
                  className="absolute left-0 h-[4px] bg-[#FF5A1F] rounded-full"
                  style={{ width: progressPercent }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Zebra Band */}
          <div className="absolute bottom-0 left-0 right-0 h-[32px] border-t border-[#4C4C4B] overflow-hidden">
             <div 
               className="w-full h-full opacity-30 hatch-pattern"
               style={{
                 backgroundImage: "repeating-linear-gradient(45deg, #4C4C4B, #4C4C4B 1px, transparent 1px, transparent 10px)",
                 backgroundSize: "14px 14px"
               }}
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
