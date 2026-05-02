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
        <div className={`h-full w-full hatch-pattern ${dark ? "opacity-25" : "opacity-30"}`} />
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
                        className="px-5 pb-14 pt-14 sm:px-6 md:px-10 md:pb-16 md:pt-16 lg:px-[55px] lg:pb-[78px] lg:pt-[82px]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mb-10 flex justify-center md:mb-14 lg:mb-[72px] lg:justify-start">
                            <div className="inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] pl-2 pr-4">
                                <div className="flex h-[22px] w-[22px] items-center justify-center text-[#5C35F5]">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path
                                            opacity="0.68"
                                            d="M10.6133 0C16.4748 0 21.2266 4.75273 21.2266 10.6152C21.2264 16.4776 16.4748 21.2305 10.6133 21.2305C4.75181 21.2305 0.00012677 16.4776 0 10.6152C0 4.75273 4.75173 0 10.6133 0ZM10.6055 3.21484C6.51727 3.21484 3.20312 6.52833 3.20312 10.6152C3.20334 14.702 6.5174 18.0146 10.6055 18.0146C14.6935 18.0146 18.0076 14.702 18.0078 10.6152C18.0078 6.52833 14.6937 3.21484 10.6055 3.21484Z"
                                            fill="#6C4DE2"
                                            fillOpacity="0.7"
                                        />
                                        <ellipse
                                            opacity="0.68"
                                            cx="10.6094"
                                            cy="10.6159"
                                            rx="2.85938"
                                            ry="2.86"
                                            fill="#FB631C"
                                        />
                                    </svg>
                                </div>

                                <span className="font-inter text-[14px] font-medium text-[#443218]">
                                    Design Partnership
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[560px_1fr] lg:items-start lg:gap-[110px]">
                            <div className="text-center lg:text-left">
                                <h1 className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#443218] sm:text-[46px] md:text-[52px] lg:text-[58px]">
                                    Help shape the AI operator for agency onboarding.
                                </h1>

                                <p className="mx-auto mt-6 max-w-[680px] font-inter text-[17px] font-normal leading-[1.6] text-[#695A44] md:mt-8 md:text-[18px] lg:mx-0 lg:mt-[34px] lg:text-[19px]">
                                    We’re working with a small group of agency operators to build
                                    CaltAI around real post-sale onboarding work, not fake demo
                                    workflows.
                                </p>

                                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-10 lg:mt-[42px] lg:justify-start">
                                    <Link
                                        href="/get-started?mode=design-partner"
                                        className="flex h-[52px] w-fit min-w-[280px] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-inter text-[16px] font-medium text-white transition-transform hover:scale-[1.02]"
                                    >
                                        Apply to be a design partner
                                    </Link>
                                </div>
                            </div>

                            <motion.div
                                className="border border-[#D5D4CF] bg-[#F6F3EF] p-6 md:p-8 lg:p-[34px]"
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h2 className="font-heading text-[28px] font-semibold leading-[1.15] text-[#443218] md:text-[30px]">
                                    Who this is for
                                </h2>

                                <div className="mt-6 space-y-5 font-inter text-[16px] font-normal leading-[1.55] text-[#695A44] md:mt-8 md:text-[17px]">
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
                        className="grid grid-cols-1 gap-12 px-5 py-14 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 md:py-16 lg:gap-[80px] lg:px-[55px] lg:py-[76px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ staggerChildren: 0.12 }}
                    >
                        {[
                            ["What you get", benefits],
                            ["What we ask", commitments],
                        ].map(([title, items]) => (
                            <motion.div key={title as string} variants={fadeUp} transition={{ duration: 0.5 }}>
                                <h2 className="font-heading text-[32px] font-semibold leading-[1.15] text-[#443218] md:text-[36px] lg:text-[38px]">
                                    {title as string}
                                </h2>

                                <ul className="mt-6 space-y-4 md:mt-8">
                                    {(items as string[]).map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-4 font-inter text-[16px] font-normal leading-[1.55] text-[#695A44] md:text-[17px]"
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
                            className="px-5 py-14 sm:px-6 md:px-10 md:py-16 lg:px-[55px] lg:py-[82px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div className="max-w-[860px]" variants={fadeUp} transition={{ duration: 0.5 }}>
                                <div className="mb-8 inline-flex h-[40px] items-center rounded-full border border-white/10 bg-[#191919] px-4 lg:mb-[42px]">
                                    <span className="font-inter text-[14px] font-medium text-[#F2EEE9]">
                                        Program overview
                                    </span>
                                </div>

                                <h2 className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F2EEE9] sm:text-[40px] lg:text-[46px]">
                                    Choose the level of involvement that fits your team.
                                </h2>

                                <p className="mt-5 max-w-[760px] font-inter text-[16px] font-normal leading-[1.6] text-[#D7C1A4] md:text-[17px]">
                                    Both programs are built around the same goal: test CaltAI on
                                    real agency onboarding work and shape the product before
                                    public release.
                                </p>
                            </motion.div>

                            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-[52px] lg:gap-[32px]">
                                {programs.map((program, index) => (
                                    <motion.div
                                        key={program.name}
                                        className="relative overflow-hidden border border-[#4A4A4A] bg-[#1D1D1D] p-6 md:p-7 lg:p-[36px]"
                                        initial={{ opacity: 0, y: 26 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: index * 0.12 }}
                                    >
                                        <div className="absolute right-0 top-0 h-[54px] w-[160px] hatch-pattern opacity-20 md:w-[190px] lg:w-[220px]" />

                                        <div className="relative z-10">
                                            <div className="mb-8 text-[#FF5A1F] lg:mb-[46px]">
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

                                            <h3 className="font-heading text-[34px] font-semibold leading-[1.05] text-[#F2EEE9] sm:text-[38px] lg:text-[42px]">
                                                {program.name}
                                            </h3>

                                            <div className="mt-7 border-t border-[#4A4A4A] pt-6 lg:mt-8 lg:pt-7">
                                                <h4 className="font-inter text-[16px] font-semibold text-[#F2EEE9]">
                                                    Benefits
                                                </h4>

                                                <ul className="mt-4 space-y-3">
                                                    {program.benefits.map((item) => (
                                                        <li key={item} className="flex gap-3 font-inter text-[15px] font-normal leading-[1.5] text-[#D7C1A4] md:text-[16px]">
                                                            <span className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-7 border-t border-[#4A4A4A] pt-6 lg:mt-8 lg:pt-7">
                                                <h4 className="font-inter text-[16px] font-semibold text-[#F2EEE9]">
                                                    Commitment
                                                </h4>

                                                <ul className="mt-4 space-y-3">
                                                    {program.commitment.map((item) => (
                                                        <li key={item} className="flex gap-3 font-inter text-[15px] font-normal leading-[1.5] text-[#D7C1A4] md:text-[16px]">
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
                        className="px-5 pb-8 pt-14 sm:px-6 md:px-10 md:pt-16 lg:px-[55px] lg:pb-[30px] lg:pt-[82px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[390px_1fr] lg:gap-[100px]">
                            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                                <h2 className="font-heading text-[34px] font-semibold leading-[1.12] text-[#443218] md:text-[38px] lg:text-[42px]">
                                    How the partnership works
                                </h2>

                                <p className="mt-5 max-w-[620px] font-inter text-[16px] font-normal leading-[1.6] text-[#695A44] md:text-[17px]">
                                    The goal is simple: prove CaltAI can reduce manual
                                    coordination in your real onboarding process.
                                </p>
                            </motion.div>

                            <div className="space-y-0 border-[#D5D4CF]">
                                {phases.map((phase, index) => (
                                    <motion.div
                                        key={phase.title}
                                        className="grid grid-cols-1 gap-3 border-t border-[#D5D4CF] py-6 md:grid-cols-[190px_1fr] md:gap-8 lg:grid-cols-[210px_1fr] lg:gap-10 lg:py-7"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                    >
                                        <h3 className="font-inter text-[18px] font-medium text-[#443218] md:text-[19px]">
                                            {phase.title}
                                        </h3>
                                        <p className="font-inter text-[15px] font-normal leading-[1.65] text-[#695A44] md:text-[16px]">
                                            {phase.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <HatchDivider />

                    {/* Bottom CTA */}
                    <div className="relative overflow-hidden bg-[#F6F3EF] px-5 py-14 text-center sm:px-6 md:px-10 md:py-16 lg:px-[55px] lg:py-[70px]">
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
                            <h2 className="font-heading text-[34px] font-semibold leading-[1.15] text-[#443218] md:text-[40px] lg:text-[44px]">
                                If onboarding still depends on someone chasing everything, we
                                should talk.
                            </h2>

                            <p className="mx-auto mt-5 max-w-[660px] font-inter text-[16px] font-normal leading-[1.6] text-[#695A44] md:mt-6 md:text-[18px]">
                                We are selecting a small number of design partners, so the fit
                                matters more than volume.
                            </p>

                            <Link
                                href="/get-started?mode=design-partner"
                                className="mx-auto mt-8 flex h-[54px] w-fit min-w-[280px] max-w-[calc(100vw-40px)] items-center justify-center rounded-full bg-[#FF5A1F] px-8 font-inter text-[16px] font-medium text-white transition-transform hover:scale-[1.02] md:mt-9 md:px-9 md:text-[17px]"
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