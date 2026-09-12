import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  title,
  action,
  children,
  className,
  bodyClassName,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section
      className={cn(
        "flex min-h-0 flex-col rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
        className,
      )}
    >
      <header className="mb-3 flex items-center justify-between gap-3 px-1">
        <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{title}</h2>
        {action}
      </header>
      <div className={cn("min-h-0 flex-1", bodyClassName)}>{children}</div>
    </section>
  );
}
