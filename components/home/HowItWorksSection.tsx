"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import GlowDivider from "@/components/shared/GlowDivider";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem } from "@/components/shared/TextReveal";
import { ClipboardList, Search, ListChecks, Users, CheckCircle } from "lucide-react";

const steps = [
  { icon: <ClipboardList size={28} />, day: "Day 1", title: "BRIEF", description: "Submit your role requirements using our 5-minute intake form. Tell us the role, the skills, the culture, the budget." },
  { icon: <Search size={28} />, day: "Days 2–7", title: "SEARCH", description: "Our talent scouts activate the HelloHire network. We surface only the top 3–5 candidates — never a pile of CVs." },
  { icon: <ListChecks size={28} />, day: "Days 7–14", title: "SHORTLIST", description: "You receive a curated shortlist with video introductions, skill assessments, and our recommendation note." },
  { icon: <Users size={28} />, day: "Days 14–28", title: "INTERVIEW", description: "You meet your shortlist. We coordinate everything. You focus on fit, not admin." },
  { icon: <CheckCircle size={28} />, day: "Days 28–47", title: "PLACED & SUPPORTED", description: "Once you say yes, we handle contracts, onboarding, compliance, and 90-day performance check-ins." },
];

export default function HowItWorksSection() {
  return (
    <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }} aria-labelledby="hiw-heading">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal>
          <SectionLabel text="THE PROCESS" />
        </ScrollReveal>

        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <LineReveal delay={0.1}>
            <h2 id="hiw-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
              <SplitText delay={0.2}>From brief to hired</SplitText>
              <br />
              <GradientWipe delay={0.5}>in 47 days.</GradientWipe>
            </h2>
          </LineReveal>
        </div>

        <GlowDivider className="my-8" />

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ x: 8, borderColor: "rgba(232, 68, 138, 0.2)" }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2rem",
                  padding: "2rem 0",
                  borderBottom: i < steps.length - 1 ? "1px solid var(--color-divider)" : "none",
                  alignItems: "start",
                }}
              >
                {/* Timeline indicator */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "80px" }}>
                  <motion.div
                    whileInView={{ rotate: [0, 5, -5, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                    style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-surface-2)", border: "2px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)" }}
                    className="animate-border-glow"
                  >
                    {step.icon}
                  </motion.div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--color-accent)", letterSpacing: "0.05em" }}>{step.day}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "600px" }}>{step.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
