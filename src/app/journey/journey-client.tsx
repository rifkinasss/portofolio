"use client";

import { usePreferences } from "@/components/layout/app-providers";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const timeline = [
  {
    year: "2026",
    status: { en: "In Progress", id: "Berjalan" },
    items: {
      en: [
        "Launched NasLabs",
        "Started building in public",
        "Published startup and development content",
        "Explored SaaS opportunities",
      ],
      id: [
        "Meluncurkan NasLabs",
        "Mulai build in public",
        "Menerbitkan konten startup dan development",
        "Mengeksplorasi peluang SaaS",
      ],
    },
    learned: {
      en: "Building publicly creates accountability.",
      id: "Membangun secara terbuka menciptakan akuntabilitas.",
    },
  },
  {
    year: "2025",
    status: { en: "Completed", id: "Selesai" },
    items: {
      en: [
        "Built environmental monitoring systems",
        "Worked on GIS and mapping projects",
        "Expanded backend engineering experience",
      ],
      id: [
        "Membangun sistem environmental monitoring",
        "Mengerjakan project GIS dan pemetaan",
        "Memperluas pengalaman backend engineering",
      ],
    },
    learned: {
      en: "Real systems need clarity, reliability, and maintainable data flows.",
      id: "Sistem nyata membutuhkan kejelasan, reliabilitas, dan alur data yang mudah dirawat.",
    },
  },
  {
    year: "2024",
    status: { en: "Completed", id: "Selesai" },
    items: {
      en: [
        "Deepened Laravel and web development skills",
        "Built larger-scale web applications",
      ],
      id: [
        "Memperdalam Laravel dan web development",
        "Membangun aplikasi web dengan skala yang lebih besar",
      ],
    },
    learned: {
      en: "Strong fundamentals make larger projects easier to reason about.",
      id: "Fundamental yang kuat membuat project besar lebih mudah dipahami.",
    },
  },
];

const lessons = [
  {
    en: "Shipping beats perfection.",
    id: "Mengirim karya lebih penting daripada mengejar sempurna.",
  },
  {
    en: "Users care about solving problems, not technology stacks.",
    id: "Pengguna peduli pada solusi masalah, bukan stack teknologi.",
  },
  {
    en: "Most ideas look good until someone has to pay for them.",
    id: "Banyak ide terlihat bagus sampai seseorang harus membayarnya.",
  },
  {
    en: "Consistency creates more opportunities than talent alone.",
    id: "Konsistensi menciptakan lebih banyak peluang daripada talenta saja.",
  },
];

const experiments = [
  {
    en: "Exploring GIS-based asset management",
    id: "Mengeksplorasi asset management berbasis GIS",
  },
  {
    en: "Testing SaaS validation frameworks",
    id: "Menguji framework validasi SaaS",
  },
  {
    en: "Building content systems",
    id: "Membangun sistem konten",
  },
  {
    en: "Learning AI-powered workflows",
    id: "Mempelajari workflow berbasis AI",
  },
  {
    en: "Evaluating startup opportunities",
    id: "Mengevaluasi peluang startup",
  },
];

const currentlyLearning = [
  "Startup Validation",
  "Business Models",
  "Product Positioning",
  "AI Applications",
  "System Architecture",
  "Content Distribution",
];

const futureGoals = [
  {
    en: "Launch meaningful products",
    id: "Meluncurkan produk yang bermakna",
  },
  {
    en: "Build a valuable audience",
    id: "Membangun audiens yang bernilai",
  },
  {
    en: "Create sustainable digital businesses",
    id: "Menciptakan bisnis digital yang berkelanjutan",
  },
  {
    en: "Share lessons publicly",
    id: "Membagikan pelajaran secara terbuka",
  },
  {
    en: "Continue learning through building",
    id: "Terus belajar lewat proses membangun",
  },
];

const copy = {
  en: {
    heroEyebrow: "Journey",
    heroTitle: "The Journey",
    heroSubtitle:
      "A collection of milestones, experiments, lessons, and ideas from my journey in software development, product building, and entrepreneurship.",
    missionEyebrow: "Current Mission",
    missionTitle: "Current Mission",
    missionBody: [
      "I'm focused on becoming a better builder.",
      "That means improving my technical skills, exploring startup opportunities, creating digital products, and documenting everything I learn along the way.",
    ],
    timelineEyebrow: "Timeline",
    timelineTitle: "Timeline",
    status: "Status",
    learned: "What I Learned",
    lessonsEyebrow: "Lessons Learned",
    lessonsTitle: "Lessons Along The Way",
    lesson: "Lesson",
    experimentsEyebrow: "Experiments",
    experimentsTitle: "Experiments",
    learningEyebrow: "What I'm Learning",
    learningTitle: "Currently Learning",
    futureEyebrow: "Future Goals",
    futureTitle: "Looking Ahead",
    closing: [
      "Every venture starts with an idea.",
      "Every idea starts with action.",
      "This journey is simply my attempt to keep building.",
    ],
  },
  id: {
    heroEyebrow: "Journey",
    heroTitle: "Perjalanan",
    heroSubtitle:
      "Kumpulan milestone, eksperimen, pelajaran, dan ide dari perjalanan saya di software development, product building, dan entrepreneurship.",
    missionEyebrow: "Misi Saat Ini",
    missionTitle: "Misi Saat Ini",
    missionBody: [
      "Saya sedang fokus menjadi builder yang lebih baik.",
      "Artinya, saya terus meningkatkan kemampuan teknis, mengeksplorasi peluang startup, membuat produk digital, dan mendokumentasikan semua hal yang saya pelajari di sepanjang perjalanan.",
    ],
    timelineEyebrow: "Timeline",
    timelineTitle: "Timeline",
    status: "Status",
    learned: "Yang Saya Pelajari",
    lessonsEyebrow: "Pelajaran",
    lessonsTitle: "Lessons Along The Way",
    lesson: "Pelajaran",
    experimentsEyebrow: "Eksperimen",
    experimentsTitle: "Eksperimen",
    learningEyebrow: "Yang Saya Pelajari",
    learningTitle: "Sedang Dipelajari",
    futureEyebrow: "Tujuan ke Depan",
    futureTitle: "Melihat ke Depan",
    closing: [
      "Setiap venture dimulai dari sebuah ide.",
      "Setiap ide dimulai dari tindakan.",
      "Perjalanan ini adalah upaya saya untuk terus membangun.",
    ],
  },
};

export default function JourneyPage() {
  const { language } = usePreferences();
  const text = copy[language];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="mb-14">
        <p className="mb-3 text-sm font-medium text-cyan-300">
          {text.heroEyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {text.heroTitle}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
          {text.heroSubtitle}
        </p>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {text.missionEyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.missionTitle}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              {text.missionBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.timelineEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.timelineTitle}
          </h2>
        </div>
        <div className="grid gap-5">
          {timeline.map((milestone) => (
            <Card key={milestone.year} className="glass-panel overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[14rem_1fr]">
                <div className="border-b border-white/10 bg-cyan-300/[0.035] p-6 lg:border-b-0 lg:border-r">
                  <Badge className="mb-5 bg-cyan-300/10 text-cyan-100">
                    {milestone.year}
                  </Badge>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400">{text.status}</p>
                    <p className="text-lg font-semibold text-slate-100">
                      {milestone.status[language]}
                    </p>
                  </div>
                </div>
                <CardContent className="space-y-6 px-6 pb-6 pt-8 sm:pt-10">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {milestone.items[language].map((item) => (
                      <div
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-muted-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                      {text.learned}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {milestone.learned[language]}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.lessonsEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.lessonsTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {lessons.map((lesson, index) => (
            <Card key={lesson.en} className="glass-panel">
              <CardHeader>
                <Badge className="mb-4 w-fit bg-cyan-300/10 text-cyan-100">
                  {text.lesson} #{String(index + 1).padStart(2, "0")}
                </Badge>
                <CardTitle className="text-lg leading-7">
                  {lesson[language]}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-[0.82fr_1.18fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.experimentsEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.experimentsTitle}
          </h2>
        </div>
        <div className="grid gap-3">
          {experiments.map((item, index) => (
            <div
              key={item.en}
              className="glass-panel rounded-lg border border-cyan-300/15 p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Badge className="w-fit bg-white/[0.055] text-slate-200">
                  0{index + 1}
                </Badge>
                <p className="text-sm font-medium leading-6 text-slate-100">
                  {item[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <Card className="glass-panel">
          <CardHeader>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {text.learningEyebrow}
            </p>
            <CardTitle className="text-3xl">{text.learningTitle}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {currentlyLearning.map((item) => (
              <Badge key={item} className="bg-card/70 px-3 py-2 text-sm">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.futureEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.futureTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {futureGoals.map((goal, index) => (
            <div
              key={goal.en}
              className="glass-panel rounded-lg border border-cyan-300/15 p-5"
            >
              <Badge className="mb-5 bg-cyan-300/10 text-cyan-100">
                Goal 0{index + 1}
              </Badge>
              <p className="text-sm font-medium leading-6 text-slate-100">
                {goal[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 text-center sm:p-10">
          <div className="mx-auto max-w-2xl space-y-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            {text.closing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
