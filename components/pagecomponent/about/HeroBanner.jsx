import Image from "next/image";
import {  FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
// import mycv from "../../../../public/assets/about/mycv.jpg";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import Btn from "@/components/shared/btn/Btn";
import { getDictionary } from "@/lib/dictionary";

async function HeroBanner({ lang }) {
  const {
    page: {
      about: { heroSection },
    },
  } = await getDictionary(lang);
  return (
    <>
      <div className="flex flex-col  w-[calc(100%-15px)] border rounded-lg bg-neutral-800 lg:flex-row lg:justify-evenly lg:bg-blue-gray-900">
        <div className="flex flex-col flex-1 w-full rounded-lg">
          <div className="relative w-full h-32 overflow-hidden rounded-lg md:h-52">
            <Image
              alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
              src={"/assets/about/meOnly2.png"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
            <IamKhalid
              himsg={heroSection.himsg}
              iamKhalid={heroSection.iamKhalid}
              develepor={heroSection.develepor}
              develoerSince={heroSection.develoerSince}
              waitingForyou={heroSection.waitingForyou}
              download={heroSection.download}
            />

        </div>
      </div>
      {/* medea area */}
    </>
  );
}
export default HeroBanner;

export function IamKhalid({
  himsg,
  iamKhalid,
  develepor,
  develoerSince,
  waitingForyou,
  download,
}) {
  return (
    <div className="flex flex-col items-center w-full gap-4 p-4 md:flex-row justify-evenly">
      <div>
        <span className="font-semibold font-tajawal"> {himsg} </span>
        <span className="font-semibold font-tajawal">{iamKhalid}</span>
      </div>
      <div>
        <span className="font-semibold font-tajawal"> {develepor} </span>
        <span className="font-semibold font-tajawal"> {develoerSince} </span>
      </div>
      <div className="flex items-center justify-around gap-4 my-4 ">
        <Btn
          type="button"
          icon={<FaHandshake className="text-xl text-white" />}
        >
          <p className="font-semibold font-tajawal"> {waitingForyou} </p>
        </Btn>
        <Btn ype="button" icon={<FiDownload className="text-xl text-white" />}>
          <p className="font-semibold font-tajawal">{download}</p>
        </Btn>
      </div>
    </div>
  );
}
