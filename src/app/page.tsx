import { home, baseURL } from "@/resources";
import { HeroSection } from "@/components/landing/HeroSection";
import { BuiltWithBar } from "@/components/landing/BuiltWithBar";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  openGraph: {
    title: home.title,
    description: home.description,
    url: baseURL,
  },
};

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Your UI fixed by AI; you pick the winner.</h1>
      <HeroSection />
      <BuiltWithBar />
      <FeaturesSection />
      <WorkflowSection />
      <DashboardPreview />
      <StatsSection />
      <CTASection />
    </div>
  );
}