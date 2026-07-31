import type { Metadata } from "next";
import { ServiceSeoSection, type ServiceFaq } from "@/components/service-seo-section";
import ReformasBanosCocinasClient from "./service-client";

export const metadata: Metadata = {
    title: "Reforma de Baños y Cocinas en Madrid | THIASA",
    description: "Reformas de baños y cocinas en Madrid: distribución, fontanería, revestimientos, sanitarios, mobiliario, iluminación y acabados.",
    keywords: "reforma baños Madrid, reforma cocinas Madrid, reforma baño completo, reforma cocina integral, alicatados baños, muebles cocina medida",
    openGraph: {
        title: "Reforma de Baños y Cocinas en Madrid | THIASA",
        description: "Reformas de baños y cocinas en Madrid con coordinación de instalaciones, revestimientos, mobiliario y acabados.",
        type: "website",
        locale: "es_ES",
        url: "https://www.thiasa.es/servicios/reformas-banos-cocinas",
    },
    twitter: {
        card: "summary_large_image",
        title: "Reforma de Baños y Cocinas en Madrid | THIASA",
        description: "Reformas de baños y cocinas en Madrid adaptadas al espacio y al alcance de cada proyecto.",
    },
    alternates: {
        canonical: "https://www.thiasa.es/servicios/reformas-banos-cocinas",
    },
};

const serviceFaqs: ServiceFaq[] = [
    {
        question: "¿Qué incluye una reforma completa de baño?",
        answer: "Puede incluir demolición, retirada de residuos, fontanería, electricidad, impermeabilización, revestimientos, sanitarios, mampara, mobiliario, iluminación y remates. El alcance debe detallarse en el presupuesto.",
    },
    {
        question: "¿Cuánto cuesta reformar un baño en Madrid?",
        answer: "El precio depende del estado de las instalaciones, la distribución, los metros, los materiales y las piezas elegidas. Una medición del espacio permite preparar una valoración ajustada.",
    },
    {
        question: "¿Se puede mantener la distribución actual?",
        answer: "Sí, si funciona y las instalaciones lo permiten. Mantener la posición de ducha, lavabo e inodoro suele simplificar la obra y reducir cambios en tomas y desagües.",
    },
    {
        question: "¿THIASA también reforma cocinas?",
        answer: "Sí. El servicio contempla distribución, instalaciones, revestimientos, mobiliario, encimeras, iluminación y coordinación de acabados según el proyecto.",
    },
];

const relatedGuides = [
    {
        href: "/blog/cuanto-cuesta-reformar-bano-madrid",
        title: "Cuánto cuesta reformar un baño",
        description: "Rangos orientativos, partidas y factores que cambian el presupuesto en Madrid.",
    },
    {
        href: "/blog/que-incluye-reforma-bano-completa-madrid",
        title: "Qué incluye una reforma de baño completa",
        description: "Fases, decisiones previas y trabajos que conviene detallar antes de contratar.",
    },
    {
        href: "/blog/que-incluye-reforma-cocina-madrid",
        title: "Qué incluye una reforma de cocina",
        description: "Distribución, instalaciones, mobiliario y acabados para planificar la cocina.",
    },
];

export default function ReformasBanosCocinasPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Reforma de Baños y Cocinas en Madrid",
        provider: {
            "@id": "https://www.thiasa.es/#organization",
        },
        areaServed: {
            "@type": "City",
            name: "Madrid",
        },
        description: "Reformas de baños y cocinas en Madrid con coordinación de instalaciones, revestimientos, mobiliario, iluminación y acabados.",
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
                name: "Baños y Cocinas",
                item: "https://www.thiasa.es/servicios/reformas-banos-cocinas",
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
                <ReformasBanosCocinasClient />
                <ServiceSeoSection
                    title="Dudas sobre reformas de baños y cocinas"
                    description="Información para definir el alcance, preparar mediciones y comparar presupuestos con el mismo nivel de intervención."
                    faqs={serviceFaqs}
                    guides={relatedGuides}
                />
            </main>
        </>
    );
}
