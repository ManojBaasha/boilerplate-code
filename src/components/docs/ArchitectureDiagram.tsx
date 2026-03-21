"use client";

export function ArchitectureDiagram() {
  return (
    <div className="w-full flex justify-center p-6">
      <svg viewBox="0 0 800 320" width="100%" preserveAspectRatio="xMidYMid meet" style={{ maxWidth: 700 }}>
        {/* User */}
        <rect x="10" y="130" width="110" height="50" rx="8" fill="var(--brand-bg)" stroke="var(--brand-border)" strokeWidth="1.5" />
        <text x="65" y="160" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">User</text>

        <line x1="120" y1="155" x2="200" y2="155" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* MergeWorthy */}
        <rect x="200" y="120" width="150" height="70" rx="10" fill="var(--brand-bg)" stroke="var(--brand-solid)" strokeWidth="2" />
        <text x="275" y="150" textAnchor="middle" fill="var(--brand-solid)" fontSize="13" fontWeight="700">MergeWorthy</text>
        <text x="275" y="170" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-code)">Next.js + AI SDK</text>

        <line x1="350" y1="135" x2="430" y2="60" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="350" y1="155" x2="430" y2="155" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="350" y1="175" x2="430" y2="250" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Providers */}
        <rect x="430" y="30" width="140" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent-solid)" strokeWidth="1.5" opacity="0.7" />
        <text x="500" y="52" textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600">Google AI</text>
        <text x="500" y="68" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-code)">Gemini Pro / Flash</text>

        <rect x="430" y="130" width="140" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent-solid)" strokeWidth="1.5" opacity="0.7" />
        <text x="500" y="152" textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600">Anthropic</text>
        <text x="500" y="168" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-code)">Opus / Sonnet / Haiku</text>

        <rect x="430" y="230" width="140" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent-solid)" strokeWidth="1.5" opacity="0.7" />
        <text x="500" y="252" textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600">OpenAI</text>
        <text x="500" y="268" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="var(--font-code)">GPT-4o / o3-mini</text>

        <line x1="570" y1="55" x2="630" y2="120" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="570" y1="155" x2="630" y2="155" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <line x1="570" y1="255" x2="630" y2="185" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

        {/* Vercel */}
        <rect x="630" y="115" width="150" height="80" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="705" y="148" textAnchor="middle" fill="var(--foreground)" fontSize="13" fontWeight="600">Vercel</text>
        <text x="705" y="165" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-code)">Preview Deploys</text>
        <text x="705" y="180" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="var(--font-code)">+ GitHub PRs</text>

        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="var(--border)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
