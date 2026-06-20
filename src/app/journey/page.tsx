import type { Metadata } from "next";
import JourneyClient from "@/app/journey/journey-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Journey",
  description:
    "Follow the NasLabs journey through milestones, experiments, lessons learned, startup ideas, software development, and build-in-public progress.",
  path: "/journey",
  keywords: ["startup journey", "build in public", "founder journey", "lessons learned"],
});

export default function JourneyPage() {
  return <JourneyClient />;
}

