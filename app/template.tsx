"use client";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ROOT PAGE TRANSITION TEMPLATE
   Next.js remounts this component on each
   navigation, so we can lean on Framer to
   run a consistent enter animation for
   every route — giving the site a single,
   seamless motion language.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
