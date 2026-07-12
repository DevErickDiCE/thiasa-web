import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/components/analytics/cookie-consent-context";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { LinkClickTracker } from "@/components/analytics/link-click-tracker";
import { CookieBanner } from "@/components/analytics/cookie-banner";
import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thiasa.es'),
  title: "THIASA | Reformas Integrales Madrid - Baños, Cocinas, Electricidad y Carpintería",
  description: "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería y carpintería. Presupuesto gratis en 24h.",
  keywords: "reformas integrales Madrid, reforma de baños, reforma de cocinas, instalaciones eléctricas, fontanería Madrid, suelo radiante, carpintería madera, ventanas aluminio PVC, aire acondicionado, pladur, pintura, albañilería",
  authors: [{ name: "THIASA - Reformas Integrales" }],
  creator: "THIASA",
  publisher: "THIASA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "THIASA - Reformas Integrales en Madrid",
    description: "Reformas de viviendas, baños y cocinas con garantía profesional. Instalaciones, carpintería y acabados premium.",
    type: "website",
    locale: "es_ES",
    url: "https://www.thiasa.es",
    siteName: "THIASA - Reformas Integrales",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "THIASA - Empresa de Reformas Integrales en Madrid",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THIASA - Reformas Integrales en Madrid",
    description: "Reformas de viviendas, baños y cocinas con garantía profesional. Instalaciones, carpintería y acabados premium.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: '0ebWO2OzovdnFfgEd5I47Kx-Q1GP2g33_ngxbFGsRXA',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'THIASA',
    image: 'https://www.thiasa.es/logo.png',
    '@id': 'https://www.thiasa.es/#organization',
    url: 'https://www.thiasa.es',
    telephone: '+34604154746',
    email: 'info@thiasa.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida De Los Apóstoles 53ºA',
      postalCode: '28011',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
      addressRegion: 'Madrid'
    },
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.thiasa.es/logo.png',
      width: 512,
      height: 512
    },
    description: "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería y carpintería.",
    foundingDate: "2010",
    priceRange: "$$",
    areaServed: [
      { '@type': 'City', name: 'Madrid' },
      { '@type': 'City', name: 'Pozuelo de Alarcón' },
      { '@type': 'City', name: 'Majadahonda' },
      { '@type': 'City', name: 'Las Rozas' },
      { '@type': 'City', name: 'Alcobendas' },
      { '@type': 'City', name: 'San Sebastián de los Reyes' },
      { '@type': 'City', name: 'Tres Cantos' },
      { '@type': 'City', name: 'Coslada' },
      { '@type': 'City', name: 'San Fernando de Henares' },
      { '@type': 'City', name: 'Getafe' },
      { '@type': 'City', name: 'Leganés' },
      { '@type': 'City', name: 'Alcorcón' },
      { '@type': 'City', name: 'Móstoles' },
      { '@type': 'City', name: 'Fuenlabrada' },
      { '@type': 'City', name: 'Torrejón de Ardoz' }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34604154746',
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: 'ES'
    },
    sameAs: [
      'https://www.thiasa.es'
    ]
  };

  // Consent Mode v2: define el estado por defecto (todo denegado) antes de
  // cualquier otro script. Se ejecuta como script plano, no como parte del
  // árbol de React, para garantizar que corre antes de que se cargue GA4.
  const consentBootstrapScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500
    });
    try {
      var stored = window.localStorage.getItem('${COOKIE_CONSENT_STORAGE_KEY}');
      if (stored) {
        var parsed = JSON.parse(stored);
        if (parsed && parsed.analytics === true) {
          gtag('consent', 'update', { analytics_storage: 'granted' });
        }
      }
    } catch (e) {}
  `;

  return (
    <html lang="es" className="scroll-smooth scroll-pt-28">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: consentBootstrapScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CookieConsentProvider>
          {children}
          <GoogleAnalytics />
          <LinkClickTracker />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
