"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bath, CheckCircle2, Phone, ArrowLeft, Droplets, Sparkles, Shield, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReformasBanosCocinas() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);

    const benefits = [
        "Diseño 3D previo de tu reforma de baño o cocina",
        "Alicatados y solados de alta calidad según normativa",
        "Fontanería certificada y grifería de primeras marcas",
        "Sanitarios suspendidos y platos de ducha a medida",
        "Muebles de cocina y baño personalizados",
        "Iluminación LED empotrada y regulable",
        "Impermeabilizaciones con garantía de 10 años",
        "Optimización de espacios pequeños"
    ];

    const features = [
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Reforma de Baños Completa",
            description: "Especialistas en reforma de baños en Madrid. Platos de ducha, mamparas, sanitarios de diseño y alicatados premium con acabados impecables."
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Reforma de Cocinas Integrales",
            description: "Reforma de cocinas con muebles a medida, encimeras de Silestone o cuarzo, electrodomésticos integrados y distribución optimizada."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Garantía y Calidad",
            description: "Todas nuestras reformas de baños y cocinas incluyen garantía por escrito. Trabajamos con Roca, Grohe, Silestone y Santos."
        }
    ];

    const gallery = [
        {
            image: "/project-bathroom-1.jpg",
            alt: "Reforma completa de baño en Madrid con suelo hidráulico",
            description: "Reforma de baño completo: plato de ducha, sanitarios suspendidos y alicatados"
        },
        {
            image: "/project-kitchen-1.jpg",
            alt: "Reforma integral de cocina moderna con muebles a medida",
            description: "Reforma de cocina con muebles Santos y electrodomésticos Bosch integrados"
        },
        {
            image: "/project-kitchen-2.jpg",
            alt: "Reforma de cocina con isla central y zona de lavado",
            description: "Reforma de cocina funcional con isla central y almacenaje optimizado"
        },
        {
            image: "/project-bathroom-1.jpg",
            alt: "Reforma de baño pequeño aprovechando el espacio",
            description: "Reforma de baño pequeño con ducha, mueble suspendido y espejo retroiluminado"
        },
        {
            image: "/project-kitchen-1.jpg",
            alt: "Alicatado de cocina premium en reforma integral",
            description: "Reforma de cocina: alicatados hasta el techo y encimera de Silestone"
        },
        {
            image: "/project-kitchen-2.jpg",
            alt: "Muebles de cocina a medida en reforma completa",
            description: "Reforma de cocina con mobiliario lacado y sistema de extracción integrado"
        }
    ];

    // Auto-advance with progress bar
    useEffect(() => {
        if (!isPlaying) return;

        setProgress(0);

        progressInterval.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentSlide((current) => (current + 1) % gallery.length);
                    return 0;
                }
                return prev + (100 / 40);
            });
        }, 100);

        return () => {
            if (progressInterval.current) clearInterval(progressInterval.current);
        };
    }, [currentSlide, isPlaying, gallery.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % gallery.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#1D1D1D] min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/project-kitchen-1.jpg"
                        alt="Empresa de reforma de baños y cocinas en Madrid"
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
                                Reforma de Baños y Cocinas en Madrid
                            </h1>
                        </div>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Especialistas en reforma de baños y cocinas en Madrid. Diseño, alicatados, fontanería, muebles a medida y electrodomésticos. Más de 15 años transformando espacios.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/34604154746?text=Hola, quiero presupuesto para reforma de baño/cocina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/50"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Presupuesto Gratis en 24h
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Carousel Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Reformas de Baños y Cocinas
                        </h2>
                        <p className="text-lg text-slate-600">
                            Proyectos reales que reflejan nuestra calidad y atención al detalle.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Main carousel container */}
                        <div
                            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
                            onMouseEnter={() => setIsPlaying(false)}
                            onMouseLeave={() => setIsPlaying(true)}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {gallery.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ${index === currentSlide
                                        ? 'opacity-100 z-10 translate-x-0'
                                        : index < currentSlide
                                            ? 'opacity-0 z-0 -translate-x-full'
                                            : 'opacity-0 z-0 translate-x-full'
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        className={`object-cover transition-transform duration-[8000ms] ${index === currentSlide ? 'scale-105' : 'scale-100'
                                            }`}
                                        priority={index === 0}
                                    />

                                    {/* Image description overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                                        <p className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Progress bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30">
                                <div
                                    className="h-full bg-accent transition-all duration-100 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100"
                                aria-label="Anterior imagen"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-20 opacity-0 group-hover:opacity-100"
                                aria-label="Siguiente imagen"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="mt-6 grid grid-cols-6 gap-3">
                            {gallery.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all ${index === currentSlide
                                        ? 'ring-4 ring-accent scale-105 shadow-lg'
                                        : 'ring-2 ring-slate-200 hover:ring-accent/50 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`Miniatura ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Descripción Detallada */}
            <section className="py-20 bg-slate-50">
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

                            <div className="bg-white border-l-4 border-accent p-6 rounded-r-xl shadow-md">
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
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            ¿Qué Hacemos Diferente?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
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
                            Disponibles Ahora
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                            ¿Quieres renovar tu baño o cocina?
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Diseño personalizado y presupuesto sin compromiso en 24 horas.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/34604154746?text=Hola, quiero presupuesto para reforma de baño/cocina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent to-primary text-white text-lg font-bold rounded-xl shadow-2xl shadow-accent/50 hover:shadow-accent/70 hover:scale-105 transition-all"
                            >
                                <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                                Contactar por WhatsApp
                            </a>

                            <a
                                href="tel:+34604154746"
                                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-lg font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-accent transition-all"
                            >
                                <Phone className="w-6 h-6 mr-3" />
                                604 154 746
                            </a>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 inline-flex items-center gap-2 text-white/50 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Sin compromiso • Presupuesto gratuito • Respuesta inmediata</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
