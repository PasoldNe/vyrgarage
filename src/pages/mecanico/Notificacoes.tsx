import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { servicos } from "../../data/servicos";
import { notifTemplates } from "../../data/notificacoes";

export default function Notificacoes() {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedOS, setSelectedOS] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState<
    { os: string; label: string; time: string }[]
  >([
    { os: "OS-2401", label: "Em Execução", time: "15/09 10:31" },
    { os: "OS-2404", label: "Peça Chegou", time: "15/09 09:05" },
  ]);

  const selectTemplate = (i: number) => {
    setSelected(i);
    setMsg(notifTemplates[i].msg);
  };

  return (
    <div className="slide-in">
      <Header
        title="Disparador de Notificações"
        subtitle="Atualize etapas e notifique clientes automaticamente"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Selecionar OS
            </h3>
            <select
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
              value={selectedOS}
              onChange={(e) => setSelectedOS(e.target.value)}
            >
              <option value="">Selecione uma OS...</option>
              {servicos.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.id} — {s.cliente} ({s.veiculo})
                </option>
              ))}
            </select>
          </Card>

          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Tipo de Notificação
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {notifTemplates.map((t, i) => (
                <button
                  key={i}
                  onClick={() => selectTemplate(i)}
                  className="flex items-center gap-3 p-3 rounded-lg text-left transition-all hover:border-opacity-60"
                  style={{
                    background:
                      selected === i
                        ? "rgba(0,212,255,0.08)"
                        : "var(--color-surface-2)",
                    border: `1px solid ${selected === i ? "rgba(0,212,255,0.3)" : "var(--color-border)"}`,
                  }}
                >
                  <span className="text-xl">{t.icon}</span>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t.label}
                    </div>
                    <div
                      className="text-xs mt-0.5 line-clamp-1"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t.msg}
                    </div>
                  </div>
                  {selected === i && (
                    <span
                      className="ml-auto text-sm"
                      style={{ color: "var(--color-cyan)" }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Mensagem
            </h3>
            <textarea
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-cyan-400/30"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Selecione um template ou escreva a mensagem..."
            />
            <div className="flex gap-2 mt-3">
              {["WhatsApp", "E-mail", "SMS"].map((ch) => (
                <button
                  key={ch}
                  className="flex-1 py-2 rounded-lg text-xs font-medium transition-all hover:opacity-80"
                  style={{
                    background: "var(--color-surface-2)",
                    color: "var(--color-text-muted)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {ch === "WhatsApp" ? "💬" : ch === "E-mail" ? "📧" : "📱"}{" "}
                  {ch}
                </button>
              ))}
            </div>
            <button
              className="w-full mt-3 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-80"
              style={{ background: "var(--color-cyan)", color: "#0f1117" }}
              onClick={() => {
                if (!selectedOS || !msg) {
                  alert("Selecione OS e mensagem");
                  return;
                }
                setSent((prev) => [
                  {
                    os: selectedOS,
                    label:
                      notifTemplates[selected ?? 0]?.label ?? "Personalizada",
                    time: new Date().toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                  ...prev,
                ]);
                alert("Notificação disparada!");
              }}
            >
              🚀 Disparar Notificação
            </button>
          </Card>

          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Notificações Enviadas Hoje
            </h3>
            <div className="space-y-2">
              {sent.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2.5 rounded-lg"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span className="text-green-400 text-sm">✓</span>
                  <div className="flex-1 text-xs">
                    <span
                      className="font-mono"
                      style={{ color: "var(--color-cyan)" }}
                    >
                      {s.os}
                    </span>
                    <span
                      className="mx-1.5"
                      style={{ color: "var(--color-text-dim)" }}
                    >
                      ·
                    </span>
                    <span style={{ color: "var(--color-text)" }}>
                      {s.label}
                    </span>
                  </div>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
