import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, CheckCircle2, Phone, ArrowLeft, Clock, Award, Wrench, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Reformas Integrales en Madrid | THIASA - Transformación Completa de Viviendas",
    description: "Especialistas en reformas integrales de viviendas en Madrid. Gestión completa desde demolición hasta acabados. ✓ Presupuesto gratis ✓ Garantía total ✓ +15 años experiencia.",
    keywords: "reformas integrales Madrid, reforma completa vivienda, reforma integral piso, demolición, distribución, instalaciones, acabados premium"
};

export default function ReformasIntegrales() {
    const benefits = [
        "Gestión completa del proyecto de principio a fin",
        "Coordinación de todos los gremios profesionales",
        "Demolición selectiva y gestión de escombros",
        "Nueva distribución y tabiquería",
        "Instalaciones eléctricas y fontanería renovadas",
        "Carpintería, suelos y acabados premium",
        "Pintura y detalles finales impecables",
        "Cumplimiento de plazos garantizado por contrato"
    ];

    const process = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "1. Consulta Inicial",
            description: "Visitamos tu vivienda y escuchamos tus necesidades"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "2. Proyecto y Presupuesto",
            description: "Diseñamos la reforma y te damos presupuesto detallado"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "3. Ejecución Profesional",
            description: "Realizamos la obra con acabados de máxima calidad"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "4. Entrega a Tiempo",
            description: "Te entregamos tu nueva vivienda en la fecha acordada"
        }
    ];

    const gallery = [
        { image: "/project-living-1.jpg", alt: "Reforma integral salón moderno" },
        { image: "/project-living-2.jpg", alt: "Reforma integral salón con iluminación" },
        { image: "/project-kitchen-1.jpg", alt: "Cocina reforma integral" },
        { image: "/project-kitchen-2.jpg", alt: "Cocina moderna reforma completa" },
        { image: "/project-bathroom-1.jpg", alt: "Baño reforma integral" },
        { image: "/hero-bg.png", alt: "Obra reforma integral en proceso" }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#1D1D1D] min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/project-living-2.jpg"
                        alt="Reformas integrales de viviendas en Madrid"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/95 via-[#1D1D1D]/80 to-[#1D1D1D]/60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/#services" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a servicios
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-accent/20 rounded-xl border border-accent/30">
                                <Home className="w-10 h-10 text-accent" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                                Reformas Integrales
                            </h1>
                        </div>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Transformación completa de tu vivienda. Nos encargamos de todo: desde la demolición hasta los acabados finales. Gestión profesional de principio a fin.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/34604154746?text=Hola, quiero información sobre reformas integrales"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/50"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Solicitar Presupuesto Gratis
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Descripción Detallada */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                                ¿Qué incluye una Reforma Integral?
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Una reforma integral es la transformación completa de tu vivienda. En THIASA nos encargamos de coordinar todos los trabajos necesarios para que solo tengas que preocuparte de disfrutar del resultado.
                            </p>

                            <div className="space-y-3 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-50 border-l-4 border-accent p-6 rounded-r-xl">
                                <p className="text-slate-700 font-medium">
                                    <strong className="text-slate-900">Garantía Total:</strong> Todos nuestros trabajos cuentan con garantía por escrito. Tu tranquilidad es nuestra prioridad.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/project-living-1.jpg"
                                alt="Ejemplo de reforma integral completada"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            ¿Cómo Trabajamos?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Un proceso claro y transparente para que sepas qué esperar en cada fase de tu reforma.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Galería de Proyectos */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Nuestras Reformas Integrales
                        </h2>
                        <p className="text-lg text-slate-600">
                            Ejemplos reales de viviendas transformadas por nuestro equipo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gallery.map((item, index) => (
                            <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-[#0D1117]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        ¿Listo para transformar tu vivienda?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Te damos un presupuesto detallado en 24 horas. Sin compromiso.
                    </p>
                    <a
                        href="https://wa.me/34604154746?text=Quiero un presupuesto para reforma integral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-10 py-5 bg-accent hover:bg-primary text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-accent/50 hover:shadow-accent/70"
                    >
                        <Phone className="w-6 h-6 mr-3" />
                        Contactar Ahora
                    </a>
                </div>
            </section>
        </main>
    );
}
