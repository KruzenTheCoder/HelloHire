"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";

const navLinks = [
  { label: "For Employers", href: "/for-employers" },
  { label: "For Talent", href: "/for-talent" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled
            ? "oklch(from #08050A l c h / 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(from #F5F0F7 l c h / 0.08)"
            : "1px solid transparent",
        }}
      >
        <nav
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 3vw, 3rem)",
            height: "72px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
            aria-label="HelloHire Home"
          >
            {/* SVG Logo Mark */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "var(--radius-md)",
                background: "linear-gradient(135deg, #E8448A, #FF5FA0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.9rem",
                color: "#fff",
                letterSpacing: "-0.02em",
                flexShrink: 0,
              }}
            >
              HH
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.1,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Hello<span style={{ color: "var(--color-accent)" }}>Hire</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--color-text)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    "var(--color-text-muted)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton variant="primary" href="/for-employers">
              Hire Now
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          {!mobileOpen && (
            <button
              className="md:hidden flex items-center justify-center ml-auto"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-text)",
                padding: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Menu size={28} />
            </button>
          )}
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "100vw", // Full screen on very small devices
              background: "var(--color-bg)",
              zIndex: 150,
              padding: "6rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              borderLeft: "1px solid rgba(232, 68, 138, 0.15)",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Close Button inside Drawer */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "clamp(1rem, 3vw, 3rem)",
                background: "rgba(232, 68, 138, 0.1)",
                border: "1px solid rgba(232, 68, 138, 0.2)",
                color: "var(--color-text)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 160,
              }}
            >
              <X size={24} />
            </button>

            {/* Decorative background glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(232,68,138,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: -1,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 0",
                      borderBottom: "1px solid rgba(232, 68, 138, 0.1)",
                    }}
                  >
                    {link.label}
                    <span style={{ color: "var(--color-accent)", fontSize: "1.5rem", opacity: 0.5 }}>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Link
                href="/for-employers"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "1rem",
                  background: "var(--color-accent)",
                  color: "#fff",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Hire South African Talent
              </Link>
              <Link
                href="/for-talent"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "1rem",
                  background: "transparent",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Join as Talent
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8, 5, 10, 0.8)",
              backdropFilter: "blur(4px)",
              zIndex: 140,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
