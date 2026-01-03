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
  title: "THIASA | Reformas Integrales Madrid - Baños, Cocinas, Electricidad y Carpintería",
  description: "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería, suelo radiante, carpintería de madera y aluminio. ✓ Presupuesto gratis ✓ Garantía profesional.",
  keywords: "reformas integrales Madrid, reforma de baños, reforma de cocinas, instalaciones eléctricas, fontanería Madrid, suelo radiante, carpintería madera, ventanas aluminio PVC, aire acondicionado, pladur, pintura, albañilería",
  openGraph: {
    title: "THIASA - Reformas Integrales en Madrid",
    description: "Reformas de viviendas, baños y cocinas con garantía profesional. Instalaciones, carpintería y acabados premium.",
    type: "website",
    locale: "es_ES",
    url: "https://reformas-theta.vercel.app",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-28">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
