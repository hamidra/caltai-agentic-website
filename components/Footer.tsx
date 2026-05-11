"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith("/learn")) {
        return null;
    }

    const groups = [
        {
            title: "Product",
            links: [
                ["Product", "/#product"],
                ["How it works", "/#how-it-works"],
                ["Control", "/#control"],
                ["Book a demo", "/get-started?mode=demo"],
            ],
        },
        {
            title: "Solutions",
            links: [
                ["Post-sales onboarding", "/solutions/post-sales-onboarding"],
                ["Client intake", "/solutions/client-intake"],
                ["Lead lifecycle", "/solutions/lead-lifecycle"],
                ["Outbound follow-up", "/solutions/outbound-followup"],
            ],
        },
        {
            title: "Resources",
            links: [
                ["Blog", "/blog"],
                ["Learn", "/learn/start-here"],
            ],
        },
        {
            title: "Company",
            links: [
                ["About us", "/about"],
                ["Design partnership", "/design-partners"],
            ],
        },
        {
            title: "Legal",
            links: [
                ["Terms", "/terms"],
                ["Privacy", "/privacy"],
            ],
        },
    ];

    return (
        <footer className="relative bg-[#242424] text-[#F2EEE9]">
            <div className="page-frame page-frame-dark border-t border-[#4A4A4A]">
                <div className="grid grid-cols-1 gap-10 px-5 py-10 sm:px-6 md:px-8 lg:grid-cols-[1fr_760px] lg:gap-[90px] lg:px-[55px] lg:py-[58px]">
                    <div>
                        <Link href="/" aria-label="CaltAI home" className="inline-flex">
                            <svg
                                width="172"
                                height="144"
                                viewBox="0 0 172 144"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[56px] w-auto md:h-[78px] lg:h-[86px]"
                            >
                                <path
                                    d="M71.7932 27.6128C60.0758 27.6128 48.8385 32.2676 40.553 40.553C32.2676 48.8385 27.6128 60.0758 27.6128 71.7932C27.6128 83.5106 32.2676 94.7479 40.553 103.033C48.8385 111.319 60.0758 115.974 71.7932 115.974V143.586C52.7525 143.586 34.4916 136.022 21.0278 122.559C7.56394 109.095 -2.07166e-09 90.8339 0 71.7932C1.43754e-06 52.7525 7.56394 34.4916 21.0278 21.0278C34.4916 7.56394 52.7525 0 71.7932 0V27.6128Z"
                                    fill="#FA9063"
                                />
                                <path
                                    d="M99.4135 0C99.4135 5.8018 100.556 11.5467 102.777 16.9069C104.997 22.2671 108.251 27.1376 112.354 31.2402C116.456 35.3427 121.327 38.597 126.687 40.8173C132.047 43.0375 137.792 44.1804 143.594 44.1804V71.7932C124.553 71.7932 106.292 64.2293 92.8286 50.7654C79.3647 37.3016 71.8008 19.0407 71.8008 0H99.4135Z"
                                    fill="#F8B89E"
                                />
                                <path
                                    d="M171.207 143.587H143.594V99.4067C137.792 99.4067 132.047 100.55 126.687 102.77C121.327 104.99 116.456 108.244 112.354 112.347C108.251 116.449 104.997 121.32 102.777 126.68C100.556 132.04 99.4135 137.785 99.4135 143.587H71.8008C71.8008 124.546 79.3647 106.286 92.8285 92.8217C106.292 79.3579 124.553 71.7939 143.594 71.7939H171.207V143.587Z"
                                    fill="#FC9E75"
                                />
                                <path
                                    d="M143.602 27.6172H171.214V44.1848H143.602V27.6172Z"
                                    fill="#F8CDBA"
                                />
                            </svg>
                        </Link>

                        <p className="mt-5 max-w-[430px] font-inter text-[17px] font-normal leading-[1.55] text-[#D7C1A4] md:text-[16px]">
                            An operations layer that runs client onboarding, follow-up, intake,
                            and lifecycle work across your tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 font-inter md:grid-cols-3 lg:grid-cols-5 lg:gap-[34px]">
                        {groups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-[14px] font-semibold text-[#F2EEE9]">
                                    {group.title}
                                </h3>

                                <div className="mt-4 flex flex-col gap-3 text-[13px] font-normal text-[#D7C1A4]">
                                    {group.links.map(([label, href]) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-[#4A4A4A] px-5 py-5 sm:px-6 md:px-8 lg:px-[55px]">
                    <div className="flex flex-col gap-5 font-inter text-[13px] font-normal text-[#D7C1A4] sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © 2026 CaltAI Inc. All rights reserved. Built on the beautiful 🌍 by Humans.
                        </p>

                        <div className="flex items-center gap-5">
                            <a
                                href="https://x.com/AI_Calt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-white"
                                aria-label="X"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2H21.5l-7.19 8.214L22.8 22h-6.64l-5.2-6.8L4.8 22H1.5l7.7-8.8L1.2 2h6.8l4.7 6.2L18.244 2zm-2.33 18h1.85L7.92 4H5.94l9.974 16z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/calt-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.98 3.5C4.98 5 3.87 6.1 2.49 6.1 1.1 6.1 0 5 0 3.5 0 2 1.1.9 2.49.9c1.38 0 2.49 1.1 2.49 2.6zM.24 8.98h4.5V24H.24V8.98zM8.22 8.98h4.31v2.05h.06c.6-1.14 2.06-2.35 4.24-2.35 4.54 0 5.38 2.99 5.38 6.88V24h-4.5v-7.61c0-1.82-.03-4.16-2.53-4.16-2.53 0-2.92 1.98-2.92 4.02V24H8.22V8.98z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[30px] overflow-hidden border-y border-[#4A4A4A] bg-[#242424]">
                <div className="page-frame page-frame-dark h-full hatch-pattern opacity-25" />
            </div>
        </footer>
    );
}