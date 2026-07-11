import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { formatDate, getAllPosts } from "@/lib/posts";
import { editorialSans, editorialSerif } from "./fonts";
import styles from "./blog.module.css";

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
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <Navbar />
      <main className={`${styles.blogPage} ${editorialSerif.variable} ${editorialSans.variable}`}>
        <section className={styles.masthead}>
          <div className={styles.mastheadTopline}>
            <span>THIASA · Cuaderno de obra</span>
            <span className={styles.issue}>Madrid · Edición 2026</span>
          </div>

          <div className={styles.mastheadGrid}>
            <div className={styles.mastheadCopy}>
              <p className={styles.eyebrow}>Reformas con criterio</p>
              <h1>Ideas claras antes de abrir la primera pared.</h1>
              <p className={styles.lede}>
                Costes, materiales, permisos y decisiones de obra explicados por
                quienes reforman Madrid cada día.
              </p>
              <div className={styles.mastheadNote}>
                <span>01</span>
                <p>Guías honestas para convertir incertidumbre en un buen proyecto.</p>
              </div>
            </div>

            {featuredPost ? (
              <Link href={`/blog/${featuredPost.slug}`} className={styles.heroStory}>
                <Image
                  src={featuredPost.frontmatter.imagen ?? "/images/blog/reforma-integral-madrid.jpg"}
                  alt={featuredPost.frontmatter.imagen_alt ?? featuredPost.frontmatter.title}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 58vw"
                  className={styles.coverImage}
                />
                <div className={styles.imageWash} />
                <div className={styles.heroStoryMeta}>
                  <span>Última guía</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
                <div className={styles.heroStoryTitle}>
                  <p>{categoryNames[featuredPost.frontmatter.tipo_articulo ?? ""] ?? "Reformas"}</p>
                  <h2>{featuredPost.frontmatter.title}</h2>
                </div>
              </Link>
            ) : null}
          </div>
        </section>

        <section className={styles.storiesSection} aria-labelledby="latest-guides">
          <div className={styles.sectionHeading}>
            <div>
              <span>Archivo / 03 guías</span>
              <h2 id="latest-guides">Lo que conviene saber</h2>
            </div>
            <p>Información práctica, sin letra pequeña y pensada para viviendas reales.</p>
          </div>

          <div className={styles.storyGrid}>
            {otherPosts.map((post, index) => (
              <article className={styles.storyCard} key={post.slug}>
                <Link href={`/blog/${post.slug}`} className={styles.storyImage}>
                  <Image
                    src={post.frontmatter.imagen ?? "/images/blog/reforma-integral-madrid.jpg"}
                    alt={post.frontmatter.imagen_alt ?? post.frontmatter.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                    className={styles.coverImage}
                  />
                  <span className={styles.storyNumber}>0{index + 2}</span>
                </Link>
                <div className={styles.storyBody}>
                  <div className={styles.storyMeta}>
                    <span>{categoryNames[post.frontmatter.tipo_articulo ?? ""] ?? "Reformas"}</span>
                    <span className={styles.readTime}><Clock3 aria-hidden="true" /> {post.readingTime} min</span>
                  </div>
                  <h3><Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link></h3>
                  <p>{post.frontmatter.description}</p>
                  <div className={styles.storyFooter}>
                    <time dateTime={post.frontmatter.fecha}>{formatDate(post.frontmatter.fecha ?? "")}</time>
                    <Link href={`/blog/${post.slug}`} aria-label={`Leer ${post.frontmatter.title}`}>
                      Leer guía <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.newsletterBand}>
          <p>¿Tienes una reforma en mente?</p>
          <h2>La mejor obra empieza con una conversación clara.</h2>
          <Link href="/#contacto">Cuéntanos tu proyecto <ArrowUpRight aria-hidden="true" /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
