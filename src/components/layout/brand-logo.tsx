import Image from "next/image";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type BrandLogoVariant = "light" | "dark";

type BrandLogoProps = {
  variant?: BrandLogoVariant | "auto";
  className?: string;
  imageClassName?: string;
};

const logoSources: Record<BrandLogoVariant, string> = {
  light: "/branding/naslabs-logo-light.png",
  dark: "/branding/naslabs-logo-dark.png",
};

export function BrandLogo({
  variant = "auto",
  className,
  imageClassName,
}: BrandLogoProps) {
  if (variant === "auto") {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src={logoSources.dark}
          alt={`${siteConfig.name} logo`}
          width={180}
          height={48}
          priority
          className={cn(
            "theme-logo-dark-mode h-9 w-auto object-contain",
            imageClassName,
          )}
        />
        <Image
          src={logoSources.light}
          alt={`${siteConfig.name} logo`}
          width={180}
          height={48}
          className={cn(
            "theme-logo-light-mode h-9 w-auto object-contain",
            imageClassName,
          )}
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={logoSources[variant]}
        alt={`${siteConfig.name} logo`}
        width={180}
        height={48}
        priority={variant === "light"}
        className={cn("h-9 w-auto object-contain", imageClassName)}
      />
    </span>
  );
}
