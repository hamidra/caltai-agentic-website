"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const useCases = [
    {
        title: "Post-sales onboarding",
        href: "/use-cases/post-sales-onboarding",
        status: "Primary workflow",
        pain:
            "Clients sign, then momentum dies because assets, kickoff, approvals, and handoffs are scattered across tools.",
        actions: [
            "Detects signed clients or payment events",
            "Creates the onboarding run",
            "Chases missing assets and access",
            "Drafts kickoff agenda and client updates",
            "Routes approvals and internal handoffs",
        ],
        impact:
            "Estimated 5–10 hours/week saved for agencies handling 5–20 onboardings/month.",
        bestFit:
            "Agencies and consultancies with repeated client onboarding and manual coordination.",
    },
    {
        title: "Client intake",
        href: "/use-cases/client-intake",
        status: "Workflow package",
        pain:
            "New clients or projects start with incomplete information, missing files, and repeated back-and-forth.",
        actions: [
            "Collects required intake details",
            "Checks missing information",
            "Organizes files and client context",
            "Creates internal next steps",
            "Flags readiness before work starts",
        ],
        impact:
            "Estimated 2–5 hours/week saved by reducing intake chasing and cleanup.",
        bestFit:
            "Teams that start every project with forms, files, assets, or client inputs.",
    },
    {
        title: "Lead lifecycle",
        href: "/use-cases/lead-lifecycle",
        status: "Workflow package",
        pain:
            "Leads come from different channels, but follow-up, qualification, and CRM updates still depend on humans remembering.",
        actions: [
            "Captures and enriches new leads",
            "Drafts follow-ups",
            "Updates CRM status",
            "Routes qualified leads",
            "Flags stalled opportunities",
        ],
        impact:
            "Estimated 3–6 hours/week saved by reducing manual CRM and follow-up work.",
        bestFit:
            "Founder-led or small sales teams managing inbound leads across email, forms, and CRM.",
    },
    {
        title: "Outbound follow-up",
        href: "/use-cases/outbound-follow-up",
        status: "Workflow package",
        pain:
            "Outbound sequences are too rigid. Replies, opens, clicks, and CRM signals do not always change the next action.",
        actions: [
            "Monitors engagement and replies",
            "Classifies responses",
            "Suggests next best action",
            "Drafts follow-ups",
            "Pauses or adjusts outreach when needed",
        ],
        impact:
            "Estimated 3–7 hours/week saved by reducing manual follow-up decisions.",
        bestFit:
            "Teams running outbound that need adaptive follow-up instead of fixed sequences.",
    },
];

const HatchDivider = () => (
    <div className="h-[30px] w-full overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
        <div className="h-full w-full hatch-pattern opacity-30" />
    </div>
);

const VisualPlaceholder = ({ title }: { title: string }) => (
    <div className="relative mt-7 aspect-[1.35/1] w-full overflow-hidden border border-[#D5D4CF] bg-[#F5F2ED]">
        <div className="absolute inset-0 hatch-pattern opacity-20" />
        <svg className="absolute inset-0 h-full w-full text-[#D5D4CF]" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="absolute left-5 top-5 rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-3 py-1 font-sans text-[12px] font-normal text-[#695A44]">
            Visual placeholder
        </div>
        <div className="absolute bottom-5 left-5 font-sans text-[13px] font-normal text-[#695A44]">
            {title}
        </div>
    </div>
);

export default function UseCasesPage() {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    {/* Hero */}
                    <motion.div
                        className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-[55px] lg:pb-[78px] lg:pt-[82px]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[72px]">
                            <span className="font-sans text-[14px] font-medium text-[#443218]">
                                Use cases
                            </span>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[620px_1fr] lg:gap-[90px]">
                            <div>
                                <h1 className="font-heading text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#443218] md:text-[52px] lg:text-[58px]">
                                    Operational runs CaltAI can own across your tools.
                                </h1>

                                <p className="mt-7 max-w-[600px] font-sans text-[17px] font-normal leading-[1.6] text-[#695A44] md:text-[19px]">
                                    Start with one focused workflow. CaltAI watches signals,
                                    assembles context, drafts actions, routes approvals, and keeps
                                    the run moving until the outcome is done.
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <Link
                                        href="/design-partners"
                                        className="flex h-[52px] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-sans text-[16px] font-medium text-white hover:bg-[#E84D14]"
                                    >
                                        Become a design partner
                                    </Link>

                                    <Link
                                        href="#workflow-cards"
                                        className="flex h-[52px] items-center justify-center rounded-full border border-[#8D8177] px-8 font-sans text-[16px] font-medium text-[#443218] hover:bg-white"
                                    >
                                        Explore workflows
                                    </Link>
                                </div>
                            </div>

                            <div className="border border-[#D5D4CF] bg-[#F6F3EF] p-6 md:p-[34px]">
                                <p className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#FF5A1F]">
                                    How to read this page
                                </p>

                                <h2 className="mt-5 font-heading text-[30px] font-semibold leading-[1.12] text-[#443218] md:text-[34px]">
                                    This is the overview layer.
                                </h2>

                                <p className="mt-6 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44] md:text-[17px]">
                                    Each workflow card shows the pain, what CaltAI does, estimated
                                    time saved, and the best-fit customer. Detailed pages go deeper
                                    into the workflow process.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <HatchDivider />

                    {/* Workflow Cards */}
                    <div id="workflow-cards" className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                        <motion.div
                            className="mb-12 max-w-[820px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-heading text-[36px] font-semibold leading-[1.12] text-[#443218] md:text-[42px]">
                                Choose the workflow where manual coordination hurts most.
                            </h2>

                            <p className="mt-5 font-sans text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                CaltAI should not start everywhere. It should prove value in one
                                operational run first, then expand.
                            </p>
                        </motion.div>

                        <div className="grid gap-7 lg:grid-cols-2">
                            {useCases.map((useCase, index) => (
                                <motion.article
                                    key={useCase.title}
                                    className={`relative overflow-hidden border border-[#D5D4CF] bg-[#F6F3EF] p-6 md:p-8 ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1fr_460px] lg:gap-10" : ""
                                        }`}
                                    initial={{ opacity: 0, y: 26 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                >
                                    <div className="absolute right-0 top-0 h-[48px] w-[180px] hatch-pattern opacity-25" />

                                    <div className="relative z-10">
                                        <div className="mb-7 flex items-center justify-between gap-4">
                                            <span className="rounded-full border border-[#D5D4CF] bg-[#FBF9F4] px-3 py-1 font-sans text-[13px] font-normal text-[#695A44]">
                                                {useCase.status}
                                            </span>

                                            {index === 0 && (
                                                <span className="rounded-full bg-[#FF5A1F] px-3 py-1 font-sans text-[13px] font-medium text-white">
                                                    Start here
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-heading text-[34px] font-semibold leading-[1.08] text-[#443218] md:text-[42px]">
                                            {useCase.title}
                                        </h3>

                                        <div className="mt-8 grid gap-7 md:grid-cols-2">
                                            <div>
                                                <h4 className="font-sans text-[15px] font-semibold text-[#443218]">
                                                    Pain today
                                                </h4>
                                                <p className="mt-3 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44]">
                                                    {useCase.pain}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-sans text-[15px] font-semibold text-[#443218]">
                                                    Estimated impact
                                                </h4>
                                                <p className="mt-3 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44]">
                                                    {useCase.impact}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 border-t border-[#D5D4CF] pt-7">
                                            <h4 className="font-sans text-[15px] font-semibold text-[#443218]">
                                                What CaltAI does
                                            </h4>

                                            <ul className="mt-4 grid gap-3 md:grid-cols-2">
                                                {useCase.actions.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 font-sans text-[15px] font-normal leading-[1.5] text-[#695A44]"
                                                    >
                                                        <span className="mt-[8px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-8 border-t border-[#D5D4CF] pt-7">
                                            <h4 className="font-sans text-[15px] font-semibold text-[#443218]">
                                                Best fit
                                            </h4>
                                            <p className="mt-3 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44]">
                                                {useCase.bestFit}
                                            </p>
                                        </div>

                                        <Link
                                            href={useCase.href}
                                            className="mt-8 inline-flex h-[48px] items-center justify-center rounded-full border border-[#8D8177] px-6 font-sans text-[15px] font-medium text-[#443218] transition-colors hover:bg-white"
                                        >
                                            Explore workflow
                                        </Link>
                                    </div>

                                    {index === 0 && <VisualPlaceholder title={useCase.title} />}
                                </motion.article>
                            ))}
                        </div>
                    </div>

                    <HatchDivider />

                    {/* How CaltAI Runs A Workflow */}
                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-[100px]">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="font-heading text-[36px] font-semibold leading-[1.12] text-[#443218] md:text-[42px]">
                                    The structure is the same across every workflow.
                                </h2>

                                <p className="mt-6 font-sans text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                    The workflow changes, but the CaltAI operating loop stays
                                    consistent.
                                </p>
                            </motion.div>

                            <div className="border-t border-[#D5D4CF]">
                                {[
                                    ["1. Detect signal", "CRM change, payment, email, form submission, reply, calendar event, or missing step."],
                                    ["2. Assemble context", "Client details, package sold, prior notes, owners, deadlines, and relevant policies."],
                                    ["3. Plan next action", "CaltAI decides what should happen next and what needs approval."],
                                    ["4. Draft and route", "Emails, tasks, reminders, handoffs, updates, and approval requests are prepared."],
                                    ["5. Execute approved work", "Approved actions are sent or updated inside the right tools."],
                                    ["6. Monitor and re-plan", "CaltAI checks whether the workflow moved forward or got blocked again."],
                                ].map(([title, text], index) => (
                                    <motion.div
                                        key={title}
                                        className="grid gap-3 border-b border-[#D5D4CF] py-6 md:grid-cols-[220px_1fr] md:gap-10"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.45 }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                    >
                                        <h3 className="font-sans text-[18px] font-medium text-[#443218]">
                                            {title}
                                        </h3>
                                        <p className="font-sans text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                            {text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="relative overflow-hidden border-t border-[#D5D4CF] bg-[#F6F3EF] px-6 py-16 text-center md:px-10 lg:px-[55px] lg:py-[70px]">
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
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
                                Start with one operational run.
                            </h2>

                            <p className="mx-auto mt-6 max-w-[660px] font-sans text-[17px] font-normal leading-[1.6] text-[#695A44] md:text-[18px]">
                                Pick the workflow where manual chasing is costing the most time.
                                That is where CaltAI should prove itself first.
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