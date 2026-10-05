import type { StatusVeiculo } from "../types";

export const statusConfig: Record<
  StatusVeiculo,
  { label: string; color: string; bg: string; dot: string }
> = {
  aguardando_peca: {
    label: "Aguardando Peça",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    dot: "bg-purple-400",
  },
  peca_chegou: {
    label: "Peça Chegou",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    dot: "bg-amber-400",
  },
  na_fila: {
    label: "Na Fila",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    dot: "bg-blue-400",
  },
  em_execucao: {
    label: "Em Execução",
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.10)",
    dot: "bg-cyan-400",
  },
  pronto: {
    label: "Pronto",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.12)",
    dot: "bg-green-400",
  },
};
