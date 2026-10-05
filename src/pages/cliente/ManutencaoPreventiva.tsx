import Header from "../../components/Header";
import Card from "../../components/Card";
import { historicoRevisoes, proximasRevisoes } from "../../data/manutencao";

export default function ManutencaoPreventiva() {
  return (
    <div className="slide-in max-w-2xl">
      <Header
        title="Plano de Manutenção Preventiva"
        subtitle="Histórico e próximas revisões do Honda Civic 2021"
      />

      <div
        className="rounded-xl p-4 flex items-center gap-4 mb-5"
        style={{
          background: "rgba(0,212,255,0.06)",
          border: "1px solid rgba(0,212,255,0.2)",
        }}
      >
        <div
          className="text-3xl font-bold font-mono"
          style={{ color: "var(--color-cyan)" }}
        >
          64.820
        </div>
        <div>
          <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            km atual
          </div>
          <div className="text-sm" style={{ color: "var(--color-text)" }}>
            Próxima revisão em{" "}
            <span style={{ color: "var(--color-cyan)" }}>75.000 km</span> —
            faltam ~10.180 km
          </div>
        </div>
      </div>

      <Card className="mb-4">
        <h3
          className="font-semibold text-sm mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Histórico de Revisões
        </h3>
        <div className="space-y-3">
          {historicoRevisoes.map((rev, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-lg"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                style={{ background: "rgba(34,197,94,0.12)" }}
              >
                ✅
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {rev.servico}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {rev.km} km
                  </span>
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {rev.data} · {rev.itens.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3
          className="font-semibold text-sm mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Próximas Revisões Programadas
        </h3>
        <div className="space-y-3">
          {proximasRevisoes.map((rev, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-lg"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid rgba(0,212,255,0.15)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                style={{ background: "rgba(0,212,255,0.1)" }}
              >
                🔧
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {rev.servico}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      color: "var(--color-cyan)",
                      background: "rgba(0,212,255,0.08)",
                    }}
                  >
                    {rev.previsao}
                  </span>
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {rev.km} km · {rev.itens.join(", ")}
                </div>
              </div>
              <button
                className="text-xs px-3 py-1.5 rounded-lg font-medium self-center shrink-0 transition-all hover:opacity-80"
                style={{ background: "var(--color-cyan)", color: "#0f1117" }}
              >
                Agendar
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
