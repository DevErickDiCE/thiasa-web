import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hammer, CheckCircle2, Phone, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Carpintería de Madera y Aluminio Madrid | THIASA - Puertas, Ventanas y Suelos",
    description: "Carpintería de madera y aluminio en Madrid. Suelos flotantes, puertas, armarios, ventanas y puertas correderas de PVC. ✓ Medidas exactas ✓ Instalación profesional.",
    keywords: "carpintería madera Madrid, carpintería aluminio PVC, suelos flotantes, puertas, armarios medida, ventanas aluminio, puertas correderas"
};

export default function Carpinteria() {
    const services = [
        "Suelos de madera y tarima flotante",
        "Puertas de interior y blindadas",
        "Armarios empotrados a medida",
        "Muebles de cocina personalizados",
        "Ventanas de aluminio y PVC",
        "Puertas correderas y corredizas",
        "Cerramientos de terrazas",
        "Instalación profesional garantizada"
    ];

    return (
        <main>
            <section className="relative bg-[#1D1D1D] min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/project-living-1.jpg" alt="Carpintería de madera y aluminio" fill className="object-cover opacity-30" />
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
                                <Hammer className="w-10 h-10 text-accent" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                                Carpintería de Madera y Aluminio
                            </h1>
                        </div>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Trabajos de carpintería en madera, aluminio y PVC. Desde suelos flotantes hasta ventanas. Medidas exactas y acabados perfectos.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, necesito información sobre carpintería"
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Servicios de Carpintería</h2>
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
                            <Image src="/project-living-2.jpg" alt="Trabajos de carpintería" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#0D1117]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        ¿Necesitas un carpintero profesional?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">Te asesoramos y damos presupuesto gratis.</p>
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
