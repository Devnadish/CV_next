// "use client";
import Link from "next/link";
import { enLang } from "@/locales/en/translation";
import { FaUserAlt } from "react-icons/fa";
import Btn from "@/components/shared/btn/Btn";
import { getDictionary } from "@/lib/dictionary";

export async function LoginBar({ USERSTUTES, userData, lang }) {
  const { loginBar } = await getDictionary(lang)
  return (
    <div className="flex items-center justify-between w-full p-2 bg-zinc-800 dark:bg-neutral-700">
      <UserInfo loginBar={loginBar}/>
      <UserAction loginBar={loginBar}/>
    </div>
  );
}

function UserInfo({loginBar}) {
  return (
    <div className="flex items-baseline gap-4 p-2 text-white">
      <FaUserAlt  className="w-4 h-4 text-gray-400" />
      <p>{loginBar.loginHint}</p>
    </div>
  );
}

const UserAction = ({loginBar}) => {
  return (
    <>
      <div className="flex items-end gap-2 p-2">
        <Link href={"/login"}>
          <Btn btnType={"success"}>{loginBar.login}</Btn>
        </Link>
        <Link href={"/signup"}>
          <Btn btnType={"secondary"} >{loginBar.register}</Btn>
        </Link>
      </div>
    </>
  );
};
