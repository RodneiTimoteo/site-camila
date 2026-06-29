import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";

import { siteConfig } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const metadataTitle = "Camila Timóteo Vieira | Dados, IA, Liderança e Educação";
const metadataDescription =
  "Líder em Dados e Inteligência Artificial, educadora e palestrante, com mais de 15 anos de experiência conectando tecnologia, estratégia, liderança e desenvolvimento profissional.";

export const metadata: Metadata = {
  title: {
    default: metadataTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: metadataDescription,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
