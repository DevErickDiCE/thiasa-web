export const COOKIE_CONSENT_STORAGE_KEY = "thiasa_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;

export interface StoredConsent {
  version: number;
  analytics: boolean;
  timestamp: string;
}

export function parseStoredConsent(raw: string | null): StoredConsent | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (typeof parsed.analytics !== "boolean") return null;

    return {
      version: parsed.version ?? COOKIE_CONSENT_VERSION,
      analytics: parsed.analytics,
      timestamp: parsed.timestamp ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function persistConsent(analytics: boolean): StoredConsent {
  const value: StoredConsent = {
    version: COOKIE_CONSENT_VERSION,
    analytics,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value));
  }

  return value;
}
