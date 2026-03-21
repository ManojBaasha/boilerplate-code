import { Column, Heading, Text, Button } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak" marginBottom="l">
        The page you are looking for does not exist.
      </Text>
      <Button href="/" variant="secondary">
        Back to Home
      </Button>
    </Column>
  );
}
