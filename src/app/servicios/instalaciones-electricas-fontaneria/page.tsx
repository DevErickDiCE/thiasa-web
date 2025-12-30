import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, CheckCircle2, Phone, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Instalaciones Eléctricas y Fontanería Madrid | THIASA - Profesionales Certificados",
    description: "Instalaciones eléctricas, fontanería, aire acondicionado y suelo radiante en Madrid. ✓ Electricistas y fontaneros certificados ✓ Presupuesto gratis ✓ Garantía total.",
    keywords: "instalaciones eléctricas Madrid, fontanería Madrid, aire acondicionado, suelo radiante, cuadros eléctricos, calefacción"
};

export default function InstalacionesElectricasFontaneria() {
    const services = [
        "Instalaciones eléctricas completas y certificadas",
        "Cuadros eléctricos y automatizaciones",
        "Fontanería general y reparaciones",
        "Instalación de aire acondicionado",
        "Suelo radiante eléctrico y por agua",
        "Sistemas de calefacción eficientes",
        "Domótica y control inteligente",
        "Mantenimiento preventivo"
    ];

    return (
        <main>
            <section className="relative bg-[#1D1D1D] min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/hero-bg.png" alt="Instalaciones eléctricas y fontanería" fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/95 via-[#1D1D1D]/80 to-[#1D1D1D]/60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/#services" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a servicios
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-accent/20 rounded-xl border border-accent/30">
                                <Zap className="w-10 h-10 text-accent" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                                Instalaciones Eléctricas y Fontanería
                            </h1>
                        </div>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Electricistas y fontaneros certificados. Instalaciones nuevas, reparaciones y mantenimiento con garantía profesional.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, necesito información sobre instalaciones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/50"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Solicitar Presupuesto Gratis
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Nuestros Servicios de Instalaciones</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            {services.map((service, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{service}</span>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <Image src="/hero-bg.png" alt="Instalaciones profesionales" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#0D1117]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        ¿Necesitas un electricista o fontanero?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">Presupuesto sin compromiso en 24 horas.</p>
                    <a
                        href="https://wa.me/34604154746"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-10 py-5 bg-accent hover:bg-primary text-white text-lg font-bold rounded-xl shadow-lg"
                    >
                        <Phone className="w-6 h-6 mr-3" />
                        Contactar Ahora
                    </a>
                </div>
            </section>
        </main>
    );
}
