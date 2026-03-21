import { Column, Row, Tag, Text } from "@once-ui-system/core";
import { ExamplePrompt } from "@/types";
import styles from "./Prompts.module.scss";

const difficultyStyle = {
  easy: styles.difficultyEasy,
  medium: styles.difficultyMedium,
  hard: styles.difficultyHard,
};

const categoryIcon = {
  Layout: "grid" as const,
  Styling: "sparkles" as const,
  "Data Viz": "chartBar" as const,
  UX: "eye" as const,
};

export const PromptCard = ({ prompt, category, difficulty, description }: ExamplePrompt) => {
  return (
    <Column
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      gap="12"
      fillWidth
    >
      <Row gap="8" vertical="center" wrap>
        <Tag variant="brand" size="s" prefixIcon={categoryIcon[category]}>
          {category}
        </Tag>
        <span
          className={difficultyStyle[difficulty]}
          style={{
            padding: "2px 10px",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
        >
          {difficulty}
        </span>
      </Row>
      <Column
        background="page"
        radius="m"
        padding="12"
        border="neutral-alpha-weak"
      >
        <Text variant="code-default-s" className={styles.promptText}>
          &quot;{prompt}&quot;
        </Text>
      </Column>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {description}
      </Text>
    </Column>
  );
};
