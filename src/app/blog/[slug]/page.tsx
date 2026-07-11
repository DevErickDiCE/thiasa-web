import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";
import { editorialSans, editorialSerif } from "../fonts";
import styles from "../blog.module.css";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.frontmatter.fecha,
      locale: "es_ES",
      images: post.frontmatter.imagen
        ? [{ url: post.frontmatter.imagen, width: 1536, height: 1024, alt: post.frontmatter.imagen_alt }]
        : undefined,
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
    image: post.frontmatter.imagen ? `https://www.thiasa.es${post.frontmatter.imagen}` : undefined,
    datePublished: post.frontmatter.fecha,
    dateModified: post.frontmatter.fecha,
    mainEntityOfPage: `https://www.thiasa.es/blog/${post.slug}`,
    author: { "@type": "Organization", name: "THIASA", url: "https://www.thiasa.es" },
    publisher: { "@type": "Organization", name: "THIASA", url: "https://www.thiasa.es" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.thiasa.es" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.thiasa.es/blog" },
      { "@type": "ListItem", position: 3, name: post.frontmatter.title, item: `https://www.thiasa.es/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Navbar />
      <main className={`${styles.articlePage} ${editorialSerif.variable} ${editorialSans.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        <header className={styles.articleHeader}>
          <div className={styles.articleNav}>
            <Link href="/blog"><ArrowLeft aria-hidden="true" /> Cuaderno de obra</Link>
            <span>THIASA / Madrid</span>
          </div>
          <div className={styles.articleHeading}>
            <p className={styles.eyebrow}>{post.frontmatter.tipo_articulo === "educativo" ? "Guía y trámites" : "Precios y presupuestos"}</p>
            <h1>{post.frontmatter.title}</h1>
            <p className={styles.articleDek}>{post.frontmatter.description}</p>
            <div className={styles.byline}>
              <span>Por THIASA</span>
              <time dateTime={post.frontmatter.fecha}>{formatDate(post.frontmatter.fecha ?? "")}</time>
              <span><Clock3 aria-hidden="true" /> {post.readingTime} min de lectura</span>
            </div>
          </div>
        </header>

        {post.frontmatter.imagen ? (
          <figure className={styles.articleHero}>
            <Image
              src={post.frontmatter.imagen}
              alt={post.frontmatter.imagen_alt ?? post.frontmatter.title}
              fill
              priority
              sizes="100vw"
              className={styles.coverImage}
            />
            <figcaption>
              <span>Cuaderno de obra · 2026</span>
              <span>{post.frontmatter.imagen_alt}</span>
            </figcaption>
          </figure>
        ) : null}

        <div className={styles.articleLayout}>
          <aside className={styles.articleAside}>
            <span className={styles.asideRule} />
            <p>Una guía de THIASA</p>
            <strong>Reformas integrales y rehabilitación en Madrid.</strong>
            <a href="https://wa.me/34604154746?text=Hola,%20quiero%20solicitar%20un%20presupuesto%20de%20reforma%20en%20Madrid." target="_blank" rel="noopener noreferrer">
              Consultar proyecto <ArrowUpRight aria-hidden="true" />
            </a>
          </aside>

          <article className={styles.articlePaper}>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            <aside className={styles.articleCta}>
              <div>
                <p>Tu proyecto, bien planteado desde el principio</p>
                <h2>¿Quieres poner números reales a tu reforma?</h2>
              </div>
              <a href="https://wa.me/34604154746?text=Hola,%20quiero%20solicitar%20un%20presupuesto%20de%20reforma%20en%20Madrid." target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" /> Hablar con THIASA
              </a>
            </aside>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
