"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { examplePrompts } from "@/data/prompts";
import { PromptCard } from "./PromptCard";

const categories = ["All", "Layout", "Styling", "Data Viz", "UX"] as const;

export function PromptFilter() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? examplePrompts
      : examplePrompts.filter((p) => p.category === active);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer",
              active === cat
                ? "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {filtered.map((prompt) => (
          <PromptCard key={prompt.id} {...prompt} />
        ))}
      </div>
    </div>
  );
}
