import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { FadeIn } from "@/components/FadeIn";
import { social } from "@/resources";

export function CTASection() {
  const githubLink = social.find((s) => s.name === "GitHub")?.link || "#";

  return (
    <FadeIn>
      <div className="relative w-full flex flex-col items-center gap-6 p-12 rounded-xl border border-[var(--brand-border)] bg-[var(--surface)] overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-bg)] to-transparent pointer-events-none" />
        <div className="absolute inset-0 dot-pattern pointer-events-none" />

        <h2 className="relative text-3xl md:text-4xl font-bold text-center">
          Ready to fix your UI with AI?
        </h2>
        <p className="relative text-lg text-[var(--muted)] text-center">
          Connect your repo and start generating fixes in seconds.
        </p>
        <div className="relative flex gap-4">
          <Link
            href={githubLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-solid)] text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Started
            <HiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={githubLink}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--surface)] transition"
          >
            <FaGithub className="w-4 h-4" />
            View Source
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
