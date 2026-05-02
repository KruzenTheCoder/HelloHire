"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PREMIUM TEXT ANIMATION COMPONENTS
   Split-text reveal, character-by-character
   gradient wipes, and stagger effects
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// ─── Split-word reveal (each word flies in separately) ───
interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 0.05,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const words = children.split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block", willChange: "transform, opacity" }}
            initial={{ y: "110%", opacity: 0, rotateX: 45 }}
            animate={isInView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

// ─── Character-by-character reveal (premium heading effect) ───
interface CharRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function CharReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.02,
  once = true,
}: CharRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <span ref={ref} className={className} aria-label={children}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
            whiteSpace: char === " " ? "pre" : undefined,
          }}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Line-by-line reveal with clip-path mask wipe ───
interface LineRevealProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  direction?: "up" | "left";
}

export function LineReveal({
  children,
  delay = 0,
  once = true,
  direction = "up",
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const clipPaths = {
    up: {
      hidden: "inset(100% 0% 0% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
    left: {
      hidden: "inset(0% 100% 0% 0%)",
      visible: "inset(0% 0% 0% 0%)",
    },
  };

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        style={{ willChange: "clip-path, transform" }}
        initial={{
          clipPath: clipPaths[direction].hidden,
          y: direction === "up" ? 30 : 0,
          x: direction === "left" ? 30 : 0,
        }}
        animate={
          isInView
            ? {
                clipPath: clipPaths[direction].visible,
                y: 0,
                x: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── Gradient text wipe animation ───
interface GradientWipeProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function GradientWipe({
  children,
  className = "",
  delay = 0,
  once = true,
}: GradientWipeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.span
      ref={ref}
      className={`text-gradient-accent ${className}`}
      style={{
        display: "inline-block",
        willChange: "opacity, filter",
      }}
      initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: delay + 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  );
}

// ─── Counter with scroll trigger ───
interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 2,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration, delay: delay + 0.3 }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// ─── Page transition wrapper ───
interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Parallax wrapper ───
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: speed * -30 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger container for child elements ───
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  style,
  stagger = 0.1,
  delay = 0,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger item (to be used inside StaggerContainer) ───
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerItem({ children, className = "", style }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
