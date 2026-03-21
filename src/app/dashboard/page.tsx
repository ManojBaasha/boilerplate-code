import { Column, Heading, Meta, Row, Text } from "@once-ui-system/core";
import { baseURL, dashboard } from "@/resources";
import { kpiData } from "@/data/dashboard";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TrafficSourcesChart } from "@/components/dashboard/TrafficSourcesChart";
import { UserGrowthChart } from "@/components/dashboard/UserGrowthChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { PromptBanner } from "@/components/dashboard/PromptBanner";

export async function generateMetadata() {
  return Meta.generate({
    title: dashboard.title,
    description: dashboard.description,
    baseURL: baseURL,
    path: dashboard.path,
  });
}

export default function DashboardPage() {
  return (
    <Column maxWidth="l" gap="l" paddingY="l" fillWidth>
      <Column gap="8" paddingBottom="8">
        <Heading variant="display-strong-s">Demo Dashboard</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          A sample SaaS analytics dashboard. Use MergeWorthy to describe changes — AI models will compete to implement them.
        </Text>
      </Column>

      <Row fillWidth gap="16" wrap>
        {kpiData.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </Row>

      <Row fillWidth gap="16" s={{ direction: "column" }}>
        <RevenueChart />
        <TrafficSourcesChart />
      </Row>

      <Row fillWidth gap="16" s={{ direction: "column" }}>
        <UserGrowthChart />
        <RecentOrdersTable />
      </Row>

      <PromptBanner />
    </Column>
  );
}
