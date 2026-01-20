import Image from "next/image";
import {
  howItWorksImage1,
  howItWorksImage2,
  howItWorksImage3,
} from "@/assets/img";
import { cn } from "@/lib/utils";

const images = [howItWorksImage1, howItWorksImage2, howItWorksImage3];

export function HowItWorksImage({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative w-full h-105">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="How Vegatem works"
          fill
          className={cn(
            "object-cover rounded-3xl transition-opacity duration-700",
            index === activeIndex ? "opacity-100" : "opacity-0",
          )}
          priority={index === activeIndex}
        />
      ))}
    </div>
  );
}
