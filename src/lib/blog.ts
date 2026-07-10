import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type BlogPostMeta = {
  title: string;
  seoTitle: string;
  description: string;
  slug: string;
  keyword: string;
  secondaryKeyword: string;
  status: "en_redaccion" | "publicado";
  draft: boolean;
  cluster: string;
  service: string;
  publishedAt: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function readPostFile(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
}

function isPublished(meta: Partial<BlogPostMeta>): meta is BlogPostMeta {
  return (
    meta.status === "publicado" &&
    meta.draft === false &&
    typeof meta.slug === "string" &&
    typeof meta.publishedAt === "string"
  );
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => readPostFile(fileName).data as Partial<BlogPostMeta>)
    .filter(isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = readPostFile(`${slug}.mdx`);
  const meta = data as Partial<BlogPostMeta>;
  if (!isPublished(meta)) return null;

  const processedContent = await remark().use(html).process(content);

  return {
    ...meta,
    contentHtml: processedContent.toString(),
  };
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Madrid",
  }).format(new Date(`${date}T12:00:00+02:00`));
}
