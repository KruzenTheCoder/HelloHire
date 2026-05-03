"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ANIMATED WORLD MAP COMPONENT
   Uses the provided black/pink map image
   with animated connection points and
   pulsing destination markers
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

interface Destination {
  country: string;
  flag: string;
  placements: number;
  /** Percentage position on image (0-100) */
  x: number;
  y: number;
}

const MAP_IMAGE = "/Man_map_grid_black_pink_202605020918.jpeg";

// South Africa origin point (positioned on the map image)
const SA_POINT = { x: 55.5, y: 76 };

const defaultDestinations: Destination[] = [
  { country: "USA", flag: "🇺🇸", placements: 42, x: 19, y: 38 },
  { country: "UK", flag: "🇬🇧", placements: 38, x: 46.5, y: 27 },
  { country: "Australia", flag: "🇦🇺", placements: 19, x: 86, y: 74 },
  { country: "Germany", flag: "🇩🇪", placements: 11, x: 50, y: 27 },
  { country: "UAE", flag: "🇦🇪", placements: 16, x: 63, y: 42 },
  { country: "Canada", flag: "🇨🇦", placements: 9, x: 20, y: 26 },
];

// ─── Pulsing point component ───
function PulsingPoint({
  x,
  y,
  delay,
  label,
  isOrigin = false,
}: {
  x: number;
  y: number;
  delay: number;
  label: string;
  isOrigin?: boolean;
}) {
  const coreSize = isOrigin ? 16 : 9;
  const accent = "#E8448A";

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Outer radial halo (origin only) */}
      {isOrigin && (
        <div
          style={{
            position: "absolute",
            inset: -40,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,68,138,0.45) 0%, rgba(232,68,138,0.15) 40%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Continuous pulse rings */}
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: coreSize,
          height: coreSize,
          marginLeft: -coreSize / 2,
          marginTop: -coreSize / 2,
          borderRadius: "50%",
          border: `1.5px solid ${accent}`,
        }}
        animate={{
          scale: [1, isOrigin ? 5 : 3.2, isOrigin ? 5 : 3.2],
          opacity: [0.75, 0, 0],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: coreSize,
          height: coreSize,
          marginLeft: -coreSize / 2,
          marginTop: -coreSize / 2,
          borderRadius: "50%",
          border: `1px solid ${accent}`,
        }}
        animate={{
          scale: [1, isOrigin ? 7 : 4.5, isOrigin ? 7 : 4.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
      />

      {/* Core dot — white centre, accent glow */}
      <motion.div
        style={{
          width: coreSize,
          height: coreSize,
          borderRadius: "50%",
          background: `radial-gradient(circle, #FFFFFF 0%, #FFFFFF 40%, ${accent} 100%)`,
          boxShadow: isOrigin
            ? `0 0 ${coreSize * 2.2}px ${accent}, 0 0 ${coreSize}px #FFFFFF`
            : `0 0 ${coreSize * 1.6}px ${accent}, 0 0 ${coreSize * 0.6}px rgba(255,255,255,0.9)`,
          position: "relative",
        }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Label */}
      <motion.span
        style={{
          position: "absolute",
          top: isOrigin ? "120%" : "110%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          fontSize: isOrigin ? "0.7rem" : "0.6rem",
          fontWeight: isOrigin ? 700 : 600,
          color: isOrigin ? "#E8448A" : "rgba(232, 68, 138, 0.9)",
          letterSpacing: "0.05em",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.4 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

// ─── Animated connection line using SVG ───
function ConnectionLine({
  from,
  to,
  delay,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
}) {
  // Calculate a curved path control point
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 8;

  const path = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  // Unique filter id so multiple instances don't collide
  const filterId = `arc-glow-${Math.round(from.x * 100)}-${Math.round(to.x * 100)}-${Math.round(to.y * 100)}`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "visible",
      }}
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft glow trail (wide, blurred) */}
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(232, 68, 138, 0.45)"
        strokeWidth="0.9"
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Crisp dashed line on top */}
      <motion.path
        d={path}
        fill="none"
        stroke="#E8448A"
        strokeWidth="0.18"
        strokeLinecap="round"
        strokeDasharray="0.9 0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.95 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Travelling packet — loops forever once arc has drawn */}
      <motion.circle
        r="0.45"
        fill="#FFFFFF"
        filter={`url(#${filterId})`}
        style={{ filter: "drop-shadow(0 0 1.2px #FF5FA0)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{
          duration: 2.8,
          delay: delay + 1.2,
          repeat: Infinity,
          repeatDelay: 1.2,
          ease: "easeInOut",
        }}
      >
        <animateMotion
          dur="2.8s"
          begin={`${delay + 1.2}s`}
          repeatCount="indefinite"
          path={path}
        />
      </motion.circle>
    </svg>
  );
}

// ─── Main AnimatedMap Component ───
interface AnimatedMapProps {
  destinations?: Destination[];
  showLabels?: boolean;
  className?: string;
  variant?: "default" | "hero";
}

export default function AnimatedMap({
  destinations = defaultDestinations,
  showLabels = true,
  className = "",
  variant = "default",
}: AnimatedMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className} style={{ position: "relative", width: "100%", height: variant === "hero" ? "100%" : "auto" }}>
      {/* Map Image with reveal animation */}
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: variant === "hero" ? "auto" : "16 / 9",
          height: variant === "hero" ? "100%" : "auto",
          borderRadius: variant === "hero" ? "0" : "var(--radius-xl)",
          overflow: "hidden",
          border: variant === "hero" ? "none" : "1px solid rgba(232, 68, 138, 0.15)",
          maskImage: variant === "hero" ? "radial-gradient(ellipse at center, black 30%, transparent 80%)" : "none",
          WebkitMaskImage: variant === "hero" ? "radial-gradient(ellipse at center, black 30%, transparent 80%)" : "none",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ambient glow overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 55% 76%, rgba(232, 68, 138, 0.12) 0%, transparent 50%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scan line effect */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(232, 68, 138, 0.3), transparent)",
            zIndex: 3,
            pointerEvents: "none",
          }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />

        {/* Map image */}
        <Image
          src={MAP_IMAGE}
          alt="HelloHire global presence - World map showing countries we serve"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 900px"
          priority
        />

        {/* Connection lines */}
        {isInView &&
          destinations.map((dest, i) => (
            <ConnectionLine
              key={dest.country}
              from={SA_POINT}
              to={{ x: dest.x, y: dest.y }}
              delay={0.5 + i * 0.25}
            />
          ))}

        {/* Destination points */}
        {isInView &&
          destinations.map((dest, i) => (
            <PulsingPoint
              key={dest.country}
              x={dest.x}
              y={dest.y}
              delay={1.2 + i * 0.2}
              label={dest.country}
            />
          ))}

        {/* SA Origin point */}
        {isInView && (
          <PulsingPoint
            x={SA_POINT.x}
            y={SA_POINT.y}
            delay={0.3}
            label="South Africa"
            isOrigin
          />
        )}

        {/* Vignette overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(8, 5, 10, 0.6) 100%)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {/* Destination badges */}
      {showLabels && (
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 2.2 + i * 0.1, duration: 0.4, type: "spring" }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(232, 68, 138, 0.2)",
                borderColor: "#E8448A",
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.1rem",
                background: "var(--color-surface)",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-border)",
                fontSize: "0.8rem",
                cursor: "default",
                transition: "border-color 0.2s",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{dest.flag}</span>
              <span
                style={{
                  color: "var(--color-text)",
                  fontWeight: 500,
                }}
              >
                {dest.country}
              </span>
              <span
                style={{
                  color: "#E8448A",
                  fontWeight: 700,
                  fontFamily: "var(--font-display)",
                }}
              >
                {dest.placements}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
