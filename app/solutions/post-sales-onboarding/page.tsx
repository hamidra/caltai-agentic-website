"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const metrics = [
    {
        value: "5–10h",
        label: "estimated weekly coordination saved",
    },
    {
        value: "5–20",
        label: "monthly onboardings where the pain becomes visible",
    },
    {
        value: "1",
        label: "owner for the onboarding run across tools",
    },
];

const workflowSteps = [
    {
        title: "1. Detect the trigger",
        text: "CaltAI detects a closed deal, payment event, CRM stage change, or internal handoff that means onboarding should begin.",
    },
    {
        title: "2. Assemble context",
        text: "It pulls the client, package sold, owners, notes, timeline, missing assets, previous emails, and related documents into one context bundle.",
    },
    {
        title: "3. Create the onboarding run",
        text: "CaltAI turns the process into a live run with tasks, dependencies, approval points, owners, and next actions.",
    },
    {
        title: "4. Draft actions",
        text: "It drafts client emails, internal handoff notes, kickoff agendas, reminders, asset requests, and status updates.",
    },
    {
        title: "5. Route approvals",
        text: "Sensitive or client-facing actions go to the right person before anything is sent or executed.",
    },
    {
        title: "6. Execute approved work",
        text: "Once approved, CaltAI sends messages, updates CRM records, creates tasks, schedules meetings, and records progress.",
    },
    {
        title: "7. Monitor blockers",
        text: "It keeps checking whether assets are missing, approvals are stuck, meetings are delayed, or internal tasks are overdue.",
    },
    {
        title: "8. Re-plan until first value",
        text: "The run keeps moving until the client reaches first value, not just until the first checklist is created.",
    },
];

const handled = [
    {
        group: "Client-side",
        items: [
            "Missing logo, brand, files, access, and asset requests",
            "Kickoff scheduling and agenda preparation",
            "Client reminders when onboarding stalls",
            "Clear next-step communication",
        ],
    },
    {
        group: "Internal team",
        items: [
            "Sales-to-delivery handoff",
            "Owner assignment",
            "Task creation",
            "Internal status updates",
        ],
    },
    {
        group: "Approval layer",
        items: [
            "Client-facing email drafts",
            "Sensitive escalation messages",
            "Confidence scoring",
            "Approval routing to founder, ops, or account lead",
        ],
    },
    {
        group: "Visibility",
        items: [
            "Current onboarding status",
            "Blocked items",
            "Next action",
            "Who needs to act next",
        ],
    },
];

const painRows = [
    ["Sales closes", "Context sits in CRM notes, Slack, email, or someone’s head."],
    ["Ops waits", "Delivery needs information before they can start confidently."],
    ["Client delays", "Assets, access, and approvals arrive slowly."],
    ["Founder checks", "Someone senior keeps asking what is blocked and who owns it."],
    ["Momentum drops", "The client starts questioning progress before value is delivered."],
];

const impactRows = [
    ["Less chasing", "CaltAI owns reminders, missing asset follow-up, and next-step nudges."],
    ["Clearer ownership", "Every onboarding run has a visible owner, next action, and blocker state."],
    ["Faster handoff", "Sales context is converted into delivery-ready onboarding context."],
    ["Better client experience", "Clients see progress instead of silence after payment."],
];

const VisualPlaceholder = ({ label }: { label: string }) => (
    <div className="relative aspect-[1.28/1] w-full overflow-hidden border border-[#D5D4CF] bg-[#F5F2ED]">
        <div className="absolute inset-0 hatch-pattern opacity-20" />
        <svg className="absolute inset-0 h-full w-full text-[#D5D4CF]" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="absolute left-5 top-5 rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-3 py-1 font-sans text-[12px] font-normal text-[#695A44]">
            Visual placeholder
        </div>
        <p className="absolute bottom-5 left-5 font-sans text-[13px] font-normal text-[#695A44]">
            {label}
        </p>
    </div>
);

const HatchDivider = ({ dark = false }: { dark?: boolean }) => (
    <div
        className={`h-[30px] w-full overflow-hidden border-y ${dark ? "border-[#4A4A4A] bg-[#242424]" : "border-[#D5D4CF] bg-[#FBF9F4]"
            }`}
    >
        <div className={`h-full w-full hatch-pattern ${dark ? "opacity-25" : "opacity-30"}`} />
    </div>
);

export default function PostSalesOnboardingPage() {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    {/* Hero */}
                    <motion.div
                        className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-[55px] lg:pb-[84px] lg:pt-[82px]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="grid items-start gap-6 lg:grid-cols-[650px_505px] lg:gap-[40px]">
                            <div>
                                <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[72px]">
                                    <span className="font-sans text-[14px] font-medium text-[#443218]">
                                        Primary use case
                                    </span>
                                </div>

                                <h1 className="font-heading text-[42px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#443218] md:text-[54px] lg:text-[62px]" style={{
                                    fontSize: "clamp(25px, 5.4vw, 45px)",
                                    lineHeight: "1.1",
                                }}>
                                    Post-sales onboarding that keeps moving after the deal closes.
                                </h1>

                                <p className="mt-7 max-w-[550px] font-sans text-[17px] font-normal leading-[1.6] text-[#695A44] md:text-[19px]">
                                    CaltAI turns a signed client into a live client by coordinating assets,
                                    kickoff, approvals, reminders, and handoffs across your existing tools.
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <Link
                                        href="/design-partners"
                                        className="flex h-[52px] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-sans text-[16px] font-medium text-white hover:bg-[#E84D14]"
                                    >
                                        Become a design partner
                                    </Link>

                                    <Link
                                        href="/#demo"
                                        className="flex h-[52px] items-center justify-center rounded-full border border-[#8D8177] px-8 font-sans text-[16px] font-medium text-[#443218] hover:bg-white"
                                    >
                                        Book a walkthrough
                                    </Link>
                                </div>
                            </div>

                            <div className="relative h-[505px] w-full max-w-[505px] overflow-hidden bg-[#F5F2ED] lg:ml-auto">
                                <Image
                                    src="/hero/onboarding-page.png"
                                    alt="Post-sales onboarding workflow from signed client to live client"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Big Metrics */}
                    <div className="grid border-t border-[#D5D4CF] md:grid-cols-3">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                className="border-b border-[#D5D4CF] px-6 py-10 md:border-b-0 md:border-r md:px-10 lg:px-[55px] last:md:border-r-0"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                            >
                                <p className="font-heading text-[54px] font-semibold leading-none tracking-[-0.03em] text-[#FF5A1F] md:text-[64px]">
                                    {metric.value}
                                </p>
                                <p className="mt-4 max-w-[260px] font-sans text-[16px] font-normal leading-[1.5] text-[#695A44]">
                                    {metric.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <HatchDivider />

                    {/* Pain */}
                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                        <div className="grid gap-10 lg:grid-cols-[410px_1fr] lg:gap-[100px]">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="font-heading text-[36px] font-semibold leading-[1.12] text-[#443218] md:text-[44px]">
                                    Where onboarding breaks today.
                                </h2>
                                <p className="mt-6 font-sans text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                    The problem is not that teams lack a checklist. The problem is that nobody owns the
                                    moving parts across CRM, inbox, calendar, docs, and task tools.
                                </p>
                            </motion.div>

                            <div className="border-t border-[#D5D4CF]">
                                {painRows.map(([title, text], index) => (
                                    <motion.div
                                        key={title}
                                        className="grid gap-3 border-b border-[#D5D4CF] py-6 md:grid-cols-[180px_1fr] md:gap-10"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.45 }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                    >
                                        <h3 className="font-sans text-[18px] font-medium text-[#443218]">{title}</h3>
                                        <p className="font-sans text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                            {text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dark Process Section */}
                <section className="bg-[#242424] text-[#F2EEE9]">
                    <div className="page-frame page-frame-dark">
                        <HatchDivider dark />

                        <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[86px]">
                            <motion.div
                                className="max-w-[850px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-[42px] inline-flex h-[40px] items-center rounded-full border border-white/10 bg-[#191919] px-4">
                                    <span className="font-sans text-[14px] font-medium text-[#F2EEE9]">
                                        CaltAI process
                                    </span>
                                </div>

                                <h2 className="font-heading text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2EEE9] md:text-[50px]">
                                    How CaltAI runs onboarding end to end.
                                </h2>

                                <p className="mt-5 font-sans text-[17px] font-normal leading-[1.6] text-[#D7C1A4]">
                                    It does not just create tasks. It keeps watching, planning, asking for approval,
                                    executing, and re-planning until the onboarding outcome is reached.
                                </p>
                            </motion.div>

                            <div className="mt-[56px] grid gap-7 lg:grid-cols-[1fr_430px]">
                                <div className="grid gap-0 border-t border-[#4A4A4A]">
                                    {workflowSteps.map((step, index) => (
                                        <motion.div
                                            key={step.title}
                                            className="grid gap-4 border-b border-[#4A4A4A] py-6 md:grid-cols-[230px_1fr] md:gap-10"
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.4 }}
                                            transition={{ duration: 0.42, delay: index * 0.045 }}
                                        >
                                            <h3 className="font-sans text-[17px] font-medium text-[#F2EEE9]">
                                                {step.title}
                                            </h3>
                                            <p className="font-sans text-[15px] font-normal leading-[1.65] text-[#D7C1A4]">
                                                {step.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="relative overflow-hidden border border-[#4A4A4A] bg-[#1D1D1D] p-6 md:p-8">
                                    <div className="absolute right-0 top-0 h-[54px] w-[220px] hatch-pattern opacity-20" />
                                    <h3 className="font-heading text-[32px] font-semibold leading-[1.12] text-[#F2EEE9]">
                                        Operating loop
                                    </h3>
                                    <p className="mt-4 font-sans text-[16px] font-normal leading-[1.6] text-[#D7C1A4]">
                                        Signal → Context → Plan → Approval → Execution → Outcome → Re-plan
                                    </p>
                                    <div className="mt-8">
                                        <VisualPlaceholder label="Signal-to-outcome loop mockup" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HatchDivider dark />
                    </div>
                </section>

                <div className="page-frame">
                    {/* What it handles */}
                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                        <motion.div
                            className="max-w-[820px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-heading text-[36px] font-semibold leading-[1.12] text-[#443218] md:text-[44px]">
                                What CaltAI actually handles.
                            </h2>
                            <p className="mt-5 font-sans text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                This is the work that usually falls between tools and ends up on the founder,
                                account manager, or operations lead.
                            </p>
                        </motion.div>

                        <div className="mt-12 grid gap-7 md:grid-cols-2">
                            {handled.map((group, index) => (
                                <motion.div
                                    key={group.group}
                                    className="relative overflow-hidden border border-[#D5D4CF] bg-[#F6F3EF] p-7"
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: index * 0.07 }}
                                >
                                    <div className="absolute right-0 top-0 h-[46px] w-[160px] hatch-pattern opacity-25" />
                                    <h3 className="font-heading text-[30px] font-semibold text-[#443218]">
                                        {group.group}
                                    </h3>

                                    <ul className="mt-6 space-y-3">
                                        {group.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 font-sans text-[16px] font-normal leading-[1.55] text-[#695A44]"
                                            >
                                                <span className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <HatchDivider />

                    {/* Impact */}
                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                        <div className="grid gap-10 lg:grid-cols-[410px_1fr] lg:gap-[100px]">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="font-heading text-[36px] font-semibold leading-[1.12] text-[#443218] md:text-[44px]">
                                    The practical impact.
                                </h2>
                                <p className="mt-6 font-sans text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                    These are estimated outcomes, not guaranteed claims. The exact impact depends on
                                    onboarding volume, complexity, and how much of the work is currently manual.
                                </p>
                            </motion.div>

                            <div className="border-t border-[#D5D4CF]">
                                {impactRows.map(([title, text], index) => (
                                    <motion.div
                                        key={title}
                                        className="grid gap-3 border-b border-[#D5D4CF] py-6 md:grid-cols-[210px_1fr] md:gap-10"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.45 }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                    >
                                        <h3 className="font-sans text-[18px] font-medium text-[#443218]">{title}</h3>
                                        <p className="font-sans text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                            {text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="relative overflow-hidden border-t border-[#D5D4CF] bg-[#F6F3EF] px-6 py-16 text-center md:px-10 lg:px-[55px] lg:py-[72px]">
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{
                                backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <motion.div
                            className="relative z-10 mx-auto max-w-[820px]"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55 }}
                        >
                            <h2 className="font-heading text-[36px] font-semibold leading-[1.15] text-[#443218] md:text-[44px]">
                                Want to test this on your onboarding process?
                            </h2>

                            <p className="mx-auto mt-6 max-w-[660px] font-sans text-[17px] font-normal leading-[1.6] text-[#695A44] md:text-[18px]">
                                We are looking for agency operators who want to reduce manual onboarding
                                coordination and shape the workflow with us.
                            </p>

                            <Link
                                href="/design-partners"
                                className="mx-auto mt-9 flex h-[54px] w-fit items-center justify-center rounded-full bg-[#FF5A1F] px-9 font-sans text-[17px] font-medium text-white hover:bg-[#E84D14]"
                            >
                                Apply to be a design partner
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>
        </main>
    );
}