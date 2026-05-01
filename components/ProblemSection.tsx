"use client";

import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (containerRef.current) {
      setOffsetTop(containerRef.current.offsetTop);
    }
  }, []);

  const { scrollY } = useScroll();

  const progress = useTransform(
    scrollY,
    [offsetTop, offsetTop + 2160],
    [0, 1],
    { clamp: true }
  );

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 1 / 3) {
      setIndex(0);
    } else if (latest < 2 / 3) {
      setIndex(1);
    } else {
      setIndex(2);
    }
  });

  const progressPercent = useTransform(progress, (p) => `${p * 100}%`);

  return (
    <>
      {/* Desktop sticky scroll version */}
      <section
        ref={containerRef}
        className="relative hidden bg-[#FBF9F4] lg:block"
        style={{ height: "calc(720px + 907px + 2160px)" }}
      >
        <div className="sticky top-[63px] z-10 h-auto">
          <div className="relative z-[-1] !bg-[#262626]">
            <div className="page-frame relative flex h-[720px] overflow-hidden !border-[#4C4C4B] !bg-[#262626]">
              <div className="absolute bottom-0 left-1/2 top-0 z-10 w-px bg-[#4C4C4B]" />

              <div className="relative h-full w-1/2 overflow-hidden bg-[#1C1C1C]">
                <div
                  className="absolute inset-0 opacity-[0.4]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#4A4A4A 1.5px, transparent 1.5px)",
                    backgroundSize: "19px 19px",
                  }}
                />
              </div>

              <div className="relative flex h-full w-1/2 flex-col bg-[#262626] pb-0 pl-20 pr-[60px] pt-[90px]">
                <div className="mb-[56px] inline-flex h-[44px] w-fit items-center gap-[10px] rounded-full border border-[#484746] bg-[#1C1C1C] px-5">
                  <div className="flex h-[22px] w-[22px] items-center justify-center">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                      <rect width="16.918" height="5.71875" rx="2.85938" fill="#FB631C" />
                      <rect y="5.71875" width="11.7969" height="5.71875" rx="2.85938" fill="#FB9F72" />
                      <rect y="11.4375" width="5.72" height="5.71875" rx="2.85938" fill="#FBCCB3" />
                    </svg>
                  </div>
                  <span className="font-inter text-[16px] font-medium text-[#F6F3EF]">
                    Problem
                  </span>
                </div>

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
                      <h2 className="mb-[44px] font-heading text-[32px] font-semibold leading-[1.15] text-[#F6F3EF]">
                        {problemStates[index].title}
                      </h2>

                      <p className="whitespace-pre-line font-inter text-[16px] font-normal leading-[1.55] text-[#F6F3EF]">
                        {problemStates[index].body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="relative mb-[100px] w-[470px] pt-8">
                  <motion.div
                    className="absolute top-0 flex h-6 items-center px-1 font-inter text-[16px] font-normal text-[#FF5A1F]"
                    style={{
                      left: progressPercent,
                      translateX: "-50%",
                    }}
                  >
                    {problemStates[index].id}
                  </motion.div>

                  <div className="relative flex h-px w-full items-center bg-[#4C4C4B]">
                    <div className="absolute left-[33.333%] h-3 w-px bg-[#4C4C4B]" />
                    <div className="absolute left-[66.666%] h-3 w-px bg-[#4C4C4B]" />
                    <motion.div
                      className="absolute left-0 h-[4px] rounded-full bg-[#FF5A1F]"
                      style={{ width: progressPercent }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
              <div className="page-frame h-full hatch-pattern opacity-30" />
            </div>
          </div>

          <div className="relative z-[1] bg-[#FBF9F4]">
            <CaltAILayer />
          </div>
        </div>
      </section>

      {/* Tablet/mobile static version */}
      <section className="block bg-[#FBF9F4] lg:hidden">
        <div className="bg-[#262626]">
          <div className="page-frame !border-[#4C4C4B]">
            <div className="px-5 py-14 sm:px-8 md:px-10 md:py-16">
              <div className="mb-10 inline-flex h-[42px] w-fit items-center gap-[10px] rounded-full border border-[#484746] bg-[#1C1C1C] px-5">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <rect width="16.918" height="5.71875" rx="2.85938" fill="#FB631C" />
                  <rect y="5.71875" width="11.7969" height="5.71875" rx="2.85938" fill="#FB9F72" />
                  <rect y="11.4375" width="5.72" height="5.71875" rx="2.85938" fill="#FBCCB3" />
                </svg>
                <span className="font-inter text-[15px] font-medium text-[#F6F3EF]">
                  Problem
                </span>
              </div>

              <div className="grid gap-5 md:gap-6">
                {problemStates.map((state, i) => (
                  <motion.article
                    key={state.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="border border-[#4C4C4B] bg-[#1C1C1C] p-6 sm:p-7 md:p-8"
                  >
                    <div className="mb-5 font-inter text-[15px] font-normal text-[#FF5A1F]">
                      {state.id}
                    </div>

                    <h2 className="font-heading text-[26px] font-semibold leading-[1.12] text-[#F6F3EF] sm:text-[30px] md:text-[34px]">
                      {state.title}
                    </h2>

                    <p className="mt-7 whitespace-pre-line font-inter text-[15px] font-normal leading-[1.65] text-[#F6F3EF]/90 sm:text-[16px]">
                      {state.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
            <div className="page-frame h-full hatch-pattern opacity-30" />
          </div>
        </div>

        <CaltAILayer />
      </section>
    </>
  );
};

export default ProblemSection;