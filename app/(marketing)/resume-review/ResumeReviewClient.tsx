"use client";

import { Upload } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionLabel from "@/components/shared/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { SplitText, GradientWipe, LineReveal, PageTransition } from "@/components/shared/TextReveal";

export default function ResumeReviewClient() {
  return (
    <PageTransition>
      <section style={{ padding: "10rem clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(232, 68, 138, 0.04), transparent 60%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <SectionLabel text="CAREER SERVICES" />
          </ScrollReveal>
          
          <LineReveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 2rem + 4vw, 5rem)", fontWeight: 700, color: "var(--color-text)", marginTop: "1rem", marginBottom: "1.5rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              <SplitText delay={0.2}>Expert Resume</SplitText>{" "}
              <GradientWipe delay={0.6}>Review.</GradientWipe>
            </h1>
          </LineReveal>

          <LineReveal delay={0.3}>
            <p style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)", color: "var(--color-text-muted)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
              Get actionable feedback from recruiters who hire for top US and EU companies. Stand out from the crowd and land more interviews.
            </p>
          </LineReveal>
        </div>
      </section>

      <section style={{ padding: "0 clamp(1rem, 3vw, 3rem) var(--spacing-section)", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            <ScrollReveal delay={0.2} className="md:col-span-2">
              <div className="sticky top-32 space-y-6">
                <Card style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", boxShadow: "0 0 40px rgba(0,0,0,0.2)", borderRadius: "var(--radius-xl)" }}>
                  <CardHeader style={{ padding: "2.5rem 2.5rem 1.5rem" }}>
                    <CardTitle style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-text)" }}>What's included?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4" style={{ padding: "0 2.5rem 2.5rem" }}>
                    <ul className="space-y-4 text-[var(--color-text-muted)] text-sm">
                      {[
                        "Line-by-line ATS optimization",
                        "Impact-driven bullet point rewrite",
                        "Design & formatting polish",
                        "48-hour turnaround time",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(232,68,138,0.15)] text-[var(--color-accent)]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </div>
                          <span style={{ fontSize: "1rem", lineHeight: 1.6 }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="md:col-span-3">
              <Card style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", boxShadow: "0 0 40px rgba(0,0,0,0.2)", borderRadius: "var(--radius-xl)" }}>
                <CardHeader style={{ padding: "2.5rem 2.5rem 2rem", borderBottom: "1px solid var(--color-border)", marginBottom: "2rem" }}>
                  <CardTitle style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--color-text)" }}>Submit your resume</CardTitle>
                  <CardDescription style={{ color: "var(--color-text-muted)", fontSize: "1rem", marginTop: "0.5rem" }}>
                    Upload your current CV and tell us about your goals.
                  </CardDescription>
                </CardHeader>
                <CardContent style={{ padding: "0 2.5rem 2.5rem" }}>
                  <form action="/api/resume-submit" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                      <div>
                        <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>FIRST NAME</label>
                        <input type="text" placeholder="Jane" name="firstName" required style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--color-border)"} />
                      </div>
                      <div>
                        <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>LAST NAME</label>
                        <input type="text" placeholder="Doe" name="lastName" required style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--color-border)"} />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>EMAIL ADDRESS</label>
                      <input type="email" placeholder="jane@example.com" name="email" required style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--color-border)"} />
                    </div>

                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>TARGET ROLE</label>
                      <input type="text" placeholder="e.g. Senior Frontend Developer" name="role" required style={{ width: "100%", padding: "0.8rem 1rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"} onBlur={(e) => e.target.style.borderColor = "var(--color-border)"} />
                    </div>

                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.5rem", display: "block" }}>UPLOAD RESUME (PDF, DOCX)</label>
                      <div className="group relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl text-center transition-all cursor-pointer overflow-hidden" style={{ padding: "3rem 2rem", borderColor: "var(--color-border)", background: "var(--color-surface-2)", minHeight: "160px" }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(to bottom, transparent, rgba(232,68,138,0.05))" }} />
                        <Upload className="relative z-10 mx-auto h-8 w-8 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors mb-3" />
                        <p className="relative z-10 text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                          Drag & drop your file here or <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>browse</span>
                        </p>
                      </div>
                    </div>

                    <div style={{ marginTop: "1rem" }}>
                      <button type="submit" style={{ width: "100%", padding: "1rem 1.5rem", borderRadius: "var(--radius-full)", background: "var(--color-accent)", color: "#fff", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", border: "none", cursor: "pointer", transition: "all 0.2s ease", boxShadow: "0 4px 14px rgba(232,68,138,0.25)" }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-accent-hover)"} onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-accent)"}>
                        Submit for Review
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
