import { Card, CardContent } from "@/components/ui/card";

/* ----------------------------------
 Empty State Component
---------------------------------- */

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
};

export const EmptyState = ({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) => {
  return (
    <section className="flex justify-center py-20">
      <Card className="w-full max-w-lg border-dashed">
        <CardContent className="flex flex-col items-center text-center gap-4 py-12">
          {/* ICON */}
          {icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
              {icon}
            </div>
          )}

          {/* TITLE */}
          <h3 className="text-xl font-semibold font-clash">
            {title}
          </h3>

          {/* DESCRIPTION */}
          {description && (
            <p className="text-sm text-muted-foreground max-w-sm">
              {description}
            </p>
          )}

          {/* OPTIONAL ACTION (button / link) */}
          {action && <div className="pt-2">{action}</div>}
        </CardContent>
      </Card>
    </section>
  );
};
