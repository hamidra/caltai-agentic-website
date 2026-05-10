"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const team = [
    {
        name: "Alireza",
        role: "Product, design, and company vision",
        text: "Alireza leads the product direction for CaltAI, shaping the operating model, customer workflow, website, story, and the practical wedge around post-sales onboarding.",
    },
    {
        name: "Brenna",
        role: "Go-to-market and customer understanding",
        text: "Brenna brings brand, marketing, and customer-facing operating experience, helping make CaltAI understandable, useful, and grounded in the way small teams actually work.",
    },
    {
        name: "Hamid",
        role: "Engineering and AI systems",
        text: "Hamid brings experience from Microsoft, Ericsson, and machine learning systems, helping turn the CaltAI operating loop into reliable software.",
    },
];

const principles = [
    {
        title: "We do not want AI that acts blindly",
        text: "CaltAI starts with human approval. Every important action should be visible, explainable, and controllable before it is executed.",
    },
    {
        title: "We build around real operational work",
        text: "The product is not designed around generic AI demos. It is designed around the messy handoffs, approvals, reminders, and context gaps that slow teams down.",
    },
    {
        title: "We respect the tools teams already use",
        text: "Small teams do not need another place to manage work. They need the work to move across the tools they already rely on.",
    },
    {
        title: "We earn autonomy over time",
        text: "CaltAI should not start by taking over. It should prove itself through approved actions, clear reasoning, and useful outcomes.",
    },
];

const timeline = [
    {
        label: "The problem",
        title: "Small teams are becoming integration managers",
        text: "Business owners and operators spend too much time copying context between CRM, inbox, calendar, docs, task tools, and AI assistants.",
    },
    {
        label: "The insight",
        title: "The real gap is not another chatbot",
        text: "Most tools wait for commands. Real operations need a system that watches signals, understands context, proposes next actions, and keeps going until the outcome is done.",
    },
    {
        label: "The wedge",
        title: "We started with post-sales onboarding",
        text: "After a client signs, work often slows down around kickoff, missing assets, approvals, and handoffs. This is where the need for an operational AI layer becomes concrete.",
    },
    {
        label: "The direction",
        title: "One engine, many operational runs",
        text: "Post-sales onboarding is the first package. The same engine can later support intake, lead lifecycle, outbound follow-up, renewals, and other repeated operational workflows.",
    },
];

const HatchDivider = ({ dark = false }: { dark?: boolean }) => (
    <div
        className={`h-[30px] w-full overflow-hidden border-y ${dark ? "border-[#4A4A4A] bg-[#242424]" : "border-[#D5D4CF] bg-[#FBF9F4]"
            }`}
    >
        <div className={`h-full w-full hatch-pattern ${dark ? "opacity-25" : "opacity-30"}`} />
    </div>
);

export default function AboutPage() {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    {/* Hero */}
                    <motion.div
                        className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-[55px] lg:pb-[92px] lg:pt-[82px]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[78px]">
                            <span className="font-sans text-[14px] font-medium text-[#443218]">
                                About CaltAI
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[660px_1fr] lg:gap-[90px]">
                            <div>
                                <h1 className="font-heading text-[44px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#443218] md:text-[58px] lg:text-[68px]">
                                    We are building the AI operations layer for small teams.
                                </h1>
                            </div>

                            <div className="pt-2 lg:pt-[92px]">
                                <p className="font-sans text-[18px] font-normal leading-[1.65] text-[#695A44] md:text-[20px]">
                                    CaltAI started from a simple frustration: AI can answer questions, write drafts,
                                    and automate tasks, but business owners are still the ones holding the operation
                                    together across tools.
                                </p>

                                <p className="mt-6 font-sans text-[18px] font-normal leading-[1.65] text-[#695A44] md:text-[20px]">
                                    We are not trying to replace the people who understand the business. We are building
                                    software that helps them stop babysitting every handoff, reminder, approval, and next step.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust statement */}
                    <div className="relative overflow-hidden border-t border-[#D5D4CF] bg-[#F6F3EF] px-6 py-14 text-center md:px-10 lg:px-[55px]">
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{
                                backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <p className="relative z-10 mx-auto max-w-[900px] font-sans text-[24px] font-semibold leading-[1.38] text-[#262626]">
                            We believe the next generation of business software will not just store work,
                            it will help move work forward with context, judgment, and human control.
                        </p>
                    </div>

                    <HatchDivider />

                    {/* Story */}
                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[86px]">
                        <div className="grid gap-12 lg:grid-cols-[390px_1fr] lg:gap-[110px]">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="font-heading text-[38px] font-semibold leading-[1.12] text-[#443218] md:text-[46px]">
                                    Why we are building this.
                                </h2>
                                <p className="mt-6 font-sans text-[17px] font-normal leading-[1.65] text-[#695A44]">
                                    CaltAI is built for the businesses where operations are still held together by
                                    people switching tabs, remembering context, and chasing the same next step again and again.
                                </p>
                            </motion.div>

                            <div className="border-t border-[#D5D4CF]">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        className="grid gap-4 border-b border-[#D5D4CF] py-7 md:grid-cols-[180px_1fr] md:gap-10"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                    >
                                        <div>
                                            <p className="font-sans text-[14px] font-semibold text-[#FF5A1F]">
                                                {item.label}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="font-sans text-[20px] font-semibold text-[#443218]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 font-sans text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                                {item.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dark principle section */}
                <section className="bg-[#242424] text-[#F2EEE9]">
                    <div className="page-frame page-frame-dark">
                        <HatchDivider dark />

                        <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[86px]">
                            <motion.div
                                className="max-w-[860px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-[42px] inline-flex h-[40px] items-center rounded-full border border-white/10 bg-[#191919] px-4">
                                    <span className="font-sans text-[14px] font-medium text-[#F2EEE9]">
                                        How we think
                                    </span>
                                </div>

                                <h2 className="font-heading text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2EEE9] md:text-[52px]">
                                    Trust is not a feature we add later. It is the product.
                                </h2>

                                <p className="mt-6 max-w-[760px] font-sans text-[17px] font-normal leading-[1.65] text-[#D7C1A4]">
                                    CaltAI is designed around human approval, clear reasoning, scoped autonomy,
                                    and operational visibility from day one.
                                </p>
                            </motion.div>

                            <div className="mt-[58px] grid gap-6 md:grid-cols-2">
                                {principles.map((principle, index) => (
                                    <motion.div
                                        key={principle.title}
                                        className="relative overflow-hidden border border-[#4A4A4A] bg-[#1D1D1D] p-7"
                                        initial={{ opacity: 0, y: 22 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                    >
                                        <div className="absolute right-0 top-0 h-[46px] w-[160px] hatch-pattern opacity-20" />
                                        <h3 className="font-heading text-[28px] font-semibold leading-[1.14] text-[#F2EEE9]">
                                            {principle.title}
                                        </h3>
                                        <p className="mt-5 font-sans text-[16px] font-normal leading-[1.65] text-[#D7C1A4]">
                                            {principle.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <HatchDivider dark />
                    </div>
                </section>

                {/* Team */}
                <div className="page-frame">
                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[86px]">
                        <motion.div
                            className="max-w-[820px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-heading text-[38px] font-semibold leading-[1.12] text-[#443218] md:text-[46px]">
                                Built by a small team that knows operations cannot be solved with prompts alone.
                            </h2>
                            <p className="mt-6 font-sans text-[17px] font-normal leading-[1.65] text-[#695A44]">
                                We combine product design, go-to-market experience, and engineering depth across
                                AI systems, enterprise infrastructure, and operational workflows.
                            </p>
                        </motion.div>

                        <div className="mt-12 grid gap-7 md:grid-cols-3">
                            {team.map((person, index) => (
                                <motion.div
                                    key={person.name}
                                    className="relative min-h-[310px] overflow-hidden border border-[#D5D4CF] bg-[#F6F3EF] p-7"
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: index * 0.07 }}
                                >
                                    <div className="absolute right-0 top-0 h-[46px] w-[150px] hatch-pattern opacity-25" />
                                    <h3 className="font-heading text-[32px] font-semibold text-[#443218]">
                                        {person.name}
                                    </h3>
                                    <p className="mt-3 font-sans text-[15px] font-semibold leading-[1.45] text-[#FF5A1F]">
                                        {person.role}
                                    </p>
                                    <p className="mt-7 font-sans text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                        {person.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <HatchDivider />

                    {/* Closing CTA */}
                    <div className="relative overflow-hidden bg-[#F6F3EF] px-6 py-16 text-center md:px-10 lg:px-[55px] lg:py-[78px]">
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{
                                backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <motion.div
                            className="relative z-10 mx-auto max-w-[900px]"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55 }}
                        >
                            <h2 className="font-heading text-[38px] font-semibold leading-[1.12] text-[#443218] md:text-[52px]">
                                We are looking for operators who want to shape this with us.
                            </h2>

                            <p className="mx-auto mt-6 max-w-[680px] font-sans text-[17px] font-normal leading-[1.65] text-[#695A44] md:text-[18px]">
                                If onboarding, handoffs, approvals, or follow-ups are still held together manually
                                in your business, we would like to learn from your workflow.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/design-partners"
                                    className="flex h-[54px] items-center justify-center rounded-full bg-[#FF5A1F] px-9 font-sans text-[17px] font-medium text-white hover:bg-[#E84D14]"
                                >
                                    Become a design partner
                                </Link>

                                <Link
                                    href="/"
                                    className="flex h-[54px] items-center justify-center rounded-full border border-[#8D8177] bg-[#FBF9F4] px-9 font-sans text-[17px] font-medium text-[#443218] hover:bg-white"
                                >
                                    Back to home
                                </Link>
                            </div>
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