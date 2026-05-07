"use client";

import React from "react";

const ControlIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 297 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[18px] w-[18px]"
    >
        <path d="M178 89.4756H237V149.476H177V119.001H118V0H178V89.4756Z" fill="#FDA177" />
        <rect x="236" y="60.4878" width="60" height="30" fill="#FDC0A4" />
        <path d="M119 60.001H60V237.979H119V297.979H59V238.976H0V58.9756H59V0H119V60.001Z" fill="#FB631C" />
        <path d="M296.023 297.979H236.023V208.476H178V297.979H118V178.979H177V148.476H296.023V297.979Z" fill="#FC8249" />
    </svg>
);

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
        <section className="relative top-[-2px] bg-[#242424] text-[#F2EEE9]">
            <div className="page-frame page-frame-dark flex min-h-[980px] flex-col md:min-h-[900px] lg:min-h-[980px]">
                <div className="px-5 pb-16 pt-16 sm:px-8 md:px-12 md:pb-20 md:pt-20 lg:px-[95px] lg:pb-[78px] lg:pt-[88px]">
                    <div className="mx-auto mb-12 flex h-[40px] w-fit items-center gap-2 rounded-full border border-white/10 bg-[#191919] px-4 md:mb-16 lg:mb-[82px]">
                        <div className="flex h-[18px] w-[18px] items-center justify-center">
                            <ControlIcon />
                        </div>
                        <span className="font-inter text-[14px] font-medium text-[#F2EEE9]">
                            Control
                        </span>
                    </div>

                    <div className="mx-auto max-w-[980px] text-center">
                        <h2 className="mx-auto max-w-[900px] font-heading text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F2EEE9] sm:text-[38px] md:text-[40px]">
                            You decide how much autonomy CaltAI has.
                            <br className="hidden sm:block" />
                            <span className="sm:ml-2">Starting at zero.</span>
                        </h2>

                        <div className="mx-auto mt-8 max-w-[980px] space-y-5 md:mt-10 lg:mt-[50px] lg:space-y-[22px]">
                            <p className="font-inter text-[15px] font-normal leading-[1.6] text-[#F2EEE9]/90 md:text-[16px]">
                                Today, CaltAI doesn’t act on anything without your approval. Every action is drafted,
                                scored, and routed to the right person to review. You see what it wants to do, why,
                                and how confident it is. You approve, edit, or decline.
                            </p>

                            <p className="font-inter text-[15px] font-normal leading-[1.6] text-[#F2EEE9]/90 md:text-[16px]">
                                As you see CaltAI act well on the work that matters, you decide where it can act on
                                its own. Low-stakes actions first. High-confidence work next. High-stakes
                                client-facing decisions stay with you as long as you want them to.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-14 grid max-w-[1040px] grid-cols-1 items-start gap-15 md:mt-16 md:grid-cols-[1fr_360px] md:gap-10 lg:mt-[90px] lg:grid-cols-[480px_420px] lg:gap-[95px]">
                        <div className="space-y-0">
                            {controls.map((item, index) => (
                                <div key={item.title}>
                                    <div className="flex min-h-[54px] items-center border-y border-white/20 py-3">
                                        <h3 className="whitespace-normal font-inter text-[17px] font-normal leading-[1.25] text-[#D7C1A4] sm:whitespace-nowrap md:text-[18px]">
                                            {item.title}
                                        </h3>

                                        <div className="ml-5 hidden h-[28px] min-w-[60px] flex-1 hatch-pattern opacity-40 md:block" />
                                    </div>

                                    <p className="mt-4 max-w-[460px] font-inter text-[15px] font-normal leading-[1.55] text-[#F2EEE9]/90 md:max-w-[360px]">
                                        {item.description}
                                    </p>

                                    {index < controls.length - 1 && (
                                        <div className="mt-7 block h-[24px] w-full overflow-hidden border-y border-[#4A4A4A] bg-[#242424] md:hidden">
                                            <div className="h-full w-full hatch-pattern opacity-25" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="relative pl-[60px] pb-[60px] mx-auto flex w-full max-w-[460px] items-center justify-center md:mx-0 md:h-[360px] md:w-[400px] lg:h-[420px] lg:w-[460px]">
                            <img
                                src="/hero/control-visual.png"
                                alt="Control visual showing CaltAI autonomy levels"
                                className="h-[88%]] w-[88%] object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative mt-auto flex min-h-[155px] items-center justify-center overflow-hidden border-t border-white/10 bg-[#181818] px-5 py-10 sm:px-8 md:px-12">
                    <div
                        className="absolute inset-0 opacity-[0.3]"
                        style={{
                            backgroundImage: "radial-gradient(#4A4A4A 1.5px, transparent 1.5px)",
                            backgroundSize: "19px 19px",
                        }}
                    />

                    <p className="z-10 max-w-[820px] text-center font-inter text-[17px] font-semibold leading-[1.5] text-[#F2EEE9] md:text-[20px]">
                        We’re building this trust-first. CaltAI is currently in private design partnership with a small
                        group of agency operators helping us shape how this works in practice.
                    </p>
                </div>
            </div>

            <div className="relative h-[30px] overflow-hidden border-y border-[#4A4A4A] bg-[#242424]">
                <div className="page-frame page-frame-dark h-full hatch-pattern opacity-25" />
            </div>
        </section>
    );
};

export default ControlSection;