"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type WorkflowVisual = {
  word: string;
  shortLabel: string;
  signals: string[];
  context: string[];
  actions: string[];
  approval: string;
  status: string;
  tools: string[];
};

const workflows: WorkflowVisual[] = [
  {
    word: "post-sales onboarding",
    shortLabel: "Onboarding run",
    signals: [
      "Deal marked closed in CRM",
      "Payment received",
      "Kickoff not scheduled yet",
    ],
    context: [
      "Client, package, and owner identified",
      "Missing assets detected",
      "Timeline and stakeholders loaded",
    ],
    actions: [
      "Draft kickoff email",
      "Request missing assets",
      "Route sales-to-delivery handoff",
    ],
    approval: "Approval required",
    status: "Waiting for account lead approval",
    tools: ["HubSpot", "Gmail", "Calendar", "Docs"],
  },
  {
    word: "client intake",
    shortLabel: "Intake run",
    signals: [
      "New intake form submitted",
      "Required fields incomplete",
      "Files still missing",
    ],
    context: [
      "Client info consolidated",
      "Inputs validated",
      "Ready-state check in progress",
    ],
    actions: [
      "Request missing details",
      "Organize files and links",
      "Prepare internal next steps",
    ],
    approval: "Approval required",
    status: "Ready for ops review",
    tools: ["Forms", "Gmail", "Drive", "Tasks"],
  },
  {
    word: "lead lifecycle",
    shortLabel: "Lead run",
    signals: [
      "New lead captured",
      "Lead source identified",
      "No follow-up sent yet",
    ],
    context: [
      "Lead enriched with company context",
      "Previous interactions checked",
      "Qualification rules applied",
    ],
    actions: [
      "Draft first follow-up",
      "Update lead stage",
      "Route qualified lead to owner",
    ],
    approval: "Approval required",
    status: "Draft awaiting review",
    tools: ["CRM", "Email", "Calendar", "Notes"],
  },
  {
    word: "outbound follow-up",
    shortLabel: "Outbound run",
    signals: [
      "Prospect opened email",
      "No reply after touchpoint",
      "Sequence still active",
    ],
    context: [
      "Engagement history reviewed",
      "Reply likelihood assessed",
      "Next step selected",
    ],
    actions: [
      "Draft contextual follow-up",
      "Pause low-signal sequence",
      "Escalate warm prospect",
    ],
    approval: "Approval required",
    status: "Suggested next action prepared",
    tools: ["Outbound", "CRM", "Email", "Tasks"],
  },
];

const rotatingWords = workflows.map((item) => item.word);

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

const SignalDot = () => (
  <div className="relative mt-[7px] flex h-[10px] w-[10px] shrink-0 items-center justify-center">
    <motion.span
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.65, 0.3] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute h-[10px] w-[10px] rounded-full bg-[#F7B191]"
    />
    <span className="relative h-[6px] w-[6px] rounded-full bg-[#FF5A1F]" />
  </div>
);

const RunVisual = ({ workflow }: { workflow: WorkflowVisual }) => {
  const runSteps = useMemo(
    () => ["Signal", "Context", "Plan", "Approval"],
    []
  );

  return (
    <div className="relative h-full w-full overflow-hidden border border-[#D5D4CF] bg-[#F5F2ED]">
      {/* Background accents */}
      <div className="absolute right-0 top-0 h-[54px] w-[180px] hatch-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 h-[44px] w-full border-t border-[#D5D4CF] bg-[#FBF9F4]/70" />

      {/* Frame content */}
      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5 md:p-6">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-[28px] items-center rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-3 font-inter text-[11px] font-medium text-[#695A44]">
              Live operational run
            </span>
            <span className="inline-flex h-[28px] items-center rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-3 font-inter text-[11px] font-medium text-[#4209DF]">
              {workflow.shortLabel}
            </span>
          </div>

          <motion.div
            key={workflow.word + "-status"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex h-[28px] items-center rounded-full bg-[#FF5A1F] px-3 font-inter text-[11px] font-medium text-white"
          >
            {workflow.approval}
          </motion.div>
        </div>

        {/* Main visual area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={workflow.word}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="grid gap-3 md:grid-cols-[1fr_0.92fr_1fr] md:gap-4">
              {/* Signals */}
              <div className="relative border border-[#D5D4CF] bg-[#FBF9F4] p-4">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.08em] text-[#8D8177]">
                  Signals detected
                </p>

                <div className="mt-4 space-y-3">
                  {workflow.signals.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <SignalDot />
                      <span className="font-inter text-[12px] leading-[1.45] text-[#443218] sm:text-[13px]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Engine */}
              <div className="relative overflow-hidden border border-[#D5D4CF] bg-[#FBF9F4] p-4">
                <div className="absolute inset-x-1/2 top-[54px] h-[132px] w-px -translate-x-1/2 bg-[#D5D4CF]" />
                <motion.div
                  animate={{ y: [0, 106, 0], opacity: [0.95, 1, 0.95] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-[54px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-[#FF5A1F] shadow-[0_0_0_6px_rgba(255,90,31,0.12)]"
                />

                <p className="mb-4 text-center font-inter text-[11px] font-medium uppercase tracking-[0.08em] text-[#8D8177]">
                  CaltAI run
                </p>

                <div className="mx-auto flex max-w-[150px] flex-col gap-3">
                  {runSteps.map((step, idx) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.07 }}
                      className={`relative flex h-[34px] items-center justify-center rounded-full border font-inter text-[12px] font-medium ${step === "Approval"
                        ? "border-[#FCB7A4] bg-[#FFF3ED] text-[#FF5A1F]"
                        : "border-[#D5D4CF] bg-[#F8F6F2] text-[#443218]"
                        }`}
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  {workflow.context.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.16 + idx * 0.06 }}
                      className="rounded-[10px] border border-[#E3DED7] bg-[#F8F6F2] px-3 py-2 font-inter text-[11px] leading-[1.45] text-[#695A44]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="relative border border-[#D5D4CF] bg-[#FBF9F4] p-4">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.08em] text-[#8D8177]">
                  Next actions
                </p>

                <div className="mt-4 space-y-3">
                  {workflow.actions.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="rounded-[12px] border border-[#D5D4CF] bg-[#F8F6F2] px-3 py-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-inter text-[12px] leading-[1.4] text-[#443218] sm:text-[13px]">
                          {item}
                        </span>
                        <span className="inline-flex h-[22px] shrink-0 items-center rounded-full border border-[#FCB7A4] bg-[#FFF3ED] px-2 font-inter text-[10px] font-medium text-[#FF5A1F]">
                          Drafted
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer/status */}
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <motion.p
            key={workflow.word + "-footer-status"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="font-inter text-[12px] text-[#695A44]"
          >
            {workflow.status}
          </motion.p>

          <div className="flex flex-wrap items-center gap-2">
            {workflow.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex h-[24px] items-center rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-2.5 font-inter text-[10px] font-medium text-[#695A44]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const activeWorkflow = workflows[index];

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
              className="w-full max-w-[620px] font-heading font-semibold tracking-tight text-[#443218]"
              style={{
                fontSize: "clamp(25px, 5.4vw, 45px)",
                lineHeight: "1.1",
              }}
            >
              <span className="block whitespace-nowrap">An operation system</span>

              <span className="block">
                <span className="whitespace-nowrap">that runs </span>
                <span className="inline-block align-baseline text-[#4209DF]">
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
          <div className="flex w-full items-center justify-end xl:w-[540px]">
            <div className="w-full">
              <div className="h-[300px] w-full sm:h-[360px] md:h-[430px] xl:h-[440px]">
                <RunVisual workflow={activeWorkflow} />
              </div>
            </div>
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