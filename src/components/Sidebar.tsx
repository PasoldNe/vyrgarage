import type { UserRole } from "../types";

export default function Sidebar<T extends string>({
  role,
  items,
  active,
  onSelect,
  onRoleChange,
}: {
  role: UserRole;
  items: { id: T; label: string; icon: string }[];
  active: T;
  onSelect: (id: T) => void;
  onRoleChange: () => void;
}) {
  return (
    <aside
      className="flex flex-col w-64 min-h-screen shrink-0"
      style={{
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-5 py-5"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "var(--color-cyan)", color: "#0f1117" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </div>
        <div>
          <div
            className="text-sm font-bold tracking-wide"
            style={{ color: "var(--color-text)" }}
          >
            AutoGestor
          </div>
          <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {role === "cliente" ? "Portal do Cliente" : "Painel Mecânico"}
          </div>
        </div>
      </div>

      {/* Role switcher */}
      <div
        className="px-4 py-3"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <button
          onClick={onRoleChange}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:opacity-80"
          style={{
            background: "rgba(0,212,255,0.08)",
            color: "var(--color-cyan)",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
        >
          <span>🔄</span>
          Trocar para {role === "cliente" ? "Mecânico" : "Cliente"}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-all"
            style={
              active === item.id
                ? {
                    background: "rgba(0,212,255,0.12)",
                    color: "var(--color-cyan)",
                    borderLeft: "2px solid var(--color-cyan)",
                    paddingLeft: "10px",
                  }
                : { color: "var(--color-text-muted)" }
            }
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* User */}
      <div
        className="px-4 py-4"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{
              background: "rgba(0,212,255,0.15)",
              color: "var(--color-cyan)",
            }}
          >
            {role === "cliente" ? "RC" : "CS"}
          </div>
          <div>
            <div
              className="text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              {role === "cliente" ? "Rafael Costa" : "Carlos Souza"}
            </div>
            <div
              className="text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              {role === "cliente" ? "cliente@email.com" : "mecânico sênior"}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
