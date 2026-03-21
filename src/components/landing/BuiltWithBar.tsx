import { HiOutlineSparkles, HiOutlineBolt, HiOutlineCpuChip } from "react-icons/hi2";

const providers = [
  {
    name: "Google",
    models: ["Gemini 2.5 Pro", "Gemini 2.5 Flash"],
    Icon: HiOutlineSparkles,
  },
  {
    name: "Anthropic",
    models: ["Claude Opus", "Claude Sonnet", "Claude Haiku"],
    Icon: HiOutlineCpuChip,
  },
  {
    name: "OpenAI",
    models: ["GPT-4o", "GPT-4o Mini", "o3-mini"],
    Icon: HiOutlineBolt,
  },
];

export function BuiltWithBar() {
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
        8 models across 3 providers
      </span>
      <div className="flex flex-wrap justify-center gap-3">
        {providers.map((provider) => (
          <span
            key={provider.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm"
          >
            <provider.Icon className="w-4 h-4 text-[var(--brand-solid)]" />
            {provider.name}
          </span>
        ))}
      </div>
    </div>
  );
}
