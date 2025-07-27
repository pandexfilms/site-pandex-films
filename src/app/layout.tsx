import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandex Films - Produção de Vídeo Profissional",
  description:
    "Especialistas em produção de vídeo profissional, capturando momentos únicos e transformando ideias em experiências visuais memoráveis.",
  keywords: [
    "produção de vídeo",
    "filmagem",
    "edição",
    "comercial",
    "eventos",
    "documentário",
  ],
  authors: [{ name: "Pandex Films" }],
  creator: "Pandex Films",
  publisher: "Pandex Films",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pandexfilms.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pandex Films - Produção de Vídeo Profissional",
    description:
      "Especialistas em produção de vídeo profissional, capturando momentos únicos e transformando ideias em experiências visuais memoráveis.",
    url: "https://pandexfilms.com",
    siteName: "Pandex Films",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandex Films - Produção de Vídeo Profissional",
    description:
      "Especialistas em produção de vídeo profissional, capturando momentos únicos e transformando ideias em experiências visuais memoráveis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
