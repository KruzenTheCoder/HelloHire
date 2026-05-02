"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";
import GlowDivider from "@/components/shared/GlowDivider";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem, PageTransition } from "@/components/shared/TextReveal";
import { ClipboardList, Search, ListChecks, Users, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { icon: <ClipboardList size={32} />, day: "Day 1", title: "Brief", description: "Submit your role requirements using our 5-minute intake form. Tell us the role, the skills, the culture, the budget. We take time to understand what makes a great hire for your team — not just a matching CV.", number: "01" },
  { icon: <Search size={32} />, day: "Days 2–7", title: "Search", description: "Our talent scouts activate the HelloHire network. We surface only the top 3–5 candidates — never a pile of CVs. Every candidate is pre-vetted with skills assessments, reference checks, and cultural alignment interviews.", number: "02" },
  { icon: <ListChecks size={32} />, day: "Days 7–14", title: "Shortlist", description: "You receive a curated shortlist with video introductions, skill assessments, and our recommendation note. Each candidate profile includes detailed experience summaries, availability, and our placement notes.", number: "03" },
  { icon: <Users size={32} />, day: "Days 14–28", title: "Interview", description: "You meet your shortlist. We coordinate everything — scheduling, timezone alignment, and interview prep for candidates. You focus on fit, not admin.", number: "04" },
  { icon: <CheckCircle size={32} />, day: "Days 28–47", title: "Placed & Supported", description: "Once you say yes, we handle contracts, onboarding, compliance, and 90-day performance check-ins. We stay in touch with both you and your new hire to ensure long-term success.", number: "05" },
];

export default function HowItWorksClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="THE PROCESS" /></ScrollReveal>
          <LineReveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text)", marginTop: "1rem" }}>
              <SplitText delay={0.2}>From brief to hired</SplitText>
              <br />
              <GradientWipe delay={0.5}>in 47 days.</GradientWipe>
            </h1>
          </LineReveal>
          <ScrollReveal delay={0.3}>
            <p style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "600px", margin: "1.5rem auto 0" }}>
              Our streamlined process eliminates the chaos of traditional hiring. Here&apos;s exactly how it works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "0 clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", padding: "3rem 0", borderBottom: i < steps.length - 1 ? "1px solid var(--color-divider)" : "none", alignItems: "start" }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", minWidth: "100px" }}>
                  <motion.div
                    whileInView={{ rotate: [0, 5, -5, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--color-surface)", border: "2px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)" }}
                    className="animate-border-glow"
                  >
                    {step.icon}
                  </motion.div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", letterSpacing: "0.05em" }}>{step.day}</span>
                  <span style={{ fontSize: "2rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-surface-offset)" }}>{step.number}</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "1rem" }}>{step.title}</h2>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "600px" }}>{step.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <GlowDivider />

      {/* CTA */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <LineReveal>
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "1rem" }}>
              <SplitText delay={0.2}>Ready to get started?</SplitText>
            </h2>
          </LineReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ marginBottom: "2rem" }}>Submit your first role request today and see the HelloHire difference.</p>
            <MagneticButton variant="primary" href="/for-employers">
              Start Hiring <ArrowRight size={16} />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
