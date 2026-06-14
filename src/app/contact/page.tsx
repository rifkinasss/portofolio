import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig, socialLinks } from "@/data/portfolio";

const contactNotes = [
  ["Respon", "Email aktif"],
  ["Fokus", "Web app & dashboard"],
  ["Diskusi", "Requirement dan alur sistem"],
];

export default function ContactPage() {
  const nonEmailLinks = socialLinks.filter((link) => link.name !== "Email");

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-300">Kontak</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Mari diskusikan project web yang ingin kamu bangun.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Saya terbuka untuk diskusi seputar website, dashboard, backend,
            database, integrasi API, maupun pengembangan sistem berbasis web.
          </p>
        </div>

        <Card className="glass-panel">
          <CardHeader>
            <div className="mb-3 flex items-center justify-between gap-4">
              <Badge className="bg-emerald-300/10 text-emerald-100">
                Available
              </Badge>
              <span className="h-px flex-1 bg-cyan-200/10" />
            </div>
            <CardTitle>Kontak utama</CardTitle>
            <CardDescription>
              Cara tercepat untuk menghubungi saya adalah melalui email.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <ButtonLink href={`mailto:${siteConfig.email}`} size="lg">
              {siteConfig.email}
            </ButtonLink>
            <div className="flex flex-wrap gap-3">
              {nonEmailLinks.map((link) => (
                <ButtonLink
                  key={link.name}
                  href={link.url}
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </ButtonLink>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="glass-panel overflow-hidden">
          <CardHeader>
            <CardTitle>Area kolaborasi</CardTitle>
            <CardDescription>
              Beberapa area project yang relevan dengan fokus pengembangan saya.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {[
              ["Website", "Company profile, portfolio, dan landing page."],
              ["Dashboard", "Panel admin, monitoring, dan visualisasi data."],
              ["Backend/API", "Logic sistem, endpoint, autentikasi, dan integrasi."],
              ["Database", "SQL, PostgreSQL, dan struktur data aplikasi."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-md border border-white/10 bg-white/[0.045] p-4"
              >
                <p className="text-sm font-semibold text-cyan-200">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="glass-panel overflow-hidden rounded-lg border border-cyan-300/20">
          <div className="border-b border-white/10 bg-cyan-300/[0.035] px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-200">
                  Message Console
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Ringkasan jalur komunikasi
                </p>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
                <span className="h-3 w-3 rounded-full bg-violet-300/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {contactNotes.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-white/10 bg-black/30 p-4 font-mono text-xs leading-6 text-slate-300">
              <p className="text-slate-500">$ send-message</p>
              <p>
                <span className="text-cyan-300">to:</span> {siteConfig.email}
              </p>
              <p>
                <span className="text-violet-300">subject:</span> Diskusi project
                web
              </p>
              <p>
                <span className="text-emerald-300">status:</span> siap menerima
                brief
              </p>
            </div>

            <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <p className="text-sm font-semibold text-slate-100">
                Catatan singkat
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Untuk saat ini form langsung belum diaktifkan. Tombol email akan
                membuka aplikasi email kamu dengan alamat tujuan yang sudah
                terisi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
