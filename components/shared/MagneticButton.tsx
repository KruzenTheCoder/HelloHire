"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  className = "",
  variant = "primary",
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    variant === "primary"
      ? {
          background: "var(--color-accent)",
          color: "#FFFFFF",
          border: "none",
          boxShadow: "0 0 30px oklch(from #E8448A l c h / 0.25)",
        }
      : {
          background: "transparent",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
        };

  const hoverStyles =
    variant === "primary"
      ? {
          background: "var(--color-accent-hover)",
          boxShadow: "0 0 50px oklch(from #E8448A l c h / 0.35)",
        }
      : {
          borderColor: "var(--color-accent)",
          color: "var(--color-accent)",
        };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      whileHover={hoverStyles}
      style={{
        ...baseStyles,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.875rem 2rem",
        borderRadius: "var(--radius-full)",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "0.95rem",
        letterSpacing: "0.01em",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
        whiteSpace: "nowrap" as const,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
