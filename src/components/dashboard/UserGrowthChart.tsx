"use client";

import { Column, Text } from "@once-ui-system/core";
import { userGrowthData } from "@/data/dashboard";
import styles from "./Dashboard.module.scss";

export const UserGrowthChart = () => {
  const max = Math.max(...userGrowthData.map((d) => d.users));
  const w = 400;
  const h = 160;
  const barWidth = w / userGrowthData.length - 12;

  return (
    <Column
      flex={1}
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      gap="12"
      minWidth={12}
    >
      <Text variant="label-default-s" onBackground="neutral-weak">
        User Growth (Weekly)
      </Text>
      <svg viewBox={`0 0 ${w} ${h + 20}`} width="100%" preserveAspectRatio="xMidYMid meet">
        {userGrowthData.map((d, i) => {
          const barHeight = (d.users / max) * h;
          const x = i * (w / userGrowthData.length) + 6;
          const y = h - barHeight;

          return (
            <g key={d.week}>
              <rect
                className={styles.bar}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                fill="var(--accent-solid-strong)"
                opacity="0.8"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
              <text
                x={x + barWidth / 2}
                y={h + 14}
                textAnchor="middle"
                fill="var(--neutral-on-background-weak)"
                fontSize="10"
                fontFamily="var(--font-code)"
              >
                {d.week}
              </text>
            </g>
          );
        })}
      </svg>
    </Column>
  );
};
