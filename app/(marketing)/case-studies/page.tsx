import type { Metadata } from "next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from real placements. See how HelloHire has helped companies build world-class remote teams from South Africa.",
};

const caseStudies = [
  {
    company: "TechVentures UK",
    role: "Senior Frontend Developer",
    result: "Hired in 38 days. Now leads a 5-person frontend team.",
    metric: "38 days to hire",
    industry: "SaaS / Technology",
  },
  {
    company: "GrowthStack Agency",
    role: "Executive Virtual Assistant",
    result: "Managing CEO calendar, ops, and client communications across 3 time zones.",
    metric: "60% cost savings vs US hire",
    industry: "Marketing Agency",
  },
  {
    company: "Nomad Commerce",
    role: "Full-Stack Developer + QA Engineer",
    result: "2 hires placed within 6 weeks. Both retained past 12 months.",
    metric: "100% retention",
    industry: "E-commerce",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollReveal>
            <SectionLabel text="CASE STUDIES" />
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text)", marginTop: "1rem" }}>
              Real results.<br /><span className="text-gradient-accent">Real placements.</span>
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "1.5rem", maxWidth: "600px", margin: "1.5rem auto 0" }}>
              See how companies are building world-class teams with HelloHire.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: "0 clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.company} delay={0.1 + i * 0.1}>
              <div style={{ padding: "2.5rem", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>{study.industry}</span>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-text)", marginTop: "0.5rem" }}>{study.company}</h2>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: 500, marginTop: "0.25rem" }}>{study.role}</p>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1rem" }}>{study.result}</p>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--color-surface-2)", borderRadius: "var(--radius-lg)", textAlign: "center", minWidth: "160px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-accent)" }}>{study.metric}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "1rem" }}>Want results like these?</h2>
            <p style={{ marginBottom: "2rem" }}>Start your hiring journey today.</p>
            <MagneticButton variant="primary" href="/for-employers">Start Hiring →</MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
