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

const signalFlows = [
  {
    label: "Unlogged Context",
    labelPos: "rightTop",
    healthyOffsetPath: "path('M 325 159 L 516 159 L 516 340')",
    failedOffsetPath: "path('M 325 159 L 516 159')",
  },
  {
    label: "Stale Doc",
    labelPos: "leftTop",
    healthyOffsetPath: "path('M 325 159 L 130 159 L 130 340')",
    failedOffsetPath: "path('M 325 159 L 130 159')",
  },
  {
    label: "Missed Handoff",
    labelPos: "rightBottom",
    healthyOffsetPath: "path('M 325 562 L 516 562 L 516 340')",
    failedOffsetPath: "path('M 325 562 L 516 562')",
  },
  {
    label: "Manual Update",
    labelPos: "leftBottom",
    healthyOffsetPath: "path('M 325 562 L 130 562 L 130 340')",
    failedOffsetPath: "path('M 325 562 L 130 562')",
  },
];

const labelPositionClass: Record<string, string> = {
  leftTop: "left-[11%] top-[19%]",
  rightTop: "right-[7%] top-[19%]",
  leftBottom: "left-[8%] bottom-[19%]",
  rightBottom: "right-[8%] bottom-[19%]",
};

function ToolBox({
  className,
  eyebrow,
  title,
}: {
  className: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div
      className={`absolute z-20 flex h-[64px] w-[120px] flex-col items-center justify-center border border-[#4A4A4A] bg-[#252525] ${className}`}
    >
      <div className="font-inter text-[13px] font-semibold tracking-[0.03em] text-[#D7C1A4]">
        {eyebrow}
      </div>
      <div className="mt-1 font-inter text-[13px] font-normal text-[#F6F3EF]">
        {title}
      </div>
    </div>
  );
}

function FailureLabel({
  label,
  position,
}: {
  label: string;
  position: string;
}) {
  return (
    <motion.div
      className={`absolute z-30 flex h-[38px] items-center gap-2 rounded-full bg-[#FB631C] px-2 pr-5 font-inter text-[13px] font-semibold text-white shadow-[0_0_22px_rgba(251,99,28,0.25)] ${labelPositionClass[position]}`}
      initial={{ opacity: 0, scale: 0.84, filter: "blur(6px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="relative flex h-[21px] w-[21px] items-center justify-center rounded-full border-[2px] border-white">
        <span className="absolute h-[2px] w-[10px] rotate-45 bg-white" />
        <span className="absolute h-[2px] w-[10px] -rotate-45 bg-white" />
      </span>
      {label}
    </motion.div>
  );
}

function MovingSignal({
  flow,
  type,
}: {
  flow: (typeof signalFlows)[number];
  type: "healthy" | "failed";
}) {
  const path =
    type === "healthy" ? flow.healthyOffsetPath : flow.failedOffsetPath;

  return (
    <motion.div
      key={`${flow.label}-${type}`}
      className={`absolute z-5 h-[8px] w-[8px] rounded-full ${type === "healthy"
          ? "bg-[#36D399] shadow-[0_0_18px_rgba(54,211,153,0.9)]"
          : "bg-[#6F4DFF] shadow-[0_0_18px_rgba(111,77,255,0.9)]"
        }`}
      style={{
        offsetPath: path,
        offsetRotate: "0deg",
        offsetDistance: "0%",
      }}
      animate={{
        offsetDistance: "100%",
      }}
      transition={{
        duration: type === "healthy" ? 2.2 : 1.35,
        ease: "linear",
      }}
    />
  );
}

function ProblemBetweenToolsVisual() {
  const [step, setStep] = useState(0);
  const [signalType, setSignalType] = useState<"healthy" | "failed">("healthy");
  const [showFailure, setShowFailure] = useState(false);

  const active = signalFlows[step];

  useEffect(() => {
    setShowFailure(false);

    if (signalType === "healthy") {
      const nextTimer = window.setTimeout(() => {
        setSignalType("failed");
      }, 2600);

      return () => window.clearTimeout(nextTimer);
    }

    const showTimer = window.setTimeout(() => {
      setShowFailure(true);
    }, 950);

    const nextTimer = window.setTimeout(() => {
      setShowFailure(false);
      setSignalType("healthy");
      setStep((prev) => (prev + 1) % signalFlows.length);
    }, 2300);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(nextTimer);
    };
  }, [step, signalType]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#1C1C1C]">
      <div className="origin-center scale-[0.78] sm:scale-[0.82] md:scale-[0.88] lg:scale-[0.74] xl:scale-[1] 2xl:scale-[0.92]">
        <div className="relative h-[720px] w-[650px] overflow-hidden bg-[#1C1C1C]">
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "radial-gradient(rgba(217,217,217,0.09) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="absolute left-[50%] top-[22%] h-[56%] w-px -translate-x-1/2 bg-[#4A4A4A]" />
          <div className="absolute left-[20%] top-[22%] h-[56%] w-px -translate-x-1/2 bg-[#4A4A4A]" />
          <div className="absolute left-[79.5%] top-[22%] h-[56%] w-px -translate-x-1/2 bg-[#4A4A4A]" />
          <div className="absolute left-[20%] top-[22%] h-px w-[59.5%] bg-[#4A4A4A]" />
          <div className="absolute left-[20%] top-[78%] h-px w-[59.5%] bg-[#4A4A4A]" />
          <div className="absolute left-[22%] top-[50%] h-px w-[15%] bg-[#4A4A4A]" />
          <div className="absolute left-[63%] top-[50%] h-px w-[15%] bg-[#4A4A4A]" />

          <motion.div
            className="absolute left-1/2 top-1/2 z-20 flex h-[208px] w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#4A4A4A] bg-black"
            animate={{
              boxShadow: showFailure
                ? "0 0 46px rgba(251,99,28,0.18)"
                : "0 0 0px rgba(251,99,28,0)",
            }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.36) 0px, rgba(255,255,255,0.36) 1px, transparent 1px, transparent 13px)",
              }}
            />

            <motion.div
              className="relative z-10 bg-black/80 px-5 py-2 font-inter text-[11px] font-normal text-[#D7C1A4]"
              animate={{ scale: showFailure ? [1, 1.035, 1] : 1 }}
              transition={{ duration: 0.4 }}
            >
              The Friction Zone
            </motion.div>
          </motion.div>

          <ToolBox
            className="left-1/2 top-[17.5%] -translate-x-1/2"
            eyebrow="PIPELINE"
            title="CRM"
          />
          <ToolBox
            className="left-[11%] top-1/2 -translate-y-1/2"
            eyebrow="KNOWLEDGE"
            title="Doc"
          />
          <ToolBox
            className="right-[11%] top-1/2 -translate-y-1/2"
            eyebrow="COMMS"
            title="Inbox"
          />
          <ToolBox
            className="left-1/2 bottom-[17.5%] -translate-x-1/2"
            eyebrow="EXECUTION"
            title="Task tracker"
          />

          <AnimatePresence mode="wait">
            <MovingSignal flow={active} type={signalType} />
          </AnimatePresence>

          <AnimatePresence>
            {showFailure && signalType === "failed" && (
              <FailureLabel label={active.label} position={active.labelPos} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

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

  const progress = useTransform(scrollY, [offsetTop, offsetTop + 3500], [0, 1], {
    clamp: true,
  });

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
      {/* Desktop problem section only */}
      <section
        ref={containerRef}
        className="relative hidden bg-[#FBF9F4] lg:block"
        style={{ height: "calc(720px + 3500px)" }}
      >
        <div className="sticky top-[63px] z-10">
          <div className="relative !bg-[#262626]">
            <div className="page-frame relative flex h-[720px] overflow-hidden !border-[#4C4C4B] !bg-[#262626]">
              <div className="absolute bottom-0 left-1/2 top-0 z-10 w-px bg-[#4C4C4B]" />

              <div className="relative h-full w-1/2 overflow-hidden bg-[#1C1C1C]">
                <ProblemBetweenToolsVisual />
              </div>

              <div className="relative flex h-full w-1/2 flex-col bg-[#262626] pb-0 pl-20 pr-[60px] pt-[90px]">
                <div className="mb-[56px] inline-flex h-[44px] w-fit items-center gap-[10px] rounded-full border border-[#484746] bg-[#1C1C1C] px-5">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <rect width="16.918" height="5.71875" rx="2.85938" fill="#FB631C" />
                    <rect y="5.71875" width="11.7969" height="5.71875" rx="2.85938" fill="#FB9F72" />
                    <rect y="11.4375" width="5.72" height="5.71875" rx="2.85938" fill="#FBCCB3" />
                  </svg>
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
                    style={{ left: progressPercent, translateX: "-50%" }}
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
        </div>
      </section>

      {/* Mobile problem section only */}
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
      </section>

      {/* CaltAI Layer must be outside Problem sticky section */}
      <CaltAILayer />
    </>
  );
};

export default ProblemSection;