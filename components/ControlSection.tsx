"use client";

import React from "react";

const ControlSection = () => {
    const controls = [
        {
            title: "Approval for every action",
            description: "Nothing client-facing happens without a human review.",
        },
        {
            title: "Confidence scores on every decision",
            description: "See how sure CaltAI is, and why, before you approve.",
        },
        {
            title: "Autonomy on your terms",
            description: "Loosen approval where you trust it. Keep it strict where you don’t.",
        },
    ];

    return (
        <section className="bg-[#242424] relative top-[-2px] text-[#F2EEE9]">
            <div className="page-frame page-frame-dark min-h-[980px] flex flex-col">
                {/* Top Content Area */}
                <div className="pt-[88px] px-[95px] pb-[78px]">
                    {/* Badge */}
                    <div className="h-[40px] mx-auto flex w-fit items-center gap-2 px-4 rounded-full border border-white/10 bg-[#191919] mb-[82px]">
                        <div className="w-[18px] h-[18px] flex items-center justify-center">
                            <svg width="297" height="298" viewBox="0 0 297 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M178 89.4756H237V149.476H177V119.001H118V0H178V89.4756Z" fill="#FDA177" />
                                <rect x="236" y="60.4878" width="60" height="30" fill="#FDC0A4" />
                                <path d="M119 60.001H60V237.979H119V297.979H59V238.976H0V58.9756H59V0H119V60.001Z" fill="#FB631C" />
                                <path d="M296.023 297.979H236.023V208.476H178V297.979H118V178.979H177V148.476H296.023V297.979Z" fill="#FC8249" />
                            </svg>

                        </div>
                        <span className="text-[14px] font-medium text-[#F2EEE9] font-inter">
                            Control
                        </span>
                    </div>

                    {/* Header */}
                    <div className="text-center mx-auto max-w-[980px]">
                        <h2 className="text-[40px] font-semibold text-[#F2EEE9] leading-[1.07] tracking-[-0.03em] font-heading mx-auto max-w-[900px]">
                            You decide how much autonomy CaltAI has.
                            <br />
                            Starting at zero.
                        </h2>

                        <div className="mt-[50px] mx-auto max-w-[980px] space-y-[22px]">
                            <p className="text-[16px] font-normal leading-[1.55] text-[#F2EEE9]/90 font-inter">
                                Today, CaltAI doesn’t act on anything without your approval. Every action is drafted,
                                scored, and routed to the right person to review. You see what it wants to do, why,
                                and how confident it is. You approve, edit, or decline.
                            </p>

                            <p className="text-[16px] font-normal leading-[1.55] text-[#F2EEE9]/90 font-inter">
                                As you see CaltAI act well on the work that matters, you decide where it can act on
                                its own. Low-stakes actions first. High-confidence work next. High-stakes
                                client-facing decisions stay with you as long as you want them to.
                            </p>
                        </div>
                    </div>

                    {/* Lower Content */}
                    <div className="mt-[90px] mx-auto grid max-w-[1040px] grid-cols-[480px_420px] gap-[95px] items-start">
                        {/* Left Feature List */}
                        <div className="space-y-[42px]">
                            {controls.map((item) => (
                                <div key={item.title}>
                                    <div className="h-[54px] border-y border-white/20 flex items-center">
                                        <h3 className="whitespace-nowrap text-[18px] font-normal text-[#D7C1A4] leading-[1.2] font-inter">
                                            {item.title}
                                        </h3>

                                        <div className="ml-5 h-[28px] min-w-[80px] flex-1 hatch-pattern opacity-40" />
                                    </div>

                                    <p className="mt-[20px] text-[15px] font-normal leading-[1.55] text-[#F2EEE9]/90 font-inter max-w-[360px]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right Placeholder */}
                        <div className="relative w-[420px] h-[420px] border border-white/20 bg-[#1D1D1D] overflow-hidden">
                            <div className="absolute left-0 top-0 h-px w-[594px] origin-top-left rotate-45 bg-white/20" />
                            <div className="absolute right-0 top-0 h-px w-[594px] origin-top-right -rotate-45 bg-white/20" />
                        </div>
                    </div>
                </div>

                {/* Bottom Statement Band */}
                <div className="mt-auto h-[155px] relative overflow-hidden bg-[#181818] border-t border-white/10 flex items-center justify-center">
                    {/* Dotted Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.3]"
                        style={{
                            backgroundImage: "radial-gradient(#4A4A4A 1.5px, transparent 1.5px)",
                            backgroundSize: "19px 19px",
                        }}
                    />

                    <p className="text-[20px] font-semibold text-[#F2EEE9] leading-[1.45] text-center w-[820px] z-10 font-inter">
                        We’re building this trust-first. CaltAI is currently in private design partnership with a small
                        group of agency operators helping us shape how this works in practice.
                    </p>
                </div>
            </div>

            {/* Bottom Zebra Band */}
            <div className="relative h-[30px] border-t border-[#4A4A4A] border-b border-[#4A4A4A] bg-[#242424] overflow-hidden">
                <div className="page-frame h-full hatch-pattern opacity-25 border-l-[#4A4A4A] border-r-[#4A4A4A]" />
            </div>
        </section>
    );
};

export default ControlSection;