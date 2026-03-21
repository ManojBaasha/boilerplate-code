import { Column, Row, Tag, Text } from "@once-ui-system/core";

const models = [
  { name: "Gemini 2.5 Pro", icon: "sparkles" as const },
  { name: "Gemini 2.5 Flash", icon: "bolt" as const },
  { name: "Claude Sonnet", icon: "cpu" as const },
];

export const BuiltWithBar = () => {
  return (
    <Column fillWidth horizontal="center" gap="12" paddingY="24">
      <Text variant="label-default-s" onBackground="neutral-weak">
        Powered by
      </Text>
      <Row gap="12" horizontal="center" wrap>
        {models.map((model) => (
          <Tag key={model.name} variant="neutral" size="l" prefixIcon={model.icon}>
            {model.name}
          </Tag>
        ))}
      </Row>
    </Column>
  );
};
