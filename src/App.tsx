import { useState } from "react";
import type { UserRole, ClientView, MecanicoView } from "./types";
import Sidebar from "./components/Sidebar";
import { clientMenuItems, mecanicoMenuItems } from "./config/navigation";
import Agendamento from "./pages/cliente/Agendamento";
import Acompanhamento from "./pages/cliente/Acompanhamento";
import Orcamento from "./pages/cliente/Orcamento";
import ManutencaoPreventiva from "./pages/cliente/ManutencaoPreventiva";
import Faturamento from "./pages/cliente/Faturamento";
import FilaServicos from "./pages/mecanico/FilaServicos";
import Diagnostico from "./pages/mecanico/Diagnostico";
import Prazos from "./pages/mecanico/Prazos";
import Notificacoes from "./pages/mecanico/Notificacoes";

export default function App() {
  const [role, setRole] = useState<UserRole>("cliente");
  const [clientView, setClientView] = useState<ClientView>("agendamento");
  const [mecanicoView, setMecanicoView] = useState<MecanicoView>("fila");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderClientView = () => {
    switch (clientView) {
      case "agendamento":
        return <Agendamento />;
      case "acompanhamento":
        return <Acompanhamento />;
      case "orcamento":
        return <Orcamento />;
      case "manutencao":
        return <ManutencaoPreventiva />;
      case "faturamento":
        return <Faturamento />;
    }
  };

  const renderMecanicoView = () => {
    switch (mecanicoView) {
      case "fila":
        return <FilaServicos />;
      case "diagnostico":
        return <Diagnostico />;
      case "prazos":
        return <Prazos />;
      case "notificacoes":
        return <Notificacoes />;
    }
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        background: "var(--color-background)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 lg:hidden"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static z-30 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {role === "cliente" ? (
          <Sidebar
            role={role}
            items={clientMenuItems}
            active={clientView}
            onSelect={(v) => {
              setClientView(v);
              setSidebarOpen(false);
            }}
            onRoleChange={() => setRole("mecanico")}
          />
        ) : (
          <Sidebar
            role={role}
            items={mecanicoMenuItems}
            active={mecanicoView}
            onSelect={(v) => {
              setMecanicoView(v);
              setSidebarOpen(false);
            }}
            onRoleChange={() => setRole("cliente")}
          />
        )}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div
          className="lg:hidden flex items-center gap-3 px-4 py-3 sticky top-0 z-10"
          style={{
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            ☰
          </button>
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            AutoGestor
          </span>
        </div>

        <main className="flex-1 p-6">
          {role === "cliente" ? renderClientView() : renderMecanicoView()}
        </main>
      </div>
    </div>
  );
}
