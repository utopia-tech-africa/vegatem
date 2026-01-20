import { LocateIcon, Mail, MapPin, Phone } from "lucide-react";

const ConnectSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <span className="font-satoshi font-extrabold text-secondary-1">
        Connect
      </span>

      <h2 className="font-clash font-extrabold text-secondary-1 text-3xl md:text-4xl lg:text-[48px] leading-[120%]">
        We would love to hear from you!
      </h2>

      <div className="flex flex-col gap-6 text-neutral-700 font-satoshi">
        <div className="flex items-center gap-3 text-secodary-4">
          <Mail className="w-5 h-5" />
          <span>info@panacea.com.gh</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5" />
          <span>+233550713124</span>
        </div>

        <div className="flex gap-3">
          <MapPin className="w-5 h-5 mt-1" />
          <div className="flex flex-col">
            <span className="font-semibold">ACCRA</span>
            <span className="text-sm">
              North Kaneshie GA-257-5778 Oshimpa Street
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="w-5 h-5 mt-1" />
          <div className="flex flex-col">
            <span className="font-semibold">KUMASI</span>
            <span className="text-sm">10 Blk VI Asokwa, AK-100-4310</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
