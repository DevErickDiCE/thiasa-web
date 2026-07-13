// .trim() defiende contra espacios/saltos de línea accidentales en la variable
// de entorno (p. ej. al pegar el valor en el panel de Vercel), que corrompen
// el argumento de gtag('config', ...) y hacen que GA4 rechace todos los hits.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function pushToDataLayer(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function updateAnalyticsConsent(granted: boolean) {
  pushToDataLayer("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

export function initGtag(measurementId: string) {
  pushToDataLayer("js", new Date());
  // send_page_view: false porque el page_view se envía manualmente en cada
  // cambio de ruta (ver PageviewTracker) para evitar duplicados en el App Router.
  pushToDataLayer("config", measurementId, { send_page_view: false });
}

export function trackPageview(pagePath: string) {
  if (!GA_MEASUREMENT_ID) return;
  pushToDataLayer("event", "page_view", { page_path: pagePath });
}

interface ClickEventParams {
  page_path: string;
  button_location: string;
}

export function trackWhatsappClick(params: ClickEventParams) {
  pushToDataLayer("event", "click_whatsapp", params);
}

export function trackPhoneClick(params: ClickEventParams) {
  pushToDataLayer("event", "click_phone", params);
}

export function trackEmailClick(params: ClickEventParams) {
  pushToDataLayer("event", "click_email", params);
}

export function trackGenerateLead(params: { form_name: string; page_path: string }) {
  pushToDataLayer("event", "generate_lead", params);
}
