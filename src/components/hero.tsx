import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const whatsappUrl = "https://wa.me/34604154746";

    return (
        // Mobile: min-h screen to fill view, but allow content to dictate height if needed on very small screens.
        // Desktop: standard min-h-screen
        // Padding top accounts for sticky navbar (approx h-20)
        <div className="relative bg-slate-900 h-[100dvh] md:min-h-screen flex items-center pt-16 pb-12 sm:py-28 overflow-hidden">
            {/* Background Image - Zoomed/Centered for Mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/hero-bg.png"
                    alt="Reformas de viviendas"
                    fill
                    className="object-cover object-center sm:object-center opacity-40 hover:scale-105 transition-transform duration-[20s]"
                    priority
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 sm:bg-gradient-to-r sm:from-slate-900/90 sm:to-slate-900/40" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center sm:block">
                <div className="max-w-xl sm:max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
                    {/* Split Headline */}
                    <h1 className="flex flex-col gap-2 mb-6 sm:mb-8">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
                            Reformas integrales
                        </span>
                        <span className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-blue-500 tracking-tight leading-none">
                            con resultados profesionales
                        </span>
                    </h1>

                    {/* Subheadline - Constrained width */}
                    <p className="text-base sm:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto sm:mx-0 opacity-90">
                        Especialistas en transformar hogares. Calidad, seriedad y atención al detalle en cada proyecto.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        {/* Primary CTA - Full width mobile */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 active:scale-[0.98]"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Solicitar presupuesto
                        </a>

                        {/* Secondary CTA - Less prominent on mobile */}
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 text-base sm:text-lg font-medium rounded-lg text-slate-200 border border-slate-600/50 hover:bg-slate-800/50 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm"
                        >
                            Ver trabajos realizados
                            <ArrowRight className="w-5 h-5 ml-2 opacity-70" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
