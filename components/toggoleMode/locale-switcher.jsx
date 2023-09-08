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
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const ChangaLang =  () => {
    // console.log(language);
    setLanguage(language === "ar" ? "en" : "ar");

    router.push(redirectedPathName(language));
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
                {/* <span className="flex items-center justify-center px-4 text-white bg-black border rounded-lg">
                {locale === "ar" ? "A" : "E"}
              </span> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// export default function LocaleSwitcher() {
//   const pathName = usePathname();

//   const redirectedPathName = (locale) => {
//     if (!pathName) return "/";
//     const segments = pathName.split("/");
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   return (
//     <ul className="flex gap-x-3">
//       {i18n.locales.map((locale) => {
//         return (
//           <li key={locale}>
//             <Link
//               href={redirectedPathName(locale)}
//               className="px-3 py-2 text-white bg-black border rounded-md"
//             >
//               {locale}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
