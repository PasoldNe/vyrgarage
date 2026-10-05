import type { StatusVeiculo } from "../types";

export const timelineSteps: {
  status: StatusVeiculo;
  label: string;
  desc: string;
  time?: string;
}[] = [
  {
    status: "na_fila",
    label: "Entrada na Fila",
    desc: "Veículo recebido e registrado",
    time: "14/09 08:30",
  },
  {
    status: "aguardando_peca",
    label: "Aguardando Peça",
    desc: "Filtro de óleo e correia dentada solicitados",
    time: "14/09 10:15",
  },
  {
    status: "peca_chegou",
    label: "Peça Chegou",
    desc: "Itens confirmados no estoque",
    time: "15/09 09:00",
  },
  {
    status: "em_execucao",
    label: "Em Execução",
    desc: "Carlos Souza iniciou a revisão",
    time: "15/09 10:30",
  },
  {
    status: "pronto",
    label: "Pronto para Retirada",
    desc: "Veículo finalizado e testado",
  },
];
