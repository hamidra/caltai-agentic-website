"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "Does CaltAI replace our project management tool?",
        answer:
            "No. CaltAI does not replace your project management tool. It works across the tools you already use and helps move the operational work forward, including follow-ups, handoffs, approvals, and status visibility.",
    },
    {
        question: "How long does setup take?",
        answer:
            "For a focused workflow, setup is usually lightweight. We start with your existing process, connect the required tools, define approval rules, and shape the workflow with your team before expanding further.",
    },
    {
        question: "What happens when CaltAI isn’t sure what to do?",
        answer:
            "It asks for review. CaltAI routes uncertain or high-stakes decisions to the right person, shows the context, and waits for approval before taking action.",
    },
    {
        question: "How is my data handled?",
        answer:
            "Your data is used to understand your workflow and support the actions you approve. Access is scoped to the tools and processes needed for the workflow, and human review remains part of the control layer.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative bg-[#FBF9F4]">
            <div className="page-frame min-h-[700px] flex flex-col">
                {/* Main Content */}
                <div className="flex-1 px-[55px] pt-[88px] pb-[50px]">
                    {/* Badge */}
                    <div className="h-[40px] inline-flex items-center gap-2 px-4 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] mb-[90px]">
                        <div className="w-[22px] h-[22px] flex items-center justify-center text-[#5C35F5]">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="11.4375" width="21.6836" height="5.71875" rx="2.85938" fill="#613EE9" />
                                <rect x="4.20312" y="5.71875" width="13.2773" height="5.71875" rx="2.85938" fill="#7F62EA" />
                                <rect x="7.98438" width="5.72" height="5.71875" rx="2.85938" fill="#9D86EB" />
                                <rect x="7.98438" y="17.1562" width="5.72" height="5.71875" rx="2.85938" fill="#BAABED" />
                            </svg>

                        </div>

                        <span className="text-[14px] font-medium text-[#443218] font-inter">
                            Quick answer
                        </span>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-[560px_1fr] gap-[90px] items-start">
                        {/* Left */}
                        <div>
                            <h2 className="text-[30px] font-semibold text-[#443218] leading-[1.18] w-[470px] mb-[66px] font-heading">
                                A few things worth knowing before you book.
                            </h2>

                            <p className="text-[16px] font-normal leading-[1.45] text-[#695A44] w-[390px] font-inter">
                                The questions agencies ask most often. For the longer list, see our full FAQs
                            </p>
                        </div>

                        {/* Right FAQ List */}
                        <div>
                            <div className="border-t border-[#D5D4CF]">
                                {faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <div key={faq.question} className="border-b border-[#D5D4CF]">
                                            <button
                                                type="button"
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className="w-full h-[88px] flex items-center justify-between text-left group"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="text-[20px] font-medium text-[#443218] font-inter">
                                                    {faq.question}
                                                </span>

                                                <span className="relative w-[20px] h-[20px] shrink-0">
                                                    <span className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 bg-[#262626]" />
                                                    <span
                                                        className={`absolute left-1/2 top-1/2 h-[18px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#262626] transition-transform duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"
                                                            }`}
                                                    />
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="pb-[28px] pr-[70px]">
                                                    <p className="text-[16px] font-medium leading-[1.55] text-[#8D8177] font-inter">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Zebra Band */}
            <div className="relative h-[30px] border-t border-[#D5D4CF] border-b bg-[#FBF9F4] overflow-hidden">
                <div className="page-frame h-full hatch-pattern opacity-30" />
            </div>
        </section>
    );
};

export default FAQSection;