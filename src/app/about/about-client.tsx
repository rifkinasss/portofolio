"use client";

import { usePreferences } from "@/components/layout/app-providers";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const areasOfInterest = [
  "SaaS Development",
  "Artificial Intelligence",
  "GIS & Mapping",
  "IoT Systems",
  "Backend Engineering",
  "Product Development",
  "Startup Building",
  "Business Systems",
];

const tools = [
  "Next.js",
  "Laravel",
  "PostgreSQL",
  "PostGIS",
  "React",
  "TypeScript",
  "Docker",
  "Python",
  "MQTT",
];

const milestones = [
  {
    year: "2023",
    en: "Started building larger web applications",
    id: "Mulai membangun aplikasi web dengan skala yang lebih besar",
  },
  {
    year: "2024",
    en: "Explored GIS and mapping systems",
    id: "Mengeksplorasi GIS dan sistem pemetaan",
  },
  {
    year: "2025",
    en: "Built environmental monitoring platforms",
    id: "Membangun platform environmental monitoring",
  },
  {
    year: "2026",
    en: "Launched NasLabs and started building in public",
    id: "Meluncurkan NasLabs dan mulai build in public",
  },
];

const copy = {
  en: {
    heroEyebrow: "About",
    heroTitle: "Hi, I'm Rifki.",
    heroSubtitle:
      "Software developer, builder, and lifelong learner exploring the intersection of technology, business, and product development.",
    heroAlt:
      "I enjoy turning ideas into software, and software into opportunities.",
    storyEyebrow: "My Story",
    storyTitle: "My Journey",
    story: [
      "My journey started with curiosity about how software works.",
      "Over time, that curiosity evolved into building websites, backend systems, mapping applications, IoT integrations, and various digital products.",
      "Today, I'm interested not only in writing code, but also in understanding how products are created, validated, and transformed into sustainable businesses.",
    ],
    naslabsEyebrow: "Why NasLabs Exists",
    naslabsTitle: "Why NasLabs?",
    naslabs: [
      "NasLabs was created as a place to document ideas, experiments, projects, and lessons learned throughout my journey.",
      "Some ideas become products. Some products become businesses. Many become valuable learning experiences.",
      "NasLabs exists to capture that process.",
    ],
    areasEyebrow: "What I Explore",
    areasTitle: "Areas of Interest",
    philosophyEyebrow: "Philosophy",
    philosophyTitle: "My Philosophy",
    philosophy: [
      "I believe the best way to learn is by building.",
      "Not every idea needs funding. Not every project needs perfection.",
      "The important thing is to create, experiment, learn, and keep moving forward.",
    ],
    milestonesEyebrow: "Timeline",
    milestonesTitle: "Milestones",
    toolsEyebrow: "Technology Stack",
    toolsTitle: "Tools I Frequently Use",
    beyondEyebrow: "Beyond Coding",
    beyondTitle: "Beyond the Screen",
    beyond:
      "When I'm not building software, I spend time exploring startup ideas, learning about business models, studying technology trends, and thinking about how digital products can solve real-world problems.",
    closingEyebrow: "Let's Connect",
    closingTitle: "Let's Connect",
    closing:
      "Whether you're building a product, exploring an idea, or simply interested in technology and startups, I'd be glad to connect.",
    projects: "View Projects",
    contact: "Contact Me",
  },
  id: {
    heroEyebrow: "Tentang",
    heroTitle: "Halo, saya Rifki.",
    heroSubtitle:
      "Software developer, builder, dan lifelong learner yang mengeksplorasi irisan antara teknologi, bisnis, dan pengembangan produk.",
    heroAlt:
      "Saya menikmati proses mengubah ide menjadi software, dan software menjadi peluang.",
    storyEyebrow: "Cerita Saya",
    storyTitle: "Perjalanan Saya",
    story: [
      "Perjalanan saya dimulai dari rasa penasaran tentang bagaimana software bekerja.",
      "Seiring waktu, rasa penasaran itu berkembang menjadi proses membangun website, sistem backend, aplikasi pemetaan, integrasi IoT, dan berbagai produk digital.",
      "Hari ini, saya tidak hanya tertarik menulis kode, tetapi juga memahami bagaimana produk dibuat, divalidasi, dan diubah menjadi bisnis yang berkelanjutan.",
    ],
    naslabsEyebrow: "Alasan NasLabs Ada",
    naslabsTitle: "Mengapa NasLabs?",
    naslabs: [
      "NasLabs dibuat sebagai tempat untuk mendokumentasikan ide, eksperimen, project, dan pelajaran dari perjalanan saya.",
      "Sebagian ide menjadi produk. Sebagian produk menjadi bisnis. Banyak lainnya menjadi pengalaman belajar yang berharga.",
      "NasLabs hadir untuk menangkap proses tersebut.",
    ],
    areasEyebrow: "Yang Saya Eksplorasi",
    areasTitle: "Area Ketertarikan",
    philosophyEyebrow: "Filosofi",
    philosophyTitle: "Filosofi Saya",
    philosophy: [
      "Saya percaya cara terbaik untuk belajar adalah dengan membangun.",
      "Tidak semua ide butuh pendanaan. Tidak semua project butuh kesempurnaan.",
      "Yang penting adalah menciptakan, bereksperimen, belajar, dan terus bergerak maju.",
    ],
    milestonesEyebrow: "Timeline",
    milestonesTitle: "Milestone",
    toolsEyebrow: "Technology Stack",
    toolsTitle: "Tools yang Sering Saya Gunakan",
    beyondEyebrow: "Di Luar Coding",
    beyondTitle: "Beyond the Screen",
    beyond:
      "Saat tidak sedang membangun software, saya menghabiskan waktu mengeksplorasi ide startup, mempelajari model bisnis, mengikuti tren teknologi, dan memikirkan bagaimana produk digital dapat menyelesaikan masalah nyata.",
    closingEyebrow: "Mari Terhubung",
    closingTitle: "Mari Terhubung",
    closing:
      "Baik kamu sedang membangun produk, mengeksplorasi ide, atau sekadar tertarik dengan teknologi dan startup, saya senang untuk terhubung.",
    projects: "Lihat Project",
    contact: "Hubungi Saya",
  },
};

export default function AboutPage() {
  const { language } = usePreferences();
  const text = copy[language];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="mb-14 grid gap-8 md:grid-cols-[1fr_0.78fr] md:items-end">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-300">
            {text.heroEyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {text.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            {text.heroSubtitle}
          </p>
        </div>
        <Card className="glass-panel">
          <CardHeader>
            <Badge className="mb-3 w-fit bg-cyan-300/10 text-cyan-100">
              NasLabs
            </Badge>
            <CardTitle className="text-2xl leading-snug">
              {text.heroAlt}
            </CardTitle>
          </CardHeader>
        </Card>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-[0.78fr_1.22fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.storyEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.storyTitle}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          {text.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {text.naslabsEyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.naslabsTitle}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              {text.naslabs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.areasEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.areasTitle}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areasOfInterest.map((area, index) => (
            <Card key={area} className="glass-panel">
              <CardHeader>
                <Badge className="mb-3 w-fit bg-cyan-300/10 text-cyan-100">
                  0{index + 1}
                </Badge>
                <CardTitle className="text-lg">{area}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-[0.78fr_1.22fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.philosophyEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.philosophyTitle}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          {text.philosophy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.milestonesEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.milestonesTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="glass-panel rounded-lg border border-cyan-300/15 p-5"
            >
              <Badge className="mb-5 bg-white/[0.055] text-slate-200">
                {milestone.year}
              </Badge>
              <p className="text-base font-medium leading-7 text-slate-100">
                {milestone[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <Card className="glass-panel">
          <CardHeader>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {text.toolsEyebrow}
            </p>
            <CardTitle className="text-3xl">{text.toolsTitle}</CardTitle>
            <CardDescription>
              Tools change over time, but these are the ones I often reach for
              when building products.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Badge key={tool} className="bg-card/70 px-3 py-2 text-sm">
                {tool}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-[0.78fr_1.22fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.beyondEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.beyondTitle}
          </h2>
        </div>
        <p className="text-base leading-8 text-muted-foreground">
          {text.beyond}
        </p>
      </section>

      <section className="py-12">
        <div className="glass-panel overflow-hidden rounded-lg border border-cyan-300/20 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {text.closingEyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.closingTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                {text.closing}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects" size="lg">
                {text.projects}
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                {text.contact}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
