import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Empresa de Reformas Integrales en Madrid | THIASA",
  description:
    "Conoce THIASA, empresa de reformas integrales en Madrid. Viviendas, baños, cocinas, instalaciones, carpintería y acabados con trato directo.",
  alternates: {
    canonical: "https://www.thiasa.es/sobre-nosotros",
  },
  openGraph: {
    title: "Empresa de Reformas Integrales en Madrid | THIASA",
    description:
      "Conoce THIASA y su enfoque para reformas de viviendas, baños, cocinas, instalaciones, carpintería y acabados en Madrid.",
    url: "https://www.thiasa.es/sobre-nosotros",
    type: "website",
    locale: "es_ES",
  },
};

const services = [
  "Reformas integrales de viviendas",
  "Reformas de baños y cocinas",
  "Instalaciones eléctricas y fontanería",
  "Carpintería de madera, aluminio y PVC",
  "Pintura, Pladur y albañilería",
  "Reformas de locales comerciales",
];

export default function SobreNosotrosPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre THIASA",
    url: "https://www.thiasa.es/sobre-nosotros",
    mainEntity: {
      "@id": "https://www.thiasa.es/#organization",
      "@type": "LocalBusiness",
      name: "THIASA",
      legalName: "DISEÑOS E INTERIORISMO THIASA SL",
      url: "https://www.thiasa.es",
      telephone: "+34604154746",
      email: "info@thiasa.es",
      areaServed: "Madrid y alrededores",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.thiasa.es/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre nosotros",
        item: "https://www.thiasa.es/sobre-nosotros",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <section className="bg-[#0D1117] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
              THIASA · Madrid
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Empresa de reformas integrales en Madrid
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-white/75">
              THIASA es la marca comercial de DISEÑOS E INTERIORISMO THIASA SL. Trabajamos en proyectos de reforma de viviendas y espacios en Madrid, coordinando diferentes oficios para ofrecer una solución clara desde el primer contacto hasta los acabados.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Un único proyecto, distintos oficios coordinados
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Una reforma integral puede combinar distribución, albañilería, electricidad, fontanería, carpintería, pintura y acabados. Nuestro enfoque es mantener una comunicación directa y definir el alcance con claridad para que el cliente sepa qué trabajos forman parte del proyecto.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Atendemos proyectos en Madrid y alrededores. Antes de comenzar, puedes explicarnos qué necesitas por WhatsApp, teléfono o formulario para valorar el tipo de reforma y la ubicación.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Servicios principales</h2>
              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">Cómo empezar</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Cuéntanos el alcance de tu reforma
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Indica el tipo de inmueble, la zona, las estancias que quieres reformar y qué cambios tienes en mente. Con esa información podremos orientar mejor el siguiente paso y preparar una valoración adaptada al proyecto.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/34604154746?text=Hola,%20quiero%20consultar%20una%20reforma%20en%20Madrid."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ga-location="about_page"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 font-bold text-white hover:bg-primary transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-900 hover:border-accent transition-colors"
                >
                  Ir al formulario
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
