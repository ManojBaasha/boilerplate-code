import { prompts } from "@/resources";
import { PromptFilter } from "@/components/prompts/PromptFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: prompts.title,
  description: prompts.description,
};

export default function PromptsPage() {
  return (
    <div className="w-full max-w-[768px] mx-auto flex flex-col gap-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Example Prompts</h1>
        <p className="text-lg text-[var(--muted)]">
          These prompts show what you can ask MergeWorthy to fix on the sample dashboard.
          Copy any prompt and use it with MergeWorthy to see AI models compete to implement it.
        </p>
      </div>
      <PromptFilter />
    </div>
  );
}
