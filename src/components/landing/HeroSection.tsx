"use client";

import { Badge, Button, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";

import { home, social } from "@/resources";
import { TerminalMockup } from "./TerminalMockup";

export const HeroSection = () => {
  const githubLink = social.find((s) => s.name === "GitHub")?.link || "#";

  return (
    <Column fillWidth horizontal="center" gap="l" paddingTop="104" paddingBottom="48">
      {home.featured.display && (
        <RevealFx translateY="4" delay={0}>
          <Badge
            arrow
            href={home.featured.href}
            background="brand-alpha-weak"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
          >
            {home.featured.title}
          </Badge>
        </RevealFx>
      )}

      <RevealFx translateY="8" delay={0.1}>
        <Heading
          wrap="balance"
          variant="display-strong-xl"
          align="center"
          onBackground="neutral-strong"
        >
          {home.headline}
        </Heading>
      </RevealFx>

      <RevealFx translateY="8" delay={0.2}>
        <Column maxWidth={40}>
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
          >
            {home.subline}
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="8" delay={0.3}>
        <Row gap="16" horizontal="center" paddingTop="8">
          <Button href={githubLink} variant="primary" suffixIcon="arrowRight" size="l">
            Get Started
          </Button>
          <Button href={githubLink} variant="secondary" prefixIcon="github" size="l">
            View on GitHub
          </Button>
        </Row>
      </RevealFx>

      <RevealFx translateY="12" delay={0.4}>
        <Row paddingTop="24" fillWidth horizontal="center">
          <TerminalMockup />
        </Row>
      </RevealFx>
    </Column>
  );
};
