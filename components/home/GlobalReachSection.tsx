"use client";

import { SplitText, GradientWipe, LineReveal } from "@/components/shared/TextReveal";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedMap from "@/components/shared/AnimatedMap";

export default function GlobalReachSection() {
  return (
    <section
      style={{
        padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="global-heading"
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(232, 68, 138, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <SectionLabel text="GLOBAL REACH" />
        </ScrollReveal>

        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <LineReveal delay={0.1}>
            <h2
              id="global-heading"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
              }}
            >
              <SplitText delay={0.2}>South Africa</SplitText>
              <br />
              <GradientWipe delay={0.5}>to the world.</GradientWipe>
            </h2>
          </LineReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p style={{ maxWidth: "600px", marginBottom: "3rem" }}>
            Our talent works across time zones, industries, and continents —
            united by world-class skills and the HelloHire standard.
          </p>
        </ScrollReveal>

        {/* Animated Map with the provided image */}
        <AnimatedMap />
      </div>
    </section>
  );
}
