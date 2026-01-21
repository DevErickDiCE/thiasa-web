import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería, suelo radiante, carpintería de madera y aluminio. ✓ Presupuesto gratis ✓ Garantía profesional.",
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
    '@type': 'HomeAndConstructionBusiness',
    name: 'THIASA',
    image: 'https://www.thiasa.es/logo.png',
    '@id': 'https://www.thiasa.es/#organization',
    url: 'https://www.thiasa.es',
    telephone: '+34604154746',
    email: 'info@thiasa.es',
    address: {
      '@type': 'PostalAddress',
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
    description: "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería, suelo radiante, carpintería.",
    foundingDate: "2010",
    priceRange: "$$"
  };

  return (
    <html lang="es" className="scroll-smooth scroll-pt-28">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
