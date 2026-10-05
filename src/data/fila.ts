import type { StatusVeiculo } from "../types";

export const kanbanCols: { status: StatusVeiculo; title: string }[] = [
  { status: "na_fila", title: "Na Fila" },
  { status: "aguardando_peca", title: "Aguardando Peça" },
  { status: "peca_chegou", title: "Peça Chegou" },
  { status: "em_execucao", title: "Em Execução" },
  { status: "pronto", title: "Pronto" },
];
