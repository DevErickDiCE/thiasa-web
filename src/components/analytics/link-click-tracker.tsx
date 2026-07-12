"use client";

import { useEffect } from "react";
import { trackEmailClick, trackPhoneClick, trackWhatsappClick } from "@/lib/analytics";
import { useCookieConsent } from "./cookie-consent-context";

/**
 * Escucha clics en todo el documento y registra click_whatsapp, click_phone y
 * click_email a partir del atributo data-ga-location de cada enlace. Evita
 * tener que añadir un onClick manual en cada botón de WhatsApp/teléfono/email
 * repartido por el sitio.
 */
export function LinkClickTracker() {
  const { consent } = useCookieConsent();
  const analyticsGranted = consent?.analytics === true;

  useEffect(() => {
    if (!analyticsGranted) return;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const pagePath = window.location.pathname;
      const buttonLocation = anchor.getAttribute("data-ga-location") ?? "unknown";

      if (href.includes("wa.me")) {
        trackWhatsappClick({ page_path: pagePath, button_location: buttonLocation });
      } else if (href.startsWith("tel:")) {
        trackPhoneClick({ page_path: pagePath, button_location: buttonLocation });
      } else if (href.startsWith("mailto:")) {
        trackEmailClick({ page_path: pagePath, button_location: buttonLocation });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [analyticsGranted]);

  return null;
}
