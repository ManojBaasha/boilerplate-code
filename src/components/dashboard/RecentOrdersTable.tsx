import { Column, Row, Text } from "@once-ui-system/core";
import { recentOrders } from "@/data/dashboard";
import styles from "./Dashboard.module.scss";

const statusClass = {
  Completed: styles.statusCompleted,
  Pending: styles.statusPending,
  Processing: styles.statusProcessing,
};

export const RecentOrdersTable = () => {
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
        Recent Orders
      </Text>
      <Column fillWidth gap="0">
        <Row
          fillWidth
          paddingY="8"
          paddingX="4"
          style={{ borderBottom: "1px solid var(--neutral-border-weak)" }}
        >
          <Row flex={1}>
            <Text variant="label-default-s" onBackground="neutral-weak">Order</Text>
          </Row>
          <Row flex={2}>
            <Text variant="label-default-s" onBackground="neutral-weak">Customer</Text>
          </Row>
          <Row flex={1}>
            <Text variant="label-default-s" onBackground="neutral-weak">Amount</Text>
          </Row>
          <Row flex={1}>
            <Text variant="label-default-s" onBackground="neutral-weak">Status</Text>
          </Row>
        </Row>
        {recentOrders.map((order) => (
          <Row
            key={order.id}
            fillWidth
            paddingY="8"
            paddingX="4"
            className={styles.tableRow}
            vertical="center"
          >
            <Row flex={1}>
              <Text variant="code-default-s">{order.id}</Text>
            </Row>
            <Row flex={2}>
              <Text variant="body-default-s">{order.customer}</Text>
            </Row>
            <Row flex={1}>
              <Text variant="body-default-s">{order.amount}</Text>
            </Row>
            <Row flex={1}>
              <span
                className={statusClass[order.status]}
                style={{
                  padding: "2px 8px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                {order.status}
              </span>
            </Row>
          </Row>
        ))}
      </Column>
    </Column>
  );
};
