import { Column, Meta, Schema } from "@once-ui-system/core";
import { home, baseURL } from "@/resources";
import { HeroSection } from "@/components/landing/HeroSection";
import { BuiltWithBar } from "@/components/landing/BuiltWithBar";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="0" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
      />
      <HeroSection />
      <BuiltWithBar />
      <FeaturesSection />
      <WorkflowSection />
      <DashboardPreview />
      <StatsSection />
      <CTASection />
    </Column>
  );
}
