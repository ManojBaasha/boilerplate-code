"use client";

import { FadeIn } from "@/components/FadeIn";
import { iconLibrary } from "@/resources/icons";
import { home } from "@/resources";

export function WorkflowSection() {
  return (
    <div id="workflow" className="w-full flex flex-col items-center gap-8 py-12">
      <FadeIn>
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="text-lg text-[var(--muted)]">Four steps from idea to merged code</p>
        </div>
      </FadeIn>
      <div className="flex flex-col md:flex-row items-center justify-center gap-0">
        {home.workflow.map((step, i) => {
          const Icon = iconLibrary[step.icon];
          return (
            <FadeIn key={step.step} delay={0.1 * i}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center gap-3 px-4 py-4 min-w-[160px]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-bg)] border border-[var(--brand-border)]">
                    {Icon && <Icon className="w-5 h-5 text-[var(--brand-solid)]" />}
                  </div>
                  <h3 className="text-lg font-semibold text-center">{step.title}</h3>
                  <p className="text-sm text-[var(--muted)] text-center max-w-[140px]">
                    {step.description}
                  </p>
                </div>
                {i < home.workflow.length - 1 && (
                  <>
                    <div className="hidden md:block w-12 h-0.5 bg-[var(--border)]" />
                    <div className="md:hidden w-0.5 h-8 bg-[var(--border)]" />
                  </>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
