"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { SplitText, LineReveal } from "@/components/shared/TextReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We hired a senior developer through HelloHire in 38 days. She's been with us 18 months and is now leading our entire frontend team. Best hire we've ever made.",
    name: "Marcus Holloway",
    title: "CTO",
    company: "TechVentures UK",
  },
  {
    quote: "I was skeptical about South African talent for our US-based operations. HelloHire changed my mind completely. Our VA Zanele runs our entire ops calendar better than anyone I've employed locally.",
    name: "Sarah Chen",
    title: "Founder",
    company: "GrowthStack Agency",
  },
  {
    quote: "The support doesn't stop at placement. HelloHire checked in at 30, 60, and 90 days. That kind of partnership is rare in the staffing world.",
    name: "James Okafor",
    title: "COO",
    company: "Nomad Commerce",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <section
      style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)", position: "relative", minHeight: "70vh", display: "flex", alignItems: "center" }}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(232, 68, 138, 0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} aria-hidden="true" />

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, width: "100%" }}>
        <ScrollReveal>
          <span className="section-label" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>TESTIMONIALS</span>
        </ScrollReveal>

        <LineReveal delay={0.2}>
          <h2 id="testimonials-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "1rem" }}>
            <SplitText delay={0.3}>What our clients say</SplitText>
          </h2>
        </LineReveal>

        {/* Quote icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "-1rem" }}
        >
          <Quote size={60} color="var(--color-accent)" />
        </motion.div>

        <div style={{ marginTop: "2rem", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)", scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)", fontWeight: 500, color: "var(--color-text)", lineHeight: 1.4, fontStyle: "italic" }}>
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </blockquote>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                style={{ marginTop: "2rem" }}
              >
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-accent)", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "#fff", border: "2px solid var(--color-accent)" }}>
                  {testimonials[current].name.split(" ").map(n => n[0]).join("")}
                </div>
                <p style={{ fontWeight: 600, fontSize: "1rem", color: "var(--color-text)" }}>— {testimonials[current].name}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{testimonials[current].title} · {testimonials[current].company}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
          <motion.button
            whileHover={{ scale: 1.1, borderColor: "var(--color-accent)" }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            aria-label="Previous testimonial"
            style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", cursor: "pointer", transition: "border-color 0.2s" }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                animate={{
                  width: i === current ? 24 : 8,
                  background: i === current ? "var(--color-accent)" : "var(--color-surface-offset)",
                }}
                transition={{ duration: 0.3 }}
                style={{ height: 8, borderRadius: "var(--radius-full)", border: "none", cursor: "pointer" }}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1, borderColor: "var(--color-accent)" }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            aria-label="Next testimonial"
            style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)", cursor: "pointer", transition: "border-color 0.2s" }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
