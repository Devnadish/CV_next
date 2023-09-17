import Link from "next/link";
import { navbarMenuItem } from "./style";
import { LoginBar } from "@/components/loginBar/LoginBar";
import { getDictionary } from '@/lib/dictionary'




const  Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang)
  return (
    <div className="sticky left-0 z-50 flex flex-col justify-center w-full overflow-hidden rounded-t-lg top-4 text-grey-200">
      <LoginBar lang={lang} />
      <MenuItems navigation={navigation}  lang={lang}/>
    </div>
  );
};

export default Navbar;
function MenuItems({navigation,lang}) {
  return (
    <div className="w-full shadow-md">
      <ul className="flex items-center justify-between w-full font-bold font-tajawal">
        <Link href={`/${lang}`} className={`${navbarMenuItem} bg-orange-600 text-white`}>
          <li>{navigation.home}</li>
        </Link>
        <Link
          href={`/${lang}/price`}
          className={`${navbarMenuItem} bg-green-600  text-white`}
        >
          <li>{navigation.price}</li>
        </Link>
        <Link href={`/${lang}/worksample`}  className={`${navbarMenuItem}  bg-yellow-600 text-white`}>
          <li>{navigation.sample}</li>
        </Link>
        <Link
          href={`/${lang}/blog`}
          as={`/${lang}/blog`}
          className={`${navbarMenuItem} bg-red-600 text-white`}
          prefetch={false}
        >
          <div className="flex items-center gap-2 ">
          {navigation.blog}
          </div>
        </Link>
      </ul>
    </div>
  );
}


