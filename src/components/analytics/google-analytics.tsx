"use client";

import { Suspense, useEffect, useRef } from "react";
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

  // Encola 'js'/'config' de forma síncrona en el render (no en onReady ni en
  // un efecto): dataLayer.push no necesita que gtag.js haya cargado, y hacerlo
  // aquí garantiza que 'config' quede en el array antes que cualquier 'event'
  // (p. ej. el page_view de PageviewTracker, que es hijo de este componente y
  // por tanto su efecto se ejecuta antes que cualquier efecto propio). Si
  // 'event' llega antes que 'config' en la cola, gtag.js no sabe a qué
  // propiedad enviarlo y lo descarta sin avisar.
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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}
