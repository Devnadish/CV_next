"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [language, setLanguage] = useState("en");
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    console.log(pathName)
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
    // return segments.join("/");
  };


  return (
    <>
      {/* <button onClick={()=>ChangaLang()}>{language}</button> */}
      <ul className="flex gap-x-3">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>
                <div className="relative w-6 ">
                  <Image
                    src={
                      locale === "ar"
                        ? "/assets/locales/saudi-arabia.png"
                        : "/assets/locales/united-states.png"
                    }
                    alt="language selected"
                    width={70}
                    height={70}
                  />
                </div>

              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
