"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

type Mode = "demo" | "design-partner" | "newsletter";

const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbx4c7LY8F_Aedu6L3F8qrYEQUjMhetiqziNs90jCy86SV9xudYKM7mOFQrQ_sj71Tju2w/exec";

const modes = [
    {
        id: "demo" as Mode,
        label: "Book a demo",
        title: "Book a walkthrough",
        description:
            "Show us how your operation works today. We’ll walk you through how CaltAI could help move the workflow forward across your tools.",
        button: "Request walkthrough",
    },
    {
        id: "design-partner" as Mode,
        label: "Design partner",
        title: "Apply to be a design partner",
        description:
            "For agencies willing to test CaltAI on real onboarding work and help shape the product before public release.",
        button: "Apply now",
    },
    {
        id: "newsletter" as Mode,
        label: "Stay informed",
        title: "Stay informed",
        description:
            "Get product updates, design partner notes, and practical thinking on AI operations for service businesses.",
        button: "Subscribe",
    },
];

const formFields: Record<
    Mode,
    {
        label: string;
        name: string;
        type?: "text" | "email" | "select" | "textarea";
        optional?: boolean;
        options?: string[];
    }[]
> = {
    "design-partner": [
        { label: "First name", name: "firstName" },
        { label: "Last name, optional", name: "lastName", optional: true },
        { label: "Work email", name: "email", type: "email" },
        { label: "Company name", name: "company" },
        { label: "Website", name: "website" },
        { label: "Role", name: "role" },
        {
            label: "Company size",
            name: "companySize",
            type: "select",
            options: ["1–4", "5–10", "11–30", "31–50", "51+"],
        },
        {
            label: "How many client onboardings do you handle per month?",
            name: "onboardingsPerMonth",
            type: "select",
            options: ["0–2", "3–5", "6–10", "11–20", "21+"],
        },
        {
            label: "Where does onboarding slow down most?",
            name: "onboardingSlowdown",
            type: "select",
            options: [
                "Missing assets",
                "Kickoff scheduling",
                "Client approvals",
                "Internal handoff",
                "Status visibility",
                "Other",
            ],
        },
        {
            label: "Which program are you interested in?",
            name: "program",
            type: "select",
            options: ["Lite Program", "Full Program", "Not sure yet"],
        },
        {
            label: "Anything else we should know?, optional",
            name: "anythingElse",
            type: "textarea",
            optional: true,
        },
    ],

    demo: [
        { label: "First name", name: "firstName" },
        { label: "Last name, optional", name: "lastName", optional: true },
        { label: "Work email", name: "email", type: "email" },
        { label: "Company name", name: "company" },
        { label: "Website, optional", name: "website", optional: true },
        { label: "Role", name: "role" },
        {
            label: "What workflow do you want to improve?",
            name: "workflowToImprove",
            type: "select",
            options: [
                "Post-sales onboarding",
                "Client intake",
                "Lead lifecycle",
                "Outbound follow-up",
                "Not sure yet",
            ],
        },
        {
            label: "What is the main problem you want to solve?",
            name: "mainProblem",
            type: "textarea",
        },
        {
            label: "Preferred time or timezone, optional",
            name: "preferredTime",
            optional: true,
        },
    ],

    newsletter: [
        { label: "First name, optional", name: "firstName", optional: true },
        { label: "Email", name: "email", type: "email" },
    ],
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
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );

    const active = modes.find((mode) => mode.id === activeMode)!;

    function updateField(name: string, value: string) {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const payload = {
            formType: activeMode,
            ...formData,
            consent,
        };

        try {
            await fetch(WEB_APP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(payload),
            });

            setStatus("success");
            setFormData({});
            setConsent(false);
        } catch {
            setStatus("error");
        }
    }

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
                            <div className="mb-12 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-16 lg:mb-20">
                                <span className="font-sans text-[14px] font-medium text-[#443218]">
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
                                    requests are for teams actively exploring operational workflow
                                    problems.
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
                                            onClick={() => {
                                                setActiveMode(mode.id);
                                                setStatus("idle");
                                                setFormData({});
                                                setConsent(false);
                                            }}
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

                                    {status === "success" ? (
                                        <div className="mt-[34px] border border-[#D5D4CF] bg-[#FBF9F4] p-6">
                                            <h3 className="font-heading text-[26px] font-semibold text-[#443218]">
                                                Thank you.
                                            </h3>
                                            <p className="mt-3 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44]">
                                                We received your submission. If there is a fit, we’ll get
                                                back to you soon.
                                            </p>
                                        </div>
                                    ) : (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="mt-[28px] space-y-4 md:mt-[34px]"
                                        >
                                            {formFields[activeMode].map((field) => (
                                                <label key={field.name} className="block">
                                                    <span className="mb-2 block font-sans text-[14px] font-medium text-[#443218]">
                                                        {field.label}
                                                    </span>

                                                    {field.type === "select" ? (
                                                        <div className="relative">
                                                            <select
                                                                required={!field.optional}
                                                                value={formData[field.name] || ""}
                                                                onChange={(e) => updateField(field.name, e.target.value)}
                                                                className="h-[48px] w-full appearance-none border border-[#D5D4CF] bg-[#FBF9F4] pl-4 pr-12 font-sans text-[15px] font-normal text-[#443218] outline-none transition-colors focus:border-[#FF5A1F]"
                                                            >
                                                                <option value="">Select one</option>
                                                                {field.options?.map((option) => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                            <span className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[#443218]">
                                                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M5 7.5L10 12.5L15 7.5"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    ) : field.type === "textarea" ? (
                                                        <textarea
                                                            required={!field.optional}
                                                            rows={4}
                                                            value={formData[field.name] || ""}
                                                            onChange={(e) =>
                                                                updateField(field.name, e.target.value)
                                                            }
                                                            className="w-full resize-none border border-[#D5D4CF] bg-[#FBF9F4] px-4 py-3 font-sans text-[15px] font-normal text-[#443218] outline-none transition-colors placeholder:text-[#9A8E7E] focus:border-[#FF5A1F]"
                                                        />
                                                    ) : (
                                                        <input
                                                            required={!field.optional}
                                                            type={field.type || "text"}
                                                            value={formData[field.name] || ""}
                                                            onChange={(e) =>
                                                                updateField(field.name, e.target.value)
                                                            }
                                                            className="h-[48px] w-full border border-[#D5D4CF] bg-[#FBF9F4] px-4 font-sans text-[15px] font-normal text-[#443218] outline-none transition-colors placeholder:text-[#9A8E7E] focus:border-[#FF5A1F]"
                                                        />
                                                    )}
                                                </label>
                                            ))}

                                            {activeMode === "design-partner" && (
                                                <label className="flex items-start gap-3 pt-2 font-sans text-[14px] font-normal leading-[1.5] text-[#695A44]">
                                                    <input
                                                        type="checkbox"
                                                        required
                                                        checked={consent}
                                                        onChange={(e) => setConsent(e.target.checked)}
                                                        className="mt-1 h-4 w-4 shrink-0 accent-[#FF5A1F]"
                                                    />
                                                    <span>
                                                        I understand this is a design partner application and
                                                        may involve feedback sessions during the beta period.
                                                    </span>
                                                </label>
                                            )}

                                            {status === "error" && (
                                                <p className="font-sans text-[14px] font-normal text-red-700">
                                                    Something went wrong. Please try again.
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="mt-[22px] flex h-[54px] w-full items-center justify-center rounded-full bg-[#FF5A1F] font-sans text-[16px] font-medium text-white transition-colors hover:bg-[#E84D14] disabled:cursor-not-allowed disabled:opacity-60 md:text-[17px]"
                                            >
                                                {status === "loading" ? "Submitting..." : active.button}
                                            </button>
                                        </form>
                                    )}
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