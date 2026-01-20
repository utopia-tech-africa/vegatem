import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { PrimaryGradientButton } from "../custom-buttons/primary-gradient-button";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-2">
        {/* Left: Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Middle: Nav links (desktop) */}
        <NavLinks />

        {/* Right: CTA + Mobile controls */}
        <div className="flex items-center gap-3">
          <PrimaryGradientButton className="hidden md:inline-flex">
            Contact Us
          </PrimaryGradientButton>

          {/* Mobile: CTA always visible */}
          <PrimaryGradientButton className="md:hidden">
            Contact Us
          </PrimaryGradientButton>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
