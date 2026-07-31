import type { Metadata } from "next";
import { ServiceSeoSection, type ServiceFaq } from "@/components/service-seo-section";
import ReformasIntegralesClient from "./service-client";

export const metadata: Metadata = {
    title: "Empresa de Reformas Integrales en Madrid | THIASA",
    description: "Reformas integrales de viviendas en Madrid: distribución, instalaciones, carpintería, pintura y acabados coordinados en un único proyecto.",
    keywords: "reformas integrales Madrid, reforma integral piso, reforma integral vivienda, reforma completa casa, empresa reformas Madrid",
    openGraph: {
        title: "Empresa de Reformas Integrales en Madrid | THIASA",
        description: "Reformas integrales de viviendas en Madrid con coordinación de distribución, instalaciones, carpintería, pintura y acabados.",
        type: "website",
        locale: "es_ES",
        url: "https://www.thiasa.es/servicios/reformas-integrales",
    },
    twitter: {
        card: "summary_large_image",
        title: "Empresa de Reformas Integrales en Madrid | THIASA",
        description: "Reformas integrales de viviendas en Madrid con coordinación de todos los trabajos del proyecto.",
    },
    alternates: {
        canonical: "https://www.thiasa.es/servicios/reformas-integrales",
    },
};

const serviceFaqs: ServiceFaq[] = [
    {
        question: "¿Qué puede incluir una reforma integral de vivienda?",
        answer: "Puede incluir demoliciones, nueva distribución, albañilería, electricidad, fontanería, carpintería, pintura y acabados. El presupuesto debe indicar qué partidas están incluidas y cuáles quedan fuera.",
    },
    {
        question: "¿Cuánto cuesta una reforma integral en Madrid?",
        answer: "Depende de la superficie, el estado de la vivienda, la distribución, las instalaciones y las calidades. Para obtener una cifra útil es necesario definir el alcance y realizar mediciones del inmueble.",
    },
    {
        question: "¿Qué permisos puede necesitar la obra?",
        answer: "El procedimiento depende de los trabajos y del inmueble. Una obra puede requerir declaración responsable, licencia u otras autorizaciones, por lo que conviene confirmarlo antes de comenzar.",
    },
    {
        question: "¿Qué información ayuda a preparar el presupuesto?",
        answer: "La ubicación, la superficie aproximada, fotografías, planos si existen, estancias afectadas, cambios de distribución y referencias de materiales ayudan a preparar una primera valoración.",
    },
];

const relatedGuides = [
    {
        href: "/blog/cuanto-cuesta-reforma-integral-madrid",
        title: "Precios de una reforma integral",
        description: "Rangos orientativos, partidas y criterios para comparar presupuestos en Madrid.",
    },
    {
        href: "/blog/licencia-obra-menor-madrid",
        title: "Licencias y declaración responsable",
        description: "Qué revisar con el Ayuntamiento de Madrid antes de iniciar la obra.",
    },
    {
        href: "/blog/contratar-empresa-reformas-madrid",
        title: "Cómo elegir una empresa de reformas",
        description: "Documentación, presupuesto y señales que conviene comprobar antes de contratar.",
    },
];

export default function ReformasIntegralesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Reformas Integrales de Viviendas en Madrid",
        provider: {
            "@id": "https://www.thiasa.es/#organization",
        },
        areaServed: {
            "@type": "City",
            name: "Madrid",
        },
        description: "Reformas integrales de viviendas en Madrid con coordinación de distribución, instalaciones, carpintería, pintura y acabados.",
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
                name: "Reformas Integrales",
                item: "https://www.thiasa.es/servicios/reformas-integrales",
            },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: serviceFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main>
                <ReformasIntegralesClient />
                <ServiceSeoSection
                    title="Dudas sobre reformas integrales en Madrid"
                    description="Respuestas directas para definir el alcance y preparar una primera valoración de la vivienda."
                    faqs={serviceFaqs}
                    guides={relatedGuides}
                />
            </main>
        </>
    );
}
