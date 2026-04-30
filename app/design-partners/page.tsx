"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
};

const benefits = [
    "Shape the product around real agency onboarding work",
    "Early access before public release",
    "Direct influence on workflow design and roadmap",
    "Hands-on support from the CaltAI team",
];

const commitments = [
    "One kickoff call to map your current onboarding process",
    "Access to example onboarding cases or workflow details",
    "Regular feedback sessions during the beta period",
    "Willingness to test CaltAI on real operational work",
];

const programs = [
    {
        name: "Lite Program",
        eyebrow: "Lower commitment",
        icon: "outline",
        benefits: [
            "Early access to beta",
            "Discounted access for 6 months after public release",
            "One onboarding workflow pilot",
            "Roadmap feedback opportunity",
        ],
        commitment: [
            "One monthly feedback session",
            "1-2 hours per month for 6 months",
            "Test CaltAI on a limited onboarding workflow",
        ],
    },
    {
        name: "Full Program",
        eyebrow: "Deeper partnership",
        icon: "filled",
        benefits: [
            "Early access to beta",
            "Free access during the design partner period",
            "Multiple onboarding workflow pilots",
            "Direct influence on product roadmap",
        ],
        commitment: [
            "Up to 4 monthly feedback sessions",
            "4-8 hours per month during the beta period",
            "Test CaltAI on real client onboarding cases",
        ],
    },
];

const phases = [
    {
        title: "1. Discovery",
        text: "We map how your onboarding works today, where work stalls, and what your team is still holding together manually.",
    },
    {
        title: "2. Workflow design",
        text: "We turn your real process into a focused CaltAI run with clear triggers, approvals, handoffs, and success criteria.",
    },
    {
        title: "3. Prototype review",
        text: "You review the workflow experience, approval flow, and visibility layer before anything goes live.",
    },
    {
        title: "4. Guided beta",
        text: "We run CaltAI on selected onboarding cases with your team reviewing actions and giving structured feedback.",
    },
    {
        title: "5. Expansion",
        text: "Once the workflow proves useful, we decide what should become more autonomous and what should stay human-controlled.",
    },
];

const HatchDivider = ({ dark = false }: { dark?: boolean }) => (
    <div
        className={`h-[30px] w-full overflow-hidden border-y ${dark
            ? "border-[#4A4A4A] bg-[#242424]"
            : "border-[#D5D4CF] bg-[#FBF9F4]"
            }`}
    >
        <div
            className={`h-full w-full hatch-pattern ${dark ? "opacity-25" : "opacity-30"
                }`}
        />
    </div>
);

export default function DesignPartnersPage() {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    {/* Hero */}
                    <motion.div
                        className="px-[55px] pb-[78px] pt-[82px]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="h-[40px] inline-flex items-center gap-2 pr-4 pl-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] mb-[72px]">
                            <div className="w-[22px] h-[22px] flex items-center justify-center text-[#5C35F5]">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.68" d="M10.6133 0C16.4748 0 21.2266 4.75273 21.2266 10.6152C21.2264 16.4776 16.4748 21.2305 10.6133 21.2305C4.75181 21.2305 0.00012677 16.4776 0 10.6152C0 4.75273 4.75173 0 10.6133 0ZM10.6055 3.21484C6.51727 3.21484 3.20312 6.52833 3.20312 10.6152C3.20334 14.702 6.5174 18.0146 10.6055 18.0146C14.6935 18.0146 18.0076 14.702 18.0078 10.6152C18.0078 6.52833 14.6937 3.21484 10.6055 3.21484Z" fill="#6C4DE2" fill-opacity="0.7" />
                                    <ellipse opacity="0.68" cx="10.6094" cy="10.6159" rx="2.85938" ry="2.86" fill="#FB631C" />
                                </svg>


                            </div>

                            <span className="text-[14px] font-medium text-[#443218] font-inter">
                                Design Partnership
                            </span>
                        </div>

                        <div className="grid grid-cols-[560px_1fr] items-start gap-[110px]">
                            <div>
                                <h1 className="font-heading text-[58px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#443218]">
                                    Help shape the AI operator for agency onboarding.
                                </h1>

                                <p className="mt-[34px] font-inter text-[19px] font-normal leading-[1.6] text-[#695A44]">
                                    We’re working with a small group of agency operators to build
                                    CaltAI around real post-sale onboarding work, not fake demo
                                    workflows.
                                </p>

                                <div className="mt-[42px] flex items-center gap-4">
                                    <Link
                                        href="/#book"
                                        className="flex h-[52px] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-inter text-[16px] font-medium text-white transition-transform hover:scale-[1.02]"
                                    >
                                        Apply to be a design partner
                                    </Link>

                                    <Link
                                        href="/#workflows"
                                        className="flex h-[52px] items-center justify-center rounded-full border border-[#8D8177] px-8 font-inter text-[16px] font-medium text-[#443218] transition-colors hover:bg-white"
                                    >
                                        See the workflow
                                    </Link>
                                </div>
                            </div>

                            <motion.div
                                className="border border-[#D5D4CF] bg-[#F6F3EF] p-[34px]"
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.18,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <h2 className="font-heading text-[30px] font-semibold leading-[1.15] text-[#443218]">
                                    Who this is for
                                </h2>

                                <div className="mt-8 space-y-5 font-inter text-[17px] font-normal leading-[1.55] text-[#695A44]">
                                    <p>
                                        Agencies and consultancies with repeated client onboarding,
                                        messy handoffs, missing assets, kickoff coordination, and
                                        approval chasing.
                                    </p>
                                    <p>
                                        Best fit: teams with 5-50 employees handling roughly 5-20
                                        onboardings per month.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <HatchDivider />

                    {/* Benefits / Commitments */}
                    <motion.div
                        className="grid grid-cols-2 gap-[80px] px-[55px] py-[76px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ staggerChildren: 0.12 }}
                    >
                        {[
                            ["What you get", benefits],
                            ["What we ask", commitments],
                        ].map(([title, items]) => (
                            <motion.div
                                key={title as string}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="font-heading text-[38px] font-semibold leading-[1.15] text-[#443218]">
                                    {title as string}
                                </h2>

                                <ul className="mt-8 space-y-4">
                                    {(items as string[]).map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-4 font-inter text-[17px] font-normal leading-[1.55] text-[#695A44]"
                                        >
                                            <span className="mt-[10px] h-[7px] w-[7px] shrink-0 bg-[#FF5A1F]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Dark Program Section */}
                <section className="bg-[#242424] text-[#F2EEE9]">
                    <div className="page-frame page-frame-dark">
                        <HatchDivider dark />

                        <motion.div
                            className="px-[55px] py-[82px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div
                                className="max-w-[860px]"
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-[42px] inline-flex h-[40px] items-center rounded-full border border-white/10 bg-[#191919] px-4">
                                    <span className="font-inter text-[14px] font-medium text-[#F2EEE9]">
                                        Program overview
                                    </span>
                                </div>

                                <h2 className="font-heading text-[46px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2EEE9]">
                                    Choose the level of involvement that fits your team.
                                </h2>

                                <p className="mt-5 font-inter text-[17px] font-normal leading-[1.6] text-[#D7C1A4]">
                                    Both programs are built around the same goal: test CaltAI on
                                    real agency onboarding work and shape the product before
                                    public release.
                                </p>
                            </motion.div>

                            <div className="mt-[52px] grid grid-cols-2 gap-[32px]">
                                {programs.map((program, index) => (
                                    <motion.div
                                        key={program.name}
                                        className="relative overflow-hidden border border-[#4A4A4A] bg-[#1D1D1D] p-[36px]"
                                        initial={{ opacity: 0, y: 26 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: index * 0.12 }}
                                    >
                                        <div className="absolute right-0 top-0 h-[54px] w-[220px] hatch-pattern opacity-20" />

                                        <div className="relative z-10">
                                            <div className="mb-[46px] text-[#FF5A1F]">
                                                {program.icon === "outline" ? (
                                                    <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M12 3.5L14.6 8.77L20.4 9.61L16.2 13.7L17.19 19.48L12 16.75L6.81 19.48L7.8 13.7L3.6 9.61L9.4 8.77L12 3.5Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M12 3.5L14.6 8.77L20.4 9.61L16.2 13.7L17.19 19.48L12 16.75L6.81 19.48L7.8 13.7L3.6 9.61L9.4 8.77L12 3.5Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                )}
                                            </div>

                                            <p className="mb-3 font-inter text-[14px] font-medium text-[#D7C1A4]">
                                                {program.eyebrow}
                                            </p>

                                            <h3 className="font-heading text-[42px] font-semibold leading-[1.05] text-[#F2EEE9]">
                                                {program.name}
                                            </h3>

                                            <div className="mt-8 border-t border-[#4A4A4A] pt-7">
                                                <h4 className="font-inter text-[16px] font-semibold text-[#F2EEE9]">
                                                    Benefits
                                                </h4>

                                                <ul className="mt-4 space-y-3">
                                                    {program.benefits.map((item) => (
                                                        <li
                                                            key={item}
                                                            className="flex gap-3 font-inter text-[16px] font-normal leading-[1.5] text-[#D7C1A4]"
                                                        >
                                                            <span className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-8 border-t border-[#4A4A4A] pt-7">
                                                <h4 className="font-inter text-[16px] font-semibold text-[#F2EEE9]">
                                                    Commitment
                                                </h4>

                                                <ul className="mt-4 space-y-3">
                                                    {program.commitment.map((item) => (
                                                        <li
                                                            key={item}
                                                            className="flex gap-3 font-inter text-[16px] font-normal leading-[1.5] text-[#D7C1A4]"
                                                        >
                                                            <span className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <HatchDivider dark />
                    </div>
                </section>

                <div className="page-frame">
                    {/* How it works */}
                    <motion.div
                        className="px-[55px] pt-[82px] pb-[30px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid grid-cols-[390px_1fr] gap-[100px]">
                            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                                <h2 className="font-heading text-[42px] font-semibold leading-[1.12] text-[#443218]">
                                    How the partnership works
                                </h2>

                                <p className="mt-6 font-inter text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                    The goal is simple: prove CaltAI can reduce manual
                                    coordination in your real onboarding process.
                                </p>
                            </motion.div>

                            <div className="space-y-0 border-[#D5D4CF]">
                                {phases.map((phase, index) => (
                                    <motion.div
                                        key={phase.title}
                                        className="grid grid-cols-[210px_1fr] gap-10 border-t border-[#D5D4CF] py-7"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                    >
                                        <h3 className="font-inter text-[19px] font-medium text-[#443218]">
                                            {phase.title}
                                        </h3>
                                        <p className="font-inter text-[16px] font-normal leading-[1.65] text-[#695A44]">
                                            {phase.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <HatchDivider />

                    {/* Bottom CTA */}
                    <div className="relative overflow-hidden bg-[#F6F3EF] px-[55px] py-[70px] text-center">
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
                            <h2 className="font-heading text-[44px] font-semibold leading-[1.15] text-[#443218]">
                                If onboarding still depends on someone chasing everything, we
                                should talk.
                            </h2>

                            <p className="mx-auto mt-6 max-w-[660px] font-inter text-[18px] font-normal leading-[1.6] text-[#695A44]">
                                We are selecting a small number of design partners, so the fit
                                matters more than volume.
                            </p>

                            <Link
                                href="/#book"
                                className="mx-auto mt-9 flex h-[54px] w-fit items-center justify-center rounded-full bg-[#FF5A1F] px-9 font-inter text-[17px] font-medium text-white transition-transform hover:scale-[1.02]"
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