"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/34604154746";

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1D1D1D] border-b border-white/10 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
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
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
              Servicios
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
              Proyectos
            </Link>
            <Link href="#why-us" className="text-gray-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
              Por Qué Elegirnos
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-full text-white bg-accent hover:bg-primary transition-all shadow-lg shadow-[#38B6FF]/50 hover:shadow-[#38B6FF]/70 hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Presupuesto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1D1D1D] border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-bold text-gray-300 hover:text-white hover:bg-white/5"
            >
              Servicios
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-bold text-gray-300 hover:text-white hover:bg-white/5"
            >
              Proyectos
            </Link>
            <Link
              href="#why-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-bold text-gray-300 hover:text-white hover:bg-white/5"
            >
              Por qué elegirnos
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg text-base font-bold text-white bg-accent hover:bg-primary"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
