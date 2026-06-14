"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { animate } from "animejs";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = containerRef.current;

    if (!target) return;

    const motion = animate(target, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 520,
      ease: "outExpo",
    });

    return () => {
      motion.revert();
    };
  }, [pathname]);

  return (
    <div key={pathname} ref={containerRef}>
      {children}
    </div>
  );
}
