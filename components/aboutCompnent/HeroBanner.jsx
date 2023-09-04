import Image from "next/image";
import { MdWorkOutline } from "react-icons/md";
// import mycv from "../../../../public/assets/about/mycv.jpg";
import { FiDownload } from "react-icons/fi";
import { enLang } from "@/locales/en/translation";
import Btn from "@/components/shared/btn/Btn";



function HeroBanner() {
  return (
    <>
      <div className="flex flex-col  w-[calc(100%-15px)] border rounded-lg bg-neutral-800 lg:flex-row lg:justify-evenly lg:bg-blue-gray-900">
        <div className="flex flex-col flex-1 rounded-lg">
          <div className="relative w-full h-32 overflow-hidden rounded-lg md:h-52" >
            <Image
              alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
              src={"/assets/about/meOnly2.png"}
              fill
              style={{objectFit:"cover"}}
            />
          </div>

          <div className="flex justify-between px-6 text-orange-300 bg-blue-gray-900">
            <IamKhalid />
            <MyExperince />
          </div>
        </div>
        <HireME />
      </div>
      {/* medea area */}
    </>
  );
}
export default HeroBanner;

export function IamKhalid() {
  return (
    <div className="flex justify-start">
      <p> {enLang.himsg} </p>

      <p >
        {enLang.iamKhalid}
      </p>
    </div>
  );
}

export const MyExperince = ({ t }) => {
  return (
    <>
      <div className="flex gap-2">
        <p>
          {enLang.develepor} {/* مطور  */}
        </p>
        <p>
          {enLang.develoerSince} {/* خبرة اكثر  */}
        </p>
      </div>
    </>
  );
};



export const HireME = () => {
  return (
    <>
      <div className="flex justify-around my-4 lg:flex-col lg:gap-4 lg:p-8">
        <Btn
          type="button"
          icon={<MdWorkOutline className="text-xl text-white" />}
        >
          <p> {enLang.waitingForyou} </p>
        </Btn>
        <Btn
          ype="button"
          icon={<FiDownload className="text-xl text-white" />}
        >
          <p>{enLang.download}</p>
        </Btn>
      </div>
    </>
  );
};