import { Archivo, Inter } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-archivo",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
