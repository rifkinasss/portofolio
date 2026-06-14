import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CosmicBackground } from "@/components/layout/cosmic-background";
import { Header } from "@/components/layout/header";
import { PageTransition } from "@/components/layout/page-transition";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nas Labs - Technology Portfolio",
  description:
    "Technology portfolio yang fokus pada full stack, backend, frontend, dan integrasi sistem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="cosmic-shell flex min-h-full flex-col bg-background text-foreground">
        <CosmicBackground />
        <Header />
        <main className="relative z-10 flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
