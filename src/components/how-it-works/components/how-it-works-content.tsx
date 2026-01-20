"use client";

import { cn } from "@/lib/utils";

export type HowItWorksItem = {
  title: string;
  description: string;
};

export function HowItWorksContent({
  items,
  activeIndex,
}: {
  items: HowItWorksItem[];
  activeIndex: number;
}) {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={item.title}
            className={cn(
              "pl-6 border-l-3 transition-all duration-500",
              isActive
                ? "border-primary-1 text-foreground"
                : "border-transparent text-secondary-2",
            )}
          >
            <h3
              className={cn(
                "font-clash font-semibold mb-2 transition-colors duration-500 text-2xl",
                isActive ? "text-foreground" : "text-secondary-2",
              )}
            >
              {item.title}
            </h3>

            <p
              className={cn(
                "text-base transition-colors duration-500",
                isActive ? "text-foreground" : "text-secondary-2",
              )}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
