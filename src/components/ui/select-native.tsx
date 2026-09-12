import * as React from "react";
import { cn } from "@/lib/utils";

export const SelectNative = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-10 w-full appearance-none rounded-sm bg-surface-2 px-3 pr-8 text-sm text-fg shadow-[var(--shadow-border)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "bg-[length:12px] bg-[right_10px_center] bg-no-repeat",
      className,
    )}
    style={{
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'><path d='M2.5 4.5L6 8L9.5 4.5' stroke='%238b9690' stroke-width='1.4' stroke-linecap='round'/></svg>")`,
    }}
    {...props}
  >
    {children}
  </select>
));
SelectNative.displayName = "SelectNative";
