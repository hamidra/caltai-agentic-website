"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabData = [
  {
    id: "client-intake",
    label: "Client intake",
    headline: (
      <>
        Client intake, without the
        <br className="hidden sm:block" />
        back-and-forth.
      </>
    ),
    description:
      "CaltAI collects the right information, checks what is missing, and keeps the client moving without your team manually chasing every detail.",
    bullets: [
      "Intake forms and client data collection",
      "Missing information follow-up",
      "File and asset organization",
      "Internal task creation",
      "Readiness check before work starts",
    ],
    primaryCta: {
      label: "Explore more",
      href: "/workflows/client-intake",
    },
    secondaryCta: {
      label: "Book a walkthrough",
      href: "/get-started?workflow=client-intake",
    },
    visual: null,
  },
  {
    id: "lead-lifecycle",
    label: "Lead lifecycle",
    headline: (
      <>
        Lead lifecycle, from first
        <br className="hidden sm:block" />
        touch to booked call.
      </>
    ),
    description:
      "CaltAI watches new lead signals, enriches context, prepares follow-ups, and keeps every opportunity moving until the next step is clear.",
    bullets: [
      "New lead capture and enrichment",
      "CRM updates and status tracking",
      "Follow-up reminders and drafts",
      "Qualification signals",
      "Handoff to sales or founder",
    ],
    primaryCta: {
      label: "Explore more",
      href: "/workflows/lead-lifecycle",
    },
    secondaryCta: {
      label: "Book a walkthrough",
      href: "/get-started?workflow=lead-lifecycle",
    },
    visual: null,
  },
  {
    id: "outbound-followup",
    label: "Outbound follow-up",
    headline: (
      <>
        Outbound follow-up that
        <br className="hidden sm:block" />
        doesn’t go cold.
      </>
    ),
    description:
      "CaltAI monitors replies, opens, clicks, and CRM activity, then suggests the next best action instead of running a fixed sequence blindly.",
    bullets: [
      "Reply monitoring and classification",
      "Follow-up drafting",
      "Prospect context gathering",
      "Positive-reply routing",
      "Sequence pause and next-step recommendations",
    ],
    primaryCta: {
      label: "Explore more",
      href: "/workflows/outbound-followup",
    },
    secondaryCta: {
      label: "Book a walkthrough",
      href: "/get-started?workflow=outbound-followup",
    },
    visual: null,
  },
  {
    id: "post-sales",
    label: "Post-sales onboarding",
    headline: (
      <>
        Onboarding, from signed deal
        <br className="hidden sm:block" />
        to first value delivered.
      </>
    ),
    description:
      "CaltAI picks up when a deal closes and runs every handoff, chase, and approval until the client is live. One run, one owner, visible to your whole team.",
    bullets: [
      "Intake and missing-asset chasing",
      "Kickoff scheduling and agenda drafting",
      "Approval routing across stakeholders",
      "Status visibility across tools",
      "Handoff from sales to delivery",
    ],
    primaryCta: {
      label: "Explore more",
      href: "/workflows/post-sales-onboarding",
    },
    secondaryCta: {
      label: "Become a design partner",
      href: "/design-partners?workflow=post-sales-onboarding",
    },
    visual: {
      src: "/hero/onboarding.png",
      alt: "CaltAI post-sales onboarding workflow from sale closed to first value delivered",
    },
  },
];

const WorkflowTabsSection = () => {
  const [activeIdx, setActiveIdx] = useState(3);
  const currentTab = tabData[activeIdx];

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF9F4] pt-[44px] md:pt-[56px] lg:pt-[60px]">
      <div className="absolute left-0 right-0 top-[44px] z-0 h-[52px] border-y border-[#FF6A2A] hatch-pattern-strip md:top-[56px] lg:top-[60px]" />

      <div className="relative z-10 mx-auto flex max-w-[1300px] flex-col items-start lg:items-center">
        <div className="w-full px-5 md:px-8 lg:flex lg:justify-center lg:px-0">
          <div className="grid w-full grid-cols-2 border-l border-t border-[#FF6A2A] bg-[#F7F4EF] lg:flex lg:w-auto">
            {tabData.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveIdx(idx)}
                aria-selected={activeIdx === idx}
                className={`h-[52px] border-b border-r border-[#FF6A2A] px-3 text-[14px] font-medium transition-colors md:px-6 md:text-[16px] lg:flex-shrink-0 lg:border-b-0 lg:text-[17px] ${activeIdx === idx
                  ? "bg-[#FF5A1F] text-white"
                  : "bg-[#F7F4EF] text-[#8D8176]"
                  }`}
              >
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative top-[-2px] box-border flex w-full max-w-full flex-col gap-10 border border-[#FF6A2A] bg-[#F7F4EF] px-5 pb-10 pt-10 md:px-8 md:pb-12 md:pt-12 lg:h-[670px] lg:w-[1300px] lg:grid-cols-[430px_535px] lg:gap-[85px] lg:px-[105px] lg:pb-[56px] lg:pt-[58px] xl:grid">
          <div className="w-full lg:w-[430px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-6 w-full font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-[#443218] md:text-[30px] lg:mb-[28px] lg:max-w-[430px]">
                  {currentTab.headline}
                </h3>

                <p className="mb-8 font-inter text-[16px] font-normal leading-[1.5] text-[#695A44] lg:mb-[34px] lg:max-w-[400px]">
                  {currentTab.description}
                </p>

                <div className="mb-8 flex w-full items-center justify-between gap-4 border-y border-[rgba(80,70,60,0.14)] py-[10px] lg:mb-[36px] lg:max-w-[414px]">
                  <span className="whitespace-nowrap text-[16px] font-semibold text-[#443218] md:text-[18px]">
                    What will be handled
                  </span>
                  <div className="h-[26px] min-w-[70px] flex-1 hatch-pattern-orange opacity-80" />
                </div>

                <ul className="space-y-[14px] lg:space-y-[15px]">
                  {currentTab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-[7px] h-[8px] w-[8px] shrink-0 bg-[#FF5A1F]" />
                      <span className="font-inter text-[15px] font-normal leading-[1.45] text-[#695A44]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-[42px] lg:gap-[16px]">
                  <Link
                    href={currentTab.primaryCta.href}
                    className="flex h-[46px] w-full items-center justify-center rounded-full bg-[#FF5A1F] px-5 text-[15px] font-medium text-white transition-opacity hover:opacity-80 sm:min-w-[190px] sm:w-auto"
                  >
                    {currentTab.primaryCta.label}
                  </Link>

                  <Link
                    href={currentTab.secondaryCta.href}
                    className="flex h-[46px] w-full items-center justify-center rounded-full border border-[#A79A8E] bg-transparent px-5 text-[15px] font-medium text-[#40362D] transition-colors hover:bg-[rgba(167,154,142,0.05)] sm:min-w-[174px] sm:w-auto"
                  >
                    {currentTab.secondaryCta.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentTab.id}-visual`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[1.15/1] w-full flex-shrink-0 overflow-hidden border border-[#BFC0C2] bg-[#F8F8F8] md:aspect-square lg:h-[535px] lg:w-[535px]"
            >
              {currentTab.visual ? (
                <img
                  src={currentTab.visual.src}
                  alt={currentTab.visual.alt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <svg
                  className="absolute inset-0 h-full w-full text-[#C9C9C9]"
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
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative top-[-2px] h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
        <div className="page-frame h-full hatch-pattern opacity-30" />
      </div>
    </section>
  );
};

export default WorkflowTabsSection;