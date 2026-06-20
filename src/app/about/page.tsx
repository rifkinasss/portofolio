import type { Metadata } from "next";
import AboutClient from "@/app/about/about-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Rifki Anashirul, the builder behind NasLabs, his journey in software development, product building, startup exploration, and technology.",
  path: "/about",
  keywords: ["about Rifki Anashirul", "software builder", "product builder"],
});

export default function AboutPage() {
  return <AboutClient />;
}

