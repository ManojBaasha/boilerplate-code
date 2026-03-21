import { Button, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";

export const DashboardPreview = () => {
  return (
    <Column fillWidth horizontal="center" gap="l" paddingY="48">
      <RevealFx translateY="8">
        <Column horizontal="center" gap="8">
          <Heading variant="display-strong-s" align="center">
            The target: a dashboard that needs your touch
          </Heading>
          <Column maxWidth={36}>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Below is a sample SaaS dashboard. MergeWorthy lets you describe changes in plain English —
              then AI models compete to implement them.
            </Text>
          </Column>
        </Column>
      </RevealFx>
      <RevealFx translateY="12" delay={0.1}>
        <Column
          fillWidth
          background="surface"
          border="neutral-alpha-weak"
          radius="l"
          padding="l"
          gap="16"
          horizontal="center"
        >
          <Row fillWidth gap="12" wrap horizontal="center">
            {[
              { label: "Revenue", value: "$48,235", color: "brand" },
              { label: "Users", value: "2,847", color: "accent" },
              { label: "Conversion", value: "3.24%", color: "brand" },
            ].map((item) => (
              <Column
                key={item.label}
                flex={1}
                padding="16"
                background="page"
                radius="m"
                border="neutral-alpha-weak"
                minWidth={8}
              >
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {item.label}
                </Text>
                <Text variant="heading-strong-l">{item.value}</Text>
              </Column>
            ))}
          </Row>
          <Row fillWidth gap="12" wrap>
            <Column flex={2} padding="16" background="page" radius="m" border="neutral-alpha-weak" minWidth={16}>
              <Text variant="label-default-s" onBackground="neutral-weak" marginBottom="8">
                Revenue Trend
              </Text>
              <svg viewBox="0 0 400 100" width="100%" height="80" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="previewGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-solid-strong)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--brand-solid-strong)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0,80 33,65 66,70 100,55 133,58 166,45 200,48 233,35 266,40 300,28 333,32 366,15 400,20 400,100 0,100"
                  fill="url(#previewGrad)"
                />
                <polyline
                  points="0,80 33,65 66,70 100,55 133,58 166,45 200,48 233,35 266,40 300,28 333,32 366,15 400,20"
                  fill="none"
                  stroke="var(--brand-solid-strong)"
                  strokeWidth="2"
                />
              </svg>
            </Column>
            <Column flex={1} padding="16" background="page" radius="m" border="neutral-alpha-weak" minWidth={10} horizontal="center">
              <Text variant="label-default-s" onBackground="neutral-weak" marginBottom="8">
                Traffic Sources
              </Text>
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle cx="40" cy="40" r="30" fill="none" stroke="var(--brand-solid-strong)" strokeWidth="8" strokeDasharray="66 122" strokeDashoffset="0" />
                <circle cx="40" cy="40" r="30" fill="none" stroke="var(--accent-solid-strong)" strokeWidth="8" strokeDasharray="53 135" strokeDashoffset="-66" />
                <circle cx="40" cy="40" r="30" fill="none" stroke="var(--brand-background-strong)" strokeWidth="8" strokeDasharray="41 147" strokeDashoffset="-119" />
                <circle cx="40" cy="40" r="30" fill="none" stroke="var(--neutral-solid-medium)" strokeWidth="8" strokeDasharray="28 160" strokeDashoffset="-160" />
              </svg>
            </Column>
          </Row>
          <Button href="/dashboard" variant="secondary" suffixIcon="arrowRight">
            Explore Full Dashboard
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
};
