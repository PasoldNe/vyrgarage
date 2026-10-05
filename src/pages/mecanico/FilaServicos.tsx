import { useState } from "react";
import Card from "../../components/Card";
import StatusBadge from "../../components/StatusBadge";
import PriorityBadge from "../../components/PriorityBadge";
import { servicos } from "../../data/servicos";
import { kanbanCols } from "../../data/fila";
import { statusConfig } from "../../config/status";

export default function FilaServicos() {
  const [view, setView] = useState<"kanban" | "tabela">("kanban");

  return (
    <div className="slide-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-xl font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            Fila de Serviços
          </h1>
          <p
            className="text-sm mt-0.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            {servicos.length} ordens abertas hoje
          </p>
        </div>
        <div
          className="flex gap-1 p-1 rounded-lg"
          style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
          }}
        >
          {(["kanban", "tabela"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all"
              style={
                view === v
                  ? { background: "var(--color-cyan)", color: "#0f1117" }
                  : { color: "var(--color-text-muted)" }
              }
            >
              {v === "kanban" ? "⊞ Kanban" : "≡ Tabela"}
            </button>
          ))}
        </div>
      </div>

      {view === "kanban" ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {kanbanCols.map((col) => {
            const items = servicos.filter((s) => s.status === col.status);
            const cfg = statusConfig[col.status];
            return (
              <div key={col.status} className="shrink-0 w-60">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: cfg.color }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {col.title}
                  </span>
                  <span
                    className="ml-auto text-xs px-1.5 py-0.5 rounded font-mono"
                    style={{
                      background: "var(--color-surface-2)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {items.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {items.map((s) => (
                    <div
                      key={s.id}
                      className="rounded-xl p-3 space-y-2 cursor-pointer transition-all hover:border-opacity-60"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {s.id}
                        </span>
                        <PriorityBadge p={s.prioridade} />
                      </div>
                      <div
                        className="text-sm font-medium leading-snug"
                        style={{ color: "var(--color-text)" }}
                      >
                        {s.cliente}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {s.veiculo}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {s.problema}
                      </div>
                      <div
                        className="flex items-center justify-between text-xs pt-1"
                        style={{ borderTop: "1px solid var(--color-border)" }}
                      >
                        <span style={{ color: "var(--color-text-muted)" }}>
                          {s.mecanico !== "—" ? s.mecanico : "Não atribuído"}
                        </span>
                        <span style={{ color: "var(--color-cyan)" }}>
                          {s.previsao}
                        </span>
                      </div>
                    </div>
                  ))}
                  {items.length === 0 && (
                    <div
                      className="h-16 rounded-xl flex items-center justify-center text-xs"
                      style={{
                        border: "1px dashed var(--color-border)",
                        color: "var(--color-text-dim)",
                      }}
                    >
                      Vazio
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  {[
                    "OS",
                    "Cliente",
                    "Veículo",
                    "Problema",
                    "Mecânico",
                    "Previsão",
                    "Prioridade",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {servicos.map((s, i) => (
                  <tr
                    key={s.id}
                    className="transition-all hover:bg-white/[0.02] cursor-pointer"
                    style={{
                      borderBottom:
                        i < servicos.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <td
                      className="py-3 px-3 font-mono text-xs"
                      style={{ color: "var(--color-cyan)" }}
                    >
                      {s.id}
                    </td>
                    <td
                      className="py-3 px-3 font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {s.cliente}
                    </td>
                    <td
                      className="py-3 px-3 text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {s.veiculo}
                      <br />
                      <span className="font-mono">{s.placa}</span>
                    </td>
                    <td
                      className="py-3 px-3 text-xs max-w-[140px] truncate"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {s.problema}
                    </td>
                    <td
                      className="py-3 px-3 text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {s.mecanico}
                    </td>
                    <td
                      className="py-3 px-3 text-xs font-mono"
                      style={{ color: "var(--color-text)" }}
                    >
                      {s.previsao}
                    </td>
                    <td className="py-3 px-3">
                      <PriorityBadge p={s.prioridade} />
                    </td>
                    <td className="py-3 px-3">
                      <StatusBadge status={s.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
