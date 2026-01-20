import Image from "next/image";
import { HeroContent } from "./components/hero-content";
import { HeroImage } from "./components/hero-image";
import { heroBgGradient } from "@/assets/img";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="absolute -z-10 inset-y-0 left-0 w-full md:w-[60%]">
        <Image
          src={heroBgGradient}
          alt="Hero background"
          fill
          className="object-left"
          priority
        />
      </div>

      <div className="max-w-480 mx-auto h-full flex items-center flex-col-reverse md:flex-row">
        {/* Left content on desktop, bottom on mobile */}
        <div className="flex-1 min-h-full">
          <HeroContent />
        </div>

        {/* Right image on desktop, top on mobile */}
        <div className="flex-1">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
