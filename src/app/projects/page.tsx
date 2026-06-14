import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="mb-14 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-300">Project</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Kumpulan sistem dan eksperimen web yang pernah saya kerjakan.
          </h1>
        </div>
        <div className="glass-panel rounded-lg border border-cyan-300/15 p-5">
          <p className="text-sm leading-7 text-muted-foreground">
            Halaman ini menyusun project kuliah dan portfolio menjadi ringkasan
            case study: tujuan, masalah, hasil, teknologi, serta langkah
            pengembangan berikutnya.
          </p>
        </div>
      </section>

      <section className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={project.id} className="glass-panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-72 border-b border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.22),transparent_13rem),radial-gradient(circle_at_88%_72%,rgba(124,58,237,0.2),transparent_14rem)] p-5 lg:border-b-0 lg:border-r">
                <div className="star-grid absolute inset-0 opacity-20" />
                <div className="relative flex h-full min-h-64 flex-col justify-between rounded-lg border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                      <span className="h-3 w-3 rounded-full bg-violet-300/70" />
                      <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
                    </div>
                    <Badge className="bg-black/30 text-cyan-100">
                      Project 0{index + 1}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-[1fr_0.72fr] gap-4">
                    <div className="space-y-3">
                      <div className="h-24 rounded-md border border-cyan-200/10 bg-cyan-300/12" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-14 rounded-md border border-white/10 bg-white/[0.055]" />
                        <div className="h-14 rounded-md border border-white/10 bg-violet-300/10" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-5 rounded-full bg-white/15" />
                      <div className="h-5 rounded-full bg-cyan-300/20" />
                      <div className="h-5 w-2/3 rounded-full bg-white/15" />
                      <div className="mt-5 rounded-md border border-white/10 bg-black/35 p-3 font-mono text-[10px] leading-5 text-slate-300">
                        <p>status: ready</p>
                        <p>api: connected</p>
                        <p>ui: responsive</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{project.focus}</span>
                    <span>{project.priority}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <CardHeader className="p-0">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge className="bg-cyan-300/10 text-cyan-100">
                      {project.priority}
                    </Badge>
                    <Badge className="bg-white/[0.055] text-slate-200">
                      Folder: {project.folder}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="max-w-xl text-base leading-7">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-8 space-y-6 p-0">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      ["Role", project.role],
                      ["Fokus", project.focus],
                      ["Status", project.status],
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

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-sm font-semibold text-cyan-200">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-sm font-semibold text-cyan-200">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-3 text-sm font-semibold text-slate-100">
                        Highlight
                      </p>
                      <div className="grid gap-2">
                        {project.highlights.map((item) => (
                          <p
                            key={item}
                            className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm leading-6 text-muted-foreground"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-semibold text-slate-100">
                        Next step
                      </p>
                      <div className="grid gap-2">
                        {project.nextSteps.map((item) => (
                          <p
                            key={item}
                            className="rounded-md border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-2 text-sm leading-6 text-muted-foreground"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-card/70">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {project.liveUrl ? (
                      <ButtonLink href={project.liveUrl} target="_blank" rel="noreferrer">
                        Lihat Demo
                      </ButtonLink>
                    ) : null}
                    {project.githubUrl ? (
                      <ButtonLink
                        href={project.githubUrl}
                        variant="outline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repository
                      </ButtonLink>
                    ) : null}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
