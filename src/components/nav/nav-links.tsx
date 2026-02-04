"use client";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About Vegatem®", href: "#about-vegatem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Blog", href: "/blog" },
];

const rawIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          className=" font-bold text-foreground/80 hover:text-primary-2 transition"
          onClick={() => {
            document.getElementById(rawIds[i])?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
