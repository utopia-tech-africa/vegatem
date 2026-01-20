import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PartnershipCardProps {
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
}

export default function PartnershipCard({
  image,
  category,
  title,
  description,
}: PartnershipCardProps) {
  return (
    <div className="relative h-120 w-full overflow-hidden object-cover">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover h-full"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <span className="mb-2 text-base font-satoshi leading-[150%] opacity- font-extrabold">
          {category}
        </span>

        <h3 className="mb-3 text-[28px] font-semibold leading-[130%] font-clash">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-[130%] opacity-90 font-satoshi">
          {description}
        </p>

        <Link href="#contact">
          <Button className="w-fit rounded-sm bg-white text-secondary-1 font-satoshi font-bold text-lg hover:bg-white/90 cursor-pointer">
            Reach out
          </Button>
        </Link>
      </div>
    </div>
  );
}
