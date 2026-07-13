import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog de reformas en Madrid | Guías THIASA",
  description:
    "Guías prácticas sobre precios, licencias y planificación de reformas en Madrid. Información útil para preparar tu proyecto y pedir presupuesto.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de reformas en Madrid | THIASA",
    description:
      "Consejos y guías para planificar reformas de viviendas, baños y cocinas en Madrid.",
    type: "website",
    url: "/blog",
    images: [{ url: "/images/blog/reforma-integral-madrid.jpg", width: 1536, height: 1024 }],
  },
};

const categoryNames: Record<string, string> = {
  presupuesto: "Precios y presupuestos",
  educativo: "Guías y trámites",
  comercial: "Servicios y proceso",
  comparativo: "Comparativas y dudas",
};

function categoryLabel(tipo?: string) {
  return categoryNames[tipo ?? ""] ?? "Reformas";
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-20 sm:pb-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-5">
              Blog de THIASA
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Guías de reformas en Madrid
            </h1>
            <p className="text-lg text-[#1D1D1D]/70 leading-relaxed">
              Precios, licencias y consejos de obra explicados de forma clara por
              quienes reforman viviendas en Madrid cada día.
            </p>
          </div>
        </section>

        {/* Featured post */}
        {featuredPost ? (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[24rem] overflow-hidden">
                <Image
                  src={featuredPost.frontmatter.imagen ?? "/images/blog/reforma-integral-madrid.jpg"}
                  alt={featuredPost.frontmatter.imagen_alt ?? featuredPost.frontmatter.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wide">
                    {categoryLabel(featuredPost.frontmatter.tipo_articulo)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#1D1D1D]/60">
                    <Clock3 className="w-4 h-4" /> {featuredPost.readingTime} min
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.frontmatter.title}
                </h2>
                <p className="text-[#1D1D1D]/70 leading-relaxed mb-6">
                  {featuredPost.frontmatter.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#1D1D1D]/60">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime={featuredPost.frontmatter.fecha}>
                      {formatDate(featuredPost.frontmatter.fecha ?? "")}
                    </time>
                  </span>
                  <span className="inline-flex items-center gap-2 text-primary font-bold">
                    Leer guía <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        ) : null}

        {/* Post grid */}
        {otherPosts.length > 0 ? (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-labelledby="latest-guides">
            <h2 id="latest-guides" className="text-2xl sm:text-3xl font-extrabold mb-8">
              Más guías prácticas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article key={post.slug} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.frontmatter.imagen ?? "/images/blog/reforma-integral-madrid.jpg"}
                        alt={post.frontmatter.imagen_alt ?? post.frontmatter.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wide">
                          {categoryLabel(post.frontmatter.tipo_articulo)}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#1D1D1D]/60">
                          <Clock3 className="w-3.5 h-3.5" /> {post.readingTime} min
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-accent transition-colors">
                        {post.frontmatter.title}
                      </h3>
                      <p className="text-sm text-[#1D1D1D]/70 leading-relaxed mb-5 line-clamp-3">
                        {post.frontmatter.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
                        <time dateTime={post.frontmatter.fecha} className="text-xs text-[#1D1D1D]/60">
                          {formatDate(post.frontmatter.fecha ?? "")}
                        </time>
                        <span className="inline-flex items-center gap-1.5 text-sm text-primary font-bold">
                          Leer guía <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-br from-primary to-[#003580] rounded-2xl px-7 py-12 sm:px-12 sm:py-14 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              ¿Tienes una reforma en mente?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Cuéntanos tu proyecto y te preparamos un presupuesto claro y sin compromiso.
            </p>
            <a
              href="https://wa.me/34604154746?text=Hola,%20quiero%20solicitar%20un%20presupuesto%20de%20reforma%20en%20Madrid."
              target="_blank"
              rel="noopener noreferrer"
              data-ga-location="blog_page"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white text-lg font-bold hover:bg-white hover:text-primary transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" /> Pedir presupuesto gratis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
