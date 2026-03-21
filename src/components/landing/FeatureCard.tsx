import { iconLibrary } from "@/resources/icons";
import type { Feature } from "@/types";

export function FeatureCard({ icon, title, description }: Feature) {
  const Icon = iconLibrary[icon];

  return (
    <div className="flex flex-col gap-3 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg">
      {Icon && <Icon className="w-6 h-6 text-[var(--brand-solid)]" />}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-[var(--muted)]">{description}</p>
    </div>
  );
}
