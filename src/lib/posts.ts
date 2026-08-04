import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

function toHeadingId(value: string): string {
    let decodedValue = value;

    try {
        decodedValue = decodeURIComponent(value);
    } catch {
        // Keep the original value if a malformed sequence appears in authored content.
    }

    return decodedValue
        .replace(/<[^>]+>/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

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
    fecha_modificacion?: string;
    autor?: string;
    servicio_asociado?: string;
    estado?: string;
    imagen?: string;
    imagen_alt?: string;
    faqs?: Array<{
        question: string;
        answer: string;
    }>;
    [key: string]: unknown;
}

export interface Post {
    slug: string;
    frontmatter: PostFrontmatter;
    content: string;
    contentHtml: string;
    readingTime: number;
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

    const processedContent = await remark().use(remarkGfm).use(html).process(content);
    const contentHtml = processedContent
        .toString()
        .replace(/<h2>(.*?)<\/h2>/g, (_, heading: string) => {
            return `<h2 id="${toHeadingId(heading)}">${heading}</h2>`;
        })
        .replace(/href="#([^"]+)"/g, (_, anchor: string) => {
            return `href="#${toHeadingId(anchor)}"`;
        });
    const readingTime = Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 210));

    return {
        slug,
        frontmatter,
        content,
        contentHtml,
        readingTime,
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

const categoryNames: Record<string, string> = {
    presupuesto: "Precios y presupuestos",
    educativo: "Guías y trámites",
    comercial: "Servicios y proceso",
    comparativo: "Comparativas y dudas",
    local: "Zonas de Madrid",
};

export function categoryLabel(tipo?: string): string {
    return categoryNames[tipo ?? ""] ?? "Reformas";
}

/**
 * Selecciona los artículos relacionados siguiendo la prioridad de
 * `docs/seo/enlaces-internos.md`: primero el mismo cluster, después el mismo
 * pilar de servicio, después los enlaces editoriales del calendario y, por
 * último, lo más reciente para no dejar ningún artículo sin salida.
 *
 * El cluster va por delante de los enlaces editoriales a propósito: esos ya
 * aparecen dentro del texto, y así el bloque final aporta destinos nuevos en
 * lugar de repetir los mismos artículos.
 */
export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
    const editorialSlugs = new Set(
        (Array.isArray(post.frontmatter.enlaces_internos) ? post.frontmatter.enlaces_internos : [])
            .filter((link): link is string => typeof link === "string" && link.startsWith("/blog/"))
            .map((link) => link.replace("/blog/", "")),
    );

    const priority = (candidate: Post): number => {
        if (candidate.frontmatter.cluster === post.frontmatter.cluster) return 0;
        if (candidate.frontmatter.servicio_asociado === post.frontmatter.servicio_asociado) return 1;
        if (editorialSlugs.has(candidate.slug)) return 2;
        return 3;
    };

    const posts = await getAllPosts();
    return posts
        .filter((candidate) => candidate.slug !== post.slug)
        .sort(
            (a, b) =>
                priority(a) - priority(b) ||
                (b.frontmatter.fecha ?? "").localeCompare(a.frontmatter.fecha ?? ""),
        )
        .slice(0, limit);
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
