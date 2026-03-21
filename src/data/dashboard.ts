export const revenueData = [
  { month: "Jan", value: 28400 },
  { month: "Feb", value: 31200 },
  { month: "Mar", value: 29800 },
  { month: "Apr", value: 35100 },
  { month: "May", value: 33600 },
  { month: "Jun", value: 38200 },
  { month: "Jul", value: 36900 },
  { month: "Aug", value: 41500 },
  { month: "Sep", value: 39800 },
  { month: "Oct", value: 44200 },
  { month: "Nov", value: 42100 },
  { month: "Dec", value: 48235 },
];

export const trafficSources = [
  { source: "Direct", value: 35, color: "var(--brand-solid)" },
  { source: "Organic", value: 28, color: "var(--accent-solid)" },
  { source: "Referral", value: 22, color: "var(--brand-border)" },
  { source: "Social", value: 15, color: "var(--muted)" },
];

export const userGrowthData = [
  { week: "W1", users: 180 },
  { week: "W2", users: 220 },
  { week: "W3", users: 195 },
  { week: "W4", users: 280 },
  { week: "W5", users: 310 },
  { week: "W6", users: 290 },
  { week: "W7", users: 350 },
  { week: "W8", users: 420 },
];

export const recentOrders = [
  { id: "#1234", customer: "Alice Chen", amount: "$249.00", status: "Completed" as const, date: "Mar 20" },
  { id: "#1235", customer: "Bob Rivera", amount: "$129.00", status: "Pending" as const, date: "Mar 20" },
  { id: "#1236", customer: "Carol Kim", amount: "$89.00", status: "Completed" as const, date: "Mar 19" },
  { id: "#1237", customer: "Dave Patel", amount: "$449.00", status: "Processing" as const, date: "Mar 19" },
  { id: "#1238", customer: "Eve Johnson", amount: "$199.00", status: "Completed" as const, date: "Mar 18" },
];

export const kpiData = [
  { title: "Total Revenue", value: "$48,235", change: "+12.5%", trend: "up" as const },
  { title: "Active Users", value: "2,847", change: "+8.2%", trend: "up" as const },
  { title: "Conversion Rate", value: "3.24%", change: "-0.4%", trend: "down" as const },
  { title: "Avg. Session", value: "4m 32s", change: "+1.1%", trend: "up" as const },
];
