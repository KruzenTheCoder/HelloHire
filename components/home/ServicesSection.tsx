"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";
import { SplitText, GradientWipe, LineReveal, StaggerContainer, StaggerItem } from "@/components/shared/TextReveal";
import { Globe, Code, Headphones, Heart, Megaphone, Users } from "lucide-react";

const tiles = [
  { title: "FOR GLOBAL EMPLOYERS", description: "Startups, scale-ups, and established businesses hiring remotely. US, UK, Europe, UAE, Australia.", icon: <Globe size={28} />, cta: "Start Hiring →", href: "/for-employers", span: "large" },
  { title: "TECH & PRODUCT", description: "Developers, designers, PMs, data analysts, QA engineers", icon: <Code size={24} />, span: "medium" },
  { title: "OPERATIONS & BPO", description: "VAs, customer support, finance ops, HR, project managers", icon: <Headphones size={24} />, span: "medium" },
  { title: "HEALTHCARE ADMIN", description: "Medical billing, scheduling, patient comms", icon: <Heart size={24} />, span: "small" },
  { title: "MARKETING", description: "Content, social, paid ads, SEO, copywriters", icon: <Megaphone size={24} />, span: "small" },
  { title: "FOR SA TALENT", description: "Elite professionals ready to work with global companies from home.", icon: <Users size={28} />, cta: "Join the Network →", href: "/for-talent", span: "medium" },
];

export default function ServicesSection() {
  return (
    <section style={{ padding: "var(--spacing-section) clamp(1rem, 3vw, 3rem)", background: "var(--color-surface)" }} aria-labelledby="services-heading">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal>
          <SectionLabel text="WHO WE SERVE" />
        </ScrollReveal>

        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <LineReveal delay={0.1}>
            <h2 id="services-heading" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
              <SplitText delay={0.2}>Built for the companies</SplitText>
              <br />
              <GradientWipe delay={0.5}>building the future.</GradientWipe>
            </h2>
          </LineReveal>
        </div>

        <StaggerContainer stagger={0.08} delay={0.2} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} className="bento-grid">
          {tiles.map((tile) => (
            <StaggerItem
              key={tile.title}
              className={tile.span === "large" ? "col-span-4 md:col-span-2 md:row-span-2" : tile.span === "medium" ? "col-span-4 md:col-span-2" : "col-span-2 md:col-span-1"}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "var(--color-accent)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(232, 68, 138, 0.08)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: tile.span === "large" ? "2.5rem" : "1.75rem",
                  background: "var(--color-surface-2)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--color-border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "120px",
                    height: "120px",
                    background: "radial-gradient(circle at top right, rgba(232, 68, 138, 0.06), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{ color: "var(--color-accent)", marginBottom: "1rem" }}
                  >
                    {tile.icon}
                  </motion.div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: tile.span === "large" ? "1.5rem" : "1rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.75rem", letterSpacing: "0.02em" }}>
                    {tile.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{tile.description}</p>
                </div>
                {tile.cta && (
                  <div style={{ marginTop: "1.5rem" }}>
                    <MagneticButton variant={tile.span === "large" ? "primary" : "secondary"} href={tile.href}>
                      {tile.cta}
                    </MagneticButton>
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
