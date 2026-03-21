import { Button, Column, Row, Text } from "@once-ui-system/core";

export const PromptBanner = () => {
  return (
    <Column
      fillWidth
      background="brand-alpha-weak"
      border="brand-alpha-medium"
      radius="l"
      padding="l"
      gap="12"
    >
      <Text variant="heading-strong-s">
        Want to restyle this dashboard?
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        Try MergeWorthy with prompts like:
      </Text>
      <Column
        background="page"
        radius="m"
        padding="12"
        border="neutral-alpha-weak"
      >
        <Text variant="code-default-s" onBackground="brand-medium">
          &quot;Add hover effects and subtle shadows to all dashboard cards&quot;
        </Text>
      </Column>
      <Row>
        <Button href="/prompts" variant="secondary" suffixIcon="arrowRight" size="s">
          See more example prompts
        </Button>
      </Row>
    </Column>
  );
};
