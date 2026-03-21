"use client";

import { trafficSources } from "@/data/dashboard";

export function TrafficSourcesChart() {
  const total = trafficSources.reduce((sum, s) => sum + s.value, 0);
  const circumference = 2 * Math.PI * 35;

  let offset = 0;
  const segments = trafficSources.map((s) => {
    const dash = (s.value / total) * circumference;
    const segment = { ...s, dash, offset };
    offset -= dash;
    return segment;
  });

  return (
    <div className="flex-1 min-w-[160px] flex flex-col items-center gap-3 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
      <span className="text-xs font-medium text-[var(--muted)] self-start">Traffic Sources</span>
      <svg viewBox="0 0 90 90" width="120" height="120">
        {segments.map((s) => (
          <circle key={s.source} cx="45" cy="45" r="35" fill="none" stroke={s.color} strokeWidth="10" strokeDasharray={`${s.dash} ${circumference - s.dash}`} strokeDashoffset={s.offset} transform="rotate(-90 45 45)" />
        ))}
      </svg>
      <div className="flex flex-col gap-2 w-full">
        {trafficSources.map((s) => (
          <div key={s.source} className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
              <span className="text-xs text-[var(--muted)]">{s.source}</span>
            </div>
            <span className="text-xs">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
