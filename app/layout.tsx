import type { Metadata } from "next";
import { archivo, inter } from "@/src/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "REGEN",
  description: "REGEN high-performance sports recovery and preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
