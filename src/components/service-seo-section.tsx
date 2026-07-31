import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServiceSeoSectionProps {
  title: string;
  description: string;
  faqs: ServiceFaq[];
  guides: Array<{
    href: string;
    title: string;
    description: string;
  }>;
}

export function ServiceSeoSection({
  title,
  description,
  faqs,
  guides,
}: ServiceSeoSectionProps) {
  return (
    <>
      <section className="bg-white py-20" aria-labelledby="service-guides-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
              Información para decidir
            </span>
            <h2 id="service-guides-title" className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
              Guías relacionadas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Contenido práctico para definir el alcance, comparar presupuestos y preparar la obra antes de solicitar una valoración.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{guide.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{guide.description}</p>
                <Link href={guide.href} className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                  Leer guía
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" aria-labelledby="service-faq-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
              Preguntas frecuentes
            </span>
            <h2 id="service-faq-title" className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="flex items-start gap-3 text-lg font-bold text-slate-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {faq.question}
                </h3>
                <p className="mt-3 pl-8 leading-relaxed text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
