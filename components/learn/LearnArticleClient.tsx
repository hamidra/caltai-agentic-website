"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { LearnPage } from "@/lib/learn";

type LearnArticleClientProps = {
    page: LearnPage;
    pages: LearnPage[];
    previousPage?: LearnPage | null;
    nextPage?: LearnPage | null;
};

export default function LearnArticleClient({
    page,
    pages,
    previousPage,
    nextPage,
}: LearnArticleClientProps) {
    const [query, setQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const groupedPages = useMemo(() => {
        const filteredPages = pages.filter((item) => {
            const search = query.toLowerCase().trim();

            if (!search) return true;

            const sectionText = item.sections
                .map((section) => {
                    return [
                        section.heading,
                        ...section.body,
                        ...(section.bullets || []),
                        section.callout || "",
                    ].join(" ");
                })
                .join(" ");

            return (
                item.title.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search) ||
                sectionText.toLowerCase().includes(search)
            );
        });

        return filteredPages.reduce<Record<string, LearnPage[]>>((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }

            acc[item.category].push(item);
            return acc;
        }, {});
    }, [pages, query]);

    const navigation = (
        <nav aria-label="Learn articles" className="space-y-5">
            {Object.keys(groupedPages).length === 0 ? (
                <p className="font-sans text-[15px] font-medium text-[#8D8177]">
                    No articles found.
                </p>
            ) : (
                Object.entries(groupedPages).map(([category, items]) => (
                    <div key={category}>
                        <p className="mb-1 px-3 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#613EE9]">
                            {category}
                        </p>

                        <div className="space-y-1">
                            {items.map((item) => {
                                const isActive = item.slug === page.slug;

                                return (
                                    <Link
                                        key={item.slug}
                                        href={`/learn/${item.slug}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex min-h-[36px] items-center justify-between rounded-[0px] px-4 py-[8px] font-sans text-[14px] font-medium leading-[1.35] transition-colors ${isActive
                                            ? "bg-[#E9E6E1] text-[#262626]"
                                            : "text-[#695A44] hover:bg-[#FBF9F4] hover:text-[#262626]"
                                            }`}
                                    >
                                        <span>{item.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </nav>
    );

    return (
        <main className="min-h-screen bg-[#FBF9F4] text-[#443218]">
            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame min-h-screen">
                    {/* Mobile fixed search + menu button */}
                    <div className="sticky top-[64px] z-40 border-b border-[#D5D4CF] bg-[#F6F3EF] p-4 lg:hidden">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen((value) => !value)}
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Open learn navigation"
                                className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#D5D4CF] bg-[#FBF9F4] text-[#443218]"
                            >
                                {isMobileMenuOpen ? (
                                    <span className="text-[30px] leading-none text-[#695A44]">
                                        ×
                                    </span>
                                ) : (
                                    <span className="relative h-[24px] w-[24px]">
                                        <span className="absolute left-[3px] top-[3px] h-[18px] w-[18px] border-2 border-[#695A44]" />
                                        <span className="absolute left-[8px] top-[3px] h-[18px] w-px bg-[#695A44]" />
                                    </span>
                                )}
                            </button>

                            <div className="relative flex-1">
                                <label htmlFor="learn-search-mobile" className="sr-only">
                                    Search learn articles
                                </label>

                                <svg
                                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8D8177]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="11"
                                        cy="11"
                                        r="7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M16.5 16.5L21 21"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                <input
                                    id="learn-search-mobile"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search articles"
                                    className="h-[58px] w-full rounded-full border border-[#D5D4CF] bg-[#FBF9F4] pl-14 pr-4 font-sans text-[16px] font-medium text-[#443218] outline-none placeholder:text-[#8D8177] focus:border-[#8D8177]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile drawer */}
                    {isMobileMenuOpen && (
                        <div className="fixed inset-x-0 bottom-0 top-[138px] z-30 border-t border-[#D5D4CF] bg-[#F6F3EF] lg:hidden">
                            <div className="learn-sidebar-scroll h-full overflow-y-auto p-6">
                                {navigation}
                            </div>
                        </div>
                    )}

                    <div className="grid min-h-screen lg:grid-cols-[320px_1fr]">
                        {/* Desktop sidebar */}
                        <aside className="hidden border-[#D5D4CF] bg-[#F6F3EF] lg:sticky lg:top-[64px] lg:block lg:h-[calc(100vh-64px)] lg:overflow-hidden lg:border-r">
                            <div className="flex h-full flex-col">
                                {/* Fixed search area */}
                                <div className="shrink-0 border-b border-[#D5D4CF] bg-[#FBF9F4] px-6 py-3 lg:px-7 lg:py-4 hatch-pattern">
                                    <div className="relative">
                                        <label htmlFor="learn-search-desktop" className="sr-only">
                                            Search learn articles
                                        </label>

                                        <svg
                                            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8D8177]"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                cx="11"
                                                cy="11"
                                                r="7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M16.5 16.5L21 21"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                        <input
                                            id="learn-search-desktop"
                                            value={query}
                                            onChange={(event) => setQuery(event.target.value)}
                                            placeholder="Search articles"
                                            className="h-[52px] w-full rounded-full border border-[#D5D4CF] bg-[#FBF9F4] pl-12 pr-4 font-sans text-[16px] font-medium text-[#443218] outline-none placeholder:text-[#8D8177] focus:border-[#8D8177]"
                                        />
                                    </div>
                                </div>

                                {/* Scrollable navigation only */}
                                <div className="learn-sidebar-scroll flex-1 overflow-y-auto p-6 lg:p-7">
                                    {navigation}
                                </div>
                            </div>
                        </aside>

                        {/* Content */}
                        <article className="bg-[#FBF9F4] lg:p-6">
                            <div className="mx-auto min-h-[calc(100vh-48px)] max-w-[1020px] rounded-none bg-[#FBF9F4] px-6 py-14 md:px-10 md:py-16 lg:px-14 lg:py-16">
                                <header>
                                    <p className="font-sans text-[15px] font-semibold text-[#FF5A1F]">
                                        {page.category}
                                    </p>

                                    <h1 className="mt-8 font-heading text-[42px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#262626] md:text-[42px]">
                                        {page.title}
                                    </h1>

                                    <p className="mt-7 max-w-[780px] font-sans text-[19px] font-normal leading-[1.7] text-[#695A44]">
                                        {page.intro}
                                    </p>
                                </header>

                                <div className="mt-14 space-y-14">
                                    {page.sections.map((section, index) => (
                                        <section
                                            key={section.heading}
                                            className={`${index !== 0 ? "border-t border-[#D5D4CF] pt-14" : ""
                                                }`}
                                        >
                                            <h2 className="font-heading text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#262626] md:text-[36px]">
                                                {section.heading}
                                            </h2>

                                            <div className="mt-6 space-y-5">
                                                {section.body.map((paragraph) => (
                                                    <p
                                                        key={paragraph}
                                                        className="font-sans text-[18px] font-normal leading-[1.75] text-[#695A44]"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>

                                            {section.bullets && (
                                                <ul className="mt-7 space-y-4">
                                                    {section.bullets.map((bullet) => (
                                                        <li
                                                            key={bullet}
                                                            className="flex gap-4 font-sans text-[17px] font-medium leading-[1.6] text-[#695A44]"
                                                        >
                                                            <span className="mt-[10px] h-[7px] w-[7px] shrink-0 bg-[#FF5A1F]" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.callout && (
                                                <div className="relative mt-8 overflow-hidden rounded-[0px] border border-[#D5D4CF] bg-[#F6F3EF] p-6">
                                                    <div className="absolute right-0 top-0 h-[105.6px] w-[816px] hatch-pattern opacity-25" />
                                                    <p className="font-sans text-[18px] font-semibold leading-[1.6] text-[#443218]">
                                                        {section.callout}
                                                    </p>
                                                </div>
                                            )}
                                        </section>
                                    ))}
                                </div>

                                {/* Previous / Next */}
                                <div className="mt-16 flex flex-col gap-4 border-t border-[#D5D4CF] pt-8 sm:flex-row sm:items-center sm:justify-between">
                                    {previousPage ? (
                                        <Link
                                            href={`/learn/${previousPage.slug}`}
                                            className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full border border-[#FB631C] px-6 font-sans text-[16px] font-semibold text-[#FB631C] hover:bg-[#FBEEE9]"
                                        >
                                            <span className="text-[#FB631C]">←</span>
                                            <span>Previous</span>
                                            <span className="hidden text-[14px] font-medium text-[#FB631C] md:inline">
                                                {previousPage.title}
                                            </span>
                                        </Link>
                                    ) : (
                                        <div />
                                    )}

                                    {nextPage ? (
                                        <Link
                                            href={`/learn/${nextPage.slug}`}
                                            className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#613EE9] px-6 font-sans text-[16px] font-semibold text-[#FBF9F4] hover:bg-[#401FBF]"
                                        >
                                            <span>Next</span>
                                            <span className="hidden text-[14px] font-medium md:inline">
                                                {nextPage.title}
                                            </span>
                                            <span>→</span>
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/design-partners"
                                            className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#FF5A1F] px-6 font-sans text-[16px] font-semibold text-white hover:bg-[#E84D14]"
                                        >
                                            Become a design partner →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}