import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AstronomyStage } from "@/components/sections/astronomy-stage";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 md:grid-cols-[0.92fr_1.08fr] md:py-18">
      <div className="flex flex-col items-start gap-7">
        <Badge className="astro-reveal opacity-0">
          Software Engineer - Full Stack
        </Badge>
        <div className="space-y-5">
          <h1 className="astro-reveal max-w-2xl text-4xl font-semibold leading-[1.06] tracking-tight text-foreground opacity-0 sm:text-5xl lg:text-6xl">
            Software Engineer untuk aplikasi web yang terstruktur.
          </h1>
          <p className="astro-reveal max-w-xl text-base leading-7 text-muted-foreground opacity-0 sm:text-lg">
            {siteConfig.name} membantu merancang dan membangun aplikasi web dari
            sisi server hingga tampilan, dengan alur kerja yang jelas dan kode
            yang mudah dikembangkan.
          </p>
        </div>
        <div className="astro-reveal flex flex-col gap-3 opacity-0 sm:flex-row">
          <ButtonLink href="/projects" size="lg">
            Lihat Project
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Hubungi Saya
          </ButtonLink>
        </div>
      </div>

      <AstronomyStage />
    </section>
  );
}
