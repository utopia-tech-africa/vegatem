import { footerBackgroundImg } from "@/assets/img";
import Links from "./links";
import Panacea from "./panacea";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-6 pt-8 md:pt-15 pb-6 md:pb-10 px-4 sm:px-6 md:px-30 rounded-tr-3xl md:rounded-tr-[24px] rounded-tl-3xl md:rounded-tl-[24px] leading-[130%] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={footerBackgroundImg}
          fill
          alt="footer background image"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-primary-1/90" />

      <div className="relative z-10 container mx-auto">
        <Links />
        <Panacea />
      </div>
    </footer>
  );
};

export default Footer;
