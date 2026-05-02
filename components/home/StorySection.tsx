"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import GlowDivider from "@/components/shared/GlowDivider";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem } from "@/components/shared/TextReveal";
import { Search, Target, Handshake } from "lucide-react";

function ProblemChapter() {
  return (
    <section
      style={{
        padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)",
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="story-problem-heading"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div
        style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        <ScrollReveal>
          <SectionLabel text="CHAPTER 01 · THE CHALLENGE" />
        </ScrollReveal>

        <div style={{ marginTop: "1rem" }}>
          <LineReveal delay={0.1}>
            <h2 id="story-problem-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
              <SplitText delay={0.2}>Global hiring is broken.</SplitText>
              <br />
              <span style={{ color: "var(--color-accent)" }}>
                <SplitText delay={0.5}>Expensive. Slow. Unreliable.</SplitText>
              </span>
            </h2>
          </LineReveal>
        </div>

        <StaggerContainer stagger={0.15} delay={0.4} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem", maxWidth: "700px" }}>
          <StaggerItem>
            <p>Hiring the right remote talent shouldn&apos;t cost $15,000 in recruiter fees or take 3 months of back-and-forth.</p>
          </StaggerItem>
          <StaggerItem>
            <p>Most staffing companies send you résumés. We send you ready-to-work professionals — vetted, onboarded, and culturally aligned with your team.</p>
          </StaggerItem>
          <StaggerItem>
            <p>While the world looks to Latin America and Southeast Asia, one region remains chronically underutilized: <strong style={{ color: "var(--color-text)" }}>South Africa</strong> — with world-class English fluency, strong work ethic, and professionals who punch above their weight.</p>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02, borderColor: "var(--color-accent)" }}
            style={{ padding: "1.5rem 2rem", background: "var(--color-surface-2)", borderRadius: "var(--radius-lg)", borderLeft: "3px solid var(--color-accent)", marginTop: "2rem", maxWidth: "500px", transition: "border-color 0.3s" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)", fontWeight: 700, color: "var(--color-accent)", display: "block" }}
            >
              72%
            </motion.span>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}>of global companies report difficulty finding reliable remote talent.</p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SolutionChapter() {
  const steps = [
    { icon: <Search size={28} />, step: "01", title: "DISCOVER", description: "Tell us who you need. We listen deeply — your culture, your goals, your pace." },
    { icon: <Target size={28} />, step: "02", title: "MATCH", description: "Our talent scouts identify the top 3–5 candidates from our curated SA talent network. No spam. No noise." },
    { icon: <Handshake size={28} />, step: "03", title: "PLACE & SUPPORT", description: "We handle onboarding, contracts, compliance, and ongoing performance support. You focus on outcomes." },
  ];

  return (
    <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)", position: "relative" }} aria-labelledby="story-solution-heading">
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(232, 68, 138, 0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} aria-hidden="true" />

      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <SectionLabel text="CHAPTER 02 · THE HELLOHIRE WAY" />
        </ScrollReveal>

        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <LineReveal delay={0.1}>
            <h2 id="story-solution-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
              <SplitText delay={0.2}>We don&apos;t just fill roles.</SplitText>
              <br />
              <GradientWipe delay={0.6}>We build remote teams that last.</GradientWipe>
            </h2>
          </LineReveal>
        </div>

        <GlowDivider className="my-12" />

        <StaggerContainer stagger={0.15} delay={0.3} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
          {steps.map((step) => (
            <StaggerItem key={step.step}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(232, 68, 138, 0.08)" }}
                transition={{ duration: 0.3 }}
                style={{ padding: "2.5rem 2rem", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", textAlign: "left" }}
                className="hover-glow"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", color: "var(--color-accent)" }}>
                  {step.icon}
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-text-faint)" }}>STEP {step.step}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>{step.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default function StorySection() {
  return (
    <>
      <ProblemChapter />
      <SolutionChapter />
    </>
  );
}
