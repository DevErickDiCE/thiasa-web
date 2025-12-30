import { Phone, ArrowRight } from "lucide-react";

export function ConvertSection() {
    return (
        <section className="py-24 bg-[#0D1117] border-y border-white/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent font-bold rounded-full text-sm uppercase tracking-wide mb-6 border border-accent/30 shadow-lg shadow-accent/20">
                    <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(61,186,235,0.8)]"></span>
                    Trabajamos Ya
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                    ¿Preparado para transformar tu hogar?
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Te damos presupuesto en 24h.</span>
                </h2>

                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Consulta sin compromiso. Te asesoramos gratis y te damos un presupuesto detallado adaptado a tu proyecto y presupuesto.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://wa.me/34604154746?text=Hola, quiero empezar mi reforma. ¿Podemos hablar?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xl font-bold rounded-xl text-white bg-accent hover:bg-primary transition-all shadow-[0_0_30px_rgba(61,186,235,0.6)] hover:shadow-[0_0_40px_rgba(61,186,235,0.8)] transform hover:-translate-y-1"
                    >
                        <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                        Hablar por WhatsApp
                    </a>

                    <a
                        href="#contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all shadow-sm backdrop-blur-sm"
                    >
                        Rellenar formulario
                        <ArrowRight className="w-5 h-5 ml-2 opacity-70" />
                    </a>
                </div>
            </div>
        </section>
    );
}
