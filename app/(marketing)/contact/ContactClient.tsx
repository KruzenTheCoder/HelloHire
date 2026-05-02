"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";
import MagneticButton from "@/components/shared/MagneticButton";
import { SplitText, GradientWipe, LineReveal, PageTransition } from "@/components/shared/TextReveal";
import { ArrowRight, Mail, MessageSquare, Building, Users, Globe } from "lucide-react";

const inquiryTypes = [
  { value: "employer", label: "I'm an employer looking to hire", icon: <Building size={18} /> },
  { value: "talent", label: "I'm talent looking for opportunities", icon: <Users size={18} /> },
  { value: "partnership", label: "Partnership inquiry", icon: <Globe size={18} /> },
  { value: "media", label: "Media / Press", icon: <MessageSquare size={18} /> },
  { value: "other", label: "Other", icon: <Mail size={18} /> },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  return (
    <PageTransition>
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", minHeight: "100vh" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <ScrollReveal><SectionLabel text="CONTACT" /></ScrollReveal>
          <LineReveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text)", marginTop: "1rem", marginBottom: "1rem" }}>
              <SplitText delay={0.2}>Let&apos;s</SplitText>{" "}
              <GradientWipe delay={0.4}>talk.</GradientWipe>
            </h1>
          </LineReveal>
          <ScrollReveal delay={0.3}>
            <p style={{ marginBottom: "3rem", maxWidth: "500px" }}>
              Whether you&apos;re looking to hire, join our network, or explore a partnership — we&apos;d love to hear from you.
            </p>
          </ScrollReveal>

          {!submitted ? (
            <ScrollReveal delay={0.1}>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                {/* Inquiry type selection */}
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.75rem", display: "block" }}>What brings you here?</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
                    {inquiryTypes.map(type => (
                      <motion.button
                        key={type.value}
                        type="button"
                        onClick={() => setSelectedType(type.value)}
                        whileHover={{ borderColor: "rgba(232, 68, 138, 0.4)", y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem",
                          background: selectedType === type.value ? "var(--color-surface-offset)" : "var(--color-surface)",
                          border: selectedType === type.value ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                          borderRadius: "var(--radius-md)", color: selectedType === type.value ? "var(--color-accent)" : "var(--color-text-muted)",
                          cursor: "pointer", fontSize: "0.8rem", fontWeight: 500, fontFamily: "var(--font-body)", transition: "all 0.2s",
                        }}
                      >
                        {type.icon} {type.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[
                    { label: "Your Name", id: "name", type: "text" },
                    { label: "Email", id: "email", type: "email" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>{f.label}</label>
                      <input type={f.type} id={f.id} name={f.id} required style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={e => e.target.style.borderColor = "var(--color-accent)"} onBlur={e => e.target.style.borderColor = "var(--color-border)"} />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="company" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>Company (optional)</label>
                  <input type="text" id="company" name="company" style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={e => e.target.style.borderColor = "var(--color-accent)"} onBlur={e => e.target.style.borderColor = "var(--color-border)"} />
                </div>

                <div>
                  <label htmlFor="message" style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>Message</label>
                  <textarea id="message" name="message" rows={5} required style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", resize: "vertical", transition: "border-color 0.2s" }} onFocus={e => e.target.style.borderColor = "var(--color-accent)"} onBlur={e => e.target.style.borderColor = "var(--color-border)"} />
                </div>

                <MagneticButton variant="primary">
                  Send Message <ArrowRight size={16} />
                </MagneticButton>
              </form>
            </ScrollReveal>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: "center", padding: "3rem", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-accent)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "0.75rem" }}>Message sent!</h3>
              <p>We&apos;ll get back to you within 24 hours. Thank you for reaching out.</p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
