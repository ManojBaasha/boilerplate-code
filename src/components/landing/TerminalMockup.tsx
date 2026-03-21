"use client";

import { Column, Text } from "@once-ui-system/core";
import styles from "./Landing.module.scss";

export const TerminalMockup = () => {
  return (
    <Column
      className={styles.terminal}
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      fillWidth
      maxWidth={32}
    >
      <div className={styles.terminalDots}>
        <div className={`${styles.terminalDot} ${styles.dotRed}`} />
        <div className={`${styles.terminalDot} ${styles.dotYellow}`} />
        <div className={`${styles.terminalDot} ${styles.dotGreen}`} />
      </div>
      <Text
        variant="code-default-s"
        onBackground="neutral-weak"
        marginBottom="8"
      >
        $ mergeworthy fix
      </Text>
      <Text variant="code-default-s" onBackground="brand-medium">
        &gt; &quot;Make the header sticky and add a subtle shadow on scroll&quot;
        <span className={styles.cursor} />
      </Text>
      <Text
        variant="code-default-s"
        onBackground="neutral-weak"
        marginTop="12"
      >
        Generating fixes with 3 AI models...
      </Text>
      <Text variant="code-default-s" onBackground="accent-medium">
        Gemini 2.5 Pro .... deployed
      </Text>
      <Text variant="code-default-s" onBackground="accent-medium">
        Gemini 2.5 Flash .. deployed
      </Text>
      <Text variant="code-default-s" onBackground="accent-medium">
        Claude Sonnet ..... deployed
      </Text>
    </Column>
  );
};
