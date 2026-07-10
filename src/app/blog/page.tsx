import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog de reformas en Madrid | Guías THIASA",
  description:
    "Guías prácticas sobre precios, licencias y planificación de reformas en Madrid. Información útil para preparar tu proyecto y pedir presupuesto.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de reformas en Madrid | THIASA",
    description:
      "Consejos y guías para planificar reformas de viviendas, baños y cocinas en Madrid.",
    type: "website",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F2F1ED]">
        <section className="bg-[#1D1D1D] px-4 pb-20 pt-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold text-accent">
              <FileText className="h-4 w-4" />
              Guías prácticas
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Blog de reformas en Madrid
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              Precios orientativos, trámites y decisiones prácticas para preparar
              una reforma con más información y menos incertidumbre.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays className="h-4 w-4 text-accent" />
                    <time dateTime={post.frontmatter.fecha}>
                      {formatDate(post.frontmatter.fecha ?? "")}
                    </time>
                  </div>
                  <h2 className="text-2xl font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                  </h2>
                  <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                    {post.frontmatter.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-7 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
                  >
                    Leer la guía
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
