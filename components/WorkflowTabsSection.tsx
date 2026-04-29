"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabData = [
  {
    id: "client-intake",
    label: "Client intake",
    width: "216px",
    headline: (
      <>
        Client intake, without the
        <br />
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
  },
  {
    id: "lead-lifecycle",
    label: "Lead lifecycle",
    width: "216px",
    headline: (
      <>
        Lead lifecycle, from first
        <br />
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
  },
  {
    id: "outbound-followup",
    label: "Outbound follow-up",
    width: "274px",
    headline: (
      <>
        Outbound follow-up that
        <br />
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
  },
  {
    id: "post-sales",
    label: "Post-sales onboarding",
    width: "324px",
    headline: (
      <>
        Onboarding, from signed deal
        <br />
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
  },
];

const WorkflowTabsSection = () => {
  const [activeIdx, setActiveIdx] = useState(3); // Default to Post-sales onboarding
  const currentTab = tabData[activeIdx];

  const hatchStripStyle = {
    height: "52px",
    width: "100%",
    backgroundColor: "#F7F4EF",
    backgroundImage: "repeating-linear-gradient(45deg, #FF9A73, #FF9A73 2px, transparent 2px, transparent 10px)",

  };

  return (
    <section className="w-full bg-[#FBF9F4] relative pt-[60px] overflow-hidden">
      {/* Top Hatch Strip - Behind Tabs */}
      <div className="absolute top-[60px] border-t border-b border-[#FF6A2A] left-0 h-[52px] w-[100%] right-0 z-0 hatch-pattern-strip" />

      <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col items-start lg:items-center">
        {/* Tab Row Container - sits flush with the panel below */}
        <div className="flex justify-center mb-[-1px]">
          <div className="flex border-t border-l border-r border-[#FF6A2A] bg-[#F7F4EF] overflow-x-auto no-scrollbar max-w-full">
            {tabData.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveIdx(idx)}
                aria-selected={activeIdx === idx}
                className={`flex-shrink-0 h-[52px] text-[17px] font-medium transition-colors border-r last:border-r-0 border-[#FF6A2A] flex items-center justify-center px-6 whitespace-nowrap
                  ${activeIdx === idx ? "bg-[#FF5A1F] text-white" : "bg-[#F7F4EF] text-[#8D8176]"}`}
                style={{ width: tab.width }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Outer Panel */}
        <div
          className="w-full lg:w-[1300px] top-[-1px] lg:h-[670px] border-l border-t border-r border-b border-[#FF6A2A] bg-[#F7F4EF] pt-[58px] pb-[56px] px-[105px] md:px-[105px] sm:px-[22px] flex flex-col lg:grid lg:grid-cols-[430px_535px] lg:gap-[85px] relative items-start box-border overflow-hidden"
          style={{ maxWidth: "100%" }}
        >
          {/* Left Column Content */}
          <div className="w-full lg:w-[430px] flex flex-col items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-[30px] font-bold text-[#242424] leading-[1.12] tracking-[-0.02em] mb-[28px] font-heading w-full lg:max-w-[420px]">
                  {currentTab.headline}
                </h3>

                <p className="text-[17px] leading-[1.45] text-[#94897F] mb-[34px] font-sans font-normal lg:max-w-[400px]">
                  {currentTab.description}
                </p>

                {/* "What will be handled" Divider Block */}
                <div className="w-full lg:max-w-[414px] border-t border-b border-[rgba(80,70,60,0.14)] py-[10px] flex items-center justify-between mb-[36px]">
                  <span className="text-[18px] font-semibold text-[#262626] whitespace-nowrap">
                    What will be handled
                  </span>
                  <div
                    className="w-[210px] h-[26px] opacity-80 hatch-pattern-orange"
                  />
                </div>

                {/* Bullet List */}
                <ul className="space-y-[15px]">
                  {currentTab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-[8px] h-[8px] bg-[#FF5A1F] mt-[7px] shrink-0" />
                      <span className="text-[15px] font-medium text-[#94897F] leading-[1.35] font-sans">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Buttons - Same row on desktop, naturally in flow */}
                <div className="flex flex-row flex-wrap gap-[16px] mt-[42px]">
                  <button className="w-full lg:w-[234px] h-[46px] flex-shrink-0 rounded-full bg-[#FF5A1F] text-white text-[16px] font-medium transition-opacity hover:opacity-90">
                    Become a design partner
                  </button>
                  <button className="w-full lg:w-[174px] h-[46px] flex-shrink-0 rounded-full border border-[#A79A8E] bg-transparent text-[#40362D] text-[16px] font-medium transition-colors hover:bg-[rgba(167,154,142,0.05)]">
                    See a walkthrough
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Major Visual Block) */}
          <div className="w-full lg:w-[535px] h-[535px] sm:aspect-square border border-[#BFC0C2] bg-[#F8F8F8] relative overflow-hidden flex-shrink-0 lg:mt-0">
            {/* Corner to Corner lines (X) */}
            <svg className="absolute inset-0 w-full h-full text-[#C9C9C9]" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Zebra Band */}
      <div className="relative h-[30px] top-[-2px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
        <div className="page-frame h-full hatch-pattern opacity-30" />
      </div>
    </section>
  );
};

export default WorkflowTabsSection;
