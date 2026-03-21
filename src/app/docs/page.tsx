import { Column, Heading, Meta, Row, Tag, Text } from "@once-ui-system/core";
import { baseURL, docs } from "@/resources";
import { ArchitectureDiagram } from "@/components/docs/ArchitectureDiagram";

export async function generateMetadata() {
  return Meta.generate({
    title: docs.title,
    description: docs.description,
    baseURL: baseURL,
    path: docs.path,
  });
}

const techStack = [
  "Next.js 14",
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Vercel AI SDK",
  "Gemini API",
  "Claude API",
  "GitHub API (Octokit)",
  "NextAuth",
  "Vercel KV",
];

const steps = [
  {
    step: 1,
    title: "Sign in with GitHub",
    description: "Authenticate with your GitHub account to grant MergeWorthy access to your repositories.",
  },
  {
    step: 2,
    title: "Connect your repository",
    description: "Enter your GitHub repo (owner/repo) and Vercel Project ID to link your project.",
  },
  {
    step: 3,
    title: "Select AI models",
    description: "Choose which AI models to use: Gemini 2.5 Pro, Gemini 2.5 Flash, and/or Claude Sonnet.",
  },
  {
    step: 4,
    title: "Describe the fix",
    description: "Type a natural language description of the UI change you want. The chat assistant helps refine your request.",
  },
  {
    step: 5,
    title: "Review and merge",
    description: "Compare live preview deployments side by side. Pick the best fix and merge it via GitHub PR with one click.",
  },
];

export default function DocsPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="l" fillWidth>
      <Column gap="8">
        <Heading variant="display-strong-s">About MergeWorthy-AI</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          MergeWorthy-AI is an AI-powered UI fix generation and comparison platform built at the
          Vercel x DeepMind Hackathon. It lets developers describe UI fixes in natural language,
          generates competing solutions from multiple AI models, deploys each to Vercel for
          live comparison, and merges the best one via GitHub PR.
        </Text>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="heading-strong-l">
          Architecture
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          User prompts flow through MergeWorthy to three AI models in parallel.
          Each model&apos;s output is committed to a unique branch and auto-deployed to Vercel.
          The user compares live previews and merges their pick via GitHub PR.
        </Text>
        <Column
          background="surface"
          border="neutral-alpha-weak"
          radius="l"
          padding="l"
          fillWidth
        >
          <ArchitectureDiagram />
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="heading-strong-l">
          Tech Stack
        </Heading>
        <Row gap="8" wrap>
          {techStack.map((tech) => (
            <Tag key={tech} variant="neutral" size="l">
              {tech}
            </Tag>
          ))}
        </Row>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="heading-strong-l">
          How to Use
        </Heading>
        <Column gap="16">
          {steps.map((s) => (
            <Row key={s.step} gap="16" vertical="start" fillWidth>
              <Column
                horizontal="center"
                vertical="center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--brand-alpha-weak)",
                  border: "1px solid var(--brand-border-medium)",
                  flexShrink: 0,
                }}
              >
                <Text variant="label-strong-s" onBackground="brand-strong">
                  {s.step}
                </Text>
              </Column>
              <Column gap="4" flex={1}>
                <Text variant="heading-strong-s">{s.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {s.description}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      <Column
        gap="8"
        background="surface"
        border="neutral-alpha-weak"
        radius="l"
        padding="l"
      >
        <Heading as="h2" variant="heading-strong-l">
          Built at Vercel x DeepMind Hackathon
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          MergeWorthy-AI was created during the Vercel x DeepMind Hackathon, combining
          Google&apos;s Gemini models with Anthropic&apos;s Claude to create a multi-model
          AI comparison tool for UI development. The platform demonstrates how AI can
          accelerate frontend development by generating, deploying, and comparing solutions
          in real time.
        </Text>
      </Column>
    </Column>
  );
}
