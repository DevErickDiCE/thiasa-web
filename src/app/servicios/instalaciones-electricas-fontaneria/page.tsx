import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { ServiceSeoSection, type ServiceFaq } from "@/components/service-seo-section";

export const metadata: Metadata = {
    title: "Instalaciones Eléctricas y Fontanería en Madrid | THIASA",
    description: "Instalaciones eléctricas y fontanería en Madrid para reformas: cuadros, puntos eléctricos, tuberías, saneamiento, climatización y suelo radiante.",
    keywords: "instalaciones eléctricas Madrid, fontanería Madrid, aire acondicionado, suelo radiante, cuadros eléctricos, calefacción",
    alternates: {
        canonical: "https://www.thiasa.es/servicios/instalaciones-electricas-fontaneria",
    },
    openGraph: {
        title: "Instalaciones Eléctricas y Fontanería en Madrid | THIASA",
        description: "Instalaciones eléctricas y fontanería en Madrid coordinadas dentro de proyectos de reforma.",
        type: "website",
        locale: "es_ES",
        url: "https://www.thiasa.es/servicios/instalaciones-electricas-fontaneria",
    },
    twitter: {
        card: "summary_large_image",
        title: "Instalaciones Eléctricas y Fontanería en Madrid | THIASA",
        description: "Electricidad, fontanería, climatización y suelo radiante para proyectos de reforma en Madrid.",
    },
};

const serviceFaqs: ServiceFaq[] = [
    {
        question: "¿Se pueden coordinar electricidad y fontanería en la misma reforma?",
        answer: "Sí. Coordinar rozas, recorridos, puntos eléctricos, tomas de agua y saneamiento evita duplicar trabajos y permite cerrar paredes y acabados en el orden correcto.",
    },
    {
        question: "¿Cuándo conviene renovar una instalación completa?",
        answer: "Depende de su antigüedad, estado, capacidad y del alcance de la reforma. Antes de cubrir la instalación con acabados nuevos conviene revisar si responde a las necesidades previstas.",
    },
    {
        question: "¿Qué debe indicar el presupuesto de instalaciones?",
        answer: "Debe detallar puntos, metros o unidades, mecanismos, materiales previstos, trabajos auxiliares, pruebas, documentación aplicable y cualquier partida excluida.",
    },
    {
        question: "¿Las instalaciones pueden afectar al permiso de obra?",
        answer: "Sí, según su alcance y si afectan a elementos comunes, distribución o instalaciones generales. El procedimiento debe comprobarse antes de comenzar la actuación.",
    },
];

const relatedGuides = [
    {
        href: "/blog/cuanto-cuesta-reforma-integral-madrid",
        title: "Partidas de una reforma integral",
        description: "Cómo influyen electricidad, fontanería y climatización en el presupuesto global.",
    },
    {
        href: "/blog/licencia-obra-menor-madrid",
        title: "Licencias y declaración responsable",
        description: "Qué revisar si la obra modifica distribución, instalaciones o elementos comunes.",
    },
    {
        href: "/blog/contratar-empresa-reformas-madrid",
        title: "Cómo comparar presupuestos",
        description: "Alcance, documentación y exclusiones que conviene comprobar antes de contratar.",
    },
];

export default function InstalacionesElectricasFontaneria() {
    const services = [
        "Instalaciones eléctricas completas y renovación de cuadros",
        "Cuadros eléctricos y automatizaciones",
        "Fontanería general y reparaciones",
        "Instalación de aire acondicionado",
        "Suelo radiante eléctrico y por agua",
        "Sistemas de calefacción eficientes",
        "Domótica y control inteligente",
        "Mantenimiento preventivo"
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Instalaciones Eléctricas y Fontanería en Madrid",
        provider: {
            "@id": "https://www.thiasa.es/#organization",
        },
        areaServed: {
            "@type": "City",
            name: "Madrid",
        },
        description: "Instalaciones eléctricas, fontanería, climatización y suelo radiante para proyectos de reforma en Madrid.",
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
                name: "Instalaciones Eléctricas y Fontanería",
                item: "https://www.thiasa.es/servicios/instalaciones-electricas-fontaneria",
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
            <section className="relative bg-[#1D1D1D] min-h-[550px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/hero-bg.png" alt="Instalaciones eléctricas y fontanería" fill className="object-cover opacity-40" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/90 via-[#1D1D1D]/75 to-[#1D1D1D]/60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/#services" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a servicios
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Instalaciones Eléctricas y Fontanería en Madrid
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                            Coordinamos electricidad, fontanería, climatización y trabajos auxiliares dentro de tu reforma.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, necesito información sobre instalaciones"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-ga-location="service_hero"
                            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-accent/50 hover:shadow-xl hover:scale-105"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Solicitar presupuesto
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Nuestros Servicios de Instalaciones</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            {services.map((service, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{service}</span>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <Image src="/hero-bg.png" alt="Instalaciones profesionales" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Block - Por qué confiar en THIASA */}
            <section className="py-20 bg-[#0D1117]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Por qué confiar en THIASA
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Planificación de recorridos, puntos, materiales y coordinación con el resto de la obra
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Badge 1 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Cualificación
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Técnicos cualificados y con experiencia
                                </h3>
                                <p className="text-white/60">
                                    Profesionales cualificados según el tipo y alcance de la instalación
                                </p>
                            </div>
                        </div>

                        {/* Badge 2 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Normativa
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Cumplimiento de normativa y seguridad
                                </h3>
                                <p className="text-white/60">
                                    Definición de materiales, protecciones y documentación aplicable a cada trabajo
                                </p>
                            </div>
                        </div>

                        {/* Badge 3 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Coordinación
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Coordinación con otros gremios
                                </h3>
                                <p className="text-white/60">
                                    Trabajamos perfectamente coordinados con albañiles, carpinteros y pintores
                                </p>
                            </div>
                        </div>

                        {/* Badge 4 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Garantía
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Alcance y condiciones por escrito
                                </h3>
                                <p className="text-white/60">
                                    Presupuesto con partidas incluidas, materiales previstos y posibles exclusiones
                                </p>
                            </div>
                        </div>

                        {/* Badge 5 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Sin Sorpresas
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Presupuesto claro por partidas
                                </h3>
                                <p className="text-white/60">
                                    Definición previa de unidades, materiales, trabajos auxiliares y exclusiones
                                </p>
                            </div>
                        </div>

                        {/* Badge 6 - Extra visual importance */}
                        <div className="group relative bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all">
                            <div className="absolute -top-4 left-8 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ★ Coordinación
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Coordinación de principio a fin
                                </h3>
                                <p className="text-white/80">
                                    Electricidad y fontanería integradas con albañilería, carpintería, pintura y acabados
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceSeoSection
                title="Dudas sobre instalaciones en una reforma"
                description="Respuestas para definir el alcance técnico y comparar presupuestos de electricidad y fontanería en Madrid."
                faqs={serviceFaqs}
                guides={relatedGuides}
            />

            {/* Enhanced CTA Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#0D1117] to-slate-900 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main CTA */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent font-bold rounded-full text-sm uppercase tracking-wide mb-6 border border-accent/30">
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                            Consulta directa
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                            ¿Necesitas un electricista o fontanero?
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Indica el tipo de inmueble, los trabajos previstos y si la instalación forma parte de una reforma mayor.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/34604154746?text=Hola, necesito un electricista/fontanero urgente"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-ga-location="service_cta"
                                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent to-primary text-white text-lg font-bold rounded-xl shadow-2xl shadow-accent/50 hover:shadow-accent/70 hover:scale-105 transition-all"
                            >
                                <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                                Contactar por WhatsApp
                            </a>

                            <a
                                href="tel:+34604154746"
                                data-ga-location="service_cta"
                                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-lg font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-accent transition-all"
                            >
                                <Phone className="w-6 h-6 mr-3" />
                                604 154 746
                            </a>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 inline-flex items-center gap-2 text-white/50 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Sin compromiso • Presupuesto detallado • Contacto directo</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}
