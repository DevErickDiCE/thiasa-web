import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
    const benefits = [
        {
            title: "Cumplimiento de Plazos Garantizado",
            description: "Sabemos que tu tiempo es oro. Nos comprometemos a finalizar la obra en la fecha acordada, sin retrasos."
        },
        {
            title: "Acabados Impecables",
            description: "Atención extrema al detalle. No damos por finalizado el trabajo hasta que todo esté perfecto."
        },
        {
            title: "Presupuestos Transparentes",
            description: "Presupuestos detallados y sin sorpresas. Claridad total en costes desde el primer día."
        },
        {
            title: "Trato Profesional y Cercano",
            description: "Comunicación fluida durante todo el proceso. Te asesoramos en cada paso para que tomes las mejores decisiones."
        }
    ];

    return (
        <section id="why-us" className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div data-reveal="left" className="flex-1 order-2 lg:order-1">
                        <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
                            Nuestro compromiso
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D1D1D] mb-6 tracking-tight">
                            ¿Por qué elegir <span className="text-primary">THIASA</span>?
                        </h2>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            Una reforma es una decisión importante. Por eso basamos nuestro trabajo en la confianza, la calidad y el respeto absoluto por tu hogar y tu inversión.
                        </p>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-[#1D1D1D]">{benefit.title}</h3>
                                        <p className="text-foreground/65 mt-1 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div data-reveal="right" className="flex-1 order-1 lg:order-2 w-full">
                        <div className="relative h-[380px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                            <Image
                                src="/consultation.png"
                                alt="Reunión de obra con clientes"
                                fill
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur rounded-xl px-5 py-4 shadow-lg">
                                <p className="text-2xl font-extrabold text-primary leading-none mb-1">THIASA</p>
                                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Reformas en Madrid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
