import { Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";
import { home } from "@/resources";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  return (
    <Column fillWidth gap="l" horizontal="center" paddingY="48">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="8">
          <Heading variant="display-strong-s" align="center">
            Everything you need to fix UI with AI
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            From natural language to merged PR in under a minute
          </Text>
        </Column>
      </RevealFx>
      <Row fillWidth gap="16" wrap horizontal="center">
        {home.features.map((feature, i) => (
          <RevealFx key={feature.title} translateY="8" delay={0.05 * i} style={{ flex: "1 1 280px", maxWidth: "400px" }}>
            <FeatureCard {...feature} />
          </RevealFx>
        ))}
      </Row>
    </Column>
  );
};
