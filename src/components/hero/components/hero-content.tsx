import Link from "next/link";
import { PrimaryGradientButton } from "../../custom-buttons/primary-gradient-button";
import { SecondaryButton } from "@/components/custom-buttons/secondary-button";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-5 p-8 md:p-12 text-center md:text-left">
      <h1 className="font-clash font-semibold text-[36px] md:text-[40px] lg:text-[76px] leading-[120%] text-foreground">
        Tough on malaria,
        <br /> Easy on you
      </h1>

      <p className="max-w-xl md:text-lg leading-6">
        Effective, accessible care for malaria-endemic regions worldwide.
        Vegatem brings proven treatment to those who need it most.
      </p>

      <div className="flex sm:flex-row flex-wrap justify-evenly sm:justify-start gap-4 pt-4 mx-auto md:mx-0">
        <Link href="#how-it-works">
          <PrimaryGradientButton size="lg" className="">
            Learn more
          </PrimaryGradientButton>
        </Link>
        <Link href="#contact">
          <SecondaryButton size="lg" className="shadow-sm">
            Become a supplier
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
}
