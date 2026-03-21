import { recentOrders } from "@/data/dashboard";
import { cn } from "@/lib/utils";

const statusStyles = {
  Completed: "bg-[var(--accent-bg)] text-[var(--accent-solid)]",
  Pending: "bg-[var(--surface)] text-[var(--muted)]",
  Processing: "bg-[var(--brand-bg)] text-[var(--brand-solid)]",
};

export function RecentOrdersTable() {
  return (
    <div className="flex-1 min-w-[200px] flex flex-col gap-3 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
      <span className="text-xs font-medium text-[var(--muted)]">Recent Orders</span>
      <div className="w-full">
        <div className="flex w-full py-2 px-1 border-b border-[var(--border)]">
          <span className="flex-1 text-xs font-medium text-[var(--muted)]">Order</span>
          <span className="flex-[2] text-xs font-medium text-[var(--muted)]">Customer</span>
          <span className="flex-1 text-xs font-medium text-[var(--muted)]">Amount</span>
          <span className="flex-1 text-xs font-medium text-[var(--muted)]">Status</span>
        </div>
        {recentOrders.map((order) => (
          <div key={order.id} className="flex w-full py-2 px-1 border-b border-[var(--border)] last:border-0 items-center">
            <span className="flex-1 text-sm font-mono">{order.id}</span>
            <span className="flex-[2] text-sm">{order.customer}</span>
            <span className="flex-1 text-sm">{order.amount}</span>
            <span className="flex-1">
              <span className={cn("px-2 py-0.5 rounded-md text-[11px] font-medium", statusStyles[order.status])}>
                {order.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
