import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Política de Cookies | THIASA - Reformas Integrales Madrid",
    description: "Política de cookies de THIASA. Información sobre el uso de cookies en nuestro sitio web y cómo gestionarlas.",
};

export default function PoliticaCookies() {
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

                    <h1 className="text-4xl font-bold text-primary mb-8">Política de Cookies</h1>

                    <div className="prose prose-slate max-w-none space-y-8">
                        {/* Introducción */}
                        <section>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                En cumplimiento con la normativa vigente en materia de protección de datos y cookies,
                                DISEÑOS E INTERIORISMO THIASA SL te informa sobre las cookies que utiliza en el sitio
                                web www.thiasa.es y su finalidad.
                            </p>
                        </section>

                        {/* Qué son las cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">1. ¿Qué son las Cookies?</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Una cookie es un fichero que se descarga en tu ordenador, smartphone o tablet al
                                acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras
                                cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario
                                o de su equipo y, dependiendo de la información que contengan y de la forma en que
                                utilices tu equipo, pueden utilizarse para reconocer al usuario.
                            </p>
                        </section>

                        {/* Tipos de cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">2. Tipos de Cookies que Utilizamos</h2>

                            <div className="space-y-6">
                                {/* Cookies técnicas */}
                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-primary mb-3">🔧 Cookies Técnicas (Necesarias)</h3>
                                    <p className="text-slate-700 mb-2">
                                        Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la
                                        navegación y el uso de las diferentes opciones o servicios.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                                        <li><strong>Finalidad:</strong> Control de navegación, sesión de usuario</li>
                                        <li><strong>Duración:</strong> Sesión</li>
                                        <li><strong>Titular:</strong> THIASA</li>
                                    </ul>
                                </div>

                                {/* Cookies de análisis */}
                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-primary mb-3">📊 Cookies de Análisis</h3>
                                    <p className="text-slate-700 mb-2">
                                        Utilizamos Google Analytics 4 para entender cómo se usa el sitio web y
                                        mejorarlo (páginas más visitadas, origen del tráfico, etc.). Son cookies
                                        <strong> de terceros y opcionales</strong>: solo se instalan si aceptas las
                                        cookies analíticas en el panel de preferencias.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                                        <li><strong>Proveedor:</strong> Google Analytics (Google Ireland Limited / Google LLC)</li>
                                        <li><strong>Finalidad:</strong> Estadísticas de uso y tráfico del sitio</li>
                                        <li><strong>Duración:</strong> Hasta 2 años</li>
                                        <li><strong>Transferencia internacional:</strong> Google puede procesar los datos en servidores fuera del EEE, amparándose en las cláusulas contractuales tipo aprobadas por la Comisión Europea</li>
                                        <li><strong>Más info:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Política de Google</a></li>
                                    </ul>
                                </div>

                                {/* Cookies de terceros */}
                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-primary mb-3">🌐 Cookies de Terceros</h3>
                                    <p className="text-slate-700 mb-2">
                                        Cookies instaladas por servicios de terceros integrados en nuestro sitio web:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                                        <li><strong>WhatsApp Widget:</strong> Integración de chat de WhatsApp</li>
                                        <li><strong>Vercel:</strong> Hosting y optimización de rendimiento</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Detalle de cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">3. Detalle de Cookies en www.thiasa.es</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Cookie</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Tipo</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Duración</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Finalidad</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-slate-700">_ga</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Análisis (requiere consentimiento)</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">2 años</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Distinguir usuarios (Google Analytics 4)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-slate-700">_ga_&lt;ID&gt;</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Análisis (requiere consentimiento)</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">2 años</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Mantener el estado de la sesión (Google Analytics 4)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-slate-700">thiasa_cookie_consent</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Técnica</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">1 año</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Recordar tu decisión sobre cookies (localStorage, no es una cookie de terceros)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-slate-700">session</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Técnica</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Sesión</td>
                                            <td className="px-4 py-3 text-sm text-slate-700">Gestión de sesión de navegación</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Aceptación */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">4. Aceptación de Cookies</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Al acceder a nuestro sitio web por primera vez, se muestra un aviso donde puedes
                                <strong> aceptar todas las cookies</strong>, <strong>rechazar las no necesarias</strong> o
                                <strong> configurar tus preferencias</strong> y decidir específicamente si permites las
                                cookies analíticas. Las cookies necesarias funcionan siempre; Google Analytics
                                permanece desactivado hasta que aceptas las cookies analíticas de forma expresa.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Para ello utilizamos el <strong>Modo de Consentimiento de Google (Consent Mode v2)</strong>:
                                mientras no des tu consentimiento, el estado de almacenamiento analítico
                                (<em>analytics_storage</em>) permanece en &ldquo;denegado&rdquo; y no se envía ninguna
                                información a Google Analytics.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Puedes cambiar tu decisión en cualquier momento desde el enlace
                                &ldquo;Configurar cookies&rdquo; disponible en el pie de página de todas las
                                secciones del sitio, o eliminando las cookies desde la configuración de tu navegador.
                            </p>
                        </section>

                        {/* Cómo gestionar cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">5. Cómo Gestionar las Cookies</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
                                configuración de las opciones de tu navegador:
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <strong className="text-primary">Google Chrome:</strong>
                                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                                        Configuración → Privacidad y seguridad → Cookies
                                    </a>
                                </li>
                                <li>
                                    <strong className="text-primary">Mozilla Firefox:</strong>
                                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                                        Herramientas → Opciones → Privacidad
                                    </a>
                                </li>
                                <li>
                                    <strong className="text-primary">Safari:</strong>
                                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                                        Preferencias → Privacidad
                                    </a>
                                </li>
                                <li>
                                    <strong className="text-primary">Microsoft Edge:</strong>
                                    <a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                                        Configuración → Privacidad, búsqueda y servicios
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* Advertencia */}
                        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                            <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Importante</h3>
                            <p className="text-yellow-700">
                                Si bloqueas o no aceptas la instalación de cookies, es posible que ciertos servicios
                                no estén disponibles o que algunas funcionalidades del sitio web no operen correctamente.
                            </p>
                        </section>

                        {/* Actualizaciones */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">6. Actualizaciones</h2>
                            <p className="text-slate-700 leading-relaxed">
                                THIASA puede modificar esta Política de Cookies en función de cambios legislativos,
                                reglamentarios o para adaptar la política a las instrucciones de la Agencia Española
                                de Protección de Datos. Te recomendamos revisar esta política periódicamente.
                            </p>
                        </section>

                        {/* Más información */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">7. Más Información</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Si tienes dudas sobre esta política de cookies, puedes contactar con nosotros:
                            </p>
                            <ul className="list-none space-y-2 text-slate-700 mt-4 bg-slate-50 p-6 rounded-lg">
                                <li><strong>Email:</strong> info@thiasa.es</li>
                                <li><strong>Teléfono:</strong> +34 604 15 47 46</li>
                                <li><strong>Dirección:</strong> Avenida De Los Apóstoles 53ºA, 28011 Madrid</li>
                            </ul>
                        </section>

                        <div className="border-t border-slate-200 pt-8 mt-12">
                            <p className="text-sm text-slate-500">
                                Última actualización: Julio 2026
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
