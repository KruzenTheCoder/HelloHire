"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/shared/MagneticButton";
import { Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase auth.signInWithOtp
    setSent(true);
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "420px", width: "100%", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}>
          <span style={{ color: "var(--color-accent)" }}>H</span><span style={{ color: "var(--color-accent)" }}>H</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.5rem" }}>Welcome back</h1>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "2rem" }}>Sign in to your HelloHire account</p>

        {!sent ? (
          <form onSubmit={handleMagicLink} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ position: "relative" }}>
              <Mail size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-faint)" }} />
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required
                style={{ width: "100%", padding: "0.85rem 1rem 0.85rem 2.75rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }}
                onFocus={(e) => e.target.style.borderColor = "var(--color-accent)"}
                onBlur={(e) => e.target.style.borderColor = "var(--color-border)"}
              />
            </div>
            <MagneticButton variant="primary">
              Send Magic Link <ArrowRight size={16} />
            </MagneticButton>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "0.5rem 0" }}>
              <div style={{ flex: 1, height: "1px", background: "var(--color-divider)" }} />
              <span style={{ fontSize: "0.75rem", color: "var(--color-text-faint)" }}>OR</span>
              <div style={{ flex: 1, height: "1px", background: "var(--color-divider)" }} />
            </div>

            <button type="button" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "0.85rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer", transition: "border-color 0.2s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ padding: "2rem", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-accent)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📧</div>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", marginBottom: "0.5rem" }}>Check your email</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>We sent a magic link to <strong style={{ color: "var(--color-text)" }}>{email}</strong></p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
