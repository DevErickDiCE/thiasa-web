import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1D1D1D] pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

                    {/* Column 1: Brand (Mobile: Order 1) */}
                    <div className="flex flex-col items-center md:items-start order-1 space-y-4">
                        <div className="relative w-56 h-20 md:w-72 md:h-24">
                            <Image
                                src="/thiasa-logo-full.jpg"
                                alt="THIASA - Empresa de Reformas Integrales en Madrid"
                                fill
                                className="object-contain object-center md:object-left"
                            />
                        </div>
                        <p className="text-white/70 text-sm md:text-base text-center md:text-left max-w-xs leading-relaxed">
                            Especialistas en reformas integrales, instalaciones y carpintería. Calidad y confianza desde 2010.
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col items-center md:items-start order-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg hidden md:block">Servicios</h3>
                        <ul className="space-y-3 text-center md:text-left">
                            <li><Link href="/servicios/reformas-integrales" className="text-white/70 hover:text-accent transition-colors text-sm">Reformas Integrales</Link></li>
                            <li><Link href="/servicios/reformas-banos-cocinas" className="text-white/70 hover:text-accent transition-colors text-sm">Baños y Cocinas</Link></li>
                            <li><Link href="/servicios/instalaciones-electricas-fontaneria" className="text-white/70 hover:text-accent transition-colors text-sm">Instalaciones</Link></li>
                            <li><Link href="/servicios/carpinteria-madera-aluminio" className="text-white/70 hover:text-accent transition-colors text-sm">Carpintería</Link></li>
                            <li><Link href="/servicios/pintura-pladur-albanileria" className="text-white/70 hover:text-accent transition-colors text-sm">Pintura y Albañilería</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact (Mobile: Order 2) */}
                    <div className="flex flex-col items-center md:items-start order-3 space-y-4">
                        <h3 className="text-white font-semibold text-lg hidden md:block">Contacto Rápido</h3>
                        <div className="flex flex-col space-y-3 text-center md:text-left w-full">
                            <a href="https://wa.me/34604154746" target="_blank" className="inline-flex items-center justify-center md:justify-start px-4 py-2 bg-accent hover:bg-sky-400 text-white rounded-lg text-sm font-bold transition-colors">
                                WhatsApp
                            </a>
                            <a href="tel:+34604154746" className="inline-flex items-center justify-center md:justify-start px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold transition-colors border border-white/20">
                                Llamar ahora
                            </a>
                            <p className="text-white/60 text-xs mt-2">
                                info@thasa.es
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-xs text-center md:text-left">
                        &copy; {currentYear} THASA Reformas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
