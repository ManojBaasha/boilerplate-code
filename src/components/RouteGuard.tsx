"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/resources";
import NotFound from "@/app/not-found";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const enabled = pathname ? routes[pathname] ?? false : false;
    setIsRouteEnabled(enabled);
    setLoading(false);
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full py-32">
        <div className="w-6 h-6 border-2 border-[var(--muted)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  return <>{children}</>;
}
