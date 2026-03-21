import { DisplayConfig, FontsConfig, RoutesConfig, SchemaConfig } from "@/types";
import { Geist, Geist_Mono } from "next/font/google";

export const baseURL = "https://mergeworthy.ai";

export const routes: RoutesConfig = {
  "/": true,
  "/dashboard": true,
  "/prompts": true,
  "/docs": true,
};

export const display: DisplayConfig = {
  location: false,
  time: false,
  themeSwitcher: true,
};

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const fonts: FontsConfig = { heading, body, label, code };

export const schema: SchemaConfig = {
  logo: "",
  type: "SoftwareApplication",
  name: "MergeWorthy-AI",
  description: "Your UI fixed by AI. You pick the winner.",
  email: "",
};
