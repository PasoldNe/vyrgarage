import type { StatusVeiculo } from "../types";

export const notifTemplates = [
  {
    label: "Peça Chegou",
    icon: "📦",
    msg: "Olá! As peças para o seu veículo chegaram. Em breve iniciaremos o serviço.",
    status: "peca_chegou" as StatusVeiculo,
  },
  {
    label: "Em Execução",
    icon: "🔧",
    msg: "Seu veículo entrou em manutenção! Nossa equipe já está trabalhando.",
    status: "em_execucao" as StatusVeiculo,
  },
  {
    label: "Novo Problema",
    icon: "⚠️",
    msg: "Identificamos um ponto de atenção adicional. Um novo orçamento foi enviado para sua aprovação.",
    status: "aguardando_peca" as StatusVeiculo,
  },
  {
    label: "Pronto",
    icon: "✅",
    msg: "Seu veículo está pronto para retirada! Aguardamos sua visita.",
    status: "pronto" as StatusVeiculo,
  },
  {
    label: "Atraso no Prazo",
    icon: "⏰",
    msg: "Precisamos de mais tempo para concluir o serviço com qualidade. A nova previsão foi atualizada.",
    status: "na_fila" as StatusVeiculo,
  },
];
