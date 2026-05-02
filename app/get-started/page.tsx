"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

type Mode = "demo" | "design-partner" | "newsletter";

const modes: {
    id: Mode;
    label: string;
    title: string;
    description: string;
    button: string;
}[] = [
        {
            id: "demo",
            label: "Book a demo",
            title: "Book a walkthrough",
            description:
                "Show us how your operation works today. We’ll walk you through how CaltAI could help move the workflow forward across your tools.",
            button: "Request walkthrough",
        },
        {
            id: "design-partner",
            label: "Design partner",
            title: "Apply to be a design partner",
            description:
                "For agencies willing to test CaltAI on real onboarding work and help shape the product before public release.",
            button: "Apply now",
        },
        {
            id: "newsletter",
            label: "Stay informed",
            title: "Stay informed",
            description:
                "Get product updates, design partner notes, and practical thinking on AI operations for service businesses.",
            button: "Subscribe",
        },
    ];

const formFields: Record<Mode, string[]> = {
    demo: [
        "Full name",
        "Work email",
        "Company",
        "Role",
        "Website",
        "What workflow are you trying to improve?",
        "Approx. client onboarding volume",
    ],
    "design-partner": [
        "Full name",
        "Work email",
        "Company",
        "Website",
        "Role",
        "Company size",
        "Onboardings per month",
        "Which program are you interested in? Lite, Full, or not sure",
        "What breaks most in your onboarding process?",
    ],
    newsletter: ["Full name", "Email", "Role or company, optional"],
};

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
};

export default function GetStartedPage() {
    const searchParams = useSearchParams();

    const initialMode = useMemo<Mode>(() => {
        const mode = searchParams.get("mode");
        if (mode === "design-partner") return "design-partner";
        if (mode === "newsletter") return "newsletter";
        return "demo";
    }, [searchParams]);

    const [activeMode, setActiveMode] = useState<Mode>(initialMode);
    const active = modes.find((mode) => mode.id === activeMode)!;

    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    <div className="grid grid-cols-1 gap-[54px] px-6 py-[56px] md:px-10 md:py-[68px] lg:grid-cols-[470px_1fr] lg:gap-[100px] lg:px-[55px] lg:py-[82px]">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            transition={{ duration: 0.55 }}
                        >
                            {/* Badge */}
                            <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-16 lg:mb-20">
                                <div className="flex h-[22px] w-[22px] items-center justify-center text-[#5C35F5]">
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="6.48119" rx="3.24059" fill="#613EE9" />
                                        <rect y="6.48242" width="6.48288" height="6.48119" rx="3.24059" fill="#FB631C" />
                                        <rect x="15.5156" y="6.48242" width="6.48288" height="6.48119" rx="3.24059" fill="#FB631C" />
                                        <rect y="12.9648" width="6.48288" height="6.48119" rx="3.24059" fill="#FDA073" />
                                        <rect x="15.5156" y="12.9648" width="6.48288" height="6.48119" rx="3.24059" fill="#FDA073" />
                                    </svg>

                                </div>

                                <span className="font-inter text-[14px] font-medium text-[#443218]">
                                    Get Started
                                </span>
                            </div>

                            <h1 className="max-w-[680px] font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#443218] md:text-[48px] lg:text-[56px]">
                                Choose the path that fits your situation.
                            </h1>

                            <p className="mt-[24px] max-w-[620px] font-sans text-[16px] font-normal leading-[1.6] text-[#695A44] md:text-[18px]">
                                Whether you want a walkthrough, want to join the design partner
                                program, or just want updates, start here.
                            </p>

                            <div className="mt-[36px] max-w-[620px] border-t border-[#D5D4CF] pt-[22px] md:mt-[46px] lg:mt-[52px]">
                                <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#695A44] md:text-[15px]">
                                    Design partner applications are reviewed for fit. Demo
                                    requests are for teams actively exploring operational
                                    workflow problems.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-full border border-[#D5D4CF] bg-[#F6F3EF]"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.12 }}
                        >
                            <div className="grid grid-cols-1 border-b border-[#D5D4CF] sm:grid-cols-3">
                                {modes.map((mode) => {
                                    const isActive = mode.id === activeMode;

                                    return (
                                        <button
                                            key={mode.id}
                                            type="button"
                                            onClick={() => setActiveMode(mode.id)}
                                            className={`h-[52px] border-b border-[#D5D4CF] font-sans text-[14px] font-medium transition-colors last:border-b-0 sm:h-[58px] sm:border-b-0 sm:border-r sm:last:border-r-0 ${isActive
                                                ? "bg-[#FF5A1F] text-white"
                                                : "bg-[#F6F3EF] text-[#695A44] hover:bg-[#FBF9F4]"
                                                }`}
                                        >
                                            {mode.label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="p-6 md:p-[34px] lg:p-[38px]">
                                <motion.div
                                    key={activeMode}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28 }}
                                >
                                    <h2 className="font-heading text-[32px] font-semibold leading-[1.1] text-[#443218] md:text-[36px] lg:text-[38px]">
                                        {active.title}
                                    </h2>

                                    <p className="mt-4 font-sans text-[15px] font-normal leading-[1.6] text-[#695A44] md:text-[16px]">
                                        {active.description}
                                    </p>

                                    <form className="mt-[28px] space-y-4 md:mt-[34px]">
                                        {formFields[activeMode].map((field, index) => {
                                            const isLong =
                                                field.includes("workflow") ||
                                                field.includes("breaks") ||
                                                field.includes("program");

                                            return (
                                                <label key={field} className="block">
                                                    <span className="mb-2 block font-sans text-[14px] font-medium text-[#443218]">
                                                        {field}
                                                    </span>

                                                    {isLong ? (
                                                        <textarea
                                                            rows={index === formFields[activeMode].length - 1 ? 4 : 3}
                                                            className="w-full resize-none border border-[#D5D4CF] bg-[#FBF9F4] px-4 py-3 font-sans text-[15px] font-normal text-[#443218] outline-none transition-colors placeholder:text-[#9A8E7E] focus:border-[#FF5A1F]"
                                                        />
                                                    ) : (
                                                        <input
                                                            type={field.toLowerCase().includes("email") ? "email" : "text"}
                                                            className="h-[48px] w-full border border-[#D5D4CF] bg-[#FBF9F4] px-4 font-sans text-[15px] font-normal text-[#443218] outline-none transition-colors placeholder:text-[#9A8E7E] focus:border-[#FF5A1F]"
                                                        />
                                                    )}
                                                </label>
                                            );
                                        })}

                                        {activeMode === "design-partner" && (
                                            <label className="flex items-start gap-3 pt-2 font-sans text-[14px] font-normal leading-[1.5] text-[#695A44]">
                                                <input
                                                    type="checkbox"
                                                    className="mt-1 h-4 w-4 shrink-0 accent-[#FF5A1F]"
                                                />
                                                <span>
                                                    I understand this is a design partner application and
                                                    may involve feedback sessions during the beta period.
                                                </span>
                                            </label>
                                        )}

                                        <button
                                            type="submit"
                                            className="mt-[22px] flex h-[54px] w-full items-center justify-center rounded-full bg-[#FF5A1F] font-sans text-[16px] font-medium text-white transition-colors hover:bg-[#E84D14] md:text-[17px]"
                                        >
                                            {active.button}
                                        </button>
                                    </form>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="h-[30px] w-full overflow-hidden border-t border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-30" />
                    </div>
                </div>
            </section>
        </main>
    );
}