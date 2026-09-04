import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
    title: "Contacto | THIASA - Empresa de reformas en Madrid",
    description:
        "Contacta con THIASA para tu reforma en Madrid: teléfono, email, WhatsApp y formulario de presupuesto sin compromiso. Respuesta en 24 horas laborables.",
    keywords:
        "contacto empresa reformas Madrid, presupuesto reforma Madrid, pedir presupuesto reforma, empresa reformas Madrid contacto",
    alternates: {
        canonical: "https://www.thiasa.es/contacto",
    },
    openGraph: {
        title: "Contacto | THIASA - Empresa de reformas en Madrid",
        description:
            "Teléfono, email, WhatsApp y formulario para pedir presupuesto de reforma en Madrid sin compromiso.",
        url: "https://www.thiasa.es/contacto",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacto | THIASA - Empresa de reformas en Madrid",
        description:
            "Pide presupuesto de reforma en Madrid por teléfono, WhatsApp, email o formulario.",
    },
};

export default function ContactoPage() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contacto THIASA",
        url: "https://www.thiasa.es/contacto",
        mainEntity: {
            "@id": "https://www.thiasa.es/#organization",
            "@type": "LocalBusiness",
            name: "THIASA",
            legalName: "DISEÑOS E INTERIORISMO THIASA SL",
            url: "https://www.thiasa.es",
            telephone: "+34604154746",
            email: "info@thiasa.es",
            areaServed: "Madrid y alrededores",
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34604154746",
                email: "info@thiasa.es",
                contactType: "customer service",
                areaServed: "ES",
                availableLanguage: "Spanish",
            },
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
                item: "https://www.thiasa.es",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Contacto",
                item: "https://www.thiasa.es/contacto",
            },
        ],
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-28">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />

                <section className="bg-[#0D1117] pt-20 pb-4 sm:pt-28">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
                            THIASA · Madrid
                        </span>
                        <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                            Contacto y presupuesto para tu reforma en Madrid
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-white/75">
                            Cuéntanos qué reforma tienes en mente y en qué zona de Madrid. Puedes escribirnos por WhatsApp, llamarnos o rellenar el formulario: para preparar una primera valoración nos ayuda saber la superficie aproximada, las estancias afectadas y si ya tienes planos o fotografías.
                        </p>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    );
}
