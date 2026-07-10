import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
} from "@/lib/posts";
import styles from "../blog.module.css";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.frontmatter.fecha,
      locale: "es_ES",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.fecha,
    dateModified: post.frontmatter.fecha,
    mainEntityOfPage: `https://www.thiasa.es/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "THIASA",
      url: "https://www.thiasa.es",
    },
    publisher: {
      "@type": "Organization",
      name: "THIASA",
      url: "https://www.thiasa.es",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.thiasa.es",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.thiasa.es/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.frontmatter.title,
        item: `https://www.thiasa.es/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F2F1ED]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <div className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <header className="border-b border-slate-200 bg-slate-50 px-6 py-6 sm:px-10">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CalendarDays className="h-4 w-4 text-accent" />
                <time dateTime={post.frontmatter.fecha}>
                  Publicado el {formatDate(post.frontmatter.fecha ?? "")}
                </time>
              </div>
            </header>

            <div
              className={`${styles.content} px-6 py-10 sm:px-10 sm:py-12`}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <aside className="m-6 rounded-2xl bg-[#1D1D1D] p-7 text-white sm:m-10 sm:p-9">
              <h2 className="text-2xl font-extrabold text-white">
                ¿Quieres valorar tu reforma?
              </h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Cuéntanos qué quieres reformar y solicita un presupuesto adaptado
                al estado, los metros y las calidades de tu proyecto.
              </p>
              <a
                href="https://wa.me/34604154746?text=Hola,%20quiero%20solicitar%20un%20presupuesto%20de%20reforma%20en%20Madrid."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white transition hover:bg-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir presupuesto por WhatsApp
              </a>
            </aside>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
