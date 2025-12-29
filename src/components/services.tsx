import { Home, Bath, ChefHat, Hammer, Paintbrush, ArrowRight } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: <Home className="w-10 h-10 text-white" />,
            title: "Reformas Integrales",
            description: "Transformamos tu vivienda por completo. Desde la demolición hasta los acabados finales, gestionamos todo el proyecto.",
            image: "bg-slate-900" // Placeholder for potential background usage
        },
        {
            icon: <Bath className="w-10 h-10 text-white" />,
            title: "Baños",
            description: "Renovación completa de baños. Alicatados, sanitarios, fontanería y mobiliario moderno para tu confort.",
            image: "bg-blue-900"
        },
        {
            icon: <ChefHat className="w-10 h-10 text-white" />,
            title: "Cocinas",
            description: "Diseño y montaje de cocinas funcionales y estéticas. Optimizamos el espacio y las instalaciones.",
            image: "bg-slate-800"
        },
        {
            icon: <Hammer className="w-10 h-10 text-white" />,
            title: "Pladur y Albañilería",
            description: "Tabiquería, techos, alisado de paredes y todo tipo de trabajos de albañilería general.",
            image: "bg-blue-800"
        },
        {
            icon: <Paintbrush className="w-10 h-10 text-white" />,
            title: "Pintura",
            description: "Pintura interior y exterior con acabados profesionales. Alisado de gotelé y pintura decorativa.",
            image: "bg-slate-700"
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Nuestros Servicios de Reforma
                    </h2>
                    <p className="text-lg text-slate-600">
                        Ofrecemos un servicio integral de construcción y reforma para cubrir todas las necesidades de tu hogar con la máxima calidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`h-2 bg-gradient-to-r from-blue-500 to-blue-700`} />
                            <div className="p-8">
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Call to action card */}
                    <div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-center items-start text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">¿Tienes otro proyecto en mente?</h3>
                        <p className="text-slate-300 mb-8">
                            Cuéntanos tu idea nos adaptamos a tus necesidades específicas.
                        </p>
                        <a
                            href="https://wa.me/34604154746"
                            className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors"
                        >
                            Consultar ahora <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
