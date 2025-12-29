"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle, ArrowRight, ZoomIn } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    gallery: string[];
    description: string;
    details: string[];
}

export function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedProject]);

    const projects: Project[] = [
        {
            id: 1,
            title: "Reforma Integral de Cocina",
            category: "Cocina",
            image: "/project-kitchen-1.jpg",
            gallery: ["/project-kitchen-1.jpg", "/project-kitchen-2.jpg"],
            description: "Transformación total de cocina cerrada a concepto abierto. Diseño moderno con isla central, encimeras de cuarzo y acabados premium.",
            details: [
                "Demolición y nueva distribución",
                "Mobiliario a medida con isla",
                "Iluminación LED integrada",
                "Fontanería y electricidad nueva"
            ]
        },
        {
            id: 2,
            title: "Baño con Suelo Hidráulico",
            category: "Baño",
            image: "/project-bathroom-1.jpg",
            gallery: ["/project-bathroom-1.jpg"],
            description: "Renovación de baño con un toque clásico y moderno. Instalación de suelo hidráulico, pared de ladrillo visto y grifería negra mate.",
            details: [
                "Alicatado parcial y ladrillo visto",
                "Suelo hidráulico geométrico",
                "Mueble suspendido blanco",
                "Radiador toallero de diseño"
            ]
        },
        {
            id: 3,
            title: "Rehabilitación Salón Comedor",
            category: "Reforma Integral",
            image: "/project-living-2.jpg",
            gallery: ["/project-living-2.jpg", "/project-living-1.jpg"],
            description: "Reforma integral de zona de estar. Iluminación indirecta con foseado LED, restauración de elementos originales y distribución diáfana.",
            details: [
                "Falsos techos con luz indirecta",
                "Alisado de paredes",
                "Suelo laminado roble",
                "Climatización split"
            ]
        },
        {
            id: 4,
            title: "Cocina con Zona de Lavado",
            category: "Cocina",
            image: "/project-kitchen-2.jpg",
            gallery: ["/project-kitchen-2.jpg", "/project-kitchen-1.jpg"],
            description: "Optimización máxima del espacio incluyendo zona de lavado integrada. Alicatado tipo metro en color agua marina y muebles blancos.",
            details: [
                "Mobiliario blanco brillo",
                "Alicatado color texturizado",
                "Zona de lavado oculta",
                "Encimera resistente"
            ]
        },
        {
            id: 5,
            title: "Detalles que Marcan Diferencia",
            category: "Baño",
            image: "/project-bathroom-1.jpg",
            gallery: ["/project-bathroom-1.jpg"],
            description: "Cuidamos cada acabado. En este baño combinamos texturas naturales como el ladrillo con líneas modernas y limpias.",
            details: [
                "Recuperación de pared original",
                "Espejo circular de diseño",
                "Iluminación cálida",
                "Acabados en negro mate"
            ]
        },
        {
            id: 6,
            title: "Espacios Luminosos",
            category: "Reforma Integral",
            image: "/project-living-1.jpg",
            gallery: ["/project-living-1.jpg", "/project-living-2.jpg"],
            description: "Aprovechamiento de la luz natural. Espacios conectados visualmente pero bien definidos para una vida cómoda y moderna.",
            details: [
                "Ventanales y cerramientos",
                "Decoración minimalista",
                "Iluminación focalizada",
                "Suelos continuos"
            ]
        }
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    };

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Proyectos Recientes
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Descubre la calidad de nuestros acabados. Resultados reales para clientes exigentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay with Zoom Icon */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 text-slate-900 px-6 py-3 rounded-full font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center shadow-lg">
                                        <ZoomIn className="w-5 h-5 mr-2" />
                                        Ver proyecto
                                    </div>
                                </div>
                                {/* Gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-lg mb-3 shadow-md">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-1 leading-tight group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Overlay */}
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity"
                            onClick={closeModal}
                        />

                        <div className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Gallery Side */}
                            <div className="relative h-64 md:h-auto md:w-3/5 bg-slate-100">
                                <Image
                                    src={selectedProject.gallery[currentImageIndex]}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Navigation Arrows */}
                                {selectedProject.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                        {/* Dots */}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                            {selectedProject.gallery.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="flex flex-col p-8 md:p-10 md:w-2/5 overflow-y-auto">
                                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                    {selectedProject.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wide border-b border-slate-100 pb-2">
                                    Detalles del Proyecto
                                </h4>
                                <ul className="space-y-3 mb-10">
                                    {selectedProject.details.map((detail, index) => (
                                        <li key={index} className="flex items-start text-slate-600">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                            <span className="text-sm">{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <a
                                        href={`https://wa.me/34604154746?text=Hola, he visto el proyecto "${selectedProject.title}" y me gustaría solicitar un presupuesto similar.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-600/30 group"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        Pedir presupuesto similar
                                        <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <p className="text-xs text-slate-400 text-center mt-3">
                                        Respuesta rápida garantizada
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
