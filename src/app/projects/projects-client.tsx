"use client";

import { useMemo, useState } from "react";
import { usePreferences } from "@/components/layout/app-providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Language = "en" | "id";

type FeaturedProject = {
  id: string;
  categories: string[];
  name: Record<Language, string>;
  description: Record<Language, string>;
  year: string;
  role: Record<Language, string>;
  status: string;
  stack: string[];
  overview: Record<Language, string>;
  problem: Record<Language, string>;
  solution: Record<Language, string>;
  roles: Record<Language, string[]>;
  challenges: Record<Language, string[]>;
  lessons: Record<Language, string[]>;
};

const categories = ["All", "Web Applications", "GIS", "AI", "IoT", "SaaS", "Experiments"];

const featuredProjects: FeaturedProject[] = [
  {
    id: "environmental-monitoring",
    categories: ["IoT", "Web Applications"],
    name: {
      en: "Environmental Monitoring Platform",
      id: "Platform Environmental Monitoring",
    },
    description: {
      en: "Real-time monitoring system for environmental indicators in mining operations.",
      id: "Sistem monitoring real-time untuk indikator lingkungan pada operasional pertambangan.",
    },
    year: "2025",
    role: { en: "Full Stack Developer", id: "Full Stack Developer" },
    status: "Production",
    stack: ["Laravel", "Next.js", "PostgreSQL", "MQTT", "Docker"],
    overview: {
      en: "A platform for collecting, organizing, and visualizing environmental data from operational sites.",
      id: "Platform untuk mengumpulkan, mengelola, dan memvisualisasikan data lingkungan dari area operasional.",
    },
    problem: {
      en: "Mining companies require continuous monitoring of environmental indicators, but existing processes often rely on manual reporting and fragmented systems.",
      id: "Perusahaan pertambangan membutuhkan monitoring indikator lingkungan secara berkelanjutan, tetapi proses yang ada sering bergantung pada laporan manual dan sistem yang terpisah.",
    },
    solution: {
      en: "A centralized platform that collects sensor data, visualizes environmental conditions, and provides real-time alerts.",
      id: "Platform terpusat yang mengumpulkan data sensor, memvisualisasikan kondisi lingkungan, dan menyediakan alert real-time.",
    },
    roles: {
      en: ["System Design", "Backend Development", "API Development", "Database Design", "Frontend Implementation"],
      id: ["System Design", "Backend Development", "API Development", "Database Design", "Frontend Implementation"],
    },
    challenges: {
      en: ["Handling real-time sensor data", "Managing MQTT communication", "Designing scalable alert systems"],
      id: ["Mengelola data sensor real-time", "Mengatur komunikasi MQTT", "Merancang sistem alert yang scalable"],
    },
    lessons: {
      en: ["Reliability matters more than feature count.", "Operational users prioritize simplicity over visual complexity."],
      id: ["Reliabilitas lebih penting daripada jumlah fitur.", "User operasional lebih membutuhkan kesederhanaan daripada visual yang kompleks."],
    },
  },
  {
    id: "gis-asset-management",
    categories: ["GIS", "SaaS", "Experiments"],
    name: {
      en: "GIS Asset Management Concepts",
      id: "Konsep GIS Asset Management",
    },
    description: {
      en: "Geospatial concepts for mapping, tracking, and organizing operational assets.",
      id: "Konsep geospasial untuk memetakan, melacak, dan mengelola aset operasional.",
    },
    year: "2026",
    role: { en: "Product Builder", id: "Product Builder" },
    status: "Prototype",
    stack: ["Next.js", "PostGIS", "Leaflet", "PostgreSQL"],
    overview: {
      en: "A product exploration around location-based asset management and operational visibility.",
      id: "Eksplorasi produk untuk asset management berbasis lokasi dan visibilitas operasional.",
    },
    problem: {
      en: "Operational assets are often tracked through spreadsheets without spatial context or field visibility.",
      id: "Aset operasional sering dilacak lewat spreadsheet tanpa konteks spasial atau visibilitas lapangan.",
    },
    solution: {
      en: "A GIS-first interface for mapping assets, viewing status, and supporting field decisions.",
      id: "Interface berbasis GIS untuk memetakan aset, melihat status, dan mendukung keputusan lapangan.",
    },
    roles: {
      en: ["Product Research", "Geospatial Modeling", "Frontend Exploration", "Data Structure Design"],
      id: ["Product Research", "Geospatial Modeling", "Frontend Exploration", "Data Structure Design"],
    },
    challenges: {
      en: ["Designing spatial data models", "Balancing map UI with operational details", "Validating real user needs"],
      id: ["Merancang model data spasial", "Menyeimbangkan UI peta dengan detail operasional", "Memvalidasi kebutuhan user nyata"],
    },
    lessons: {
      en: ["Maps are useful only when they improve decisions.", "GIS products need strong data discipline."],
      id: ["Peta berguna ketika membantu keputusan.", "Produk GIS membutuhkan disiplin data yang kuat."],
    },
  },
  {
    id: "naslabs-system",
    categories: ["Web Applications", "Experiments"],
    name: { en: "NasLabs Portfolio System", id: "NasLabs Portfolio System" },
    description: {
      en: "A product-minded portfolio system for documenting projects, ideas, lessons, and experiments.",
      id: "Sistem portfolio berorientasi produk untuk mendokumentasikan project, ide, pelajaran, dan eksperimen.",
    },
    year: "2026",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    status: "In Progress",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    overview: {
      en: "A personal brand and build-in-public platform for NasLabs.",
      id: "Platform personal brand dan build-in-public untuk NasLabs.",
    },
    problem: {
      en: "Projects and experiments need a clear narrative so visitors understand the thinking behind the work.",
      id: "Project dan eksperimen membutuhkan narasi yang jelas agar pengunjung memahami proses berpikir di balik karya.",
    },
    solution: {
      en: "A structured site that presents projects, journey, philosophy, and collaboration opportunities.",
      id: "Website terstruktur yang menampilkan project, journey, filosofi, dan peluang kolaborasi.",
    },
    roles: {
      en: ["Information Architecture", "Frontend Implementation", "Copywriting", "Design Iteration"],
      id: ["Information Architecture", "Frontend Implementation", "Copywriting", "Design Iteration"],
    },
    challenges: {
      en: ["Shaping the positioning", "Designing bilingual content", "Balancing personal brand and startup studio identity"],
      id: ["Membentuk positioning", "Merancang konten bilingual", "Menyeimbangkan personal brand dan identitas startup studio"],
    },
    lessons: {
      en: ["Clear positioning changes how work is perceived.", "A portfolio should explain judgment, not just output."],
      id: ["Positioning yang jelas mengubah persepsi terhadap karya.", "Portfolio perlu menjelaskan cara berpikir, bukan hanya hasil akhir."],
    },
  },
  {
    id: "decision-support",
    categories: ["Web Applications"],
    name: { en: "Decision Support System", id: "Sistem Pendukung Keputusan" },
    description: {
      en: "A criteria-based decision system for ranking alternatives with transparent calculations.",
      id: "Sistem keputusan berbasis kriteria untuk meranking alternatif dengan perhitungan yang transparan.",
    },
    year: "2024",
    role: { en: "Backend & Logic Developer", id: "Backend & Logic Developer" },
    status: "Archived",
    stack: ["Laravel", "PHP", "MySQL", "Decision Logic"],
    overview: {
      en: "A structured decision tool for comparing alternatives with weighted criteria.",
      id: "Tool keputusan terstruktur untuk membandingkan alternatif berdasarkan kriteria berbobot.",
    },
    problem: {
      en: "Multi-criteria decisions can be difficult to explain without a clear calculation flow.",
      id: "Keputusan multi-kriteria sulit dijelaskan tanpa alur perhitungan yang jelas.",
    },
    solution: {
      en: "A web system that stores criteria, alternatives, weights, and ranking outputs.",
      id: "Sistem web yang menyimpan kriteria, alternatif, bobot, dan hasil ranking.",
    },
    roles: {
      en: ["Data Modeling", "Calculation Flow", "Backend Logic", "Result Presentation"],
      id: ["Data Modeling", "Calculation Flow", "Backend Logic", "Result Presentation"],
    },
    challenges: {
      en: ["Keeping formulas readable", "Validating user inputs", "Explaining ranking results"],
      id: ["Menjaga formula tetap mudah dibaca", "Memvalidasi input user", "Menjelaskan hasil ranking"],
    },
    lessons: {
      en: ["Logic-heavy products need strong explanation.", "Transparent outputs build trust."],
      id: ["Produk dengan logika berat perlu penjelasan kuat.", "Output yang transparan membangun kepercayaan."],
    },
  },
  {
    id: "ai-workflow-experiments",
    categories: ["AI", "Experiments"],
    name: { en: "AI Workflow Experiments", id: "Eksperimen AI Workflow" },
    description: {
      en: "Experiments with AI-assisted workflows for coding, research, and product iteration.",
      id: "Eksperimen workflow berbasis AI untuk coding, riset, dan iterasi produk.",
    },
    year: "2026",
    role: { en: "Builder & Researcher", id: "Builder & Researcher" },
    status: "Research",
    stack: ["AI Tools", "Next.js", "Prompting", "Automation"],
    overview: {
      en: "A learning track for understanding how AI can support practical software and product workflows.",
      id: "Track pembelajaran untuk memahami bagaimana AI membantu workflow software dan produk secara praktis.",
    },
    problem: {
      en: "AI tools are powerful, but their value depends on how clearly they fit into real workflows.",
      id: "AI tools sangat kuat, tetapi nilainya bergantung pada seberapa jelas mereka masuk ke workflow nyata.",
    },
    solution: {
      en: "Small experiments that test AI in coding assistance, research synthesis, and product planning.",
      id: "Eksperimen kecil untuk menguji AI dalam coding assistance, sintesis riset, dan perencanaan produk.",
    },
    roles: {
      en: ["Workflow Design", "Prompt Iteration", "Tool Evaluation", "Documentation"],
      id: ["Workflow Design", "Prompt Iteration", "Tool Evaluation", "Documentation"],
    },
    challenges: {
      en: ["Separating useful output from noise", "Keeping human judgment in the loop", "Making workflows repeatable"],
      id: ["Memisahkan output berguna dari noise", "Menjaga human judgment tetap terlibat", "Membuat workflow bisa diulang"],
    },
    lessons: {
      en: ["AI is most useful when the problem is clear.", "Better workflows matter more than flashy prompts."],
      id: ["AI paling berguna saat masalahnya jelas.", "Workflow yang baik lebih penting daripada prompt yang terlihat keren."],
    },
  },
  {
    id: "saas-validation-framework",
    categories: ["SaaS", "Experiments"],
    name: { en: "SaaS Validation Framework", id: "Framework Validasi SaaS" },
    description: {
      en: "A lightweight framework for evaluating SaaS ideas before turning them into products.",
      id: "Framework ringan untuk mengevaluasi ide SaaS sebelum diubah menjadi produk.",
    },
    year: "2026",
    role: { en: "Product Explorer", id: "Product Explorer" },
    status: "Validation",
    stack: ["Research", "Notion", "Landing Pages", "User Interviews"],
    overview: {
      en: "An experiment for making idea evaluation more structured and less emotional.",
      id: "Eksperimen untuk membuat evaluasi ide lebih terstruktur dan tidak terlalu emosional.",
    },
    problem: {
      en: "Many SaaS ideas feel promising before they are tested with real users and willingness to pay.",
      id: "Banyak ide SaaS terasa menjanjikan sebelum diuji dengan user nyata dan willingness to pay.",
    },
    solution: {
      en: "A validation checklist covering problem clarity, target users, urgency, alternatives, and monetization signals.",
      id: "Checklist validasi yang mencakup kejelasan masalah, target user, urgensi, alternatif, dan sinyal monetisasi.",
    },
    roles: {
      en: ["Market Research", "Problem Framing", "Validation Design", "Content Documentation"],
      id: ["Market Research", "Problem Framing", "Validation Design", "Content Documentation"],
    },
    challenges: {
      en: ["Avoiding founder bias", "Finding clear pain points", "Testing demand without overbuilding"],
      id: ["Menghindari bias founder", "Menemukan pain point yang jelas", "Menguji demand tanpa overbuilding"],
    },
    lessons: {
      en: ["Validation should happen before heavy development.", "A painful problem is more valuable than a clever feature."],
      id: ["Validasi sebaiknya dilakukan sebelum development berat.", "Masalah yang menyakitkan lebih bernilai daripada fitur yang cerdas."],
    },
  },
];

const experiments = [
  { title: "AI Workflow Experiments", status: "Experiment", category: "AI" },
  { title: "SaaS Validation Framework", status: "Validation", category: "SaaS" },
  { title: "GIS Asset Mapping Concepts", status: "Prototype", category: "GIS" },
  { title: "Startup Idea Research", status: "Research", category: "Experiments" },
];

const copy = {
  en: {
    heroTitle: "Projects",
    heroSubtitle:
      "A collection of products, systems, experiments, and ideas I've worked on throughout my journey.",
    categories: "Project Categories",
    featuredTitle: "Featured Work",
    year: "Year",
    role: "Role",
    status: "Status",
    stack: "Stack",
    viewCaseStudy: "View Case Study",
    caseStudy: "Case Study",
    overview: "Overview",
    problem: "The Problem",
    solution: "The Solution",
    myRole: "My Role",
    techStack: "Tech Stack",
    challenges: "Challenges",
    lessons: "Lessons Learned",
    experimentsTitle: "Experiments & Explorations",
    statsTitle: "By The Numbers",
    stats: ["10+ Projects", "4 Technology Domains", "Thousands of Lines of Code", "Countless Lessons Learned"],
    philosophyTitle: "Why I Build",
    philosophy: [
      "Projects are more than code.",
      "Each project is an opportunity to learn, solve problems, and explore new possibilities.",
      "Some become products. Some become businesses. All become lessons.",
    ],
  },
  id: {
    heroTitle: "Projects",
    heroSubtitle:
      "Kumpulan produk, sistem, eksperimen, dan ide yang pernah saya kerjakan sepanjang perjalanan saya.",
    categories: "Kategori Project",
    featuredTitle: "Featured Work",
    year: "Tahun",
    role: "Role",
    status: "Status",
    stack: "Stack",
    viewCaseStudy: "Lihat Case Study",
    caseStudy: "Case Study",
    overview: "Overview",
    problem: "Masalah",
    solution: "Solusi",
    myRole: "Peran Saya",
    techStack: "Tech Stack",
    challenges: "Tantangan",
    lessons: "Pelajaran",
    experimentsTitle: "Experiments & Explorations",
    statsTitle: "By The Numbers",
    stats: ["10+ Project", "4 Domain Teknologi", "Ribuan Baris Kode", "Banyak Pelajaran Berharga"],
    philosophyTitle: "Mengapa Saya Membangun",
    philosophy: [
      "Project bukan sekadar kode.",
      "Setiap project adalah kesempatan untuk belajar, menyelesaikan masalah, dan mengeksplorasi kemungkinan baru.",
      "Sebagian menjadi produk. Sebagian menjadi bisnis. Semuanya menjadi pelajaran.",
    ],
  },
};

export default function ProjectsPage() {
  const { language } = usePreferences();
  const text = copy[language];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(featuredProjects[0].id);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? featuredProjects
        : featuredProjects.filter((project) =>
            project.categories.includes(activeCategory),
          ),
    [activeCategory],
  );

  const selectedProject =
    featuredProjects.find((project) => project.id === selectedProjectId) ??
    featuredProjects[0];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="mb-14">
        <p className="mb-3 text-sm font-medium text-cyan-300">NasLabs Work</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {text.heroTitle}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
          {text.heroSubtitle}
        </p>
      </section>

      <section className="py-8">
        <p className="mb-4 text-sm font-medium text-cyan-300">
          {text.categories}
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              Featured Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {text.featuredTitle}
            </h2>
          </div>
          <Badge className="w-fit bg-cyan-300/10 text-cyan-100">
            Production • In Progress • Prototype • Research
          </Badge>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-panel overflow-hidden">
              <CardHeader>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge className="bg-cyan-300/10 text-cyan-100">
                    {project.status}
                  </Badge>
                  <Badge className="bg-white/[0.055] text-slate-200">
                    {project.categories.join(" • ")}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{project.name[language]}</CardTitle>
                <CardDescription className="text-base leading-7">
                  {project.description[language]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    [text.year, project.year],
                    [text.role, project.role[language]],
                    [text.status, project.status],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-md border border-white/10 bg-white/[0.045] p-3"
                    >
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                    {text.stack}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((stack) => (
                      <Badge key={stack} className="bg-card/70">
                        {stack}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    document
                      .getElementById("case-study")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  {text.viewCaseStudy}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12" id="case-study">
        <Card className="glass-panel overflow-hidden">
          <CardHeader className="border-b border-white/10">
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {text.caseStudy}
            </p>
            <CardTitle className="text-3xl">
              {selectedProject.name[language]}
            </CardTitle>
            <CardDescription className="max-w-3xl text-base leading-7">
              {selectedProject.overview[language]}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <InfoBlock title={text.problem} body={selectedProject.problem[language]} />
              <InfoBlock title={text.solution} body={selectedProject.solution[language]} />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <ListBlock title={text.myRole} items={selectedProject.roles[language]} />
              <ListBlock title={text.challenges} items={selectedProject.challenges[language]} />
              <ListBlock title={text.lessons} items={selectedProject.lessons[language]} />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-cyan-200">
                {text.techStack}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((stack) => (
                  <Badge key={stack} className="bg-card/70">
                    {stack}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">NasLabs Lab</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.experimentsTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {experiments.map((experiment) => (
            <Card key={experiment.title} className="glass-panel">
              <CardHeader>
                <Badge className="mb-4 w-fit bg-cyan-300/10 text-cyan-100">
                  {experiment.status}
                </Badge>
                <CardTitle className="text-lg">{experiment.title}</CardTitle>
                <CardDescription>{experiment.category}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">Stats</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.statsTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {text.stats.map((stat) => (
            <div
              key={stat}
              className="glass-panel rounded-lg border border-cyan-300/15 p-5"
            >
              <p className="text-lg font-semibold text-slate-100">{stat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                Philosophy
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.philosophyTitle}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted-foreground">
              {text.philosophy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
      <p className="text-sm font-semibold text-cyan-200">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-cyan-200">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <p
            key={item}
            className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm leading-6 text-muted-foreground"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
