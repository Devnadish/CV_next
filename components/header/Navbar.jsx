import Link from "next/link";
import { navbarMenuItem } from "./style";
import { LoginBar } from "@/components/header/loginBar/LoginBar";
import { getDictionary } from "@/lib/dictionary";
import Profile from "./Profile";

const Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="sticky left-0 z-50 flex items-center  justify-between w-full overflow-hidden rounded-t-lg top-4 bg-primary px-4">
      {/* <LoginBar lang={lang} /> */}
      <Profile />
      <MenuItems navigation={navigation} lang={lang} />
    </div>
  );
};

export default Navbar;
function MenuItems({ navigation, lang }) {
  const menuStyle = "hover:bg-accent hover:text-accent-foreground";
  return (
    <div className="  shadow-md">
      <ul className="flex items-center justify-start font-normal font-tajawal gap-4 text-sm">
        <Link
          href={`/${lang}`}
          className={menuStyle}
          // className={`${navbarMenuItem} bg-orange-600 text-white`}
          prefetch={false}
        >
          <li>{navigation.home}</li>
        </Link>
        <Link
          href={`/${lang}/price`}
          className={menuStyle}
          // className={`${navbarMenuItem} bg-green-600  text-white`}
          prefetch={false}
        >
          <li>{navigation.price}</li>
        </Link>
        {/* <Link
          href={`/${lang}/worksample`}
          className={`${navbarMenuItem}  bg-yellow-600 text-white`}
          prefetch={false}
        >
          <li>{navigation.sample}</li>
        </Link> */}
        <Link
          href={`/${lang}/blog`}
          as={`/${lang}/blog`}
          className={menuStyle}
          // className={`${navbarMenuItem} bg-red-600 text-white`}
          prefetch={false}
        >
          <div className="flex items-center gap-2 ">{navigation.blog}</div>
        </Link>
      </ul>
    </div>
  );
}
