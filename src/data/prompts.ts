import { ExamplePrompt } from "@/types";

export const examplePrompts: ExamplePrompt[] = [
  {
    id: "layout-1",
    prompt: "Make the KPI cards stack in a 2x2 grid on mobile instead of a single column",
    category: "Layout",
    difficulty: "easy",
    description: "Adjusts the responsive breakpoint so KPI cards form a 2-column grid on smaller screens rather than stacking vertically.",
  },
  {
    id: "layout-2",
    prompt: "Add a collapsible sidebar navigation with links to each dashboard section",
    category: "Layout",
    difficulty: "hard",
    description: "Creates a new sidebar component with smooth expand/collapse animation and anchor links to each chart section.",
  },
  {
    id: "layout-3",
    prompt: "Move the revenue chart to full width and place the donut chart below it",
    category: "Layout",
    difficulty: "easy",
    description: "Changes the flex layout so the revenue chart spans the full row, with the traffic sources chart on a new row below.",
  },
  {
    id: "styling-1",
    prompt: "Change the dashboard to a dark theme with neon accent colors and glowing borders",
    category: "Styling",
    difficulty: "medium",
    description: "Updates card borders to use neon glow effects with box-shadow, switches accent colors to bright cyan/magenta.",
  },
  {
    id: "styling-2",
    prompt: "Add alternating row colors to the orders table for better readability",
    category: "Styling",
    difficulty: "easy",
    description: "Applies zebra-striping to table rows with subtle background color alternation.",
  },
  {
    id: "styling-3",
    prompt: "Add subtle box shadows and scale-up hover effects to all dashboard cards",
    category: "Styling",
    difficulty: "easy",
    description: "Adds CSS transitions for transform and box-shadow on hover across all card components.",
  },
  {
    id: "dataviz-1",
    prompt: "Add data labels showing exact values on top of each bar in the user growth chart",
    category: "Data Viz",
    difficulty: "medium",
    description: "Renders SVG text elements positioned above each bar displaying the user count.",
  },
  {
    id: "dataviz-2",
    prompt: "Add animated tooltips that show exact values when hovering over chart data points",
    category: "Data Viz",
    difficulty: "hard",
    description: "Implements interactive SVG overlay with mouse tracking to show value tooltips on the revenue line chart.",
  },
  {
    id: "ux-1",
    prompt: "Add a date range picker at the top of the dashboard to filter all charts",
    category: "UX",
    difficulty: "hard",
    description: "Creates a date range selector component that filters the displayed data across all dashboard visualizations.",
  },
  {
    id: "ux-2",
    prompt: "Add loading skeleton animations that appear while dashboard data loads",
    category: "UX",
    difficulty: "medium",
    description: "Implements pulsing skeleton placeholders matching the shape of each chart and card component.",
  },
];
