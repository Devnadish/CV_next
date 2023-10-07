// "use client";
import Link from "next/link";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { getDictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";

export async function LoginBar({ USERSTUTES, userData, lang }) {
  const { loginBar } = await getDictionary(lang);
  return (
    <div className="flex items-center justify-between w-full p-2 bg-primary ">
      <UserInfo loginBar={loginBar} lang={lang} />
      <UserAction loginBar={loginBar} lang={lang} />
    </div>
  );
}

function UserInfo({ loginBar }) {
  return (
    <div className="flex items-baseline gap-4 p-2 text-white font-tajawal">
      <FaUserAlt className="w-4 h-4 text-gray-400" />
      <p>{loginBar.loginHint}</p>
    </div>
  );
}

const UserAction = ({ loginBar, lang }) => {
  return (
    <>
      <div className="flex items-end gap-2 p-2 ">
        <Link href={"/login"} as={`/${lang}/login`}>
          <Button variant="blue">{loginBar.login}</Button>
        </Link>
        <Link href={"/signup"} as={`/${lang}/signup`}>
          <Button variant="green">{loginBar.register}</Button>
        </Link>
        <Link href={"/dashboard"} as={`/${lang}/dashboard`}>
          <Button variant="secondary">Dashboard</Button>
        </Link>
      </div>
    </>
  );
};
