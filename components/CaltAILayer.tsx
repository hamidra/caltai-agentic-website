"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type LayerItem = {
  id: string;
  number: string;
  title: string;
  visualLabel: string;
  description: string;
  image: string;
  labelTop: string;
  labelRight: string;
  lineWidth: number;
};

/* -------------------------------------------------------------------------- */
/* Layer content                                                              */
/* This controls the left accordion, right visual image, and right label.      */
/* -------------------------------------------------------------------------- */

const layers: LayerItem[] = [
  {
    id: "existing-tools",
    number: "01",
    title: "Existing tools & Signals",
    visualLabel: "Existing tools and signals",
    description:
      "CaltAI observes the tools your business already uses, CRM, email, calendar, forms, docs, tasks, chat, and payments, and detects signals like closed deals, replies, booked meetings, missing assets, and overdue tasks.",
    image: "/layers/show-existing-tools.svg",
    labelTop: "55%",
    labelRight: "5px",
    lineWidth: 124,
  },
  {
    id: "business-context",
    number: "02",
    title: "Business Context & Knowledge",
    visualLabel: "Context and knowledge",
    description:
      "CaltAI pulls together client history, CRM notes, emails, files, SOPs, owners, deadlines, and workflow rules so every next action is based on the right context.",
    image: "/layers/show-business-context.svg",
    labelTop: "55%",
    labelRight: "19px",
    lineWidth: 124,
  },
  {
    id: "planning",
    number: "03",
    title: "Planning & Re-planning",
    visualLabel: "Planning and re-planning",
    description:
      "CaltAI identifies what is blocked, proposes the next step, and adapts the plan when clients delay, approvals stall, or the workflow changes.",
    image: "/layers/show-planning.svg",
    labelTop: "55%",
    labelRight: "10px",
    lineWidth: 124,
  },
  {
    id: "approval",
    number: "04",
    title: "Approval & Control",
    visualLabel: "Approval and control",
    description:
      "Sensitive or client-facing actions are routed to the right person before execution, so your team can approve, edit, reject, or set guardrails.",
    image: "/layers/show-approval.svg",
    labelTop: "55.5%",
    labelRight: "39px",
    lineWidth: 124,
  },
  {
    id: "execution",
    number: "05",
    title: "Execution Layer",
    visualLabel: "Execution layer",
    description:
      "After approval, CaltAI performs the work across your tools, sending emails, updating CRM, creating tasks, scheduling meetings, and notifying teams.",
    image: "/layers/show-execution.svg",
    labelTop: "55.5%",
    labelRight: "73px",
    lineWidth: 124,
  },
  {
    id: "outcome-learning",
    number: "06",
    title: "Outcome Loop",
    visualLabel: "Outcome loop",
    description:
      "CaltAI keeps monitoring whether the workflow actually moved forward. If the outcome is not reached, it replans and continues.",
    image: "/layers/show-outcome-learning.svg",
    labelTop: "55%",
    labelRight: "75px",
    lineWidth: 124,
  },
  {
    id: "caltai",
    number: "07",
    title: "Business Operations",
    visualLabel: "Business operations",
    description:
      "These layers power real operational work like post-sales onboarding, client intake, lead lifecycle, and outbound follow-up from start to outcome.",
    image: "/layers/show-caltai.svg",
    labelTop: "38%",
    labelRight: "10px",
    lineWidth: 132,
  },
];

/* -------------------------------------------------------------------------- */
/* Scroll and animation settings                                              */
/* -------------------------------------------------------------------------- */

const NAVBAR_HEIGHT = 64;

/*
  Intro section is visible from 0 to INTRO_PROGRESS_END.
  Layer animation starts only after LAYER_START_PROGRESS.
  This gap prevents the visual from appearing already on layer 2 or 3.
*/
const INTRO_PROGRESS_END = 0.18;
const LAYER_START_PROGRESS = 0.24;

/*
  Increase this number if the scroll gap between layers feels too short.
  Lower it if the layer section feels too long.
*/
const SCROLL_LENGTH_MULTIPLIER = 1.75;
const EXTRA_SCROLL_SECTIONS = 2.2;

/*
  Visual stack positioning.
*/
const LAYER_OFFSET = 40;
const STACK_BASE_Y = 135;
const DROP_DISTANCE = 120;

/*
  Faded image versions used for previous layers in the visual stack.
*/
const FADE_LAYER_ONE_IMAGE = "/layers/show-fade-layer1.svg";
const FADE_LAYER_IMAGE = "/layers/show-fade-layer.svg";

/* -------------------------------------------------------------------------- */
/* Utility                                                                    */
/* -------------------------------------------------------------------------- */

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function CaltAILayer() {
  /* ------------------------------------------------------------------------ */
  /* Refs                                                                     */
  /* ------------------------------------------------------------------------ */

  const sectionRef = useRef<HTMLElement | null>(null);

  /*
    Stores the layer section position and scrollable height.
    This is used to calculate active layer from scroll position.
  */
  const metricsRef = useRef({
    top: 0,
    scrollable: 1,
  });

  /* ------------------------------------------------------------------------ */
  /* State                                                                    */
  /* ------------------------------------------------------------------------ */

  const [activeIndex, setActiveIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const { scrollY } = useScroll();

  /* ------------------------------------------------------------------------ */
  /* Measure section position                                                  */
  /* Recalculate on load and resize so scroll math stays correct.              */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const measure = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const scrollable = Math.max(
        1,
        sectionRef.current.offsetHeight - window.innerHeight
      );

      metricsRef.current = {
        top,
        scrollable,
      };
    };

    measure();

    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Scroll-driven active layer                                                */
  /* This keeps the active accordion and visual stack synced with scroll.       */
  /* ------------------------------------------------------------------------ */

  useMotionValueEvent(scrollY, "change", (latest) => {
    const { top, scrollable } = metricsRef.current;

    const rawProgress = (latest - top) / scrollable;
    const progress = clamp(rawProgress, 0, 1);

    setShowIntro(progress < INTRO_PROGRESS_END);

    /*
      Buffer zone between intro and layer animation.
      During this zone, layer 1 stays active.
    */
    if (progress < LAYER_START_PROGRESS) {
      setActiveIndex(0);
      return;
    }

    const layerProgress = clamp(
      (progress - LAYER_START_PROGRESS) / (1 - LAYER_START_PROGRESS),
      0,
      1
    );

    const nextIndex = Math.min(
      layers.length - 1,
      Math.floor(layerProgress * (layers.length - 0.01))
    );

    setActiveIndex(nextIndex);
  });

  /* ------------------------------------------------------------------------ */
  /* Click-to-layer behavior                                                   */
  /* Important: clicking a layer also moves the real page scroll position.      */
  /* Without this, the next scroll event would jump back to the old layer.      */
  /* ------------------------------------------------------------------------ */

  const scrollToLayer = (index: number) => {
    const { top, scrollable } = metricsRef.current;

    const totalLayerRange = 1 - LAYER_START_PROGRESS;
    const layerSize = totalLayerRange / layers.length;

    // Move to the middle of the selected layer's scroll zone
    const targetProgress =
      LAYER_START_PROGRESS + index * layerSize + layerSize / 2;

    const targetScrollY = top + targetProgress * scrollable;

    setShowIntro(false);
    setActiveIndex(index);

    window.scrollTo({
      top: targetScrollY,
      behavior: "auto",
    });
  };

  /* ------------------------------------------------------------------------ */
  /* Render                                                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      ref={sectionRef}
      id="caltai-layer"
      className="relative bg-[#FBF9F4] text-[#443218]"
      style={{
        height: `${(layers.length * SCROLL_LENGTH_MULTIPLIER + EXTRA_SCROLL_SECTIONS) *
          100
          }vh`,
      }}
    >
      {/* Sticky pinned viewport for intro and layer animation */}
      <div
        className="sticky z-10 bg-[#FBF9F4]"
        style={{
          top: NAVBAR_HEIGHT,
          minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <div className="page-frame">
          <div className="relative min-h-[calc(100vh-64px)] overflow-hidden px-6 py-8 md:px-10 lg:px-[55px] lg:py-[34px]">
            <AnimatePresence mode="wait">
              {showIntro ? (
                /* ---------------------------------------------------------- */
                /* Intro section                                                */
                /* Badge, main title, and paragraph before the layer visual.    */
                /* ---------------------------------------------------------- */

                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -42, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex min-h-[calc(100vh-232px)] items-center justify-center text-center"
                >
                  <div className="mx-auto max-w-[980px]">
                    <div className="mx-auto mb-[60px] inline-flex h-[40px] items-center rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4">
                      <span className="font-sans text-[14px] font-medium text-[#443218]">
                        CaltAI Layer
                      </span>
                    </div>

                    <h2 className="font-heading text-[40px] font-semibold leading-[1.06] tracking-[-0.035em] text-[#443218] md:text-[52px] lg:text-[64px]">
                      CaltAI is the layer that runs the work between your tools.
                    </h2>

                    <p className="mx-auto mt-8 max-w-[760px] font-sans text-[17px] font-normal leading-[1.7] text-[#695A44] md:text-[20px]">
                      It watches the signals in your tools. Holds context about
                      your business, your clients, and your past runs. Plans the
                      next actions. Routes what needs human judgment, executes
                      what doesn’t. And stays on the run until the outcome is
                      done.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* ---------------------------------------------------------- */
                /* Layer section                                                */
                /* Left side accordion plus right side stacked visual.          */
                /* ---------------------------------------------------------- */

                <motion.div
                  key="layers"
                  initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid min-h-[calc(100vh-132px)] gap-8 lg:grid-cols-[430px_1fr] lg:gap-[64px]"
                >
                  {/* -------------------------------------------------------- */}
                  {/* Left accordion                                            */}
                  {/* Shows layer titles and active description.                */}
                  {/* -------------------------------------------------------- */}

                  <div className="flex flex-col justify-center">
                    <div className="border-t border-[#8D8177]/55">
                      {layers.map((layer, index) => {
                        const isActive = index === activeIndex;
                        const isPast = index < activeIndex;

                        return (
                          <button
                            key={layer.id}
                            type="button"
                            onClick={() => scrollToLayer(index)}
                            aria-expanded={isActive}
                            className="group w-full border-b border-[#8D8177]/55 py-3 text-left md:py-[14px]"
                          >
                            <div className="flex items-start gap-5">
                              <span
                                className={`mt-[1px] w-[28px] shrink-0 font-sans text-[26px] font-light leading-none transition-colors ${isActive
                                  ? "text-[#443218]"
                                  : isPast
                                    ? "text-[#8D8177]"
                                    : "text-[#695A44]"
                                  }`}
                              >
                                {isActive ? "−" : "+"}
                              </span>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`hidden font-sans text-[15px] font-semibold tracking-[0.12em] sm:inline ${isActive
                                      ? "text-[#FF5A1F]"
                                      : "text-[#8D8177]"
                                      }`}
                                  >
                                    {layer.number}
                                  </span>

                                  <h3
                                    className={`font-sans text-[19px] font-medium leading-[1.15] transition-colors md:text-[21px] ${isActive
                                      ? "text-[#443218]"
                                      : "text-[#695A44] group-hover:text-[#443218]"
                                      }`}
                                  >
                                    {layer.title}
                                  </h3>
                                </div>

                                {/* Active layer description */}
                                <AnimatePresence initial={false}>
                                  {isActive && (
                                    <motion.div
                                      initial={{
                                        height: 0,
                                        opacity: 0,
                                        y: -6,
                                      }}
                                      animate={{
                                        height: "auto",
                                        opacity: 1,
                                        y: 0,
                                      }}
                                      exit={{
                                        height: 0,
                                        opacity: 0,
                                        y: -6,
                                      }}
                                      transition={{
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <p className="pt-3 font-sans text-[15px] font-normal leading-[1.45] text-[#695A44]">
                                        {layer.description}
                                      </p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* -------------------------------------------------------- */}
                  {/* Right visual stack                                         */}
                  {/* Shows every layer up to the active layer.                  */}
                  {/* -------------------------------------------------------- */}

                  <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[calc(100vh-132px)]">
                    <div className="relative h-full min-h-[420px] w-full max-w-[760px] overflow-visible lg:min-h-[520px]">
                      {/* Layer images */}
                      <div className="absolute inset-0">
                        <AnimatePresence initial={false}>
                          {layers
                            .slice(0, activeIndex + 1)
                            .map((layer, index) => {
                              const isActive = index === activeIndex;

                              const finalY =
                                index === layers.length - 1
                                  ? STACK_BASE_Y
                                  : STACK_BASE_Y - index * LAYER_OFFSET;

                              const startY = finalY - DROP_DISTANCE;

                              const imageSource =
                                index < activeIndex
                                  ? index === 0
                                    ? FADE_LAYER_ONE_IMAGE
                                    : index > 0 && index < 6
                                      ? FADE_LAYER_IMAGE
                                      : layer.image
                                  : layer.image;

                              return (
                                <motion.div
                                  key={layer.id}
                                  className="absolute inset-0 flex items-center justify-start"
                                  initial={{
                                    opacity: 0,
                                    y: startY,
                                    scale: 0.985,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: finalY,
                                    scale: 1,
                                    zIndex: index,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    y: startY,
                                    scale: 0.985,
                                  }}
                                  transition={{
                                    opacity: {
                                      duration: isActive ? 0.7 : 0.45,
                                    },
                                    y: {
                                      duration: 1.05,
                                      ease: [0.16, 1, 0.3, 1],
                                    },
                                    scale: {
                                      duration: 0.75,
                                      ease: [0.16, 1, 0.3, 1],
                                    },
                                  }}
                                >
                                  <div
                                    className="relative h-[76%] w-[76%]"
                                    style={{
                                      transform:
                                        index === layers.length - 1
                                          ? "scale(1.81) translateY(-63px) translateX(43px)"
                                          : "scale(1)",
                                      transformOrigin: "center center",
                                    }}
                                  >
                                    <Image
                                      src={imageSource}
                                      alt={layer.visualLabel}
                                      fill
                                      priority={index <= 1}
                                      className="object-contain"
                                    />
                                  </div>
                                </motion.div>
                              );
                            })}
                        </AnimatePresence>
                      </div>

                      {/* Right side label and pointer line for active layer */}
                      <div className="pointer-events-none absolute inset-0 hidden overflow-visible md:block">
                        <AnimatePresence initial={false}>
                          {layers
                            .slice(0, activeIndex + 1)
                            .map((layer, index) => {
                              const isActive = index === activeIndex;

                              const finalY =
                                index === layers.length - 1
                                  ? STACK_BASE_Y
                                  : STACK_BASE_Y - index * LAYER_OFFSET;

                              return (
                                <motion.div
                                  key={`${layer.id}-label`}
                                  initial={{ opacity: 0, x: 18 }}
                                  animate={{
                                    opacity: isActive ? 1 : 0,
                                    x: isActive ? 0 : 18,
                                    y: finalY,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    x: 18,
                                    y: finalY - DROP_DISTANCE,
                                    transition: {
                                      opacity: { duration: 0.01 },
                                      x: { duration: 0.01 },
                                      y: {
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1],
                                      },
                                    },
                                  }}
                                  transition={{
                                    opacity: {
                                      duration: isActive ? 0.35 : 0.01,
                                      delay: isActive ? 0.75 : 0,
                                    },
                                    x: {
                                      duration: 0.35,
                                      delay: isActive ? 0.75 : 0,
                                    },
                                    y: {
                                      duration: 0.8,
                                      ease: [0.16, 1, 0.3, 1],
                                    },
                                  }}
                                  className="absolute flex items-center"
                                  style={{
                                    top: layer.labelTop,
                                    right: layer.labelRight,
                                    zIndex: 50 + index,
                                  }}
                                >
                                  <div
                                    className={`h-[7px] w-[7px] rounded-full ${isActive
                                      ? "bg-[#8D8177]"
                                      : "bg-[#8D8177]/40"
                                      }`}
                                  />

                                  <div
                                    className={`h-px ${isActive
                                      ? "bg-[#8D8177]"
                                      : "bg-[#8D8177]/40"
                                      }`}
                                    style={{
                                      width: layer.lineWidth,
                                    }}
                                  />

                                  <p
                                    className={`ml-4 whitespace-nowrap font-sans text-[13px] font-medium ${isActive
                                      ? "text-[#695A44]"
                                      : "text-[#8D8177]/60"
                                      }`}
                                  >
                                    {layer.visualLabel}
                                  </p>
                                </motion.div>
                              );
                            })}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom hatch divider */}

          <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
            <div className="page-frame h-full hatch-pattern opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}