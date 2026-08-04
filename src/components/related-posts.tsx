import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { categoryLabel, formatDate, getRelatedPosts, type Post } from "@/lib/posts";

interface RelatedPostsProps {
  post: Post;
}

export async function RelatedPosts({ post }: RelatedPostsProps) {
  const related = await getRelatedPosts(post);

  if (related.length === 0) {
    return null;
  }

  return (
    <section
      className="border-t border-black/5 bg-white"
      aria-labelledby="related-posts-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
          Sigue leyendo
        </span>
        <h2 id="related-posts-title" className="mt-3 text-2xl sm:text-3xl font-extrabold">
          Guías relacionadas
        </h2>
        <p className="mt-3 text-[#1D1D1D]/70 leading-relaxed max-w-2xl">
          Otras guías útiles para seguir preparando tu reforma en Madrid.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <article key={item.slug} className="h-full">
              <Link
                href={`/blog/${item.slug}`}
                className="group flex flex-col h-full bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.frontmatter.imagen ?? "/images/blog/reforma-integral-madrid.jpg"}
                    alt={item.frontmatter.imagen_alt ?? item.frontmatter.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wide">
                      {categoryLabel(item.frontmatter.tipo_articulo)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#1D1D1D]/60">
                      <Clock3 className="w-3.5 h-3.5" aria-hidden="true" /> {item.readingTime} min
                    </span>
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-accent transition-colors">
                    {item.frontmatter.title}
                  </h3>
                  <p className="text-sm text-[#1D1D1D]/70 leading-relaxed mb-5 line-clamp-3">
                    {item.frontmatter.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
                    <time dateTime={item.frontmatter.fecha} className="text-xs text-[#1D1D1D]/60">
                      {formatDate(item.frontmatter.fecha ?? "")}
                    </time>
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-bold">
                      Leer guía
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
          >
            Ver todas las guías de reformas
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
