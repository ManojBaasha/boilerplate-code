import { docs } from "@/resources";
import { ArchitectureDiagram } from "@/components/docs/ArchitectureDiagram";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: docs.title,
  description: docs.description,
};

const techStack = [
  "Next.js 14", "React 18", "TypeScript", "Tailwind CSS",
  "Vercel AI SDK", "Gemini API", "Claude API", "OpenAI API",
  "GitHub API (Octokit)", "NextAuth", "Vercel KV",
];

const steps = [
  { step: 1, title: "Sign in with GitHub", description: "Authenticate with your GitHub account to grant MergeWorthy access to your repositories." },
  { step: 2, title: "Connect your repository", description: "Enter your GitHub repo (owner/repo) and Vercel Project ID to link your project." },
  { step: 3, title: "Select AI models", description: "Choose from 8 models across Google (Gemini 2.5 Pro/Flash), Anthropic (Claude Opus/Sonnet/Haiku), and OpenAI (GPT-4o, GPT-4o Mini, o3-mini)." },
  { step: 4, title: "Describe the fix", description: "Type a natural language description of the UI change you want. The chat assistant helps refine your request." },
  { step: 5, title: "Review and merge", description: "Compare live preview deployments side by side. Pick the best fix and merge it via GitHub PR with one click." },
];

export default function DocsPage() {
  return (
    <div className="w-full max-w-[768px] mx-auto flex flex-col gap-12 py-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">About MergeWorthy-AI</h1>
        <p className="text-lg text-[var(--muted)]">
          MergeWorthy-AI is an AI-powered UI fix generation and comparison platform built at the
          Vercel x DeepMind Hackathon. It lets developers describe UI fixes in natural language,
          generates competing solutions from multiple AI models, deploys each to Vercel for
          live comparison, and merges the best one via GitHub PR.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Architecture</h2>
        <p className="text-[var(--muted)]">
          User prompts flow through MergeWorthy to your selected AI models in parallel.
          Each model&apos;s output is committed to a unique branch and auto-deployed to Vercel.
          The user compares live previews and merges their pick via GitHub PR.
        </p>
        <div className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4">
          <ArchitectureDiagram />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Use</h2>
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--brand-bg)] border border-[var(--brand-border)] shrink-0">
                <span className="text-sm font-semibold text-[var(--brand-solid)]">{s.step}</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-[var(--muted)]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Built at Vercel x DeepMind Hackathon</h2>
        <p className="text-[var(--muted)]">
          MergeWorthy-AI was created during the Vercel x DeepMind Hackathon, combining
          Google&apos;s Gemini, Anthropic&apos;s Claude, and OpenAI&apos;s GPT models to create
          a multi-model AI comparison tool for UI development.
        </p>
      </div>
    </div>
  );
}
