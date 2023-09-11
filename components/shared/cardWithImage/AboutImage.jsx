import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "@react-icons/all-files/go/GoLinkExternal";
function AboutImage({ imgx, pres, link = "dd", linkText = "dd" }) {
  return (
    <div className="flex flex-col justify-between w-full max-w-xs min-w-0 bg-white rounded-lg shadow-xl sm:flex sm:flex-col">
      <div className="relative h-10 m-2">
        <Image
          src={imgx}
          alt={imgx}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="flex items-center justify-between w-full gap-4 px-4 py-2 bg-slate-700">
        <p className=" text-2xlsm">{pres}</p>
        <Link href={link}> <GoLinkExternal className="text-white hover:bg-slate-300 hover:text-black" /></Link>
      </div>
    </div>
  );
}

export default AboutImage;
