import { FadeIn } from "@/components/FadeIn";
import { home } from "@/resources";

export function StatsSection() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 py-12">
      {home.stats.map((stat, i) => (
        <FadeIn key={stat.label} delay={0.1 * i}>
          <div className="flex flex-col items-center gap-1 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
            <span className="text-3xl md:text-4xl font-bold text-[var(--brand-solid)]">
              {stat.value}
            </span>
            <span className="text-sm text-[var(--muted)] text-center">{stat.label}</span>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
