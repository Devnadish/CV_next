import { BsInboxes } from "@react-icons/all-files/bs/BsInboxes";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import LocaleSwitcher from '@/components/toggoleMode/locale-switcher'
import Image from "next/image";
import Link from "next/link";



import dynamic from "next/dynamic";
const DarkLightMode =dynamic(()=>import("../toggoleMode/darkLight/DarkLightMode"))


function Footer() {
  return (
    <div className="flex items-center h-10 text-gray-200 align-middle rounded-b-lg bg-zinc-800 dark:bg-neutral-700 justify-evenly">
      <BsInboxes className="text-xl text-blue-gray-100" />
      <FaPaperPlane className="text-xl text-blue-gray-100" />
      <DarkLightMode />
      {/* <LanguageToggle /> */}
      <Link
        href="/about"
        className={
          "flex items-center justify-center  h-10 hover:text-yellow-400 hover:bg-zinc-400 rounded-full "
        }
      >
        <div className="flex items-center gap-2 ">
          <MyAvatar />
        </div>
      </Link>
      <LocaleSwitcher/>
      {/* <LanguageToggle />  */}
    </div>
  );
}

export default Footer;
const MyAvatar = () => {
  return (
    <div className="relative w-[25px] h-[25px] overflow-hidden border-2 rounded-full shadow-sm">
      <Image
        src={"/assets/about/avatar.jpg"}
        alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
        // fill
        width={29}
        height={29}
        style={{objectFit:"cover"}}

      />
    </div>
  );
};
