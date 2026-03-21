import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FadeIn } from "@/components/FadeIn";

export function DashboardPreview() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-12">
      <FadeIn>
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            The target: a dashboard that needs your touch
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Below is a sample SaaS dashboard. MergeWorthy lets you describe changes in plain English —
            then AI models compete to implement them.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="w-full">
        <div className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 space-y-4">
          {/* Mini KPI cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", value: "$48,235" },
              { label: "Users", value: "2,847" },
              { label: "Conversion", value: "3.24%" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                <p className="text-xs font-medium text-[var(--muted)]">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          {/* Mini charts */}
          <div className="flex gap-3">
            <div className="flex-[2] p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
              <p className="text-xs font-medium text-[var(--muted)] mb-2">Revenue Trend</p>
              <svg viewBox="0 0 400 80" width="100%" height="60" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="previewGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-solid)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--brand-solid)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points="0,65 33,52 66,56 100,44 133,46 166,36 200,38 233,28 266,32 300,22 333,26 366,12 400,16 400,80 0,80" fill="url(#previewGrad)" />
                <polyline points="0,65 33,52 66,56 100,44 133,46 166,36 200,38 233,28 266,32 300,22 333,26 366,12 400,16" fill="none" stroke="var(--brand-solid)" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] flex flex-col items-center">
              <p className="text-xs font-medium text-[var(--muted)] mb-2">Traffic</p>
              <svg viewBox="0 0 80 80" width="60" height="60">
                <circle cx="40" cy="40" r="30" fill="none" stroke="var(--brand-solid)" strokeWidth="8" strokeDasharray="66 122" strokeDashoffset="0" transform="rotate(-90 40 40)" />
                <circle cx="40" cy="40" r="30" fill="none" stroke="var(--accent-solid)" strokeWidth="8" strokeDasharray="53 135" strokeDashoffset="-66" transform="rotate(-90 40 40)" />
              </svg>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-lg text-sm hover:bg-[var(--surface)] transition"
            >
              Explore Full Dashboard
              <HiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
