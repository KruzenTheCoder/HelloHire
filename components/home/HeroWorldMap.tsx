"use client";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO WORLD MAP
   Real-geography backdrop for the hero.
   Uses <WorldMap> with a scroll-coupled
   camera (subtle zoom + drift) and layers
   animated arcs from Johannesburg to the
   global markets we serve.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WorldMap, { arcPath, MAP_WIDTH, MAP_HEIGHT, ProjectFn } from "@/components/shared/WorldMap";

// South Africa origin (Johannesburg ≈ centre of economic gravity)
const SA_ORIGIN: [number, number] = [28.0473, -26.2041];

// Global markets we connect to — [lon, lat, label]
const DESTINATIONS: { coord: [number, number]; label: string }[] = [
  { coord: [-74.006, 40.7128], label: "New York" },
  { coord: [-79.3832, 43.6532], label: "Toronto" },
  { coord: [-0.1276, 51.5074], label: "London" },
  { coord: [13.405, 52.52], label: "Berlin" },
  { coord: [55.2708, 25.2048], label: "Dubai" },
  { coord: [151.2093, -33.8688], label: "Sydney" },
  { coord: [103.8198, 1.3521], label: "Singapore" },
];

interface HeroWorldMapProps {
  /** Scroll progress from the parent hero section (0 → 1). */
  scrollProgress: MotionValue<number>;
}

export default function HeroWorldMap({ scrollProgress }: HeroWorldMapProps) {
  // Scroll-coupled camera: subtle zoom + drift towards Africa as the user scrolls.
  const scale = useTransform(scrollProgress, [0, 1], [1.02, 1.18]);
  const xShift = useTransform(scrollProgress, [0, 1], [0, -40]);
  const yShift = useTransform(scrollProgress, [0, 1], [0, 20]);
  const mapOpacity = useTransform(scrollProgress, [0, 0.6, 1], [0.55, 0.35, 0.15]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: mapOpacity,
        x: xShift,
        y: yShift,
        scale,
        willChange: "transform, opacity",
      }}
      aria-hidden="true"
    >
      <WorldMap
        fill="rgba(232, 68, 138, 0.06)"
        stroke="rgba(232, 68, 138, 0.28)"
        strokeWidth={0.6}
        landOpacity={0.9}
      >
        {({ project }) => (
          <HeroOverlay project={project} />
        )}
      </WorldMap>

      {/* Top & bottom fades so the map melts into the page background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, var(--color-bg) 0%, transparent 25%, transparent 70%, var(--color-bg) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 55% 55%, transparent 30%, rgba(8,5,10,0.55) 75%, var(--color-bg) 100%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

// ─── Arcs, pulses and markers ────────────────────────────────────
function HeroOverlay({ project }: { project: ProjectFn }) {
  const [saX, saY] = project(SA_ORIGIN[0], SA_ORIGIN[1]);

  return (
    <>
      <defs>
        <linearGradient id="hero-arc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8448A" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#FF5FA0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8448A" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="hero-pulse-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF5FA0" stopOpacity="1" />
          <stop offset="60%" stopColor="#E8448A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E8448A" stopOpacity="0" />
        </radialGradient>
        <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Arcs from SA to each destination */}
      {DESTINATIONS.map((dest, i) => {
        const { d } = arcPath(project, SA_ORIGIN, dest.coord, 0.32);
        const delay = 1.1 + i * 0.22;
        const [dx, dy] = project(dest.coord[0], dest.coord[1]);

        return (
          <g key={dest.label}>
            {/* Soft glow trail */}
            <motion.path
              d={d}
              fill="none"
              stroke="rgba(232, 68, 138, 0.25)"
              strokeWidth={2.4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
              filter="url(#hero-glow)"
            />
            {/* Crisp line */}
            <motion.path
              d={d}
              fill="none"
              stroke="#E8448A"
              strokeWidth={0.8}
              strokeLinecap="round"
              strokeDasharray="2 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Travelling packet */}
            <motion.circle
              r={1.8}
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 3,
                delay: delay + 1.2,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              filter="url(#hero-glow)"
            >
              <animateMotion
                dur="3s"
                begin={`${delay + 1.2}s`}
                repeatCount="indefinite"
                path={d}
              />
            </motion.circle>

            {/* Destination marker */}
            <motion.circle
              cx={dx}
              cy={dy}
              r={2.6}
              fill="#FF5FA0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 2.0, type: "spring" }}
              filter="url(#hero-glow)"
            />
            <motion.circle
              cx={dx}
              cy={dy}
              r={2.6}
              fill="none"
              stroke="#E8448A"
              strokeWidth={0.6}
              initial={{ opacity: 0 }}
              animate={{ r: [2.6, 9, 9], opacity: [0.7, 0, 0] }}
              transition={{
                duration: 2.4,
                delay: delay + 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </g>
        );
      })}

      {/* South Africa — the heart */}
      <circle
        cx={saX}
        cy={saY}
        r={18}
        fill="url(#hero-pulse-grad)"
        opacity={0.45}
      />
      <motion.circle
        cx={saX}
        cy={saY}
        r={3}
        fill="none"
        stroke="#E8448A"
        strokeWidth={0.8}
        initial={{ opacity: 0 }}
        animate={{ r: [3, 22, 22], opacity: [0.7, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.circle
        cx={saX}
        cy={saY}
        r={3}
        fill="none"
        stroke="#E8448A"
        strokeWidth={0.6}
        initial={{ opacity: 0 }}
        animate={{ r: [3, 30, 30], opacity: [0.5, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />
      <motion.circle
        cx={saX}
        cy={saY}
        r={4}
        fill="#FFFFFF"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        filter="url(#hero-glow)"
      />
    </>
  );
}

// Re-export constants for convenience so callers can sanity-check coordinates.
export { MAP_WIDTH, MAP_HEIGHT };
