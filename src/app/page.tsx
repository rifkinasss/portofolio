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
import { explorations, projects, skills } from "@/data/portfolio";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
      <Hero />

      <section className="grid gap-4 py-10 md:grid-cols-3">
        {[
          {
            title: "Frontend Modern",
            description:
              "Membangun antarmuka responsif dengan komponen yang konsisten dan mudah digunakan.",
          },
          {
            title: "Backend Terstruktur",
            description:
              "Merancang logic aplikasi, API, dan pengelolaan data dengan alur yang jelas.",
          },
          {
            title: "Integrasi Sistem",
            description:
              "Menghubungkan frontend, backend, dan layanan pendukung agar berjalan selaras.",
          },
        ].map((item) => (
          <Card key={item.title} className="glass-panel">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="py-14" id="projects">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-cyan-300">Project pilihan</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Project yang menunjukkan proses dan hasil kerja.
            </h2>
          </div>
          <ButtonLink href="/projects" variant="outline">
            Lihat Semua
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="glass-panel overflow-hidden">
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
                    Project 0{index + 1}
                  </p>
                </div>
              </div>
              <CardHeader>
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge className="bg-cyan-300/10 text-cyan-100">
                    {project.priority}
                  </Badge>
                  <Badge className="bg-white/[0.055] text-slate-200">
                    {project.folder}
                  </Badge>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                    Next upgrade
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.nextSteps[0]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-14 md:grid-cols-[0.78fr_1.22fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">
            Arah pengembangan
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Dibuat bertahap: etalase dulu, lalu project flagship.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Portfolio ini disusun untuk memperlihatkan progres project kuliah
            secara lebih strategis. Silakad menjadi project utama, SPK menjadi
            pembuktian logika, dan project lain menjadi fondasi perjalanan
            belajar.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["01", "Portfolio", "Rapikan narasi, data project, dan tampilan case study."],
            ["02", "Silakad", "Kembangkan role, dashboard, modul akademik, dan dokumentasi fitur."],
            ["03", "SPK", "Perjelas metode, bobot, ranking, grafik, dan contoh kasus."],
          ].map(([step, title, description]) => (
            <div
              key={title}
              className="glass-panel rounded-lg border border-cyan-300/15 p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Badge className="w-fit bg-cyan-300/10 text-cyan-100">
                  Step {step}
                </Badge>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-14 md:grid-cols-[0.82fr_1.18fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">Stack</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Stack yang saya gunakan untuk membangun sistem.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Fokus pada pengembangan web end-to-end: backend Laravel, antarmuka
            Next.js, integrasi API, dan pengelolaan database SQL.
          </p>
        </div>
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Backend",
                desc: "Laravel, PHP, REST API",
                value: "Logic & data",
              },
              {
                title: "Frontend",
                desc: "Next.js, TypeScript",
                value: "UI responsif",
              },
              {
                title: "Integrasi",
                desc: "API, auth, workflow",
                value: "Sistem terhubung",
              },
              {
                title: "Database",
                desc: "SQL, PostgreSQL",
                value: "Data terkelola",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-white/10 bg-white/[0.055] p-4"
              >
                <p className="text-sm font-semibold text-cyan-200">{item.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{item.desc}</p>
                <p className="mt-4 text-sm font-medium text-slate-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill.name} className="bg-card/70 px-3 py-2 text-sm">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-14 md:grid-cols-[0.82fr_1.18fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">Sedang didalami</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Eksplorasi tooling modern dan data spasial.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Selain stack utama, saya juga mempelajari bagaimana AI-assisted
            tools dan teknologi database spasial dapat membantu proses
            pengembangan sistem yang lebih efisien dan kontekstual.
          </p>
        </div>
        <div className="grid gap-4">
          {explorations.map((item, index) => (
            <Card key={item.title} className="glass-panel overflow-hidden">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <Badge className="bg-cyan-300/10 text-cyan-100">
                    Eksplorasi 0{index + 1}
                  </Badge>
                  <span className="h-px flex-1 bg-cyan-200/10" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} className="bg-card/70">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="glass-panel overflow-hidden rounded-lg border border-cyan-300/20 text-foreground">
          <div className="grid gap-0 md:grid-cols-[1fr_20rem]">
            <div className="px-6 py-10 sm:px-10">
              <p className="mb-3 text-sm font-medium text-cyan-300">
                Siap berkolaborasi
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
                Butuh developer untuk membangun website, dashboard, atau sistem
                berbasis web?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                Ceritakan kebutuhan project kamu. Saya bisa membantu dari
                perancangan alur, backend, frontend, sampai integrasi API.
              </p>
            </div>
            <div className="border-t border-white/10 bg-cyan-300/[0.035] p-6 md:border-l md:border-t-0">
              <div className="flex h-full min-h-44 flex-col justify-between rounded-md border border-white/10 bg-black/25 p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Status</span>
                    <span className="text-emerald-200">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Fokus</span>
                    <span className="text-cyan-200">Web App</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Kontak</span>
                    <span className="text-violet-200">Email</span>
                  </div>
                </div>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Mulai Diskusi
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
