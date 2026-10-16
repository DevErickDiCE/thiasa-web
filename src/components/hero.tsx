import type { CSSProperties } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = ["Presupuesto sin compromiso", "Madrid y alrededores", "Trato directo, sin intermediarios"];

export function Hero() {
    const whatsappUrl = "https://wa.me/34604154746?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20de%20reforma.";

    return (
        <div className="relative bg-[#0D1117] min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/images/blog/reforma-integral-madrid.jpg"
                    alt="Vivienda en Madrid durante una reforma integral, con cocina nueva y suelo de madera"
                    fill
                    className="object-cover object-[70%_center]"
                    priority
                    sizes="100vw"
                />
                {/* Velo azul noche: legibilidad del texto a la izquierda, foto visible a la derecha */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/70 to-[#0D1117]/35 sm:bg-gradient-to-r sm:from-[#0D1117]/95 sm:via-[#0D1117]/75 sm:to-[#0D1117]/10" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1117]/70 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-center sm:text-left">
                    <div
                        data-reveal
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-accent/30 text-accent text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        Reformas y obra en Madrid
                    </div>

                    <h1 className="mb-6">
                        <span
                            data-reveal
                            style={{ "--reveal-delay": 1 } as CSSProperties}
                            className="block text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.05] text-white"
                        >
                            Reformas Integrales en Madrid
                        </span>
                        <span
                            data-reveal
                            style={{ "--reveal-delay": 2 } as CSSProperties}
                            className="block mt-2 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.05] text-accent"
                        >
                            THIASA
                        </span>
                    </h1>

                    <p
                        data-reveal
                        style={{ "--reveal-delay": 3 } as CSSProperties}
                        className="text-lg sm:text-xl text-white/85 mb-9 leading-relaxed max-w-xl mx-auto sm:mx-0"
                    >
                        THIASA coordina reformas de viviendas, baños, cocinas, instalaciones eléctricas, fontanería y carpintería en Madrid y alrededores.
                    </p>

                    <div
                        data-reveal
                        style={{ "--reveal-delay": 4 } as CSSProperties}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
                    >
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-ga-location="home_hero"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-primary transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            <Phone className="w-5 h-5 mr-3" />
                            Presupuesto Gratuito
                        </a>

                        <Link
                            href="#projects"
                            className="group inline-flex items-center justify-center px-7 py-4 text-lg font-bold rounded-xl text-white border border-white/30 hover:border-white bg-white/10 hover:bg-white hover:text-[#1D1D1D] transition-all backdrop-blur-sm active:scale-[0.98]"
                        >
                            Ver Proyectos
                            <ArrowRight className="w-5 h-5 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <ul
                        data-reveal
                        style={{ "--reveal-delay": 5 } as CSSProperties}
                        className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 items-center sm:items-start text-sm font-medium text-white/80"
                    >
                        {highlights.map((item) => (
                            <li key={item} className="inline-flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
