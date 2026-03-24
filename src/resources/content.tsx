import { Dashboard, Docs, Home, Product, Prompts, Social } from "@/types";

const product: Product = {
  name: "MergeWorthy",
  tagline: "Your UI fixed by AI. You pick the winner.",
  description:
    "Describe a UI fix in plain English. Up to 8 AI models race to solve it. Compare live Vercel previews side by side. Merge the best one.",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ManojBaasha/MergeWorthy-AI",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "MergeWorthy-AI | Your UI fixed by AI",
  description:
    "Describe a UI fix in plain English. Up to 8 AI models race to solve it. Compare live previews. Merge the best.",
  headline: <>Merge Like a Pro!</>,
  featured: {
    display: true,
    title: <>Built at Vercel x DeepMind Hackathon</>,
    href: "#workflow",
  },
  subline: (
    <>
      Your go-to AI buddy for effortless merging. {"Let's"} get it!
    </>
  ),
  features: [
    {
      icon: "chat",
      title: "Natural Language Prompts",
      description:
        "Describe what you want fixed in plain English. No code required to get started.",
    },
    {
      icon: "cpu",
      title: "Multi-Model AI Generation",
      description:
        "8 models from Google, Anthropic, and OpenAI — including Gemini 2.5 Pro, Claude Opus, and GPT-4o — compete in parallel.",
    },
    {
      icon: "compare",
      title: "Live Preview Comparison",
      description:
        "Each solution gets deployed to Vercel. Compare them side by side in real time.",
    },
    {
      icon: "checkCircle",
      title: "One-Click Merge",
      description:
        "Pick your favorite fix. A GitHub PR is created and merged with one click.",
    },
    {
      icon: "deploy",
      title: "Vercel Integration",
      description:
        "Auto-deploy every AI-generated fix to a unique preview branch on Vercel.",
    },
    {
      icon: "code",
      title: "GitHub Native",
      description:
        "Works with your existing GitHub repos. PRs, branches, and commits — all standard.",
    },
  ],
  workflow: [
    {
      step: 1,
      title: "Describe",
      description: "Tell MergeWorthy what to fix in natural language",
      icon: "chat",
    },
    {
      step: 2,
      title: "Generate",
      description: "Up to 8 AI models create competing solutions in parallel",
      icon: "sparkles",
    },
    {
      step: 3,
      title: "Compare",
      description: "Preview live deployments side by side on Vercel",
      icon: "compare",
    },
    {
      step: 4,
      title: "Merge",
      description: "Pick the winner and merge via GitHub PR",
      icon: "checkCircle",
    },
  ],
  stats: [
    { value: "8", label: "AI Models Available" },
    { value: "<30s", label: "Generation Time" },
    { value: "1-Click", label: "Fix to Merged PR" },
    { value: "100%", label: "Vercel-Native" },
  ],
};

const dashboard: Dashboard = {
  path: "/dashboard",
  label: "Dashboard",
  title: "Demo Dashboard | MergeWorthy-AI",
  description:
    "A sample SaaS dashboard to demonstrate MergeWorthy-AI capabilities.",
};

const prompts: Prompts = {
  path: "/prompts",
  label: "Prompts",
  title: "Example Prompts | MergeWorthy-AI",
  description:
    "Example prompts showing what you can ask MergeWorthy to fix on the demo dashboard.",
};

const docs: Docs = {
  path: "/docs",
  label: "Docs",
  title: "Documentation | MergeWorthy-AI",
  description:
    "Learn how MergeWorthy-AI works, its architecture, and how to get started.",
};

export { product, social, home, dashboard, prompts, docs };
