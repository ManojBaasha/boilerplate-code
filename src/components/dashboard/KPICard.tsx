type KPICardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export function KPICard({ title, value, change, trend }: KPICardProps) {
  return (
    <div className="flex-1 min-w-[140px] flex flex-col gap-2 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
      <span className="text-xs font-medium text-[var(--muted)]">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
      <div className="flex items-center gap-1">
        <span className={trend === "up" ? "text-[var(--accent-solid)]" : "text-red-500"}>
          {trend === "up" ? "↑" : "↓"}
        </span>
        <span className={`text-xs ${trend === "up" ? "text-[var(--accent-solid)]" : "text-red-500"}`}>
          {change}
        </span>
        <span className="text-xs text-[var(--muted)]">vs last month</span>
      </div>
    </div>
  );
}
