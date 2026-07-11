import { Cormorant_Garamond, Manrope } from "next/font/google";

export const editorialSerif = Cormorant_Garamond({
  variable: "--font-editorial-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const editorialSans = Manrope({
  variable: "--font-editorial-sans",
  subsets: ["latin"],
  display: "swap",
});
