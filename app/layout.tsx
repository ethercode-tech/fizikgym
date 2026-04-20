import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { InteractionTracker } from "@/components/InteractionTracker";

const headingFont = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"]
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fizik Gym | Gimnasio en Chijra",
  description: "Landing oficial de Fizik Gym con horarios, ubicacion y contacto por WhatsApp.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Fizik Gym",
    description: "Entrena en Chijra con acompanamiento real.",
    url: siteUrl,
    siteName: "Fizik Gym",
    locale: "es_AR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        {children}
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <InteractionTracker />
      </body>
    </html>
  );
}
