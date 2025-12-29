import { Calculator, Award, ShieldCheck, UserCheck } from "lucide-react";

export function TrustIndicators() {
    const items = [
        {
            icon: <Calculator className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Presupuesto sin compromiso",
            description: "Valoramos tu proyecto gratis"
        },
        {
            icon: <Award className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Más de 10 años",
            description: "De experiencia en el sector"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Empresa seria",
            description: "Garantía profesional y plazos"
        },
        {
            icon: <UserCheck className="w-8 h-8 text-blue-600 mb-3" />,
            title: "Atención personalizada",
            description: "Trato cercano y directo"
        }
    ];

    return (
        <section className="bg-slate-50 py-12 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4 hover:bg-white hover:shadow-sm rounded-xl transition-all duration-300">
                            <div className="bg-blue-50 p-4 rounded-full mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
