export type UserRole = "cliente" | "mecanico";

export type ClientView =
  | "agendamento"
  | "acompanhamento"
  | "orcamento"
  | "manutencao"
  | "faturamento";

export type MecanicoView = "fila" | "diagnostico" | "prazos" | "notificacoes";

export type StatusVeiculo =
  | "aguardando_peca"
  | "peca_chegou"
  | "na_fila"
  | "em_execucao"
  | "pronto";

export interface Servico {
  id: string;
  cliente: string;
  veiculo: string;
  placa: string;
  problema: string;
  status: StatusVeiculo;
  mecanico: string;
  entrada: string;
  previsao: string;
  prioridade: "normal" | "urgente";
}
