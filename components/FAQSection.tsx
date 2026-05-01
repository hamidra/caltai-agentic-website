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
            <div className="page-frame flex min-h-[700px] flex-col">
                <div className="flex-1 px-5 pb-[48px] pt-[64px] sm:px-6 md:px-10 md:pt-[76px] lg:px-[55px] lg:pb-[50px] lg:pt-[88px]">
                    <div className="mb-[56px] inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 md:mb-[72px] lg:mb-[90px]">
                        <div className="flex h-[22px] w-[22px] items-center justify-center text-[#5C35F5]">
                            <svg
                                width="22"
                                height="23"
                                viewBox="0 0 22 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="11.4375" width="21.6836" height="5.71875" rx="2.85938" fill="#613EE9" />
                                <rect x="4.20312" y="5.71875" width="13.2773" height="5.71875" rx="2.85938" fill="#7F62EA" />
                                <rect x="7.98438" width="5.72" height="5.71875" rx="2.85938" fill="#9D86EB" />
                                <rect x="7.98438" y="17.1562" width="5.72" height="5.71875" rx="2.85938" fill="#BAABED" />
                            </svg>
                        </div>

                        <span className="font-inter text-[14px] font-medium text-[#443218]">
                            Quick answer
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[440px_1fr] lg:gap-[90px] xl:grid-cols-[560px_1fr]">
                        <div>
                            <h2 className="font-heading max-w-[470px] text-[28px] font-semibold leading-[1.18] text-[#443218] md:text-[30px]">
                                A few things worth knowing before you book.
                            </h2>

                            <p className="font-inter mt-6 max-w-[390px] text-[16px] font-normal leading-[1.45] text-[#695A44] lg:mt-[66px]">
                                The questions agencies ask most often. For the longer list, see our full FAQs
                            </p>
                        </div>

                        <div>
                            <div className="border-t border-[#D5D4CF]">
                                {faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <div key={faq.question} className="border-b border-[#D5D4CF]">
                                            <button
                                                type="button"
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className="group flex min-h-[78px] w-full items-center justify-between gap-6 py-5 text-left md:min-h-[88px] md:py-0"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="font-inter text-[17px] font-medium leading-[1.35] text-[#443218] md:text-[20px]">
                                                    {faq.question}
                                                </span>

                                                <span className="relative h-[20px] w-[20px] shrink-0">
                                                    <span className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 bg-[#262626]" />
                                                    <span
                                                        className={`absolute left-1/2 top-1/2 h-[18px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#262626] transition-transform duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"
                                                            }`}
                                                    />
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="pb-[26px] pr-0 md:pr-[70px]">
                                                    <p className="font-inter text-[15px] font-normal leading-[1.6] text-[#695A44] md:text-[16px]">
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

            <div className="relative h-[30px] overflow-hidden border-b border-t border-[#D5D4CF] bg-[#FBF9F4]">
                <div className="page-frame h-full hatch-pattern opacity-30" />
            </div>
        </section>
    );
};

export default FAQSection;