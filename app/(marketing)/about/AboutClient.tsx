"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import GlowDivider from "@/components/shared/GlowDivider";
import AnimatedMap from "@/components/shared/AnimatedMap";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem, PageTransition } from "@/components/shared/TextReveal";

const pillars = [
  { title: "PEOPLE", description: "We treat every candidate like a person with potential, not a commodity with a CV.", color: "#E8448A" },
  { title: "PERFORMANCE", description: "We only send you candidates we would hire ourselves.", color: "#FF5FA0" },
  { title: "GROWTH", description: "Placement is the beginning. We support you through every milestone.", color: "#E8448A" },
  { title: "IMPACT", description: "Every hire is an act of economic transformation.", color: "#FF5FA0" },
];

export default function AboutClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(232, 68, 138, 0.04), transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <LineReveal>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text)" }}>
              <SplitText delay={0.2}>Born in South Africa.</SplitText>
              <br />
              <GradientWipe delay={0.6}>Built for the World.</GradientWipe>
            </h1>
          </LineReveal>
        </div>
      </section>

      {/* Brand Story */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="OUR STORY" /></ScrollReveal>
          <StaggerContainer stagger={0.1} delay={0.2} style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "2rem" }}>
            <StaggerItem>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text)" }}>
                South Africa produces extraordinary professionals — developers, designers, strategists, operators — who are globally competitive, deeply skilled, and chronically underutilized by the global remote economy.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p style={{ fontSize: "1.4rem", fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--color-accent)", lineHeight: 1.4, padding: "1.5rem 0", borderLeft: "3px solid var(--color-accent)", paddingLeft: "1.5rem" }}>
                HelloHire exists to change that.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                We believe geography should not limit opportunity. A brilliant coder in Durban deserves the same career ceiling as one in London. A sharp executive assistant in Johannesburg can run operations for a startup in New York just as effectively — often better.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p style={{ fontSize: "1.2rem", fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--color-text)", textAlign: "center", padding: "1rem 0" }}>
                So we built the bridge.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                HelloHire is more than a staffing agency. We are a deliberate act of economic empowerment. Every placement creates a ripple: professional growth, family stability, community impact, and the slow, steady elevation of South Africa&apos;s place in the global talent economy.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Global Reach Map */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="OUR REACH" /></ScrollReveal>
          <LineReveal delay={0.1}><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "2rem" }}><SplitText delay={0.2}>Connecting talent</SplitText>{" "}<GradientWipe delay={0.5}>worldwide.</GradientWipe></h2></LineReveal>
          <AnimatedMap />
        </div>
      </section>

      <GlowDivider />

      {/* Brand Pillars */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="BRAND PILLARS" /></ScrollReveal>
          <LineReveal delay={0.1}><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "3rem" }}><SplitText delay={0.2}>What drives us.</SplitText></h2></LineReveal>
          <StaggerContainer stagger={0.1} delay={0.3} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <motion.div whileHover={{ x: 8, borderColor: "rgba(232, 68, 138, 0.3)" }} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "2rem", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", transition: "border-color 0.3s" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2.5rem)", fontWeight: 700, color: pillar.color, minWidth: "180px", lineHeight: 1 }}>
                    {pillar.title}
                  </span>
                  <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                    &ldquo;{pillar.description}&rdquo;
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
