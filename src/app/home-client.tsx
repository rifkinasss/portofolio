"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { usePreferences } from "@/components/layout/app-providers";

const learningTopics = [
  { en: "Startup Lessons", id: "Pelajaran Startup" },
  { en: "Product Development", id: "Pengembangan Produk" },
  { en: "Software Architecture", id: "Arsitektur Software" },
  { en: "SaaS Validation", id: "Validasi SaaS" },
  { en: "AI Experiments", id: "Eksperimen AI" },
  { en: "GIS Applications", id: "Aplikasi GIS" },
  { en: "Founder Journey", id: "Perjalanan Founder" },
];

const currentFocus = [
  {
    en: "Building a stronger personal brand",
    id: "Membangun personal brand yang lebih kuat",
  },
  {
    en: "Publishing consistent content",
    id: "Menerbitkan konten secara konsisten",
  },
  {
    en: "Exploring SaaS opportunities",
    id: "Mengeksplorasi peluang SaaS",
  },
  {
    en: "Improving product development skills",
    id: "Meningkatkan kemampuan pengembangan produk",
  },
  {
    en: "Documenting startup experiments",
    id: "Mendokumentasikan eksperimen startup",
  },
];

const latestNotes = [
  { en: "How I Evaluate SaaS Ideas", id: "Cara Saya Mengevaluasi Ide SaaS" },
  {
    en: "Lessons From Building GIS Applications",
    id: "Pelajaran dari Membangun Aplikasi GIS",
  },
  {
    en: "Why Most Side Projects Never Launch",
    id: "Mengapa Banyak Side Project Tidak Pernah Launch",
  },
  {
    en: "My Startup Validation Framework",
    id: "Framework Validasi Startup Saya",
  },
];

const exploringAreas = [
  {
    title: { en: "SaaS", id: "SaaS" },
    description: {
      en: "Building scalable software businesses from simple ideas.",
      id: "Membangun bisnis software yang scalable dari ide sederhana.",
    },
  },
  {
    title: { en: "Artificial Intelligence", id: "Artificial Intelligence" },
    description: {
      en: "Exploring practical AI applications for real business problems.",
      id: "Mengeksplorasi penerapan AI praktis untuk masalah bisnis nyata.",
    },
  },
  {
    title: { en: "GIS & Mapping", id: "GIS & Mapping" },
    description: {
      en: "Creating location-based systems and geospatial solutions.",
      id: "Membuat sistem berbasis lokasi dan solusi geospasial.",
    },
  },
  {
    title: { en: "Product Development", id: "Pengembangan Produk" },
    description: {
      en: "Learning how ideas evolve into products people actually use.",
      id: "Mempelajari bagaimana ide berkembang menjadi produk yang benar-benar digunakan.",
    },
  },
  {
    title: { en: "Startup Building", id: "Membangun Startup" },
    description: {
      en: "Experimenting with validation, growth, and venture creation.",
      id: "Bereksperimen dengan validasi, growth, dan pembentukan venture.",
    },
  },
  {
    title: { en: "Operational Systems", id: "Sistem Operasional" },
    description: {
      en: "Designing software that improves business processes and efficiency.",
      id: "Merancang software yang meningkatkan proses bisnis dan efisiensi.",
    },
  },
];

const featuredBuilds = [
  {
    name: "Environmental Monitoring System",
    description:
      "A platform for monitoring environmental indicators in mining operations.",
    techStack: ["Laravel", "Next.js", "PostgreSQL", "MQTT"],
    year: "2026",
  },
  {
    name: "GIS Asset Management SaaS",
    description:
      "A geospatial product concept for mapping, tracking, and managing field assets.",
    techStack: ["Next.js", "Laravel", "PostGIS", "Leaflet"],
    year: "2026",
  },
  {
    name: "Fleet & Heavy Equipment Management",
    description:
      "An operational system concept for monitoring fleet activity, equipment status, and utilization.",
    techStack: ["Laravel", "Next.js", "PostgreSQL", "REST API"],
    year: "2026",
  },
];

export default function Home() {
  const { language } = usePreferences();
  const copy = {
    en: {
      aboutEyebrow: "About NasLabs",
      aboutTitle: "What is NasLabs?",
      aboutBody: [
        "NasLabs is my personal space to explore technology, startups, and product development.",
        "I use it to share ideas, experiments, lessons learned, and projects that I'm building along the way.",
      ],
      aboutLines: [
        "Some ideas stay as experiments.",
        "Some become products.",
        "A few may become ventures.",
      ],
      visionEyebrow: "Vision",
      visionTitle: "Who's Behind NasLabs?",
      visionBody: [
        "Hi, I'm Rifki.",
        "I'm a software developer who enjoys building products and solving real-world problems through technology.",
        "My interests span SaaS, AI, GIS, IoT, backend systems, and startup development.",
        "NasLabs is where I document that journey.",
      ],
      explorationEyebrow: "Exploration",
      explorationTitle: "What I'm Exploring",
      featuredEyebrow: "Featured Projects",
      featuredTitle: "Things I've Built",
      viewAll: "View All",
      projectLabel: "Project",
      techStack: "Tech Stack",
      year: "Year",
      learningEyebrow: "Build in Public",
      learningTitle: "Learning in Public",
      learningIntro:
        "I believe the best way to learn is by building and sharing the process.",
      learningSub: "Here are some topics I regularly explore.",
      focusEyebrow: "Current Focus",
      focusTitle: "Currently Focused On",
      focusLabel: "Focus",
      philosophyEyebrow: "Philosophy",
      philosophyTitle: "Build. Learn. Share.",
      philosophyBody: [
        "Not every idea deserves a startup.",
        "Not every project deserves months of development.",
        "The goal isn't to build more.",
        "The goal is to build things that matter, learn from them, and share the lessons openly.",
      ],
      notesEyebrow: "Journal / Insights",
      notesTitle: "Latest Notes",
      notesBadge: "Build notes",
      noteLabel: "Note",
      noteDescription:
        "A working note from the NasLabs build-in-public journey.",
      ctaEyebrow: "Collaboration",
      ctaTitle: "Let's Turn Ideas Into Reality",
      ctaBody: [
        "I'm always interested in meaningful projects, ambitious ideas, and opportunities to build useful products.",
        "If you're working on something exciting, let's talk.",
      ],
      status: "Status",
      statusValue: "Open to Collaboration",
      focus: "Focus",
      focusValue: "Product Development",
      location: "Location",
      locationValue: "Indonesia",
      ctaButton: "Let's Talk",
    },
    id: {
      aboutEyebrow: "Tentang NasLabs",
      aboutTitle: "Apa itu NasLabs?",
      aboutBody: [
        "NasLabs adalah ruang personal saya untuk mengeksplorasi teknologi, startup, dan pengembangan produk.",
        "Saya menggunakannya untuk membagikan ide, eksperimen, pelajaran, dan project yang sedang saya bangun.",
      ],
      aboutLines: [
        "Sebagian ide tetap menjadi eksperimen.",
        "Sebagian berkembang menjadi produk.",
        "Beberapa mungkin menjadi venture.",
      ],
      visionEyebrow: "Visi",
      visionTitle: "Siapa di Balik NasLabs?",
      visionBody: [
        "Halo, saya Rifki.",
        "Saya software developer yang suka membangun produk dan menyelesaikan masalah nyata lewat teknologi.",
        "Minat saya mencakup SaaS, AI, GIS, IoT, backend systems, dan pengembangan startup.",
        "NasLabs adalah tempat saya mendokumentasikan perjalanan itu.",
      ],
      explorationEyebrow: "Eksplorasi",
      explorationTitle: "Yang Saya Eksplorasi",
      featuredEyebrow: "Project Pilihan",
      featuredTitle: "Hal yang Pernah Saya Bangun",
      viewAll: "Lihat Semua",
      projectLabel: "Project",
      techStack: "Tech Stack",
      year: "Tahun",
      learningEyebrow: "Build in Public",
      learningTitle: "Learning in Public",
      learningIntro:
        "Saya percaya cara terbaik untuk belajar adalah dengan membangun dan membagikan prosesnya.",
      learningSub: "Berikut beberapa topik yang rutin saya eksplorasi.",
      focusEyebrow: "Fokus Saat Ini",
      focusTitle: "Sedang Fokus Pada",
      focusLabel: "Fokus",
      philosophyEyebrow: "Filosofi",
      philosophyTitle: "Build. Learn. Share.",
      philosophyBody: [
        "Tidak semua ide layak menjadi startup.",
        "Tidak semua project layak dikembangkan berbulan-bulan.",
        "Tujuannya bukan membangun lebih banyak.",
        "Tujuannya adalah membangun hal yang penting, belajar darinya, dan membagikan pelajarannya secara terbuka.",
      ],
      notesEyebrow: "Journal / Insights",
      notesTitle: "Catatan Terbaru",
      notesBadge: "Catatan build",
      noteLabel: "Catatan",
      noteDescription:
        "Catatan kerja dari perjalanan build-in-public NasLabs.",
      ctaEyebrow: "Kolaborasi",
      ctaTitle: "Mari Ubah Ide Menjadi Nyata",
      ctaBody: [
        "Saya selalu tertarik dengan project bermakna, ide ambisius, dan peluang untuk membangun produk yang berguna.",
        "Kalau kamu sedang mengerjakan sesuatu yang menarik, mari ngobrol.",
      ],
      status: "Status",
      statusValue: "Terbuka untuk Kolaborasi",
      focus: "Fokus",
      focusValue: "Pengembangan Produk",
      location: "Lokasi",
      locationValue: "Indonesia",
      ctaButton: "Mari Bicara",
    },
  }[language];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
      <Hero />

      <section className="grid gap-6 py-10 md:grid-cols-2">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {copy.aboutEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.aboutTitle}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {copy.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {copy.aboutLines[0]}
              <br />
              {copy.aboutLines[1]}
              <br />
              {copy.aboutLines[2]}
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {copy.visionEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.visionTitle}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {copy.visionBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {copy.explorationEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.explorationTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exploringAreas.map((item, index) => (
            <Card key={item.title.en} className="glass-panel">
              <CardHeader>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge className="bg-cyan-300/10 text-cyan-100">
                    0{index + 1}
                  </Badge>
                  <span className="h-px flex-1 bg-cyan-200/10" />
                </div>
                <CardTitle>{item.title[language]}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {item.description[language]}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-14" id="projects">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {copy.featuredEyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {copy.featuredTitle}
            </h2>
          </div>
          <ButtonLink href="/projects" variant="outline">
            {copy.viewAll}
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredBuilds.map((project, index) => (
            <Card key={project.name} className="glass-panel overflow-hidden">
              <div className="h-48 border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_14rem),radial-gradient(circle_at_80%_60%,rgba(124,58,237,0.24),transparent_14rem)] p-4">
                <div className="flex h-full flex-col justify-between rounded-md border border-white/10 bg-slate-950/55 p-4 shadow-sm backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
                    <span className="h-3 w-16 rounded-full bg-white/15" />
                  </div>
                  <div className="grid grid-cols-[1fr_0.7fr] gap-3">
                    <div className="h-24 rounded-md bg-cyan-300/15" />
                    <div className="space-y-3">
                      <div className="h-5 rounded-full bg-violet-400/30" />
                      <div className="h-5 rounded-full bg-white/15" />
                      <div className="h-5 w-2/3 rounded-full bg-white/15" />
                    </div>
                  </div>
                  <p className="text-xs font-medium text-cyan-100/80">
                    {copy.projectLabel} 0{index + 1}
                  </p>
                </div>
              </div>
              <CardHeader>
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge className="bg-cyan-300/10 text-cyan-100">
                    {project.year}
                  </Badge>
                </div>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                    {copy.techStack}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} className="bg-card/70">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-4 py-3">
                  <span className="text-sm text-slate-400">{copy.year}</span>
                  <span className="text-sm font-semibold text-cyan-100">
                    {project.year}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {copy.learningEyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {copy.learningTitle}
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                {copy.learningIntro}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
                {copy.learningSub}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {learningTopics.map((topic) => (
                  <Badge
                    key={topic.en}
                    className="bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100"
                  >
                    {topic[language]}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {copy.focusEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.focusTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {currentFocus.map((item, index) => (
            <div
              key={item.en}
              className="glass-panel rounded-lg border border-cyan-300/15 p-5"
            >
              <Badge className="mb-5 bg-cyan-300/10 text-cyan-100">
                {copy.focusLabel} 0{index + 1}
              </Badge>
              <p className="text-base font-medium leading-7 text-slate-100">
                {item[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {copy.philosophyEyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {copy.philosophyTitle}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted-foreground">
              {copy.philosophyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {copy.notesEyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {copy.notesTitle}
            </h2>
          </div>
          <Badge className="w-fit bg-cyan-300/10 text-cyan-100">
            {copy.notesBadge}
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {latestNotes.map((note, index) => (
            <Card key={note.en} className="glass-panel">
              <CardHeader>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge className="bg-white/[0.055] text-slate-200">
                    {copy.noteLabel} 0{index + 1}
                  </Badge>
                  <span className="h-px flex-1 bg-cyan-200/10" />
                </div>
                <CardTitle className="text-xl">{note[language]}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {copy.noteDescription}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="glass-panel overflow-hidden rounded-lg border border-cyan-300/20 text-foreground">
          <div className="grid gap-0 md:grid-cols-[1fr_20rem]">
            <div className="px-6 py-10 sm:px-10">
              <p className="mb-3 text-sm font-medium text-cyan-300">
                {copy.ctaEyebrow}
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
                {copy.ctaTitle}
              </h2>
              {copy.ctaBody.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`${index === 0 ? "mt-4" : "mt-3"} max-w-xl text-sm leading-6 text-muted-foreground`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="border-t border-white/10 bg-cyan-300/[0.035] p-6 md:border-l md:border-t-0">
              <div className="flex h-full min-h-44 flex-col justify-between rounded-md border border-white/10 bg-black/25 p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{copy.status}</span>
                    <span className="text-emerald-200">{copy.statusValue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{copy.focus}</span>
                    <span className="text-cyan-200">{copy.focusValue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">{copy.location}</span>
                    <span className="text-violet-200">{copy.locationValue}</span>
                  </div>
                </div>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  {copy.ctaButton}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
