"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export const AccordionItem = ({ question = "", answer = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-300 cursor-pointer">
      <button
        type="button"
        className="w-full cursor-pointer flex items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-base text-neutral-800">
          {question}
        </span>

        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-neutral-800">
          {isOpen ? (
            <Minus className="w-4 h-4 text-neutral-800" />
          ) : (
            <Plus className="w-4 h-4 text-neutral-800" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pb-4 text-sm text-neutral-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};
