"use client";

import { Column, Text } from "@once-ui-system/core";
import { revenueData } from "@/data/dashboard";

export const RevenueChart = () => {
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
    <Column
      flex={2}
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      gap="12"
      minWidth={16}
    >
      <Text variant="label-default-s" onBackground="neutral-weak">
        Revenue Over Time
      </Text>
      <svg viewBox={`0 0 ${w} ${h + 20}`} width="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand-solid-strong)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--brand-solid-strong)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#revenueGrad)" />
        <polyline
          points={linePoints}
          fill="none"
          stroke="var(--brand-solid-strong)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {revenueData.map((d, i) => {
          const x = (i / (revenueData.length - 1)) * w;
          return (
            <text
              key={d.month}
              x={x}
              y={h + 16}
              textAnchor="middle"
              fill="var(--neutral-on-background-weak)"
              fontSize="10"
              fontFamily="var(--font-code)"
            >
              {d.month}
            </text>
          );
        })}
      </svg>
    </Column>
  );
};
