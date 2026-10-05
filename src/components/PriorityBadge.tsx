export default function PriorityBadge({ p }: { p: "normal" | "urgente" }) {
  return p === "urgente" ? (
    <span
      className="px-2 py-0.5 rounded text-xs font-semibold"
      style={{ color: "#ef4444", background: "rgba(239,68,68,0.12)" }}
    >
      Urgente
    </span>
  ) : (
    <span
      className="px-2 py-0.5 rounded text-xs font-medium"
      style={{ color: "#6b7a9d", background: "rgba(107,122,157,0.1)" }}
    >
      Normal
    </span>
  );
}
