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
            <section className="relative bg-[#1D1D1D] min-h-[550px] flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/project-living-1.jpg" alt="Carpintería de madera y aluminio Madrid - THIASA" fill className="object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/90 via-[#1D1D1D]/75 to-[#1D1D1D]/60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Link href="/#services" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a servicios
                    </Link>

                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Carpintería de Madera, Aluminio y PVC en Madrid
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                            Suelos, puertas, armarios y ventanas a medida. Instalación profesional garantizada.
                        </p>

                        <a
                            href="https://wa.me/34604154746?text=Hola, necesito información sobre carpintería"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-primary text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-accent/50 hover:shadow-xl hover:scale-105"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Presupuesto Gratis en 24h
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
                            <Image src="/project-living-2.jpg" alt="Trabajos de carpintería profesional en Madrid" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Carpentry Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            Tipos de Carpintería
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Trabajamos con los mejores materiales para cada necesidad
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Madera */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                <Hammer className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Carpintería de Madera</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Suelos de madera natural y laminados</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Puertas macizas y chapadas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Armarios empotrados a medida</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Muebles personalizados</span>
                                </li>
                            </ul>
                        </div>

                        {/* Aluminio */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Hammer className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Carpintería de Aluminio</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Ventanas con rotura de puente térmico</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Puertas correderas y abatibles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Cerramientos de terrazas y balcones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Cortinas de cristal</span>
                                </li>
                            </ul>
                        </div>

                        {/* PVC */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                <Hammer className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Carpintería de PVC</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Máximo aislamiento térmico y acústico</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Ventanas de alta eficiencia energética</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Puertas de entrada y garaje</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span>Bajo mantenimiento y larga durabilidad</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-[#0D1117] to-slate-900 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main CTA */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent font-bold rounded-full text-sm uppercase tracking-wide mb-6 border border-accent/30">
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                            Disponibles Ahora
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                            ¿Necesitas un carpintero profesional?
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Te asesoramos y damos presupuesto gratis en 24 horas.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/34604154746?text=Hola, necesito información sobre carpintería"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent to-primary text-white text-lg font-bold rounded-xl shadow-2xl shadow-accent/50 hover:shadow-accent/70 hover:scale-105 transition-all"
                            >
                                <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                                Contactar por WhatsApp
                            </a>

                            <a
                                href="tel:+34604154746"
                                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-lg font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-accent transition-all"
                            >
                                <Phone className="w-6 h-6 mr-3" />
                                604 154 746
                            </a>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 inline-flex items-center gap-2 text-white/50 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span>Sin compromiso • Presupuesto gratuito • Respuesta inmediata</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
