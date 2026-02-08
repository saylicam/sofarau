import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SOFARAU S.R.L — L'Ingénierie du Regard",
    template: "%s — SOFARAU S.R.L",
  },
  description:
    "Fabrication industrielle B2B de solutions techniques premium. Partenaire exclusif Schüco pour professionnels. 0% pose, 100% usine. Atelier à Wavre.",
  keywords: [
    "SOFARAU",
    "fabricant industriel B2B",
    "Schüco Living 82 MD",
    "quincaillerie Roto NX",
    "moustiquaires Feneko",
    "atelier Wavre",
    "fabrication fenêtres",
    "solutions techniques",
  ],
  authors: [{ name: "SOFARAU S.R.L" }],
  creator: "SOFARAU S.R.L",
  publisher: "SOFARAU S.R.L",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "/",
    title: "SOFARAU S.R.L — L'Ingénierie du Regard",
    description:
      "Fabrication industrielle B2B de solutions techniques premium. Partenaire exclusif Schüco.",
    siteName: "SOFARAU S.R.L",
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
    <html lang="fr">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <div className="min-h-dvh">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
