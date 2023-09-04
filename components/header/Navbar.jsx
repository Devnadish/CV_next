import Link from "next/link";
import { navbarMenuItem } from "./style";
import { LoginBar } from "@/components/loginBar/LoginBar";
import { getDictionary } from '@/lib/dictionary'




const  Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang)
  return (
    <div className="sticky left-0 z-50 flex flex-col justify-center w-full overflow-hidden rounded-t-lg top-4 text-grey-200">
      <LoginBar />
      <MenuItems navigation={navigation}  lang={lang}/>
    </div>
  );
};

export default Navbar;
function MenuItems({navigation,lang}) {
  return (
    <div className="w-full shadow-md">
      <ul className="flex items-center justify-between w-full font-cairo">
        <Link href={`/${lang}`} className={`${navbarMenuItem} bg-orange-400 text-white`}>
          <li>{navigation.home}</li>
        </Link>
        <Link
          href={`/${lang}/price`}
          className={`${navbarMenuItem} bg-green-400  text-white`}
        >
          <li>{navigation.price}</li>
        </Link>
        <Link href={`/${lang}/worksample`}  className={`${navbarMenuItem}  bg-red-400 text-white`}>
          <li>{navigation.sample}</li>
        </Link>
        <Link
          href={`/${lang}/blog`}
          className={`${navbarMenuItem} bg-red-800 text-white`}
        >
          <div className="flex items-center gap-2 ">
          {navigation.blog}
          </div>
        </Link>
      </ul>
    </div>
  );
}


