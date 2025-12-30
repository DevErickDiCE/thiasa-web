import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Paintbrush, CheckCircle2, Phone, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Pintura, Pladur y Albañilería Madrid | THIASA - Acabados Profesionales",
    description: "Servicios de pintura, instalación de Pladur y trabajos de albañilería en Madrid. Alicatados, solados, tabiques. ✓ Presupuesto gratis ✓ Acabados impecables.",
    keywords: "pintura Madrid, pladur Madrid, albañilería, alicatados, solados, tabiques, pintura interior exterior, alisado paredes"
};

export default function PinturaPladurAlbanileria() {
    const services = [
        "Pintura interior y exterior",
        "Alisado de paredes y gotelé",
        "Instalación y montaje de Pladur",
        "Tabiques y trasdosados",
        "Alicatados de baños y cocinas",
        "Solados cerámicos y porcelánicos",
        "Trabajos de albañilería en general",
        "Reparaciones y mantenimiento"
    ];

    return (
        <main>
            <section className="relative bg-[#1D1D1D] min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/hero-bg.png" alt="Pintura, Pladur y Albañilería" fill className="object-cover opacity-30" />
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
                                <Paintbrush className="w-10 h-10 text-accent" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                                Pintura, Pladur y Albañilería
                            </h1>
                        </div>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Acabados profesionales en pintura, instalación de Pladur y trabajos de albañilería. Terminaciones impecables garantizadas.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, necesito información sobre pintura/pladur/albañilería"
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Nuestros Servicios</h2>
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
                            <Image src="/project-living-1.jpg" alt="Trabajos de pintura y acabados" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#0D1117]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        ¿Necesitas pintar o hacer obra?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">Presupuesto detallado sin compromiso.</p>
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
