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
            title: "Reforma Integral Salón LED",
            category: "Reforma Integral",
            image: "/project-living-3.jpg",
            gallery: ["/project-living-3.jpg", "/project-living-4.jpg", "/project-living-5.jpg"],
            description: "Reforma integral de salón con iluminación LED perimetral indirecta. Suelo de madera natural, muebles a medida y distribución óptima del espacio.",
            details: [
                "Falso techo con iluminación LED perimetral",
                "Instalación suelo tarima roble",
                "Muebles blancos a medida",
                "Climatización y domótica"
            ]
        },
        {
            id: 2,
            title: "Cocina con Barra Americana",
            category: "Cocina",
            image: "/project-kitchen-3.jpg",
            gallery: ["/project-kitchen-3.jpg", "/project-kitchen-4.jpg", "/project-kitchen-5.jpg"],
            description: "Cocina moderna con barra americana y pared de ladrillo visto original. Muebles en blanco mate, encimera de cuarzo y electrodomésticos integrados.",
            details: [
                "Pared de ladrillo caravista restaurada",
                "Barra americana con iluminación colgante",
                "Encimera cuarzo blanco nieves",
                "Alicatado gris perla satinado"
            ]
        },
        {
            id: 3,
            title: "Baño con Espejo LED",
            category: "Baño",
            image: "/project-bathroom-2.jpg",
            gallery: ["/project-bathroom-2.jpg", "/project-bathroom-1.jpg"],
            description: "Baño moderno con espejo circular retroiluminado LED. Suelo hidráulico geométrico, radiador toallero blanco y acabados premium.",
            details: [
                "Espejo LED circular de diseño",
                "Suelo hidráulico decorativo",
                "Radiador toallero moderno",
                "Mueble suspendido con cajones"
            ]
        },
        {
            id: 4,
            title: "Dormitorio con Papel Pintado",
            category: "Reforma Integral",
            image: "/project-bedroom-2.jpg",
            gallery: ["/project-bedroom-2.jpg", "/project-bedroom-1.jpg"],
            description: "Habitación elegante con papel pintado decorativo en cabecero. Lámpara de diseño, suelo de madera y ambiente acogedor.",
            details: [
                "Papel pintado vinílico de diseño",
                "Lámpara colgante de diseño moderno",
                "Suelo laminado tono natural",
                "Molduras decorativas en techo"
            ]
        },
        {
            id: 5,
            title: "Pasillo con Iluminación LED",
            category: "Reforma Integral",
            image: "/project-hallway-1.jpg",
            gallery: ["/project-hallway-1.jpg"],
            description: "Distribuidor empapelado y reforma completa con LED integrado en techo. Aprovechamiento máximo del espacio con muebles a medida.",
            details: [
                "Falso techo con ranuras LED",
                "Papel decorativo en paredes",
                "Suelo continuo de madera",
                "Muebles TV suspendidos"
            ]
        },
        {
            id: 6,
            title: "Cocina con Papel Decorativo",
            category: "Cocina",
            image: "/project-kitchen-4.jpg",
            gallery: ["/project-kitchen-4.jpg", "/project-kitchen-5.jpg"],
            description: "Diseño único con barra y papel pintado decorativo floral. Combinación de ladrillo visto con elementos modernos y funcionales.",
            details: [
                "Papel pintado vinílico lavable",
                "Barra lacada blanco brillo",
                "Pared ladrillo caravista",
                "Lámparas colgantes de diseño"
            ]
        },
        {
            id: 7,
            title: "Cocina Blanca y Madera",
            category: "Cocina",
            image: "/project-kitchen-new-1.jpg",
            gallery: [
                "/project-kitchen-new-1.jpg",
                "/project-kitchen-new-2.jpg",
                "/project-kitchen-new-3.jpg",
                "/project-kitchen-new-4.jpg",
                "/project-kitchen-new-5.jpg"
            ],
            description: "Reforma de cocina luminosa combinando mobiliario blanco con encimera y frente de madera. Contrastes elegantes con grifería y fregadero en negro mate.",
            details: [
                "Mobiliario blanco mate minimalista",
                "Encimera y frontal acabado madera",
                "Grifería y fregadero negro mate",
                "Iluminación LED bajo muebles altos"
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
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        Nuestros Últimos Proyectos
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                        Reformas integrales de calidad. Trabajos reales que demuestran nuestro compromiso con la excelencia y el detalle.
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
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 text-primary px-6 py-3 rounded-full font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center shadow-lg">
                                        <ZoomIn className="w-5 h-5 mr-2" />
                                        Ver proyecto
                                    </div>
                                </div>
                                {/* Darker gradient for better text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                                <span className="inline-block px-3 py-1 bg-accent text-xs font-bold uppercase tracking-wider rounded-lg mb-3 shadow-xl text-white">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-1 leading-tight group-hover:text-accent transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' }}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Section CTA */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        ¿Tu hogar merece esta calidad?
                    </h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Cada reforma es única. Cuéntanos tu idea y te asesoramos sin compromiso sobre las mejores opciones para tu proyecto.
                    </p>
                    <a
                        href="https://wa.me/34604154746?text=Hola, he visto vuestros trabajos y me gustaría pedir presupuesto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contactar por WhatsApp
                    </a>
                </div>

                {/* Modal Overlay */}
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="absolute inset-0 bg-primary/90 backdrop-blur-sm transition-opacity"
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
                                <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-3xl font-bold text-primary mb-6 leading-tight">
                                    {selectedProject.title}
                                </h3>

                                <p className="text-foreground/70 leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wide border-b border-slate-100 pb-2">
                                    Detalles del Proyecto
                                </h4>
                                <ul className="space-y-3 mb-10">
                                    {selectedProject.details.map((detail, index) => (
                                        <li key={index} className="flex items-start text-slate-600">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                                            <span className="text-sm text-foreground/70">{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <a
                                        href={`https://wa.me/34604154746?text=Hola, he visto el proyecto "${selectedProject.title}" y me gustaría solicitar un presupuesto similar.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center px-6 py-4 bg-accent hover:bg-primary text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-accent/30 group"
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
        </section >
    );
}
