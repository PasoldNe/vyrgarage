import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { estoqueItems } from "../../data/estoque";

export default function Diagnostico() {
  const [pecas, setPecas] = useState<
    { item: (typeof estoqueItems)[0]; qtd: number; horas: number }[]
  >([]);
  const [diag, setDiag] = useState("");
  const [obs, setObs] = useState("");

  const addPeca = (item: (typeof estoqueItems)[0]) => {
    if (!pecas.find((p) => p.item.cod === item.cod)) {
      setPecas((prev) => [...prev, { item, qtd: 1, horas: 0 }]);
    }
  };

  const totalPecas = pecas.reduce((a, p) => a + p.item.preco * p.qtd, 0);
  const totalMdo = pecas.reduce((a, p) => a + p.horas * 120, 0);

  const inputCls =
    "w-full px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-cyan-400/30";
  const inputStyle = {
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
  };

  return (
    <div className="slide-in">
      <Header
        title="Gerador de Diagnóstico"
        subtitle="OS-2402 — Juliana Torres · Toyota Corolla 2020"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left */}
        <div className="space-y-4">
          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Diagnóstico Técnico
            </h3>
            <textarea
              className={inputCls}
              style={inputStyle}
              rows={4}
              placeholder="Descreva o diagnóstico técnico detalhado..."
              value={diag}
              onChange={(e) => setDiag(e.target.value)}
            />
            <textarea
              className={`${inputCls} mt-3`}
              style={inputStyle}
              rows={2}
              placeholder="Observações adicionais..."
              value={obs}
              onChange={(e) => setObs(e.target.value)}
            />
          </Card>

          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Peças do Estoque
            </h3>
            <div className="space-y-1.5">
              {estoqueItems.map((item) => (
                <div
                  key={item.cod}
                  className="flex items-center gap-3 p-2.5 rounded-lg"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex-1">
                    <div
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.nome}
                    </div>
                    <div
                      className="text-xs font-mono"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item.cod} · {item.estoque} em estoque
                    </div>
                  </div>
                  <div
                    className="text-xs font-mono font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    R$ {item.preco.toFixed(2)}
                  </div>
                  <button
                    onClick={() => addPeca(item)}
                    disabled={!!pecas.find((p) => p.item.cod === item.cod)}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all hover:opacity-80 disabled:opacity-40"
                    style={{
                      background: "var(--color-cyan)",
                      color: "#0f1117",
                    }}
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <Card>
            <h3
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-text)" }}
            >
              Orçamento em Construção
            </h3>
            {pecas.length === 0 ? (
              <div
                className="flex items-center justify-center h-20 text-sm rounded-lg"
                style={{
                  border: "1px dashed var(--color-border)",
                  color: "var(--color-text-dim)",
                }}
              >
                Adicione peças do estoque
              </div>
            ) : (
              <div className="space-y-2">
                {pecas.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-lg"
                    style={{
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="flex-1">
                      <div
                        className="text-xs font-medium"
                        style={{ color: "var(--color-text)" }}
                      >
                        {p.item.nome}
                      </div>
                      <div className="flex gap-3 mt-1.5">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="text-xs"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            Qtd
                          </span>
                          <input
                            type="number"
                            min={1}
                            value={p.qtd}
                            onChange={(e) =>
                              setPecas((prev) =>
                                prev.map((x, j) =>
                                  j === i ? { ...x, qtd: +e.target.value } : x,
                                ),
                              )
                            }
                            className="w-12 text-center text-xs px-1 py-0.5 rounded"
                            style={{
                              background: "var(--color-surface)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text)",
                            }}
                          />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="text-xs"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            Horas M.O.
                          </span>
                          <input
                            type="number"
                            min={0}
                            step={0.5}
                            value={p.horas}
                            onChange={(e) =>
                              setPecas((prev) =>
                                prev.map((x, j) =>
                                  j === i
                                    ? { ...x, horas: +e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-12 text-center text-xs px-1 py-0.5 rounded"
                            style={{
                              background: "var(--color-surface)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-xs font-mono font-semibold shrink-0"
                      style={{ color: "var(--color-text)" }}
                    >
                      R$ {(p.item.preco * p.qtd + p.horas * 120).toFixed(2)}
                    </div>
                    <button
                      onClick={() =>
                        setPecas((prev) => prev.filter((_, j) => j !== i))
                      }
                      className="text-xs hover:opacity-60 transition-opacity"
                      style={{ color: "#ef4444" }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {pecas.length > 0 && (
              <div
                className="mt-4 space-y-2 pt-4"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <div className="flex justify-between text-sm">
                  <span style={{ color: "var(--color-text-muted)" }}>
                    Subtotal peças
                  </span>
                  <span
                    className="font-mono"
                    style={{ color: "var(--color-text)" }}
                  >
                    R$ {totalPecas.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "var(--color-text-muted)" }}>
                    Mão de obra ({pecas.reduce((a, p) => a + p.horas, 0)}h × R$
                    120)
                  </span>
                  <span
                    className="font-mono"
                    style={{ color: "var(--color-text)" }}
                  >
                    R$ {totalMdo.toFixed(2)}
                  </span>
                </div>
                <div
                  className="flex justify-between text-base font-bold pt-2"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <span style={{ color: "var(--color-text)" }}>Total</span>
                  <span
                    className="font-mono"
                    style={{ color: "var(--color-cyan)" }}
                  >
                    R$ {(totalPecas + totalMdo).toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <button
              className="w-full mt-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-80"
              style={{ background: "var(--color-cyan)", color: "#0f1117" }}
              onClick={() =>
                alert("Orçamento enviado ao cliente para aprovação!")
              }
            >
              Enviar Orçamento para Aprovação
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
