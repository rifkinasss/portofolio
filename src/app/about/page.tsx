import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { explorations, siteConfig, skills } from "@/data/portfolio";

const focusAreas = [
  "Pengembangan backend dengan PHP, Laravel, SQL, dan PostgreSQL.",
  "Pembuatan antarmuka web modern dengan JavaScript, Next.js, dan TypeScript.",
  "Integrasi API, alur data, serta sistem yang mudah dirawat dan dikembangkan.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-300">Tentang</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {siteConfig.name} adalah identitas teknologi dari{" "}
            {siteConfig.personalName} untuk membangun aplikasi web dari backend
            hingga frontend.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Nas Labs menjadi tempat untuk merapikan project, eksperimen, dan
            proses belajar menjadi portfolio teknologi yang lebih profesional.
            Fokus utamanya adalah pengembangan aplikasi web yang terstruktur,
            mudah dikembangkan, dan relevan dengan kebutuhan pengguna.
          </p>
        </div>

        <Card className="glass-panel overflow-hidden">
          <div className="relative flex min-h-[25rem] flex-col justify-between p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.14),transparent_12rem),radial-gradient(circle_at_60%_80%,rgba(124,58,237,0.14),transparent_14rem)]" />
            <div className="relative mx-auto mt-4 flex h-44 w-44 items-center justify-center rounded-full border border-cyan-200/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/30">
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.9),rgba(34,211,238,0.55)_22%,rgba(91,33,182,0.5)_58%,rgba(2,6,23,0.95)_100%)] text-4xl font-semibold text-white shadow-[0_0_44px_rgba(34,211,238,0.28)]">
                NL
              </div>
            </div>

            <div className="relative mt-8 space-y-4 text-center">
              <div>
                <h2 className="text-2xl font-semibold">{siteConfig.name}</h2>
                <p className="mt-1 text-sm text-cyan-200">
                  Built by {siteConfig.personalName}
                </p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                Technology lab untuk full stack development, backend systems,
                database, dan web interface.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Laravel</Badge>
                <Badge>Next.js</Badge>
                <Badge>PostgreSQL</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 py-14 md:grid-cols-3">
        {focusAreas.map((item, index) => (
          <Card key={item} className="glass-panel">
            <CardHeader>
              <Badge className="mb-3 w-fit bg-cyan-300/10 text-cyan-100">
                Fokus 0{index + 1}
              </Badge>
              <CardDescription className="text-base leading-7">
                {item}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="grid gap-8 py-8 md:grid-cols-[0.82fr_1.18fr] md:items-start">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-300">Profil teknis</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Kombinasi web development, database, dan tooling modern.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Saya sedang memperkuat fondasi backend dan database, sambil
            mengeksplorasi OpenClaw, AI-assisted development, serta PostGIS
            untuk kebutuhan data spasial dan pemetaan.
          </p>
        </div>

        <div className="grid gap-5">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>Stack utama</CardTitle>
              <CardDescription>
                Teknologi yang menjadi dasar pengembangan aplikasi web.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>Sedang didalami</CardTitle>
              <CardDescription>
                Area yang sedang saya eksplorasi untuk memperluas kemampuan
                teknis.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {explorations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-sm font-semibold text-cyan-200">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
