"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionLabel from "@/components/shared/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { SplitText, GradientWipe, LineReveal, PageTransition } from "@/components/shared/TextReveal";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for active job seekers looking for an edge.",
    features: [
      "Access to private talent community",
      "Weekly remote job drops",
      "Basic resume review (1/year)",
      "Community Q&A support"
    ],
    buttonText: "Join Starter",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For ambitious professionals accelerating their career.",
    features: [
      "Everything in Starter",
      "1x Monthly 30-min coaching call",
      "Priority resume reviews",
      "Direct intro to hiring partners",
      "Interview prep materials"
    ],
    buttonText: "Join Pro",
    popular: true,
  },
  {
    name: "VIP",
    price: "$99",
    description: "The ultimate white-glove placement experience.",
    features: [
      "Everything in Pro",
      "Dedicated talent success manager",
      "Direct WhatsApp support",
      "Unlimited resume/portfolio reviews",
      "Guaranteed partner interviews"
    ],
    buttonText: "Apply for VIP",
    popular: false,
  }
];

export default function MembershipClient() {
  return (
    <PageTransition>
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(232, 68, 138, 0.04), transparent 60%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <SectionLabel text="TALENT NETWORK" />
          </ScrollReveal>
          
          <LineReveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 2rem + 4vw, 5rem)", fontWeight: 700, color: "var(--color-text)", marginTop: "1rem", marginBottom: "1.5rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              <SplitText delay={0.2}>Become a</SplitText>{" "}
              <GradientWipe delay={0.6}>Member.</GradientWipe>
            </h1>
          </LineReveal>

          <LineReveal delay={0.3}>
            <p style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)", color: "var(--color-text-muted)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
              Join the exclusive community of elite South African professionals. Get the support, resources, and connections you need to land your dream remote role.
            </p>
          </LineReveal>
        </div>
      </section>

      <section style={{ padding: "0 clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
            {tiers.map((tier, i) => (
              <div key={i} style={{ flex: "1 1 300px", maxWidth: "350px", width: "100%" }}>
                <ScrollReveal delay={0.2 + i * 0.1}>
                  <Card style={{ 
                    position: "relative", 
                    display: "flex", 
                    flexDirection: "column", 
                    border: tier.popular ? "1px solid var(--color-accent)" : "1px solid var(--color-border)", 
                    background: "var(--color-surface)", 
                    boxShadow: tier.popular ? "0 0 50px rgba(232,68,138,0.2)" : "0 0 30px rgba(0,0,0,0.2)",
                    borderRadius: "var(--radius-xl)",
                    transform: tier.popular ? "scale(1.05)" : "scale(1)",
                    zIndex: tier.popular ? 10 : 1
                  }}>
                  {tier.popular && (
                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
                      <span style={{ background: "var(--color-accent)", color: "#fff", padding: "0.25rem 1rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(232,68,138,0.4)" }}>
                        Recommended
                      </span>
                    </div>
                  )}
                  <CardHeader style={{ textAlign: "center", padding: "2.5rem 2.5rem 2rem", borderBottom: "1px solid var(--color-border)" }}>
                    <CardTitle style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>{tier.name}</CardTitle>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", height: "2.5rem", lineHeight: 1.6, maxWidth: "240px", margin: "0 auto" }}>{tier.description}</p>
                    <div style={{ marginTop: "2rem", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "0.25rem" }}>
                      <span style={{ fontSize: "3rem", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em", lineHeight: 1 }}>{tier.price}</span>
                      <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>/month</span>
                    </div>
                  </CardHeader>
                  <CardContent style={{ flex: 1, display: "flex", flexDirection: "column", padding: "2rem 2.5rem 2.5rem" }}>
                    <ul style={{ marginBottom: "2.5rem", flex: 1 }}>
                      {tier.features.map((feature, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                          <div style={{ marginTop: "0.125rem", display: "flex", height: "1.25rem", width: "1.25rem", flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "9999px", background: "rgba(232,68,138,0.1)", color: "var(--color-accent)" }}>
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span style={{ lineHeight: 1.6 }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button style={{ 
                      width: "100%", 
                      padding: "1rem 1.5rem", 
                      borderRadius: "var(--radius-full)", 
                      fontWeight: 700, 
                      fontSize: "0.85rem", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.05em", 
                      transition: "all 0.2s ease",
                      background: tier.popular ? "var(--color-accent)" : "var(--color-surface-2)",
                      color: tier.popular ? "#fff" : "var(--color-text)",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: tier.popular ? "0 4px 14px rgba(232,68,138,0.25)" : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (tier.popular) e.currentTarget.style.background = "var(--color-accent-hover)";
                      else e.currentTarget.style.background = "var(--color-border)";
                    }}
                    onMouseLeave={(e) => {
                      if (tier.popular) e.currentTarget.style.background = "var(--color-accent)";
                      else e.currentTarget.style.background = "var(--color-surface-2)";
                    }}
                    >
                      {tier.buttonText}
                    </button>
                  </CardContent>
                </Card>
              </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
