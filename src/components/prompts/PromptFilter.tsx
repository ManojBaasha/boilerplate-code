"use client";

import { useState } from "react";
import { Column, Row, ToggleButton } from "@once-ui-system/core";
import { examplePrompts } from "@/data/prompts";
import { PromptCard } from "./PromptCard";

const categories = ["All", "Layout", "Styling", "Data Viz", "UX"] as const;

export const PromptFilter = () => {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? examplePrompts
      : examplePrompts.filter((p) => p.category === active);

  return (
    <Column fillWidth gap="l">
      <Row gap="8" wrap>
        {categories.map((cat) => (
          <ToggleButton
            key={cat}
            label={cat}
            selected={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </Row>
      <Column fillWidth gap="16">
        {filtered.map((prompt) => (
          <PromptCard key={prompt.id} {...prompt} />
        ))}
      </Column>
    </Column>
  );
};
