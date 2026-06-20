import type { Metadata } from "next";
import ContactClient from "@/app/contact/contact-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Rifki Anashirul and NasLabs for product development, startup ideas, technical collaboration, web applications, dashboards, and meaningful technology projects.",
  path: "/contact",
  keywords: ["contact NasLabs", "technical collaboration", "product development", "web application development"],
});

export default function ContactPage() {
  return <ContactClient />;
}

