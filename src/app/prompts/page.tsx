import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL, prompts } from "@/resources";
import { PromptFilter } from "@/components/prompts/PromptFilter";

export async function generateMetadata() {
  return Meta.generate({
    title: prompts.title,
    description: prompts.description,
    baseURL: baseURL,
    path: prompts.path,
  });
}

export default function PromptsPage() {
  return (
    <Column maxWidth="m" gap="l" paddingY="l" fillWidth>
      <Column gap="8">
        <Heading variant="display-strong-s">Example Prompts</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          These prompts show what you can ask MergeWorthy to fix on the sample dashboard.
          Copy any prompt and use it with MergeWorthy to see AI models compete to implement it.
        </Text>
      </Column>
      <PromptFilter />
    </Column>
  );
}
