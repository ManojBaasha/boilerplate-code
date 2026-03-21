"use client";

export function TerminalMockup() {
  return (
    <div className="relative overflow-hidden w-full max-w-xl bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <p className="text-sm font-mono text-[var(--muted)] mb-2">$ mergeworthy fix</p>
      <p className="text-sm font-mono text-[var(--brand-solid)]">
        &gt; &quot;Make the header sticky and add a subtle shadow on scroll&quot;
        <span className="inline-block w-2 h-[18px] bg-[var(--brand-solid)] ml-1 align-text-bottom animate-blink" />
      </p>
      <p className="text-sm font-mono text-[var(--muted)] mt-3">Generating fixes with selected models...</p>
      <p className="text-sm font-mono text-[var(--accent-solid)]">Gemini 2.5 Pro .. deployed</p>
      <p className="text-sm font-mono text-[var(--accent-solid)]">Claude Sonnet ... deployed</p>
      <p className="text-sm font-mono text-[var(--accent-solid)]">GPT-4o ......... deployed</p>
    </div>
  );
}
