import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
    id?: string;
    slug: string;
    title: string;
    description: string;
    keyword_principal?: string;
    keywords_secundarias?: string[];
    tipo_articulo?: string;
    cluster?: string;
    fecha?: string;
    autor?: string;
    servicio_asociado?: string;
    estado?: string;
    imagen?: string;
    imagen_alt?: string;
    [key: string]: unknown;
}

export interface Post {
    slug: string;
    frontmatter: PostFrontmatter;
    content: string;
    contentHtml: string;
}

export function getPostSlugs(): string[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
        .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    if (frontmatter.estado !== "publicado") {
        return null;
    }

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        frontmatter,
        content,
        contentHtml,
    };
}

export async function getAllPosts(): Promise<Post[]> {
    const slugs = getPostSlugs();
    const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
    return posts
        .filter((post): post is Post => post !== null)
        .sort((a, b) => (b.frontmatter.fecha ?? "").localeCompare(a.frontmatter.fecha ?? ""));
}

export async function getPostsByCluster(cluster: string): Promise<Post[]> {
    const posts = await getAllPosts();
    return posts.filter((post) => post.frontmatter.cluster === cluster);
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
