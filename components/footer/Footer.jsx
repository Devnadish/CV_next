import { BsInboxes } from "@react-icons/all-files/bs/BsInboxes";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import LocaleSwitcher from "@/components/toggoleMode/locale-switcher";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/toggoleMode/ChangeMode";

function MyCv({ lang }) {
  return (
    <Link
      href="/about"
      as={`${lang}/about`}
      className={
        "flex items-center justify-center  rounded-full  animate-pulse duration-2000 "
      }
    >
      <div className="flex items-center gap-2 ">
        <MyAvatar />
      </div>
    </Link>
  );
}

function Footer({ lang }) {
  return (
    <div className="flex flex-col bg-primary  justify-center h-12">
      <div className="flex items-center  text-gray-200 align-middle bg-primary justify-evenly">
        <BsInboxes className="text-xl text-blue-gray-100" />
        <FaPaperPlane className="text-xl text-blue-gray-100" />
        <MyCv lang={lang} />
      </div>
      <div className="flex  bg-primary w-full justify-between">
        <p className="text-xs text-white px-4">beta Version 1.0.12</p>
        <p className="text-xs text-black px-4">
          Waiting for your suggestions or feedback on e-mail
          (devnadish@gmail.com)-(whatsApp +966502699023){" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;

const MyAvatar = () => {
  return (
    <div className="relative w-[25px] h-[25px] overflow-hidden border-1 rounded-full shadow-sm">
      <Image
        src={"/assets/about/avatar.jpg"}
        alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
        width={29}
        height={29}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
