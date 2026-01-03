"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, CheckCircle2, Phone, ArrowLeft, Clock, Award, Wrench, Users, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReformasIntegrales() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);

    const benefits = [
        "Gestión completa del proyecto desde el diseño hasta la entrega",
        "Coordinación de todos los gremios: electricistas, fontaneros, carpinteros",
        "Demolición selectiva y gestión legal de escombros",
        "Nueva distribución optimizada según tus necesidades",
        "Instalaciones eléctricas y fontanería certificadas",
        "Carpintería de calidad: suelos, puertas y armarios",
        "Pintura con acabados profesionales y garantía",
        "Cumplimiento estricto de plazos por contrato"
    ];

    const process = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "1. Visita y Consulta",
            description: "Visitamos tu vivienda en Madrid para evaluar la reforma integral"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "2. Proyecto y Presupuesto",
            description: "Diseño 3D de la reforma y presupuesto detallado sin sorpresas"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "3. Ejecución Total",
            description: "Realizamos la reforma integral con acabados de máxima calidad"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "4. Entrega Puntual",
            description: "Tu vivienda reformada en la fecha acordada con garantía"
        }
    ];

    const gallery = [
        {
            image: "/project-living-3.jpg",
            alt: "Reforma integral de salón en Madrid con iluminación LED perimetral",
            description: "Reforma integral: salón moderno con iluminación LED indirecta"
        },
        {
            image: "/project-living-4.jpg",
            alt: "Salón completamente reformado con LED en vivienda Madrid",
            description: "Reforma completa de salón comedor con falso techo LED"
        },
        {
            image: "/project-living-5.jpg",
            alt: "Reforma integral salón diáfano Madrid LED",
            description: "Vista alternativa del salón con distribución moderna"
        },
        {
            image: "/project-bedroom-2.jpg",
            alt: "Dormitorio reforma integral Madrid con papel pintado",
            description: "Reforma integral incluye habitaciones con acabados premium"
        },
        {
            image: "/project-hallway-1.jpg",
            alt: "Pasillo reformado con iluminación LED Madrid",
            description: "Distribuidor con techo LED y papel decorativo"
        },
        {
            image: "/project-bathroom-2.jpg",
            alt: "Baño renovado en reforma integral con espejo LED Madrid",
            description: "Reforma integral: baño completo con espejo LED circular"
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
                return prev + (100 / 40); // 4000ms / 100 steps
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

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
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
            {/* Hero Section - Minimalist */}
            <section className="relative bg-[#1D1D1D] min-h-[550px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/project-living-2.jpg"
                        alt="Empresa de reformas integrales de viviendas en Madrid"
                        fill
                        className="object-cover opacity-40"
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
                            Reformas Integrales de Viviendas en Madrid
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                            Transformamos tu vivienda de principio a fin. Gestión completa y garantizada.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, quiero presupuesto para reforma integral"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-accent/50 hover:shadow-xl hover:scale-105"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Presupuesto Gratis en 24h
                        </a>
                    </div>
                </div>
            </section>

            {/* Premium Carousel Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Nuestras Reformas Integrales
                        </h2>
                        <p className="text-lg text-slate-600">
                            Ejemplos reales de viviendas transformadas por nuestro equipo profesional.
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

                            <div className="bg-white border-l-4 border-accent p-6 rounded-r-xl shadow-md">
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
            <section className="py-20 bg-white">
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
                            <div key={index} className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
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
                            ¿Listo para transformar tu vivienda?
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Te damos un presupuesto detallado en 24 horas. Sin compromiso.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/34604154746?text=Hola, quiero presupuesto para reforma integral"
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
