"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { formatNumber } from "@/lib/utils";

const stats = [
  { value: 150, suffix: "+", label: "Successful Placements" },
  { value: 98, suffix: "%", label: "Retention Rate" },
  { value: 47, suffix: "", label: "Days Avg Time-to-Hire" },
  { value: 12, suffix: "+", label: "Countries Served" },
  { value: 0, suffix: "", label: "Hidden Fees", prefix: "R" },
];

function StatItem({ value, suffix, label, prefix }: { value: number; suffix: string; label: string; prefix?: string }) {
  const { count, ref } = useAnimatedCounter(value, 2000);

  return (
    <div ref={ref} style={{ textAlign: "center", flex: "1 1 150px" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)", fontWeight: 700, color: "var(--color-text)", lineHeight: 1 }}>
        {prefix || ""}{formatNumber(count)}{suffix}
      </div>
      <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginTop: "0.5rem", letterSpacing: "0.05em" }}>{label}</p>
    </div>
  );
}

export default function StatsTicker() {
  return (
    <section style={{ padding: "4rem clamp(1rem, 3vw, 3rem)", background: "linear-gradient(180deg, var(--color-surface-2), var(--color-bg))", borderTop: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center", alignItems: "center" }}>
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
