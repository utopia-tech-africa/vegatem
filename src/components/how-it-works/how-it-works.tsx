"use client";

import { useEffect, useState } from "react";
import { ComponentLayout } from "@/components/component-layout";
import { HowItWorksContent } from "./components/how-it-works-content";
import { HowItWorksImage } from "./components/how-it-works-image";

const ITEMS = [
  {
    title: "Targets the parasite",
    description:
      "Vegatem works by disrupting the malaria parasite's ability to survive and multiply within the bloodstream. This direct action helps the body clear the infection and restore health.",
  },
  {
    title: "Rapid symptom relief",
    description:
      "Patients typically experience improvement in fever and other acute symptoms within days of starting treatment. The medication's mechanism allows for faster recovery and return to daily life.",
  },
  {
    title: "Proven in endemic areas",
    description:
      "Vegatem has demonstrated consistent results across malaria-affected regions where the disease burden is highest. Its effectiveness supports both individual patient outcomes and broader public health goals.",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ITEMS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="w-full py-20 ">
      <ComponentLayout className="">
        {/* Header */}
        <h2 className="text-xl font-bold text-primary-1 mb-2">
          How does Vegatem® work?
        </h2>

        {/* Main container */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Content */}
          <div className="flex-1 my-auto">
            <HowItWorksContent items={ITEMS} activeIndex={activeIndex} />
          </div>

          {/* Image */}
          <div className="flex-1 my-auto h-full w-full">
            <HowItWorksImage activeIndex={activeIndex} />
          </div>
        </div>

        {/* Footer statement */}
        <div className="mt-10 ">
          <p className="font-clash text-center font-semibold text-[22px] md:text-[24px] leading-8 w-full mx-auto">
            Always test before treatment. A confirmed malaria test ensures
            Vegatem® is used appropriately, helping patients receive the right
            care at the right time while avoiding unnecessary or incorrect
            medication use.
          </p>
        </div>
      </ComponentLayout>
    </section>
  );
}
