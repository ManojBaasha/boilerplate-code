import { baseURL, dashboard } from "@/resources";
import { kpiData } from "@/data/dashboard";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TrafficSourcesChart } from "@/components/dashboard/TrafficSourcesChart";
import { UserGrowthChart } from "@/components/dashboard/UserGrowthChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { PromptBanner } from "@/components/dashboard/PromptBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: dashboard.title,
  description: dashboard.description,
};

export default function DashboardPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Demo Dashboard</h1>
        <p className="text-lg text-[var(--muted)]">
          A sample SaaS analytics dashboard. Use MergeWorthy to describe changes — AI models will compete to implement them.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <RevenueChart />
        <TrafficSourcesChart />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <UserGrowthChart />
        <RecentOrdersTable />
      </div>

      <PromptBanner />
    </div>
  );
}
