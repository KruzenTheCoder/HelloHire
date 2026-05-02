"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";
import GlowDivider from "@/components/shared/GlowDivider";
import AnimatedMap from "@/components/shared/AnimatedMap";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem, PageTransition } from "@/components/shared/TextReveal";
import { DollarSign, Globe, Home, FileCheck, Handshake, Target, Code, Palette, BarChart3, Megaphone, Headphones, Users, ArrowRight, Calculator, Briefcase, Heart } from "lucide-react";

const perks = [
  { icon: <DollarSign size={20} />, text: "Earn in USD/GBP, paid locally in ZAR" },
  { icon: <Globe size={20} />, text: "Work with companies in USA, UK, Europe, UAE, Australia" },
  { icon: <Home size={20} />, text: "100% remote — no relocation required" },
  { icon: <FileCheck size={20} />, text: "We handle contracts and compliance" },
  { icon: <Handshake size={20} />, text: "Ongoing career support post-placement" },
  { icon: <Target size={20} />, text: "Only matched to roles that fit your skills and goals" },
];

const roleCategories = [
  { icon: <Code size={20} />, label: "Software Development" },
  { icon: <Palette size={20} />, label: "Design & UX" },
  { icon: <BarChart3 size={20} />, label: "Data & Analytics" },
  { icon: <Megaphone size={20} />, label: "Marketing & Content" },
  { icon: <Headphones size={20} />, label: "Operations & Admin" },
  { icon: <Users size={20} />, label: "Customer Success" },
  { icon: <Calculator size={20} />, label: "Finance & Accounting" },
  { icon: <Heart size={20} />, label: "HR & Recruitment" },
  { icon: <Briefcase size={20} />, label: "Project Management" },
];

export default function ForTalentClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at top left, rgba(232, 68, 138, 0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", position: "relative", zIndex: 1, margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="FOR TALENT" /></ScrollReveal>
          <div style={{ marginTop: "1rem" }}>
            <LineReveal delay={0.1}>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text)" }}>
                <SplitText delay={0.2}>Work globally.</SplitText>
                <br />
                <GradientWipe delay={0.5}>Live in South Africa.</GradientWipe>
              </h1>
            </LineReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p style={{ fontSize: "1.15rem", maxWidth: "650px", marginTop: "1.5rem", marginBottom: "2rem" }}>
              HelloHire connects elite SA professionals with remote roles at world-class companies — in tech, ops, marketing, design, and more.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <MagneticButton variant="primary" href="#talent-form">Join the Talent Network →</MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <LineReveal><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "2rem" }}><SplitText delay={0.1}>Why HelloHire?</SplitText></h2></LineReveal>
          <StaggerContainer stagger={0.06} delay={0.2} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {perks.map((perk, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -3, borderColor: "rgba(232, 68, 138, 0.3)" }} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem", background: "var(--color-surface-2)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
                  <div style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}>{perk.icon}</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text)", margin: 0 }}>{perk.text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <GlowDivider />

      {/* Global Reach */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="WHERE YOU'LL WORK" /></ScrollReveal>
          <LineReveal delay={0.1}><h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "2rem" }}><SplitText delay={0.2}>Companies across</SplitText>{" "}<GradientWipe delay={0.5}>12+ countries.</GradientWipe></h2></LineReveal>
          <AnimatedMap showLabels={true} />
        </div>
      </section>

      {/* Role Categories */}
      <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <LineReveal>
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "0.75rem" }}>
              <SplitText delay={0.2}>We&apos;re building Africa&apos;s finest</SplitText>
              <br />
              <GradientWipe delay={0.5}>remote talent roster.</GradientWipe>
            </h2>
          </LineReveal>
          <ScrollReveal delay={0.3}>
            <p style={{ marginBottom: "2.5rem", maxWidth: "600px" }}>
              If you&apos;re a South African professional with 2+ years of experience, fluent in English, and serious about remote work — we want to hear from you.
            </p>
          </ScrollReveal>
          <StaggerContainer stagger={0.04} delay={0.2} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
            {roleCategories.map((cat) => (
              <StaggerItem key={cat.label}>
                <motion.div whileHover={{ borderColor: "rgba(232, 68, 138, 0.3)", y: -2 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem", background: "var(--color-surface)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 500, transition: "border-color 0.2s" }}>
                  <span style={{ color: "var(--color-accent)" }}>{cat.icon}</span>
                  {cat.label}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Registration Form */}
      <section id="talent-form" style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <ScrollReveal>
            <SectionLabel text="JOIN US" />
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginTop: "1rem", marginBottom: "2rem" }}>Register your interest.</h2>
          </ScrollReveal>

          {!submitted ? (
            <ScrollReveal delay={0.1}>
              <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[
                    { label: "Full Name", id: "fullname", type: "text" },
                    { label: "Email", id: "email", type: "email" },
                    { label: "Phone", id: "phone", type: "tel" },
                    { label: "City / Province", id: "city", type: "text" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>{f.label}</label>
                      <input type={f.type} id={f.id} name={f.id} required style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={e => e.target.style.borderColor = "var(--color-accent)"} onBlur={e => e.target.style.borderColor = "var(--color-border)"} />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="role-interest" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>Primary Role Interest</label>
                  <select id="role-interest" name="role-interest" style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
                    <option value="">Select a role...</option>
                    {roleCategories.map(c => <option key={c.label} value={c.label}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>Years of Experience</label>
                  <select id="experience" name="experience" style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
                    <option value="2-4">2–4 years</option>
                    <option value="5-9">5–9 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bio" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>Brief Bio (150 words max)</label>
                  <textarea id="bio" name="bio" rows={3} maxLength={1000} style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", resize: "vertical" }} onFocus={e => e.target.style.borderColor = "var(--color-accent)"} onBlur={e => e.target.style.borderColor = "var(--color-border)"} />
                </div>
                <MagneticButton variant="primary">Submit Application <ArrowRight size={16} /></MagneticButton>
              </form>
            </ScrollReveal>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: "center", padding: "3rem", background: "var(--color-surface-2)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-accent)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "0.75rem" }}>You&apos;re in!</h3>
              <p>We&apos;ll review your application and reach out within 48 hours. Welcome to the HelloHire network.</p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
