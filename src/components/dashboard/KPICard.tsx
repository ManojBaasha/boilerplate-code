import { Column, Row, Text } from "@once-ui-system/core";
import styles from "./Dashboard.module.scss";

type KPICardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export const KPICard = ({ title, value, change, trend }: KPICardProps) => {
  return (
    <Column
      flex={1}
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      gap="8"
      minWidth={10}
    >
      <Text variant="label-default-s" onBackground="neutral-weak">
        {title}
      </Text>
      <Text variant="heading-strong-l">{value}</Text>
      <Row vertical="center" gap="4">
        <span className={trend === "up" ? styles.trendUp : styles.trendDown}>
          {trend === "up" ? "↑" : "↓"}
        </span>
        <Text
          variant="label-default-s"
          className={trend === "up" ? styles.trendUp : styles.trendDown}
        >
          {change}
        </Text>
        <Text variant="label-default-s" onBackground="neutral-weak">
          vs last month
        </Text>
      </Row>
    </Column>
  );
};
