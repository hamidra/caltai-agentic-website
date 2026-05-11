"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

type BlogIndexClientProps = {
    posts: BlogPostMeta[];
};

const HatchDivider = () => (
    <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
        <div className="page-frame h-full hatch-pattern opacity-30" />
    </div>
);

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

const BlogVisual = ({ category }: { category: string }) => (
    <div className="relative h-full min-h-[210px] overflow-hidden rounded-[8px] border border-[#D5D4CF] bg-[#F6F3EF]">
        <div className="absolute inset-0 hatch-pattern opacity-20" />

        <div className="absolute left-5 top-5 rounded-full bg-[#FF5A1F] px-4 py-2 font-sans text-[14px] font-medium text-white">
            {category}
        </div>

        <div className="absolute bottom-5 left-5 right-5 h-[72px] rounded-[10px] bg-[#FBF9F4]/90" />
        <div className="absolute bottom-[52px] left-9 h-[9px] w-[48%] rounded-full bg-[#D5D4CF]" />
        <div className="absolute bottom-[52px] right-9 h-[9px] w-[24%] rounded-full bg-[#FF5A1F]" />
        <div className="absolute bottom-[31px] left-9 h-[8px] w-[34%] rounded-full bg-[#D5D4CF]" />
    </div>
);

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");

    const sortedPosts = useMemo(() => {
        return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
    }, [posts]);

    const featuredPost = sortedPosts[0];

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(posts.map((post) => post.category).filter(Boolean))
        ).sort();

        return ["All", ...uniqueCategories];
    }, [posts]);

    const filteredPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
            if (featuredPost && post.slug === featuredPost.slug) {
                return false;
            }

            const matchesCategory =
                activeCategory === "All" || post.category === activeCategory;

            const search = query.toLowerCase().trim();

            const matchesSearch =
                search.length === 0 ||
                post.title.toLowerCase().includes(search) ||
                post.description.toLowerCase().includes(search) ||
                post.category.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, query, sortedPosts, featuredPost]);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "CaltAI Blog",
        url: "https://calt.ai/blog",
        description:
            "Practical writing on AI operations, client onboarding, human approval, and operational workflows.",
        publisher: {
            "@type": "Organization",
            name: "CaltAI",
            url: "https://calt.ai",
        },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            url: `https://calt.ai/blog/${post.slug}`,
            author: {
                "@type": "Organization",
                name: post.author || "CaltAI",
            },
            publisher: {
                "@type": "Organization",
                name: "CaltAI",
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://calt.ai/blog/${post.slug}`,
            },
        })),
    };

    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <section className="relative bg-[#FBF9F4]">
                <div className="page-frame">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    {/* Featured latest post */}
                    {featuredPost ? (
                        <section className="border-b border-[#D5D4CF] px-6 py-10 md:px-10 md:py-12 lg:px-[55px] lg:py-[56px]">
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="group grid gap-9 lg:grid-cols-[390px_1fr] lg:gap-[56px]"
                            >
                                <div className="h-[230px] md:h-[260px] lg:h-[230px]">
                                    <BlogVisual category={featuredPost.category} />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <p className="font-sans text-[16px] font-medium text-[#8D8177]">
                                        {formatDate(featuredPost.date)} ·{" "}
                                        <span className="font-semibold text-[#FF5A1F]">Featured</span>
                                    </p>

                                    <h1 className="mt-5 max-w-[820px] font-heading text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#262626] md:text-[38px] lg:text-[38px]">
                                        {featuredPost.title}
                                    </h1>

                                    <p className="mt-5 max-w-[850px] font-sans text-[18px] font-normal leading-[1.65] text-[#695A44] md:text-[20px]">
                                        {featuredPost.description}
                                    </p>

                                    <p className="mt-7 font-sans text-[16px] font-semibold text-[#443218]">
                                        Read featured article →
                                    </p>
                                </div>
                            </Link>
                        </section>
                    ) : (
                        <section className="border-b border-[#D5D4CF] px-6 py-16 text-center md:px-10 lg:px-[55px]">
                            <p className="font-sans text-[18px] font-medium text-[#695A44]">
                                No blog posts yet.
                            </p>
                        </section>
                    )}

                    {/* Search */}
                    <div className="border-b border-[#D5D4CF] px-6 py-7 md:px-10 lg:px-[55px] hatch-pattern">
                        <label htmlFor="blog-search" className="sr-only">
                            Search the CaltAI blog
                        </label>

                        <div className="relative">
                            <svg
                                className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8D8177]"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                                <path
                                    d="M16.5 16.5L21 21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <input
                                id="blog-search"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search the CaltAI blog..."
                                className="h-[52px] w-full rounded-full border border-[#D5D4CF] bg-[#FBF9F4] pl-14 pr-5 font-sans text-[15px] font-medium text-[#443218] outline-none placeholder:text-[#8D8177] focus:border-[#8D8177]"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <nav
                        aria-label="Blog categories"
                        className="border-b border-[#D5D4CF] px-6 py-6 md:px-10 lg:px-[55px]"
                    >
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => {
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        aria-pressed={isActive}
                                        className={`h-[36px] rounded-full border px-5 font-sans text-[15px] font-medium transition-colors ${isActive
                                            ? "border-[#FF5A1F] bg-[#FF5A1F] text-white"
                                            : "border-[#D5D4CF] bg-[#FBF9F4] text-[#695A44] hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Post grid */}
                    <section aria-label="Blog posts">
                        {filteredPosts.length === 0 ? (
                            <div className="px-6 py-20 text-center md:px-10 lg:px-[55px]">
                                <p className="font-sans text-[18px] font-medium text-[#695A44]">
                                    No posts found.
                                </p>
                            </div>
                        ) : (
                            <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
                                {filteredPosts.map((post, index) => (
                                    <article key={post.slug}>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className={`group flex h-full min-h-[560px] flex-col border-b border-[#D5D4CF] bg-[#FBF9F4] p-6 transition-colors hover:bg-[#F6F3EF] md:p-7 lg:p-8 ${index % 3 !== 2 ? "lg:border-r" : ""
                                                } ${index % 2 !== 1 ? "md:border-r lg:border-r-[#D5D4CF]" : ""}`}
                                        >
                                            <div className="relative mb-8 h-[170px] overflow-hidden rounded-[8px] border border-[#D5D4CF] bg-[#F6F3EF]">
                                                <div className="absolute inset-0 hatch-pattern opacity-20" />

                                                <div className="absolute left-5 top-5 rounded-full bg-[#FF5A1F] px-4 py-2 font-sans text-[14px] font-medium text-white">
                                                    {post.category}
                                                </div>

                                                <div className="absolute bottom-5 left-5 right-5 h-[58px] rounded-[10px] bg-[#FBF9F4]/90" />
                                                <div className="absolute bottom-[36px] left-9 h-[8px] w-[42%] rounded-full bg-[#D5D4CF]" />
                                                <div className="absolute bottom-[36px] right-9 h-[8px] w-[22%] rounded-full bg-[#FF5A1F]" />
                                            </div>

                                            <time
                                                dateTime={post.date}
                                                className="font-sans text-[16px] font-medium text-[#8D8177]"
                                            >
                                                {formatDate(post.date)}
                                            </time>

                                            <h2 className="mt-5 min-h-[120px] font-heading text-[30px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#262626]">
                                                {post.title}
                                            </h2>

                                            <p className="mt-5 min-h-[110px] font-sans text-[17px] font-normal leading-[1.6] text-[#695A44]">
                                                {post.description}
                                            </p>

                                            <p className="mt-auto pt-8 font-sans text-[16px] font-semibold text-[#443218]">
                                                Read article →
                                            </p>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>

                    <HatchDivider />

                    <section className="relative overflow-hidden bg-[#F6F3EF] px-6 py-16 text-center md:px-10 lg:px-[55px] lg:py-[78px]">
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#D6D6D6 1.5px, transparent 1.5px)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <div className="relative z-10 mx-auto max-w-[820px]">
                            <h2 className="font-heading text-[38px] font-semibold leading-[1.12] text-[#443218] md:text-[52px]">
                                Want the practical version, not the theory?
                            </h2>

                            <p className="mx-auto mt-6 max-w-[650px] font-sans text-[17px] font-normal leading-[1.65] text-[#695A44] md:text-[18px]">
                                See how CaltAI applies these ideas to post-sales onboarding and real operational workflows.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/solutions/post-sales-onboarding"
                                    className="flex h-[54px] items-center justify-center rounded-full bg-[#FF5A1F] px-9 font-sans text-[17px] font-medium text-white hover:bg-[#E84D14]"
                                >
                                    Explore the use case
                                </Link>

                                <Link
                                    href="/design-partners"
                                    className="flex h-[54px] items-center justify-center rounded-full border border-[#8D8177] bg-[#FBF9F4] px-9 font-sans text-[17px] font-medium text-[#443218] hover:bg-white"
                                >
                                    Become a design partner
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <HatchDivider />
            </section>
        </main>
    );
}