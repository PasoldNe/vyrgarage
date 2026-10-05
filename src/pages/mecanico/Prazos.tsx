import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import StatusBadge from "../../components/StatusBadge";
import { servicos } from "../../data/servicos";

export default function Prazos() {
  const [items, setItems] = useState(
    servicos
      .filter((s) => s.status !== "pronto")
      .map((s) => ({ ...s, novaData: s.previsao })),
  );

  const capacidade = [
    { mecanico: "Carlos Souza", oss: 2, horasDisponiveis: 4 },
    { mecanico: "Marcos Lima", oss: 1, horasDisponiveis: 7 },
    { mecanico: "Lucas Pereira", oss: 1, horasDisponiveis: 6 },
  ];

  return (
    <div className="slide-in">
      <Header
        title="Gestão de Prazos"
        subtitle="Ajuste datas previstas com base na capacidade da equipe"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
        {capacidade.map((c, i) => (
          <Card key={i}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: "rgba(0,212,255,0.12)",
                  color: "var(--color-cyan)",
                }}
              >
                {c.mecanico
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  {c.mecanico}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {c.oss} OS ativas
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: "var(--color-text-muted)" }}>
                    Horas disponíveis hoje
                  </span>
                  <span
                    style={{
                      color: c.horasDisponiveis < 4 ? "#f59e0b" : "#22c55e",
                    }}
                  >
                    {c.horasDisponiveis}h
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "var(--color-surface-2)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(c.horasDisponiveis / 8) * 100}%`,
                      background:
                        c.horasDisponiveis < 4
                          ? "#f59e0b"
                          : "var(--color-cyan)",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h3
          className="font-semibold text-sm mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Ajuste de Prazos por OS
        </h3>
        <div className="space-y-2">
          {items.map((s, i) => (
            <div
              key={s.id}
              className="flex items-center gap-4 p-3 rounded-lg"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="font-mono text-xs shrink-0"
                style={{ color: "var(--color-cyan)" }}
              >
                {s.id}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--color-text)" }}
                >
                  {s.cliente}
                </div>
                <div
                  className="text-xs truncate"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {s.problema}
                </div>
              </div>
              <StatusBadge status={s.status} />
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Previsão:
                </span>
                <input
                  type="date"
                  className="text-xs px-2 py-1 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400/30"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-mono)",
                  }}
                  value={s.novaData.split("/").reverse().join("-")}
                  onChange={(e) => {
                    const val = e.target.value.split("-").reverse().join("/");
                    setItems((prev) =>
                      prev.map((x, j) =>
                        j === i ? { ...x, novaData: val } : x,
                      ),
                    );
                  }}
                />
              </div>
              <button
                className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all hover:opacity-80 shrink-0"
                style={{
                  background: "rgba(0,212,255,0.1)",
                  color: "var(--color-cyan)",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                Salvar
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
