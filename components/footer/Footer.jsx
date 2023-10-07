import { BsInboxes } from "@react-icons/all-files/bs/BsInboxes";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import LocaleSwitcher from "@/components/toggoleMode/locale-switcher";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/toggoleMode/ChangeMode";

function MyCv() {
  return (
    <Link
      href="/about"
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

function Footer() {
  return (
    <div className="flex items-center h-10 text-gray-200 align-middle rounded-b-lg bg-primary  justify-evenly">
      <BsInboxes className="text-xl text-blue-gray-100" />
      <FaPaperPlane className="text-xl text-blue-gray-100" />
      <ModeToggle />
      <MyCv />
      <LocaleSwitcher />
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
        // fill
        width={29}
        height={29}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
