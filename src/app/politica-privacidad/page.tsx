import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Política de Privacidad | THIASA - Reformas Integrales Madrid",
    description: "Política de privacidad y protección de datos de THIASA. Información sobre cómo tratamos tus datos personales conforme al RGPD.",
};

export default function PoliticaPrivacidad() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-28 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver al inicio
                    </Link>

                    <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidad</h1>

                    <div className="prose prose-slate max-w-none space-y-8">
                        {/* Introducción */}
                        <section>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                En DISEÑOS E INTERIORISMO THIASA SL nos comprometemos a proteger la privacidad de
                                nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y
                                protegemos la información personal conforme al Reglamento General de Protección de
                                Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPD).
                            </p>
                        </section>

                        {/* Responsable */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">1. Responsable del Tratamiento</h2>
                            <ul className="list-none space-y-2 text-slate-700 bg-slate-50 p-6 rounded-lg">
                                <li><strong>Identidad:</strong> DISEÑOS E INTERIORISMO THIASA SL</li>
                                <li><strong>NIF:</strong> B22502082</li>
                                <li><strong>Dirección postal:</strong> Avenida De Los Apóstoles 53ºA, 28011 Madrid, España</li>
                                <li><strong>Correo electrónico:</strong> info@thiasa.es</li>
                                <li><strong>Teléfono:</strong> +34 604 15 47 46</li>
                            </ul>
                        </section>

                        {/* Datos que recopilamos */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">2. Datos que Recopilamos</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Recopilamos la siguiente información cuando utilizas nuestros servicios o te pones en contacto con nosotros:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li><strong>Datos de contacto:</strong> Nombre, teléfono, correo electrónico</li>
                                <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas</li>
                                <li><strong>Datos de comunicación:</strong> Mensajes enviados a través de formularios o WhatsApp</li>
                            </ul>
                        </section>

                        {/* Finalidad */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">3. Finalidad del Tratamiento</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Utilizamos tus datos personales para las siguientes finalidades:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>Gestionar y responder a tus solicitudes de presupuesto o información</li>
                                <li>Prestar nuestros servicios de reformas integrales</li>
                                <li>Enviar comunicaciones comerciales (solo con tu consentimiento previo)</li>
                                <li>Cumplir con obligaciones legales</li>
                                <li>Mejorar nuestro sitio web y servicios</li>
                            </ul>
                        </section>

                        {/* Base legal */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">4. Base Legal del Tratamiento</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                El tratamiento de tus datos se basa en:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li><strong>Consentimiento:</strong> Al enviarnos un formulario o contactarnos</li>
                                <li><strong>Ejecución de contrato:</strong> Para prestar servicios solicitados</li>
                                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
                                <li><strong>Obligación legal:</strong> Para cumplir con requisitos fiscales y legales</li>
                            </ul>
                        </section>

                        {/* Conservación */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">5. Conservación de Datos</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Conservaremos tus datos personales durante el tiempo necesario para cumplir con las
                                finalidades establecidas o mientras sean necesarios para cumplir con obligaciones legales.
                                Una vez finalizados dichos plazos, los datos serán eliminados de forma segura o anonimizados.
                            </p>
                        </section>

                        {/* Destinatarios */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">6. Destinatarios de los Datos</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Tus datos no serán cedidos a terceros, salvo:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>Obligación legal (Agencia Tributaria, etc.)</li>
                                <li>Proveedores de servicios necesarios para la prestación de nuestros servicios (hosting, email)</li>
                                <li>Con tu consentimiento explícito</li>
                            </ul>
                        </section>

                        {/* Derechos */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">7. Tus Derechos</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Puedes ejercer los siguientes derechos en cualquier momento:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti</li>
                                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                                <li><strong>Retirar consentimiento:</strong> En cualquier momento</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mt-4">
                                Para ejercer estos derechos, contacta con nosotros en: <strong>contacto@thiasa.es</strong>
                                o en nuestra dirección postal, adjuntando copia de tu DNI.
                            </p>
                            <p className="text-slate-700 leading-relaxed mt-4">
                                Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación
                                ante la Agencia Española de Protección de Datos (AEPD): www.aepd.es
                            </p>
                        </section>

                        {/* Medidas de seguridad */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">8. Medidas de Seguridad</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Hemos implementado medidas técnicas y organizativas apropiadas para proteger tus datos
                                personales contra acceso no autorizado, pérdida, destrucción o alteración, incluyendo:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                                <li>Cifrado SSL/TLS en todas las comunicaciones</li>
                                <li>Acceso restringido a datos personales</li>
                                <li>Copias de seguridad regulares</li>
                                <li>Formación del personal en protección de datos</li>
                            </ul>
                        </section>

                        {/* Cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">9. Cookies</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario.
                                Para más información, consulta nuestra{" "}
                                <Link href="/politica-cookies" className="text-accent hover:text-primary underline">
                                    Política de Cookies
                                </Link>.
                            </p>
                        </section>

                        {/* Modificaciones */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">10. Modificaciones</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento.
                                Las modificaciones se publicarán en esta página con la fecha de actualización.
                            </p>
                        </section>

                        <div className="border-t border-slate-200 pt-8 mt-12">
                            <p className="text-sm text-slate-500">
                                Última actualización: Enero 2026
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
