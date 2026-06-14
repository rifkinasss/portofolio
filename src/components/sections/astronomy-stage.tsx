"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

const stars = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 97}%`,
  top: `${(index * 53) % 89}%`,
  size: index % 5 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
}));

const layers = [
  { label: "UI", value: "Next.js", tone: "text-cyan-200" },
  { label: "API", value: "Laravel", tone: "text-violet-200" },
  { label: "Data", value: "MySQL", tone: "text-emerald-200" },
];

export function AstronomyStage() {
  useEffect(() => {
    const intro = animate(".astro-reveal", {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 900,
      delay: stagger(95),
      ease: "outExpo",
    });

    const planet = animate(".astro-core", {
      translateY: [-6, 8],
      scale: [1, 1.015],
      duration: 4600,
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    const orbit = animate(".astro-orbit", {
      rotate: "1turn",
      duration: 18000,
      loop: true,
      ease: "linear",
    });

    const twinkle = animate(".astro-star", {
      opacity: [0.1, 0.62],
      scale: [0.72, 1.28],
      duration: 1800,
      delay: stagger(37),
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      intro.revert();
      planet.revert();
      orbit.revert();
      twinkle.revert();
    };
  }, []);

  return (
    <div className="astro-reveal relative min-h-[460px] overflow-hidden rounded-lg border border-cyan-300/15 bg-black/45 p-5 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="star-grid absolute inset-0 opacity-24" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.1),transparent_18rem),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_16rem)]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className={`astro-star absolute rounded-full bg-white opacity-40 shadow-[0_0_12px_rgba(255,255,255,0.9)] ${star.size}`}
          style={{ left: star.left, top: star.top }}
        />
      ))}

      <div className="relative min-h-[420px]">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" />
        <div className="astro-orbit absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/10">
          <span className="absolute left-10 top-8 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
        </div>

        <div className="astro-core absolute left-1/2 top-1/2 w-[min(90%,30rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-medium uppercase text-cyan-200/80">
                Full-Stack Workspace
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
                System Architecture
              </h2>
            </div>
            <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
              Stable
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {layers.map((layer, index) => (
              <div
                key={layer.label}
                className="relative rounded-md border border-white/10 bg-white/[0.055] p-3"
              >
                {index < layers.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-3 bg-cyan-200/30 sm:block" />
                ) : null}
                <p className="text-xs text-slate-400">{layer.label}</p>
                <p className={`mt-1 text-sm font-semibold ${layer.tone}`}>
                  {layer.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-md border border-white/10 bg-black/30 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium text-slate-300">Alur Sistem</p>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex items-center justify-between rounded border border-white/10 bg-white/[0.04] px-3 py-2">
                  <span>Request</span>
                  <span className="text-cyan-200">200 OK</span>
                </div>
                <div className="flex items-center justify-between rounded border border-white/10 bg-white/[0.04] px-3 py-2">
                  <span>Auth</span>
                  <span className="text-emerald-200">Verified</span>
                </div>
                <div className="flex items-center justify-between rounded border border-white/10 bg-white/[0.04] px-3 py-2">
                  <span>Response</span>
                  <span className="text-violet-200">JSON</span>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-white/10 bg-black/30 p-4 font-mono text-[11px] leading-6 text-slate-300">
              <p className="text-slate-500">$ npm run build</p>
              <p>
                <span className="text-emerald-300">✓</span> backend ready
              </p>
              <p>
                <span className="text-cyan-300">✓</span> ui optimized
              </p>
              <p>
                <span className="text-violet-300">✓</span> api connected
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-md border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md">
            <p className="text-2xl font-semibold text-cyan-200">3</p>
            <p className="text-slate-300">Layer utama</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md">
            <p className="text-2xl font-semibold text-violet-200">API</p>
            <p className="text-slate-300">Siap integrasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
