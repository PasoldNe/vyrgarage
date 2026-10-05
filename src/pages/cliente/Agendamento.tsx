import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Agendamento() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    veiculo: "",
    placa: "",
    ano: "",
    problema: "",
    reclamacao: "",
    atencao: "",
    observacoes: "",
    data: "",
    horario: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const inputCls =
    "w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-cyan-400/30";
  const inputStyle = {
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
  };

  return (
    <div className="slide-in max-w-2xl">
      <Header
        title="Agendamento"
        subtitle="Agende uma revisão ou diagnóstico para seu veículo"
      />

      {/* Steps */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer"
              onClick={() => s < step && setStep(s)}
              style={
                s <= step
                  ? { background: "var(--color-cyan)", color: "#0f1117" }
                  : {
                      background: "var(--color-surface-2)",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }
              }
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className="w-12 h-px"
                style={{
                  background:
                    s < step ? "var(--color-cyan)" : "var(--color-border)",
                }}
              />
            )}
          </div>
        ))}
        <div
          className="ml-3 text-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          {
            ["Dados do Veículo", "Detalhes do Problema", "Data e Confirmação"][
              step - 1
            ]
          }
        </div>
      </div>

      <Card>
        {step === 1 && (
          <div className="space-y-4">
            <h3
              className="font-semibold text-sm mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Dados do Veículo
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  className="block text-xs mb-1.5 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Veículo / Modelo
                </label>
                <input
                  className={inputCls}
                  style={inputStyle}
                  placeholder="Ex: Honda Civic"
                  value={form.veiculo}
                  onChange={(e) => update("veiculo", e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Placa
                </label>
                <input
                  className={inputCls}
                  style={inputStyle}
                  placeholder="BRA-0000"
                  value={form.placa}
                  onChange={(e) => update("placa", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-xs mb-1.5 font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Ano do Veículo
              </label>
              <input
                className={inputCls}
                style={inputStyle}
                placeholder="2021"
                value={form.ano}
                onChange={(e) => update("ano", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3
              className="font-semibold text-sm mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Detalhes do Problema
            </h3>
            <div>
              <label
                className="block text-xs mb-1.5 font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Descrição do Problema *
              </label>
              <textarea
                className={inputCls}
                style={inputStyle}
                rows={3}
                placeholder="Descreva o que está ocorrendo com seu veículo..."
                value={form.problema}
                onChange={(e) => update("problema", e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-xs mb-1.5 font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Reclamações
              </label>
              <textarea
                className={inputCls}
                style={inputStyle}
                rows={2}
                placeholder="Barulhos, vibrações, odores incomuns..."
                value={form.reclamacao}
                onChange={(e) => update("reclamacao", e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-xs mb-1.5 font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Pontos de Atenção
              </label>
              <textarea
                className={inputCls}
                style={inputStyle}
                rows={2}
                placeholder="Luz de advertência, comportamento fora do normal..."
                value={form.atencao}
                onChange={(e) => update("atencao", e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-xs mb-1.5 font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Observações do Dia a Dia
              </label>
              <textarea
                className={inputCls}
                style={inputStyle}
                rows={2}
                placeholder="Uso diário, quilometragem, tipo de trajeto..."
                value={form.observacoes}
                onChange={(e) => update("observacoes", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3
              className="font-semibold text-sm mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Data e Confirmação
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  className="block text-xs mb-1.5 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Data Preferencial
                </label>
                <input
                  type="date"
                  className={inputCls}
                  style={inputStyle}
                  value={form.data}
                  onChange={(e) => update("data", e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Horário
                </label>
                <select
                  className={inputCls}
                  style={inputStyle}
                  value={form.horario}
                  onChange={(e) => update("horario", e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option>08:00 – 09:00</option>
                  <option>09:00 – 10:00</option>
                  <option>10:00 – 11:00</option>
                  <option>13:00 – 14:00</option>
                  <option>14:00 – 15:00</option>
                  <option>15:00 – 16:00</option>
                </select>
              </div>
            </div>

            {/* Resumo */}
            <div
              className="rounded-lg p-4 space-y-2 text-sm"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="font-medium mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Resumo do Agendamento
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-muted)" }}>
                  Veículo
                </span>
                <span style={{ color: "var(--color-text)" }}>
                  {form.veiculo || "—"} {form.ano && `(${form.ano})`}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-muted)" }}>Placa</span>
                <span style={{ color: "var(--color-text)" }}>
                  {form.placa || "—"}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-muted)" }}>Data</span>
                <span style={{ color: "var(--color-text)" }}>
                  {form.data || "—"}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-muted)" }}>
                  Horário
                </span>
                <span style={{ color: "var(--color-text)" }}>
                  {form.horario || "—"}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-80"
              style={{
                background: "var(--color-surface-2)",
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)",
              }}
            >
              Voltar
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={() =>
              step < 3
                ? setStep((s) => s + 1)
                : alert("Agendamento confirmado!")
            }
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
            style={{ background: "var(--color-cyan)", color: "#0f1117" }}
          >
            {step < 3 ? "Próximo" : "Confirmar Agendamento"}
          </button>
        </div>
      </Card>
    </div>
  );
}
