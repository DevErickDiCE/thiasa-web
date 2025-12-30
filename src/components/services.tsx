import React from "react";
import Link from "next/link";
import { Home, Bath, ChefHat, Hammer, Paintbrush, ArrowRight } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: <Home className="w-10 h-10" />,
            title: "Reformas Integrales",
            description: "Transformación completa de tu vivienda. Incluye demolición, distribución, instalaciones eléctricas, fontanería, carpintería y acabados premium.",
            gradient: "from-blue-500/20 to-primary/20",
            slug: "reformas-integrales"
        },
        {
            icon: <Bath className="w-10 h-10" />,
            title: "Baños y Cocinas",
            description: "Renovación completa de baños y cocinas. Alicatados, sanitarios, fontanería, muebles de cocina a medida y electrodomésticos.",
            gradient: "from-accent/20 to-blue-500/20",
            slug: "banos-cocinas"
        },
        {
            icon: <ChefHat className="w-10 h-10" />,
            title: "Instalaciones Eléctricas y Fontanería",
            description: "Instalaciones nuevas y reparaciones. Aire acondicionado, suelo radiante, cuadros eléctricos, fontanería general y calefacción.",
            gradient: "from-primary/20 to-accent/20",
            slug: "instalaciones-electricas-fontaneria"
        },
        {
            icon: <Hammer className="w-10 h-10" />,
            title: "Carpintería de Madera y Aluminio",
            description: "Suelos flotantes, puertas, armarios, muebles a medida. Carpintería de aluminio y PVC: ventanas y puertas correderas.",
            gradient: "from-accent/20 to-primary/20",
            slug: "carpinteria"
        },
        {
            icon: <Paintbrush className="w-10 h-10" />,
            title: "Pintura, Pladur y Albañilería",
            description: "Pintura interior y exterior, instalación de Pladur, tabiques, alicatados, solados y todo tipo de trabajos de albañilería.",
            gradient: "from-blue-500/20 to-accent/20",
            slug: "pintura-albanileria"
        }
    ];

    return (
        <section id="services" className="py-20 bg-[#0D1117]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Servicios Profesionales de Reforma
                    </h2>
                    <p className="text-lg text-white/70">
                        Soluciones integrales de construcción y reforma en Madrid. Desde instalaciones eléctricas y fontanería hasta carpintería y acabados finales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 backdrop-blur-sm">
                            <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                            <div className="p-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                                    <div className="text-accent">
                                        {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Link href={`/servicios/${service.slug}`} className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors group/link">
                                    Más información <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Call to action card */}
                    <div className="bg-gradient-to-br from-accent via-primary to-accent rounded-2xl p-8 flex flex-col justify-center items-start text-white shadow-xl shadow-accent/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-white/5 to-primary/0 group-hover:via-white/10 transition-all duration-500" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">¿Tienes otro proyecto en mente?</h3>
                            <p className="text-white/90 mb-8">
                                Cuéntanos tu idea, nos adaptamos a tus necesidades específicas.
                            </p>
                            <a
                                href="https://wa.me/34604154746"
                                className="inline-flex items-center text-white font-bold hover:text-white/80 transition-colors underline decoration-2 underline-offset-4"
                            >
                                Consultar ahora <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
