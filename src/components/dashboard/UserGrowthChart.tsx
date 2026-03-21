"use client";

import { userGrowthData } from "@/data/dashboard";

export function UserGrowthChart() {
  const max = Math.max(...userGrowthData.map((d) => d.users));
  const w = 400;
  const h = 160;
  const barWidth = w / userGrowthData.length - 12;

  return (
    <div className="flex-1 min-w-[200px] flex flex-col gap-3 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
      <span className="text-xs font-medium text-[var(--muted)]">User Growth (Weekly)</span>
      <svg viewBox={`0 0 ${w} ${h + 20}`} width="100%" preserveAspectRatio="xMidYMid meet">
        {userGrowthData.map((d, i) => {
          const barHeight = (d.users / max) * h;
          const x = i * (w / userGrowthData.length) + 6;
          const y = h - barHeight;

          return (
            <g key={d.week}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                fill="var(--accent-solid)"
                opacity="0.8"
                className="origin-bottom animate-grow-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
              <text x={x + barWidth / 2} y={h + 14} textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-code)">
                {d.week}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
