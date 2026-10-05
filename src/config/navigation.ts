import type { ClientView, MecanicoView } from "../types";

export const clientMenuItems: {
  id: ClientView;
  label: string;
  icon: string;
}[] = [
  { id: "agendamento", label: "Agendamento", icon: "📅" },
  { id: "acompanhamento", label: "Acompanhamento", icon: "🔍" },
  { id: "orcamento", label: "Aprovação de Orçamento", icon: "💰" },
  { id: "manutencao", label: "Manutenção Preventiva", icon: "🔧" },
  { id: "faturamento", label: "Faturamento", icon: "📄" },
];

export const mecanicoMenuItems: {
  id: MecanicoView;
  label: string;
  icon: string;
}[] = [
  { id: "fila", label: "Fila de Serviços", icon: "📋" },
  { id: "diagnostico", label: "Gerador de Diagnóstico", icon: "🔬" },
  { id: "prazos", label: "Gestão de Prazos", icon: "⏱️" },
  { id: "notificacoes", label: "Notificações", icon: "🔔" },
];
