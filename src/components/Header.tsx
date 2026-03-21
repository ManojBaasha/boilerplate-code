"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHouseDuotone } from "react-icons/pi";
import { HiOutlineChartBar, HiOutlineCommandLine } from "react-icons/hi2";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { routes, display, dashboard, prompts, docs } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { path: "/", label: "Home", icon: PiHouseDuotone, configKey: "/" },
  { path: "/dashboard", label: dashboard.label, icon: HiOutlineChartBar, configKey: "/dashboard" },
  { path: "/prompts", label: prompts.label, icon: HiOutlineCommandLine, configKey: "/prompts" },
  { path: "/docs", label: docs.label, icon: PiBookBookmarkDuotone, configKey: "/docs" },
];

export function Header() {
  const pathname = usePathname() ?? "";

  return (
    <header className="sticky top-0 z-50 w-full p-2 flex justify-center">
      {/* Desktop fade top */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--background)] to-transparent pointer-events-none z-40 hidden md:block" />

      <nav className="relative z-50 flex items-center gap-1 px-1.5 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl shadow-lg">
        {navItems.map((item) => {
          if (!routes[item.configKey]) return null;
          const isActive = item.path === "/" ? pathname === "/" : pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-[var(--surface)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          );
        })}

        {display.themeSwitcher && (
          <>
            <div className="w-px h-6 bg-[var(--border)] mx-1" />
            <ThemeToggle />
          </>
        )}
      </nav>

      {/* Mobile bottom fade */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none z-40 md:hidden" />
    </header>
  );
}
