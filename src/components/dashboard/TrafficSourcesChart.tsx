"use client";

import { Column, Row, Text } from "@once-ui-system/core";
import { trafficSources } from "@/data/dashboard";

export const TrafficSourcesChart = () => {
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
    <Column
      flex={1}
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      gap="12"
      horizontal="center"
      minWidth={10}
    >
      <Text variant="label-default-s" onBackground="neutral-weak">
        Traffic Sources
      </Text>
      <svg viewBox="0 0 90 90" width="120" height="120">
        {segments.map((s) => (
          <circle
            key={s.source}
            cx="45"
            cy="45"
            r="35"
            fill="none"
            stroke={s.color}
            strokeWidth="10"
            strokeDasharray={`${s.dash} ${circumference - s.dash}`}
            strokeDashoffset={s.offset}
            transform="rotate(-90 45 45)"
          />
        ))}
      </svg>
      <Column gap="8" fillWidth>
        {trafficSources.map((s) => (
          <Row key={s.source} vertical="center" gap="8" fillWidth horizontal="between">
            <Row vertical="center" gap="8">
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: s.color,
                  flexShrink: 0,
                }}
              />
              <Text variant="label-default-s" onBackground="neutral-weak">
                {s.source}
              </Text>
            </Row>
            <Text variant="label-default-s">{s.value}%</Text>
          </Row>
        ))}
      </Column>
    </Column>
  );
};
