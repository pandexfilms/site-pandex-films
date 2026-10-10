import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Pandex Films | Produtora de Vídeo",
  description:
    "Produtora de vídeo especializada em conteúdo audiovisual para marcas e empresas. Transformamos suas ideias em imagens.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/pandex-03-20-281-29.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/pandex-03-20-281-29.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/pandex-03-20-281-29.png",
      },
    ],
    apple: "/images/pandex-03-20-281-29.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
