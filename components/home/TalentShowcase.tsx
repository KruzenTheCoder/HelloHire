"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import { SplitText, GradientWipe, LineReveal } from "@/components/shared/TextReveal";

const talentProfiles = [
  { name: "Sipho M.", role: "Senior Full-Stack Developer", city: "Cape Town", skills: ["React", "Node.js", "TypeScript", "AWS"], bio: "5 years building SaaS products. Available immediately.", available: true },
  { name: "Zanele K.", role: "Executive Virtual Assistant", city: "Johannesburg", skills: ["Operations", "Scheduling", "CRM", "G Suite"], bio: "10 years supporting C-suite executives globally.", available: true },
  { name: "Thabo N.", role: "Digital Marketing Specialist", city: "Durban", skills: ["Meta Ads", "Google Analytics", "SEO", "Content"], bio: "Grew e-commerce brands from R0 to R2M/month.", available: true },
  { name: "Ayanda D.", role: "UX/UI Designer", city: "Pretoria", skills: ["Figma", "User Research", "Design Systems", "Webflow"], bio: "Shipped 12 products. Makes complex things feel simple.", available: true },
  { name: "Lerato P.", role: "Customer Success Manager", city: "Port Elizabeth", skills: ["Intercom", "Salesforce", "SLA Management", "Onboarding"], bio: "98% CSAT across 3 years of global remote roles.", available: true },
  { name: "Naledi R.", role: "Data Analyst", city: "Stellenbosch", skills: ["Python", "SQL", "Tableau", "Excel"], bio: "Turned raw data into growth strategy for 8 startups.", available: true },
  { name: "Mandla T.", role: "DevOps Engineer", city: "Sandton", skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"], bio: "Built infra that scales to 1M+ users.", available: true },
  { name: "Busisiwe M.", role: "Content Strategist", city: "Bloemfontein", skills: ["Copywriting", "SEO", "Brand Voice", "HubSpot"], bio: "Words that convert. 200% avg engagement lift.", available: true },
];

const avatarColors = ["#E8448A", "#9B59B6", "#3498DB", "#E67E22", "#2ECC71", "#1ABC9C", "#E74C3C", "#F39C12"];

// ─── Clean, minimal talent card with subtle hover ───
function TalentCard({ profile, index }: { profile: typeof talentProfiles[0]; index: number }) {
  return (
    <div
      style={{
        width: 320,
        flexShrink: 0,
        padding: "2rem",
        background: "var(--color-surface-2)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--color-border)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232, 68, 138, 0.3)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(232, 68, 138, 0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: avatarColors[index % avatarColors.length],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {profile.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-text)", lineHeight: 1.3 }}>
            {profile.name}
          </h4>
          <p style={{ fontSize: "0.8rem", color: "var(--color-accent)", fontWeight: 500, lineHeight: 1.3, marginTop: "0.15rem" }}>
            {profile.role}
          </p>
        </div>
      </div>

      {/* Location */}
      <p style={{ fontSize: "0.8rem", color: "var(--color-text-faint)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
        📍 {profile.city}
      </p>

      {/* Bio */}
      <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6, flex: 1 }}>
        {profile.bio}
      </p>

      {/* Skills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {profile.skills.map(s => (
          <span
            key={s}
            style={{
              fontSize: "0.7rem",
              padding: "0.3rem 0.65rem",
              background: "var(--color-surface-offset)",
              borderRadius: "var(--radius-full)",
              color: "var(--color-text-muted)",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Availability */}
      {profile.available && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--color-success)",
              display: "inline-block",
              boxShadow: "0 0 6px rgba(68, 212, 136, 0.4)",
            }}
          />
          <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-success)" }}>
            Available Now
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Infinite horizontal marquee ───
function TalentMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Double the profiles for seamless loop
  const doubled = [...talentProfiles, ...talentProfiles];

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          gap: "1.5rem",
          width: "fit-content",
          animation: isInView ? "marquee 45s linear infinite" : "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
        }}
      >
        {doubled.map((profile, i) => (
          <TalentCard key={`${profile.name}-${i}`} profile={profile} index={i % talentProfiles.length} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TalentShowcase() {
  return (
    <section
      style={{
        padding: "var(--spacing-section) 0",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
      aria-labelledby="talent-heading"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 3rem)" }}>
        <ScrollReveal>
          <SectionLabel text="THE TALENT" />
        </ScrollReveal>

        <div style={{ marginTop: "1rem", marginBottom: "3.5rem" }}>
          <LineReveal delay={0.1}>
            <h2 id="talent-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
              <SplitText delay={0.2}>Meet the professionals</SplitText>
              <br />
              <GradientWipe delay={0.5}>changing how the world hires.</GradientWipe>
            </h2>
          </LineReveal>
        </div>
      </div>

      {/* Full-width marquee */}
      <TalentMarquee />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 3rem)" }}>
        <ScrollReveal delay={0.5}>
          <p style={{ textAlign: "center", marginTop: "3rem", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
            <a href="/for-talent" style={{ color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 }}>200+ pre-vetted talent profiles and growing →</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
