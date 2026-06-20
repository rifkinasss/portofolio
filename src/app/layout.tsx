import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CosmicBackground } from "@/components/layout/cosmic-background";
import { Header } from "@/components/layout/header";
import { PageTransition } from "@/components/layout/page-transition";
import { Footer } from "@/components/layout/footer";
import { AppProviders } from "@/components/layout/app-providers";
import { defaultKeywords } from "@/lib/seo";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/branding/naslabs-logo-light.png`,
      description: siteConfig.description,
      founder: {
        "@id": `${siteConfig.url}/#person`,
      },
      sameAs: [
        "https://github.com/rifkinasss",
        "https://www.linkedin.com/in/rifki-anashirul",
        "https://www.instagram.com/naslabs.id",
        "https://www.threads.net/@naslabs.id",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.personalName,
      url: siteConfig.url,
      email: siteConfig.email,
      jobTitle: "Software Developer and Product Builder",
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: ["en", "id"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.personalName }],
  creator: siteConfig.personalName,
  publisher: siteConfig.name,
  keywords: defaultKeywords,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [
      {
        url: "/branding/naslabs-logo-light.png",
        width: 1200,
        height: 630,
        alt: "NasLabs - Turning Ideas Into Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/branding/naslabs-logo-light.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="cosmic-shell flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AppProviders>
          <CosmicBackground />
          <Header />
          <main className="relative z-10 flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
