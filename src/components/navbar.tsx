"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/34604154746";

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1A1A1A] border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative h-20 w-48">
              <Image
                src="/logo.png"
                alt="THIASA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              Servicios
            </Link>
            <Link href="#projects" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              Proyectos
            </Link>
            <Link href="#why-us" className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              Por qué elegirnos
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_20px_rgba(37,99,235,0.7)]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Presupuesto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-b border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Servicios
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Proyectos
            </Link>
            <Link
              href="#why-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Por qué elegirnos
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg text-base font-bold text-white bg-blue-600 hover:bg-blue-500"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
