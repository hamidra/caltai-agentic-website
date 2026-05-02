import React from "react";
import Link from "next/link";

const sections = [
    {
        title: "1. Eligibility and Acceptance",
        body: [
            "You must be at least eighteen (18) years old and have the legal authority to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.",
        ],
    },
    {
        title: "2. Account Registration and Security",
        body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify CaltAI immediately of any unauthorized use or security breach.",
            "CaltAI is not responsible for losses caused by unauthorized access resulting from your failure to safeguard credentials.",
        ],
    },
    {
        title: "3. License and Acceptable Use",
        subsections: [
            {
                title: "3.1 License Grant",
                body: [
                    "Subject to these Terms, CaltAI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal or internal business purposes.",
                ],
            },
            {
                title: "3.2 Prohibited Use",
                body: ["You may not:"],
                list: [
                    "Copy, modify, distribute, or create derivative works of the Service.",
                    "Reverse engineer, decompile, or attempt to extract source code.",
                    "Use the Service to build or train competing products or services.",
                    "Upload unlawful, infringing, misleading, or harmful content.",
                    "Interfere with or disrupt the integrity or performance of the Service.",
                ],
            },
        ],
    },
    {
        title: "4. User Content and Data",
        body: [
            "You retain ownership of content you submit to the Service (“User Content”). By using the Service, you grant CaltAI a limited right to host, process, store, and analyze User Content solely to provide and improve the Service.",
            "You are solely responsible for the legality, accuracy, and appropriateness of your User Content.",
        ],
    },
    {
        title: "5. AI-Generated Outputs and Assumption of Risk",
        body: [
            "The Service uses artificial intelligence systems that generate automated outputs.",
            "You acknowledge and agree that:",
        ],
        list: [
            "AI-generated outputs may be inaccurate, incomplete, misleading, or inappropriate.",
            "CaltAI does not guarantee correctness, reliability, or suitability of any output.",
            "The Service does not provide legal, financial, medical, tax, or professional advice.",
            "You are solely responsible for reviewing, validating, and deciding whether to rely on any AI-generated output.",
            "You assume all risks arising from your use of the Service, including decisions made, actions taken, or outcomes resulting from reliance on AI-generated outputs.",
        ],
    },
    {
        title: "6. Fees and Payments",
        body: [
            "Certain features may require payment. All fees are non-refundable except where required by law. CaltAI may modify pricing with advance notice before a billing cycle renewal.",
            "Failure to pay may result in suspension or termination of access.",
        ],
    },
    {
        title: "7. Third-Party Services",
        body: [
            "The Service may integrate with third-party services. CaltAI does not control and is not responsible for third-party products, content, or practices. Your use of third-party services is governed by their respective terms.",
        ],
    },
    {
        title: "8. Confidentiality",
        body: [
            "Each party agrees to protect the other’s confidential information and not disclose it except as permitted by these Terms or required by law.",
        ],
    },
    {
        title: "9. Disclaimers",
        body: [
            "The service is provided “as is” and “as available.”",
            "To the maximum extent permitted by law, CaltAI disclaims all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
            "CaltAI does not warrant that the service will be error-free, uninterrupted, or meet your requirements.",
        ],
    },
    {
        title: "10. Limitation of Liability",
        body: [
            "To the maximum extent permitted by applicable law:",
            "CaltAI shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, revenue, data, or business opportunities.",
            "CaltAI’s total aggregate liability arising out of or relating to the service shall not exceed the greater of one hundred US dollars ($100) or the total fees paid by you to CaltAI in the twelve (12) months preceding the claim.",
        ],
    },
    {
        title: "11. Indemnification",
        body: [
            "You agree to defend, indemnify, and hold harmless CaltAI and its officers, directors, employees, and affiliates from any claims, damages, losses, liabilities, and expenses arising from:",
        ],
        list: [
            "Your use of the Service.",
            "Your User Content.",
            "Your violation of these Terms or applicable laws.",
        ],
    },
    {
        title: "12. Termination",
        body: [
            "CaltAI may suspend or terminate your access at any time for any reason, including violation of these Terms. Upon termination, your right to use the Service immediately ceases.",
            "Sections that by their nature should survive termination shall survive.",
        ],
    },
    {
        title: "13. Governing Law and Jurisdiction",
        body: [
            "These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of laws principles.",
            "You agree that any dispute arising out of or relating to these Terms or the Service shall be brought exclusively in the state or federal courts located in Delaware, and you consent to the personal jurisdiction and venue of such courts.",
        ],
    },
    {
        title: "14. Changes to These Terms",
        body: [
            "CaltAI may modify these Terms from time to time. Material changes will be posted with an updated effective date. Continued use of the Service constitutes acceptance of the revised Terms.",
        ],
    },
    {
        title: "15. Miscellaneous",
        body: [
            "These Terms constitute the entire agreement between you and CaltAI regarding the Service.",
            "If any provision is held unenforceable, the remaining provisions remain in effect.",
            "You may not assign these Terms without prior written consent from CaltAI.",
        ],
    },
];

export default function TermsPage() {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    <div className="h-[24px] w-full overflow-hidden border-b border-[#D5D4CF] sm:h-[30px]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    <div className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-[55px] lg:pb-[70px] lg:pt-[72px]">
                        <div className="mb-10 inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] px-4 sm:mb-14 lg:mb-[72px]">
                            <div className="flex h-[20px] w-[20px] items-center justify-center text-[#5C35F5]">
                                <svg width="22" height="20" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24.8915" height="7.33333" rx="3.66667" fill="#613EE9" />
                                    <rect x="6.88281" y="7.33398" width="11.1252" height="7.33333" rx="3.66667" fill="#9077ED" />
                                    <rect x="8.77734" y="14.666" width="7.33494" height="7.33333" rx="3.66667" fill="#D0C3F1" />
                                </svg>
                            </div>
                            <span className="font-sans text-[14px] font-medium text-[#443218]">
                                Legal Terms
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[470px_1fr] lg:gap-[120px]">
                            <div>
                                <h1 className="font-heading text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#443218] sm:text-[50px] lg:text-[56px]">
                                    Terms of Service
                                </h1>

                                <p className="mt-5 font-sans text-[16px] font-normal leading-[1.5] text-[#695A44] sm:mt-[28px] sm:text-[18px]">
                                    Effective Date: 20 Oct 2025
                                </p>
                            </div>

                            <div className="max-w-[650px] lg:pt-[8px]">
                                <p className="font-sans text-[16px] font-normal leading-[1.65] text-[#695A44] sm:text-[18px]">
                                    These Terms of Service (“Terms”) govern your access to and use of
                                    CaltAI’s websites, applications, APIs, and related services
                                    (collectively, the “Service”). The Service is operated by CaltAI
                                    (“CaltAI,” “we,” “us,” or “our”).
                                </p>

                                <p className="mt-[22px] font-sans text-[16px] font-medium leading-[1.65] text-[#FB631C] sm:text-[18px]">
                                    By accessing or using the Service, you agree to be bound by these
                                    Terms. If you do not agree, do not use the Service.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-[#D5D4CF]" />

                    <div className="px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[260px_1fr] lg:gap-[80px] lg:px-[55px] lg:py-[72px] xl:grid-cols-[300px_1fr] xl:gap-[110px]">
                        <div>
                            <div className="space-y-9 sm:space-y-[46px]">
                                {sections.map((section) => (
                                    <section key={section.title} className=" pt-6 sm:pt-[28px]">
                                        <h2 className="font-heading text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#443218] sm:text-[28px]">
                                            {section.title}
                                        </h2>

                                        {"body" in section && section.body && (
                                            <div className="mt-[18px] space-y-[14px] sm:space-y-[16px]">
                                                {section.body.map((paragraph) => (
                                                    <p
                                                        key={paragraph}
                                                        className="font-sans text-[15px] font-normal leading-[1.75] text-[#695A44] sm:text-[16px]"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        )}

                                        {"list" in section && section.list && (
                                            <ul className="mt-[18px] space-y-[10px]">
                                                {section.list.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 font-sans text-[15px] font-normal leading-[1.65] text-[#695A44] sm:text-[16px]"
                                                    >
                                                        <span className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {"subsections" in section && section.subsections && (
                                            <div className="mt-[22px] space-y-[26px] sm:space-y-[30px]">
                                                {section.subsections.map((subsection) => (
                                                    <div key={subsection.title}>
                                                        <h3 className="font-sans text-[17px] font-semibold text-[#443218] sm:text-[18px]">
                                                            {subsection.title}
                                                        </h3>

                                                        {subsection.body && (
                                                            <div className="mt-[12px] space-y-[14px]">
                                                                {subsection.body.map((paragraph) => (
                                                                    <p
                                                                        key={paragraph}
                                                                        className="font-sans text-[15px] font-normal leading-[1.75] text-[#695A44] sm:text-[16px]"
                                                                    >
                                                                        {paragraph}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {subsection.list && (
                                                            <ul className="mt-[14px] space-y-[10px]">
                                                                {subsection.list.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="flex gap-3 font-sans text-[15px] font-normal leading-[1.65] text-[#695A44] sm:text-[16px]"
                                                                    >
                                                                        <span className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </section>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="relative h-[24px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4] sm:h-[30px]">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>
        </main>
    );
}