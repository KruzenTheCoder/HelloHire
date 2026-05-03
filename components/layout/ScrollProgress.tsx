"use client";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SCROLL PROGRESS BAR
   A thin accent-coloured bar fixed to the
   top of the viewport. It fills as the
   user scrolls, giving a constant visual
   signal of narrative progress through
   the page.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        transformOrigin: "0% 50%",
        scaleX,
        background:
          "linear-gradient(90deg, rgba(232,68,138,0) 0%, #E8448A 40%, #FF5FA0 70%, rgba(232,68,138,0) 100%)",
        zIndex: 101,
        pointerEvents: "none",
        boxShadow: "0 0 12px rgba(232,68,138,0.45)",
      }}
    />
  );
}
