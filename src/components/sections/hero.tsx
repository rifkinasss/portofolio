"use client";

import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AstronomyStage } from "@/components/sections/astronomy-stage";
import { usePreferences } from "@/components/layout/app-providers";

const heroCopy = {
  en: {
    badge: "NasLabs - Startup Studio",
    title: "Turning Ideas Into Ventures",
    description:
      "I build software, explore business ideas, and document the journey of turning concepts into real products. From SaaS and AI to GIS and operational systems, NasLabs is my digital laboratory for learning, building, and launching.",
    primary: "Explore Projects",
    secondary: "Follow the Journey",
  },
  id: {
    badge: "NasLabs - Studio Startup",
    title: "Mengubah Ide Menjadi Bisnis Nyata",
    description:
      "Saya membangun software, mengeksplorasi ide bisnis, dan mendokumentasikan perjalanan mengubah konsep menjadi produk nyata. Dari SaaS dan AI sampai GIS dan sistem operasional, NasLabs adalah laboratorium digital untuk belajar, membangun, dan meluncurkan produk.",
    primary: "Jelajahi Project",
    secondary: "Ikuti Perjalanan",
  },
};

export function Hero() {
  const { language } = usePreferences();
  const copy = heroCopy[language];

  return (
    <section className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 md:grid-cols-[0.92fr_1.08fr] md:py-18">
      <div className="flex flex-col items-start gap-7">
        <Badge className="astro-reveal opacity-0">{copy.badge}</Badge>
        <div className="space-y-5">
          <h1 className="astro-reveal max-w-2xl text-4xl font-semibold leading-[1.06] tracking-tight text-foreground opacity-0 sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="astro-reveal max-w-xl text-base leading-7 text-muted-foreground opacity-0 sm:text-lg">
            {copy.description}
          </p>
        </div>
        <div className="astro-reveal flex flex-col gap-3 opacity-0 sm:flex-row">
          <ButtonLink href="/projects" size="lg">
            {copy.primary}
          </ButtonLink>
          <ButtonLink href="/journey" variant="outline" size="lg">
            {copy.secondary}
          </ButtonLink>
        </div>
      </div>

      <AstronomyStage />
    </section>
  );
}
