import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export function PromptBanner() {
  return (
    <div className="w-full flex flex-col gap-3 p-6 bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded-xl">
      <h3 className="text-lg font-semibold">Want to restyle this dashboard?</h3>
      <p className="text-sm text-[var(--muted)]">Try MergeWorthy with prompts like:</p>
      <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border)]">
        <code className="text-sm font-mono text-[var(--brand-solid)]">
          &quot;Add hover effects and subtle shadows to all dashboard cards&quot;
        </code>
      </div>
      <div>
        <Link
          href="/prompts"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-lg text-sm hover:bg-[var(--surface)] transition"
        >
          See more example prompts
          <HiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
