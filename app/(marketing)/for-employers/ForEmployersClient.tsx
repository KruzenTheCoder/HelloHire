"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";
import GlowDivider from "@/components/shared/GlowDivider";
import AnimatedMap from "@/components/shared/AnimatedMap";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem, PageTransition } from "@/components/shared/TextReveal";
import { CheckCircle, Shield, Clock, Globe, Award, ArrowRight } from "lucide-react";

const valueProps = [
  { icon: <Shield size={20} />, text: "Pre-vetted professionals (background check, skills assessment, reference verified)" },
  { icon: <Globe size={20} />, text: "English-first, globally aligned culture" },
  { icon: <Clock size={20} />, text: "Time zone compatible with USA EST, UK GMT, UAE GST" },
  { icon: <CheckCircle size={20} />, text: "Fully compliant contracts and payroll support" },
  { icon: <Award size={20} />, text: "90-day performance guarantee" },
];

const pricingTiers = [
  { name: "STARTER", subtitle: "Small business, 1 hire", price: "12%", priceNote: "of first year's salary", features: ["1 role at a time", "3 candidate shortlist", "60-day replacement guarantee"], featured: false, cta: "Get Started" },
  { name: "GROWTH", subtitle: "Scale-up, 2–5 hires", price: "10%", priceNote: "per role", features: ["Up to 5 simultaneous roles", "5 candidate shortlist per role", "Priority placement (35-day SLA)", "90-day replacement guarantee", "Dedicated account manager"], featured: true, cta: "Start Hiring" },
  { name: "ENTERPRISE", subtitle: "10+ hires / team builds", price: "Custom", priceNote: "pricing", features: ["Unlimited roles", "Embedded talent scout", "Custom SLAs", "Quarterly talent reviews", "Compliance & payroll co-management"], featured: false, cta: "Contact Us" },
];

export default function ForEmployersClient() {
  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at top right, rgba(232, 68, 138, 0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", position: "relative", zIndex: 1, margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="FOR EMPLOYERS" /></ScrollReveal>
          <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            <LineReveal delay={0.1}>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text)" }}>
                <SplitText delay={0.2}>Build your dream remote team</SplitText>
                <br />
                <GradientWipe delay={0.6}>from South Africa.</GradientWipe>
              </h1>
            </LineReveal>
          </div>
          <ScrollReveal delay={0.2}><p style={{ fontSize: "1.15rem", maxWidth: "600px", marginBottom: "2rem" }}>Elite talent. Transparent pricing. Zero headaches.</p></ScrollReveal>
          <ScrollReveal delay={0.3}><MagneticButton variant="primary" href="#hire-form">Request a Hire →</MagneticButton></ScrollReveal>
        </div>
      </section>

      {/* Why HelloHire */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <LineReveal><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "2rem" }}><SplitText delay={0.1}>Why HelloHire?</SplitText></h2></LineReveal>
          <StaggerContainer stagger={0.08} delay={0.2} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {valueProps.map((vp, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ x: 8, borderColor: "rgba(232, 68, 138, 0.3)" }} transition={{ duration: 0.2 }} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 1.25rem", background: "var(--color-surface-2)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
                  <div style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}>{vp.icon}</div>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text)", margin: 0 }}>{vp.text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Global Reach Map */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="GLOBAL PRESENCE" /></ScrollReveal>
          <LineReveal delay={0.1}><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "2rem" }}><SplitText delay={0.2}>We place talent</SplitText>{" "}<GradientWipe delay={0.5}>worldwide.</GradientWipe></h2></LineReveal>
          <AnimatedMap />
        </div>
      </section>

      <GlowDivider />

      {/* Pricing */}
      <section id="pricing" style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <ScrollReveal><SectionLabel text="PRICING" /></ScrollReveal>
          <LineReveal delay={0.1}><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "3rem" }}><SplitText delay={0.2}>Simple,</SplitText>{" "}<GradientWipe delay={0.4}>transparent</GradientWipe>{" "}<SplitText delay={0.6}>pricing.</SplitText></h2></LineReveal>
          <StaggerContainer stagger={0.1} delay={0.3} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <motion.div whileHover={{ y: -6 }} style={{ padding: "2.5rem 2rem", background: tier.featured ? "var(--color-surface-offset)" : "var(--color-surface)", borderRadius: "var(--radius-xl)", border: tier.featured ? "2px solid var(--color-accent)" : "1px solid var(--color-border)", textAlign: "left", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                  {tier.featured && <div style={{ position: "absolute", top: "1rem", right: "1rem", padding: "0.25rem 0.75rem", background: "var(--color-accent)", borderRadius: "var(--radius-full)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>MOST POPULAR</div>}
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>{tier.subtitle}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-text)", marginTop: "0.5rem" }}>{tier.name}</h3>
                  <div style={{ margin: "1.5rem 0" }}><span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700, color: "var(--color-accent)" }}>{tier.price}</span><span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginLeft: "0.5rem" }}>{tier.priceNote}</span></div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>{tier.features.map(f => (<li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}><CheckCircle size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} /> {f}</li>))}</ul>
                  <div style={{ marginTop: "2rem" }}><MagneticButton variant={tier.featured ? "primary" : "secondary"} href="#hire-form">{tier.cta} <ArrowRight size={16} /></MagneticButton></div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Hire Form */}
      <section id="hire-form" style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <ScrollReveal>
            <SectionLabel text="GET STARTED" />
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "2rem" }}>Tell us who you need.</h2>
            <p style={{ marginBottom: "2rem" }}>Fill in the form below and our team will get back to you within 24 hours.</p>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left" }} onSubmit={(e) => e.preventDefault()}>
              {[{ label: "Company Name", type: "text", id: "company" }, { label: "Your Name", type: "text", id: "name" }, { label: "Email", type: "email", id: "email" }, { label: "Role Title You Need", type: "text", id: "role" }].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} required style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--color-border)"} />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>Tell us more about the role</label>
                <textarea id="message" name="message" rows={4} style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", resize: "vertical", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--color-border)"} />
              </div>
              <MagneticButton variant="primary">Submit Request <ArrowRight size={16} /></MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
