"use client";

import { BrandLogo } from "@/components/layout/brand-logo";
import { usePreferences } from "@/components/layout/app-providers";

const footerCopy = {
  en: {
    builtBy: "Built by Rifki Anashirul.",
    tagline: "Turning Ideas Into Ventures",
  },
  id: {
    builtBy: "Dibangun oleh Rifki Anashirul.",
    tagline: "Mengubah Ide Menjadi Bisnis Nyata",
  },
};

export function Footer() {
  const { language } = usePreferences();
  const copy = footerCopy[language];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl flex-col justify-center gap-4 px-5 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-3">
          <BrandLogo imageClassName="h-8" />
          <p>
            &copy; {new Date().getFullYear()} NasLabs. {copy.builtBy}
          </p>
        </div>
        <p>{copy.tagline}</p>
      </div>
    </footer>
  );
}
