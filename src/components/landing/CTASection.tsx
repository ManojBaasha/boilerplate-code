import { Background, Button, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";
import { social } from "@/resources";

export const CTASection = () => {
  const githubLink = social.find((s) => s.name === "GitHub")?.link || "#";

  return (
    <RevealFx translateY="8">
      <Column
        fillWidth
        horizontal="center"
        gap="l"
        padding="xl"
        radius="l"
        border="brand-alpha-medium"
        background="surface"
        position="relative"
        overflow="hidden"
      >
        <Background
          gradient={{
            display: true,
            opacity: 80,
            x: 50,
            y: 0,
            width: 100,
            height: 100,
            tilt: 0,
            colorStart: "brand-background-strong",
            colorEnd: "static-transparent",
          }}
          dots={{
            display: true,
            opacity: 20,
            size: "2",
            color: "brand-on-background-weak",
          }}
        />
        <Heading variant="display-strong-s" align="center">
          Ready to fix your UI with AI?
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
        >
          Connect your repo and start generating fixes in seconds.
        </Text>
        <Row gap="16" horizontal="center">
          <Button href={githubLink} variant="primary" suffixIcon="arrowRight" size="l">
            Get Started
          </Button>
          <Button href={githubLink} variant="secondary" prefixIcon="github" size="l">
            View Source
          </Button>
        </Row>
      </Column>
    </RevealFx>
  );
};
