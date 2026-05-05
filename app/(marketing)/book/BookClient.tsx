"use client";

import { Calendar, Clock, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionLabel from "@/components/shared/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { SplitText, GradientWipe, LineReveal, PageTransition } from "@/components/shared/TextReveal";

const services = [
  {
    title: "Resume Deep Dive",
    duration: "30 min",
    price: "$49",
    description: "A focused session to review your resume line-by-line and strategize improvements.",
    link: process.env.NEXT_PUBLIC_CALENDAR_RESUME || "#",
    icon: <Clock className="w-5 h-5 text-[var(--color-accent)]" />
  },
  {
    title: "Interview Prep",
    duration: "45 min",
    price: "$79",
    description: "Mock interview practice with real-time feedback and behavioral question strategies.",
    link: process.env.NEXT_PUBLIC_CALENDAR_COACH || "#",
    icon: <Video className="w-5 h-5 text-[var(--color-accent)]" />,
    popular: true
  },
  {
    title: "Career Strategy",
    duration: "60 min",
    price: "$119",
    description: "Comprehensive planning, positioning, and negotiation tactics for your next big move.",
    link: process.env.NEXT_PUBLIC_CALENDAR_STRATEGY || "#",
    icon: <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
  }
];

export default function BookClient() {
  return (
    <PageTransition>
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(232, 68, 138, 0.04), transparent 60%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <SectionLabel text="1:1 COACHING" />
          </ScrollReveal>
          
          <LineReveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 2rem + 4vw, 5rem)", fontWeight: 700, color: "var(--color-text)", marginTop: "1rem", marginBottom: "1.5rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              <SplitText delay={0.2}>Book a Career</SplitText>{" "}
              <GradientWipe delay={0.6}>Session.</GradientWipe>
            </h1>
          </LineReveal>

          <LineReveal delay={0.3}>
            <p style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)", color: "var(--color-text-muted)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
              Level up your remote career with personalized guidance from industry experts. Select a session type below to see available times.
            </p>
          </LineReveal>
        </div>
      </section>

      <section style={{ padding: "0 clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                <Card style={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  border: service.popular ? "1px solid var(--color-accent)" : "1px solid var(--color-border)", 
                  background: "var(--color-surface)", 
                  boxShadow: service.popular ? "0 0 40px rgba(232,68,138,0.15)" : "0 0 30px rgba(0,0,0,0.2)",
                  borderRadius: "var(--radius-xl)",
                  position: "relative",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  {service.popular && (
                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
                      <span style={{ background: "var(--color-accent)", color: "#fff", padding: "0.25rem 1rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(232,68,138,0.4)" }}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader style={{ padding: "2.5rem 2.5rem 1.5rem" }}>
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(232,68,138,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                      {service.icon}
                    </div>
                    <CardTitle style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-text)" }}>{service.title}</CardTitle>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", marginTop: "1rem" }}>
                      <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-text)", lineHeight: 1, letterSpacing: "-0.02em" }}>{service.price}</span>
                      <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>/ {service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 2.5rem 2.5rem" }}>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", flex: 1, lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    <a href={service.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", marginTop: "auto", textDecoration: "none" }}>
                      <button style={{ 
                        width: "100%", 
                        padding: "1rem 1.5rem", 
                        borderRadius: "var(--radius-full)", 
                        fontWeight: 700, 
                        fontSize: "0.85rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.05em", 
                        transition: "all 0.2s ease",
                        background: service.popular ? "var(--color-accent)" : "var(--color-surface-2)",
                        color: service.popular ? "#fff" : "var(--color-text)",
                        border: "none",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        if (!service.popular) e.currentTarget.style.background = "var(--color-border)";
                      }}
                      onMouseLeave={(e) => {
                        if (!service.popular) e.currentTarget.style.background = "var(--color-surface-2)";
                      }}
                      >
                        Select Time →
                      </button>
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
