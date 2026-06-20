"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/brand-logo";
import {
  type LanguagePreference,
  type ThemePreference,
  usePreferences,
} from "@/components/layout/app-providers";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: { id: "Beranda", en: "Home" } },
  { href: "/about", label: { id: "Tentang", en: "About" } },
  { href: "/projects", label: { id: "Project", en: "Projects" } },
  { href: "/journey", label: { id: "Journey", en: "Journey" } },
  { href: "/contact", label: { id: "Kontak", en: "Contact" } },
];

const themeOptions: { value: ThemePreference; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

const languageOptions: { value: LanguagePreference; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, setTheme, theme } = usePreferences();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-300/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="NasLabs home"
        >
          <BrandLogo imageClassName="h-8 sm:h-9" />
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-1 py-1.5 text-muted-foreground",
                  isActive && "text-cyan-100",
                )}
              >
                {item.label[language]}
                {isActive ? (
                  <span className="absolute inset-x-2 -bottom-1 h-px rounded-full bg-cyan-300" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <select
            aria-label="Theme"
            value={theme}
            onChange={(event) =>
              setTheme(event.target.value as ThemePreference)
            }
            className="h-9 rounded-md border border-border bg-background px-2 text-xs font-medium text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            {themeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            aria-label="Language"
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as LanguagePreference)
            }
            className="h-9 rounded-md border border-border bg-background px-2 text-xs font-medium text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
