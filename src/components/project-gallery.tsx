"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, MessageCircle, ArrowRight, ZoomIn } from "lucide-react";

import { PROYECTOS, type Proyecto } from "@/lib/proyectos";

export function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedProject]);

    // Los datos viven en src/lib/proyectos.ts, compartidos con /proyectos.
    const projects = PROYECTOS;

    const openModal = (project: Proyecto) => {
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
                <div data-reveal className="text-center mb-16">
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
                        Trabajos reales
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        Nuestros Últimos Proyectos
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                        Reformas integrales de calidad. Trabajos reales que demuestran nuestro compromiso con la excelencia y el detalle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
                            data-reveal
                            style={{ "--reveal-delay": Math.min(index, 5) } as CSSProperties}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:shadow-black/25 transition-all duration-500 hover:-translate-y-1"
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
                                <span className="inline-block px-3 py-1 bg-accent text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-md text-white">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1 leading-tight group-hover:text-accent transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' }}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Ficha de cada obra, con texto indexable, en /proyectos */}
                <div className="mt-10 text-center">
                    <Link href="/proyectos" className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors">
                        Ver la ficha de cada proyecto
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
                        data-ga-location="project_gallery"
                        className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contactar por WhatsApp
                    </a>
                </div>

                {/* Modal Overlay */}
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="modal-backdrop absolute inset-0 bg-primary/90 backdrop-blur-sm"
                            onClick={closeModal}
                        />

                        <div className="modal-panel relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row">

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
                                        data-ga-location="project_gallery_modal"
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
