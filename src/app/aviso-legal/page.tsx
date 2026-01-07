import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Aviso Legal | THIASA - Reformas Integrales Madrid",
    description: "Aviso legal de THIASA - Diseños e Interiorismo. Información legal sobre el uso de la web de reformas integrales en Madrid.",
};

export default function AvisoLegal() {
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

                    <h1 className="text-4xl font-bold text-primary mb-8">Aviso Legal</h1>

                    <div className="prose prose-slate max-w-none space-y-8">
                        {/* Datos identificativos */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">1. Datos Identificativos</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
                                de Servicios de la Sociedad de la Información y Comercio Electrónico,
                                se facilitan los siguientes datos:
                            </p>
                            <ul className="list-none space-y-2 text-slate-700 bg-slate-50 p-6 rounded-lg">
                                <li><strong>Titular:</strong> DISEÑOS E INTERIORISMO THIASA SL</li>
                                <li><strong>NIF:</strong> B22502082</li>
                                <li><strong>Domicilio:</strong> Avenida De Los Apóstoles 53ºA, 28011 Madrid, España</li>
                                <li><strong>Email:</strong> contacto@thiasa.es</li>
                                <li><strong>Teléfono:</strong> +34 604 15 47 46</li>
                                <li><strong>Web:</strong> www.thiasa.es</li>
                            </ul>
                        </section>

                        {/* Objeto */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">2. Objeto</h2>
                            <p className="text-slate-700 leading-relaxed">
                                El presente aviso legal regula el uso y utilización del sitio web www.thiasa.es,
                                del que es titular DISEÑOS E INTERIORISMO THIASA SL.
                            </p>
                            <p className="text-slate-700 leading-relaxed mt-4">
                                La navegación por el sitio web atribuye la condición de usuario del mismo e implica
                                la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas
                                en este Aviso Legal.
                            </p>
                        </section>

                        {/* Condiciones de uso */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">3. Condiciones de Uso</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                El acceso, navegación y uso del sitio web confiere la condición de usuario,
                                por lo que se aceptan, desde que se inicia la navegación por el sitio web,
                                todas las condiciones de uso aquí establecidas.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios
                                que se ofrecen a través del sitio web y a no emplearlos para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
                                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                                <li>Provocar daños en los sistemas físicos y lógicos del sitio web</li>
                                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal</li>
                                <li>Introducir virus informáticos en la red</li>
                            </ul>
                        </section>

                        {/* Propiedad intelectual */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">4. Propiedad Intelectual e Industrial</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Todos los contenidos del sitio web, salvo que se indique lo contrario, son titularidad
                                exclusiva de DISEÑOS E INTERIORISMO THIASA SL y, por tanto, son obras protegidas como
                                propiedad intelectual por el ordenamiento jurídico español.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública,
                                incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos
                                de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico,
                                sin la autorización de THIASA.
                            </p>
                        </section>

                        {/* Limitación de responsabilidad */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">5. Limitación de Responsabilidad</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                THIASA no se hace responsable de los daños y perjuicios que pudieran derivarse de:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>La falta de disponibilidad o accesibilidad al sitio web</li>
                                <li>La existencia de virus, programas maliciosos o lesivos en los contenidos</li>
                                <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal</li>
                                <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros</li>
                            </ul>
                        </section>

                        {/* Enlaces */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">6. Enlaces a Otros Sitios Web</h2>
                            <p className="text-slate-700 leading-relaxed">
                                El sitio web puede incluir enlaces a otros sitios web de terceros. THIASA no controla
                                ni asume responsabilidad alguna sobre dichos sitios web de terceros ni sobre sus contenidos.
                            </p>
                        </section>

                        {/* Modificaciones */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">7. Modificaciones</h2>
                            <p className="text-slate-700 leading-relaxed">
                                THIASA se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
                                oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios
                                que presta como la forma en que estos aparezcan presentados o localizados.
                            </p>
                        </section>

                        {/* Legislación */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-4">8. Legislación Aplicable y Jurisdicción</h2>
                            <p className="text-slate-700 leading-relaxed">
                                La relación entre THIASA y el usuario se regirá por la normativa española vigente.
                                Cualquier controversia se resolverá ante los Juzgados y Tribunales de Madrid.
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
