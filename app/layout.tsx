import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { createOrganizationSchema } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

 verification: {
  google: "bgXsSq6M9c4hjr3vyznwphFaDcTomAgN1IixmChpCo",
  yandex: "3b6d4d070e635d7a",
},

  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.defaultOgImage]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111c"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={createOrganizationSchema()} />
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}