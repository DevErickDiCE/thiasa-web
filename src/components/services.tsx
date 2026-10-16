import React from "react";
import Link from "next/link";
import { Home, Bath, Zap, Hammer, Paintbrush, Store, ArrowRight, MessageCircle } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: <Home className="w-10 h-10" />,
            title: "Reformas Integrales de Viviendas",
            description: "Transformación completa de tu vivienda. Incluye demolición, distribución, instalaciones eléctricas, fontanería, carpintería y acabados premium.",
            slug: "reformas-integrales"
        },
        {
            icon: <Bath className="w-10 h-10" />,
            title: "Reformas de Baños y Cocinas",
            description: "Renovación completa de baños y cocinas. Alicatados, sanitarios, fontanería, muebles de cocina a medida y electrodomésticos.",
            slug: "reformas-banos-cocinas"
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Instalaciones Eléctricas y Fontanería Madrid",
            description: "Instalaciones nuevas y reparaciones. Aire acondicionado, suelo radiante, cuadros eléctricos, fontanería general y calefacción.",
            slug: "instalaciones-electricas-fontaneria"
        },
        {
            icon: <Hammer className="w-10 h-10" />,
            title: "Carpintería de Madera y Aluminio Madrid",
            description: "Suelos flotantes, puertas, armarios, muebles a medida. Carpintería de aluminio y PVC: ventanas y puertas correderas.",
            slug: "carpinteria-madera-aluminio"
        },
        {
            icon: <Paintbrush className="w-10 h-10" />,
            title: "Pintura, Pladur y Albañilería Madrid",
            description: "Pintura interior y exterior, instalación de Pladur, tabiques, alicatados, solados y todo tipo de trabajos de albañilería.",
            slug: "pintura-pladur-albanileria"
        },
        {
            icon: <Store className="w-10 h-10" />,
            title: "Reforma de Locales Comerciales",
            description: "Tiendas, restaurantes, oficinas y negocios en Madrid. Reformas comerciales con plazos ajustados y mínima interrupción.",
            slug: "reformas-locales-comerciales"
        }
    ];

    return (
        <section id="services" className="py-20 sm:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div data-reveal className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">
                        Nuestros servicios
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-5 tracking-tight">
                        Servicios Profesionales de Reforma
                    </h2>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        Soluciones integrales de construcción y reforma en Madrid. Desde instalaciones eléctricas y fontanería hasta carpintería y acabados finales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/servicios/${service.slug}`}
                            data-reveal
                            style={{ "--reveal-delay": Math.min(index, 5) } as React.CSSProperties}
                            className="group relative flex flex-col bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 overflow-hidden"
                        >
                            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(service.icon as React.ReactElement<{ className: string }>, { className: "w-7 h-7" })}
                            </div>
                            <h3 className="text-xl font-bold text-[#1D1D1D] mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-foreground/65 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <span className="mt-auto inline-flex items-center text-primary font-bold group-hover:text-accent transition-colors">
                                Más información <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Banda de llamada a la acción */}
                <div
                    data-reveal
                    className="mt-8 bg-gradient-to-br from-primary to-[#003580] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden"
                >
                    <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
                    <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-2">¿Tienes otro proyecto en mente?</h3>
                        <p className="text-white/85">
                            Cuéntanos tu idea, nos adaptamos a tus necesidades específicas.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/34604154746"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ga-location="services_section"
                        className="relative shrink-0 inline-flex items-center justify-center px-7 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Consultar ahora
                    </a>
                </div>
            </div>
        </section>
    );
}
