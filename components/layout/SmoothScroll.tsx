"use client";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SMOOTH SCROLL PROVIDER (Lenis)
   Wraps the entire app so all scrolling
   feels buttery and inertial. Hooks into
   the rAF loop and respects the user's
   reduced-motion preference. No DOM
   wrapper — Lenis instruments the body
   directly so layout is unaffected.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      // Premium-feeling ease — heavy front, settles softly
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      lerp: 0.1,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Bridge Lenis scroll events to anything listening to native `scroll`
    // (Framer's `useScroll`, IntersectionObserver, etc. already work because
    //  Lenis updates `window.scrollY` and dispatches scroll events natively.)

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
