import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ChevronRight, Clock3, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";
import styles from "../blog.module.css";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

const whatsappUrl =
  "https://wa.me/34604154746?text=Hola,%20quiero%20solicitar%20un%20presupuesto%20de%20reforma%20en%20Madrid.";

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

  const categoryNames: Record<string, string> = {
    presupuesto: "Precios y presupuestos",
    educativo: "Guías y trámites",
    comercial: "Servicios y proceso",
    comparativo: "Comparativas y dudas",
  };
  const category = categoryNames[post.frontmatter.tipo_articulo ?? ""] ?? "Reformas";

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
      <main className="bg-background">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        {/* Article header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
          <nav aria-label="Miga de pan" className="flex items-center flex-wrap gap-1.5 text-sm text-[#1D1D1D]/60 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#1D1D1D]/80">{category}</span>
          </nav>

          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wide mb-5">
            {category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight mb-5">
            {post.frontmatter.title}
          </h1>

          <p className="text-lg text-[#1D1D1D]/70 leading-relaxed mb-6">
            {post.frontmatter.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-black/10 text-sm text-[#1D1D1D]/60">
            <span className="font-bold text-[#1D1D1D]/80">Por THIASA</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.frontmatter.fecha}>{formatDate(post.frontmatter.fecha ?? "")}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="w-4 h-4" aria-hidden="true" /> {post.readingTime} min de lectura
            </span>
          </div>
        </header>

        {/* Hero image */}
        {post.frontmatter.imagen ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={post.frontmatter.imagen}
                alt={post.frontmatter.imagen_alt ?? post.frontmatter.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16">
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          {/* CTA */}
          <aside className="mt-14 bg-gradient-to-br from-primary to-[#003580] rounded-2xl p-8 sm:p-10 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              ¿Quieres poner números reales a tu reforma?
            </h2>
            <p className="text-white/80 mb-7 max-w-xl mx-auto">
              Te preparamos un presupuesto claro y adaptado a tu vivienda, sin compromiso.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-location="blog_post"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-white hover:text-primary transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> Hablar con THIASA
            </a>
          </aside>

          <div className="mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Volver al blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
