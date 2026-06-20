import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";

const siteUrl = new URL(siteConfig.url);
const ogImage = "/branding/naslabs-logo-light.png";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export const defaultKeywords = [
  "NasLabs",
  "Rifki Anashirul",
  "software developer",
  "startup studio",
  "product development",
  "SaaS",
  "AI",
  "GIS",
  "IoT",
  "Next.js",
  "Laravel",
  "PostgreSQL",
];

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoConfig): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const fullTitle =
    title === siteConfig.name ? siteConfig.title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
      languages: {
        en: canonical,
        id: canonical,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      alternateLocale: ["id_ID"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} brand image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
