import { IconName } from "@/resources/icons";

export type Product = {
  name: string;
  tagline: string;
  description: string;
};

export type Social = Array<{
  name: string;
  icon: IconName;
  link: string;
}>;

export interface BasePageConfig {
  path: `/${string}` | string;
  label: string;
  title: string;
  description: string;
  image?: `/images/${string}` | string;
}

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export type WorkflowStep = {
  step: number;
  title: string;
  description: string;
  icon: IconName;
};

export type Stat = {
  value: string;
  label: string;
};

export type ExamplePrompt = {
  id: string;
  prompt: string;
  category: "Layout" | "Styling" | "Data Viz" | "UX";
  difficulty: "easy" | "medium" | "hard";
  description: string;
};

export interface Home extends BasePageConfig {
  image: `/images/${string}` | string;
  headline: React.ReactNode;
  subline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  features: Feature[];
  workflow: WorkflowStep[];
  stats: Stat[];
}

export interface Dashboard extends BasePageConfig {}
export interface Prompts extends BasePageConfig {}
export interface Docs extends BasePageConfig {}
