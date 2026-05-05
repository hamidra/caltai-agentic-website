"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const rotatingWords = [
  "client onboarding",
  "outbound follow-up",
  "lead lifecycle",
  "client intake",
];

const clientStatuses = [
  "Update prepared",
  "Reminder queued",
  "Asset requested",
  "Follow-up sent",
];

const toolStatuses = [
  "Timeline logged",
  "Task created",
  "CRM updated",
  "Record synced",
];

const handoffStatuses = [
  "Escalation routed",
  "Next step routed",
  "Owner assigned",
  "Brief shared",
];

const ARTBOARD_WIDTH = 600;
const ARTBOARD_HEIGHT = 607;

const pxToPercentX = (x: number) => `${(x / ARTBOARD_WIDTH) * 100}%`;
const pxToPercentY = (y: number) => `${(y / ARTBOARD_HEIGHT) * 100}%`;

const boxStyle = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
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
      style={boxStyle(x, y, 120, 21)}
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

function CaltAILogo() {
  return (
    <svg viewBox="0 0 63 63" className="h-full w-full" fill="none">
      <defs>
        <filter
          id="caltai-logo-shadow"
          x="0"
          y="0"
          width="62.7031"
          height="62.7031"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.266667 0 0 0 0 0.196078 0 0 0 0 0.0941176 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>

      <g filter="url(#caltai-logo-shadow)">
        <circle cx="31.3516" cy="31.3516" r="25.3516" fill="white" />
        <circle cx="31.3516" cy="31.3516" r="24.8516" stroke="#443218" strokeOpacity="0.27" />
      </g>

      <path
        d="M33.5388 20.4087C33.5388 21.2818 33.7109 22.1465 34.045 22.9532C34.3791 23.7598 34.8689 24.4929 35.4862 25.1103C36.1036 25.7277 36.8367 26.2174 37.6434 26.5516C38.4239 26.8748 39.2587 27.0456 40.1029 27.0564V24.5328H44.4806V27.2268H40.2723V31.2663H44.4806V42.3771H40.1029V35.6449C39.2587 35.6557 38.4239 35.8268 37.6434 36.1501C36.8367 36.4842 36.1036 36.974 35.4862 37.5914C34.8689 38.2088 34.3791 38.9419 34.045 39.7485C33.7109 40.5551 33.5388 41.4198 33.5388 42.2929V42.3775H29.1612V42.3761C26.2671 42.3541 23.4964 41.1959 21.4483 39.1479C19.3805 37.08 18.2187 34.2752 18.2188 31.3508C18.2188 28.4265 19.3805 25.6219 21.4483 23.5541C23.4964 21.5061 26.2672 20.3473 29.1612 20.3252V20.3242H33.5388V20.4087ZM29.3299 24.7018H29.2454C27.482 24.7018 25.7908 25.4024 24.5438 26.6493C23.2969 27.8962 22.5964 29.5875 22.5964 31.3508L22.5984 31.5159C22.6406 33.2195 23.3359 34.8444 24.5438 36.0524C25.7908 37.2993 27.4819 37.9998 29.2454 37.9998H29.3299V40.3722C29.721 38.1611 30.7813 36.1053 32.3907 34.4959C34.1349 32.7518 36.4032 31.652 38.8254 31.3505C36.4032 31.049 34.1349 29.9499 32.3907 28.2058C30.7812 26.5962 29.721 24.5402 29.3299 22.3288V24.7018Z"
        fill="#443218"
      />
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
}: {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      draggable={false}
      className={`absolute select-none ${className}`}
      style={boxStyle(x, y, w, h)}
    />
  );
}

function CaltAILayerVisual() {
  const activeStage = useRotatingIndex(3, 1500);
  const clientStatus = useRotatingText(clientStatuses, 2200);
  const toolStatus = useRotatingText(toolStatuses, 2450);
  const handoffStatus = useRotatingText(handoffStatuses, 2700);

  return (
    <div className="relative aspect-[600/607] w-full max-w-[540px] overflow-hidden bg-[#FBF9F4]">
      <img
        src="/hero/caltai-layer-base.png"
        alt="CaltAI layer visual"
        className="absolute inset-0 h-full w-full object-fill"
        draggable={false}
      />

      {/* Tools */}
      <HeroImage src="/hero/tool-gmail.png" x={78} y={122} w={43} h={43} />
      <HeroImage src="/hero/tool-calendar.png" x={138} y={76} w={43} h={43} />
      <HeroImage src="/hero/tool-hubspot.png" x={198} y={28} w={43} h={43} />
      <HeroImage src="/hero/tool-slack.png" x={359} y={28} w={43} h={43} />
      <HeroImage src="/hero/tool-docs.png" x={419} y={76} w={43} h={43} />
      <HeroImage src="/hero/tool-todo.png" x={478} y={122} w={43} h={43} />

      {/* CaltAI layer body */}
      <HeroImage
        src="/hero/caltai-layer.png"
        x={137}
        y={178}
        w={326}
        h={172}
        className="z-[11]"
      />

      {/* Cards */}
      <HeroImage
        src="/hero/card-client-followup.png"
        x={42}
        y={477}
        w={156}
        h={76}
        className="z-[7]"
      />
      <HeroImage
        src="/hero/card-tool-updates.png"
        x={222}
        y={508}
        w={156}
        h={76}
        className="z-[7]"
      />
      <HeroImage
        src="/hero/card-internal-handoff.png"
        x={398}
        y={477}
        w={156}
        h={76}
        className="z-[7]"
      />

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

      {/* Logo PNG */}
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

      {/* Signals from tools to center, then down */}
      <SignalPath
        d="M 124 143 H 298.5 V 405"
        duration={4.8}
        delay={0}
      />

      <SignalPath
        d="M 238 48 H 298.5 V 405"
        duration={5}
        delay={1.4}
      />

      <SignalPath
        d="M 405 97 H 298.5 V 405"
        duration={5}
        delay={2.8}
      />

      <SignalPath
        d="M 470 143 H 298.5 V 405"
        duration={2.8}
        delay={0}
      />

      {/* Signals from Human Approval to output cards */}

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

      <SignalPath
        d="M 298.5 405 V 535"
        duration={3}
        delay={3.5}
        size={4}
      />

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

      {/* Context / Plan / Route */}
      <div
        style={boxStyle(165, 289, 269, 38)}
        className="absolute z-[15] grid grid-cols-3 overflow-hidden rounded-full border border-[#BCA4FA] bg-[#F2EDFF]"
      >
        {["Context", "Plan", "Route"].map((label, i) => {
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
              <span className="text-[clamp(12px,1.85vw,12px)] font-medium text-[#6023FA]">
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
      <StatusChip x={59.9} y={519.3} text={clientStatus} />
      <StatusChip x={239.5} y={550.2} text={toolStatus} />
      <StatusChip x={415.5} y={519.3} text={handoffStatus} />
    </div>
  );
}

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3400);

    return () => window.clearInterval(timer);
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
              routes approvals, and keeps work moving until it&apos;s done.
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
                href="/get-started?mode=demo"
                className="flex h-[52px] w-full items-center justify-center rounded-full border border-[#D5D4CF] px-8 font-inter text-[16px] font-medium text-[#443218] transition-all hover:bg-white sm:w-auto"
              >
                Book a demo
              </Link>
            </div>
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