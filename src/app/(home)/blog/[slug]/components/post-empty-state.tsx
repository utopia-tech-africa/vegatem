import { AlertTriangle } from "lucide-react";
import { EmptyState } from "@/components/empty-state/empty-state";

export const PostEmptyState = () => (
  <EmptyState
    title="Article not found"
    description="This blog post may have been removed or is unavailable."
    icon={<AlertTriangle className="h-12 w-12" />}
  />
);
