"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export function ServiciosNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const services = [
        { title: "Reformas Integrales", href: "/servicios/reformas-integrales" },
        { title: "Baños y Cocinas", href: "/servicios/reformas-banos-cocinas" },
        { title: "Instalaciones Eléctricas", href: "/servicios/instalaciones-electricas-fontaneria" },
        { title: "Carpintería", href: "/servicios/carpinteria-madera-aluminio" },
        { title: "Pintura y Albañilería", href: "/servicios/pintura-pladur-albanileria" }
    ];

    return (
        <nav className="bg-[#1D1D1D] fixed w-full z-50 top-0 shadow-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end md:justify-between items-center h-22 py-2 relative">
                    {/* Logo - Centered on mobile, left on desktop */}
                    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none flex-shrink-0 flex items-center">
                        <div className="relative h-16 w-64">
                            <Image
                                src="/thiasa-logo-full.jpg"
                                alt="THIASA - Construcción y Diseño"
                                fill
                                className="object-contain transition-transform hover:scale-105"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-white hover:text-accent transition-colors font-medium"
                        >
                            Inicio
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group" ref={dropdownRef}>
                            <button
                                className="flex items-center gap-1 text-white hover:text-accent transition-colors font-medium"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Servicios
                                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={service.href}
                                        className="block px-4 py-3 text-slate-700 hover:bg-accent/10 hover:text-accent transition-colors border-b border-slate-100 last:border-0"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/#projects"
                            className="text-white hover:text-accent transition-colors font-medium"
                        >
                            Proyectos
                        </Link>

                        <a
                            href="https://wa.me/34604154746"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-primary text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-accent/50"
                        >
                            Solicitar Presupuesto
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-1">
                            <Link
                                href="/"
                                className="text-white hover:text-accent transition-colors px-4 py-3 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Inicio
                            </Link>

                            {/* Services Header */}
                            <div className="px-4 pt-4 pb-2">
                                <span className="text-white/50 text-xs uppercase tracking-wider font-bold">Servicios</span>
                            </div>

                            {/* Services List - Always Visible */}
                            <div className="space-y-1">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={service.href}
                                        className="block text-white/80 hover:text-accent hover:bg-white/5 transition-colors px-4 py-3 pl-8"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
