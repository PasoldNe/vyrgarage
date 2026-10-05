import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { orcamentoItems } from "../../data/orcamento";

export default function Orcamento() {
  const [aprovados, setAprovados] = useState<number[]>([0, 1, 2, 4]);

  const toggle = (i: number) =>
    setAprovados((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  const total = orcamentoItems.reduce(
    (acc, item, i) =>
      aprovados.includes(i) ? acc + item.qtd * item.valor : acc,
    0,
  );

  return (
    <div className="slide-in max-w-2xl">
      <Header
        title="Aprovação de Orçamento"
        subtitle="Revise e autorize os serviços e peças"
      />

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3
            className="font-semibold text-sm"
            style={{ color: "var(--color-text)" }}
          >
            OS-2401 — Honda Civic 2021
          </h3>
          <span
            className="text-xs px-2 py-1 rounded-full"
            style={{ color: "#f59e0b", background: "rgba(245,158,11,0.12)" }}
          >
            Aguardando Aprovação
          </span>
        </div>

        <div className="space-y-2">
          {orcamentoItems.map((item, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all"
              style={{
                background: aprovados.includes(i)
                  ? item.sugerido
                    ? "rgba(245,158,11,0.06)"
                    : "rgba(0,212,255,0.05)"
                  : "var(--color-surface-2)",
                border: `1px solid ${aprovados.includes(i) ? (item.sugerido ? "rgba(245,158,11,0.2)" : "rgba(0,212,255,0.15)") : "var(--color-border)"}`,
              }}
            >
              <div
                className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                style={{
                  background: aprovados.includes(i)
                    ? "var(--color-cyan)"
                    : "transparent",
                  border: aprovados.includes(i)
                    ? "none"
                    : "1.5px solid var(--color-border)",
                }}
              >
                {aprovados.includes(i) && (
                  <span className="text-xs text-black font-bold">✓</span>
                )}
              </div>
              <div className="flex-1">
                <div
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.desc}
                  {item.sugerido && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.12)",
                      }}
                    >
                      Sugerido
                    </span>
                  )}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded"
                    style={{
                      color: item.tipo === "peça" ? "#a855f7" : "#3b82f6",
                      background:
                        item.tipo === "peça"
                          ? "rgba(168,85,247,0.1)"
                          : "rgba(59,130,246,0.1)",
                    }}
                  >
                    {item.tipo === "peça" ? "Peça" : `M.O. ${item.qtd}h`}
                  </span>
                </div>
                {item.tipo === "peça" && (
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Qtd: {item.qtd} × R$ {item.valor.toFixed(2)}
                  </div>
                )}
              </div>
              <div
                className="text-sm font-semibold font-mono"
                style={{ color: "var(--color-text)" }}
              >
                R$ {(item.qtd * item.valor).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between mt-4 pt-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {aprovados.length} de {orcamentoItems.length} itens selecionados
          </div>
          <div className="text-right">
            <div
              className="text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              Total aprovado
            </div>
            <div
              className="text-xl font-bold font-mono"
              style={{ color: "var(--color-cyan)" }}
            >
              R$ {total.toFixed(2)}
            </div>
          </div>
        </div>
      </Card>

      <button
        className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-80"
        style={{ background: "var(--color-cyan)", color: "#0f1117" }}
        onClick={() => alert("Orçamento autorizado com sucesso!")}
      >
        Autorizar Serviços Selecionados
      </button>
    </div>
  );
}
