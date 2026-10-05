import Header from "../../components/Header";
import Card from "../../components/Card";
import { faturas } from "../../data/faturamento";

export default function Faturamento() {
  return (
    <div className="slide-in max-w-2xl">
      <Header
        title="Faturamento"
        subtitle="Histórico de notas fiscais, boletos e pagamentos"
      />

      <div className="space-y-3 mb-5">
        {faturas.map((f, i) => (
          <Card key={i}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {f.id}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={
                      f.status === "pago"
                        ? {
                            color: "#22c55e",
                            background: "rgba(34,197,94,0.12)",
                          }
                        : {
                            color: "#f59e0b",
                            background: "rgba(245,158,11,0.12)",
                          }
                    }
                  >
                    {f.status === "pago" ? "Pago" : "Pendente"}
                  </span>
                </div>
                <div className="text-sm" style={{ color: "var(--color-text)" }}>
                  {f.desc}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {f.data}
                </div>
              </div>
              <div className="text-right">
                <div
                  className="text-lg font-bold font-mono"
                  style={{
                    color:
                      f.status === "pago"
                        ? "var(--color-text)"
                        : "var(--color-cyan)",
                  }}
                >
                  R$ {f.valor.toFixed(2)}
                </div>
                <div className="flex gap-2 mt-2 justify-end">
                  <button
                    className="text-xs px-2.5 py-1 rounded-lg transition-all hover:opacity-80"
                    style={{
                      background: "var(--color-surface-2)",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    📄 NFe
                  </button>
                  {f.status === "pendente" && (
                    <button
                      className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all hover:opacity-80"
                      style={{
                        background: "var(--color-cyan)",
                        color: "#0f1117",
                      }}
                    >
                      💳 Pagar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Gateway */}
      <Card>
        <h3
          className="font-semibold text-sm mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Formas de Pagamento
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {["💳 Cartão de Crédito", "🏦 Boleto Bancário", "📱 PIX"].map(
            (m, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 p-3 rounded-lg text-xs font-medium transition-all hover:border-cyan-400/40"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <span className="text-2xl">{m.split(" ")[0]}</span>
                <span>{m.split(" ").slice(1).join(" ")}</span>
              </button>
            ),
          )}
        </div>
      </Card>
    </div>
  );
}
