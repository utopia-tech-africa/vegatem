import Image from "next/image";
import { heroImage } from "@/assets/img";

export function HeroImage() {
  return (
    <div className="flex h-full items-center justify-center">
      <Image
        src={heroImage}
        alt="Vegatem hero image"
        className="w-full object-contain"
        priority
      />
    </div>
  );
}
