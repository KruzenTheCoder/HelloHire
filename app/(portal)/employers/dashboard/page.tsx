import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description: "Manage your role requests, candidates, and placements.",
};

const mockRoles = [
  { title: "Senior React Developer", status: "Shortlist Ready", candidates: 4, created: "2024-01-15" },
  { title: "Virtual Assistant", status: "Interviewing", candidates: 3, created: "2024-01-20" },
  { title: "Data Analyst", status: "Searching", candidates: 0, created: "2024-02-01" },
];

const statusColors: Record<string, string> = {
  "Brief Submitted": "var(--color-text-faint)",
  "Searching": "#F59E0B",
  "Shortlist Ready": "#3B82F6",
  "Interviewing": "#8B5CF6",
  "Placed": "var(--color-success)",
};

export default function EmployerDashboard() {
  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.5rem" }}>Dashboard</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", fontSize: "0.9rem" }}>Welcome back! Here&apos;s an overview of your hiring activity.</p>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
        {[
          { label: "Active Roles", value: "3" },
          { label: "Candidates in Pipeline", value: "7" },
          { label: "Placements", value: "2" },
          { label: "Avg Time to Hire", value: "41 days" },
        ].map(stat => (
          <div key={stat.label} style={{ padding: "1.5rem", background: "var(--color-surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--color-text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.label}</p>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--color-text)" }}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Roles Table */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "1rem" }}>Active Role Requests</h2>
      <div style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-divider)" }}>
              {["Role", "Status", "Candidates", "Created"].map(h => (
                <th key={h} style={{ padding: "1rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockRoles.map(role => (
              <tr key={role.title} style={{ borderBottom: "1px solid var(--color-divider)" }}>
                <td style={{ padding: "1rem", fontWeight: 500, color: "var(--color-text)", fontSize: "0.9rem" }}>{role.title}</td>
                <td style={{ padding: "1rem" }}>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 600, background: "var(--color-surface-2)", color: statusColors[role.status] || "var(--color-text-muted)" }}>{role.status}</span>
                </td>
                <td style={{ padding: "1rem", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{role.candidates}</td>
                <td style={{ padding: "1rem", color: "var(--color-text-faint)", fontSize: "0.85rem" }}>{role.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
