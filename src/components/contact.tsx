"use client";

import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "¡Mensaje enviado correctamente! Te responderemos pronto.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.error || "Error al enviar el mensaje. Por favor intenta de nuevo.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Error de conexión. Por favor verifica tu conexión a internet e intenta de nuevo.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#0D1117]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Contacta con Nosotros
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Estamos listos para escuchar tu proyecto. Pide presupuesto sin compromiso o consúltanos cualquier duda.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info & WhatsApp */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-accent/20 transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-semibold uppercase tracking-widest text-white/60 mb-1">Teléfono</span>
                                        <a href="tel:+34604154746" className="text-lg text-white font-medium hover:text-accent transition-colors">
                                            +34 604 15 47 46
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-accent/20 transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-semibold uppercase tracking-widest text-white/60 mb-1">Email</span>
                                        <a href="mailto:info@thasa.es" className="text-lg text-white font-medium hover:text-accent transition-colors">
                                            info@thiasa.es
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover:bg-accent/20 transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-semibold uppercase tracking-widest text-white/60 mb-1">Zona de Servicio</span>
                                        <span className="text-lg text-white font-medium">
                                            Madrid y alrededores
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-gradient-to-br from-accent via-primary to-accent rounded-2xl p-8 relative overflow-hidden group shadow-xl shadow-accent/30">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-white/5 to-primary/0 group-hover:via-white/10 transition-all duration-500" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4">¿Prefieres WhatsApp?</h3>
                                <p className="text-white/90 mb-6">
                                    Es la forma más rápida de contactarnos. Te respondemos en minutos.
                                </p>
                                <a
                                    href="https://wa.me/34604154746"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-white text-primary font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <MessageCircle className="w-6 h-6 mr-2" />
                                    Abrir WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl shadow-xl p-8 md:p-10 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

                        {/* Status Message */}
                        {submitStatus.type && (
                            <div
                                className={`mb-6 p-4 rounded-lg border ${submitStatus.type === "success"
                                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                                        : "bg-red-500/10 border-red-500/30 text-red-400"
                                    }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Nombre *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-white/40 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-white/40 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="Tu teléfono"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-white/40 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Mensaje *</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-white/40 resize-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Cuéntanos qué necesitas..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-accent hover:bg-primary text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar mensaje
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
