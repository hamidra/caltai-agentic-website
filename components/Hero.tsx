"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const nextActionStatuses = [
  "Next step selected",
  "Draft prepared",
  "Approval needed",
  "Blocker detected",
];

const toolExecutionStatuses = [
  "Action routed",
  "Systems updated",
  "Task created",
  "Record synced",
];

const outcomeStatuses = [
  "Outcome checked",
  "Run on track",
  "Replan triggered",
  "Risk reduced",
];

const ARTBOARD_WIDTH = 600;
const ARTBOARD_HEIGHT = 607;

const pxToPercentX = (x: number) => `${(x / ARTBOARD_WIDTH) * 100}%`;
const pxToPercentY = (y: number) => `${(y / ARTBOARD_HEIGHT) * 100}%`;

const boxStyle = (
  x: number,
  y: number,
  w: number,
  h: number
): React.CSSProperties => ({
  left: pxToPercentX(x),
  top: pxToPercentY(y),
  width: pxToPercentX(w),
  height: pxToPercentY(h),
});

function useRotatingIndex(length: number, delay: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [length, delay]);

  return index;
}

function useRotatingText(items: string[], delay: number) {
  const index = useRotatingIndex(items.length, delay);
  return items[index];
}

function AnimatedChipText({
  text,
  color = "#6023FA",
}: {
  text: string;
  color?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="block whitespace-nowrap leading-none"
        style={{ color }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}

function StatusChip({
  x,
  y,
  text,
}: {
  x: number;
  y: number;
  text: string;
}) {
  return (
    <motion.div
      style={boxStyle(x - 5, y, 130, 23)}
      animate={{
        boxShadow: [
          "0 0 0 rgba(96,35,250,0)",
          "0 0 10px rgba(96,35,250,0.10)",
          "0 0 0 rgba(96,35,250,0)",
        ],
      }}
      transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute z-20 flex items-center justify-center rounded-full border border-[#BCA4FA] bg-[#F2EDFF] px-2 text-center text-[clamp(9px,0.95vw,11px)] font-medium text-[#6023FA]"
    >
      <AnimatedChipText text={text} />
    </motion.div>
  );
}

function SignalPath({
  d,
  duration = 4,
  delay = 0,
  size = 4,
}: {
  d: string;
  duration?: number;
  delay?: number;
  size?: number;
}) {
  const id = React.useId();

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
      viewBox={`0 0 ${ARTBOARD_WIDTH} ${ARTBOARD_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <path id={id} d={d} fill="none" stroke="transparent" />

      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.08;0.92;1"
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />

        <circle r={size} fill="rgba(251,99,28,0.14)">
          <animateMotion
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
            rotate="auto"
            calcMode="linear"
          >
            <mpath href={`#${id}`} />
          </animateMotion>
        </circle>

        <circle r={size} fill="rgba(251,99,28,0.2)">
          <animateMotion
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
            rotate="auto"
            calcMode="linear"
          >
            <mpath href={`#${id}`} />
          </animateMotion>
        </circle>

        <circle r={size} fill="#F9C6AE" stroke="#FB631C" strokeWidth="1.5">
          <animateMotion
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
            rotate="auto"
            calcMode="linear"
          >
            <mpath href={`#${id}`} />
          </animateMotion>
        </circle>
      </g>
    </svg>
  );
}

function HeroImage({
  src,
  x,
  y,
  w,
  h,
  className = "",
  alt = "",
}: {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`absolute select-none ${className}`}
      style={boxStyle(x, y, w, h)}
    />
  );
}

function OutputCard({
  x,
  y,
  title,
}: {
  x: number;
  y: number;
  title: string;
}) {
  return (
    <div
      style={boxStyle(x, y, 156, 76)}
      className="absolute z-[7] rounded-[10px] border border-[#D8D8D8] bg-[#FBF9F4] shadow-[0_2px_8px_rgba(68,50,24,0.06)]"
    >
      <div className="flex h-full w-full items-start justify-center pt-[8px] text-center font-inter text-[13px] font-semibold text-[#443218]">
        {title}
      </div>
    </div>
  );
}

function CaltAILayerVisual() {
  const activeStage = useRotatingIndex(3, 1500);
  const nextActionStatus = useRotatingText(nextActionStatuses, 2200);
  const toolExecutionStatus = useRotatingText(toolExecutionStatuses, 2450);
  const outcomeStatus = useRotatingText(outcomeStatuses, 2700);

  return (
    <div className="relative aspect-[600/607] w-full max-w-[540px] overflow-hidden bg-[#FBF9F4]">
      <img
        src="/hero/caltai-layer-base.png"
        alt="CaltAI operations layer visual"
        className="absolute inset-0 h-full w-full object-fill"
        draggable={false}
      />

      {/* Business tools and signals */}
      <HeroImage src="/hero/tool-gmail.png" x={78} y={122} w={43} h={43} alt="Email" />
      <HeroImage src="/hero/tool-calendar.png" x={138} y={76} w={43} h={43} alt="Calendar" />
      <HeroImage src="/hero/tool-hubspot.png" x={198} y={28} w={43} h={43} alt="CRM" />
      <HeroImage src="/hero/tool-slack.png" x={359} y={28} w={43} h={43} alt="Team chat" />
      <HeroImage src="/hero/tool-docs.png" x={419} y={76} w={43} h={43} alt="Documents" />
      <HeroImage src="/hero/tool-todo.png" x={478} y={122} w={43} h={43} alt="Tasks" />

      {/* Optional: replace one of the icons above with analytics or commerce icons once assets exist */}
      {/* Suggested future assets:
          /hero/tool-analytics.png
          /hero/tool-shopify.png
          /hero/tool-stripe.png
      */}

      {/* CaltAI layer body */}
      <HeroImage
        src="/hero/caltai-layer.png"
        x={137}
        y={178}
        w={326}
        h={172}
        className="z-[11]"
        alt="CaltAI Layer"
      />

      {/* Output cards */}
      <OutputCard x={42} y={477} title="Next action" />
      <OutputCard x={222} y={508} title="Tool execution" />
      <OutputCard x={398} y={477} title="Outcome loop" />

      {/* Glow behind logo */}
      <motion.div
        className="pointer-events-none absolute z-[11] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[22px]"
        style={{
          left: pxToPercentX(300),
          top: pxToPercentY(232),
          width: "78px",
          height: "78px",
          background: "rgba(96, 35, 250, 0.13)",
        }}
        animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute z-[8] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[14px]"
        style={{
          left: pxToPercentX(300),
          top: pxToPercentY(232),
          width: "58px",
          height: "58px",
          background: "rgba(251, 99, 28, 0.12)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/hero/caltai-logo.png"
        alt=""
        draggable={false}
        className="absolute z-[12] -translate-x-1/2 -translate-y-1/2 select-none"
        style={{
          left: pxToPercentX(300),
          top: pxToPercentY(224),
          width: "53px",
          height: "53px",
        }}
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Signals from tools to CaltAI layer */}
      <SignalPath d="M 124 143 H 298.5 V 405" duration={4.8} delay={0} />
      <SignalPath d="M 238 48 H 298.5 V 405" duration={5} delay={1.4} />
      <SignalPath d="M 405 97 H 298.5 V 405" duration={5} delay={2.8} />
      <SignalPath d="M 470 143 H 298.5 V 405" duration={2.8} delay={0} />

      {/* Signals from approval to output cards */}
      <SignalPath
        d="M 281 405
        V 430
        C 280 451 260 451 240 451
        H 130
        C 118 460 118 480 118 500
        V 525"
        duration={3.2}
        delay={3.2}
        size={4}
      />

      <SignalPath d="M 298.5 405 V 535" duration={3} delay={3.5} size={4} />

      <SignalPath
        d="M 315 405
        V 430
        C 319 451 322 451 350 451
        H 461
        C 480 460 475 480 475 500
        V 525"
        duration={3.4}
        delay={5}
        size={4}
      />

      {/* Understand / Plan / Act */}
      <div
        style={boxStyle(165, 289, 269, 38)}
        className="absolute z-[15] grid grid-cols-[1.25fr_1fr_1fr] overflow-hidden rounded-full border border-[#BCA4FA] bg-[#F2EDFF]"
      >
        {["Understand", "Plan", "Act"].map((label, i) => {
          const active = activeStage === i;

          return (
            <motion.div
              key={label}
              className={`relative flex items-center justify-center ${i !== 2 ? "border-r border-[#BCA4FA]" : ""
                }`}
              animate={{
                backgroundColor: active ? "#F8F4FF" : "#F2EDFF",
                boxShadow: active
                  ? "0 0 18px rgba(96,35,250,0.18)"
                  : "0 0 0 rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="text-[clamp(11px,1.65vw,12px)] font-medium text-[#6023FA]">
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Human Approval */}
      <motion.div
        style={boxStyle(221.4, 385.1, 155.2, 36)}
        className="absolute z-[15] flex items-center justify-center rounded-full border border-[#FAB5A4] bg-[#FFF3ED]"
        animate={{
          boxShadow: [
            "0 0 0 rgba(250,76,35,0)",
            "0 0 16px rgba(250,76,35,0.18)",
            "0 0 0 rgba(250,76,35,0)",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[clamp(12px,1.7vw,12px)] font-medium text-[#FA4C23]">
          Human Approval
        </span>
      </motion.div>

      {/* Bottom status chips */}
      <StatusChip x={59.9} y={519.3} text={nextActionStatus} />
      <StatusChip x={239.5} y={550.2} text={toolExecutionStatus} />
      <StatusChip x={415.5} y={519.3} text={outcomeStatus} />
    </div>
  );
}

const Hero = () => {
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
                AI OPERATIONS LAYER
              </span>
            </div>

            {/* Headline */}
            <h1
              className="w-full max-w-[620px] font-heading font-semibold tracking-tight text-[#443218]"
              style={{
                fontSize: "clamp(25px, 5.4vw, 45px)",
                lineHeight: "1.05",
              }}
            >
              The AI operations layer that watches your business and moves work
              forward.
            </h1>

            {/* Subtext */}
            <p className="mt-7 w-full max-w-[620px] font-inter text-[16px] font-light leading-[1.5] text-[#695A44] sm:mt-9 sm:text-[17px] md:text-[18px] md:leading-[1.45] lg:mt-10 lg:leading-[1.45]">
              CaltAI connects to your tools, analytics, and business context to run defined business operations, not one-off tasks. It detects signals, plans next actions, routes approvals, executes through your systems or people, and learns from outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex w-full flex-col gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center sm:gap-5 lg:mt-12">
              <Link
                href="/design-partners"
                className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-inter text-[16px] font-medium text-white shadow-sm transition-all hover:bg-[#E84D14] sm:w-auto"
              >
                Apply as a design partner
              </Link>

              <Link
                href="#caltai-layer"
                className="flex h-[52px] w-full items-center justify-center rounded-full border border-[#D5D4CF] px-8 font-inter text-[16px] font-medium text-[#443218] transition-all hover:bg-white sm:w-auto"
              >
                See how it works
              </Link>
            </div>
            <p className="mt-5 max-w-[560px] font-inter text-[14px] font-normal leading-[1.5] text-[#8D8176] md:text-[15px]">
              Starting with focused operation packages, built to run inside your rules and approval flow.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center justify-center xl:w-[540px] xl:justify-end">
            <CaltAILayerVisual />
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