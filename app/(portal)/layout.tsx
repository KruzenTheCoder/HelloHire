import Link from "next/link";
import { LayoutDashboard, Users, FileText, MessageSquare, CreditCard, Settings } from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", href: "/employers/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "My Roles", href: "/employers/dashboard", icon: <FileText size={18} /> },
  { label: "Candidates", href: "/employers/candidates", icon: <Users size={18} /> },
  { label: "Messages", href: "/employers/dashboard", icon: <MessageSquare size={18} /> },
  { label: "Billing", href: "/employers/dashboard", icon: <CreditCard size={18} /> },
  { label: "Settings", href: "/employers/dashboard", icon: <Settings size={18} /> },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", background: "var(--color-surface)", borderRight: "1px solid var(--color-divider)", padding: "2rem 1rem", flexShrink: 0 }} className="hidden md:block">
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {sidebarLinks.map(link => (
            <Link key={link.label} href={link.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", color: "var(--color-text-muted)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 500, transition: "all 0.2s" }}>
              <span style={{ color: "var(--color-accent)" }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "2rem clamp(1rem, 3vw, 3rem)", background: "var(--color-bg)" }}>
        {children}
      </main>
    </div>
  );
}
