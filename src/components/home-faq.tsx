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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div data-reveal="left" className="lg:sticky lg:top-28 self-start">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
            Preguntas frecuentes
          </span>
          <h2 id="faq-title" className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1D1D1D] tracking-tight">
            Dudas habituales antes de empezar una reforma en Madrid
          </h2>
          <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
            Respuestas directas sobre los servicios, la zona de trabajo y cómo solicitar una valoración para tu proyecto.
          </p>
          <a
            href="https://wa.me/34604154746"
            target="_blank"
            rel="noopener noreferrer"
            data-ga-location="home_faq"
            className="mt-6 inline-flex items-center font-bold text-primary hover:text-accent transition-colors"
          >
            ¿Otra duda? Pregúntanos por WhatsApp →
          </a>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-2xl border border-black/5 bg-background open:bg-white open:shadow-lg open:shadow-black/5 open:border-accent/30 transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-bold text-[#1D1D1D] group-open:text-primary transition-colors">{faq.question}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-transform duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 -mt-1 text-foreground/70 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
