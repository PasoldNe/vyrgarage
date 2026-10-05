import type { StatusVeiculo } from "../types";
import { statusConfig } from "../config/status";

export default function StatusBadge({ status }: { status: StatusVeiculo }) {
  const cfg = statusConfig[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ color: cfg.color, background: cfg.bg }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${status === "em_execucao" ? "pulse-dot" : ""}`}
      />
      {cfg.label}
    </span>
  );
}
