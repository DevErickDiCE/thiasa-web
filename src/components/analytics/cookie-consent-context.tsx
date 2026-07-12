"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore } from "react";
import { updateAnalyticsConsent } from "@/lib/analytics";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  parseStoredConsent,
  persistConsent,
  type StoredConsent,
} from "@/lib/cookie-consent";

interface CookieConsentContextValue {
  consent: StoredConsent | null;
  isBannerOpen: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

// Notifica a los suscriptores de este mismo tab cuando cambiamos el consentimiento:
// el evento nativo "storage" solo se dispara en otras pestañas, no en la que escribe.
const sameTabListeners = new Set<() => void>();

function subscribeToConsent(callback: () => void) {
  sameTabListeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    sameTabListeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getConsentSnapshot(): string | null {
  return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
}

function getServerConsentSnapshot(): string | null {
  return null;
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const rawConsent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );
  const consent = useMemo(() => parseStoredConsent(rawConsent), [rawConsent]);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  const applyConsent = useCallback((analytics: boolean) => {
    persistConsent(analytics);
    sameTabListeners.forEach((listener) => listener());
    updateAnalyticsConsent(analytics);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent(true);
    setIsPreferencesOpen(false);
  }, [applyConsent]);

  const rejectAll = useCallback(() => {
    applyConsent(false);
    setIsPreferencesOpen(false);
  }, [applyConsent]);

  const savePreferences = useCallback(
    (analytics: boolean) => {
      applyConsent(analytics);
      setIsPreferencesOpen(false);
    },
    [applyConsent]
  );

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        isBannerOpen: consent === null,
        isPreferencesOpen,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent debe usarse dentro de CookieConsentProvider");
  }
  return ctx;
}
