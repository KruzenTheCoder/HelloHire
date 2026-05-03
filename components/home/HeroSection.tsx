"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import { SplitText, GradientWipe, LineReveal } from "@/components/shared/TextReveal";
import AnimatedMap from "@/components/shared/AnimatedMap";

// ─── Particle field canvas component ───
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 180;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.3 + 0.05,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 68, 138, ${p.opacity})`;
        ctx.fill();
      });

      // Subtle connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232, 68, 138, ${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 80]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "6rem clamp(1rem, 3vw, 3rem) 2rem",
        gap: "1.5rem",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background Animated Map — same configuration as the global-reach map below */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(1400px, 110vw)",
          zIndex: 0,
          opacity: 0.55,
          pointerEvents: "none",
          x: "-50%",
          y: "-50%",
          maskImage:
            "radial-gradient(ellipse at center, black 45%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 45%, transparent 85%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatedMap showLabels={false} />
      </motion.div>

      <ParticleField />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(8, 5, 10, 0.2) 0%, var(--color-bg) 80%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "900px",
          gap: "2rem",
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
          marginTop: "10vh",
        }}
      >
        {/* Super Label */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "var(--color-accent)",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          SOUTH AFRICA&apos;S PREMIER REMOTE STAFFING PARTNER
        </motion.span>

        {/* Heading */}
        <h1
          id="hero-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 2rem + 5vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
          }}
        >
          <span style={{ display: "block" }}>
            <SplitText delay={0.3} stagger={0.06}>Your World-Class</SplitText>
          </span>
          <span style={{ display: "block" }}>
            <SplitText delay={0.5} stagger={0.06}>Team Starts in</SplitText>
          </span>
          <span style={{ display: "block" }}>
            <GradientWipe delay={0.7}>South Africa.</GradientWipe>
          </span>
        </h1>

        {/* Subheadline */}
        <LineReveal delay={1}>
          <p
            style={{
              fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)",
              color: "var(--color-text-muted)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            HelloHire connects global companies with elite, pre-vetted South
            African professionals — ready to perform, built for remote, priced for
            growth.
          </p>
        </LineReveal>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}
        >
          <MagneticButton variant="primary" href="/for-employers">
            Hire South African Talent →
          </MagneticButton>
          <MagneticButton variant="secondary" href="/for-talent">
            Join as Talent
          </MagneticButton>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", marginTop: "0.5rem" }}
        >
          {["150+ Placements", "98% Retention", "12+ Countries Served"].map((stat, i) => (
            <motion.span
              key={stat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--color-text-faint)",
                letterSpacing: "0.05em",
              }}
            >
              {stat}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-text-faint)",
          }}
        >
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} color="var(--color-text-faint)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
