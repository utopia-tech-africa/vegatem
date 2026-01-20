import { panaceaLogo } from "@/assets/img";
import Image from "next/image";

const Panacea = () => {
  return (
    <div className="flex flex-col items-start md:items-center justify-center mt-6 md:mt-8">
      <div className="flex items-center justify-center gap-2 bg-white pl-4 py-2">
        <Image
          alt="panacea logo"
          src={panaceaLogo}
          className="h-6 md:h-8 w-auto"
          priority
        />
      </div>
      <p className="text-start md:text-center text-base md:text-[18px] md:font-bold font-satoshi text-white leading-[18.2px] mt-3 md:mt-4 md:px-4">
        Vegatem is supplied and distributed by Panacea Pharmacy Limited
      </p>
    </div>
  );
};

export default Panacea;
