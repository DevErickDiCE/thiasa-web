"use client";

import { useCookieConsent } from "./cookie-consent-context";

export function CookieSettingsLink() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-white/60 hover:text-accent transition-colors"
    >
      Configurar cookies
    </button>
  );
}
