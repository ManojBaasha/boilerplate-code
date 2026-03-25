"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { FadeIn } from "@/components/FadeIn";
import { home, social } from "@/resources";
import { TerminalMockup } from "./TerminalMockup";

export function HeroSection() {
  const githubLink = social.find((s) => s.name === "GitHub")?.link || "#";

  return (
    <div className="flex flex-col items-center gap-8 pt-24 pb-12">
      {home.featured.display && (
        <FadeIn delay={0}>
          <a
            href={home.featured.href}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-bg)] text-sm text-[var(--brand-solid)] hover:opacity-80 transition"
          >
            {home.featured.title}
            <HiArrowRight className="w-3.5 h-3.5" />
          </a>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center leading-tight">
          UI Fixes That Actually Slap,&nbsp;<br /> No Cap 🔥
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-[var(--muted)] text-center text-balance">
            {home.subline}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex gap-4 pt-2">
          <Link
            href={githubLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-solid)] text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Say Less, Let&apos;s Go
            <HiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={githubLink}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg font-medium hover:bg-[var(--surface)] transition"
          >
            <FaGithub className="w-4 h-4" />
            View on GitHub
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} className="w-full flex justify-center pt-6">
        <TerminalMockup />
      </FadeIn>
    </div>
  );
}
