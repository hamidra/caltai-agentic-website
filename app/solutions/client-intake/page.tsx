import React from "react";

const handledItems = [
    "Collect client details, goals, and requirements",
    "Request missing files, links, brand assets, and access",
    "Check intake completeness before work starts",
    "Create internal handoff notes for delivery",
    "Keep the client updated without manual chasing",
];

const steps = [
    {
        label: "01",
        title: "Client signs or submits request",
        text: "CaltAI detects the new client or intake trigger from your CRM, form, email, or payment flow.",
    },
    {
        label: "02",
        title: "Context is gathered",
        text: "It pulls together the client’s goals, previous messages, submitted assets, deal notes, and required next steps.",
    },
    {
        label: "03",
        title: "Missing pieces are chased",
        text: "CaltAI drafts or sends follow-ups for missing information, links, approvals, or access based on your rules.",
    },
    {
        label: "04",
        title: "Handoff is prepared",
        text: "Your team gets a clear intake summary, open risks, and next actions before delivery starts.",
    },
];

const ClientIntakePage = () => {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            {/* Hero */}
            <section className="relative">
                <div className="page-frame min-h-[690px] px-[55px] pt-[70px] pb-[72px]">
                    <div className="h-[40px] inline-flex items-center gap-2 px-4 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] mb-[82px]">
                        <div className="w-[22px] h-[22px] flex items-center justify-center text-[#5C35F5]">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <rect x="3" y="4" width="16" height="4" rx="2" fill="#613EE9" />
                                <rect x="3" y="10" width="11" height="4" rx="2" fill="#613EE9" opacity="0.75" />
                                <rect x="3" y="16" width="7" height="3" rx="1.5" fill="#613EE9" opacity="0.55" />
                            </svg>
                        </div>
                        <span className="text-[14px] font-medium text-[#443218] font-sans">
                            Client intake
                        </span>
                    </div>

                    <div className="grid grid-cols-[540px_1fr] gap-[95px] items-start">
                        <div>
                            <h1 className="font-heading text-[56px] leading-[1.08] tracking-[-0.03em] text-[#262626] mb-[38px]">
                                Client intake that does not depend on manual chasing.
                            </h1>

                            <p className="font-sans text-[18px] leading-[1.55] font-medium text-[#8D8177] w-[520px] mb-[44px]">
                                CaltAI collects what is needed, follows up when something is missing,
                                checks readiness, and prepares the handoff so your team starts with the
                                full picture.
                            </p>

                            <div className="flex items-center gap-[16px]">
                                <a
                                    href="#book"
                                    className="h-[46px] px-[26px] rounded-full bg-[#FF5A1F] text-white font-sans text-[16px] font-medium flex items-center justify-center"
                                >
                                    Book a walkthrough
                                </a>

                                <a
                                    href="#how-it-works"
                                    className="h-[46px] px-[24px] rounded-full border border-[#A99D91] text-[#443218] font-sans text-[16px] font-medium flex items-center justify-center"
                                >
                                    See how it works
                                </a>
                            </div>
                        </div>

                        <div className="relative w-[535px] h-[535px] border border-[#BDBDBD] bg-[#F6F3EF] overflow-hidden">
                            <div className="absolute left-0 top-0 h-px w-[757px] origin-top-left rotate-45 bg-[#C4C4C4]" />
                            <div className="absolute right-0 top-0 h-px w-[757px] origin-top-right -rotate-45 bg-[#C4C4C4]" />
                        </div>
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>

            {/* What it handles */}
            <section>
                <div className="page-frame px-[55px] py-[86px] grid grid-cols-[420px_1fr] gap-[110px]">
                    <div>
                        <h2 className="font-heading text-[40px] leading-[1.15] text-[#262626] mb-[28px]">
                            What CaltAI handles in client intake.
                        </h2>
                        <p className="font-sans text-[16px] leading-[1.55] font-medium text-[#8D8177]">
                            Not a form builder. Not another checklist. This is the operational run
                            between “new client” and “ready for delivery.”
                        </p>
                    </div>

                    <div className="border-t border-[#D5D4CF]">
                        {handledItems.map((item) => (
                            <div
                                key={item}
                                className="h-[72px] border-b border-[#D5D4CF] flex items-center gap-[18px]"
                            >
                                <span className="w-[8px] h-[8px] bg-[#FF5A1F] shrink-0" />
                                <span className="font-sans text-[18px] font-semibold text-[#8D8177]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works">
                <div className="page-frame px-[55px] py-[86px]">
                    <div className="mb-[70px]">
                        <h2 className="font-heading text-[40px] leading-[1.15] text-[#262626] mb-[24px]">
                            How the intake run works.
                        </h2>
                        <p className="font-sans text-[16px] leading-[1.55] font-medium text-[#8D8177] w-[560px]">
                            CaltAI follows the same operational loop across use cases: detect,
                            understand, plan, route for approval, execute, and monitor.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 border border-[#D5D4CF]">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className={`min-h-[280px] p-[28px] bg-[#FBF9F4] ${index !== steps.length - 1 ? "border-r border-[#D5D4CF]" : ""
                                    }`}
                            >
                                <div className="font-sans text-[14px] font-semibold text-[#FF5A1F] mb-[42px]">
                                    {step.label}
                                </div>
                                <h3 className="font-heading text-[24px] leading-[1.15] text-[#262626] mb-[22px]">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-[15px] leading-[1.55] font-medium text-[#8D8177]">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>

            {/* CTA */}
            <section id="book">
                <div
                    className="page-frame min-h-[390px] relative overflow-hidden flex flex-col items-center justify-center px-[55px] py-[54px]"
                    style={{
                        backgroundImage: "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                        backgroundSize: "24px 24px",
                    }}
                >
                    <h2 className="font-heading text-[#262626] text-[48px] leading-[1.16] tracking-[-0.02em] text-center mb-[42px]">
                        Want to see client intake running on your workflow?
                    </h2>

                    <div className="flex items-center justify-center gap-[24px]">
                        <a
                            href="#"
                            className="h-[58px] w-[250px] rounded-full bg-[#FF5A1F] text-white flex items-center justify-center text-[20px] font-medium font-sans"
                        >
                            Book a walkthrough
                        </a>

                        <a
                            href="/"
                            className="h-[58px] w-[210px] rounded-full border border-[#8D8177] bg-[#FBF9F4] text-[#443218] flex items-center justify-center text-[20px] font-medium font-sans"
                        >
                            Back to home
                        </a>
                    </div>
                </div>

                <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>
        </main>
    );
};

export default ClientIntakePage;