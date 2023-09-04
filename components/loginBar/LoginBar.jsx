// "use client";
import Link from "next/link";
import { enLang } from "@/locales/en/translation";
import { FaUserAlt } from "react-icons/fa";
import Btn from "@/components/shared/btn/Btn";

export function LoginBar({ USERSTUTES, userData }) {
  return (
    <div className="flex items-center justify-between w-full p-2 bg-zinc-800 dark:bg-neutral-700">
      <UserInfo />
      <UserAction />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="flex items-baseline gap-4 p-2 text-white">
      <FaUserAlt size={"1.2rem"} />
      <p>{enLang.takeAction}</p>
    </div>
  );
}

const UserAction = () => {
  return (
    <>
      <div className="flex items-end gap-2 p-2">
        <Link href={"/login"}>
          <Btn btnType={"success"}>{enLang.login}</Btn>
        </Link>
        <Link href={"/signup"}>
          <Btn btnType={"secondary"} >{enLang.register}</Btn>
        </Link>
      </div>
    </>
  );
};
