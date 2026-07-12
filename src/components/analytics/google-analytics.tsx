"use client";

import { Suspense, useEffect } from "react";
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

  if (!measurementId || !analyticsGranted) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onReady={() => initGtag(measurementId)}
      />
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}
