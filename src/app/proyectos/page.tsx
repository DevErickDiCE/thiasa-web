import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PROYECTOS } from "@/lib/proyectos";

// Versión indexable de la galería de la portada: las mismas obras, con el
// texto a la vista. Los datos salen de src/lib/proyectos.ts.
const BASE = "https://www.thiasa.es";
const URL = `${BASE}/proyectos`;
const ORG_ID = `${BASE}/#organization`;

export const metadata: Metadata = {
  title: "Proyectos de reformas en Madrid | THIASA",
  description:
    "Reformas reales de THIASA en Madrid: salones, cocinas, baños, dormitorios y pasillos, con las soluciones y acabados de cada obra.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Proyectos de reformas realizados en Madrid | THIASA",
    description:
      "Obras reales de THIASA: salones, cocinas, baños, dormitorios y pasillos reformados en Madrid, con los detalles de cada proyecto.",
    url: URL,
    type: "website",
    locale: "es_ES",
  },
};

export default function ProyectosPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": URL,
    url: URL,
    name: "Proyectos de reformas realizados por THIASA",
    inLanguage: "es-ES",
    about: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PROYECTOS.map((proyecto, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          "@id": `${URL}#${proyecto.slug}`,
          url: `${URL}#${proyecto.slug}`,
          name: proyecto.title,
          description: proyecto.description,
          genre: proyecto.category,
          image: proyecto.gallery.map((src) => `${BASE}${src}`),
          creator: { "@id": ORG_ID },
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Proyectos", item: URL },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className="bg-[#0D1117] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">Trabajos reales · Madrid</span>
            <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Proyectos de reformas realizados
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-white/75">
              Siete obras terminadas por THIASA en viviendas de Madrid: salones, cocinas, baños, dormitorios y pasillos. En cada una explicamos qué se hizo y con qué acabados, para que puedas comparar con lo que tienes en mente.
            </p>
            <nav aria-label="Proyectos" className="mt-8 flex flex-wrap gap-2">
              {PROYECTOS.map((proyecto) => (
                <a
                  key={proyecto.slug}
                  href={`#${proyecto.slug}`}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:border-accent hover:text-white transition-colors"
                >
                  {proyecto.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {PROYECTOS.map((proyecto) => (
              <article key={proyecto.slug} id={proyecto.slug} className="scroll-mt-28 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wide">
                    {proyecto.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{proyecto.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{proyecto.description}</p>

                  <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-primary">Qué se hizo</h3>
                  <ul className="mt-4 space-y-3">
                    {proyecto.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 text-sm text-slate-600">
                    Servicio:{" "}
                    <Link href={`/servicios/${proyecto.servicio.slug}`} className="font-bold text-primary hover:text-accent transition-colors">
                      {proyecto.servicio.nombre}
                    </Link>
                  </p>
                </div>

                <div className={`grid gap-4 ${proyecto.gallery.length > 1 ? "grid-cols-2" : "grid-cols-1 max-w-md"}`}>
                  {proyecto.gallery.map((src, index) => (
                    <div
                      key={src}
                      className={`relative overflow-hidden rounded-2xl shadow-md ${
                        index === 0 && proyecto.gallery.length > 1 ? "col-span-2 aspect-[4/3]" : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${proyecto.title}: fotografía ${index + 1} de ${proyecto.gallery.length}`}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">Tu reforma</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">¿Quieres un resultado parecido en tu casa?</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Cuéntanos qué estancias quieres reformar y qué proyecto de esta página se parece más a lo que buscas. Te asesoramos sin compromiso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/34604154746?text=Hola,%20he%20visto%20vuestros%20proyectos%20y%20quiero%20pedir%20presupuesto%20para%20una%20reforma%20en%20Madrid."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ga-location="projects_page"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 font-bold text-white hover:bg-primary transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Pedir presupuesto por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-900 hover:border-accent transition-colors"
                >
                  Ir a contacto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
