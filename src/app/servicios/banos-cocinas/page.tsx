import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bath, CheckCircle2, Phone, ArrowLeft, Droplets, Sparkles, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Reforma de Baños y Cocinas en Madrid | THIASA - Diseño y Calidad",
    description: "Especialistas en reforma de baños y cocinas en Madrid. Diseño moderno, alicatados, fontanería y muebles a medida. ✓ Presupuesto gratis ✓ Acabados premium ✓ Garantía total.",
    keywords: "reforma de baños Madrid, reforma de cocinas Madrid, alicatados, sanitarios, muebles cocina medida, fontanería, grifería"
};

export default function BanosCocinas() {
    const benefits = [
        "Diseño personalizado adaptado a tus necesidades",
        "Alicatados y solados de alta calidad",
        "Fontanería y grifería moderna",
        "Sanitarios y electrodomésticos de primeras marcas",
        "Muebles de cocina y baño a medida",
        "Iluminación LED integrada",
        "Impermeabilizaciones garantizadas",
        "Optimización del espacio disponible"
    ];

    const features = [
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Baños Modernos",
            description: "Renovación completa con sanitarios de diseño, platos de ducha, mamparas y acabados impecables."
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Cocinas Funcionales",
            description: "Diseño ergonómico con muebles a medida, encimeras resistentes y electrodomésticos integrados."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Garantía Total",
            description: "Todos los materiales y trabajos con guarantía. Fontanería sin fugas, alicatados perfectos."
        }
    ];

    const gallery = [
        { image: "/project-bathroom-1.jpg", alt: "Reforma de baño con suelo hidráulico" },
        { image: "/project-kitchen-1.jpg", alt: "Reforma de cocina moderna" },
        { image: "/project-kitchen-2.jpg", alt: "Cocina con zona de lavado integrada" },
        { image: "/project-bathroom-1.jpg", alt: "Baño reformado completo" },
        { image: "/project-kitchen-1.jpg", alt: "Alicatado de cocina" },
        { image: "/project-kitchen-2.jpg", alt: "Muebles de cocina a medida" }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#1D1D1D] min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/project-kitchen-1.jpg"
                        alt="Reforma de baños y cocinas en Madrid"
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
                                <Bath className="w-10 h-10 text-accent" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                                Reforma de Baños y Cocinas
                            </h1>
                        </div>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Diseñamos y ejecutamos la reforma completa de tu baño o cocina. Desde el diseño hasta los acabados finales, con materiales de primera calidad.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/34604154746?text=Hola, quiero información sobre reforma de baños/cocinas"
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
                                Baños y Cocinas que Enamoran
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                La reforma de baños y cocinas requiere experiencia y atención al detalle. En THIASA combinamos funcionalidad con estética para crear espacios que mejoren tu día a día.
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
                                    <strong className="text-slate-900">Trabajamos con las mejores marcas:</strong> Roca, Grohe, Silestone, Santos y más. Calidad garantizada.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/project-bathroom-1.jpg"
                                alt="Ejemplo de reforma de baño completada"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            ¿Qué Hacemos Diferente?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
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
                            Reformas de Baños y Cocinas
                        </h2>
                        <p className="text-lg text-slate-600">
                            Proyectos reales que reflejan nuestra calidad y dedicación.
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
                        ¿Quieres renovar tu baño o cocina?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Diseño personalizado y presupuesto sin compromiso en 24 horas.
                    </p>
                    <a
                        href="https://wa.me/34604154746?text=Quiero un presupuesto para reforma de baño/cocina"
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
