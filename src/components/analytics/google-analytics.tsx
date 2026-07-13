"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, initGtag, trackPageview } from "@/lib/analytics";
import { useCookieConsent } from "./cookie-consent-context";

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    trackPageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  const { consent } = useCookieConsent();
  const analyticsGranted = consent?.analytics === true;
  const measurementId = GA_MEASUREMENT_ID;
  const initializedRef = useRef<string | null>(null);
  // Analytics está "listo" cuando gtag.js ha terminado de cargar y 'js'/'config'
  // ya están encolados. Solo entonces se monta PageviewTracker y se emite el
  // primer page_view: elimina cualquier carrera entre la inicialización y el
  // primer evento, y evita duplicarlo (el tracker se monta una sola vez).
  const [analyticsReady, setAnalyticsReady] = useState(false);

  // Encola 'js'/'config' de forma síncrona en el render (no en onReady ni en
  // un efecto): dataLayer.push no necesita que gtag.js haya cargado, y hacerlo
  // aquí garantiza que 'config' quede en la cola antes que cualquier 'event'.
  // Si 'event' llegara antes que 'config', gtag.js no sabría a qué propiedad
  // enviarlo y lo descartaría sin avisar.
  if (measurementId && analyticsGranted) {
    if (initializedRef.current == null) {
      initializedRef.current = measurementId;
      initGtag(measurementId);
    }
  }

  if (!measurementId || !analyticsGranted) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onReady={() => setAnalyticsReady(true)}
      />
      {analyticsReady ? (
        <Suspense fallback={null}>
          <PageviewTracker />
        </Suspense>
      ) : null}
    </>
  );
}
