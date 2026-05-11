import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnArticleClient from "@/components/learn/LearnArticleClient";
import { getAllLearnPages, getLearnPageBySlug } from "@/lib/learn";

type LearnArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return getAllLearnPages().map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({
    params,
}: LearnArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getLearnPageBySlug(slug);

    if (!page) {
        return {
            title: "Learn CaltAI",
        };
    }

    return {
        title: `${page.title} | Learn CaltAI`,
        description: page.description,
        alternates: {
            canonical: `/learn/${page.slug}`,
        },
        openGraph: {
            title: page.title,
            description: page.description,
            url: `/learn/${page.slug}`,
            siteName: "CaltAI",
            type: "article",
        },
    };
}

export default async function LearnArticlePage({
    params,
}: LearnArticlePageProps) {
    const { slug } = await params;
    const page = getLearnPageBySlug(slug);

    if (!page) {
        notFound();
    }

    const pages = getAllLearnPages();
    const currentIndex = pages.findIndex((item) => item.slug === page.slug);

    const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
    const nextPage =
        currentIndex >= 0 && currentIndex < pages.length - 1
            ? pages[currentIndex + 1]
            : null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: page.title,
        description: page.description,
        url: `https://calt.ai/learn/${page.slug}`,
        provider: {
            "@type": "Organization",
            name: "CaltAI",
            url: "https://calt.ai",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <LearnArticleClient
                page={page}
                pages={pages}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </>
    );
}