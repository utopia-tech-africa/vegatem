import Link from "next/link";

const NAV_LINKS = [
  { label: "About Vegatem®", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Partnerships", href: "#partnerships" },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className=" font-bold text-foreground/80 hover:text-primary-2 transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
