"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { title: "Reformas Integrales", href: "/servicios/reformas-integrales" },
  { title: "Baños y Cocinas", href: "/servicios/reformas-banos-cocinas" },
  { title: "Instalaciones Eléctricas y Fontanería", href: "/servicios/instalaciones-electricas-fontaneria" },
  { title: "Carpintería de Madera y Aluminio", href: "/servicios/carpinteria-madera-aluminio" },
  { title: "Pintura, Pladur y Albañilería", href: "/servicios/pintura-pladur-albanileria" },
  { title: "Locales Comerciales", href: "/servicios/reformas-locales-comerciales" },
];

const links = [
  { title: "Proyectos", href: "/proyectos" },
  { title: "Empresa", href: "/sobre-nosotros" },
  { title: "Blog", href: "/blog" },
  { title: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://wa.me/34604154746";

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const servicesActive = pathname.startsWith("/servicios");

  // Cierra el desplegable de servicios al pulsar fuera o con Escape
  useEffect(() => {
    if (!isServicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsServicesOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isServicesOpen]);

  const linkClass = (active: boolean) =>
    `relative py-2 text-sm font-bold uppercase tracking-wider transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent after:transition-all after:duration-300 ${
      active ? "text-white after:w-full" : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1D1D1D] border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end md:justify-between items-center h-20 relative">
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 flex-shrink-0 flex items-center">
            <div className="relative h-14 w-56">
              <Image
                src="/thiasa-logo-full.jpg"
                alt="THIASA - Construcción y Diseño"
                fill
                sizes="224px"
                className="object-contain object-center md:object-left"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`${linkClass(servicesActive)} inline-flex items-center gap-1`}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-2xl shadow-black/30 border border-black/5 p-2 origin-top transition-all duration-200 ${
                  isServicesOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(service.href) ? "bg-accent/10 text-primary" : "text-[#1D1D1D] hover:bg-background hover:text-primary"
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/#services"
                  onClick={() => setIsServicesOpen(false)}
                  className="mt-1 block px-4 py-3 rounded-xl text-sm font-bold text-accent hover:bg-background transition-colors border-t border-black/5"
                >
                  Ver todos los servicios →
                </Link>
              </div>
            </div>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
                {link.title}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-location="navbar_desktop"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-full text-white bg-accent hover:bg-primary transition-all shadow-md shadow-black/30 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Presupuesto
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1D1D1D] border-t border-white/10 max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">Servicios</p>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-[15px] font-semibold ${
                  isActive(service.href) ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {service.title}
              </Link>
            ))}
            <div className="my-3 border-t border-white/10" />
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-bold ${
                  isActive(link.href) ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.title}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-location="navbar_mobile"
              className="flex items-center justify-center w-full mt-4 px-5 py-3.5 rounded-xl text-base font-bold text-white bg-accent hover:bg-primary active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
