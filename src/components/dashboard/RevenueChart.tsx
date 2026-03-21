"use client";

import { revenueData } from "@/data/dashboard";

export function RevenueChart() {
  const max = Math.max(...revenueData.map((d) => d.value));
  const min = Math.min(...revenueData.map((d) => d.value));
  const padding = (max - min) * 0.15;
  const chartMax = max + padding;
  const chartMin = min - padding;
  const range = chartMax - chartMin;

  const w = 500;
  const h = 160;

  const points = revenueData.map((d, i) => {
    const x = (i / (revenueData.length - 1)) * w;
    const y = h - ((d.value - chartMin) / range) * h;
    return `${x},${y}`;
  });

  const linePoints = points.join(" ");
  const areaPoints = `0,${h} ${linePoints} ${w},${h}`;

  return (
    <div className="flex-[2] min-w-[250px] flex flex-col gap-3 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
      <span className="text-xs font-medium text-[var(--muted)]">Revenue Over Time</span>
      <svg viewBox={`0 0 ${w} ${h + 20}`} width="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand-solid)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--brand-solid)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#revenueGrad)" />
        <polyline points={linePoints} fill="none" stroke="var(--brand-solid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {revenueData.map((d, i) => (
          <text key={d.month} x={(i / (revenueData.length - 1)) * w} y={h + 16} textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-code)">
            {d.month}
          </text>
        ))}
      </svg>
    </div>
  );
}
