import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowLeft, Store, Utensils, Briefcase } from "lucide-react";

export const metadata: Metadata = {
    title: "Reforma de Locales Comerciales en Madrid | THIASA",
    description: "Reformas de locales comerciales en Madrid: tiendas, restaurantes, oficinas y hostelería. Presupuesto gratis, gestión integral y plazos cumplidos.",
    keywords: "reforma local comercial Madrid, reforma tienda Madrid, reforma restaurante Madrid, reforma oficina Madrid, reforma hostelería Madrid",
    openGraph: {
        title: "Reforma de Locales Comerciales en Madrid | THIASA",
        description: "Reformas de locales comerciales en Madrid: tiendas, restaurantes y oficinas. Presupuesto gratis.",
        type: "website",
        locale: "es_ES",
        url: "https://www.thiasa.es/servicios/reformas-locales-comerciales",
    },
    alternates: {
        canonical: "https://www.thiasa.es/servicios/reformas-locales-comerciales",
    },
};

export default function ReformasLocalesComerciales() {
    const services = [
        "Reforma completa de locales comerciales en Madrid",
        "Diseño y distribución adaptada a tu actividad",
        "Instalaciones eléctricas, fontanería y climatización",
        "Acabados resistentes y de fácil mantenimiento",
        "Gestión de escombros y limpieza final",
        "Coordinación con todos los gremios",
        "Cumplimiento de normativa y accesibilidad",
        "Presupuesto detallado sin compromiso",
    ];

    const types = [
        {
            icon: <Store className="w-8 h-8" />,
            title: "Tiendas y Comercios",
            description: "Reformamos escaparates, mostradores, suelos e iluminación para atraer clientes desde el primer día.",
        },
        {
            icon: <Utensils className="w-8 h-8" />,
            title: "Restaurantes y Hostelería",
            description: "Cocinas industriales, zonas de comedor, baños adaptados y acabados que cumplen la normativa sanitaria.",
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Oficinas y Despachos",
            description: "Espacios de trabajo funcionales, luminosos y preparados para el día a día de tu equipo.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Reforma de Locales Comerciales en Madrid",
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
        description: "Reformas de locales comerciales en Madrid: tiendas, restaurantes, oficinas y hostelería.",
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative bg-[#1D1D1D] min-h-[550px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/project-living-2.jpg"
                        alt="Reforma de locales comerciales en Madrid"
                        fill
                        className="object-cover opacity-40"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/90 via-[#1D1D1D]/75 to-[#1D1D1D]/60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/#services" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a servicios
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Reforma de Locales Comerciales en Madrid
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                            Tiendas, restaurantes, oficinas y negocios preparados para abrir con la mejor imagen.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, quiero presupuesto para reforma de local comercial"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-ga-location="service_hero"
                            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-accent/50 hover:shadow-xl hover:scale-105"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Presupuesto Gratis en 24h
                        </a>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                                Reformas Comerciales con Mínima Interrupción
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Sabemos que cerrar un local tiene un coste. Por eso planificamos cada reforma comercial en Madrid para cumplir plazos, minimizar el impacto en tu negocio y entregar un espacio funcional y atractivo.
                            </p>

                            <div className="space-y-3 mb-8">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/project-living-1.jpg"
                                alt="Local comercial reformado en Madrid"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tipos de locales */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Locales que Reformamos
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Adaptamos cada proyecto al tipo de negocio y a la normativa que le corresponde.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {types.map((type, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                                <p className="text-slate-600">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#0D1117] to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                        ¿Vas a reformar tu local en Madrid?
                    </h2>

                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        Cuéntanos tu proyecto y te damos un presupuesto detallado en 24 horas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://wa.me/34604154746?text=Hola, quiero presupuesto para reforma de local comercial"
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

                    <div className="mt-8 inline-flex items-center gap-2 text-white/50 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span>Sin compromiso • Presupuesto gratuito • Respuesta inmediata</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
