// .trim() defiende contra espacios/saltos de línea accidentales en la variable
// de entorno (p. ej. al pegar el valor en el panel de Vercel), que corrompen
// el argumento de gtag('config', ...) y hacen que GA4 rechace todos los hits.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// gtag.js solo interpreta como comandos los elementos del dataLayer que son
// objetos `arguments` (lo que empuja el snippet oficial). Un array normal
// (dataLayer.push(["config", ...])) se descarta en silencio: el script carga
// pero nunca emite /g/collect. Por eso aquí nada hace push directo de arrays;
// todo pasa por window.gtag, definido en el script inline del layout (con un
// fallback idéntico por si aún no existiera).
function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params -- gtag.js exige `arguments`; un array de rest params se ignoraría
      window.dataLayer.push(arguments);
    };
  }
  window.gtag(...args);
}

export function updateAnalyticsConsent(granted: boolean) {
  gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

export function initGtag(measurementId: string) {
  gtag("js", new Date());
  // send_page_view: false porque el page_view se envía manualmente en cada
  // cambio de ruta (ver PageviewTracker) para evitar duplicados en el App Router.
  gtag("config", measurementId, { send_page_view: false });
}

export function trackPageview(pagePath: string) {
  if (!GA_MEASUREMENT_ID) return;
  gtag("event", "page_view", { page_path: pagePath });
}

interface ClickEventParams {
  page_path: string;
  button_location: string;
}

export function trackWhatsappClick(params: ClickEventParams) {
  gtag("event", "click_whatsapp", params);
}

export function trackPhoneClick(params: ClickEventParams) {
  gtag("event", "click_phone", params);
}

export function trackEmailClick(params: ClickEventParams) {
  gtag("event", "click_email", params);
}

export function trackGenerateLead(params: { form_name: string; page_path: string }) {
  gtag("event", "generate_lead", params);
}
