import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const whatsappUrl = "https://wa.me/34604154746?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20de%20reforma."; // Pre-filled message

    return (
        // Mobile: min-h screen to fill view, but allow content to dictate height if needed on very small screens.
        // Desktop: standard min-h-screen
        // Adjusted padding for mobile visibility
        <div className="relative bg-background min-h-[650px] sm:min-h-[700px] lg:min-h-[750px] flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
            {/* Background Image - Zoomed/Centered for Mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/hero-bg.png"
                    alt="Empresa de reformas integrales en Madrid - THIASA"
                    fill
                    className="object-cover object-center opacity-40 hover:scale-105 transition-transform duration-[20s]"
                    priority
                />
                {/* Subtle dark blue gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A2332]/80 via-[#1A2332]/60 to-[#1A2332]/80 sm:bg-gradient-to-r sm:from-[#1A2332]/90 sm:via-[#1A2332]/70 sm:to-[#1A2332]/30" />
            </div>

            <div className="relative max-w-7xl mx-auto px-2 sm:px-4 w-full flex flex-col justify-center">
                <div className="max-w-xl sm:max-w-2xl text-center sm:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-bold mb-6 backdrop-blur-sm self-center sm:self-start mx-auto sm:mx-0 shadow-[0_0_20px_rgba(61,186,235,0.4)]">
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(61,186,235,0.8)]"></span>
                        Disponibilidad inmediata
                    </div>

                    {/* H1 Title - Optimized for SEO */}
                    <h1 className="flex flex-col gap-2 mb-6">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                            Reformas Integrales
                        </span>
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                            con garantía profesional
                        </span>
                    </h1>

                    {/* Subheadline - SEO optimized with services */}
                    <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto sm:mx-0">
                        Especialistas en reformas de viviendas, baños, cocinas, instalaciones eléctricas, fontanería y carpintería. Acabados de calidad en Madrid y alrededores.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-primary transition-all shadow-[0_0_30px_rgba(61,186,235,0.6)] hover:shadow-[0_0_40px_rgba(61,186,235,0.8)] hover:shadow-xl active:scale-[0.98]"
                        >
                            <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                            Presupuesto Gratuito
                        </a>

                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 text-base sm:text-lg font-bold rounded-xl text-white border-2 border-white/50 hover:bg-white hover:text-[#1D1D1D] transition-all backdrop-blur-sm bg-white/10"
                        >
                            Ver Proyectos
                            <ArrowRight className="w-5 h-5 ml-2 opacity-70" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
