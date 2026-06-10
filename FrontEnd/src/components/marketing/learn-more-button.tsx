import type { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";
import { PillButton } from "@/components/marketing/pill-button";
import { cn } from "@/lib/utils";

type LearnMoreButtonProps = ComponentProps<typeof PillButton>;

export function LearnMoreButton({
  className,
  children = "Learn More",
  ...props
}: LearnMoreButtonProps) {
  return (
    <PillButton className={cn("gap-2", className)} {...props}>
      {children}
      <ChevronRight className="size-5" aria-hidden />
    </PillButton>
  );
}
