import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

                    {/* Column 1: Brand (Mobile: Order 1) */}
                    <div className="flex flex-col items-center md:items-start order-1 space-y-4">
                        <div className="relative w-32 h-12 md:w-40 md:h-14">
                            <Image
                                src="/logo.png"
                                alt="THASA Logo"
                                fill
                                className="object-contain object-center md:object-left"
                            />
                        </div>
                        <p className="text-slate-400 text-sm md:text-base text-center md:text-left max-w-xs leading-relaxed">
                            Reformas integrales y construcción de confianza.
                        </p>
                    </div>

                    {/* Column 2: Legal (Mobile: Order 3) */}
                    <div className="flex flex-col items-center md:items-start order-3 md:order-2 space-y-4">
                        <h3 className="text-slate-200 font-semibold text-lg hidden md:block">Legal</h3>
                        <ul className="space-y-3 text-center md:text-left">
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    Aviso Legal
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact (Mobile: Order 2) */}
                    <div className="flex flex-col items-center md:items-start order-2 md:order-3 space-y-4">
                        <h3 className="text-slate-200 font-semibold text-lg hidden md:block">Contacto</h3>
                        <div className="flex flex-col space-y-3 text-center md:text-left">
                            <a href="tel:+34604154746" className="text-slate-400 hover:text-white transition-colors text-sm">
                                +34 604 15 47 46
                            </a>
                            <a href="mailto:info@reformasthasa.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                                info@reformasthasa.com
                            </a>
                            <p className="text-slate-500 text-sm">
                                Zona de servicio: <span className="text-slate-400">Madrid y alrededores</span>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs text-center md:text-left">
                        &copy; {currentYear} THASA Reformas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
