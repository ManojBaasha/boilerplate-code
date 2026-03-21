import { Column, Heading, Icon, Text } from "@once-ui-system/core";
import { Feature } from "@/types";
import styles from "./Landing.module.scss";

export const FeatureCard = ({ icon, title, description }: Feature) => {
  return (
    <Column
      className={styles.featureCard}
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      padding="l"
      gap="12"
      flex={1}
      minWidth={16}
    >
      <Icon name={icon} size="l" onBackground="brand-medium" />
      <Heading variant="heading-strong-s">{title}</Heading>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {description}
      </Text>
    </Column>
  );
};
