"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import { SplitText, GradientWipe, LineReveal } from "@/components/shared/TextReveal";

export default function CTASection() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }} aria-labelledby="cta-heading">
      <div style={{ display: "grid", gridTemplateColumns: "1fr", minHeight: "60vh" }} className="md:grid-cols-2">
        {/* Left — For Employers */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: "clamp(3rem, 5vw, 6rem) clamp(2rem, 4vw, 4rem)", background: "var(--color-surface)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}
        >
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle at bottom right, rgba(232, 68, 138, 0.06), transparent 70%)", pointerEvents: "none" }} />
          <ScrollReveal>
            <span className="section-label" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>FOR EMPLOYERS</span>
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <LineReveal delay={0.1}>
                <h2 id="cta-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
                  <SplitText delay={0.2}>Ready to hire</SplitText>
                  <br />
                  <GradientWipe delay={0.5}>smarter?</GradientWipe>
                </h2>
              </LineReveal>
            </div>
            <p style={{ marginBottom: "2rem", maxWidth: "400px" }}>Tell us who you need. We&apos;ll find them.</p>
            <MagneticButton variant="primary" href="/for-employers">
              Start a Hire Request →
            </MagneticButton>
          </ScrollReveal>
        </motion.div>

        {/* Right — For Talent */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ padding: "clamp(3rem, 5vw, 6rem) clamp(2rem, 4vw, 4rem)", background: "var(--color-surface-2)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px", background: "radial-gradient(circle at top left, rgba(232, 68, 138, 0.08), transparent 70%)", pointerEvents: "none" }} />
          <ScrollReveal delay={0.15}>
            <span className="section-label" style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>FOR TALENT</span>
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <LineReveal delay={0.25}>
                <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
                  <SplitText delay={0.3}>Ready for your</SplitText>
                  <br />
                  <GradientWipe delay={0.6}>global career?</GradientWipe>
                </h2>
              </LineReveal>
            </div>
            <p style={{ marginBottom: "2rem", maxWidth: "400px" }}>Join the HelloHire talent network. Work globally, live locally.</p>
            <MagneticButton variant="secondary" href="/for-talent">
              Apply to Join →
            </MagneticButton>
          </ScrollReveal>
        </motion.div>
      </div>

      {/* Glowing center divider (desktop only) */}
      <motion.div
        className="hidden md:block"
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "80%", opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "2px", background: "linear-gradient(to bottom, transparent, #E8448A, transparent)", pointerEvents: "none" }}
      />
    </section>
  );
}
