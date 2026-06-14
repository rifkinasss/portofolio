"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/projects", label: "Project" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-300/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="text-base font-bold tracking-tight sm:text-lg">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-3 text-sm font-medium sm:gap-6">
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
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-2 -bottom-1 h-px rounded-full bg-cyan-300" />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
