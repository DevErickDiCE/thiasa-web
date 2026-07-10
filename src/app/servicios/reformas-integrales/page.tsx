import type { Metadata } from "next";
import ReformasIntegralesClient from "./service-client";

export const metadata: Metadata = {
    title: "Reformas Integrales de Viviendas en Madrid | THIASA",
    description: "Transformamos tu vivienda de principio a fin. Reformas integrales en Madrid con gestión completa, garantía por escrito y presupuesto gratis en 24h.",
    keywords: "reformas integrales Madrid, reforma integral piso, reforma integral vivienda, reforma completa casa, empresa reformas Madrid",
    openGraph: {
        title: "Reformas Integrales de Viviendas en Madrid | THIASA",
        description: "Reformas integrales en Madrid con gestión completa, garantía y presupuesto gratis en 24h.",
        type: "website",
        locale: "es_ES",
        url: "https://www.thiasa.es/servicios/reformas-integrales",
    },
    twitter: {
        card: "summary_large_image",
        title: "Reformas Integrales de Viviendas en Madrid | THIASA",
        description: "Reformas integrales en Madrid con gestión completa, garantía y presupuesto gratis en 24h.",
    },
    alternates: {
        canonical: "https://www.thiasa.es/servicios/reformas-integrales",
    },
};

export default function ReformasIntegralesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Reformas Integrales de Viviendas en Madrid",
        provider: {
            "@type": "LocalBusiness",
            name: "THIASA",
            telephone: "+34604154746",
            email: "info@thiasa.es",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
            },
        },
        areaServed: {
            "@type": "City",
            name: "Madrid",
        },
        description: "Reformas integrales de viviendas en Madrid con gestión completa, garantía por escrito y presupuesto gratis en 24h.",
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
            <ReformasIntegralesClient />
        </>
    );
}
