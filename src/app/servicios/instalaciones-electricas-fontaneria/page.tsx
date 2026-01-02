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

            {/* Trust Block - Por qué confiar en THIASA */}
            <section className="py-20 bg-[#0D1117]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Por qué confiar en THIASA
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Profesionales certificados con más de 15 años de experiencia en instalaciones
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Badge 1 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Certificado
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Técnicos cualificados y con experiencia
                                </h3>
                                <p className="text-white/60">
                                    Electricistas y fontaneros con certificación oficial y formación continua
                                </p>
                            </div>
                        </div>

                        {/* Badge 2 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Normativa
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Cumplimiento de normativa y seguridad
                                </h3>
                                <p className="text-white/60">
                                    Todas nuestras instalaciones cumplen la normativa vigente y pasan inspección
                                </p>
                            </div>
                        </div>

                        {/* Badge 3 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Coordinación
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Coordinación con otros gremios
                                </h3>
                                <p className="text-white/60">
                                    Trabajamos perfectamente coordinados con albañiles, carpinteros y pintores
                                </p>
                            </div>
                        </div>

                        {/* Badge 4 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Garantía
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Garantía en todos los trabajos
                                </h3>
                                <p className="text-white/60">
                                    Garantía por escrito en todas nuestras instalaciones y reparaciones
                                </p>
                            </div>
                        </div>

                        {/* Badge 5 */}
                        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20">
                            <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ✓ Sin Sorpresas
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Presupuesto claro y sin sorpresas
                                </h3>
                                <p className="text-white/60">
                                    Presupuesto detallado antes de empezar. El precio final es el acordado
                                </p>
                            </div>
                        </div>

                        {/* Badge 6 - Extra visual importance */}
                        <div className="group relative bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent hover:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all">
                            <div className="absolute -top-4 left-8 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                                ★ Premium
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    +15 años de experiencia
                                </h3>
                                <p className="text-white/80">
                                    Miles de instalaciones realizadas con clientes 100% satisfechos
                                </p>
                            </div>
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
                            ¿Necesitas un electricista o fontanero?
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                            Presupuesto sin compromiso en 24 horas. Profesionales certificados a tu servicio.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/34604154746?text=Hola, necesito un electricista/fontanero urgente"
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
