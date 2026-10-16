import type { CSSProperties } from "react";
import { Calculator, Award, ShieldCheck, UserCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export function TrustIndicators() {
    const stats = [
        { value: 15, prefix: "+", label: "Años de experiencia" },
        { value: 200, prefix: "+", label: "Proyectos finalizados" },
        { value: 100, suffix: "%", label: "Clientes satisfechos" },
    ];

    const items = [
        {
            icon: <Calculator className="w-6 h-6" />,
            title: "Presupuesto gratis",
            description: "Sin compromiso"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Calidad garantizada",
            description: "Materiales premium"
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Empresa seria",
            description: "Plazos cumplidos"
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Trato directo",
            description: "Sin intermediarios"
        }
    ];

    return (
        <section className="relative z-10 -mt-16 sm:-mt-20 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Card - Premium gradient with glow */}
                <div data-reveal className="bg-gradient-to-br from-[#1A2332] via-[#1A2332] to-[#1D1D1D] rounded-2xl shadow-2xl shadow-black/40 border border-white/10 px-4 py-6 sm:p-8 mb-8 sm:mb-10">
                    <div className="grid grid-cols-3 divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center px-2">
                                <span className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-1 sm:mb-2">
                                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                </span>
                                <span className="text-accent/90 font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[10px] sm:text-xs leading-snug">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid - Dark Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            data-reveal
                            style={{ "--reveal-delay": Math.min(index, 5) } as CSSProperties}
                            className="group flex flex-col items-center text-center p-5 sm:p-6 bg-white rounded-2xl transition-all duration-300 border border-black/5 shadow-sm hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 hover:border-accent/30"
                        >
                            <div className="bg-primary/5 p-3 rounded-xl mb-3 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-base font-bold text-[#1D1D1D] mb-1">{item.title}</h3>
                            <p className="text-sm text-[#1D1D1D]/60">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
