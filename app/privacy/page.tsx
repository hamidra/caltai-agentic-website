import React from "react";
import Link from "next/link";

const sections = [
    {
        title: "1. Information We Collect",
        body: [
            "We collect information you provide directly, information from your use of the Service, and information from connected tools and integrations.",
        ],
        list: [
            "Account information such as name, email address, and organization details.",
            "User content and data submitted through the Service.",
            "Usage data including interactions, logs, and performance metrics.",
            "Information from third-party integrations such as CRM, email, calendar, and other connected systems.",
        ],
    },
    {
        title: "2. How We Use Information",
        body: ["We use collected information to operate, improve, and secure the Service."],
        list: [
            "Provide and maintain the Service.",
            "Process workflows and generate outputs.",
            "Improve system performance and reliability.",
            "Communicate with you about updates and support.",
            "Ensure security and prevent misuse.",
        ],
    },
    {
        title: "3. AI Processing and Outputs",
        body: [
            "CaltAI uses artificial intelligence systems to process data and generate outputs.",
            "Your data may be used to:",
        ],
        list: [
            "Generate recommendations and actions.",
            "Improve model performance and system behavior.",
            "Provide contextual understanding across your workflows.",
        ],
    },
    {
        title: "4. Data Sharing",
        body: ["We do not sell your personal data.", "We may share data with:"],
        list: [
            "Service providers who help operate the platform.",
            "Third-party integrations you connect.",
            "Legal authorities when required by law.",
        ],
    },
    {
        title: "5. Data Retention",
        body: [
            "We retain your data for as long as necessary to provide the Service and fulfill legal obligations.",
            "You may request deletion of your data, subject to legal or operational requirements.",
        ],
    },
    {
        title: "6. Data Security",
        body: [
            "We implement reasonable technical and organizational measures to protect your data.",
            "However, no system is completely secure, and we cannot guarantee absolute security.",
        ],
    },
    {
        title: "7. Your Rights",
        body: ["Depending on your location, you may have rights regarding your data."],
        list: [
            "Access, correct, or delete your information.",
            "Object to or restrict processing.",
            "Request data portability.",
        ],
    },
    {
        title: "8. Cookies and Tracking",
        body: [
            "We may use cookies and similar technologies to improve the Service and understand usage patterns.",
        ],
    },
    {
        title: "9. International Data Transfers",
        body: [
            "Your information may be transferred and processed in countries outside your jurisdiction.",
            "We take steps to ensure appropriate safeguards are in place.",
        ],
    },
    {
        title: "10. Changes to This Policy",
        body: [
            "We may update this Privacy Policy from time to time.",
            "Changes will be posted with an updated effective date.",
        ],
    },
    {
        title: "11. Contact",
        body: ["If you have questions about this Privacy Policy, contact us at support@calt.ai."],
    },
];

export default function PrivacyPage() {
    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    <div className="px-[55px] pb-[70px] pt-[72px]">
                        <div className="mb-[72px] inline-flex h-[40px] items-center gap-2 rounded-full border border-[#CDBBFF] bg-[#FBF9F4] pr-4 pl-2">
                            <div className="flex h-[22px] w-[22px] items-center justify-center text-[#5C35F5]">
                                <svg height="22" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.48438 0C9.46933 8.90202e-05 11.3727 0.788845 12.7764 2.19238C14.1801 3.5961 14.9687 5.5002 14.9688 7.48535C14.9687 9.47038 14.18 11.3737 12.7764 12.7773C11.3727 14.181 9.4694 14.9696 7.48438 14.9697V9.98047C8.86206 9.98029 9.97931 8.86304 9.97949 7.48535C9.97949 6.19356 8.99732 5.13076 7.73926 5.00293L7.48438 4.99023V0Z" fill="url(#paint0_linear_1678_8037)" />
                                    <path d="M7.48438 5.03125C5.49923 5.03125 3.59512 5.81992 2.19141 7.22363C0.787868 8.62725 -0.000887518 10.5307 -0.000976562 12.5156C-0.000977162 14.5008 0.787695 16.4049 2.19141 17.8086C3.59512 19.2123 5.49923 20.001 7.48438 20.001V15.0107C6.10642 15.0107 4.98926 13.8936 4.98926 12.5156C4.98943 11.2241 5.97072 10.1621 7.22852 10.0342L7.48438 10.0205V5.03125Z" fill="url(#paint1_linear_1678_8037)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1678_8037" x1="11.2266" y1="0" x2="11.2266" y2="14.9697" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FB631C" />
                                            <stop offset="1" stop-color="#FB631C" stop-opacity="0.6" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1678_8037" x1="3.7417" y1="5.03125" x2="3.7417" y2="20.001" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FB631C" stop-opacity="0.8" />
                                            <stop offset="1" stop-color="#FB631C" stop-opacity="0.3" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="font-sans text-[14px] font-medium text-[#443218]">
                                Privacy Terms
                            </span>
                        </div>

                        <div className="grid grid-cols-[470px_1fr] gap-[120px]">
                            <div>
                                <h1 className="font-heading text-[56px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#443218]">
                                    Privacy Policy
                                </h1>

                                <p className="mt-[28px] font-sans text-[18px] font-normal leading-[1.5] text-[#695A44]">
                                    Effective Date: 20 Oct 2025
                                </p>
                            </div>

                            <div className="max-w-[650px] pt-[8px]">
                                <p className="font-sans text-[18px] font-normal leading-[1.6] text-[#695A44]">
                                    This Privacy Policy explains how CaltAI collects, uses, and protects your
                                    information when you use our Service.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-[#D5D4CF]" />

                    <div className="grid grid-cols-[300px_1fr] gap-[110px] px-[55px] py-[72px]">
                        <aside className="hidden lg:block">
                            <div className="sticky top-10 border-t border-[#D5D4CF] pt-5">
                                <p className="font-sans text-[15px] font-normal leading-[1.6] text-[#695A44]">
                                    Learn how your data is handled when using CaltAI.
                                </p>

                                <div className="mt-8 flex gap-4 font-sans text-[15px] font-normal text-[#443218]">
                                    <Link href="/" className="underline underline-offset-4">
                                        Home
                                    </Link>
                                    <Link href="/terms" className="underline underline-offset-4">
                                        Terms
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        <div className="max-w-[780px]">
                            <div className="space-y-[46px]">
                                {sections.map((section) => (
                                    <section key={section.title} className="border-t border-[#D5D4CF] pt-[28px]">
                                        <h2 className="font-heading text-[28px] font-semibold leading-[1.2] text-[#443218]">
                                            {section.title}
                                        </h2>

                                        {section.body && (
                                            <div className="mt-[18px] space-y-[16px]">
                                                {section.body.map((p) => (
                                                    <p
                                                        key={p}
                                                        className="font-sans text-[16px] font-normal leading-[1.7] text-[#695A44]"
                                                    >
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                        )}

                                        {section.list && (
                                            <ul className="mt-[18px] space-y-[10px]">
                                                {section.list.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 font-sans text-[16px] font-normal leading-[1.6] text-[#695A44]"
                                                    >
                                                        <span className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-[#FF5A1F]" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </section>
                                ))}
                            </div>

                            <div className="mt-[64px] border-t border-[#D5D4CF] pt-[26px]">
                                <p className="font-sans text-[15px] font-normal text-[#695A44]">
                                    © 2026 CaltAI Inc. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </section>
        </main>
    );
}