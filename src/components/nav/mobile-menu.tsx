"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About Vegatem®", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Partnerships", href: "#partnerships" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-background shadow-lg border-t">
          <div className="flex flex-col gap-4 p-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
