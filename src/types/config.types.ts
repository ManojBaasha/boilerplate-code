import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export type DisplayConfig = {
  location: boolean;
  time: boolean;
  themeSwitcher: boolean;
};

export type RoutesConfig = Record<string, boolean>;

export type FontsConfig = {
  heading: NextFontWithVariable;
  body: NextFontWithVariable;
  label: NextFontWithVariable;
  code: NextFontWithVariable;
};

export type SchemaConfig = {
  logo: string;
  type: string;
  name: string;
  description: string;
  email: string;
};
