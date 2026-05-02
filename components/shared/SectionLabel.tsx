"use client";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`section-label inline-block ${className}`}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: "var(--color-accent)",
      }}
    >
      {text}
    </span>
  );
}
