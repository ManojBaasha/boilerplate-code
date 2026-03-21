import { cn } from "@/lib/utils";
import { iconLibrary } from "@/resources/icons";
import type { ExamplePrompt } from "@/types";

const difficultyStyles = {
  easy: "bg-[var(--accent-bg)] text-[var(--accent-solid)]",
  medium: "bg-[var(--brand-bg)] text-[var(--brand-solid)]",
  hard: "bg-[var(--surface)] text-[var(--muted)]",
};

const categoryIcons: Record<string, string> = {
  Layout: "grid",
  Styling: "sparkles",
  "Data Viz": "chartBar",
  UX: "eye",
};

export function PromptCard({ prompt, category, difficulty, description }: ExamplePrompt) {
  const Icon = iconLibrary[categoryIcons[category]];

  return (
    <div className="w-full flex flex-col gap-3 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--brand-bg)] text-[var(--brand-solid)] text-xs font-medium">
          {Icon && <Icon className="w-3.5 h-3.5" />}
          {category}
        </span>
        <span className={cn("px-2.5 py-1 rounded-lg text-xs font-medium capitalize", difficultyStyles[difficulty])}>
          {difficulty}
        </span>
      </div>
      <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border)]">
        <code className="text-sm font-mono">&quot;{prompt}&quot;</code>
      </div>
      <p className="text-sm text-[var(--muted)]">{description}</p>
    </div>
  );
}
