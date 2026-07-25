const faqs = [
  {
    question: "¿Qué tipo de reformas realiza THIASA?",
    answer:
      "THIASA realiza reformas integrales de viviendas, reformas de baños y cocinas, instalaciones eléctricas y fontanería, carpintería de madera, aluminio y PVC, además de pintura, Pladur y albañilería.",
  },
  {
    question: "¿En qué zona trabaja THIASA?",
    answer:
      "THIASA trabaja en Madrid y alrededores. Si tu inmueble está fuera de Madrid capital, puedes consultar la ubicación concreta por WhatsApp, teléfono o formulario antes de planificar la visita.",
  },
  {
    question: "¿Cómo puedo pedir presupuesto para una reforma?",
    answer:
      "Puedes contactar por WhatsApp, llamar al +34 604 15 47 46 o enviar el formulario de la web. THIASA ofrece presupuesto sin compromiso adaptado al alcance del proyecto.",
  },
  {
    question: "¿THIASA reforma baños y cocinas?",
    answer:
      "Sí. La empresa cuenta con un servicio específico para reformas de baños y cocinas que incluye trabajos de revestimientos, fontanería, mobiliario, encimeras, iluminación y optimización del espacio según el proyecto.",
  },
];

export function HomeFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
            Preguntas frecuentes
          </span>
          <h2 id="faq-title" className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Dudas habituales antes de empezar una reforma en Madrid
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Respuestas directas sobre los servicios, la zona de trabajo y cómo solicitar una valoración para tu proyecto.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
