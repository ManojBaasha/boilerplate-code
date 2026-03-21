import { Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";
import { home } from "@/resources";

export const StatsSection = () => {
  return (
    <Row fillWidth gap="16" horizontal="center" paddingY="48" wrap>
      {home.stats.map((stat, i) => (
        <RevealFx key={stat.label} translateY="4" delay={0.1 * i} style={{ flex: "1 1 200px", maxWidth: "260px" }}>
          <Column
            horizontal="center"
            gap="4"
            padding="l"
            background="surface"
            border="neutral-alpha-weak"
            radius="l"
          >
            <Heading variant="display-strong-l" onBackground="brand-strong">
              {stat.value}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              {stat.label}
            </Text>
          </Column>
        </RevealFx>
      ))}
    </Row>
  );
};
