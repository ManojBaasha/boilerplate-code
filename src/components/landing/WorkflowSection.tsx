"use client";

import { Column, Heading, Icon, RevealFx, Row, Text } from "@once-ui-system/core";
import { home } from "@/resources";
import styles from "./Landing.module.scss";

export const WorkflowSection = () => {
  return (
    <Column id="workflow" fillWidth gap="l" horizontal="center" paddingY="48">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="8">
          <Heading variant="display-strong-s" align="center">
            How it works
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Four steps from idea to merged code
          </Text>
        </Column>
      </RevealFx>
      <Row fillWidth horizontal="center" gap="0" wrap s={{ direction: "column", horizontal: "center" }}>
        {home.workflow.map((step, i) => (
          <RevealFx key={step.step} translateY="8" delay={0.1 * i}>
            <Row vertical="center" gap="0" s={{ direction: "column" }}>
              <Column horizontal="center" gap="12" padding="16" style={{ minWidth: 160 }}>
                <div className={styles.stepNumber}>
                  <Icon name={step.icon} size="m" />
                </div>
                <Heading variant="heading-strong-s" align="center">
                  {step.title}
                </Heading>
                <Column maxWidth={12}>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    align="center"
                  >
                    {step.description}
                  </Text>
                </Column>
              </Column>
              {i < home.workflow.length - 1 && (
                <div className={styles.workflowConnector}>
                  <div className={styles.connectorLine} />
                </div>
              )}
            </Row>
          </RevealFx>
        ))}
      </Row>
    </Column>
  );
};
