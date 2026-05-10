import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    author: string;
};

export type BlogPost = BlogPostMeta & {
    contentHtml: string;
};

export function getAllBlogPosts(): BlogPostMeta[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                description: data.description,
                date: data.date,
                category: data.category,
                author: data.author || "CaltAI Team",
            };
        });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        author: data.author || "CaltAI Team",
        contentHtml,
    };
}