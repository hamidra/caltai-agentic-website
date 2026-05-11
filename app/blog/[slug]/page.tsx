import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

type BlogArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const posts = getAllBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const post = await getBlogPostBySlug(slug);

        return {
            title: `${post.title} | CaltAI Blog`,
            description: post.description,
            alternates: {
                canonical: `/blog/${post.slug}`,
            },
            openGraph: {
                title: post.title,
                description: post.description,
                url: `/blog/${post.slug}`,
                siteName: "CaltAI",
                type: "article",
                publishedTime: post.date,
                authors: [post.author],
            },
        };
    } catch {
        return {
            title: "Blog post not found | CaltAI",
        };
    }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = await params;

    let post;

    try {
        post = await getBlogPostBySlug(slug);
    } catch {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Organization",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "CaltAI",
            url: "https://calt.ai",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://calt.ai/blog/${post.slug}`,
        },
    };

    return (
        <main className="bg-[#FBF9F4] text-[#443218]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <article className="relative bg-[#FBF9F4]">
                <div className="page-frame">
                    <div className="h-[30px] w-full overflow-hidden border-b border-[#D5D4CF]">
                        <div className="h-full w-full hatch-pattern opacity-40" />
                    </div>

                    <div className="px-6 pb-14 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-[55px] lg:pb-[86px] lg:pt-[82px]">
                        <Link
                            href="/blog"
                            className="font-sans text-[16px] font-semibold text-[#695A44]"
                        >
                            ← Back to blog
                        </Link>

                        <div className="mt-12 max-w-[900px]">
                            <p className="font-sans text-[15px] font-semibold text-[#FF5A1F]">
                                {post.category} ·{" "}
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </p>

                            <h1 className="mt-8 font-heading text-[44px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#443218] md:text-[58px] lg:text-[68px]">
                                {post.title}
                            </h1>

                            <p className="mt-8 max-w-[760px] font-sans text-[20px] font-normal leading-[1.65] text-[#695A44]">
                                {post.description}
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
                        <div className="h-full w-full hatch-pattern opacity-30" />
                    </div>

                    <div className="px-6 py-16 md:px-10 md:py-20 lg:px-[55px] lg:py-[82px]">
                        <div
                            className="prose prose-lg max-w-[760px] prose-headings:font-heading prose-headings:text-[#443218] prose-p:font-sans prose-p:text-[#695A44] prose-p:leading-[1.75] prose-li:text-[#695A44] prose-strong:text-[#443218]"
                            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                        />
                    </div>
                </div>

                <div className="relative h-[30px] overflow-hidden border-y border-[#D5D4CF] bg-[#FBF9F4]">
                    <div className="page-frame h-full hatch-pattern opacity-30" />
                </div>
            </article>
        </main>
    );
}