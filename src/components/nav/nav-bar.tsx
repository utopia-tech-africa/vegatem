import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Nav links (desktop) */}
        <NavLinks />

        {/* Right: CTA + Mobile controls */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden md:inline-flex text-white rounded cursor-pointer "
            style={{
              background: "linear-gradient(to bottom, #00540a, #35a142)",
            }}
          >
            Contact Us
          </Button>

          {/* Mobile: CTA always visible */}
          <Button
            className="md:hidden text-white rounded cursor-pointer "
            size="sm"
            style={{
              background: "linear-gradient(to bottom, #00540a, #35a142)",
            }}
          >
            Contact Us
          </Button>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
