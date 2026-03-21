import { FadeIn } from "@/components/FadeIn";
import { home } from "@/resources";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-12">
      <FadeIn>
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to fix UI with AI
          </h2>
          <p className="text-lg text-[var(--muted)]">
            From natural language to merged PR in under a minute
          </p>
        </div>
      </FadeIn>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {home.features.map((feature, i) => (
          <FadeIn key={feature.title} delay={0.05 * i}>
            <FeatureCard {...feature} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
