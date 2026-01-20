import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "../nav/logo";

const Links = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <Logo />
        <p className="text-base text-primary-4 leading-[130%] font-satoshi">
          Distributed by Panacea Pharmacy Limited
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-start md:justify-end w-full md:w-auto">
        <div className="flex flex-col gap-4 md:gap-8 min-w-35">
          <h3 className="font-clash font-semibold text-[16px] md:text-[18px] text-white leading-6.75">
            QUICK LINKS
          </h3>
          <div className="flex flex-col gap-3 md:gap-4 text-base text-white leading-[130%] font-satoshi">
            <a>Fixtures & Results</a>
            <a>Clubs</a>
            <a>News</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-8 min-w-35">
          <h3 className="font-clash font-semibold text-[16px] md:text-[18px] text-white leading-6.75">
            LEGAL
          </h3>
          <div className="flex flex-col gap-3 md:gap-4 text-base text-white leading-[130%] font-satoshi">
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-8 min-w-35">
          <h3 className="font-clash font-semibold text-[16px] md:text-[18px] text-white leading-6.75">
            FOLLOW US
          </h3>
          <div className="flex flex-col gap-3 md:gap-4 text-base text-white leading-[130%] font-satoshi">
            <a href="" className="flex gap-2 items-center">
              <span>
                <Facebook className="w-4 h-4" />
              </span>
              <span> Facebook</span>
            </a>
            <a href="" className="flex gap-2 items-center">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a href="" className="flex gap-2 items-center">
              <Youtube className="w-4 h-4" />
              <span>Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
