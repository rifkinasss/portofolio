import type { Metadata } from "next";
import ProjectsClient from "@/app/projects/projects-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore NasLabs projects, case studies, systems, experiments, and product ideas across web applications, GIS, AI, IoT, SaaS, and software development.",
  path: "/projects",
  keywords: ["portfolio projects", "case studies", "GIS projects", "SaaS projects", "IoT monitoring"],
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}

