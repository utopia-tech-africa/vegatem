"use client";

import { SecondaryButton } from "@/components/custom-buttons/secondary-button";
import Link from "next/link";

export function WhatsVegatemContent() {
  return (
    <div className="flex flex-col gap-6 py-8 md:py-12 text-background">
      <span className="text-base font-bold">What is Vegatem?</span>

      <h2 className="font-clash font-semibold text-3xl md:text-4xl lg:text-5xl">
        Your best bet against malaria
      </h2>

      <p className="text-base  max-w-xl">
        Vegatem® is a malaria treatment designed for patients in endemic regions
        where the disease remains a significant public health challenge. It
        represents a practical approach to care where it is needed most.
      </p>

      <ul className="list-disc list-inside space-y-2 ">
        <li>Proven treatment efficacy</li>
        <li>Accessible to affected populations</li>
        <li>Supports regional health initiatives</li>
      </ul>

      <div className="pt-4">
        <Link href="#partnerships">
          <SecondaryButton
            className="border border-secondary-3 shadow-sm"
            onClick={() => {
              document.getElementById("partnerships")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Become a retailer
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
}
