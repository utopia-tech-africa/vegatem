import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrimaryGradientButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={cn("text-white rounded cursor-pointer font-medium", className)}
      style={{
        background: "linear-gradient(to bottom, #00540a, #35a142)",
      }}
    >
      {children}
    </Button>
  );
}
