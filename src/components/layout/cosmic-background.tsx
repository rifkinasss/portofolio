"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

const particles = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 101}%`,
  top: `${(index * 47) % 97}%`,
  size: index % 9 === 0 ? "h-1.5 w-1.5" : "h-1 w-1",
  tone:
    index % 5 === 0
      ? "bg-cyan-200"
      : index % 7 === 0
        ? "bg-violet-200"
        : "bg-white",
}));

export function CosmicBackground() {
  useEffect(() => {
    const starDrift = animate(".cosmic-particle", {
      translateY: [-10, 18],
      translateX: [-6, 8],
      opacity: [0.08, 0.46],
      scale: [0.7, 1.2],
      duration: 2600,
      delay: stagger(31),
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    const nebula = animate(".cosmic-nebula", {
      translateX: [-18, 18],
      translateY: [-10, 14],
      scale: [1, 1.08],
      duration: 9000,
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      starDrift.revert();
      nebula.revert();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="cosmic-screen absolute inset-0" />
      <div className="star-grid absolute inset-0 opacity-22" />
      <div className="cosmic-nebula absolute -left-36 top-16 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="cosmic-nebula absolute -right-28 top-32 h-[30rem] w-[30rem] rounded-full bg-violet-500/12 blur-3xl" />
      <div className="cosmic-nebula absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-400/7 blur-3xl" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`cosmic-particle absolute rounded-full opacity-25 shadow-[0_0_10px_rgba(255,255,255,0.45)] ${particle.size} ${particle.tone}`}
          style={{ left: particle.left, top: particle.top }}
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/5 to-transparent" />
    </div>
  );
}
