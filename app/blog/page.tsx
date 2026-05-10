import type { Metadata } from "next";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "CaltAI Blog | AI Operations, Client Onboarding, and Workflows",
    description:
        "Field notes from CaltAI on AI operations, post-sales onboarding, human approval, operational workflows, and the work between business tools.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "CaltAI Blog",
        description:
            "Practical writing on AI operations, onboarding, workflow ownership, and human-controlled autonomy.",
        url: "/blog",
        siteName: "CaltAI",
        type: "website",
    },
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return <BlogIndexClient posts={posts} />;
}