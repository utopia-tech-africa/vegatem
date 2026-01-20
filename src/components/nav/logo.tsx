import Image from "next/image";
import { logo } from "@/assets/img";

export function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={logo} alt="Vegatem logo" className="h-8 w-auto" priority />
    </div>
  );
}
