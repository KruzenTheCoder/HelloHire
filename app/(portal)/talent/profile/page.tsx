import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Profile",
  description: "Manage your HelloHire talent profile.",
};

export default function TalentProfile() {
  const completeness = 70;

  return (
    <div style={{ maxWidth: "700px" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.5rem" }}>My Profile</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", fontSize: "0.9rem" }}>Complete your profile to get matched with opportunities.</p>

      {/* Completeness Bar */}
      <div style={{ padding: "1.5rem", background: "var(--color-surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)", marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text)" }}>Profile Completeness</span>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-accent)" }}>{completeness}%</span>
        </div>
        <div style={{ width: "100%", height: "8px", background: "var(--color-surface-2)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
          <div style={{ width: `${completeness}%`, height: "100%", background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover))", borderRadius: "var(--radius-full)", transition: "width 0.6s ease" }} />
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--color-text-faint)", marginTop: "0.5rem" }}>Add your portfolio and LinkedIn to reach 100%</p>
      </div>

      {/* Profile Form */}
      <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {[
          { label: "Full Name", id: "name", type: "text", value: "Sipho Mthembu" },
          { label: "Email", id: "email", type: "email", value: "sipho@example.com" },
          { label: "Headline", id: "headline", type: "text", value: "Senior Full-Stack Developer" },
          { label: "City", id: "city", type: "text", value: "Cape Town" },
          { label: "LinkedIn URL", id: "linkedin", type: "url", value: "" },
          { label: "Portfolio URL", id: "portfolio", type: "url", value: "" },
        ].map(field => (
          <div key={field.id}>
            <label htmlFor={field.id} style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--color-text-muted)", marginBottom: "0.4rem", display: "block" }}>{field.label}</label>
            <input type={field.type} id={field.id} defaultValue={field.value} style={{ width: "100%", padding: "0.75rem 1rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: "0.9rem", transition: "border-color 0.2s" }} />
          </div>
        ))}

        <button type="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.85rem 2rem", background: "var(--color-accent)", color: "#fff", border: "none", borderRadius: "var(--radius-full)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", alignSelf: "flex-start" }}>
          Save Profile
        </button>
      </form>
    </div>
  );
}
