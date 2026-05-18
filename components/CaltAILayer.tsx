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

type VisualSettings = {
  stackBaseY: number;
  layerOffset: number;
  dropDistance: number;
  normalScale: number;
  operationScale: number;
  operationTranslateX: string;
  operationTranslateY: string;
  operationStackShift: number;
};

/* -------------------------------------------------------------------------- */
/* Layer content                                                              */
/* -------------------------------------------------------------------------- */

const layers: LayerItem[] = [
  {
    id: "observe-business-signals",
    number: "01",
    title: "Observe business signals",
    visualLabel: "Existing systems and signals",
    description:
      "CaltAI watches the systems your business already uses, including customer records, messages, analytics, payments, operational tools, files, and internal knowledge. It receives and normalizes events so the operation can start from what is actually happening.",
    image: "/layers/show-existing-tools.svg",
    labelTop: "57%",
    labelRight: "-24px",
    lineWidth: 124,
  },
  {
    id: "business-context",
    number: "02",
    title: "Assemble business context",
    visualLabel: "Business context",
    description:
      "CaltAI pulls together the relevant customer history, business rules, owners, deadlines, previous actions, policies, and operational data needed to understand the current situation.",
    image: "/layers/show-business-context.svg",
    labelTop: "56%",
    labelRight: "45px",
    lineWidth: 124,
  },
  {
    id: "planning",
    number: "03",
    title: "Plan the next action",
    visualLabel: "Planning and re-planning",
    description:
      "CaltAI identifies what changed, what is blocked, what the objective is, and what should happen next. It can plan at the operation level and at the individual entity or customer level.",
    image: "/layers/show-planning.svg",
    labelTop: "56%",
    labelRight: "-6px",
    lineWidth: 124,
  },
  {
    id: "approval",
    number: "04",
    title: "Route judgment",
    visualLabel: "Approval and control",
    description:
      "Actions that need human review are routed to the right person with the context, recommendation, and confidence needed to approve, edit, reject, or set guardrails.",
    image: "/layers/show-approval.svg",
    labelTop: "56%",
    labelRight: "23px",
    lineWidth: 124,
  },
  {
    id: "execution",
    number: "05",
    title: "Execute through tools or people",
    visualLabel: "Execution through\ntools or people",
    description:
      "After approval, CaltAI can update systems, draft messages, create tasks, trigger workflows, call connected tools, notify owners, or route work to a person or third-party app.",
    image: "/layers/show-execution.svg",
    labelTop: "54.5%",
    labelRight: "33px",
    lineWidth: 124,
  },
  {
    id: "outcome-loop",
    number: "06",
    title: "Evaluate the outcome",
    visualLabel: "Outcome evaluation",
    description:
      "CaltAI keeps watching whether the action actually moved the operation forward. It does not stop at task completion. If the outcome is not reached, it can continue, replan, or escalate.",
    image: "/layers/show-outcome-loop.svg",
    labelTop: "56.5%",
    labelRight: "30px",
    lineWidth: 124,
  },
  {
    id: "operation-package",
    number: "07",
    title: "Run a business operation",
    visualLabel: "Business operation package",
    description:
      "The full loop is packaged around a defined business operation with an objective, connected systems, rules, approval paths, allowed actions, and outcome checks. Start with one operation, then add more as the business grows.",
    image: "/layers/show-caltai.svg",
    labelTop: "53%",
    labelRight: "-25px",
    lineWidth: 132,
  },
];

/* -------------------------------------------------------------------------- */
/* Scroll and animation settings                                              */
/* -------------------------------------------------------------------------- */

const NAVBAR_HEIGHT = 64;
const INTRO_PROGRESS_END = 0.18;
const LAYER_START_PROGRESS = 0.24;
const SCROLL_LENGTH_MULTIPLIER = 1.75;
const EXTRA_SCROLL_SECTIONS = 2.2;

const FADE_LAYER_ONE_IMAGE = "/layers/show-fade-layer1.svg";
const FADE_LAYER_IMAGE = "/layers/show-fade-layer.svg";

/* -------------------------------------------------------------------------- */
/* Utility                                                                    */
/* -------------------------------------------------------------------------- */

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getVisualSettings(width: number): VisualSettings {
  if (width >= 1280) {
    return {
      stackBaseY: 118,
      layerOffset: 38,
      dropDistance: 118,
      normalScale: 1,
      operationScale: 1.54,
      operationTranslateX: "-7%",
      operationTranslateY: "0%",
      operationStackShift: 2.5,
    };
  }

  if (width >= 1024) {
    return {
      stackBaseY: 106,
      layerOffset: 32,
      dropDistance: 96,
      normalScale: 0.96,
      operationScale: 1.38,
      operationTranslateX: "-7%",
      operationTranslateY: "0%",
      operationStackShift: 2.45,
    };
  }

  if (width >= 768) {
    return {
      stackBaseY: 68,
      layerOffset: 23,
      dropDistance: 72,
      normalScale: 0.9,
      operationScale: 1.15,
      operationTranslateX: "-2%",
      operationTranslateY: "0%",
      operationStackShift: 2.35,
    };
  }

  return {
    stackBaseY: 48,
    layerOffset: 16,
    dropDistance: 54,
    normalScale: 0.82,
    operationScale: 1.02,
    operationTranslateX: "0%",
    operationTranslateY: "0%",
    operationStackShift: 2.25,
  };
}

function getLayerFinalY(
  index: number,
  visualSettings: VisualSettings
): number {
  const isOperationPackage = index === layers.length - 1;

  const operationFinalY =
    visualSettings.stackBaseY -
    visualSettings.layerOffset * visualSettings.operationStackShift;

  return isOperationPackage
    ? operationFinalY
    : visualSettings.stackBaseY - index * visualSettings.layerOffset;
}

function useViewportWidth() {
  const [width, setWidth] = useState(1280);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

/* -------------------------------------------------------------------------- */
/* Visual stack                                                               */
/* -------------------------------------------------------------------------- */

function LayerStackVisual({
  activeIndex,
  visualSettings,
  showLabels = false,
  mobile = false,
}: {
  activeIndex: number;
  visualSettings: VisualSettings;
  showLabels?: boolean;
  mobile?: boolean;
}) {
  return (
    <div className="relative aspect-[760/560] w-full max-w-[760px] overflow-visible">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {layers.slice(0, activeIndex + 1).map((layer, index) => {
            const isActive = index === activeIndex;
            const isOperationPackage = index === layers.length - 1;

            const finalY = getLayerFinalY(index, visualSettings);
            const startY = finalY - visualSettings.dropDistance;

            const imageSource =
              index < activeIndex
                ? index === 0
                  ? FADE_LAYER_ONE_IMAGE
                  : index > 0 && index < 6
                    ? FADE_LAYER_IMAGE
                    : layer.image
                : layer.image;

            const imageTransform = isOperationPackage
              ? `translate(${visualSettings.operationTranslateX}, ${visualSettings.operationTranslateY}) scale(${visualSettings.operationScale})`
              : `scale(${visualSettings.normalScale})`;

            return (
              <motion.div
                key={layer.id}
                className={`absolute inset-0 flex items-center ${mobile ? "justify-center" : "justify-start"
                  }`}
                initial={{
                  opacity: 0,
                  y: startY,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  y: finalY,
                  scale: 1,
                  zIndex: isOperationPackage ? layers.length + 1 : index,
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
                  className={`relative ${mobile ? "h-[88%] w-[88%]" : "h-[78%] w-[78%]"
                    }`}
                  style={{
                    transform: imageTransform,
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src={imageSource}
                    alt={layer.visualLabel}
                    fill
                    priority={index <= 1}
                    className="object-contain"
                    sizes={mobile ? "100vw" : "(max-width: 1024px) 80vw, 50vw"}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {showLabels && (
        <div className="pointer-events-none absolute inset-0 hidden overflow-visible xl:block">
          <AnimatePresence initial={false}>
            {layers.slice(0, activeIndex + 1).map((layer, index) => {
              const isActive = index === activeIndex;
              const isOperationPackage = index === layers.length - 1;

              const finalY = getLayerFinalY(index, visualSettings);

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
                    y: finalY - visualSettings.dropDistance,
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
                    zIndex: isOperationPackage ? 80 : 50 + index,
                  }}
                >
                  <div
                    className={`h-[7px] w-[7px] rounded-full ${isActive ? "bg-[#8D8177]" : "bg-[#8D8177]/40"
                      }`}
                  />

                  <div
                    className={`h-px ${isActive ? "bg-[#8D8177]" : "bg-[#8D8177]/40"
                      }`}
                    style={{
                      width: layer.lineWidth,
                    }}
                  />

                  <p
                    className={`ml-4 whitespace-pre-line font-sans text-[13px] font-medium leading-[1.25] ${isActive ? "text-[#695A44]" : "text-[#8D8177]/60"
                      }`}
                  >
                    {layer.visualLabel}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile text and navigation                                                 */
/* -------------------------------------------------------------------------- */

function MobileLayerText({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative w-full overflow-hidden border-t border-[#443218] bg-[#FBF9F4]">
      <motion.div
        className="flex"
        animate={{ x: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {layers.map((layer) => (
          <div key={layer.id} className="w-full flex-none">
            <div className="px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7 md:px-10">
              <div className="mb-5 flex items-center gap-4">
                <span className="font-sans text-[14px] font-medium tracking-[0.12em] text-[#FF5A1F] sm:text-[16px]">
                  {layer.number}
                </span>

                <span className="h-px w-[48px] bg-[#D5D4CF]" />

                <span className="font-sans text-[14px] font-medium leading-none text-[#8D8177] sm:text-[16px]">
                  {layer.visualLabel}
                </span>
              </div>

              <h3 className="max-w-[720px] font-sans text-[18px] font-medium leading-[1.08] tracking-[-0.02em] text-[#443218] sm:text-[18px] md:text-[22px]">
                {layer.title}
              </h3>

              <p className="mt-5 max-w-[760px] font-sans text-[15px] font-normal leading-[1.5] text-[#695A44] sm:text-[13px] md:text-[15px]">
                {layer.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MobileLayerNav({
  activeIndex,
  onGoTo,
}: {
  activeIndex: number;
  onGoTo: (index: number) => void;
}) {
  const prevLayer = activeIndex > 0 ? layers[activeIndex - 1] : null;
  const nextLayer =
    activeIndex < layers.length - 1 ? layers[activeIndex + 1] : null;

  return (
    <div className="relative grid h-[56px] grid-cols-[1fr_36px_1fr] border-t border-[#FF5A1F] bg-[#FBF9F4] sm:h-[64px] sm:grid-cols-[1fr_112px_1fr]">
      <button
        type="button"
        onClick={() => prevLayer && onGoTo(activeIndex - 1)}
        disabled={!prevLayer}
        aria-label={
          prevLayer ? `Previous layer: ${prevLayer.title}` : "No previous layer"
        }
        className="group flex min-w-0 items-center justify-start border-b border-l border-r border-[#FF5A1F] px-5 text-[#FF5A1F] transition-opacity disabled:opacity-25 sm:px-7"
      >
        <span className="mr-3 shrink-0 font-sans text-[40px] font-light leading-none sm:text-[48px]">
          ‹
        </span>

        {prevLayer && (
          <span className="min-w-0 text-left">
            <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#FF5A1F]/70">
              Previous
            </span>
            <span className="mt-1 block truncate font-sans text-[13px] font-medium leading-tight text-[#443218] sm:text-[15px]">
              {prevLayer.title}
            </span>
          </span>
        )}
      </button>

      <div className="h-full w-full border-b border-[#FF5A1F] hatch-pattern-orange opacity-80" />

      <button
        type="button"
        onClick={() => nextLayer && onGoTo(activeIndex + 1)}
        disabled={!nextLayer}
        aria-label={nextLayer ? `Next layer: ${nextLayer.title}` : "No next layer"}
        className="group flex min-w-0 items-center justify-end border-b border-l border-r border-[#FF5A1F] px-5 text-[#FF5A1F] transition-opacity disabled:opacity-25 sm:px-7"
      >
        {nextLayer && (
          <span className="min-w-0 text-right">
            <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#FF5A1F]/70">
              Next
            </span>
            <span className="mt-1 block truncate font-sans text-[13px] font-medium leading-tight text-[#443218] sm:text-[15px]">
              {nextLayer.title}
            </span>
          </span>
        )}

        <span className="ml-3 shrink-0 font-sans text-[40px] font-light leading-none sm:text-[48px]">
          ›
        </span>
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function CaltAILayer() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const metricsRef = useRef({
    top: 0,
    scrollable: 1,
  });

  const viewportWidth = useViewportWidth();
  const visualSettings = getVisualSettings(viewportWidth);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const { scrollY } = useScroll();

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const { top, scrollable } = metricsRef.current;

    const rawProgress = (latest - top) / scrollable;
    const progress = clamp(rawProgress, 0, 1);

    setShowIntro(progress < INTRO_PROGRESS_END);

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

  const scrollToLayer = (index: number) => {
    const { top, scrollable } = metricsRef.current;

    const totalLayerRange = 1 - LAYER_START_PROGRESS;
    const layerSize = totalLayerRange / layers.length;

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
      <div
        className="sticky z-10 bg-[#FBF9F4]"
        style={{
          top: NAVBAR_HEIGHT,
          minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <div className="page-frame">
          <div className="relative min-h-[calc(100vh-64px)] overflow-hidden px-0 pb-0 pt-0 lg:px-[55px] lg:py-[34px]">
            <AnimatePresence mode="wait">
              {showIntro ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -42, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex min-h-[calc(100vh-132px)] items-center justify-center px-5 py-8 text-center sm:px-6 md:px-10 lg:px-0 lg:py-0"
                >
                  <div className="mx-auto max-w-[980px]">
                    <div className="mx-auto mb-10 inline-flex h-[40px] items-center rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[60px]">
                      <span className="font-sans text-[14px] font-medium text-[#443218]">
                        How CaltAI works
                      </span>
                    </div>

                    <h2 className="mx-auto w-[92%] font-heading text-[36px] font-semibold leading-[1.06] tracking-[-0.035em] text-[#443218] md:text-[52px] lg:text-[64px]">
                      From business signal to next action to outcome.
                    </h2>

                    <p className="mx-auto mt-8 max-w-[760px] font-sans text-[16px] font-normal leading-[1.7] text-[#695A44] md:text-[20px]">
                      CaltAI connects to the systems where your business runs,
                      then keeps an operation moving through a continuous loop.
                      It observes signals, assembles context, plans the next
                      action, routes judgment, executes through tools or people,
                      and evaluates whether the outcome actually moved forward.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="layers"
                  initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="min-h-[calc(100vh-132px)]"
                >
                  {/* Mobile and tablet layout */}
                  <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-end lg:hidden">
                    <div className="absolute inset-x-[-14%] top-[-5%] z-0 flex h-[61%] items-center justify-center sm:inset-x-[-8%] sm:h-[62%] md:top-[-3%] md:h-[64%]">
                      <LayerStackVisual
                        activeIndex={activeIndex}
                        visualSettings={visualSettings}
                        mobile
                      />
                    </div>

                    <div className="relative z-20">
                      <MobileLayerText activeIndex={activeIndex} />
                      <MobileLayerNav
                        activeIndex={activeIndex}
                        onGoTo={scrollToLayer}
                      />
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden min-h-[calc(100vh-132px)] gap-8 lg:grid lg:grid-cols-[minmax(340px,430px)_minmax(0,1fr)] lg:gap-[64px]">
                    <div className="z-20 flex flex-col justify-center">
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
                                      className={`font-sans text-[18px] font-medium leading-[1.15] transition-colors md:text-[21px] ${isActive
                                        ? "text-[#443218]"
                                        : "text-[#695A44] group-hover:text-[#443218]"
                                        }`}
                                    >
                                      {layer.title}
                                    </h3>
                                  </div>

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

                    <div className="relative flex min-h-[calc(100vh-132px)] items-center justify-center overflow-visible">
                      <LayerStackVisual
                        activeIndex={activeIndex}
                        visualSettings={visualSettings}
                        showLabels={viewportWidth >= 1280}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative hidden h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4] lg:block">
            <div className="page-frame h-full hatch-pattern opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}