import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main CTA Card with Depth */}
                <div className="relative bg-gradient-to-b from-white to-slate-50/50 rounded-3xl p-10 md:p-16 mb-20 border overflow-hidden transform hover:-translate-y-1 transition-transform duration-500" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
                    {/* Decorative background element for "3D" feel */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            ¿Pensando en reformar tu vivienda?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                            Cuéntanos tu idea. Te escuchamos, te asesoramos y hacemos realidad tu proyecto con la elegancia que merece.
                        </p>

                        <a
                            href="https://wa.me/34604154746"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-900 rounded-xl transition-all duration-300 shadow-lg hover:shadow-slate-900/30 hover:-translate-y-0.5"
                        >
                            <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                            Contactar por WhatsApp
                            <ArrowRight className="w-5 h-5 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-6 h-6" />
                        </div>
                        <span className="block text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Teléfono</span>
                        <a href="tel:+34604154746" className="text-lg text-slate-900 font-medium hover:text-blue-600 transition-colors">
                            +34 604 15 47 46
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="block text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Email</span>
                        <a href="mailto:info@thasa.es" className="text-lg text-slate-900 font-medium hover:text-blue-600 transition-colors">
                            info@thasa.es
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <span className="block text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Zona</span>
                        <span className="text-lg text-slate-900 font-medium">
                            Madrid y alrededores
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
