import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SecondaryButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={cn(
        "bg-white text-foreground cursor-pointer rounded hover:bg-white/90 font-medium border border-secondary-3/80",
        className,
      )}
    >
      {children}
    </Button>
  );
}
