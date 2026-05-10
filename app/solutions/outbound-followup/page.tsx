"use client";

import React from "react";

const handledItems = [
    "Reply monitoring and classification",
    "Follow-up drafting based on prospect context",
    "Positive-reply routing to the right person",
    "CRM status updates and next-step tracking",
    "Sequence pause recommendations when intent changes",
];

const flowSteps = [
    {
        title: "Signals detected",
        text: "CaltAI watches replies, opens, clicks, CRM changes, and prospect activity across your outbound stack.",
    },
    {
        title: "Context gathered",
        text: "It connects the signal to the prospect, company, previous messages, offer, and current campaign goal.",
    },
    {
        title: "Next action proposed",
        text: "It drafts the next best follow-up, flags uncertainty, and explains why the action makes sense.",
    },
    {
        title: "Human approves",
        text: "You approve, edit, or decline. Low-risk actions can later become more autonomous.",
    },
];

const OutboundFollowUpPage = () => {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            {/* Hero */}
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-[650px] px-[55px] pt-[72px] pb-[80px]">
                    <div className="h-[40px] inline-flex items-center gap-2 px-4 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] mb-[86px]">
                        <div className="w-[22px] h-[22px] rounded-full bg-[#613EE9]" />
                        <span className="text-[14px] font-medium text-[#443218] font-sans">
                            Outbound follow-up
                        </span>
                    </div>

                    <div className="grid grid-cols-[560px_1fr] gap-[110px] items-start">
                        <div>
                            <h1 className="font-heading text-[56px] leading-[1.08] tracking-[-0.03em] font-semibold text-[#262626] mb-[36px]">
                                Follow-up that does not go cold.
                            </h1>

                            <p className="text-[20px] leading-[1.5] font-medium text-[#8D8177] font-sans w-[520px] mb-[46px]">
                                CaltAI monitors outbound activity, understands what changed, and prepares the next best action so promising conversations do not disappear inside fixed sequences.
                            </p>

                            <div className="flex items-center gap-4">
                                <a
                                    href="#"
                                    className="h-[48px] px-7 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center text-[16px] font-medium font-sans"
                                >
                                    Become a design partner
                                </a>

                                <a
                                    href="#how-it-works"
                                    className="h-[48px] px-7 rounded-full border border-[#8D8177] text-[#443218] flex items-center justify-center text-[16px] font-medium font-sans"
                                >
                                    See how it works
                                </a>
                            </div>
                        </div>

                        <div className="relative w-full h-[460px] border border-[#D5D4CF] bg-[#F6F3EF] overflow-hidden">
                            <div className="absolute inset-0 hatch-pattern opacity-20" />
                            <div className="absolute left-[42px] top-[42px] right-[42px] space-y-4">
                                <div className="h-[68px] border border-[#D5D4CF] bg-[#FBF9F4] px-5 flex items-center justify-between">
                                    <span className="font-sans text-[16px] font-medium text-[#443218]">
                                        Prospect replied
                                    </span>
                                    <span className="text-[#FF5A1F] font-sans text-[14px] font-semibold">
                                        High intent
                                    </span>
                                </div>

                                <div className="h-[68px] border border-[#D5D4CF] bg-[#FBF9F4] px-5 flex items-center justify-between">
                                    <span className="font-sans text-[16px] font-medium text-[#443218]">
                                        Follow-up drafted
                                    </span>
                                    <span className="text-[#8D8177] font-sans text-[14px]">
                                        Needs approval
                                    </span>
                                </div>

                                <div className="h-[68px] border border-[#D5D4CF] bg-[#FBF9F4] px-5 flex items-center justify-between">
                                    <span className="font-sans text-[16px] font-medium text-[#443218]">
                                        CRM updated
                                    </span>
                                    <span className="text-[#8D8177] font-sans text-[14px]">
                                        Next step set
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>

            {/* What it handles */}
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame px-[55px] py-[86px]">
                    <div className="grid grid-cols-[440px_1fr] gap-[110px]">
                        <div>
                            <h2 className="font-heading text-[40px] leading-[1.15] font-semibold text-[#262626] mb-[28px]">
                                What CaltAI handles in outbound follow-up.
                            </h2>

                            <p className="text-[17px] leading-[1.55] font-medium text-[#8D8177] font-sans">
                                It does not blindly run a sequence. It watches what happens, checks the context, and routes the right next action for review.
                            </p>
                        </div>

                        <div className="border-t border-[#D5D4CF]">
                            {handledItems.map((item) => (
                                <div
                                    key={item}
                                    className="h-[72px] border-b border-[#D5D4CF] flex items-center gap-4"
                                >
                                    <span className="w-[8px] h-[8px] bg-[#FF5A1F] shrink-0" />
                                    <span className="font-sans text-[18px] font-semibold text-[#8D8177]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="relative bg-[#242424] text-[#F2EEE9]">
                <div className="page-frame page-frame-dark px-[55px] py-[88px]">
                    <div className="mb-[70px]">
                        <h2 className="font-heading text-[44px] leading-[1.12] tracking-[-0.02em] font-semibold text-[#F2EEE9] mb-[24px]">
                            The outbound loop.
                        </h2>

                        <p className="font-sans text-[17px] leading-[1.55] text-[#F2EEE9]/80 max-w-[650px]">
                            CaltAI turns scattered outbound signals into a controlled operating loop, with approval where it matters.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-5">
                        {flowSteps.map((step, index) => (
                            <div
                                key={step.title}
                                className="min-h-[250px] border border-[#4A4A4A] bg-[#1D1D1D] p-6"
                            >
                                <div className="text-[#FF5A1F] font-sans text-[14px] font-semibold mb-8">
                                    0{index + 1}
                                </div>

                                <h3 className="font-heading text-[24px] leading-[1.15] text-[#F2EEE9] mb-5">
                                    {step.title}
                                </h3>

                                <p className="font-sans text-[15px] leading-[1.55] text-[#F2EEE9]/75">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#4A4A4A] border-b border-[#4A4A4A] bg-[#242424] overflow-hidden">
                    <div className="page-frame page-frame-dark h-full hatch-pattern opacity-25" />
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-[360px] relative overflow-hidden flex flex-col items-center justify-center px-[55px] py-[70px]">
                    <div
                        className="absolute inset-0 opacity-55"
                        style={{
                            backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                            backgroundSize: "24px 24px",
                        }}
                    />

                    <div className="relative z-10 text-center">
                        <h2 className="font-heading text-[48px] leading-[1.14] tracking-[-0.02em] font-semibold text-[#262626] mb-[34px]">
                            Ready to stop losing warm conversations?
                        </h2>

                        <div className="flex items-center justify-center gap-5">
                            <a
                                href="#"
                                className="h-[54px] px-8 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center text-[18px] font-medium font-sans"
                            >
                                Book a walkthrough
                            </a>

                            <a
                                href="#"
                                className="h-[54px] px-8 rounded-full border border-[#8D8177] text-[#443218] flex items-center justify-center text-[18px] font-medium font-sans"
                            >
                                Ask about design partnership
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>
        </main>
    );
};

export default OutboundFollowUpPage;