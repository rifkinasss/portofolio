import type { Metadata } from "next";
import HomeClient from "@/app/home-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Turning Ideas Into Ventures",
  description:
    "NasLabs is a startup studio and digital product lab by Rifki Anashirul, exploring SaaS, AI, GIS, IoT, and software products from idea to launch.",
  path: "/",
  keywords: ["digital product lab", "build in public", "software builder"],
});

export default function HomePage() {
  return <HomeClient />;
}
