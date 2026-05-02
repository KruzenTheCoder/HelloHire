"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import GlowDivider from "@/components/shared/GlowDivider";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "For Employers", href: "/for-employers" },
    { label: "For Talent", href: "/for-talent" },
    { label: "Pricing", href: "/for-employers#pricing" },
  ],
  Roles: [
    { label: "Software Development", href: "/for-talent" },
    { label: "Operations & Admin", href: "/for-talent" },
    { label: "Marketing & Content", href: "/for-talent" },
    { label: "Design & UX", href: "/for-talent" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to Supabase waitlist
    setSubscribed(true);
  };

  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-divider)",
      }}
      role="contentinfo"
    >
      {/* Newsletter Section */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "4rem clamp(1rem, 3vw, 3rem) 3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2rem)",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "0.5rem",
              }}
            >
              Stay in the loop
            </h3>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                maxWidth: "400px",
              }}
            >
              Get insights on remote hiring, talent market trends, and HelloHire
              updates.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            {!subscribed ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  aria-label="Email address for newsletter"
                  style={{
                    padding: "0.75rem 1.25rem",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-full)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    minWidth: "280px",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    background: "var(--color-accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "var(--radius-full)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  Subscribe <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "var(--color-surface-2)",
                  borderRadius: "var(--radius-full)",
                  color: "var(--color-success)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                ✓ You&apos;re in! 🎉
              </motion.div>
            )}
          </form>
        </div>

        <GlowDivider className="mb-12" />

        {/* Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              {/* Logo Mark */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "linear-gradient(135deg, #E8448A, #FF5FA0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                }}
              >
                HH
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Hello<span style={{ color: "var(--color-accent)" }}>Hire</span>
              </span>
            </Link>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: "260px",
                marginBottom: "1.5rem",
              }}
            >
              Connecting global companies with elite South African talent.
              Hire smarter. Hire South Africa.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.8rem",
                color: "var(--color-text-faint)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <MapPin size={14} /> Cape Town, South Africa
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Mail size={14} /> hello@hellohire.co.za
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Phone size={14} /> +27 21 000 0000
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "var(--color-text)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--color-accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--color-text-muted)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-divider)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "var(--color-text-faint)",
          }}
        >
          <span>© {new Date().getFullYear()} HelloHire. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
