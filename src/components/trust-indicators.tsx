import { Calculator, Award, ShieldCheck, UserCheck } from "lucide-react";

export function TrustIndicators() {
    const stats = [
        { number: "+15", label: "Años de experiencia" },
        { number: "+200", label: "Proyectos finalizados" },
        { number: "100%", label: "Clientes satisfechos" },
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
        <section className="relative z-10 -mt-8 sm:-mt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Card - Premium gradient with glow */}
                <div className="bg-gradient-to-br from-[#1A2332] via-[#1A2332] to-[#1D1D1D] rounded-2xl shadow-2xl shadow-black/40 border border-white/10 p-8 mb-12 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 group">
                                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                                    {stat.number}
                                </span>
                                <span className="text-accent/90 font-semibold uppercase tracking-[0.18em] text-xs">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid - Dark Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="group flex flex-col items-center text-center p-6 bg-white rounded-xl transition-all duration-300 border border-black/5 shadow-sm hover:shadow-md hover:border-accent/30">
                            <div className="bg-primary/5 p-3 rounded-xl mb-3 text-primary group-hover:bg-primary/10 transition-all">
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
