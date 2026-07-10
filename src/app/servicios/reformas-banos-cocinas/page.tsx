import type { Metadata } from "next";
import ReformasBanosCocinasClient from "./service-client";

export const metadata: Metadata = {
    title: "Reforma de Baños y Cocinas en Madrid | THIASA",
    description: "Especialistas en reforma de baños y cocinas en Madrid. Diseño 3D, alicatados, muebles a medida y presupuesto gratis sin compromiso.",
    keywords: "reforma baños Madrid, reforma cocinas Madrid, reforma baño completo, reforma cocina integral, alicatados baños, muebles cocina medida",
    openGraph: {
        title: "Reforma de Baños y Cocinas en Madrid | THIASA",
        description: "Especialistas en reforma de baños y cocinas en Madrid. Presupuesto gratis sin compromiso.",
        type: "website",
        locale: "es_ES",
        url: "https://www.thiasa.es/servicios/reformas-banos-cocinas",
    },
    twitter: {
        card: "summary_large_image",
        title: "Reforma de Baños y Cocinas en Madrid | THIASA",
        description: "Especialistas en reforma de baños y cocinas en Madrid. Presupuesto gratis sin compromiso.",
    },
    alternates: {
        canonical: "https://www.thiasa.es/servicios/reformas-banos-cocinas",
    },
};

export default function ReformasBanosCocinasPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Reforma de Baños y Cocinas en Madrid",
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
        description: "Especialistas en reforma de baños y cocinas en Madrid. Diseño 3D, alicatados, muebles a medida y presupuesto gratis sin compromiso.",
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
            <ReformasBanosCocinasClient />
        </>
    );
}
