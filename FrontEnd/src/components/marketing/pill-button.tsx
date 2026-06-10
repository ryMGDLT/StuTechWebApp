import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PillButtonProps = ComponentProps<typeof Button>;

export function PillButton({ className, ...props }: PillButtonProps) {
  return (
    <Button
      className={cn(
        "h-auto rounded-full px-6 py-3 text-base font-medium",
        className,
      )}
      {...props}
    />
  );
}
