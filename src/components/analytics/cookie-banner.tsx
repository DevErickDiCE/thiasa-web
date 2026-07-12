"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useCookieConsent } from "./cookie-consent-context";

function PreferencesModal() {
  const { consent, closePreferences, rejectAll, acceptAll, savePreferences } = useCookieConsent();
  // Sin efecto de sincronización: el modal se desmonta/monta de nuevo cada
  // vez que se abre (ver CookieBanner), así que este estado inicial ya
  // refleja siempre el consentimiento vigente en el momento de abrir.
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closePreferences();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closePreferences]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
        onClick={closePreferences}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={closePreferences}
          aria-label="Cerrar preferencias de cookies"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-primary hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="cookie-preferences-title" className="text-2xl font-bold text-primary mb-3 pr-8">
          Preferencias de cookies
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Elige qué cookies quieres permitir. Puedes cambiar esta configuración cuando
          quieras desde el enlace &ldquo;Configurar cookies&rdquo; en el pie de página. Más
          información en nuestra{" "}
          <Link href="/politica-cookies" className="text-accent hover:underline font-medium">
            Política de Cookies
          </Link>
          .
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start justify-between gap-4 bg-slate-50 p-4 rounded-xl">
            <div>
              <span className="block font-bold text-slate-900">Cookies necesarias</span>
              <span className="block text-sm text-slate-600">
                Imprescindibles para el funcionamiento del sitio. Siempre activas.
              </span>
            </div>
            <input
              type="checkbox"
              checked
              disabled
              aria-label="Cookies necesarias, siempre activas"
              className="mt-1 w-5 h-5 accent-primary opacity-60 cursor-not-allowed shrink-0"
            />
          </div>

          <div className="flex items-start justify-between gap-4 bg-slate-50 p-4 rounded-xl">
            <div>
              <span className="block font-bold text-slate-900">Cookies analíticas</span>
              <span className="block text-sm text-slate-600">
                Google Analytics: nos ayuda a entender cómo se usa la web para mejorarla.
              </span>
            </div>
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              aria-label="Permitir cookies analíticas (Google Analytics)"
              className="mt-1 w-5 h-5 accent-accent cursor-pointer shrink-0"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={rejectAll}
            className="flex-1 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
          >
            Rechazar todas
          </button>
          <button
            onClick={() => savePreferences(analyticsEnabled)}
            className="flex-1 px-5 py-3 rounded-xl border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors"
          >
            Guardar preferencias
          </button>
          <button
            onClick={acceptAll}
            className="flex-1 px-5 py-3 rounded-xl bg-accent hover:bg-primary text-white font-bold transition-colors shadow-md"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieBanner() {
  const { isBannerOpen, isPreferencesOpen, acceptAll, rejectAll, openPreferences } =
    useCookieConsent();

  if (isPreferencesOpen) {
    return <PreferencesModal />;
  }

  if (!isBannerOpen) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-[150] bg-[#1D1D1D] border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
        <div className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
          <Cookie className="w-6 h-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            Usamos cookies necesarias para el funcionamiento de la web y, si lo aceptas,
            cookies analíticas (Google Analytics) para entender cómo se usa el sitio. Consulta
            nuestra{" "}
            <Link href="/politica-cookies" className="text-accent hover:underline font-medium">
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <button
            onClick={openPreferences}
            className="px-5 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Configurar
          </button>
          <button
            onClick={rejectAll}
            className="px-5 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Rechazar
          </button>
          <button
            onClick={acceptAll}
            className="px-5 py-3 rounded-xl bg-accent hover:bg-primary text-white font-bold transition-colors shadow-md whitespace-nowrap"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
