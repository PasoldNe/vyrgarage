import Header from "../../components/Header";
import Card from "../../components/Card";
import StatusBadge from "../../components/StatusBadge";
import { timelineSteps } from "../../data/acompanhamento";
import { statusConfig } from "../../config/status";

export default function Acompanhamento() {
  const currentStep = 3; // em_execucao = index 3

  return (
    <div className="slide-in max-w-2xl">
      <Header
        title="Acompanhamento em Tempo Real"
        subtitle="Status atual do seu veículo na oficina"
      />

      <Card className="mb-4">
        <div className="flex items-start justify-between">
          <div>
            <div
              className="text-xs font-mono mb-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              OS-2401
            </div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Honda Civic 2021 — BRA-2E19
            </div>
            <div
              className="text-sm mt-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              Revisão completa + troca de óleo
            </div>
          </div>
          <StatusBadge status="em_execucao" />
        </div>
        <div className="flex gap-6 mt-4 text-sm">
          <div>
            <span style={{ color: "var(--color-text-muted)" }}>Mecânico:</span>{" "}
            <span style={{ color: "var(--color-text)" }}>Carlos Souza</span>
          </div>
          <div>
            <span style={{ color: "var(--color-text-muted)" }}>Previsão:</span>{" "}
            <span style={{ color: "var(--color-cyan)" }}>16/09/2026</span>
          </div>
        </div>
      </Card>

      {/* Timeline */}
      <Card className="mb-4">
        <h3
          className="font-semibold text-sm mb-5"
          style={{ color: "var(--color-text)" }}
        >
          Linha do Tempo
        </h3>
        <div className="space-y-0">
          {timelineSteps.map((step, i) => {
            const done = i < currentStep;
            const active = i === currentStep;
            const cfg = statusConfig[step.status];
            return (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={
                      active
                        ? {
                            background: cfg.bg,
                            border: `2px solid ${cfg.color}`,
                            color: cfg.color,
                          }
                        : done
                          ? {
                              background: "rgba(34,197,94,0.15)",
                              color: "#22c55e",
                            }
                          : {
                              background: "var(--color-surface-2)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text-dim)",
                            }
                    }
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div
                      className="w-px flex-1 my-1"
                      style={{
                        background: done
                          ? "rgba(34,197,94,0.3)"
                          : "var(--color-border)",
                        minHeight: "28px",
                      }}
                    />
                  )}
                </div>
                <div className="pb-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: active
                          ? cfg.color
                          : done
                            ? "#22c55e"
                            : "var(--color-text-muted)",
                      }}
                    >
                      {step.label}
                    </span>
                    {active && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full pulse-dot"
                        style={{ background: cfg.bg, color: cfg.color }}
                      >
                        Atual
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {step.desc}
                  </p>
                  {step.time && (
                    <p
                      className="text-xs mt-1 font-mono"
                      style={{ color: "var(--color-text-dim)" }}
                    >
                      {step.time}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Alert */}
      <div
        className="rounded-xl p-4 flex gap-3"
        style={{
          background: "rgba(245,158,11,0.08)",
          border: "1px solid rgba(245,158,11,0.25)",
        }}
      >
        <span className="text-lg">⚠️</span>
        <div>
          <div className="text-sm font-semibold" style={{ color: "#f59e0b" }}>
            Novo problema identificado
          </div>
          <p
            className="text-xs mt-1"
            style={{ color: "var(--color-text-muted)" }}
          >
            Mecânico Carlos identificou desgaste nos amortecedores traseiros.
            Uma sugestão de manutenção preventiva foi adicionada ao seu
            orçamento para aprovação.
          </p>
        </div>
      </div>
    </div>
  );
}
